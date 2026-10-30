import { site } from '@/data/site';
import { SEGMENTS, productDescription, productUrl } from '@/data/products';

const abs = (path) => `${site.url}${path}`;

/** Organization + WebSite + one LocalBusiness per office (local SEO / GEO). */
export function siteGraph() {
  const orgId = abs('/#organization');
  const address = (o) => ({
    '@type': 'PostalAddress',
    streetAddress: o.street,
    addressLocality: o.city,
    addressRegion: o.region,
    ...(o.postalCode ? { postalCode: o.postalCode } : {}),
    addressCountry: 'IN',
  });
  const sameAs = site.social.filter((s) => s.href).map((s) => s.href);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: site.name,
        legalName: site.name,
        alternateName: site.shortName,
        url: site.url,
        logo: { '@type': 'ImageObject', url: abs(site.logoPng), width: 512, height: 512 },
        image: abs('/opengraph-image.jpg'),
        description: site.description,
        slogan: site.tagline,
        foundingDate: String(site.foundingYear),
        email: site.contact.email,
        telephone: site.contact.phoneE164,
        numberOfEmployees: { '@type': 'QuantitativeValue', value: site.facts.team },
        areaServed: site.statesServed.map((s) => ({ '@type': 'State', name: s.name, containedInPlace: { '@type': 'Country', name: 'India' } })),
        address: site.offices.map(address),
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: site.contact.phoneE164,
            email: site.contact.email,
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi', 'Gujarati'],
          },
        ],
        knowsAbout: ['Pharmaceutical marketing', 'Orthopaedics', 'Gynaecology', 'General practice', 'Nutraceuticals'],
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        '@type': 'WebSite',
        '@id': abs('/#website'),
        url: site.url,
        name: site.name,
        inLanguage: site.locale,
        publisher: { '@id': orgId },
      },
      ...site.offices.map((o) => ({
        '@type': 'LocalBusiness',
        '@id': abs(`/#office-${o.id}`),
        name: `${site.name} \u2013 ${o.short === 'Head Office' ? 'Head Office, Mumbai' : o.city + ' Office'}`,
        url: abs('/contact'),
        image: abs('/opengraph-image.jpg'),
        telephone: site.contact.phoneE164,
        email: site.contact.email,
        address: address(o),
        hasMap: o.mapsUrl,
        parentOrganization: { '@id': orgId },
        areaServed: site.statesServed.map((s) => s.name),
      })),
    ],
  };
}

export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function faqPage(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function productListSchema(products) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${site.name} product catalogue`,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: abs(productUrl(p)) })),
  };
}

export function productSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': abs(`${productUrl(p)}#product`),
    name: p.name,
    description: productDescription(p),
    category: p.segments.map((s) => SEGMENTS[s]).join(', '),
    image: p.posters.map((x) => abs(x.src)),
    url: abs(productUrl(p)),
    brand: { '@type': 'Brand', name: site.name },
    manufacturer: { '@id': abs('/#organization') },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Dosage form', value: p.form },
      ...(p.composition ? [{ '@type': 'PropertyValue', name: 'Composition', value: p.composition }] : []),
    ],
  };
}
