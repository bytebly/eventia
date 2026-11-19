import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Photo from '@/components/ui/Photo';
import { ClipReveal, Reveal, RevealText } from '@/components/ui/Reveal';
import LifeAtEventia from '@/components/home/LifeAtEventia';
import Values from '@/components/home/Values';
import CtaBand from '@/components/home/CtaBand';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb } from '@/lib/schema';
import { owner, owners, teamPhotos } from '@/data/company';
import { site } from '@/data/site';

export const metadata = {
  title: 'Our Team – People Behind Eventia',
  description:
    'Meet the Eventia Pharmaceuticals team: about 20 people serving around 3,000 clients across Gujarat, Maharashtra and Rajasthan.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Our Team', path: '/team' }])} />
      
      <PageHero
        title="Our Team"
        intro="The people who bring Eventia to life."
        image={teamPhotos.group.image}
        alt={teamPhotos.group.alt}
        position="center 30%"
      />

      {/* Leadership Section */}
            {/* Leadership Section: the three owners */}
      <section className="wrap px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24" aria-labelledby="leadership-title">
        <div className="mx-auto max-w-3xl text-center">
          <RevealText
            as="h2"
            text="Leadership"
            className="text-xl font-black tracking-tight text-brand-deep sm:text-2xl lg:text-3xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base md:text-lg">
              Eventia is led by its owners, {owners.map((o) => o.name).join(', ').replace(/, ([^,]*)$/, ' and $1')}, together with a dedicated team of about {site.facts.team} people. Together they look after
              around {site.facts.clients.toLocaleString('en-IN')} clients, building long-term relationships with healthcare professionals, pharmaceutical manufacturers, and
              business partners through integrity, transparency, and a commitment to customer satisfaction.
            </p>
          </Reveal>
        </div>

        <ul className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {owners.map((o, i) => (
            <li key={o.name}>
              <Reveal delay={i * 0.1}>
                <figure>
                  <Photo
                    src={o.image}
                    alt={o.alt}
                    ratio="3/4"
                    position="center 20%"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="rounded-2xl shadow-xl shadow-slate-200/60 ring-1 ring-ink/10 sm:rounded-3xl"
                  />
                  <figcaption className="mt-4 rounded-r-2xl border-l-4 border-brand bg-slate-50/80 p-4 shadow-sm">
                    <p className="text-lg font-extrabold text-ink sm:text-xl">{o.name}</p>
                    <p className="text-xs font-semibold text-ink-soft sm:text-sm">
                      {o.role}, {site.name}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Team Outing Banner */}
      <section className="bg-brand-mist/50 py-12 sm:py-16 md:py-20" aria-label="Team on an outing">
        <div className="wrap px-4 sm:px-6">
          <ClipReveal>
            <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-xl shadow-slate-200/50 sm:rounded-3xl">
              <Image
                src={teamPhotos.outing.image}
                alt={teamPhotos.outing.alt}
                width={1600}
                height={720}
                sizes="(min-width:1320px) 1216px, 100vw"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </ClipReveal>

          <Reveal className="mx-auto mt-6 max-w-2xl text-center sm:mt-10">
            <p className="text-sm leading-relaxed text-ink-soft sm:text-base md:text-lg">
              Beyond the work, we make time for each other. Team outings and shared celebrations are part of what keeps the Eventia family close.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Secondary Sections */}
      <Values />
      <LifeAtEventia />
      
      <CtaBand
        title="Talk to the Eventia team"
        text="Whether you want to partner with us or simply learn more about Eventia, we would love to hear from you."
      />
    </>
  );
}