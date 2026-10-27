'use client';

import { MotionConfig } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';

// No entrance animation on the page wrapper: whatever the server renders as
// the starting state (opacity:0 or a translateY offset) is what visitors and
// WCAG checkers see before JS hydrates — invisible content or a white gap at
// the top of the page. Content now renders in its final position immediately.
export default function Template({ children }: { children: ReactNode }) {
  // Home-page-only showcase: links are neutralised to href="#". Cancel those clicks
  // so they do nothing at all (no jump to the top of the page, no new tab).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href="#"]');
      if (link) e.preventDefault();
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
