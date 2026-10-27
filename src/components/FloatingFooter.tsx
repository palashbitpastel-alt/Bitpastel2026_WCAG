"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import useScrollToNews from '@/hooks/useScrollToNews';
import Image from 'next/image';

// Mobile nav icons — "-l" = line/default, "-s" = solid/active
import homeLine from '@/../public/images/mobilenavicon/home-l.svg';
import homeSolid from '@/../public/images/mobilenavicon/home-s.svg';
import serviceLine from '@/../public/images/mobilenavicon/service-l.svg';
import serviceSolid from '@/../public/images/mobilenavicon/service-s.svg';
import storiesLine from '@/../public/images/mobilenavicon/stories-l.svg';
import storiesSolid from '@/../public/images/mobilenavicon/stories-s.svg';
import cultureLine from '@/../public/images/mobilenavicon/culture-l.svg';
import cultureSolid from '@/../public/images/mobilenavicon/culture-s.svg';
import contactLine from '@/../public/images/mobilenavicon/contact-l.svg';
import contactSolid from '@/../public/images/mobilenavicon/contact-s.svg';
import careerLine from '@/../public/images/mobilenavicon/career-l.svg';
import careerSolid from '@/../public/images/mobilenavicon/career-s.svg';

const NAV_ICONS: Record<string, { line: string; solid: string }> = {
  home: { line: homeLine, solid: homeSolid },
  service: { line: serviceLine, solid: serviceSolid },
  stories: { line: storiesLine, solid: storiesSolid },
  culture: { line: cultureLine, solid: cultureSolid },
  career: { line: careerLine, solid: careerSolid },
  contact: { line: contactLine, solid: contactSolid },
};

// Map the current URL to its context-specific Free Quote path. Keep this in
// sync with the matching helpers in Header.tsx.
const getFreeQuotePath = (pathname: string | null | undefined): string => {
  if (!pathname) return "/free-quote";
  if (pathname.startsWith("/culture")) return "/culture/free-quote";
  if (pathname.startsWith("/careers")) return "/careers/free-quote";
  if (pathname.startsWith("/shopify")) return "/shopify/free-quote";
  return "/free-quote";
};

const isFreeQuotePath = (path: string | null | undefined): boolean => {
  if (!path) return false;
  return (
    path === "/free-quote" ||
    path === "/culture/free-quote" ||
    path === "/careers/free-quote" ||
    path === "/shopify/free-quote"
  );
};

const FloatingFooter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { scrollToNews } = useScrollToNews();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const lockRef = useRef<NodeJS.Timeout | null>(null);

  const isHomePage = pathname === '/';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      if (lockRef.current) return;
      const sections = ['services', 'stories'];
      let current = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      }
      if (!current) {
        const nearBottom = (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 100);
        if (nearBottom && document.getElementById('stories')) {
          current = 'stories';
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Also detect hash changes for stories
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onHashChange = () => {
      if (window.location.hash === '#stories') setActiveSection('stories');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isActive = (section: string) => {
    if (section === 'home') return isHomePage && !activeSection;
    if (section === 'services') return isHomePage && activeSection === 'services';
    if (section === 'stories') return isHomePage && activeSection === 'stories';
    if (section === 'culture') return pathname === '/culture';
    if (section === 'careers') return pathname?.startsWith('/careers') ?? false;
    if (section === 'contact') return pathname === '/contact' || isFreeQuotePath(pathname);
    return false;
  };

  const handleServicesClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (!isHomePage) {
      router.push('/#services');
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '/#services');
    }
  }, [isHomePage, router]);

  // Open the global Free Quote modal in place (same UX as desktop "Chat with Us"),
  // reflecting the URL as /<scope>/free-quote (scope picked from the current
  // page) without a Next.js navigation.
  const handleContactClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    // Home-page-only showcase: free quote modal disabled
    return;
    if (typeof window === 'undefined') return;
    if (!isFreeQuotePath(window.location.pathname)) {
      const prev =
        window.location.pathname + window.location.search + window.location.hash;
      const targetPath = getFreeQuotePath(window.location.pathname);
      window.history.pushState({ bpFreeQuote: true, prev }, '', targetPath);
    }
    window.dispatchEvent(new CustomEvent('bp:open-free-quote'));
  }, []);

  // Active label colour matches the solid SVG icon colour (#00A974).
  const textCls = (section: string) => `text-xs mt-1 ${isActive(section) ? 'text-[#00855D] font-semibold' : 'text-[#007A7A]'}`;

  // Pick the imported icon asset (line by default, solid when active).
  const navIcon = (name: string, section: string) =>
    isActive(section) ? NAV_ICONS[name].solid : NAV_ICONS[name].line;

  return (
    <div className="root-mobile-nav fixed bottom-0 left-0 right-0 bg-[#ffffff] shadow-lg lg:hidden z-50">
      <div className="footer-mobile-nav flex justify-around items-center py-2">

        {/* Home */}
        <div className="nav-item flex flex-col items-center">
          <Link href="/" className="flex flex-col items-center">
            <Image src={navIcon('home', 'home')} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
            <span className={textCls('home')}>Home</span>
          </Link>
        </div>

        {/* Services */}
        <div className="nav-item flex flex-col items-center">
          <a href="#services" onClick={handleServicesClick} className="flex flex-col items-center">
            <Image src={navIcon('service', 'services')} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
            <span className={textCls('services')}>Services</span>
          </a>
        </div>

        {/* Stories */}
        <div className="nav-item flex flex-col items-center">
          <button onClick={() => {
            setActiveSection('stories');
            if (lockRef.current) clearTimeout(lockRef.current);
            lockRef.current = setTimeout(() => { lockRef.current = null; }, 1200);
            scrollToNews();
          }} className="flex flex-col items-center">
            <Image src={navIcon('stories', 'stories')} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
            <span className={textCls('stories')}>Stories</span>
          </button>
        </div>

        {/* Culture */}
        <div className="nav-item flex flex-col items-center">
          <Link href="#" /* original href: "/culture" */ className="flex flex-col items-center">
            <Image src={navIcon('culture', 'culture')} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
            <span className={textCls('culture')}>Culture</span>
          </Link>
        </div>

        {/* Careers */}
        <div className="nav-item flex flex-col items-center">
          <Link href="#" /* original href: "/careers" */ className="flex flex-col items-center">
            <Image src={navIcon('career', 'careers')} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
            <span className={textCls('careers')}>Careers</span>
          </Link>
        </div>

        {/* Contact */}
        <div className="nav-item flex flex-col items-center">
          <button
            type="button"
            onClick={handleContactClick}
            className="flex flex-col items-center"
            aria-label="Open Get a Free Quote"
          >
            <Image src={navIcon('contact', 'contact')} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px]" />
            <span className={textCls('contact')}>Contact</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default FloatingFooter;