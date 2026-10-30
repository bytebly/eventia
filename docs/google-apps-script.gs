/**
 * Google Apps Script – receives rows from the website contact form and appends them to a sheet.
 *
 * SETUP (details in docs/google-sheets-setup.md):
 *  1. Create a Google Sheet. Rename the first tab to "Leads" and add this header row:
 *     Submitted At | First Name | Last Name | Email | Phone | Subject | Message | Source
 *  2. Extensions → Apps Script → paste this file.
 *  3. Project Settings → Script properties → add  WEBHOOK_SECRET = <a long random string>
 *  4. Deploy → New deployment → type "Web app" → Execute as: Me → Who has access: Anyone → Deploy.
 *  5. Copy the Web app URL into GOOGLE_SHEETS_WEBHOOK_URL and the same secret into
 *     GOOGLE_SHEETS_WEBHOOK_SECRET (Vercel → Project → Settings → Environment Variables).
 */
function doPost(e) {
  try {
    var secret = PropertiesService.getScriptProperties().getProperty('WEBHOOK_SECRET');
    var body = JSON.parse(e.postData.contents);

    // Reject anything that doesn't carry the shared secret.
    if (!secret || body.secret !== secret) return json_({ ok: false });
    if (!Array.isArray(body.row) || body.row.length > 12) return json_({ ok: false });

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
    if (!sheet) return json_({ ok: false });

    // Cap each cell – a second line of defence behind the website's own validation.
    var row = body.row.map(function (c) { return String(c).slice(0, 2500); });
    sheet.appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false });
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
