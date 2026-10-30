# Connecting the contact form to Google Sheets

The form already validates, rate-limits and sanitises every submission on the server.
The **only** thing left is telling it where to save the row. That lives in one file:
`src/lib/sheets.js`.

## Option A – Apps Script webhook (recommended, ~5 minutes, no extra packages)

1. Create a Google Sheet. Rename the first tab to **Leads** and add this header row:
   `Submitted At | First Name | Last Name | Email | Phone | Subject | Message | Source`
2. **Extensions → Apps Script**, paste the contents of `docs/google-apps-script.gs`.
3. **Project Settings → Script properties** → add `WEBHOOK_SECRET` with a long random value.
4. **Deploy → New deployment → Web app** → Execute as *Me*, access *Anyone* → Deploy. Copy the URL.
5. In **Vercel → Project → Settings → Environment Variables** add:
   - `GOOGLE_SHEETS_WEBHOOK_URL` = the web-app URL (must start with `https://script.google.com/`)
   - `GOOGLE_SHEETS_WEBHOOK_SECRET` = the same secret as step 3
6. Redeploy. Submit the form once to confirm a row appears.

Locally, copy `.env.example` → `.env.local` and fill the same two values. Without them, local
development logs the lead to the terminal and returns success; **production returns a friendly
error** instead of silently losing leads.

## Option B – Official Sheets API (service account)

If you prefer the Google Sheets API, replace the body of `appendLead()` in `src/lib/sheets.js`.
A ready-to-paste example is at the bottom of that file. Remember to share the sheet with the
service-account e-mail as an Editor and keep the key only in Vercel environment variables.

## Changing the columns

Edit the `row` array in `appendLead()` (same order as your header row). Values beginning with
`= + - @` are automatically prefixed so they can never run as spreadsheet formulas.
