import { site } from '@/data/site';
import { products, productUrl } from '@/data/products';

export const dynamic = 'force-static';

/** /llms.txt – a concise, machine-readable summary for AI assistants and answer engines (llmstxt.org convention). */
export function GET() {
  const u = (p) => `${site.url}${p}`;
  const body = `# ${site.name}

> ${site.description}

${site.name} was established in ${site.foundingYear}. It works with around ${site.facts.clients.toLocaleString('en-IN')} clients and a team of about ${site.facts.team} people, and is certified to ISO 9001:2015 (Quality Management System) and GMP. Offices: ${site.offices.map((o) => `${o.name} (${o.city}, ${o.region})`).join('; ')}. Phone: ${site.contact.phone}. Email: ${site.contact.email}.

## Key pages
- [Home](${u('/')}): Overview of ${site.name}, segments, featured products and certifications
- [About Us](${u('/about')}): Company story, vision, mission, values, coverage and FAQ
- [Products](${u('/products')}): Full catalogue of ${products.length} brands with filters by segment
- [Quality](${u('/quality')}): ISO 9001:2015 and GMP certificates
- [Our Team](${u('/team')}): Leadership and team
- [Contact](${u('/contact')}): Offices, phone, email and enquiry form

## Products
${products.map((p) => `- [${p.name}](${u(productUrl(p))}): ${p.form}. ${p.tagline}.`).join('\n')}

## More
- [Full details for AI assistants](${u('/llms-full.txt')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600, s-maxage=86400' } });
}
