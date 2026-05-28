import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Validate required environment variables
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.warn(`Missing environment variables for email: ${missingEnvVars.join(', ')}`);
}

// Create transporter using SMTP credentials from one.com
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'send.one.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true' || true, // SSL/TLS on port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  logger: true,
  debug: true,
});

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guests: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    console.log('[v0] Contact form submission received from:', body.email);

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.eventDate || !body.eventType || !body.guests) {
      console.error('[v0] Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      console.error('[v0] Invalid email format:', body.email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    if (body.phone.length < 8) {
      console.error('[v0] Invalid phone format');
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      <h2>Ny kontaktformular fra tryllekenneth.dk</h2>
      
      <h3>Kundeoplysninger:</h3>
      <p><strong>Navn:</strong> ${escapeHtml(body.name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(body.email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(body.phone)}</p>
      
      <h3>Arrangementsoplysninger:</h3>
      <p><strong>Arrangementstype:</strong> ${escapeHtml(body.eventType)}</p>
      <p><strong>Dato:</strong> ${escapeHtml(body.eventDate)}</p>
      <p><strong>Antal gæster:</strong> ${escapeHtml(body.guests)}</p>
      
      <h3>Besked:</h3>
      <p>${escapeHtml(body.message).replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>Denne e-mail blev sendt fra kontaktformularen på tryllekenneth.dk</small></p>
    `;

    // Send email
    const mailOptions = {
      from: process.env.SMTP_USER || 'noreply@tryllekenneth.dk',
      to: process.env.CONTACT_TO_EMAIL || 'kenneth@tryllekenneth.dk',
      replyTo: body.email,
      subject: `Ny bookinganmodning fra ${escapeHtml(body.name)} - ${body.eventType}`,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);
    console.log('[v0] Email sent successfully to Kenneth');

    // Send confirmation email to user
    const confirmationContent = `
      <h2>Tak for din henvendelse!</h2>
      <p>Hej ${escapeHtml(body.name)},</p>
      <p>Vi har modtaget din bookinganmodning og vender tilbage til dig snarest muligt.</p>
      <p>Du kan også kontakte os direkte på:</p>
      <p><strong>Telefon:</strong> +45 40 85 27 28</p>
      <p>Vi glæder os til at høre fra dig!</p>
      <p>Venlig hilsen,<br>Kenneth</p>
    `;

    const confirmationMailOptions = {
      from: process.env.SMTP_USER || 'noreply@tryllekenneth.dk',
      to: body.email,
      subject: 'Vi har modtaget din bookinganmodning - Tryllekenneth.dk',
      html: confirmationContent,
    };

    // Send confirmation email (non-blocking)
    transporter.sendMail(confirmationMailOptions).catch(err => {
      console.error('[v0] Error sending confirmation email:', err.message);
    });

    console.log('[v0] Contact form processed successfully');
    return NextResponse.json(
      { 
        success: true,
        message: 'E-mail sent successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[v0] Contact form error:', errorMessage);
    console.error('[v0] SMTP Configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      secure: process.env.SMTP_SECURE,
    });
    return NextResponse.json(
      { error: 'Desculpe, não conseguimos enviar sua mensagem. Por favor, tente novamente mais tarde ou ligue para +45 40 85 27 28.' },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, char => map[char]);
}
