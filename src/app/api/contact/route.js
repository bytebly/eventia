import { NextResponse } from 'next/server';
import { contactSchema, fieldErrors } from '@/lib/validation';
import { getClientIp, rateLimit } from '@/lib/rateLimit';
import { isAllowedOrigin } from '@/lib/security';
import { appendLead, SheetsNotConfiguredError } from '@/lib/sheets';
import { site } from '@/data/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 10_000;
const MIN_FILL_MS = 2_000; // humans can't fill 6 fields in under 2s
const MAX_AGE_MS = 6 * 60 * 60 * 1000;

const reply = (body, status = 200, headers = {}) =>
  NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });

export async function POST(request) {
  // 1. Cross-site request protection
  if (!isAllowedOrigin(request)) return reply({ ok: false, message: 'Request not allowed.' }, 403);

  // 2. Rate limiting (per IP)
  const limit = rateLimit(`contact:${getClientIp(request)}`, { limit: 5, windowMs: 10 * 60 * 1000 });
  if (!limit.ok) {
    return reply(
      { ok: false, message: 'Too many submissions. Please try again in a few minutes.' },
      429,
      { 'Retry-After': String(limit.retryAfter) },
    );
  }

  // 3. Content-type + size limits
  if (!(request.headers.get('content-type') || '').toLowerCase().startsWith('application/json')) {
    return reply({ ok: false, message: 'Unsupported content type.' }, 415);
  }
  if (Number(request.headers.get('content-length') || 0) > MAX_BODY_BYTES) {
    return reply({ ok: false, message: 'Request too large.' }, 413);
  }

  let raw;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) return reply({ ok: false, message: 'Request too large.' }, 413);
    raw = JSON.parse(text);
  } catch {
    return reply({ ok: false, message: 'Invalid request.' }, 400);
  }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return reply({ ok: false, message: 'Invalid request.' }, 400);

  // 4. Bot traps: honeypot + too-fast submissions get a fake success (so bots learn nothing)
  const startedAt = Number(raw.startedAt);
  if (!Number.isFinite(startedAt)) return reply({ ok: false, message: 'Invalid request.' }, 400);
  const age = Date.now() - startedAt;
  const honeypotHit = typeof raw.company_website === 'string' && raw.company_website.trim() !== '';
  if (honeypotHit || age < MIN_FILL_MS || age > MAX_AGE_MS) return reply({ ok: true });

  // 5. Strict validation + sanitisation (unknown keys are dropped)
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return reply({ ok: false, message: 'Please correct the highlighted fields.', errors: fieldErrors(parsed.error) }, 400);
  }

  // 6. Store the lead
  try {
    await appendLead(parsed.data);
  } catch (err) {
    if (err instanceof SheetsNotConfiguredError) {
      console.error('[contact] Google Sheets is not configured – submission rejected.');
    } else {
      console.error('[contact] Failed to store lead:', err?.message);
    }
    return reply(
      { ok: false, message: `We couldn't send your message right now. Please email us at ${site.contact.email}.` },
      503,
    );
  }

  return reply({ ok: true });
}

// Anything other than POST is rejected (Next.js already answers 405 for undefined methods).
