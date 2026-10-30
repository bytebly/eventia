import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SEGMENTS, productUrl } from '@/data/products';

/** Catalogue card: poster thumbnail, name, dosage form, tagline and segments. */
export default function ProductCard({ product, priority = false, sizes = '(min-width:1280px) 24vw, (min-width:768px) 33vw, 90vw' }) {
  const poster = product.posters[0];
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-26px_rgba(11,29,69,0.5)] ring-1 ring-ink/5 transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-26px_rgba(11,29,69,0.55)]">
      <div className="relative aspect-[1800/1274] overflow-hidden bg-brand-mist">
        <Image
          src={poster.src}
          alt={poster.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-extrabold leading-tight text-brand-deep">
            <Link href={productUrl(product)} className="after:absolute after:inset-0 after:content-['']">
              {product.name}
            </Link>
          </h3>
          <ArrowUpRight aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-ink/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-deep" />
        </div>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink-soft">{product.form}</p>
        <p className="mt-3 line-clamp-2 text-[14px] leading-snug text-ink-soft">{product.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {product.segments.map((s) => (
            <li key={s} className="rounded-full bg-brand-mist px-2.5 py-1 text-[11px] font-bold text-brand-deep">
              {SEGMENTS[s]}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
