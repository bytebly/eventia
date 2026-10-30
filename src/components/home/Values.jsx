import SectionHeading from '@/components/ui/SectionHeading';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import { values } from '@/data/company';

/**
 * The EVENTIA acrostic as one dark panel.
 * The big first letters line up in a single column, so the eye reads E-V-E-N-T-I-A straight down.
 *   phones : modern interactive glassmorphic stacked cards with glowing letter avatars
 *   lg+    : one clean row per value: letter | value name | description
 */
export default function Values() {
  return (
    <section className="wrap section-y px-4 sm:px-6" aria-labelledby="values-title">
      <SectionHeading
        title="What EVENTIA Stands For"
        titleClassName="!text-brand-deep text-2xl sm:text-3xl lg:text-4xl"
        intro="Every letter of our name represents a core value we expect each member of the Eventia family to live by in daily work."
        className="text-center sm:text-left"
      />

      <div className="relative isolate mt-8 overflow-hidden rounded-2xl bg-night text-white shadow-2xl sm:mt-12 sm:rounded-3xl border border-white/10">
        {/* Decorative ambient glows */}
        <div aria-hidden="true" className="hex pointer-events-none absolute -right-16 -top-16 -z-10 size-56 bg-brand-deep/40 md:size-80" />
        <div aria-hidden="true" className="hex pointer-events-none absolute -bottom-20 -left-16 -z-10 size-48 bg-brand-deep/30 md:size-72" />

        {/* 
          Mobile: Modern stacked card grid with frosted glass treatment
          Desktop (lg+): Keeps your exact original clean linear rows with vertical E-V-E-N-T-I-A letter alignment
        */}
        <Stagger 
          as="ol" 
          stagger={0.07} 
          className="grid gap-3 p-4 sm:divide-y sm:divide-white/10 sm:px-10 sm:py-4 lg:px-14 lg:gap-0"
        >
          {values.map((v, i) => (
            <StaggerItem
              as="li"
              key={`${v.letter}-${i}`}
              className="group relative flex flex-col sm:grid sm:min-w-0 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-center sm:gap-x-8 sm:py-6 lg:grid-cols-[6rem_15rem_minmax(0,1fr)] lg:gap-x-10 rounded-2xl sm:rounded-none bg-white/[0.04] sm:bg-transparent p-5 sm:p-0 border border-white/10 sm:border-none backdrop-blur-md sm:backdrop-blur-none transition-all duration-300 hover:border-brand/50"
            >
              {/* Acrostic Letter Badge */}
              <span
                aria-hidden="true"
                className="flex sm:row-span-2 sm:text-center text-3xl sm:text-6xl lg:row-span-1 lg:text-7xl font-black leading-none text-brand transition-transform duration-500 ease-[var(--ease-premium)] group-hover:translate-x-1"
              >
                {v.letter}
              </span>

              {/* Value Word */}
              <h3 className="mt-2.5 sm:mt-0 min-w-0 sm:self-end text-lg sm:text-2xl font-black leading-tight tracking-tight text-white transition-colors group-hover:text-brand lg:self-center">
                {v.word}
              </h3>

              {/* Description */}
              <p className="mt-1.5 sm:col-start-2 sm:mt-1 min-w-0 sm:self-start text-xs sm:text-base leading-relaxed text-white/75 lg:col-start-3 lg:row-start-1 lg:mt-0 lg:self-center">
                <span className="sr-only">{v.letter} </span>
                {v.text}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}