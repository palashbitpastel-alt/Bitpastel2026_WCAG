'use client';

import { motion, useReducedMotion, MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      {/* Slide only, no fade: an opacity:0 starting state is what the server
          renders, so content (including the h1) would be invisible until JS
          hydrates — that fails WCAG checkers and no-JS visitors. */}
      <motion.div
        initial={reduced ? false : { y: 8 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
