import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Photo from '@/components/ui/Photo';
import { ClipReveal, Reveal, RevealText } from '@/components/ui/Reveal';
import LifeAtEventia from '@/components/home/LifeAtEventia';
import Values from '@/components/home/Values';
import CtaBand from '@/components/home/CtaBand';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb } from '@/lib/schema';
import { owner, teamPhotos } from '@/data/company';
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
      <section className="wrap px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
          
          {/* Owner Image */}
          <ClipReveal>
            <figure className="mx-auto max-w-xs sm:max-w-md">
              <Photo
                src={owner.image}
                alt={owner.alt}
                ratio="3/4"
                position="center 20%"
                sizes="(min-width:1024px) 38vw, 100vw"
                className="rounded-2xl shadow-xl shadow-slate-200/60 ring-1 ring-ink/10 transition-transform duration-300 hover:scale-[1.01] sm:rounded-3xl"
              />
            </figure>
          </ClipReveal>

          {/* Owner Details & Bio */}
          <div className="min-w-0">
            <RevealText
              as="h2"
              text="Leadership"
              className="text-xl font-black tracking-tight text-brand-deep sm:text-2xl lg:text-3xl"
            />
            
            <Reveal delay={0.1}>
              <div className="mt-4 flex items-center rounded-r-2xl border-l-4 border-brand bg-slate-50/80 p-4 shadow-sm sm:mt-6 sm:p-5">
                <div className="min-w-0">
                  <p className="text-lg font-extrabold text-ink sm:text-2xl">{owner.name}</p>
                  <p className="text-xs font-semibold text-ink-soft sm:text-sm">
                    {owner.role}, {site.name}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:mt-6 sm:text-base md:text-lg">
                Eventia is led by its owner, <strong className="font-semibold text-ink">{owner.name}</strong>, together with a dedicated team of about {site.facts.team} people. Together they look after
                around {site.facts.clients.toLocaleString('en-IN')} clients, building long-term relationships with healthcare professionals, pharmaceutical manufacturers, and
                business partners through integrity, transparency, and a commitment to customer satisfaction.
              </p>
            </Reveal>
          </div>

        </div>
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