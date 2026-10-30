import { cn } from '@/lib/utils';

/**
 * Infinite horizontal ticker (pure CSS). Pauses on hover; falls back to a wrapped,
 * static grid for users who prefer reduced motion.
 */
export default function Marquee({ children, className, itemClassName, reverse = false }) {
  return (
    <div className={cn('mask-fade-x overflow-hidden motion-reduce:[mask-image:none]', className)}>
      <div
        className={cn(
          'flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center',
          reverse && '[animation-direction:reverse]',
        )}
      >
        <div className={cn('flex shrink-0 gap-6 pr-6 motion-reduce:flex-wrap motion-reduce:justify-center', itemClassName)}>{children}</div>
        <div aria-hidden="true" className={cn('flex shrink-0 gap-6 pr-6 motion-reduce:hidden', itemClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
}
