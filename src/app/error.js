'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="wrap flex min-h-[70svh] flex-col items-center justify-center py-20 text-center">
      <h1 className="h-title text-ink">Something went wrong</h1>
      <p className="lead mt-4 max-w-md text-ink-soft">An unexpected error occurred. Please try again, or head back to the home page.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex min-h-12 items-center rounded-full bg-brand-deep px-7 font-semibold text-white transition-colors hover:bg-night"
        >
          Try again
        </button>
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
