import Photo from '@/components/ui/Photo';
import { ClipReveal, Reveal, RevealText } from '@/components/ui/Reveal';
import SegmentGrid from '@/components/home/SegmentGrid';
import { aboutParagraphs } from '@/data/company';

export default function Story() {
  const [lead, ...rest] = aboutParagraphs;
  return (
    <section className="wrap section-y">
      <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <ClipReveal className="min-w-0">
          <Photo
            src="/images/about/eventia-cover.webp"
            alt="Eventia Pharmaceuticals logo with a hexagon collage of a doctor, a family and medicines, and the tagline Life is Worth Living"
            ratio="2000/1417"
            sizes="(min-width:1024px) 48vw, 100vw"
            className="rounded-2xl ring-1 ring-ink/10 sm:rounded-3xl"
          />
        </ClipReveal>
        <div className="min-w-0">
          <RevealText as="h2" text="Who We Are" className="h-title text-brand-deep" />
          <Reveal delay={0.1}>
            <p className="lead mt-4 text-[17px] font-semibold text-ink sm:mt-6 sm:text-[length:inherit]">{lead}</p>
            <div className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-ink-soft sm:mt-5 sm:space-y-4 sm:text-[16px]">
              {rest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <SegmentGrid compact />
      </div>
    </section>
  );
}
