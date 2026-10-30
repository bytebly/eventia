import { site } from '@/data/site';
import { aboutParagraphs, certifications, faqs, mission, segments, values, vision } from '@/data/company';
import { SEGMENTS, products, productUrl } from '@/data/products';

export const dynamic = 'force-static';

/** /llms-full.txt – the complete factual content of the site in one plain-text document. */
export function GET() {
  const u = (p) => `${site.url}${p}`;
  const body = `# ${site.name} \u2013 full reference

${site.description}

## About
${aboutParagraphs.join('\n\n')}

## Vision
${vision.paragraphs.join('\n\n')}

## Mission
${mission.paragraphs.join('\n\n')}

## Values (EVENTIA)
${values.map((v) => `- ${v.letter}: ${v.word} \u2013 ${v.text}`).join('\n')}

## Segments served
${segments.map((s) => `- ${s.name}: ${s.blurb}`).join('\n')}

## Where we operate
${site.statesServed.map((s) => s.name).join(', ')}.

## Offices and contact
${site.offices.map((o) => `- ${o.name}: ${o.lines.join(' ')}`).join('\n')}
- Phone: ${site.contact.phone}
- Email: ${site.contact.email}
- Contact page: ${u('/contact')}

## Certifications
${certifications.map((c) => `- ${c.title} (${c.subtitle}): ${c.details.map(([k, v]) => `${k}: ${v}`).join('; ')}`).join('\n')}

## Frequently asked questions
${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}

## Product catalogue (${products.length} brands)
Product information is for registered medical practitioners; refer to the pack and prescribing information before use.

${products
  .map(
    (p) =>
      `### ${p.name}\n- URL: ${u(productUrl(p))}\n- Dosage form: ${p.form}\n- Segments: ${p.segments.map((s) => SEGMENTS[s]).join(', ')}\n- Positioning: ${p.tagline}${p.composition ? `\n- Composition: ${p.composition}` : ''}${p.extra ? `\n- Note: ${p.extra}` : ''}`,
  )
  .join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600, s-maxage=86400' } });
}
