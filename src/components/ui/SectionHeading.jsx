import { RevealText, Reveal } from './Reveal';
import { cn } from '@/lib/utils';

/** Heading + optional intro. Centered by default. */
export default function SectionHeading({ title, intro, align = 'center', as = 'h2', className, titleClassName, tone = 'dark' }) {
  return (
    <div className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      <RevealText
        as={as}
        text={title}
        className={cn('h-title', tone === 'dark' ? 'text-ink' : 'text-white', titleClassName)}
      />
      {intro && (
        <Reveal delay={0.15} className={cn('lead mt-5', tone === 'dark' ? 'text-ink-soft' : 'text-white/85')}>
          {Array.isArray(intro) ? intro.map((t) => <p key={t}>{t}</p>) : <p>{intro}</p>}
        </Reveal>
      )}
    </div>
  );
}
