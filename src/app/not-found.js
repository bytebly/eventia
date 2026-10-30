import Link from 'next/link';
import Button from '@/components/ui/Button';
import NotFoundArt from '@/components/ui/NotFoundArt';
import { mainNav } from '@/data/navigation';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-brand-mist py-16 lg:min-h-[calc(100svh-84px)]">
      <div aria-hidden="true" className="capsule animate-float absolute left-[6%] top-[14%] size-16 opacity-80" />
      <div aria-hidden="true" className="capsule animate-float absolute bottom-[12%] right-[8%] size-24 opacity-70 [animation-delay:2.5s]" />
      <div className="wrap text-center">
        <NotFoundArt />
        <h1 className="h-title mt-6 animate-fade-up text-ink [animation-delay:600ms]">Page not found</h1>
        <p className="lead mx-auto mt-4 max-w-lg animate-fade-up text-ink-soft [animation-delay:750ms]">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex animate-fade-up flex-wrap justify-center gap-3 [animation-delay:900ms]">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
        <nav aria-label="Popular pages" className="mt-10 flex animate-fade-up flex-wrap justify-center gap-x-6 gap-y-2 text-[15px] font-semibold [animation-delay:1050ms]">
          {mainNav.slice(0, 2).map((l) => (
            <Link key={l.href} href={l.href} className="text-ink-soft underline-offset-4 hover:text-brand-deep hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
