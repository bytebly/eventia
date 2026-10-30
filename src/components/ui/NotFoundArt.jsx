'use client';

import { m } from 'motion/react';

const ease = [0.22, 1, 0.36, 1];

/** "404" where the zero is a ring drawn stroke by stroke (the Eventia orange). */
export default function NotFoundArt() {
  const digit = 'text-[clamp(6rem,22vw,15rem)] font-extrabold leading-none tracking-tighter text-ink';
  return (
    <div role="img" aria-label="Error 404" className="flex items-center justify-center gap-[0.02em]">
      <m.span aria-hidden="true" className={digit} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease }}>
        4
      </m.span>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="size-[clamp(5.2rem,19vw,12.5rem)] -rotate-90 overflow-visible"
      >
        <m.circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#f7941d"
          strokeWidth="9"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.94 }}
          transition={{ duration: 1.6, ease, delay: 0.2 }}
        />
        <m.circle
          cx="50"
          cy="50"
          r="26"
          fill="#ffe4bf"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 160, damping: 12, delay: 1 }}
          style={{ transformOrigin: '50px 50px' }}
        />
      </svg>
      <m.span aria-hidden="true" className={digit} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease, delay: 0.12 }}>
        4
      </m.span>
    </div>
  );
}
