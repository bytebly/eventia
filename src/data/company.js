const img = (p) => `/images/${p}.webp`;

export const segments = [
  {
    slug: 'orthopaedics',
    name: 'Orthopaedics',
    icon: 'Bone',
    blurb: 'Pain relief, muscle relaxants, bone health and nerve support for orthopaedic practice.',
  },
  {
    slug: 'gynaecology',
    name: 'Gynaecology',
    icon: 'Baby',
    blurb: 'Pre-conception, pregnancy and women\u2019s health nutrition and care.',
  },
  {
    slug: 'physician',
    name: 'Physician',
    icon: 'Stethoscope',
    blurb: 'Everyday therapies for gastro-intestinal, respiratory, neuro and nutritional needs.',
  },
  {
    slug: 'general-practice',
    name: 'General Practice',
    icon: 'HeartPulse',
    blurb: 'Dependable anti-infectives, cough and cold care and supportive nutrition.',
  },
];

export const aboutParagraphs = [
  'Eventia Pharmaceuticals was established in 2019 with a simple purpose: to make quality pharmaceutical products accessible through reliable sourcing, responsible marketing and strong business partnerships.',
  'Today we work with around 3,000 clients and a dedicated team of about 20 people, serving doctors and healthcare professionals in the orthopaedic, gynaecology, physician and general practice segments across Gujarat, Maharashtra and Rajasthan.',
  'Integrity, transparency and a commitment to customer satisfaction guide every relationship we build \u2013 with healthcare professionals, pharmaceutical manufacturers and business partners alike.',
  'Our operations are backed by ISO 9001:2015 (Quality Management System) and GMP certifications, reflecting our focus on professionalism and ethical business practices.',
];

export const vision = {
  title: 'Our Vision',
  paragraphs: [
    'Our vision is to become a trusted and recognized name in the pharmaceutical industry by building strong partnerships, promoting quality pharmaceutical products, and delivering reliable business solutions.',
    'We aspire to create long-term relationships with pharmaceutical manufacturers, healthcare professionals, and business partners while contributing to a healthier society through ethical practices, continuous growth, and a commitment to excellence.',
  ],
};

export const mission = {
  title: 'Our Mission',
  paragraphs: [
    'Our mission is to make quality pharmaceutical products accessible through reliable sourcing, responsible marketing, and strong business partnerships. We strive to build lasting relationships with healthcare professionals, pharmaceutical manufacturers, and business partners through integrity, transparency, and a commitment to customer satisfaction.',
    'We aim to contribute to a healthier society by supporting the responsible availability and promotion of pharmaceutical products while maintaining high standards of professionalism and ethical business practices.',
  ],
};

/** The EVENTIA acrostic from the company values poster. */
export const values = [
  { letter: 'E', word: 'Explorer', text: 'is for explorer, always ready for the next journey' },
  { letter: 'V', word: 'Volunteer', text: 'is for volunteer, your giving side' },
  { letter: 'E', word: 'Eager', text: 'is for eager, let\u2019s get started!' },
  { letter: 'N', word: 'Nurturing', text: 'is for nurturing, the care you provide to all' },
  { letter: 'T', word: 'Try', text: 'is for try, as hard as you can' },
  { letter: 'I', word: 'Ideals', text: 'is for ideals, no higher!' },
  { letter: 'A', word: 'Admirable', text: 'is for admirable, you certainly are!' },
];

export const certifications = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    image: img('certificates/eventia-iso-9001-2015-certificate'),
    alt: 'Eventia Pharmaceuticals ISO 9001:2015 Quality Management System certificate issued by IMC',
    details: [
      ['Standard', 'ISO 9001:2015 \u2013 Quality Management System'],
      ['Scope', 'Pharmaceuticals, Nutraceuticals, Ayurvedic'],
      ['Certified by', 'IMC'],
      ['Date of certification', '23 September 2022'],
    ],
  },
  {
    id: 'gmp',
    title: 'GMP Certified',
    subtitle: 'Good Manufacturing Practice',
    image: img('certificates/eventia-gmp-certificate'),
    alt: 'Eventia Pharmaceuticals Good Manufacturing Practice (GMP) certificate issued by IMC',
    details: [
      ['Standard', 'Good Manufacturing Practice (GMP) system, as laid down by the World Health Organization'],
      ['Scope', 'Pharmaceuticals, Nutraceuticals, Ayurvedic'],
      ['Certified by', 'IMC'],
      ['Date of certification', '23 September 2022'],
    ],
  },
];

export const owner = {
  name: 'Jigar Suthar',
  role: 'Owner',
  image: img('people/jigar-suthar-owner'),
  alt: 'Jigar Suthar, owner of Eventia Pharmaceuticals, at a medical exhibition stall',
};

export const teamPhotos = {
  group: {
    image: img('team/eventia-team-group'),
    alt: 'The Eventia Pharmaceuticals team standing together in company uniform polo shirts',
  },
  outing: {
    image: img('team/eventia-team-outing'),
    alt: 'Eventia Pharmaceuticals team members on a group outing',
  },
};

export const moments = [
  {
    title: 'At medical exhibitions',
    text: 'Meeting doctors and healthcare professionals face to face and presenting our product range at medical events.',
    image: img('people/jigar-suthar-owner'),
    alt: 'Eventia stall at a medical exhibition with product banners',
    position: 'center 25%',
  },
  {
    title: 'Conferences and conversations',
    text: 'Building long-term relationships with healthcare professionals at conferences across our regions.',
    image: img('events/eventia-at-medical-conference'),
    alt: 'Eventia representatives at a medical conference',
    position: 'center 30%',
  },
  {
    title: 'Recognising excellence',
    text: 'Celebrating achievements and partnerships with presentations and awards at professional meetings.',
    image: img('events/eventia-award-presentation'),
    alt: 'A plaque being presented at an Eventia professional meeting',
    position: 'center',
  },
];

export const gallery = [
  { title: 'Our team', image: teamPhotos.group.image, alt: teamPhotos.group.alt, className: 'col-span-2 row-span-2', position: 'center 30%' },
  { title: 'Team outing', image: teamPhotos.outing.image, alt: teamPhotos.outing.alt, className: 'col-span-2', position: 'center 35%' },
  { title: 'Our office', image: img('office/eventia-office-interior'), alt: 'Inside the Eventia Pharmaceuticals office with the Eventia sign on the wall', className: '', position: 'center' },
  { title: 'Office entrance', image: img('office/eventia-office-entrance'), alt: 'Entrance of the Eventia Pharmaceuticals office', className: '', position: 'center 30%' },
  { title: 'Medical exhibitions', image: img('people/jigar-suthar-owner'), alt: moments[0].alt, className: '', position: 'center 20%' },
  { title: 'Conferences', image: img('events/eventia-at-medical-conference'), alt: moments[1].alt, className: '', position: 'center 25%' },
  { title: 'Awards and meetings', image: img('events/eventia-award-presentation'), alt: moments[2].alt, className: 'col-span-2', position: 'center' },
];

export const faqs = [
  {
    q: 'What is Eventia Pharmaceuticals?',
    a: 'Eventia Pharmaceuticals is a pharmaceutical marketing company established in 2019. It promotes a portfolio of quality pharmaceutical products to doctors and healthcare professionals in the orthopaedic, gynaecology, physician and general practice segments.',
  },
  {
    q: 'Where does Eventia Pharmaceuticals operate?',
    a: 'Eventia operates in Gujarat, Maharashtra and Rajasthan, with offices in Mumbai (head office, Malad West) and Ahmedabad (S.G. Highway).',
  },
  {
    q: 'Which medical segments does Eventia serve?',
    a: 'Eventia serves four segments: orthopaedics, gynaecology, physician and general practice.',
  },
  {
    q: 'Is Eventia Pharmaceuticals certified?',
    a: 'Yes. Eventia holds an ISO 9001:2015 Quality Management System certificate and a Good Manufacturing Practice (GMP) certificate, both issued by IMC on 23 September 2022 for pharmaceuticals, nutraceuticals and ayurvedic products.',
  },
  {
    q: 'How large is the Eventia team and client base?',
    a: 'Eventia works with around 3,000 clients and has a team of about 20 people.',
  },
  {
    q: 'How can I contact Eventia Pharmaceuticals or become a business partner?',
    a: 'Call +91 98981 81701, email eventiapharmaceutical2019@gmail.com, or use the contact form on the Contact page. Eventia welcomes enquiries from healthcare professionals, pharmaceutical manufacturers and business partners.',
  },
];
