import ParallaxImage from '@/components/ui/Parallax';
import Button from '@/components/ui/Button';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { aboutParagraphs } from '@/data/company';

export default function AboutPanel() {
  const [lead, ...rest] = aboutParagraphs;
  return (
    <section className="relative isolate overflow-hidden section-y" aria-labelledby="about-heading">
      <ParallaxImage src="/images/office/eventia-office-interior.webp" sizes="100vw" strength={8} position="center 40%" />
      <div aria-hidden="true" className="absolute inset-0 bg-night/25 md:bg-transparent md:bg-gradient-to-r md:from-white/75 md:via-white/35 md:to-night/10" />
      <div className="wrap relative">
        <Reveal y={40} className="max-w-4xl rounded-2xl border-t-[5px] border-brand bg-white/95 p-6 shadow-[0_40px_80px_-40px_rgba(11,29,69,0.55)] backdrop-blur-md sm:rounded-3xl sm:border-l-[6px] sm:border-t-0 sm:p-10 lg:p-14">
          <RevealText as="h2" text="About Eventia" className="h-title text-brand-deep" />
          <p id="about-heading" className="sr-only">About Eventia Pharmaceuticals</p>
          <p className="lead mt-4 text-[17px] font-semibold leading-snug text-ink sm:mt-6 sm:text-[length:inherit]">{lead}</p>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft sm:mt-5 sm:text-[16px]">
            {rest.map((p, i) => (
              // On phones show just the first supporting paragraph; the rest lives on /about
              <p key={p} className={i > 0 ? 'hidden sm:block' : undefined}>
                {p}
              </p>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 [&_a]:w-full [&_a]:justify-center sm:[&_a]:w-auto">
            <Button href="/about" variant="outline">
              Know More
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
