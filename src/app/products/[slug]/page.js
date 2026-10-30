import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import ProductCard from '@/components/products/ProductCard';
import CtaBand from '@/components/home/CtaBand';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb, productSchema } from '@/lib/schema';
import { SEGMENTS, getProduct, productMetaDescription, productUrl, products } from '@/data/products';
import { site } from '@/data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const description = productMetaDescription(p);
  return {
    title: `${p.name} ${p.form}`,
    description,
    alternates: { canonical: productUrl(p) },
    openGraph: {
      type: 'website',
      title: `${p.name} ${p.form} | ${site.name}`,
      description,
      url: productUrl(p),
      images: [{ url: p.posters[0].src, alt: p.posters[0].alt }],
    },
    twitter: { card: 'summary_large_image', title: `${p.name} | ${site.name}`, description, images: [p.posters[0].src] },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = products.filter((x) => x.slug !== p.slug && x.segments.some((s) => p.segments.includes(s))).slice(0, 4);

  return (
    <>
      <JsonLd
        data={[
          breadcrumb([{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }, { name: p.name, path: productUrl(p) }]),
          productSchema(p),
        ]}
      />
      <section className="bg-brand-mist">
        <div className="wrap pb-10 pt-8 md:pb-14 md:pt-10">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-ink-soft">
            <Link href="/" className="hover:text-brand-deep">Home</Link>
            <ChevronRight aria-hidden="true" className="size-4" />
            <Link href="/products" className="hover:text-brand-deep">Products</Link>
            <ChevronRight aria-hidden="true" className="size-4" />
            <span aria-current="page" className="text-ink">{p.name}</span>
          </nav>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="h-display !text-[clamp(2.4rem,1.4rem+4.5vw,4.5rem)] text-brand-deep">{p.name}</h1>
              <p className="lead mt-4 max-w-2xl text-ink">{p.tagline}.</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                <li className="rounded-full bg-brand-deep px-3.5 py-1.5 text-[13px] font-bold text-white">{p.form}</li>
                {p.segments.map((s) => (
                  <li key={s} className="rounded-full border border-brand-deep/25 bg-white px-3.5 py-1.5 text-[13px] font-bold text-brand-deep">
                    {SEGMENTS[s]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href={`/contact?product=${encodeURIComponent(p.name)}`}>Enquire About {p.name}</Button>
              <Button href="/products" variant="outline">All Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap py-12 md:py-16">
        {(p.composition || p.extra) && (
          <Reveal className="mb-10 rounded-3xl border-l-[6px] border-brand bg-white p-6 shadow-[0_24px_50px_-34px_rgba(11,29,69,0.5)] ring-1 ring-ink/5 md:p-8">
            {p.composition && (
              <>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-ink-soft">Composition</h2>
                <p className="mt-2 text-lg font-semibold text-ink">{p.composition}</p>
              </>
            )}
            {p.extra && <p className={`text-[15px] text-ink-soft ${p.composition ? 'mt-3' : ''}`}>{p.extra}</p>}
          </Reveal>
        )}
        <div className="space-y-8">
          {p.posters.map((poster, i) => (
            <Reveal key={poster.src}>
              <figure className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_70px_-40px_rgba(11,29,69,0.6)] ring-1 ring-ink/10">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  width={1800}
                  height={1274}
                  sizes="(min-width:1320px) 1216px, 100vw"
                  quality={85}
                  priority={i === 0}
                  className="h-auto w-full"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-ink-soft">
          For registered medical practitioners. Composition and indications are as given in the product literature; please refer to the pack and prescribing
          information before use. This page is not medical advice.
        </p>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-soft/60 section-y !py-14 md:!py-20" aria-labelledby="related-title">
          <div className="wrap">
            <h2 id="related-title" className="h-sub text-brand-deep">More from our portfolio</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <ProductCard product={r} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <CtaBand title="Interested in this product?" text="Contact our team for availability, partnership and distribution enquiries." />
    </>
  );
}
