'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { m, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

/**
 * Full-bleed background photo with gentle scroll parallax.
 * Place inside a `relative` (and ideally `isolate overflow-hidden`) parent.
 */
export default function ParallaxImage({
  src,
  alt = '',
  sizes = '100vw',
  priority = false,
  strength = 9,
  quality = 75,
  className,
  imgClassName,
  position = 'center',
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={cn('absolute inset-0 overflow-hidden', className)} aria-hidden={alt ? undefined : true}>
      <m.div className="absolute inset-x-0 -inset-y-[12%]" style={reduce ? undefined : { y }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className={cn('object-cover', imgClassName)}
          style={{ objectPosition: position }}
        />
      </m.div>
    </div>
  );
}
