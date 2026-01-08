// hooks/useViewportCenter.ts
'use client';

import { useEffect, useState } from 'react';

type ViewportCenter = {
  x: number;
  y: number;
};

export default function useViewportCenter(): ViewportCenter {
  const [center, setCenter] = useState<ViewportCenter>({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    const updateCenter = () => {
      setCenter({
        x: window.scrollX + window.innerWidth / 2,
        y: window.scrollY + window.innerHeight / 2,
      });
    };

    updateCenter(); // Initial update

    window.addEventListener('resize', updateCenter);
    window.addEventListener('scroll', updateCenter, { passive: true });

    return () => {
      window.removeEventListener('resize', updateCenter);
      window.removeEventListener('scroll', updateCenter);
    };
  }, []);

  return center;
}
