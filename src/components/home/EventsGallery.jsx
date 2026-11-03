import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { eventPhotos } from '@/data/company';

const groups = [
  { key: 'conference', title: "Doctor's Conference", text: 'Meeting doctors and presenting our product range at the conference.' },
  { key: 'delhi', title: 'Exhibition at Delhi', text: 'Representing Eventia at the pharma exhibition in Delhi.' },
];

export default function EventsGallery() {
  return (
    <section className="bg-white section-y" aria-labelledby="events-title">
      <div className="wrap">
        <SectionHeading
          title="Events & Exhibitions"
          titleClassName="!text-brand-deep"
          intro="Meeting doctors and industry partners face to face at conferences and exhibitions."
        />

        {groups.map((g) => (
          <div key={g.key} className="mt-12">
            <h3 className="text-xl font-extrabold text-ink md:text-2xl">{g.title}</h3>
            <p className="mt-1 text-ink-soft">{g.text}</p>

            <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {eventPhotos
                .filter((p) => p.group === g.key)
                .map((p) => (
                  <li key={p.image}>
                    <Reveal y={30}>
                      <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                        <Image
                          src={p.image}
                          alt={p.alt}
                          fill
                          sizes="(min-width:1024px) 33vw, 50vw"
                          className="object-cover"
                          style={{ objectPosition: p.position }}
                        />
                      </div>
                    </Reveal>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}