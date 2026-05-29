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
  try {
    console.log('[v0] Contact form submission received from:', formData.email);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.eventDate || !formData.eventType || !formData.guests) {
      console.error('[v0] Missing required fields');
      throw new Error('Missing required fields');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.error('[v0] Invalid email format');
      throw new Error('Invalid email format');
    }

    console.log('[v0] Creating email content...');

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

    console.log('[v0] Sending email to Kenneth...');
    
    // Send email to Kenneth
    const infoToKenneth = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Ny bookinganmodning fra ${formData.name} - ${formData.eventType}`,
      html: toKennethHtml,
    });

    console.log('[v0] Email sent successfully to Kenneth:', infoToKenneth.response);

    console.log('[v0] Sending confirmation email to customer...');
    
    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: formData.email,
      subject: 'Tak for din bookinganmodning',
      html: toCustomerHtml,
    });

    console.log('[v0] Confirmation email sent to customer');

    return { success: true, message: 'Din bookinganmodning er blevet sendt. Kenneth kontakter dig snarest.' };
  } catch (error) {
    console.error('[v0] Contact form error:', error);
    
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    
    return { success: false, error: 'Der skete en fejl ved sending af formularen. Prøv igen senere.' };
  }
}
