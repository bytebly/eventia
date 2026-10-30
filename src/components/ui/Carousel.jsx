'use client';

import { Children, useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

/**
 * Accessible scroll-snap carousel: touch/trackpad swipe, arrow buttons, keyboard arrows,
 * progress dots and optional autoplay (paused on hover/focus and when reduced-motion is on).
 */
export default function Carousel({
  children,
  label = 'Carousel',
  slideClassName = 'w-[85%] sm:w-[46%] lg:w-[31%]',
  gap = 'gap-5',
  autoplay = 0,
  dots = true,
  controls = true,
  adaptive = false,
  className,
  tone = 'dark',
}) {
  const scroller = useRef(null);
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const slides = Children.toArray(children);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const items = Array.from(el.children);
    let nearest = 0;
    let best = Infinity;
    items.forEach((item, i) => {
      const d = Math.abs(item.offsetLeft - el.scrollLeft - items[0].offsetLeft);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setActive(nearest);
    if (adaptive) el.style.height = `${items[nearest].offsetHeight + 8}px`;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, [adaptive]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [update]);

  const goTo = useCallback((index) => {
    const el = scroller.current;
    if (!el) return;
    const items = Array.from(el.children);
    const target = items[Math.max(0, Math.min(index, items.length - 1))];
    el.scrollTo({ left: target.offsetLeft - items[0].offsetLeft, behavior: 'smooth' });
  }, []);

  const step = useCallback(
    (dir) => {
      const el = scroller.current;
      if (!el) return;
      if (dir > 0 && edges.end) return goTo(0);
      goTo(active + dir);
    },
    [active, edges.end, goTo],
  );

  useEffect(() => {
    if (!autoplay || reduce || paused) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      step(1);
    }, autoplay);
    return () => clearInterval(id);
  }, [autoplay, reduce, paused, step]);

  const btn = cn(
    'grid size-12 place-items-center rounded-full border-2 transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-35',
    tone === 'dark'
      ? 'border-ink/20 text-ink hover:border-brand-deep hover:bg-brand-deep hover:text-white disabled:hover:bg-transparent disabled:hover:text-ink disabled:hover:border-ink/20'
      : 'border-white/50 text-white hover:bg-white hover:text-night',
  );

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={scroller}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            step(1);
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            step(-1);
          }
        }}
        className={cn(
          'scrollbar-none flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth pb-2',
          adaptive && 'items-start transition-[height] duration-500 ease-[var(--ease-premium)]',
          gap,
        )}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            className={cn('shrink-0 snap-start', slideClassName)}
          >
            {slide}
          </div>
        ))}
      </div>

      {(dots || controls) && slides.length > 1 && (
        <div className="mt-6 flex items-center justify-between gap-4">
          {dots ? (
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label={`${label} slides`}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="grid h-6 place-items-center px-0.5"
                >
                  <span
                    className={cn(
                      'block h-2 rounded-full transition-all duration-500 ease-[var(--ease-premium)]',
                      i === active ? 'w-8 bg-brand' : cn('w-2', tone === 'dark' ? 'bg-ink/25' : 'bg-white/40'),
                    )}
                  />
                </button>
              ))}
            </div>
          ) : (
            <span />
          )}
          {controls && (
            <div className="flex gap-2">
              <button type="button" className={btn} onClick={() => step(-1)} disabled={edges.start} aria-label="Previous slide">
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button type="button" className={btn} onClick={() => step(1)} aria-label="Next slide">
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
