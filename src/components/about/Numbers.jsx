'use client';

import Image from 'next/image';
import CountUp from '@/components/ui/CountUp';
import SectionHeading from '@/components/ui/SectionHeading';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import { site } from '@/data/site';
import { products } from '@/data/products';

const numbers = [
  { value: site.foundingYear, plain: true, suffix: '', label: 'Year established' },
  { value: site.facts.clients, suffix: '+', label: 'Clients' },
  { value: site.facts.team, suffix: '+', label: 'Team members' },
  { value: products.length, suffix: '', label: 'Brands' },
];

/**
 * Phones: a tidy 2x2 grid of compact tiles. The number is sized in fixed steps (not a clamp)
 * so a value like "3,000+" can never spill out of a half-width tile; sm and up uses the original sizing.
 */
export default function Numbers() {
  return (
    <section className="wrap section-y" aria-label="Eventia in numbers">
      <SectionHeading title="Strength In Numbers" titleClassName="!text-brand-deep" />
      <Stagger as="dl" stagger={0.1} className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4 lg:gap-6">
        {numbers.map((n) => (
          <StaggerItem
            key={n.label}
            className="relative isolate min-w-0 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-deep to-night px-3 py-5 text-center text-white sm:rounded-3xl sm:p-6 md:p-9"
          >
            <Image src="/images/brand/eventia-mark.svg" alt="" width={200} height={215} unoptimized className="absolute -bottom-5 -right-5 -z-10 w-24 opacity-10 brightness-0 invert sm:-bottom-6 sm:-right-6 sm:w-32" />
            <dd className="whitespace-nowrap text-[1.65rem] font-extrabold leading-none tracking-tight text-brand [font-variant-numeric:tabular-nums] min-[400px]:text-[2rem] sm:text-[clamp(2.2rem,1.6rem+2.6vw,3.6rem)]">
              <CountUp value={n.value} suffix={n.suffix} plain={n.plain} />
            </dd>
            <span aria-hidden="true" className="mx-auto my-3 block h-0.5 w-8 rounded-full bg-white/60 sm:my-4 sm:w-10" />
            <dt className="text-[14px] font-bold leading-tight sm:text-base md:text-lg">{n.label}</dt>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
