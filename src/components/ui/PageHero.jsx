import ParallaxImage from './Parallax';

/**
 * Inner-page hero. CSS-only entrance (works before JS loads).
 * Phones / small tablets: the photo is a banner at its natural wide shape (nothing cropped out),
 *   fading into the dark page colour, with the title and intro underneath.
 * md and up: the original look, a big photo with the title anchored bottom-left over it.
 * Same props as before; `children` is optional (e.g. a button).
 */
export default function PageHero({ title, intro, image, alt = '', position = 'center', children }) {
  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-night md:min-h-[56svh] md:flex-row md:items-end lg:min-h-[64svh]">
      <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[2/1] md:absolute md:inset-0 md:aspect-auto">
        <ParallaxImage src={image} alt={alt} priority sizes="100vw" position={position} quality={75} />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-transparent md:from-night/85 md:via-night/25 md:to-night/10"
        />
      </div>

      <div className="wrap relative w-full pb-14 pt-2 md:pb-16 md:pt-32">
        <h1 className="overflow-hidden pb-[0.12em]">
          <span className="h-display block animate-line-up text-white">{title}</span>
        </h1>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 rounded-full bg-brand md:mt-4" />
        {intro && (
          <p className="lead mt-4 max-w-2xl animate-fade-up text-[16px] leading-relaxed text-white/90 [animation-delay:350ms] sm:text-[length:inherit]">
            {intro}
          </p>
        )}
        {children && <div className="mt-6 animate-fade-up [animation-delay:500ms]">{children}</div>}
      </div>
    </section>
  );
}