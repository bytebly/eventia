'use client';

import { useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, m } from 'motion/react';
import { Search, X } from 'lucide-react';
import ProductCard from './ProductCard';
import { SEGMENTS, products } from '@/data/products';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1];

/** Filterable catalogue. The active segment lives in the URL (?segment=gynaecology) so it can be shared. */
export default function ProductCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const raw = params.get('segment');
  const segment = raw && SEGMENTS[raw] ? raw : 'all';
  const [query, setQuery] = useState('');

  const setSegment = (value) => {
    router.replace(value === 'all' ? pathname : `${pathname}?segment=${value}`, { scroll: false });
  };

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (segment !== 'all' && !p.segments.includes(segment)) return false;
      if (!q) return true;
      return `${p.name} ${p.form} ${p.tagline} ${p.composition || ''}`.toLowerCase().includes(q);
    });
  }, [segment, query]);

  const chips = [['all', 'All Products'], ...Object.entries(SEGMENTS)];

  return (
    <section className="wrap section-y !pt-10 md:!pt-14" aria-label="Product catalogue">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by segment" className="flex flex-wrap gap-2">
          {chips.map(([value, label]) => {
            const active = segment === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => setSegment(value)}
                className={cn(
                  'min-h-11 rounded-full border-2 px-5 text-[14px] font-bold transition-colors duration-300',
                  active ? 'border-brand-deep bg-brand-deep text-white' : 'border-ink/15 text-ink hover:border-brand hover:text-brand-deep',
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="relative w-full lg:w-80">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-soft" />
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or composition"
            autoComplete="off"
            className="min-h-11 w-full rounded-full border-2 border-transparent bg-brand-mist py-2.5 pl-11 pr-10 text-base text-ink placeholder:text-ink/45 focus:border-brand focus:bg-white focus:outline-none"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-ink-soft hover:bg-ink/10">
              <X aria-hidden="true" className="size-4" />
            </button>
          )}
        </div>
      </div>

      <p role="status" aria-live="polite" className="mt-6 text-sm font-semibold text-ink-soft">
        Showing {list.length} {list.length === 1 ? 'product' : 'products'}
        {segment !== 'all' ? ` in ${SEGMENTS[segment]}` : ''}
      </p>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <m.li
              key={p.slug}
              layout={false}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.55, ease, delay: Math.min(i, 8) * 0.04 }}
            >
              <ProductCard product={p} priority={i < 4} />
            </m.li>
          ))}
        </AnimatePresence>
      </ul>

      {list.length === 0 && (
        <div className="mt-10 rounded-3xl bg-brand-mist p-10 text-center">
          <p className="h-sub text-ink">No products found</p>
          <p className="mt-2 text-ink-soft">Try a different name or clear the filters.</p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSegment('all');
            }}
            className="mt-6 rounded-full border-2 border-brand px-6 py-2.5 font-bold text-brand-deep hover:bg-brand-deep hover:text-white"
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}
