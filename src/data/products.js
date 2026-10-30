/**
 * Product catalogue. One entry = one brand page at /products/<slug>.
 *
 * HOW TO ADD A PRODUCT
 *  1. Drop the poster in  public/images/products/  (JPG/PNG/WebP – Next.js optimises it).
 *  2. Add an entry below. `posters` is a list so a brand can show more than one visual aid.
 *  3. That's it – the catalogue, filters, product page, sitemap, structured data and /llms.txt update automatically.
 *
 * `composition` is transcribed from the product literature – leave it out if you are not sure.
 */
const poster = (name, alt) => ({ src: `/images/products/eventia-${name}.webp`, alt });

export const SEGMENTS = {
  orthopaedics: 'Orthopaedics',
  gynaecology: 'Gynaecology',
  physician: 'Physician',
  'general-practice': 'General Practice',
};

export const products = [
  {
    slug: 'foleva-xt',
    name: 'Foleva XT',
    form: 'Tablet',
    segments: ['gynaecology', 'physician'],
    tagline: 'In pre-conception, pregnancy and lactation',
    composition: 'Calcium Carbonate 1250 mg, Vitamin D3 2000 IU, Methylcobalamin 1500 mcg, L-Methylfolate 1000 mcg, Pyridoxal-5-Phosphate 20 mg',
    extra: 'Also positioned for T2 DM, thyroid-parathyroid disorders and hyper-homocysteinemia induced osteoporosis.',
    posters: [
      poster('foleva-xt-pregnancy', 'Foleva XT tablet product literature for pre-conception, pregnancy and lactation'),
      poster('foleva-xt-bone-health', 'Foleva XT tablet product literature for T2 DM, thyroid-parathyroid disorders and osteoporosis'),
    ],
  },
  {
    slug: 'evamin-forte',
    name: 'Evamin Forte',
    form: 'Capsule',
    segments: ['gynaecology', 'physician'],
    tagline: 'The best amino acids supplementation',
    composition: '8 essential amino acids, multivitamins with multiminerals',
    posters: [
      poster('evamin-forte', 'Evamin Forte capsule product literature'),
      poster('evamin-forte-2', 'Evamin Forte capsule amino acid supplementation in diabetes'),
    ],
  },
  {
    slug: 'evamin-sn',
    name: 'Evamin SN',
    form: 'Infusion',
    segments: ['gynaecology', 'physician'],
    tagline: 'The best amino acids',
    composition: 'Crystalline, free, absorbable amino acid infusion',
    posters: [
      poster('evamin-sn', 'Evamin SN amino acid infusion product literature'),
      poster('evamin-sn-2', 'Evamin SN amino acid infusion clinical indications'),
    ],
  },
  {
    slug: 'evamin-rg',
    name: 'Evamin-RG',
    form: 'Sachet',
    segments: ['gynaecology'],
    tagline: 'Let the miracle of life thrive \u2013 in precious pregnancies',
    composition: 'L-Arginine 5 gm, Proanthocyanidin 75 mg and Folic Acid 1 mg granules',
    posters: [poster('evamin-rg', 'Evamin-RG sachet granules product literature for precious pregnancies')],
  },
  {
    slug: 'evamin-rgl',
    name: 'Evamin-RGL',
    form: 'Tablet',
    segments: ['gynaecology'],
    tagline: 'In high risk pregnancy',
    composition: 'L-Arginine 1000 mg + Lycopene 1500 mcg',
    posters: [poster('evamin-rgl', 'Evamin-RGL tablet product literature for high risk pregnancy')],
  },
  {
    slug: 'torcheva',
    name: 'Torcheva',
    form: 'Capsule',
    segments: ['gynaecology'],
    tagline: 'Management of T-O-R-C-H infection during pregnancy',
    composition: 'Sixteen Ayurvedic herbs preparation',
    posters: [poster('torcheva', 'Torcheva capsule product literature for T-O-R-C-H infection during pregnancy')],
  },
  {
    slug: 'eq-100',
    name: 'EQ 100',
    form: 'Tablet',
    segments: ['gynaecology'],
    tagline: 'The fertility enhancer',
    composition: 'Pure trans-isomer ubidecarenone (CoQ10), L-Arginine, Piperine, Omega-3 fatty acids, Lycopene, Vitamin B12, natural mixed carotenoids and multi minerals',
    posters: [poster('eq-100', 'EQ 100 tablet CoQ10 fertility enhancer product literature')],
  },
  {
    slug: 'crampsol',
    name: 'Crampsol',
    form: 'Tablet / Powder',
    segments: ['gynaecology', 'orthopaedics'],
    tagline: 'Maintain electrolytic physiological balance \u2013 when cramps disturb the normal lifestyle of your patients',
    extra: 'Available as tablet, 180 gm powder and 15 gm powder.',
    posters: [
      poster('crampsol', 'Crampsol product literature on cramps including cramps in pregnancy'),
      poster('crampsol-powder', 'Crampsol powder product literature on electrolytic balance'),
    ],
  },
  {
    slug: 'synobone',
    name: 'Synobone',
    form: 'Tablet',
    segments: ['orthopaedics'],
    tagline: 'When brittle and weak joints lead to a painful condition',
    extra: 'Accelerates fracture healing and increases bone strength.',
    posters: [poster('synobone', 'Synobone tablet product literature for bone and joint health')],
  },
  {
    slug: 'evaflem-th4',
    name: 'Evaflem-TH4',
    form: 'Tablet',
    segments: ['orthopaedics'],
    tagline: 'The feather touch skeletal muscle relaxant',
    composition: 'Aceclofenac 100 mg + Paracetamol 325 mg + Thiocolchicoside 4 mg',
    posters: [poster('evaflem-th4', 'Evaflem-TH4 tablet skeletal muscle relaxant product literature')],
  },
  {
    slug: 'evaflem-sp',
    name: 'Evaflem SP',
    form: 'Tablet',
    segments: ['orthopaedics'],
    tagline: 'Faster, safer and better against inflammatory pain',
    composition: 'Serratiopeptidase 15 mg (enteric coated granules) + Paracetamol 325 mg + Aceclofenac 100 mg',
    posters: [poster('evaflem-sp', 'Evaflem SP tablet product literature for inflammatory pain')],
  },
  {
    slug: 'evaflem-gel',
    name: 'Evaflem Gel',
    form: 'Gel',
    segments: ['orthopaedics'],
    tagline: 'Provide fast relief from pain',
    composition: 'Diclofenac Diethylamine + Methyl Salicylate + Linseed oil + Menthol',
    posters: [poster('evaflem-gel', 'Evaflem Gel topical pain relief product literature')],
  },
  {
    slug: 'intocin-sr',
    name: 'Intocin-SR',
    form: 'Capsule',
    segments: ['orthopaedics'],
    tagline: 'In painful inflammatory conditions',
    composition: 'Indomethacin 75 mg in sustained release form',
    posters: [poster('intocin-sr', 'Intocin-SR sustained release capsule product literature')],
  },
  {
    slug: 'evanerve-m',
    name: 'Evanerve-M',
    form: 'Tablet',
    segments: ['physician', 'orthopaedics'],
    tagline: 'For a comprehensive treatment support',
    composition: 'Methylcobalamin 1500 mcg + Folic Acid 1.5 mg + Vitamin B6 3 mg + Vitamin D3 1000 IU (mouth dissolving)',
    posters: [poster('evanerve-m', 'Evanerve-M mouth dissolving tablet product literature')],
  },
  {
    slug: 'evanerve-aq',
    name: 'Evanerve-AQ',
    form: 'Injection',
    segments: ['physician', 'orthopaedics'],
    tagline: 'For a comprehensive treatment support \u2013 light of life in neuropathy problems',
    composition: 'Methylcobalamin 1500 mcg + Vitamin B6 100 mg + Niacinamide 100 mg',
    posters: [poster('evanerve-aq', 'Evanerve-AQ injection dispo pack product literature')],
  },
  {
    slug: 'evanerve-nt',
    name: 'Evanerve-NT',
    form: 'Tablet',
    segments: ['physician', 'orthopaedics'],
    tagline: 'In severe neuropathy pain with nerve degeneration',
    composition: 'Pregabalin 75 mg (prolonged release) + Methylcobalamin 1500 mcg + Nortriptyline 10 mg',
    posters: [poster('evanerve-nt', 'Evanerve-NT tablet product literature for neuropathy pain')],
  },
  {
    slug: 'uromek-sr',
    name: 'Uromek-SR',
    form: 'Tablet',
    segments: ['physician', 'general-practice'],
    tagline: 'Decades of trust for treating UTI',
    composition: 'Nitrofurantoin sustained release 100 mg',
    posters: [poster('uromek-sr', 'Uromek-SR nitrofurantoin sustained release tablet product literature for UTI')],
  },
  {
    slug: 'buscomin-plus',
    name: 'Buscomin-Plus',
    form: 'Tablet',
    segments: ['physician', 'general-practice'],
    tagline: 'In colic pain',
    composition: 'Hyoscine Butyl Bromide 10 mg + Paracetamol 325 mg',
    posters: [poster('buscomin-plus', 'Buscomin-Plus tablet product literature for colic pain')],
  },
  {
    slug: 'verteva',
    name: 'Verteva',
    form: 'Tablet',
    segments: ['physician'],
    tagline: 'In the management of vertigo and dizziness',
    composition: 'Betahistine HCl 8 mg and 16 mg',
    posters: [poster('verteva', 'Verteva betahistine tablet product literature for vertigo and dizziness')],
  },
  {
    slug: 'mucomont-lc',
    name: 'Mucomont-LC',
    form: 'Tablet',
    segments: ['physician', 'general-practice'],
    tagline: 'When your patient has allergic rhinitis',
    composition: 'Levocetirizine Hydrochloride 5 mg + Montelukast Sodium 10 mg + Ambroxol (SR) 75 mg bilayered tablet',
    posters: [poster('mucomont-lc', 'Mucomont-LC bilayered tablet product literature for allergic rhinitis')],
  },
  {
    slug: 'evaplex-l',
    name: 'Evaplex-L',
    form: 'Syrup',
    segments: ['physician', 'general-practice'],
    tagline: 'Replenish with Evaplex-L',
    composition: 'L-Lysine, B-Vitamins, Minerals, Choline and Sorbitol \u2013 L-Lysine 375 mg per 5 ml',
    posters: [poster('evaplex-l', 'Evaplex-L syrup product literature')],
  },
  {
    slug: 'evarab-dsr',
    name: 'Evarab DSR',
    form: 'Capsule',
    segments: ['physician', 'general-practice'],
    tagline: 'In GERD, hyperacidity with nausea and vomiting',
    posters: [poster('evarab-dsr', 'Evarab DSR capsule product literature for GERD and hyperacidity')],
  },
  {
    slug: 'paneva-dsr',
    name: 'Paneva DSR',
    form: 'Capsule',
    segments: ['physician', 'general-practice'],
    tagline: 'Hyperacidity and GERD with nausea and vomiting',
    composition: 'Pantoprazole 40 mg (EC) + Domperidone 30 mg (SR)',
    posters: [poster('paneva-dsr', 'Paneva DSR capsule product literature')],
  },
  {
    slug: 'lawcef-200',
    name: 'Lawcef-200',
    form: 'Tablet',
    segments: ['general-practice', 'physician'],
    tagline: 'Winner against tough infections',
    composition: 'Cefixime 200 mg dispersible',
    posters: [poster('lawcef-200', 'Lawcef-200 cefixime dispersible tablet product literature')],
  },
  {
    slug: 'salteva-375',
    name: 'Salteva-375',
    form: 'Tablet',
    segments: ['general-practice', 'physician'],
    tagline: 'Sultamicillin \u2013 a mutual prodrug of sulbactam and ampicillin',
    composition: 'Ampicillin 225 mg + Sulbactam 150 mg (corresponds to Sultamicillin 375 mg)',
    posters: [poster('salteva-375', 'Salteva-375 sultamicillin tablet product literature')],
  },
  {
    slug: 'evamox-cv-625',
    name: 'Evamox CV 625',
    form: 'Tablet',
    segments: ['general-practice', 'physician'],
    tagline: 'The winning combination \u2013 restores beta-lactam power against bacteria',
    composition: 'Amoxycillin 500 mg + Clavulanic Acid 125 mg',
    posters: [poster('evamox-cv-625', 'Evamox CV 625 amoxycillin clavulanic acid tablet product literature')],
  },
  {
    slug: 'evathro-500',
    name: 'Evathro-500',
    form: 'Tablet',
    segments: ['general-practice', 'physician'],
    tagline: 'Superior technology crystalline azithromycin',
    composition: 'Crystalline Azithromycin 500 mg',
    posters: [poster('evathro-500', 'Evathro-500 crystalline azithromycin tablet product literature')],
  },
  {
    slug: 'eva-oz',
    name: 'Eva OZ',
    form: 'Tablet',
    segments: ['general-practice', 'physician'],
    tagline: 'The successful turn',
    composition: 'Ofloxacin 200 mg + Ornidazole 500 mg',
    posters: [poster('eva-oz', 'Eva OZ tablet product literature')],
  },
  {
    slug: 'evacof-dx',
    name: 'Evacof-DX',
    form: 'Syrup',
    segments: ['general-practice', 'physician'],
    tagline: 'The complete formula to ensure freedom from cough, cold and congestion',
    composition: 'Dextromethorphan HBr 15 mg + Phenylephrine HCl 5 mg + Chlorpheniramine Maleate 2 mg',
    posters: [poster('evacof-dx', 'Evacof-DX cough syrup product literature')],
  },
  {
    slug: 'evacof-ls',
    name: 'Evacof-LS',
    form: 'Syrup',
    segments: ['general-practice', 'physician'],
    tagline: 'In the management of asthmatic cough involving bronchoconstriction',
    composition: 'Levosalbutamol 1 mg + Ambroxol 30 mg + Guaifenesin 50 mg (expectorant)',
    posters: [poster('evacof-ls', 'Evacof-LS expectorant syrup product literature')],
  },
  {
    slug: 'evit-czd',
    name: 'Evit-CZD',
    form: 'Chewable tablet',
    segments: ['general-practice', 'physician'],
    tagline: 'Immunity booster',
    composition: 'Vitamin C, Zinc and Vitamin D3 chewable tablet',
    posters: [poster('evit-czd', 'Evit-CZD vitamin C, zinc and vitamin D3 chewable tablet product literature')],
  },
  {
    slug: 'evita',
    name: 'Evita',
    form: 'Sachet',
    segments: ['general-practice', 'physician'],
    tagline: 'In general debility, convalescence and chronic fatigue syndrome',
    posters: [poster('evita', 'Evita sachet product literature for general debility and chronic fatigue')],
  },
  {
    slug: 'baci-el',
    name: 'Baci-El',
    form: 'Tablet',
    segments: ['general-practice', 'physician'],
    tagline: 'Rehydrate. Restore. Recover \u2013 your shortcut to diarrhea relief',
    composition: 'Bacillus clausii with effervescent probiotics',
    posters: [poster('baci-el', 'Baci-El probiotic effervescent tablet product literature for diarrhea relief')],
  },
];

export const featuredSlugs = ['foleva-xt', 'evaflem-sp', 'evanerve-nt', 'evamin-forte', 'lawcef-200', 'evacof-dx', 'paneva-dsr', 'torcheva'];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const productsInSegment = (seg) => products.filter((p) => p.segments.includes(seg));
export const productUrl = (p) => `/products/${p.slug}`;

/** Short, search-result-friendly description (<= 160 chars). */
export function productMetaDescription(p) {
  const d = `${p.name} (${p.form.toLowerCase()}) from Eventia Pharmaceuticals \u2013 ${p.tagline.charAt(0).toLowerCase() + p.tagline.slice(1)}.`;
  return d.length > 158 ? d.slice(0, 155).trimEnd() + '\u2026' : d;
}

/** Longer description used in structured data. */
export function productDescription(p) {
  const bits = [`${p.name} (${p.form.toLowerCase()}) from Eventia Pharmaceuticals`, p.tagline.charAt(0).toLowerCase() + p.tagline.slice(1)];
  let d = `${bits[0]} \u2013 ${bits[1]}.`;
  if (p.composition) d += ` Composition: ${p.composition}.`;
  return d.length > 300 ? d.slice(0, 297) + '\u2026' : d;
}
