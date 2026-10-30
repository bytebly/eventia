import { site } from '@/data/site';

/**
 * CSRF / cross-site protection for state-changing requests.
 * Browsers always send an Origin header on cross-origin and POST fetches, and it can't be
 * forged by a web page, so we require it to match one of our own hosts.
 */
export function isAllowedOrigin(request) {
  const isProd = process.env.NODE_ENV === 'production';
  const origin = request.headers.get('origin');
  const fetchSite = request.headers.get('sec-fetch-site');

  // Modern browsers tell us when a request comes from another site – refuse it.
  if (fetchSite && !['same-origin', 'same-site', 'none'].includes(fetchSite)) return false;

  if (!origin) return !isProd; // allow curl/tests in development only

  let originHost;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  const allowed = new Set(
    [
      request.headers.get('host'),
      new URL(site.url).host,
      process.env.VERCEL_URL,
      process.env.VERCEL_BRANCH_URL,
      process.env.VERCEL_PROJECT_PRODUCTION_URL,
      ...(process.env.ALLOWED_ORIGINS || '').split(','),
    ]
      .map((h) => (h || '').trim().toLowerCase())
      .filter(Boolean),
  );

  return allowed.has(originHost.toLowerCase());
}
