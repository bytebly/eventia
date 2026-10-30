import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const base =
  'group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3 text-[15px] font-semibold leading-none isolate transition-colors duration-500 ease-[var(--ease-premium)] before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-[var(--ease-premium)] hover:before:scale-x-100 focus-visible:before:scale-x-100';

const variants = {
  primary:
    'bg-brand-deep text-white before:bg-night',
  outline:
    'border-2 border-brand text-brand-deep before:bg-brand-deep hover:text-white hover:border-brand-deep focus-visible:text-white',
  light:
    'border-2 border-white/80 text-white before:bg-white hover:text-night focus-visible:text-night',
  white:
    'bg-white text-night before:bg-brand-deep hover:text-white focus-visible:text-white',
};

/** Link-styled button. Internal links use next/link, mailto/tel/http use <a>. */
export default function Button({ href, children, variant = 'primary', arrow = true, className, ...props }) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-[18px] shrink-0 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (!href) {
    return (
      <button type="button" className={classes} {...props}>
        {content}
      </button>
    );
  }
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    const isHttp = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
