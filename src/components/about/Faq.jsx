import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { faqs } from '@/data/company';

/** Native <details> accordion: accessible by default, works without JavaScript, and the answers stay in the HTML for search and AI engines. */
export default function Faq() {
  return (
    <section className="wrap section-y" aria-labelledby="faq-title">
      <SectionHeading title="Frequently Asked Questions" titleClassName="!text-brand-deep" />
      <Reveal className="mx-auto mt-8 max-w-3xl divide-y divide-ink/10 rounded-2xl bg-white ring-1 ring-ink/10 sm:mt-12 sm:rounded-3xl">
        {faqs.map((f, i) => (
          <details key={f.q} className="group px-4 py-1 sm:px-6 sm:py-5 md:px-8" {...(i === 0 ? { open: true } : {})}>
            {/* min-h-14 = a full-size tap target on phones */}
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 text-left font-bold text-brand-deep sm:min-h-0 sm:gap-4 sm:text-lg [&::-webkit-details-marker]:hidden">
              <h3 className="min-w-0 text-[16px] font-bold leading-snug sm:text-lg">{f.q}</h3>
              <ChevronDown aria-hidden="true" className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="pb-4 pr-1 pt-1 text-[15px] leading-relaxed text-ink-soft sm:mt-3 sm:p-0 sm:text-[16px]">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
