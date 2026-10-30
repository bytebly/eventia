'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { Baby, Bone, HeartPulse, Stethoscope } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import { segments } from '@/data/company';
import { productsInSegment } from '@/data/products';
import { cn } from '@/lib/utils';

const icons = { Bone, Baby, Stethoscope, HeartPulse };

/**
 * The four medical segments Eventia serves. `compact` hides the description (used on About).
 * Phones: 2x2 grid of compact tiles. sm and up: full cards with description.
 */
export default function SegmentGrid({ compact = false }) {
  return (
    <Stagger as="ul" stagger={0.1} className={cn('grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4', compact && 'lg:gap-6')}>
      {segments.map((s) => {
        const Icon = icons[s.icon];
        const count = productsInSegment(s.slug).length;
        return (
          <StaggerItem as="li" key={s.slug} className="h-full">
            <m.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }} className="h-full">
              <Link
                href={`/products?segment=${s.slug}`}
                className="group flex h-full min-h-[11rem] flex-col items-center rounded-2xl border-2 border-brand/80 bg-white p-4 text-center transition-colors duration-500 active:bg-brand-mist hover:bg-brand-mist hover:shadow-[0_28px_50px_-28px_rgba(247,148,29,0.7)] sm:min-h-0 sm:rounded-3xl sm:p-7"
              >
                <span className="grid size-14 place-items-center rounded-full bg-brand text-night transition-transform duration-700 ease-[var(--ease-premium)] group-hover:rotate-[360deg] sm:size-20">
                  <Icon aria-hidden="true" className="size-6 sm:size-9" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-[15px] font-extrabold leading-tight text-brand-deep sm:mt-5 sm:text-lg">{s.name}</h3>
                {!compact && <p className="mt-3 hidden text-[15px] leading-relaxed text-ink-soft sm:block">{s.blurb}</p>}
                <p className="mt-auto pt-3 text-[13px] font-bold text-ink sm:mt-4 sm:pt-0 sm:text-sm">{count} products</p>
              </Link>
            </m.div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
