/**
 * Google Sheets Integration for Contact Form Submissions
 * Saves form submissions as backup persistent log
 */

export interface SubmissionLog {
  timestamp: string;
  locale: string;
  route: string;
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guests: string;
  message: string;
  ownerEmailStatus: string;
  customerEmailStatus: string;
  errorMessage?: string;
  userAgent?: string;
}

export async function saveSubmissionToSheets(submission: SubmissionLog): Promise<boolean> {
  const sheetWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  
  // If no webhook configured, silently fail without blocking the form
  if (!sheetWebhookUrl) {
    console.warn('[sheets] Google Sheets webhook not configured. Skipping submission log.');
    return true; // Don't block form submission
  }

  try {
    console.log('[sheets] Saving submission to Google Sheets...');
    console.log('[sheets] Data:', {
      name: submission.name,
      email: submission.email,
      timestamp: submission.timestamp,
    });

    const response = await fetch(sheetWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission),
    });

    if (!response.ok) {
      console.error('[sheets] Failed to save submission. Status:', response.status);
      console.error('[sheets] Response:', await response.text());
      // Still return true to not block form submission
      return true;
    }

    console.log('[sheets] Submission saved successfully to Google Sheets');
    return true;
  } catch (error) {
    console.error('[sheets] Error saving submission to Google Sheets:', error);
    // Don't block form submission even if sheets fails
    return true;
  }
}
