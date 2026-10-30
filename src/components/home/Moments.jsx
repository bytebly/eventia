import ParallaxImage from '@/components/ui/Parallax';
import Photo from '@/components/ui/Photo';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { moments } from '@/data/company';

export default function Moments() {
  return (
    <section className="relative isolate overflow-hidden py-10 md:py-24" aria-labelledby="moments-title">
      <ParallaxImage src="/images/office/eventia-office-interior.webp" sizes="100vw" strength={8} position="center 40%" />
      <div aria-hidden="true" className="absolute inset-0 bg-night/70" />
      <div className="wrap relative flex lg:justify-end">
        <Reveal y={40} className="w-full min-w-0 rounded-2xl bg-white/95 p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur-md sm:rounded-3xl sm:p-9 lg:w-[56%] xl:w-[50%]">
          <RevealText as="h2" text="Moments That Matter" className="h-title !text-brand-deep" />
          <Carousel label="Eventia moments" slideClassName="w-full" gap="gap-6" adaptive className="mt-5 sm:mt-7">
            {moments.map((s) => (
              <article key={s.title}>
                <Photo src={s.image} alt={s.alt} ratio="4/3" position={s.position} sizes="(min-width:1024px) 40vw, 90vw" className="rounded-xl sm:rounded-2xl sm:!aspect-[16/10]" />
                <h3 className="mt-4 text-lg font-extrabold text-ink sm:mt-5 sm:text-xl md:text-2xl">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft sm:mt-3 sm:text-[15px]">{s.text}</p>
              </article>
            ))}
          </Carousel>
          <div className="mt-6 sm:mt-7 [&_a]:w-full [&_a]:justify-center sm:[&_a]:w-auto">
            <Button href="/team" variant="outline">
              Meet Our Team
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
