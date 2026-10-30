'use client';

import { m } from 'motion/react';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, margin: '0px 0px -12% 0px' };

/** Soft rise-in. Use sparingly – the big moments use RevealText / ClipReveal. */
export function Reveal({ children, delay = 0, y = 24, className, as = 'div' }) {
  const Tag = m[as] || m.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </Tag>
  );
}

/** Headline revealed word-by-word from behind a mask. */
export function RevealText({ text, as = 'h2', className, delay = 0, stagger = 0.06 }) {
  const Tag = m[as] || m.h2;
  const words = String(text).split(' ');
  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
          <m.span
            className="inline-block will-change-transform"
            variants={{ hidden: { y: '115%' }, show: { y: 0, transition: { duration: 1, ease } } }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </m.span>
        </span>
      ))}
    </Tag>
  );
}

/** Wraps a group so its <StaggerItem> children animate in sequence. */
export function Stagger({ children, className, delay = 0, stagger = 0.09, as = 'div' }) {
  const Tag = m[as] || m.div;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, y = 28, as = 'div' }) {
  const Tag = m[as] || m.div;
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
      }}
    >
      {children}
    </Tag>
  );
}

/** Image/frame reveal: unmasks from the bottom while settling in. */
export function ClipReveal({ children, className, delay = 0 }) {
  return (
    <m.div
      className={cn('will-change-[clip-path]', className)}
      initial={{ clipPath: 'inset(14% 0% 0% 0% round 28px)', opacity: 0.001 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 28px)', opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 1.25, delay, ease }}
    >
      {children}
    </m.div>
  );
}
