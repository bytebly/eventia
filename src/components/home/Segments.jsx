import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import SegmentGrid from './SegmentGrid';

export default function Segments() {
  return (
    <section className="wrap section-y" aria-labelledby="segments-title">
      <SectionHeading
        title="Our Segments"
        titleClassName="!text-brand-deep"
        intro="We serve doctors and healthcare professionals in four focused segments, with a product range built around the everyday needs of their patients."
      />
      <div className="mt-8 md:mt-16">
        <SegmentGrid />
      </div>
      <Reveal className="mt-8 text-center md:mt-12 [&_a]:w-full [&_a]:justify-center sm:[&_a]:w-auto">
        <Button href="/products" variant="outline">
          Explore Products
        </Button>
      </Reveal>
    </section>
  );
}
