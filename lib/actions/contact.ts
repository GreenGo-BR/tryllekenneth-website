'use server';

import nodemailer from 'nodemailer';
import { saveSubmissionToSheets, type SubmissionLog } from '../sheets';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guests: string;
  message?: string;
  turnstileToken: string;
  honeypot?: string;
}

const TURNSTILE_HOSTNAMES = new Set(['tryllekenneth.dk', 'www.tryllekenneth.dk']);
const MAX_LENGTHS = {
  name: 120,
  email: 254,
  phone: 40,
  eventDate: 10,
  eventType: 60,
  guests: 5,
  message: 3000,
} as const;

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return false;

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }),
    cache: 'no-store',
  });

  if (!response.ok) return false;
  const result = await response.json() as { success?: boolean; hostname?: string };
  const isProduction = process.env.VERCEL_ENV === 'production';
  const hostnameIsAllowed = typeof result.hostname === 'string' && TURNSTILE_HOSTNAMES.has(result.hostname);

  // Preview uses Cloudflare's official test keys, whose response hostname is not production.
  // Production remains restricted to the verified public hostnames above.
  return result.success === true && (!isProduction || hostnameIsAllowed);
}

function hasExcessiveLength(formData: ContactFormData): boolean {
  return Object.entries(MAX_LENGTHS).some(([key, max]) => {
    const value = formData[key as keyof typeof MAX_LENGTHS];
    return typeof value === 'string' && value.length > max;
  });
}

// `secure` is derived explicitly from SMTP_SECURE:
//   true  => implicit SSL/TLS (port 465) — current one.com config (send.one.com:465)
//   false => STARTTLS (e.g. port 587)
// With SMTP_SECURE="true" this stays true, preserving the current working setup.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'send.one.com',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function submitContactForm(formData: ContactFormData) {
  const timestamp = new Date().toISOString();
  
  try {
    if (formData.honeypot) {
      console.warn('[CONTACT-FORM] Honeypot validation failed');
      return { success: false };
    }

    if (!(await verifyTurnstile(formData.turnstileToken))) {
      console.warn('[CONTACT-FORM] Turnstile validation failed');
      return { success: false };
    }

    if (hasExcessiveLength(formData)) {
      console.warn('[CONTACT-FORM] Length validation failed');
      return { success: false };
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.eventDate || !formData.eventType || !formData.guests) {
      console.error('[CONTACT-FORM-DEBUG] VALIDATION FAILED: Missing required fields');
      console.error('[CONTACT-FORM-DEBUG] - name:', !!formData.name);
      console.error('[CONTACT-FORM-DEBUG] - email:', !!formData.email);
      console.error('[CONTACT-FORM-DEBUG] - phone:', !!formData.phone);
      console.error('[CONTACT-FORM-DEBUG] - eventDate:', !!formData.eventDate);
      console.error('[CONTACT-FORM-DEBUG] - eventType:', !!formData.eventType);
      console.error('[CONTACT-FORM-DEBUG] - guests:', !!formData.guests);
      throw new Error('Missing required fields');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.error('[CONTACT-FORM-DEBUG] EMAIL VALIDATION FAILED: Invalid format -', formData.email);
      throw new Error('Invalid email format');
    }

    console.log('[CONTACT-FORM-DEBUG] All validations passed');
    // Note: SMTP credentials/config are intentionally NOT logged (no secrets in logs).

    // Create HTML email template for Kenneth
    const toKennethHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333;">Ny bookinganmodning fra ${escapeHtml(formData.name)}</h2>
        <p style="color: #666;">Du har modtaget en ny bookinganmodning gennem hjemmesiden.</p>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Kundeoplysninger:</h3>
          <p><strong>Navn:</strong> ${escapeHtml(formData.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(formData.phone)}</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Arrangementdetaljer:</h3>
          <p><strong>Dato:</strong> ${escapeHtml(formData.eventDate)}</p>
          <p><strong>Type:</strong> ${escapeHtml(formData.eventType)}</p>
          <p><strong>Antal gæster:</strong> ${escapeHtml(formData.guests)}</p>
        </div>

        ${formData.message ? `
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Besked:</h3>
            <p>${escapeHtml(formData.message).replace(/\n/g, '<br>')}</p>
          </div>
        ` : ''}

        <p style="color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
          Denne email blev sendt automatisk fra kontaktformularen på TrylleKenneth.dk
        </p>
      </div>
    `;

    // Create confirmation email for customer
    const toCustomerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333;">Tak for din bookinganmodning</h2>
        <p style="color: #666;">Hej ${escapeHtml(formData.name)},</p>
        <p style="color: #666;">Vi har modtaget din bookinganmodning. Kenneth vil kontakte dig snarest på det telefonnummer du har angivet.</p>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Dine detaljer:</h3>
          <p><strong>Navn:</strong> ${escapeHtml(formData.name)}</p>
          <p><strong>Dato:</strong> ${escapeHtml(formData.eventDate)}</p>
          <p><strong>Type:</strong> ${escapeHtml(formData.eventType)}</p>
        </div>

        <p style="color: #666;">Venlig hilsen,<br>TrylleKenneth</p>
        <p style="color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
          Denne email blev sendt automatisk. Venligst svar ikke direkte på denne email.
        </p>
      </div>
    `;

    console.log('[CONTACT-FORM] Sending owner notification');
    
    // Send email to Kenneth
    const infoToKenneth = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Ny bookinganmodning fra ${formData.name} - ${formData.eventType}`,
      html: toKennethHtml,
    });

    console.log('[CONTACT-FORM] Owner notification sent');
    console.log('[CONTACT-FORM] Sending customer confirmation');
    
    // Send confirmation email to customer
    const infoToCustomer = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: formData.email,
      subject: 'Tak for din bookinganmodning',
      html: toCustomerHtml,
    });

    console.log('[CONTACT-FORM] Customer confirmation sent');
    console.log('[CONTACT-FORM] Submission emails sent successfully');

    // Save submission to Google Sheets (async, non-blocking)
    const submissionLog: SubmissionLog = {
      timestamp,
      locale: 'en', // TODO: Get from request context if needed
      route: '/contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      eventDate: formData.eventDate,
      eventType: formData.eventType,
      guests: formData.guests,
      message: formData.message || '',
      ownerEmailStatus: infoToKenneth.response ? 'sent' : 'failed',
      customerEmailStatus: infoToCustomer.response ? 'sent' : 'failed',
    };

    // Fire and forget - don't wait for sheets response
    saveSubmissionToSheets(submissionLog).catch(err => {
      console.error('[CONTACT-FORM-DEBUG] Failed to log to sheets:', err);
    });

    return { success: true, message: 'Din bookinganmodning er blevet sendt. Kenneth kontakter dig snarest.' };
  } catch (error) {
    // Full technical error is logged SERVER-SIDE ONLY (never returned to the browser).
    // SMTP_PASS is never part of these messages, so no secrets are exposed here.
    const technicalMessage = error instanceof Error ? error.message : String(error);
    console.error('[CONTACT-FORM] Submission failed', {
      timestamp,
      error: technicalMessage,
    });

    // Still log the failed submission to sheets (server-side), keeping the technical detail there.
    const failedSubmissionLog: SubmissionLog = {
      timestamp,
      locale: 'en',
      route: '/contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      eventDate: formData.eventDate,
      eventType: formData.eventType,
      guests: formData.guests,
      message: formData.message || '',
      ownerEmailStatus: 'failed',
      customerEmailStatus: 'failed',
      errorMessage: technicalMessage,
    };

    saveSubmissionToSheets(failedSubmissionLog).catch(err => {
      console.error('[CONTACT-FORM-DEBUG] Failed to log error to sheets:', err);
    });

    // Never expose SMTP/technical details to the visitor — the UI shows a friendly, localized message.
    return { success: false };
  }
}
