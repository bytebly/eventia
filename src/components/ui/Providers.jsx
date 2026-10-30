'use client';

import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';

/** Loads motion features lazily (small bundle) and respects the user's reduced-motion setting. */
export default function Providers({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
