import Button from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/data/site';

/** Closing call-to-action, reused at the bottom of several pages. Stacked full-width buttons on phones. */
export default function CtaBand({ title = 'Partner with Eventia', text = 'Whether you are a healthcare professional, a pharmaceutical manufacturer or a business partner, we would love to hear from you.' }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-deep to-[#0a3d85] text-white" aria-label="Get in touch">
      <div aria-hidden="true" className="hex absolute -right-20 -top-16 size-64 bg-brand/30 md:-right-16 md:-top-24 md:size-[26rem]" />
      <div aria-hidden="true" className="hex absolute -bottom-24 -left-10 size-56 bg-white/[0.07] md:-bottom-32 md:left-[8%] md:size-80" />
      <div className="wrap relative section-y !py-12 md:!py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="h-title">{title}</h2>
          <p className="lead mt-4 text-[16px] leading-relaxed text-white/80 sm:mt-5 sm:text-[length:inherit]">{text}</p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center [&_a]:w-full [&_a]:justify-center sm:[&_a]:w-auto">
            <Button href="/contact" variant="white">
              Contact Us
            </Button>
            <Button href={site.contact.phoneHref} variant="light" arrow={false}>
              Call {site.contact.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
