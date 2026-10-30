/**
 * Navigation.
 *
 * HOW TO ADD A NEW PAGE
 *  1. Create  src/app/<slug>/page.js
 *  2. Add it to `mainNav` (menu) and/or `footerColumns` below.
 *  3. Add the path to the `staticRoutes` list in  src/app/sitemap.js
 */
export const mainNav = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Quality', href: '/quality' },
  { label: 'Our Team', href: '/team' },
];

export const ctaNav = { label: 'Contact Us', href: '/contact' };

export const footerColumns = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Quality & Certifications', href: '/quality' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
};
