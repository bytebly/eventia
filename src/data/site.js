/**
 * Global site settings – the single source of truth for company details.
 * Every page, the footer, the structured data (SEO/GEO) and /llms.txt read from here.
 */
const url =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

const maps = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const site = {
  url: url.replace(/\/$/, ''),
  name: 'Eventia Pharmaceuticals',
  shortName: 'Eventia',
  tagline: 'Life is Worth Living',
  description:
    'Pharmaceutical marketing company, established 2019, serving orthopaedic, gynaecology, physician and general practice doctors across Gujarat, Maharashtra and Rajasthan.',
  foundingYear: 2019,
  logo: '/images/brand/eventia-logo.svg',
  logoOnDark: '/images/brand/eventia-logo-on-dark.svg',
  mark: '/images/brand/eventia-mark.svg',
  logoPng: '/icons/icon-512.png',
  themeColor: '#074EA2',
  locale: 'en-IN',

  contact: {
    phone: '+91 98981 81701',
    phoneHref: 'tel:+919898181701',
    phoneE164: '+919898181701',
    email: 'eventiapharmaceutical2019@gmail.com',
  },

  /** Offices. `primary` marks the head office shown first. */
  offices: [
    {
      id: 'mumbai',
      name: 'Head Office – Mumbai',
      short: 'Head Office',
      lines: ['15, Tulsi Nivas, Sainath Road,', 'Malad (West), Mumbai (Bombay) – 400064,', 'Maharashtra, India.'],
      street: '15, Tulsi Nivas, Sainath Road, Malad (West)',
      city: 'Mumbai',
      region: 'Maharashtra',
      regionCode: 'IN-MH',
      postalCode: '400064',
      mapsUrl: maps('15, Tulsi Nivas, Sainath Road, Malad West, Mumbai 400064'),
    },
    {
      id: 'ahmedabad',
      name: 'Ahmedabad Office',
      short: 'Ahmedabad',
      lines: ['210, Parkview Nexus, B/H Shapath Hexa,', 'Opp. Kargil Petrol Pump, S.G. Highway,', 'Ahmedabad, Gujarat, India.'],
      street: '210, Parkview Nexus, B/H Shapath Hexa, Opp. Kargil Petrol Pump, S.G. Highway',
      city: 'Ahmedabad',
      region: 'Gujarat',
      regionCode: 'IN-GJ',
      postalCode: '',
      mapsUrl: maps('Parkview Nexus, Shapath Hexa, S.G. Highway, Ahmedabad'),
    },
  ],

  /** Where the company operates (used for the "Coverage" section and local SEO). */
  statesServed: [
    { name: 'Gujarat', code: 'IN-GJ' },
    { name: 'Maharashtra', code: 'IN-MH' },
    { name: 'Rajasthan', code: 'IN-RJ' },
  ],

  facts: {
    clients: 3000,
    clientsLabel: '3,000+',
    team: 40,
    teamLabel: '40+',
  },

  /** Add your real profile URLs – icons appear automatically for every entry that has an href. */
  social: [
    { name: 'Instagram', href: '' },
    { name: 'Facebook', href: '' },
    { name: 'LinkedIn', href: '' },
  ],
};

export const primaryOffice = site.offices[0];
