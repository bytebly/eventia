'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useMotionValueEvent, useScroll } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import { ctaNav, mainNav } from '@/data/navigation';
import { site } from '@/data/site';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1];

function isActive(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);
  const { scrollY } = useScroll();

  // Slide away when scrolling down, return on scroll up.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const dir = y - lastY.current;
    setScrolled(y > 12);
    if (!open) {
      if (y > 240 && dir > 6) setHidden(true);
      else if (dir < -6 || y <= 240) setHidden(false);
    }
    lastY.current = y;
  });

  // Close the drawer on navigation (state adjusted during render, per React guidance).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Scroll lock + Escape + focus trap while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    const first = drawerRef.current?.querySelector('a,button');
    first?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !drawerRef.current) return;
      const f = [...drawerRef.current.querySelectorAll('a[href],button:not([disabled])'), toggleRef.current].filter(Boolean);
      const firstEl = f[0];
      const lastEl = f[f.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Close drawer if the viewport grows into desktop layout.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const showHeader = useCallback(() => setHidden(false), []);

  return (
    <>
      <m.header
        onFocusCapture={showHeader}
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease }}
        className={cn(
          'sticky top-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter] duration-500',
          open
            ? 'bg-white'
            : scrolled
            ? 'bg-white/90 shadow-[0_1px_0_0_rgba(51,51,51,0.08),0_12px_30px_-18px_rgba(51,51,51,0.25)] backdrop-blur-xl'
            : 'bg-white',
        )}
      >
        <div className="wrap flex h-[72px] items-center justify-between gap-4 lg:h-[84px]">
          <Link href="/" aria-label={`${site.name} – home`} className="relative z-[70] shrink-0">
            <Image
              src={site.logo}
              alt=""
              width={250}
              height={50}
              priority
              unoptimized
              className="h-9 w-auto transition-transform duration-500 ease-[var(--ease-premium)] hover:scale-[1.03] sm:h-10 lg:h-11"
            />
          </Link>

          {/* Desktop */}
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex xl:gap-2">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'group relative whitespace-nowrap px-3 py-3 text-[14px] font-semibold [word-spacing:0.08em] transition-colors duration-300 xl:px-4',
                    active ? 'text-brand-deep' : 'text-ink hover:text-brand-deep',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-3 bottom-1.5 h-0.5 origin-left rounded-full bg-brand transition-transform duration-500 ease-[var(--ease-premium)] xl:inset-x-4',
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </Link>
              );
            })}
            <Link
              href={ctaNav.href}
              aria-current={isActive(pathname, ctaNav.href) ? 'page' : undefined}
              className={cn(
                'ml-3 rounded-full border-2 px-6 py-2.5 text-[14px] font-semibold transition-colors duration-300',
                isActive(pathname, ctaNav.href)
                  ? 'border-brand-deep bg-brand-deep text-white'
                  : 'border-brand text-ink hover:border-brand-deep hover:bg-brand-deep hover:text-white',
              )}
            >
              {ctaNav.label}
            </Link>
          </nav>

          {/* Tablet / mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href={ctaNav.href}
              className="hidden rounded-full border-2 border-brand px-5 py-2 text-[14px] font-semibold text-ink transition-colors hover:bg-brand-deep hover:text-white sm:inline-flex"
            >
              {ctaNav.label}
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative z-[70] grid size-12 place-items-center rounded-full border-2 border-ink/15 transition-colors hover:border-brand"
            >
              <span aria-hidden="true" className="relative block h-3.5 w-6">
                <span
                  className={cn(
                    'absolute left-0 h-0.5 w-6 rounded-full bg-ink transition-all duration-500 ease-[var(--ease-premium)]',
                    open ? 'top-1.5 rotate-45' : 'top-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 h-0.5 w-6 rounded-full bg-ink transition-all duration-500 ease-[var(--ease-premium)]',
                    open ? 'top-1.5 -rotate-45' : 'top-3',
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </m.header>

      <AnimatePresence>
        {open && (
          <m.div
            key="drawer"
            id="mobile-menu"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 2.75rem) 2.75rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.75rem) 2.75rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.75rem) 2.75rem)' }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 overflow-y-auto bg-night text-white lg:hidden"
          >
            <div className="wrap flex min-h-full flex-col pb-10 pt-28">
              <nav aria-label="Mobile">
                <ul className="space-y-1">
                  {[...mainNav, ctaNav].map((item, i) => {
                    const active = isActive(pathname, item.href);
                    return (
                      <m.li
                        key={item.href}
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          aria-current={active ? 'page' : undefined}
                          className={cn(
                            'flex items-baseline justify-between border-b border-white/10 py-3.5 text-[clamp(1.5rem,5.5vw,2.25rem)] font-bold leading-tight tracking-tight transition-colors',
                            active ? 'text-brand' : 'text-white hover:text-brand',
                          )}
                        >
                          {item.label}
                        </Link>
                      </m.li>
                    );
                  })}
                </ul>
              </nav>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-auto space-y-3 pt-10 text-[15px] text-white/80"
              >
                <a href={site.contact.phoneHref} className="flex items-center gap-3 hover:text-brand">
                  <Phone aria-hidden="true" className="size-4 text-brand" /> {site.contact.phone}
                </a>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 hover:text-brand">
                  <Mail aria-hidden="true" className="size-4 text-brand" /> {site.contact.email}
                </a>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
