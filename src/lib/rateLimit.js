/**
 * Minimal in-memory sliding-window rate limiter.
 *
 * NOTE: on Vercel every serverless instance has its own memory, so this is a
 * best-effort first line of defence (it stops a single client hammering one instance).
 * For strict global limits, swap the Map for a shared store such as Upstash Redis
 * (@upstash/ratelimit) – the function signature below can stay the same.
 */
const buckets = new Map();
const MAX_KEYS = 5000;

export function rateLimit(key, { limit = 5, windowMs = 10 * 60 * 1000 } = {}) {
  const now = Date.now();
  const hits = (buckets.get(key) || []).filter((t) => now - t < windowMs);

  if (hits.length >= limit) {
    buckets.set(key, hits);
    return { ok: false, retryAfter: Math.ceil((windowMs - (now - hits[0])) / 1000) };
  }

  hits.push(now);
  buckets.set(key, hits);

  // Opportunistic cleanup so the map can't grow without bound.
  if (buckets.size > MAX_KEYS) {
    for (const [k, v] of buckets) {
      if (!v.some((t) => now - t < windowMs)) buckets.delete(k);
    }
  }
  return { ok: true, remaining: limit - hits.length };
}

export function getClientIp(request) {
  // On Vercel, x-forwarded-for is set by the platform (client-supplied values are overwritten).
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim().slice(0, 64);
  return (request.headers.get('x-real-ip') || 'unknown').slice(0, 64);
}
