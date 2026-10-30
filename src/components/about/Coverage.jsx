import { MapPin, Navigation } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { site } from '@/data/site';

export default function Coverage() {
  return (
    <section className="bg-brand-mist section-y" aria-labelledby="coverage-title">
      <div className="wrap">
        <SectionHeading
          title="Where We Work"
          titleClassName="!text-brand-deep"
          intro="Eventia serves healthcare professionals across three states, supported by offices in Mumbai and Ahmedabad."
        />
        <Stagger as="ul" className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5" stagger={0.12}>
          {site.statesServed.map((s) => (
            <StaggerItem
              as="li"
              key={s.code}
              className="flex min-w-0 items-center gap-3.5 rounded-2xl bg-white p-4 shadow-[0_20px_40px_-30px_rgba(11,29,69,0.5)] ring-1 ring-ink/5 sm:gap-4 sm:rounded-3xl sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-night sm:size-14">
                <MapPin aria-hidden="true" className="size-5 sm:size-6" />
              </span>
              <span className="min-w-0 text-lg font-extrabold text-brand-deep sm:text-xl">{s.name}</span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-5 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-5 md:grid-cols-2">
          {site.offices.map((o) => (
            <div key={o.id} className="min-w-0 rounded-2xl border border-brand/40 bg-white/70 p-5 sm:rounded-3xl sm:p-6">
              <h3 className="text-lg font-extrabold text-ink">{o.name}</h3>
              <address className="mt-2 text-[15px] not-italic leading-relaxed text-ink-soft [overflow-wrap:anywhere]">{o.lines.join(' ')}</address>
              {/* Phones: a full-width button that is easy to tap. sm and up: the original underlined link. */}
              <a
                href={o.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-brand text-sm font-bold text-brand-deep transition-colors active:bg-brand sm:mt-3 sm:min-h-0 sm:w-auto sm:justify-start sm:rounded-none sm:border-0 sm:underline sm:underline-offset-4 sm:hover:text-night"
              >
                <Navigation aria-hidden="true" className="size-4 sm:hidden" />
                Get directions
                <span className="sr-only"> to {o.name} (opens in a new tab)</span>
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
