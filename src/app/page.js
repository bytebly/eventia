import Hero from '@/components/home/Hero';
import StatCards from '@/components/home/StatCards';
import AboutPanel from '@/components/home/AboutPanel';
import Segments from '@/components/home/Segments';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import VisionBand from '@/components/home/VisionBand';
import Values from '@/components/home/Values';
import Moments from '@/components/home/Moments';
import QualityBand from '@/components/home/QualityBand';
import LifeAtEventia from '@/components/home/LifeAtEventia';
import CtaBand from '@/components/home/CtaBand';
import { site } from '@/data/site';

export const metadata = {
  title: { absolute: `${site.name} | Pharma Marketing, Ahmedabad & Mumbai` },
  description:
    'Eventia Pharmaceuticals (est. 2019) promotes quality pharma products to doctors across Gujarat, Maharashtra and Rajasthan. ISO 9001:2015 and GMP certified.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatCards />
      <AboutPanel />
      <Segments />
      <FeaturedProducts />
      <VisionBand />
      <Values />
      <Moments />
      <QualityBand />
      <LifeAtEventia />
      <CtaBand />
    </>
  );
}
