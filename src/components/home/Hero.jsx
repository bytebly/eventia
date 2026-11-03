import ParallaxImage from '@/components/ui/Parallax';
import Button from '@/components/ui/Button';
import Magnetic from '@/components/ui/Magnetic';
import CountUp from '@/components/ui/CountUp';
import { site } from '@/data/site';

const lines = ['Life is', 'Worth Living.'];

/**
 * Mobile / tablet: the team photo is shown as a full-width banner at its natural wide shape
 * (nobody gets cropped out), fading into the dark background, with the text underneath.
 * Desktop (lg+): unchanged full-bleed photo with the text over it.
 * Entrance is pure CSS so the headline animates immediately, even before JS hydrates.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-night lg:min-h-[calc(100svh-84px)] lg:flex-row lg:items-end xl:max-2xl:min-h-[calc(100svh-84px+7rem)]">
      {/* Photo: in-flow banner on phones, absolute full-bleed on desktop.
          Set the aspect ratio below to match your photo (3/2 is a safe guess for a group shot). */}
      <div className="relative aspect-[3/2] w-full overflow-hidden sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
        <div className="absolute inset-0 animate-kenburns">
          <ParallaxImage
            src="/images/team/eventia-team-group.webp"
            alt=""
            priority
            sizes="100vw"
            strength={6}
            quality={85}
            position="center 30%"
          />
        </div>
        {/* Phones: only fade the bottom edge into the page. Desktop: darken from the left for the headline. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-transparent lg:bg-gradient-to-r lg:from-night/90 lg:via-night/60 lg:to-night/20"
        />
        <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-t from-night/80 via-transparent to-transparent lg:block xl:max-2xl:from-night/95 xl:max-2xl:via-night/20" />
      </div>
      <div aria-hidden="true" className="hex absolute -right-24 top-16 hidden size-[34rem] bg-white/[0.06] lg:block" />

      <div className="wrap relative grid w-full gap-7 pb-20 pt-2 sm:pb-24 md:pb-40 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10 lg:pt-24 xl:max-2xl:pb-36 xl:max-2xl:pt-16">
        <div>
             <h1 className="h-display text-white xl:max-2xl:!text-[clamp(3rem,0.5rem+4vw,4.25rem)]">
            <span className="sr-only">{site.name} &ndash; {site.tagline}.</span>
            {lines.map((line, i) => (
              <span key={line} aria-hidden="true" className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <span className={`block animate-line-up ${i === 1 ? 'text-brand' : ''}`} style={{ animationDelay: `${250 + i * 150}ms` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="lead mt-5 max-w-xl animate-fade-up text-[16px] leading-relaxed text-white/90 [animation-delay:900ms] sm:mt-6 sm:text-[length:inherit]  xl:max-2xl:mt-4 xl:max-2xl:text-[15px]">
            Eventia Pharmaceuticals brings quality pharmaceutical products to healthcare professionals through reliable sourcing,
            responsible marketing and strong partnerships.
          </p>
          {/* Full-width, thumb-friendly buttons on phones; inline from sm up */}
          <div className="mt-7 flex animate-fade-up flex-col gap-3 [animation-delay:1050ms] sm:mt-9 sm:flex-row sm:flex-wrap [&_a]:w-full [&_a]:justify-center sm:[&_a]:w-auto [&>div]:w-full sm:[&>div]:w-auto    xl:max-2xl:mt-6">
            <Magnetic>
              <Button href="/products" variant="white">
                Explore Products
              </Button>
            </Magnetic>
            <Button href="/about" variant="light">
              About Us
            </Button>
          </div>
        </div>

        {/* Hidden on phones (already shown in the stat cards below); visible from md up */}
        <aside
          aria-label="Our reach"
          className="hidden max-w-sm animate-fade-up rounded-3xl border border-white/20 bg-white/10 p-7 text-white backdrop-blur-xl [animation-delay:1250ms] md:block    xl:max-2xl:max-w-[16rem] xl:max-2xl:p-5"
        >
          <p className="h-title !text-[clamp(2.6rem,2rem+2vw,3.75rem)]   xl:max-2xl:!text-[2.5rem] text-brand">
            <CountUp value={site.facts.clients} suffix="+" />
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-white/90">
            clients served across Gujarat, Maharashtra and Rajasthan.
          </p>
        </aside>
      </div>

      <div aria-hidden="true" className="absolute bottom-6 left-1/2 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-white/25 md:block">
        <span className="block h-full w-full animate-scroll-cue bg-white" />
      </div>
    </section>
  );
}