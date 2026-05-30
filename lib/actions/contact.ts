'use server';

import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guests: string;
  message?: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'send.one.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true' || true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  logger: true,
  debug: true,
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
    console.log('[CONTACT-FORM-DEBUG] ========== FORM SUBMISSION START ==========');
    console.log('[CONTACT-FORM-DEBUG] Timestamp:', timestamp);
    console.log('[CONTACT-FORM-DEBUG] Submitter email:', formData.email);
    console.log('[CONTACT-FORM-DEBUG] Submitter name:', formData.name);
    console.log('[CONTACT-FORM-DEBUG] Submitter phone:', formData.phone);
    console.log('[CONTACT-FORM-DEBUG] Event date:', formData.eventDate);
    console.log('[CONTACT-FORM-DEBUG] Event type:', formData.eventType);
    console.log('[CONTACT-FORM-DEBUG] Guests:', formData.guests);
    console.log('[CONTACT-FORM-DEBUG] Message length:', formData.message?.length || 0);

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
    console.log('[CONTACT-FORM-DEBUG] SMTP_HOST:', process.env.SMTP_HOST);
    console.log('[CONTACT-FORM-DEBUG] SMTP_PORT:', process.env.SMTP_PORT);
    console.log('[CONTACT-FORM-DEBUG] SMTP_USER:', process.env.SMTP_USER);
    console.log('[CONTACT-FORM-DEBUG] CONTACT_TO_EMAIL:', process.env.CONTACT_TO_EMAIL);
    console.log('[CONTACT-FORM-DEBUG] Creating email content...');

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

    console.log('[CONTACT-FORM-DEBUG] Sending email to Kenneth at:', process.env.CONTACT_TO_EMAIL);
    
    // Send email to Kenneth
    const infoToKenneth = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Ny bookinganmodning fra ${formData.name} - ${formData.eventType}`,
      html: toKennethHtml,
    });

    console.log('[CONTACT-FORM-DEBUG] EMAIL TO KENNETH SENT');
    console.log('[CONTACT-FORM-DEBUG] Response:', infoToKenneth.response);
    console.log('[CONTACT-FORM-DEBUG] Message ID:', infoToKenneth.messageId);

    console.log('[CONTACT-FORM-DEBUG] Sending confirmation email to customer at:', formData.email);
    
    // Send confirmation email to customer
    const infoToCustomer = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: formData.email,
      subject: 'Tak for din bookinganmodning',
      html: toCustomerHtml,
    });

    console.log('[CONTACT-FORM-DEBUG] EMAIL TO CUSTOMER SENT');
    console.log('[CONTACT-FORM-DEBUG] Response:', infoToCustomer.response);
    console.log('[CONTACT-FORM-DEBUG] Message ID:', infoToCustomer.messageId);
    console.log('[CONTACT-FORM-DEBUG] ========== FORM SUBMISSION SUCCESS ==========');

    return { success: true, message: 'Din bookinganmodning er blevet sendt. Kenneth kontakter dig snarest.' };
  } catch (error) {
    console.error('[CONTACT-FORM-DEBUG] ========== FORM SUBMISSION ERROR ==========');
    console.error('[CONTACT-FORM-DEBUG] Timestamp:', timestamp);
    console.error('[CONTACT-FORM-DEBUG] Submitter email:', formData.email);
    console.error('[CONTACT-FORM-DEBUG] Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('[CONTACT-FORM-DEBUG] Error message:', error instanceof Error ? error.message : String(error));
    
    if (error instanceof Error) {
      console.error('[CONTACT-FORM-DEBUG] Stack trace:', error.stack);
      return { success: false, error: error.message };
    }
    
    return { success: false, error: 'Der skete en fejl ved sending af formularen. Prøv igen senere.' };
  }
}
