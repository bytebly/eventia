import PageHero from '@/components/ui/PageHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import CtaBand from '@/components/home/CtaBand';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb } from '@/lib/schema';
import { albums } from '@/data/gallery';

export const metadata = {
  title: 'Gallery – Events, Celebrations & Exhibitions',
  description:
    'Photos from Eventia Pharmaceuticals events: celebrations, team moments and our stall at medical conferences and exhibitions.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }])} />

      <PageHero
        title="Gallery"
        intro="Celebrations, team moments and our presence at events."
        image="/images/gallery/event-stall/stall-wide.webp"
        alt="Wide view of the Eventia stall at an event"
        position="center 40%"
      />

      <section className="wrap section-y" aria-label="Photo gallery">
        <GalleryGrid albums={albums} />
      </section>

      <CtaBand
        title="Want to meet us at our next event?"
        text="Get in touch and we will be happy to tell you where you can find the Eventia team next."
      />
    </>
  );
}