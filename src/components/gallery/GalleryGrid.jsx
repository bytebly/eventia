'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Filter tabs + masonry grid + click-to-enlarge viewer. */
export default function GalleryGrid({ albums }) {
  const [active, setActive] = useState('all');
  const [open, setOpen] = useState(null); // index of the enlarged photo, or null

  const photos =
    active === 'all'
      ? albums.flatMap((a) => a.photos)
      : albums.find((a) => a.key === active)?.photos ?? [];

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)), [photos.length]);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % photos.length)), [photos.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, prev, next]);

  const tabs = [{ key: 'all', title: 'All photos' }, ...albums.map((a) => ({ key: a.key, title: a.title }))];
  const current = open !== null ? photos[open] : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist" aria-label="Gallery albums">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={active === t.key}
            onClick={() => setActive(t.key)}
            className={cn(
              'min-h-11 rounded-full border-2 px-5 text-sm font-semibold transition-colors',
              active === t.key
                ? 'border-brand-deep bg-brand-deep text-white'
                : 'border-brand/60 text-brand-deep hover:border-brand-deep hover:bg-brand-mist',
            )}
          >
            {t.title}
          </button>
        ))}
      </div>

      {active !== 'all' && (
        <p className="mx-auto mt-5 max-w-2xl text-center text-ink-soft">{albums.find((a) => a.key === active)?.text}</p>
      )}

      <ul key={active} className="mt-8 columns-2 gap-3 sm:gap-4 lg:columns-3 [&>li]:mb-3 sm:[&>li]:mb-4">
        {photos.map((p, i) => (
          <li key={p.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-2xl bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label={`Open photo: ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width:1024px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-8"
          onClick={close}
        >
          <button type="button" onClick={close} aria-label="Close" className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30 sm:right-6 sm:top-6">
            <X className="size-6" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo" className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30 sm:left-6">
            <ChevronLeft className="size-6" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo" className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30 sm:right-6">
            <ChevronRight className="size-6" />
          </button>

          <figure className="flex max-h-full max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              quality={85}
              priority
              className="max-h-[80svh] w-auto max-w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 max-w-2xl text-center text-sm text-white/85">
              {current.alt} <span className="text-white/50">({open + 1}/{photos.length})</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}