import { Suspense } from 'react';
import PageHero from '@/components/ui/PageHero';
import ProductCatalog from '@/components/products/ProductCatalog';
import CtaBand from '@/components/home/CtaBand';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb, productListSchema } from '@/lib/schema';
import { products } from '@/data/products';

export const metadata = {
  title: `Product Range \u2013 ${products.length} Pharma Brands`,
  description: `Browse ${products.length} pharma brands from Eventia: orthopaedics, gynaecology, physician and general practice range in tablets, capsules, syrups, injections and gels.`,
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }]), productListSchema(products)]} />
      <PageHero
        title="Products"
        intro={`${products.length} brands across orthopaedics, gynaecology, physician and general practice.`}
        image="/images/office/eventia-office-interior.webp"
        alt="Inside the Eventia Pharmaceuticals office"
        position="center 35%"
      />
      <Suspense fallback={<div className="wrap section-y" aria-busy="true" />}>
        <ProductCatalog />
      </Suspense>
      <p className="wrap pb-12 text-center text-sm text-ink-soft">
        Product information is intended for registered medical practitioners. Please refer to the pack and prescribing information before use.
      </p>
      <CtaBand title="Looking for a specific product?" text="Tell us what you need and our team will get back to you with availability and details." />
    </>
  );
}
