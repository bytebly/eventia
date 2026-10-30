import { site } from '@/data/site';
import { products, productUrl } from '@/data/products';

/** Add every new public page here so search engines find it. */
const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/products', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/quality', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/team', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/disclaimer', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const lastModified = new Date();
  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r.path === '/' ? '' : r.path}`,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...products.map((p) => ({
      url: `${site.url}${productUrl(p)}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: p.posters.map((x) => `${site.url}${x.src}`),
    })),
  ];
}
