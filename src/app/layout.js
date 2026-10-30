import '@fontsource-variable/plus-jakarta-sans';
import './globals.css';
import Providers from '@/components/ui/Providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import JsonLd from '@/components/seo/JsonLd';
import { siteGraph } from '@/lib/schema';
import { site } from '@/data/site';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: site.themeColor,
  colorScheme: 'light',
};

const defaultTitle = `${site.name} | ${site.tagline}`;

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'Eventia Pharmaceuticals',
    'pharmaceutical marketing company',
    'pharma company Ahmedabad',
    'pharma company Mumbai',
    'orthopaedic medicines',
    'gynaecology medicines',
    'physician range',
    'general practice medicines',
    'pharma distributor Gujarat Maharashtra Rajasthan',
    'ISO 9001:2015 GMP certified',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'healthcare',
  alternates: { canonical: './' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_IN',
    title: defaultTitle,
    description: site.description,
    url: '/',
  },
  twitter: { card: 'summary_large_image', title: defaultTitle, description: site.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  // Full favicon set: ICO (legacy), SVG (modern browsers), PNG 16/32/192, Apple touch icon (iOS), Android via manifest.
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: { capable: true, title: site.shortName, statusBarStyle: 'default' },
  formatDetection: { telephone: false, email: false, address: false },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  other: {
    // Geo / local-search hints
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad',
    'geo.country': 'IN',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': site.themeColor,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={site.locale}>
      <head>
        {/* If JavaScript is unavailable, never leave animated content hidden. */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <JsonLd data={siteGraph()} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
