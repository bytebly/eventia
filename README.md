# Eventia Pharmaceuticals – Website

Next.js 16 (App Router) · JavaScript · Tailwind CSS v4 · Motion · built for Vercel.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
```
Requires Node.js 20.9+ (Vercel's default is fine).

## Deploy to Vercel
1. Push this folder to GitHub/GitLab → **Add New Project** in Vercel. No build settings needed.
2. **Settings → Environment Variables** (see `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` = your real domain, e.g. `https://www.eventiapharma.com` ← **important for SEO**
   - `GOOGLE_SHEETS_WEBHOOK_URL` and `GOOGLE_SHEETS_WEBHOOK_SECRET` → `docs/google-sheets-setup.md`
   - optional `GOOGLE_SITE_VERIFICATION` (Search Console)
3. After the first deploy, submit `https://your-domain/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Where things live
```
src/app/                 routes: / · about · products · products/[slug] · quality · team · contact · privacy-policy · disclaimer
src/app/api/contact/     secured contact-form endpoint
src/app/not-found.js     404 page          src/app/error.js   runtime error page
src/app/llms.txt, llms-full.txt, sitemap.js, robots.js, manifest.js, opengraph-image.jpg   SEO / GEO files
src/components/          layout/ ui/ home/ about/ products/ contact/ seo/
src/data/                ALL content: site.js · company.js · products.js · navigation.js
src/lib/                 schema.js (structured data) · sheets.js · validation.js · rateLimit.js · security.js
public/images/           photos organised by type · public/icons/ favicons & app icons
```

## Editing content
- **Company details, offices, phone, e-mail, social links** → `src/data/site.js` (the footer, contact page, structured data and `/llms.txt` update automatically).
- **About text, vision, mission, values, FAQ, certificates, team photos** → `src/data/company.js`.
- **Products** → `src/data/products.js`. To add one: put the poster in `public/images/products/`, add an entry. The catalogue, filters, its own page (`/products/<slug>`), sitemap, structured data and `/llms.txt` all update on their own.
- **Menu / footer links** → `src/data/navigation.js`.

## Adding a page
Create `src/app/<slug>/page.js` (copy `src/app/quality/page.js`), add the link in `navigation.js`, and add the path to `staticRoutes` in `src/app/sitemap.js`.

## Adding images
Drop JPG/PNG/WebP files into `public/images/…` and use `<Photo src="/images/…" alt="…" ratio="4/3" sizes="…" />`. Next.js converts to AVIF/WebP and serves the right size per device. Write descriptive `alt` text (it matters for SEO and accessibility).

## SEO & GEO (generative-engine) checklist – what is built in
- Unique `<title>`/description, canonical URL, Open Graph + Twitter cards (generated 1200×630 image) on every page.
- **Structured data (JSON-LD):** Organization, WebSite, two LocalBusiness offices (Mumbai, Ahmedabad) with `areaServed` Gujarat/Maharashtra/Rajasthan, BreadcrumbList, FAQPage, ContactPage, ItemList and a `Product` schema for each of the 33 brands.
- **Local/geo:** `geo.region`/`geo.placename` meta, office addresses with map links, state coverage section.
- **GEO:** `/llms.txt` and `/llms-full.txt` (auto-generated from your data), AI/answer-engine crawlers explicitly allowed in `robots.txt`, plain-language FAQ in the HTML, consistent company facts everywhere.
- Clean sitemap (pages + 33 product pages with images), semantic HTML (one `h1` per page, landmarks, `lang="en-IN"`), self-hosted fonts, optimised images, fast static pages.
- **Favicons / app icons:** `favicon.ico`, SVG icon, 16/32/192/512 PNG, maskable icon, Apple touch icon, Windows tile + `browserconfig.xml`, and a web-app manifest.

## Security summary
- Security headers on every response (`next.config.mjs`): strict CSP, HSTS, `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy, COOP, Permissions-Policy. No `X-Powered-By`.
- Contact API: same-origin/CSRF check, per-IP rate limit, size + content-type limits, strict Zod validation and sanitising, honeypot + timing bot traps, generic errors, `no-store`, secrets stay server-side, spreadsheet formula-injection guard, Google-URL allow-list for the webhook.
- Notes: the rate limiter is per serverless instance (swap in Upstash Redis for strict global limits); the CSP allows inline scripts because Next.js needs them for static pages. If you add analytics, maps or reCAPTCHA, whitelist their domains in `next.config.mjs`.

## Please confirm / fill in
- **Social links** → `src/data/site.js → social` (icons appear once an `href` is set).
- **Head office:** the visiting card says *H/O: Mumbai (Malad West)*, so Mumbai is listed first and Ahmedabad second. Swap the order in `site.offices` if needed. Add the Ahmedabad pincode there too.
- **Certificates:** the ISO 9001:2015 and GMP certificates show certification on 23 Sep 2022 with re-certification due 22 Sep 2025. Update `src/data/company.js` (and the images) if they have been renewed.
- **Product segments** (orthopaedics / gynaecology / physician / general practice) are a sensible grouping made from each product's use; adjust `segments` in `products.js` as you prefer. Prices from the price list were intentionally **not** published.
- **Legal pages** (Privacy Policy, Disclaimer) are sensible starting texts – have them reviewed before launch.
