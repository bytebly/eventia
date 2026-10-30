import ParallaxImage from '@/components/ui/Parallax';
import Button from '@/components/ui/Button';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { mission, vision } from '@/data/company';

/** Home-page teaser of the vision and mission (full text lives on /about). */
export default function VisionBand() {
  return (
    <section className="relative isolate overflow-hidden bg-night section-y text-white" aria-label="Vision and mission">
      <ParallaxImage src="/images/office/eventia-office-entrance.webp" sizes="100vw" strength={6} position="center 30%" className="opacity-25" />
      <div aria-hidden="true" className="hex absolute -left-24 top-6 size-64 bg-brand-deep/40 md:-left-20 md:top-10 md:size-96" />
      <div aria-hidden="true" className="hex absolute -bottom-20 -right-16 size-72 bg-brand-deep/30 md:-bottom-28 md:right-0 md:size-[30rem]" />
      <div className="wrap relative">
        <RevealText as="h2" text="Built on Trust and Purpose" className="h-title max-w-3xl text-white" />
        <div className="mt-8 grid gap-4 md:mt-12 md:gap-6 lg:grid-cols-2">
          {[vision, mission].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.12} y={36} className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-md sm:rounded-3xl sm:p-7 md:p-10">
              <h3 className="h-sub text-brand">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/85 sm:mt-4 sm:text-[17px]">{b.paragraphs[0]}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 md:mt-10 [&_a]:w-full [&_a]:justify-center sm:[&_a]:w-auto">
          <Button href="/about#vision" variant="light">
            Read more
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
