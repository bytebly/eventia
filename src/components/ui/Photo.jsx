import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Responsive photo in a fixed-aspect frame (server component, zero JS).
 * Usage: <Photo src="/images/..." alt="..." ratio="4/3" sizes="(min-width:1024px) 50vw, 100vw" />
 * Drop any new image in /public/images and reference it here – Next optimises it automatically.
 */
export default function Photo({
  src,
  alt,
  ratio = '4/3',
  sizes = '100vw',
  priority = false,
  quality = 75,
  fit = 'cover',
  position = 'center',
  className,
  imgClassName,
}) {
  return (
    <div className={cn('relative overflow-hidden', className)} style={{ aspectRatio: ratio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={cn(fit === 'contain' ? 'object-contain' : 'object-cover', imgClassName)}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
