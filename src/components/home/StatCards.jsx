'use client';

import Image from 'next/image';
import { m } from 'motion/react';
import CountUp from '@/components/ui/CountUp';
import Photo from '@/components/ui/Photo';
import { Stagger, StaggerItem, ClipReveal } from '@/components/ui/Reveal';
import { site } from '@/data/site';
import { products } from '@/data/products';

const cards = [
  {
    title: 'Our Reach',
    note: 'Gujarat, Maharashtra & Rajasthan',
    stats: [
      { value: site.foundingYear, plain: true, suffix: '', label: 'Established' },
      { value: site.facts.clients, suffix: '+', label: 'Clients served' },
      { value: site.statesServed.length, suffix: '', label: 'States covered' },
    ],
  },
  {
    title: 'Our Strength',
    note: 'ISO 9001:2015 & GMP certified',
    stats: [
      { value: site.facts.team, suffix: '+', label: 'Team members' },
      { value: products.length, suffix: '', label: 'Brands in our portfolio' },
      { value: 2, suffix: '', label: 'Quality certificates' },
    ],
  },
];

/**
 * Mobile / tablet: each stat is one row (label on the left, number on the right), so nothing
 * is ever squeezed into a narrow column and text can wrap safely.
 * Desktop (lg+): the original stacked layout, big number above its label.
 */
export default function StatCards() {
  return (
    <section aria-label="Eventia at a glance" className="relative z-10 -mt-12 md:-mt-28">
      <Stagger className="wrap grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-[1fr_1fr_1.3fr]" stagger={0.12}>
        {cards.map((card) => (
          <StaggerItem key={card.title} className="min-w-0">
            <m.article
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative isolate h-full min-w-0 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-soft to-[#ffc46b] p-5 shadow-[0_30px_60px_-30px_rgba(247,148,29,0.6)] sm:p-7 lg:p-8 xl:p-9"
            >
              <Image
                src="/images/brand/eventia-mark.svg"
                alt=""
                width={260}
                height={280}
                unoptimized
                className="pointer-events-none absolute -right-10 -top-8 -z-10 w-44 opacity-[0.07] brightness-0 md:w-56"
              />

              <header>
                <h2 className="text-xl font-extrabold leading-tight tracking-tight text-night md:text-2xl">{card.title}</h2>
                <p className="mt-1 text-[13px] font-medium leading-snug text-night/75 sm:text-sm">{card.note}</p>
              </header>

              <dl className="mt-4 divide-y divide-night/15 border-t border-night/15 lg:mt-6">
                {card.stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between gap-4 py-3.5 lg:flex-col-reverse lg:items-start lg:justify-start lg:gap-1.5 lg:py-5"
                  >
                    <dt className="min-w-0 break-words text-[15px] font-semibold leading-snug text-night lg:text-[15px]">{s.label}</dt>
                    <dd className="shrink-0 whitespace-nowrap text-[1.9rem] font-extrabold leading-none tracking-tight text-brand-deep [font-variant-numeric:tabular-nums] sm:text-4xl lg:text-[clamp(2.4rem,1.7rem+1.4vw,3.4rem)]">
                      <CountUp value={s.value} suffix={s.suffix} plain={s.plain} />
                    </dd>
                  </div>
                ))}
              </dl>
            </m.article>
          </StaggerItem>
        ))}

        <StaggerItem className="min-w-0 md:col-span-2 lg:col-span-1">
          <ClipReveal className="h-full">
            <Photo
              src="/images/events/eventia-award-presentation.webp"
              alt="A plaque being presented at an Eventia Pharmaceuticals professional meeting"
              ratio="16/10"
              sizes="(min-width:1024px) 38vw, 100vw"
              className="w-full rounded-3xl md:!aspect-[21/9] lg:h-full lg:min-h-[280px] lg:!aspect-auto"
            />
          </ClipReveal>
        </StaggerItem>
      </Stagger>
    </section>
  );
}