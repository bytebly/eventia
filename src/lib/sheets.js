/**
 * Google Sheets adapter for the contact form.
 *
 * ▸ This is the ONE file to edit when you wire up Google Sheets.
 * ▸ The default implementation posts to a Google Apps Script web app (no extra npm
 *   packages, no service-account JSON to protect). Setup guide: docs/google-sheets-setup.md
 * ▸ Prefer the official Sheets API with a service account? Replace the body of
 *   `appendLead` (see the commented example at the bottom). The API route doesn't care
 *   how rows get stored – it only calls `appendLead(lead)` and handles thrown errors.
 */

export class SheetsNotConfiguredError extends Error {
  constructor() {
    super('Google Sheets destination is not configured');
    this.name = 'SheetsNotConfiguredError';
  }
}

/**
 * Spreadsheet formula-injection guard: a cell that starts with = + - @ is executed as a
 * formula by Sheets/Excel. Prefixing an apostrophe makes it plain text.
 */
export function neutralizeFormula(value) {
  const s = String(value ?? '');
  return /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
}

function assertGoogleUrl(raw) {
  let u;
  try {
    u = new URL(raw);
  } catch {
    throw new Error('GOOGLE_SHEETS_WEBHOOK_URL is not a valid URL');
  }
  const okHost = u.hostname === 'script.google.com' || u.hostname.endsWith('.googleusercontent.com');
  if (u.protocol !== 'https:' || !okHost) {
    throw new Error('GOOGLE_SHEETS_WEBHOOK_URL must be an https://script.google.com/... URL');
  }
  return u.toString();
}

/**
 * @param {{firstName:string,lastName:string,email:string,phone:string,subject:string,message:string}} lead
 */
export async function appendLead(lead) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  // Column order = the order of this array. Keep it in sync with your sheet header row.
  const row = [
    new Date().toISOString(),
    lead.firstName,
    lead.lastName,
    lead.email,
    lead.phone,
    lead.subject,
    lead.message,
    'website-contact-form',
  ].map(neutralizeFormula);

  if (!url) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[contact] GOOGLE_SHEETS_WEBHOOK_URL not set – lead was NOT saved (dev only):', row);
      return;
    }
    throw new SheetsNotConfiguredError();
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(assertGoogleUrl(url), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, row }),
      redirect: 'follow',
      cache: 'no-store',
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`Sheets webhook responded with ${res.status}`);
    const data = await res.json().catch(() => null);
    if (data && data.ok === false) throw new Error('Sheets webhook rejected the row');
  } finally {
    clearTimeout(timer);
  }
}

/* ── Alternative: official Google Sheets API (service account) ─────────────────────────
   npm i googleapis   →   env: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID

   import { google } from 'googleapis';
   const auth = new google.auth.JWT({
     email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
     key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
   });
   await google.sheets({ version: 'v4', auth }).spreadsheets.values.append({
     spreadsheetId: process.env.GOOGLE_SHEET_ID,
     range: 'Leads!A:H',
     valueInputOption: 'RAW',
     requestBody: { values: [row] },
   });
   (Remember to share the sheet with the service-account e-mail as an Editor.)
──────────────────────────────────────────────────────────────────────────────────────── */
