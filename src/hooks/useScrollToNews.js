// hooks/useScrollToNews.js
'use client';

import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
// GSAP removed for performance optimization - using native scroll fallback

export default function useScrollToNews() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToElement = useCallback((id, opts = {}) => {
    if (typeof window === 'undefined') return;

    // Debug: entering scrollToElement
    try { console.debug('[useScrollToNews] scrollToElement called', { id, opts }); } catch {}

    const element = document.getElementById(id);
    if (!element) {
      try { console.warn('[useScrollToNews] target element not found', { id }); } catch {}
      return;
    }

    const { offset = -10, duration = 900 } = opts;

    // Native scroll implementation (GSAP removed for optimization)
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const elementRect = element.getBoundingClientRect();
    const currentScroll = isSafari
      ? (document.documentElement.scrollTop || document.body.scrollTop)
      : window.pageYOffset;

    let targetY = currentScroll + elementRect.top + offset;

    // Ensure we don't scroll past the document height
    const maxScroll = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    ) - window.innerHeight;
    
    targetY = Math.min(Math.max(targetY, 0), maxScroll);

    // Smooth animation via requestAnimationFrame
    const startY = isSafari
      ? (document.documentElement.scrollTop || document.body.scrollTop)
      : window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;
    const prevBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    const easeInOutCubic = (t) => (
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    );

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentPosition = startY + distance * easeInOutCubic(progress);
      
      if (isSafari) {
        document.documentElement.scrollTop = currentPosition;
        document.body.scrollTop = currentPosition;
      } else {
        window.scrollTo(0, currentPosition);
      }
      
      if (progress < 1) requestAnimationFrame(animateScroll);
      else document.documentElement.style.scrollBehavior = prevBehavior;
    };

    requestAnimationFrame(animateScroll);
  }, []);

  const scrollToNews = useCallback(() => {
    // Debug: click entry
    try { console.debug('[useScrollToNews] scrollToNews triggered', { pathname }); } catch {}

    if (pathname === '/') {
      try { console.debug('[useScrollToNews] on home page → in-page scroll'); } catch {}
      scrollToElement('stories');
      if (typeof window !== 'undefined') {
        try {
          window.history.replaceState(null, '', '#stories');
          setTimeout(() => {
            window.history.replaceState(null, '', '/');
          }, 800);
        } catch (e) {
          // noop
        }
      }
    } else {
      try { console.debug('[useScrollToNews] not on home page → navigating to /#stories'); } catch {}
      router.push('/#stories');
    }
  }, [pathname, router, scrollToElement]);

  // Removed query-based scroll-on-load; switched to hash-based navigation handled by native anchor scroll


  return { scrollToNews };
}
