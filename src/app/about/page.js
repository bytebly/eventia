import PageHero from '@/components/ui/PageHero';
import Story from '@/components/about/Story';
import Numbers from '@/components/about/Numbers';
import Coverage from '@/components/about/Coverage';
import VisionMission from '@/components/about/VisionMission';
import Values from '@/components/home/Values';
import Faq from '@/components/about/Faq';
import CtaBand from '@/components/home/CtaBand';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb, faqPage } from '@/lib/schema';
import { faqs } from '@/data/company';

export const metadata = {
  title: 'About Us \u2013 Vision, Mission & Values',
  description:
    'Eventia Pharmaceuticals, established in 2019, serves around 3,000 clients across Gujarat, Maharashtra and Rajasthan. Read our vision, mission and values.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]), faqPage(faqs)]} />
      <PageHero
        title="About Us"
        intro="Making quality pharmaceutical products accessible, since 2019."
        image="/images/team/eventia-team-outing.webp"
        alt="Eventia Pharmaceuticals team members on a group outing"
        position="center 35%"
      />
      <Story />
      <Numbers />
      <VisionMission />
      <Coverage />
      <Values />
      <Faq />
      <CtaBand />
    </>
  );
}
