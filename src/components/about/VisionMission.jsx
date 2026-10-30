import { Reveal, RevealText } from '@/components/ui/Reveal';
import { mission, vision } from '@/data/company';

/** Full vision and mission statements (anchor: /about#vision). */
export default function VisionMission() {
  return (
    <section id="vision" className="relative isolate overflow-hidden bg-night section-y text-white" aria-label="Vision and mission">
      <div aria-hidden="true" className="hex absolute -right-20 -top-16 size-64 bg-brand-deep/40 md:-right-24 md:-top-20 md:size-[30rem]" />
      <div aria-hidden="true" className="hex absolute -bottom-24 -left-16 size-60 bg-brand-deep/30 md:-bottom-32 md:-left-20 md:size-[26rem]" />
      <div className="wrap relative grid grid-cols-1 gap-4 sm:gap-8 lg:grid-cols-2 lg:gap-12">
        {[vision, mission].map((b, i) => (
          <Reveal key={b.title} delay={i * 0.12} y={36} className="min-w-0 rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-md sm:rounded-3xl sm:p-8 md:p-12">
            <RevealText as="h2" text={b.title} className="h-title text-brand" />
            <div className="mt-4 space-y-3.5 text-[15.5px] leading-relaxed text-white/85 sm:mt-6 sm:space-y-4 sm:text-[17px]">
              {b.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
