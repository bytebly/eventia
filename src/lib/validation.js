import { z } from 'zod';

/** Remove control characters, normalise unicode, collapse whitespace. */
export function normalize(value, { multiline = false } = {}) {
  let s = String(value ?? '').normalize('NFC');
  // strip C0/C1 control chars (keep \n and \t only for multi-line fields)
  s = s.replace(multiline ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g : /[\u0000-\u001F\u007F-\u009F]/g, ' ');
  // strip zero-width / bidi-override characters often used to disguise payloads
  s = s.replace(/[\u200B-\u200F\u202A-\u202E\u2060-\u2064\uFEFF]/g, '');
  if (multiline) {
    s = s.replace(/\r\n?/g, '\n').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n');
  } else {
    s = s.replace(/\s+/g, ' ');
  }
  return s.trim();
}

const text = (label, { min = 1, max, multiline = false } = {}) =>
  z
    .string({ error: `${label} is required` })
    .transform((v) => normalize(v, { multiline }))
    .pipe(
      z
        .string()
        .min(min, min <= 1 ? `${label} is required` : `${label} must be at least ${min} characters`)
        .max(max, `${label} must be at most ${max} characters`),
    );

export const contactSchema = z.object({
  firstName: text('First name', { max: 60 }),
  lastName: text('Last name', { max: 60 }),
  email: z
    .string({ error: 'Email address is required' })
    .transform((v) => normalize(v).toLowerCase())
    .pipe(z.email('Enter a valid email address').max(254, 'Email address is too long')),
  phone: text('Phone', { min: 6, max: 20 }).pipe(
    z.string().regex(/^\+?[\d\s().-]{6,20}$/, 'Enter a valid phone number'),
  ),
  subject: text('Subject', { min: 3, max: 120 }),
  message: text('Message', { min: 10, max: 2000, multiline: true }),
});

/** Flatten zod issues → { field: 'first message' } */
export function fieldErrors(error) {
  const out = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
