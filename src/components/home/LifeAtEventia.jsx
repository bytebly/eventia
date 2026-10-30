'use client';

import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { gallery } from '@/data/company';
import { cn } from '@/lib/utils';

/**
 * Phones: a swipeable strip of tall photo cards (no tiny cropped tiles, no broken spans).
 * sm and up: the original masonry-style grid.
 * Assumes `.wrap` has 1.25rem (px-5) side padding on phones; adjust -mx-5/px-5 if yours differs.
 */
export default function LifeAtEventia() {
  return (
    <section className="relative overflow-hidden bg-brand-mist section-y" aria-labelledby="life-title">
      <div aria-hidden="true" className="hex animate-float absolute -left-12 top-24 hidden size-32 bg-brand/40 lg:block" />
      <div aria-hidden="true" className="hex animate-float absolute -right-10 bottom-32 hidden size-24 bg-brand-deep/20 [animation-delay:2s] lg:block" />
      <div className="wrap relative">
        <SectionHeading
          title="Life at Eventia"
          titleClassName="!text-brand-deep"
          intro={[
            'A team that works together, learns together and celebrates together.',
            'From medical exhibitions to team outings, here is a glimpse of the people behind Eventia.',
          ]}
        />
        <p className="mt-6 text-center text-[13px] font-semibold text-brand-deep/70 sm:hidden">Swipe to see more</p>
        <Stagger
          as="ul"
          stagger={0.08}
          className={cn(
            'mt-3 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            'sm:mx-0 sm:mt-12 sm:grid sm:auto-rows-[200px] sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:auto-rows-[240px] lg:grid-cols-4'
          )}
        >
          {gallery.map((item) => (
            <StaggerItem
              as="li"
              key={item.title}
              className={cn(
                'group relative aspect-[4/5] w-[74%] shrink-0 snap-center overflow-hidden rounded-2xl sm:aspect-auto sm:w-auto sm:shrink sm:rounded-3xl',
                item.className
              )}
              y={36}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={item.className.includes('row-span-2') ? '(min-width:1024px) 50vw, (min-width:640px) 100vw, 75vw' : '(min-width:1024px) 25vw, (min-width:640px) 50vw, 75vw'}
                className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-[1.07]"
                style={{ objectPosition: item.position }}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="absolute inset-x-0 bottom-0 p-4 text-base font-bold text-white sm:p-5 sm:text-lg">{item.title}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 text-center sm:mt-12 [&_a]:w-full [&_a]:justify-center sm:[&_a]:w-auto">
          <Button href="/team" variant="outline">
            Meet the Team
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
