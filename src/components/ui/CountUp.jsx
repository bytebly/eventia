'use client';

import { useCallback, useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

/**
 * Animated number. Screen readers/crawlers get the final value from the hidden span;
 * the visible span counts up when it scrolls into view.
 */
export default function CountUp({ value, suffix = '', duration = 2, plain = false, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotion();
  const format = useCallback((n) => (plain ? String(Math.round(n)) : Math.round(n).toLocaleString('en-IN')), [plain]);

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    if (reduce) {
      node.textContent = format(value) + suffix;
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = format(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, duration, reduce, format]);

  return (
    <>
      <span className="sr-only">
        {format(value)}
        {suffix}
      </span>
      <span ref={ref} aria-hidden="true" className={className}>
        {'0' + suffix}
      </span>
    </>
  );
}
