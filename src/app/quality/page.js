import Photo from '@/components/ui/Photo';
import PageHero from '@/components/ui/PageHero';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import CtaBand from '@/components/home/CtaBand';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb } from '@/lib/schema';
import { certifications } from '@/data/company';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Quality & Certifications – ISO and GMP',
  description:
    'Eventia Pharmaceuticals holds ISO 9001:2015 Quality Management System and GMP certificates for pharmaceuticals, nutraceuticals and ayurvedic products.',
  alternates: { canonical: '/quality' },
};

export default function QualityPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Quality', path: '/quality' }])} />
      
      <PageHero
        title="Quality"
        intro="Professionalism and ethical business practices, backed by recognised certifications."
        image="/images/events/eventia-award-presentation.webp"
        alt="A plaque being presented at an Eventia Pharmaceuticals professional meeting"
        position="center 40%"
      />

      <section className="wrap px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        {/* Intro Section */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-ink-soft sm:text-base md:text-lg">
            Quality is part of how we work with healthcare professionals, pharmaceutical manufacturers, and business partners. Our commitment to integrity, transparency, and customer satisfaction is supported by the certifications below.
          </p>
        </Reveal>

        {/* Certifications List */}
        <div className="mt-12 space-y-16 sm:mt-16 md:space-y-24 lg:space-y-28">
          {certifications.map((c, i) => (
            <article
              key={c.id}
              id={c.id}
              className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20"
            >
              {/* Image Preview Card */}
              <Reveal className={cn(i % 2 === 1 && 'lg:order-2')}>
                <figure className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-white p-2.5 shadow-lg shadow-slate-200/60 ring-1 ring-ink/10 transition-transform duration-300 hover:scale-[1.01] sm:max-w-md sm:rounded-3xl sm:p-3.5 sm:shadow-2xl">
                  <Photo
                    src={c.image}
                    alt={c.alt}
                    ratio="3/4"
                    sizes="(min-width:1024px) 40vw, 90vw"
                    quality={85}
                    className="rounded-xl sm:rounded-2xl"
                  />
                </figure>
              </Reveal>

              {/* Certificate Details */}
              <div className="min-w-0">
                <RevealText
                  as="h2"
                  text={c.title}
                  className="text-xl font-black tracking-tight text-brand-deep sm:text-2xl lg:text-3xl"
                />
                <p className="mt-2 text-sm font-semibold text-ink sm:text-base">{c.subtitle}</p>

                {/* Details DL Box */}
                <dl className="mt-6 divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/10 bg-slate-50/80 p-1 sm:mt-8 sm:p-2">
                  {c.details.map(([k, v]) => (
                    <div
                      key={k}
                      className="grid gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4 sm:px-5 sm:py-3.5"
                    >
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-ink-soft sm:text-xs sm:self-center">
                        {k}
                      </dt>
                      <dd className="text-xs font-extrabold text-ink sm:text-sm">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Questions about our quality standards?"
        text="Our team will be happy to share more about our certifications and processes."
      />
    </>
  );
}