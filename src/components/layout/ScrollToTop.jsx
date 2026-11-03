'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Every page opens at the very top (hero first), unless the link points to a #section. */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}