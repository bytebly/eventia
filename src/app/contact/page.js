import { Suspense } from 'react';
import { Mail, MapPin, Navigation, Phone, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import { Reveal } from '@/components/ui/Reveal';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata = {
  title: 'Contact Us – Mumbai & Ahmedabad',
  description:
    'Contact Eventia Pharmaceuticals: head office in Malad (West), Mumbai and an office on S.G. Highway, Ahmedabad. Call +91 98981 81701 or send a message.',
  alternates: { canonical: '/contact' },
};

/**
 * Mobile-first Contact Card with large tap targets and full email visibility
 */
function QuickContactCards({ phone, phoneHref, email }) {
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
      {/* Phone Call Card */}
      <a
        href={phoneHref}
        className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-ink/10 bg-white p-4 shadow-sm transition-all hover:border-brand hover:shadow-md active:scale-[0.99] sm:p-5"
      >
        <div className="flex items-center gap-3.5 min-w-0 pr-2">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-night shadow-sm group-hover:scale-105 transition-transform">
            <Phone aria-hidden="true" className="size-5" />
          </span>
          <div className="min-w-0">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft">
              Call Us
            </span>
            <span className="block text-base font-extrabold text-ink sm:text-lg">
              {phone}
            </span>
          </div>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand-deep group-hover:bg-brand group-hover:text-night transition-colors">
          <ArrowUpRight className="size-4" />
        </span>
      </a>

      {/* Email Card (Full email display with wrap safety) */}
      <a
        href={`mailto:${email}`}
        className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-ink/10 bg-white p-4 shadow-sm transition-all hover:border-brand hover:shadow-md active:scale-[0.99] sm:p-5"
      >
        <div className="flex items-center gap-3.5 min-w-0 pr-2">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-mist text-brand-deep shadow-sm group-hover:scale-105 transition-transform">
            <Mail aria-hidden="true" className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-soft">
              Email Us
            </span>
            <span className="block text-sm font-extrabold text-ink break-all sm:text-base sm:break-normal">
              {email}
            </span>
          </div>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand-deep group-hover:bg-brand group-hover:text-night transition-colors">
          <ArrowUpRight className="size-4" />
        </span>
      </a>
    </div>
  );
}

function OfficeCard({ office }) {
  return (
    <article className="group min-w-0 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:border-brand hover:shadow-md sm:p-6">
      <div className="flex items-start gap-3.5">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-mist text-brand-deep">
          <MapPin aria-hidden="true" className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-extrabold text-brand-deep sm:text-lg">
            {office.name}
          </h3>
          <address className="mt-1.5 text-xs not-italic leading-relaxed text-ink-soft sm:text-sm">
            {office.lines.join(' ')}
          </address>
        </div>
      </div>
      <a
        href={office.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-brand-deep/15 bg-brand-mist/50 px-4 text-xs font-bold text-brand-deep transition-all hover:bg-brand hover:text-night active:scale-[0.99] sm:text-sm"
      >
        <Navigation aria-hidden="true" className="size-4" />
        Get Directions
        <span className="sr-only"> to {office.name} (opens in a new tab)</span>
      </a>
    </article>
  );
}

export default function ContactPage() {
  const c = site.contact;
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact' }]),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: `Contact ${site.name}`,
            url: `${site.url}/contact`,
            about: { '@id': `${site.url}/#organization` },
          },
        ]}
      />
      
      <PageHero
        title="Contact Us"
        intro="We would love to hear from you."
        image="/images/office/eventia-office-interior.webp"
        alt="Inside the Eventia Pharmaceuticals office"
        position="center 30%"
      />

      <section className="wrap overflow-x-clip px-4 pb-16 pt-2 sm:px-6 md:pb-20 lg:pt-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
          
          {/* 1. Mobile Quick Contact Cards */}
          <div className="relative z-10 -mt-8 min-w-0 lg:col-start-1 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Call or email us</h2>
            <QuickContactCards phone={c.phone} phoneHref={c.phoneHref} email={c.email} />
          </div>

          {/* 2. Message Form Card */}
          <Reveal delay={0.05} className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-ink/10 bg-white p-5 shadow-md sm:p-8">
              <h2 className="text-xl font-black tracking-tight text-brand-deep sm:text-2xl">
                Send us a message
              </h2>
              <p className="mb-5 mt-1.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                Healthcare professionals, pharmaceutical manufacturers, and business partners are all welcome.
              </p>
              <Suspense fallback={<div className="min-h-[380px] rounded-2xl bg-brand-mist/20" aria-busy="true" />}>
                <ContactForm />
              </Suspense>
            </div>
          </Reveal>

          {/* 3. Office Locations */}
          <Reveal delay={0.05} className="min-w-0 lg:col-start-1 lg:row-start-2">
            <h2 className="text-xl font-black tracking-tight text-brand-deep sm:text-2xl mb-4">
              Our Offices
            </h2>
            <div className="grid grid-cols-1 gap-3.5">
              {site.offices.map((o) => (
                <OfficeCard key={o.id} office={o} />
              ))}
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}