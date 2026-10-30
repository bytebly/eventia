'use client';

import { m } from 'motion/react';
import Photo from '@/components/ui/Photo';
import Button from '@/components/ui/Button';
import { Reveal, RevealText, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { certifications } from '@/data/company';
import { cn } from '@/lib/utils';

export default function QualityBand() {
  return (
    <section className="wrap section-y" aria-labelledby="quality-title">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <RevealText as="h2" text="Quality You Can Trust" className="h-title text-brand-deep" />
          <Reveal delay={0.1}>
            <p className="lead mt-4 text-[16px] leading-relaxed text-ink-soft sm:mt-6 sm:text-[length:inherit]">
              Our operations are backed by an ISO 9001:2015 Quality Management System certificate and a Good Manufacturing Practice (GMP)
              certificate covering pharmaceuticals, nutraceuticals and ayurvedic products.
            </p>
            <div className="mt-6 sm:mt-8 [&_a]:w-full [&_a]:justify-center sm:[&_a]:w-auto">
              <Button href="/quality" variant="outline">
                View Certifications
              </Button>
            </div>
          </Reveal>
        </div>
        {/* Certificates sit flat and aligned on phones; the playful tilt only appears from sm up */}
        <Stagger className="grid grid-cols-2 gap-3 sm:gap-6" stagger={0.15}>
          {certifications.map((c, i) => (
            <StaggerItem key={c.id}>
              <m.figure
                whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className={cn(
                  'overflow-hidden rounded-xl bg-white p-1.5 shadow-[0_30px_60px_-30px_rgba(11,29,69,0.55)] ring-1 ring-ink/10 sm:rounded-2xl sm:p-2',
                  i === 0 ? 'sm:-rotate-2' : 'sm:mt-6 sm:rotate-2'
                )}
              >
                <Photo src={c.image} alt={c.alt} ratio="3/4" sizes="(min-width:1024px) 22vw, 45vw" className="rounded-lg sm:rounded-xl" />
                <figcaption className="px-1 pb-2 pt-2.5 text-center sm:px-2 sm:pt-3">
                  <span className="block text-[15px] font-extrabold leading-tight text-brand-deep sm:text-base">{c.title}</span>
                  <span className="block text-[12px] leading-snug text-ink-soft sm:text-[13px]">{c.subtitle}</span>
                </figcaption>
              </m.figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
