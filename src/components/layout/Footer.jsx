import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Navigation, Phone, ArrowUpRight } from 'lucide-react';
import { footerColumns } from '@/data/navigation';
import { site } from '@/data/site';

const socialPaths = {
  LinkedIn:
    'M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 13.2c0-3.1-1.65-4.55-3.86-4.55-1.78 0-2.58.98-3.03 1.67V8.5h-3.37c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.69.13-.93.27-.69.9-1.4 1.95-1.4 1.37 0 1.92 1.05 1.92 2.59V20h3.38l-.49-6.8Z',
  Facebook:
    'M13.5 21v-7.5h2.52l.48-3H13.5V8.6c0-.87.3-1.6 1.6-1.6h1.5V4.3A18 18 0 0 0 14.4 4C12.1 4 10.5 5.4 10.5 8v2.5H8v3h2.5V21h3Z',
  'X (Twitter)':
    'M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.19L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z',
  Instagram:
    'M12 7.4A4.6 4.6 0 1 0 12 16.6 4.6 4.6 0 0 0 12 7.4Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0ZM21 8.1c-.07-1.45-.4-2.74-1.46-3.8S17.35 3.07 15.9 3C14.4 2.93 9.6 2.93 8.1 3 6.65 3.07 5.36 3.4 4.3 4.46S3.07 6.65 3 8.1c-.07 1.5-.07 6.3 0 7.8.07 1.45.4 2.74 1.46 3.8s2.35 1.39 3.8 1.46c1.5.07 6.3.07 7.8 0 1.45-.07 2.74-.4 3.8-1.46s1.39-2.35 1.46-3.8c.07-1.5.07-6.3 0-7.8ZM19.2 17.4a3.1 3.1 0 0 1-1.74 1.74c-1.2.48-4.05.37-5.46.37s-4.26.11-5.46-.37A3.1 3.1 0 0 1 4.8 17.4c-.48-1.2-.37-4.05-.37-5.4s-.11-4.26.37-5.46A3.1 3.1 0 0 1 6.54 4.8C7.74 4.32 10.59 4.43 12 4.43s4.26-.11 5.46.37a3.1 3.1 0 0 1 1.74 1.74c.48 1.2.37 4.05.37 5.46s.11 4.26-.37 5.4Z',
};

function Column({ title, children, className = '' }) {
  return (
    <div className={`min-w-0 ${className}`}>
      <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 sm:mb-4">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}

function LinkList({ links }) {
  return (
    <ul className="space-y-2 text-xs sm:text-sm">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="inline-block text-white/70 transition-colors duration-200 hover:text-brand"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const socials = site.social.filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night text-white/75 border-t border-white/10">
      <div className="wrap px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_0.6fr_0.6fr] lg:gap-12">
          
          {/* Brand & Direct Contact */}
          <div className="min-w-0">
            <Link
              href="/"
              aria-label={`${site.name} – home`}
              className="inline-flex rounded-xl bg-white px-3.5 py-2 shadow-sm"
            >
              <Image
                src={site.logo}
                alt=""
                width={220}
                height={45}
                unoptimized
                className="h-8 w-auto sm:h-9"
              />
            </Link>

            <p className="mt-4 text-xs leading-relaxed text-white/60 sm:text-sm max-w-sm">
              {site.tagline}. Quality pharmaceutical products through reliable sourcing, responsible marketing, and strong partnerships.
            </p>

            {/* Quick Contact */}
            <div className="mt-5 space-y-2 text-xs sm:text-sm">
              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-brand"
              >
                <Phone className="size-4 shrink-0 text-brand" />
                <span className="break-words">{site.contact.phone}</span>
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-brand"
              >
                <Mail className="size-4 shrink-0 text-brand" />
                <span className="break-all sm:break-normal">{site.contact.email}</span>
              </a>
            </div>

            {/* Social Icons */}
            {socials.length > 0 && (
              <div className="mt-6 flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={`${site.shortName} on ${s.name}`}
                    className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all hover:border-brand hover:bg-brand hover:text-night"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                      <path d={socialPaths[s.name] || ''} />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Offices */}
          <Column title="Our Offices">
            <div className="space-y-4 text-xs sm:text-sm">
              {site.offices.map((o) => (
                <div key={o.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                    <div className="min-w-0">
                      <strong className="block font-semibold text-white mb-0.5">{o.name}</strong>
                      <address className="not-italic text-white/60 leading-relaxed break-words">
                        {o.lines.join(', ')}
                      </address>
                    </div>
                  </div>
                  <a
                    href={o.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    <Navigation className="size-3.5" />
                    Get directions
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>
              ))}
            </div>
          </Column>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:gap-10 lg:contents">
            <Column title="Company">
              <LinkList links={footerColumns.company} />
            </Column>
            <Column title="Legal">
              <LinkList links={footerColumns.legal} />
            </Column>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 bg-black/30 py-4 text-center text-xs text-white/40">
        <div className="wrap px-4 [padding-bottom:max(0.5rem,env(safe-area-inset-bottom))]">
          Copyright © {year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}