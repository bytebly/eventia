import { site } from '@/data/site';

/** Simple readable layout for legal text pages. */
export default function LegalPage({ title, updated, children }) {
  return (
    <>
      <section className="bg-brand-mist">
        <div className="wrap py-14 md:py-20">
          <h1 className="h-display !text-[clamp(2.4rem,1.4rem+4.5vw,4.5rem)] text-brand-deep">{title}</h1>
          <p className="mt-4 text-ink-soft">Last updated: {updated}</p>
        </div>
      </section>
      <section className="wrap section-y !pt-12">
        <div className="mx-auto max-w-3xl space-y-8 text-[16px] leading-relaxed text-ink-soft [&_h2]:mb-3 [&_h2]:mt-2 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-brand-deep [&_a]:font-semibold [&_a]:text-brand-deep [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
          <p className="border-t border-ink/10 pt-6 text-sm">
            Questions? Contact {site.name} at <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or {site.contact.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
