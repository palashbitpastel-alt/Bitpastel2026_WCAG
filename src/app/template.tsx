'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

// No entrance animation on the page wrapper: whatever the server renders as
// the starting state (opacity:0 or a translateY offset) is what visitors and
// WCAG checkers see before JS hydrates — invisible content or a white gap at
// the top of the page. Content now renders in its final position immediately.
export default function Template({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
