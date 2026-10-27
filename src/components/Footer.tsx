'use client';

import type React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });
import Whatsapp from '@/components/ui/Whatsapp';
import useScrollToNews from '@/hooks/useScrollToNews';
import {  scrollToSection } from '@/utils/navigationUtils';

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

import bitpastelLogoNew from '@/../public/images/bitpastel-logo_new.png';

// Social icons are inline SVG (paths copied from /images/img_basilfacebooksolid.svg,
// img_mingcuteinstagramfill.svg, img_uillinkedin.svg) rather than <Image>: contrast
// checkers treat an <img> with alt text as text and flag it even when it is white on
// the dark footer. The accessible name lives on the surrounding link (aria-label).
const SOCIAL_ICON_PATHS: Record<'facebook' | 'instagram' | 'linkedin', string> = {
  facebook: 'M9.46683 1.9165C8.64908 1.9165 7.86482 2.24135 7.28658 2.81959C6.70835 3.39783 6.3835 4.18209 6.3835 4.99984V6.7165H4.7335C4.65083 6.7165 4.5835 6.78317 4.5835 6.8665V9.13317C4.5835 9.21584 4.65016 9.28317 4.7335 9.28317H6.3835V13.9332C6.3835 14.0158 6.45016 14.0832 6.5335 14.0832H8.80016C8.88283 14.0832 8.95016 14.0165 8.95016 13.9332V9.28317H10.6148C10.6835 9.28317 10.7435 9.2365 10.7602 9.16984L11.3268 6.90317C11.3324 6.88105 11.3329 6.85795 11.3282 6.83563C11.3235 6.81331 11.3138 6.79235 11.2997 6.77435C11.2857 6.75636 11.2678 6.74179 11.2473 6.73177C11.2268 6.72174 11.2043 6.71652 11.1815 6.7165H8.95016V4.99984C8.95016 4.93199 8.96353 4.8648 8.98949 4.80212C9.01546 4.73943 9.05351 4.68248 9.10149 4.6345C9.14947 4.58652 9.20643 4.54846 9.26911 4.5225C9.33179 4.49653 9.39898 4.48317 9.46683 4.48317H11.2002C11.2828 4.48317 11.3502 4.4165 11.3502 4.33317V2.0665C11.3502 1.98384 11.2835 1.9165 11.2002 1.9165H9.46683Z',
  instagram: 'M10.6667 2C11.5507 2 12.3986 2.35119 13.0237 2.97631C13.6488 3.60143 14 4.44928 14 5.33333V10.6667C14 11.5507 13.6488 12.3986 13.0237 13.0237C12.3986 13.6488 11.5507 14 10.6667 14H5.33333C4.44928 14 3.60143 13.6488 2.97631 13.0237C2.35119 12.3986 2 11.5507 2 10.6667V5.33333C2 4.44928 2.35119 3.60143 2.97631 2.97631C3.60143 2.35119 4.44928 2 5.33333 2H10.6667ZM8 5.33333C7.29276 5.33333 6.61448 5.61428 6.11438 6.11438C5.61428 6.61448 5.33333 7.29276 5.33333 8C5.33333 8.70724 5.61428 9.38552 6.11438 9.88562C6.61448 10.3857 7.29276 10.6667 8 10.6667C8.70724 10.6667 9.38552 10.3857 9.88562 9.88562C10.3857 9.38552 10.6667 8.70724 10.6667 8C10.6667 7.29276 10.3857 6.61448 9.88562 6.11438C9.38552 5.61428 8.70724 5.33333 8 5.33333ZM8 6.66667C8.35362 6.66667 8.69276 6.80714 8.94281 7.05719C9.19286 7.30724 9.33333 7.64638 9.33333 8C9.33333 8.35362 9.19286 8.69276 8.94281 8.94281C8.69276 9.19286 8.35362 9.33333 8 9.33333C7.64638 9.33333 7.30724 9.19286 7.05719 8.94281C6.80714 8.69276 6.66667 8.35362 6.66667 8C6.66667 7.64638 6.80714 7.30724 7.05719 7.05719C7.30724 6.80714 7.64638 6.66667 8 6.66667ZM11 4.33333C10.8232 4.33333 10.6536 4.40357 10.5286 4.5286C10.4036 4.65362 10.3333 4.82319 10.3333 5C10.3333 5.17681 10.4036 5.34638 10.5286 5.4714C10.6536 5.59643 10.8232 5.66667 11 5.66667C11.1768 5.66667 11.3464 5.59643 11.4714 5.4714C11.5964 5.34638 11.6667 5.17681 11.6667 5C11.6667 4.82319 11.5964 4.65362 11.4714 4.5286C11.3464 4.40357 11.1768 4.33333 11 4.33333Z',
  linkedin: 'M13.6469 1.3331H2.35354C2.22659 1.33134 2.10054 1.3546 1.98258 1.40156C1.86462 1.44851 1.75707 1.51825 1.66607 1.60678C1.57506 1.6953 1.50239 1.80089 1.4522 1.91751C1.402 2.03412 1.37527 2.15949 1.37354 2.28643V13.7131C1.37527 13.84 1.402 13.9654 1.4522 14.082C1.50239 14.1986 1.57506 14.3042 1.66607 14.3928C1.75707 14.4813 1.86462 14.551 1.98258 14.598C2.10054 14.6449 2.22659 14.6682 2.35354 14.6664H13.6469C13.7738 14.6682 13.8999 14.6449 14.0178 14.598C14.1358 14.551 14.2433 14.4813 14.3343 14.3928C14.4253 14.3042 14.498 14.1986 14.5482 14.082C14.5984 13.9654 14.6251 13.84 14.6269 13.7131V2.28643C14.6251 2.15949 14.5984 2.03412 14.5482 1.91751C14.498 1.80089 14.4253 1.6953 14.3343 1.60678C14.2433 1.51825 14.1358 1.44851 14.0178 1.40156C13.8999 1.3546 13.7738 1.33134 13.6469 1.3331ZM5.39354 12.4931H3.39354V6.4931H5.39354V12.4931ZM4.39354 5.6531C4.11771 5.6531 3.85318 5.54353 3.65814 5.34849C3.46311 5.15345 3.35354 4.88893 3.35354 4.6131C3.35354 4.33728 3.46311 4.07275 3.65814 3.87771C3.85318 3.68267 4.11771 3.5731 4.39354 3.5731C4.54 3.55649 4.68832 3.571 4.82879 3.61569C4.96925 3.66038 5.09869 3.73423 5.20864 3.83241C5.31859 3.93059 5.40655 4.05089 5.46678 4.18542C5.52701 4.31996 5.55815 4.4657 5.55815 4.6131C5.55815 4.7605 5.52701 4.90624 5.46678 5.04078C5.40655 5.17532 5.31859 5.29561 5.20864 5.39379C5.09869 5.49197 4.96925 5.56583 4.82879 5.61051C4.68832 5.6552 4.54 5.66971 4.39354 5.6531ZM12.6069 12.4931H10.6069V9.2731C10.6069 8.46643 10.3202 7.93977 9.59354 7.93977C9.36864 7.94141 9.14966 8.01195 8.96609 8.14188C8.78252 8.27181 8.64319 8.45488 8.56687 8.66643C8.5147 8.82313 8.49209 8.98815 8.5002 9.1531V12.4864H6.5002V6.48643H8.5002V7.3331C8.68189 7.01784 8.94614 6.75811 9.2645 6.5819C9.58285 6.40569 9.94325 6.31967 10.3069 6.3331C11.6402 6.3331 12.6069 7.1931 12.6069 9.03977V12.4931Z',
};

const SocialIcon = ({ name }: { name: keyof typeof SOCIAL_ICON_PATHS }) => (
  <svg width={16} height={16} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d={SOCIAL_ICON_PATHS[name]} fill="#FFFFFF" />
  </svg>
);

const NAV_ICONS: Record<string, { line: string; solid: string }> = {
  home: { line: homeLine, solid: homeSolid },
  service: { line: serviceLine, solid: serviceSolid },
  stories: { line: storiesLine, solid: storiesSolid },
  culture: { line: cultureLine, solid: cultureSolid },
  career: { line: careerLine, solid: careerSolid },
  contact: { line: contactLine, solid: contactSolid },
};

// Uniform mobile nav icon size (px) so every item matches.
const NAV_ICON_SIZE = 24;

interface HomePageProps {
  forceModalOpen?: boolean;
  onModalClose?: () => void;
}
const Footer = ({forceModalOpen = false, onModalClose}: HomePageProps) => {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useEffect : () => {};
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';
  const isNavigating = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(forceModalOpen);
  const {scrollToNews} = useScrollToNews();
  // Tracks the URL we should restore when the Free Quote modal is closed.
  const freeQuotePrevUrlRef = useRef<string | null>(null);
  // While set, the IntersectionObserver must not override the active nav item.
  // We set the active section optimistically on click and hold it through the
  // programmatic scroll so the indicator activates instantly and reliably.
  const navLockRef = useRef<NodeJS.Timeout | null>(null);

  const lockActiveSection = useCallback((section: string) => {
    setActiveSection(section);
    if (navLockRef.current) clearTimeout(navLockRef.current);
    navLockRef.current = setTimeout(() => {
      navLockRef.current = null;
    }, 1000);
  }, []);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isHomePage || !isClient) {
      setActiveSection('');
      return;
    }

    const sectionIds = ['services', 'stories'];
    const observer = new IntersectionObserver(
      (entries) => {
        // Don't override the optimistic active set during a click-driven scroll.
        if (navLockRef.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, '', `/#${entry.target.id}`);
            return;
          }
        }
        const anyVisible = entries.some((e) => e.isIntersecting);
        if (!anyVisible) {
          const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];
          const allAbove = sections.every(
            (el) => el.getBoundingClientRect().bottom < 0
          );
          const allBelow = sections.every(
            (el) => el.getBoundingClientRect().top > window.innerHeight
          );
          if (allAbove || allBelow) {
            setActiveSection('');
            window.history.replaceState(null, '', '/');
          }
        }
      },
      { threshold: 0.2 }
    );

    const timerId = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 300);

    return () => {
      clearTimeout(timerId);
      observer.disconnect();
    };
  }, [isHomePage, isClient]);

  useEffect(() => {
    // Skip the auto-close while on the synthetic /free-quote URL we push when
    // the mobile Contact icon is tapped — usePathname won't reflect the
    // pushState, so this effect is naturally inert there, but keep an explicit
    // guard for safety in case Next ever starts tracking it.
    if (pathname === '/free-quote') return;
    setIsModalOpen(false);
  }, [pathname]);

  const handleNavigation = useCallback(
    (path: string, e: React.MouseEvent) => {
      e.preventDefault();
      if (isNavigating.current) return;
      isNavigating.current = true;
      // Home-page-only showcase: navigation disabled
      // router.push(path);
      isNavigating.current = false;
    },
    [router]
  );

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href.includes('#')) {
      const section = href.split('#')[1];
      return pathname.includes(`#${section}`);
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  // const scrollToSection = useCallback(
  //   (sectionId: string, offset = 40, duration = 600) => {
  //     if (!isClient || typeof window === 'undefined') return;

  //     const element = document.getElementById(sectionId);
  //     if (!element) return;

  //     const targetY = element.getBoundingClientRect().top + window.pageYOffset - offset;
  //     const startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //     const startTime = performance.now();
  //     const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  //     const prevBehavior = document.documentElement.style.scrollBehavior;
  //     document.documentElement.style.scrollBehavior = 'auto';

  //     const animate = (now: number) => {
  //       const elapsed = now - startTime;
  //       const progress = Math.min(elapsed / duration, 1);
  //       const eased = easeInOutCubic(progress);
  //       const currentY = startY + (targetY - startY) * eased;

  //       window.scrollTo(0, currentY);

  //       if (progress < 1) {
  //         requestAnimationFrame(animate);
  //       } else {
  //         document.documentElement.style.scrollBehavior = prevBehavior || '';
  //         window.history.pushState(null, '', `#${sectionId}`);
  //         setPendingScroll(null);
  //       }
  //     };

  //     requestAnimationFrame(animate);
  //   },
  //   [isClient]
  // );

  useEffect(() => {
    if (isHomePage && pendingScroll && isClient) {
      const timeoutId = setTimeout(() => {
        scrollToSection(pendingScroll);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [isHomePage, pendingScroll, scrollToSection, isClient]);

  useEffect(() => {
    if (isHomePage && isClient) {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        const timeoutId = setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [isHomePage, scrollToSection, isClient]);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    if (!isHomePage) {
      setPendingScroll(sectionId);
      router.push('/');
    } else if (isClient) {
      scrollToSection(sectionId);
    }
  };

  const handleMobileNavClick = (tabName: string, sectionId?: string) => {
    setCurrentTab(tabName);

    if (sectionId) {
      if (!isHomePage) {
        setPendingScroll(sectionId);
        router.push('/');
      } else if (isClient) {
        scrollToSection(sectionId);
      }
    }
  };


  const openModal = () => {
    // Home-page-only showcase: free quote modal disabled
    // setIsModalOpen(true)
  }

  // Open the Free Quote modal and reflect the URL as /free-quote in place
  // (matches the desktop "Chat with Us" UX in Header).
  const handleContactClick = useCallback(() => {
    // Home-page-only showcase: free quote modal disabled
    return;
    if (typeof window !== 'undefined') {
      const currentUrl =
        window.location.pathname + window.location.search + window.location.hash;
      if (window.location.pathname !== '/free-quote') {
        freeQuotePrevUrlRef.current = currentUrl;
        window.history.pushState({ bpFreeQuote: true, prev: currentUrl }, '', '/free-quote');
      }
    }
    setIsModalOpen(true);
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    if (typeof window !== 'undefined' && window.location.pathname === '/free-quote') {
      // Return to the page the user came from, preserving scroll position.
      if (freeQuotePrevUrlRef.current) {
        window.history.back();
      } else {
        // Direct visit to /free-quote — fall back gracefully.
        router.replace('/');
      }
      freeQuotePrevUrlRef.current = null;
    }
    onModalClose?.();
  };

  // Keep modal state in sync with browser back/forward.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onPopState = () => {
      if (window.location.pathname === '/free-quote') {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
        freeQuotePrevUrlRef.current = null;
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="desktop-footer bg-primary-dark text-[#FCFFF9] lg:pt-16 pt-10 lg:pb-6 pb-16 footer">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[60px] lg:gap-8 mb-8 align-top footer-wrapper">
              <div className="lg:space-y-3 col-start-1 lg:col-span-1 lg:col-start-auto">
                <Link
                  href="/"
                  prefetch={true}
                  className="hidden lg:inline-block rounded-[4px]"
                  onClick={(e) => {
                    if (isHomePage && isClient) {
                      e.preventDefault();
                      window.history.pushState({}, '', '/');
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    } else {
                      setPendingScroll(null);
                    }
                  }}
                >
                  <Image
                    src={bitpastelLogoNew}
                    alt="Bitpastel home"
                    width={202}
                    height={77}
                    className="h-[77px] mb-[-15px] w-auto block"
                  />
                </Link>
                <p className="lg:hidden leading-[1] block lg:mt-0 mt-0 h-[32px] lg:pb-6 type-footer text-[13px]">
                  INFORMATION
                </p>
                <div className="text-[16px] lg:mb-0 mb-[1rem] leading-relaxed block">
                  <a
                    href="#" /* original href: "https://www.google.com/maps/place/Technopolis+Building/@22.5797323,88.4351652,17z/data=!4m14!1m7!3m6!1s0x3a0275a701908349:0x8d6c12852bc079bc!2sTechnopolis+Building!8m2!3d22.5797323!4d88.4377401!16s%2Fg%2F11hblq2494!3m5!1s0x3a0275a701908349:0x8d6c12852bc079bc!8m2!3d22.5797323!4d88.4377401!16s%2Fg%2F11hblq2494?entry=ttu" */
                    /* target="_blank" */
                    rel="noopener noreferrer"
                  >
                    <span className="inline">
                      Technopolis, 11th Floor, BP Block, Sector V,
                      <span className="block">
                      Salt Lake City, Kolkata - 700091
                      </span>
                    </span>
                  </a>
                </div>
                <div className="lg:hidden block space-y-2 text-[13px]">
                  <a className="block text-[16px]" href="#" /* original href: "tel:+1 (872) 444 6679" */>
                    <span>US: +1 (872) 444 6679</span>
                  </a>
                  {/* <a
                    className="block text-[13px]"
                    href="https://api.whatsapp.com/send/?phone=442081446579&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"
                    href="https://api.whatsapp.com/send/?phone=447469539191&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"
                  >
                     </a> */}
                  <a className="block text-[16px]" href="#" /* original href: "tel:+44 7469 539191" */>
                    {/* <span>UK: +44 2081 446579</span> */}
                    <span>UK: +44 7469 539191</span>
                  </a>
                  <a className="block text-[16px]" href="#" /* original href: "tel:+91 9830 566 248" */>
                    <span>IN: +91 9830 566 248</span>
                  </a>
                  <a className="mt-4 block text-[16px]" href="#" /* original href: "mailto:connect@bitpastel.com" */>
                    <span>connect@bitpastel.com</span>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <p className="mt-8 text-[16px] lg:pb-8 pb-2 type-footer leading-[1]">
                    CONNECT WITH US
                  </p>
                  <div className="flex lg:space-x-10 space-x-6 pt-2 lg:pt-0 social-media-wrapper">
                    <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                      <a
                        href="#" /* original href: "https://www.facebook.com/bitpastel" */
                        /* target="_blank" */
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full rounded-full"
                        aria-label="Bitpastel on Facebook"
                      >
                        <SocialIcon name="facebook" />
                      </a>
                    </div>
                    <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                      <a
                        href="#" /* original href: "https://www.instagram.com/bitpastel.ai/" */
                        /* target="_blank" */
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full rounded-full"
                        aria-label="Bitpastel on Instagram"
                      >
                        <SocialIcon name="instagram" />
                      </a>
                    </div>
                    <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                      <a
                        href="#" /* original href: "https://www.linkedin.com/company/bitpastel" */
                        /* target="_blank" */
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full rounded-full"
                        aria-label="Bitpastel on LinkedIn"
                      >
                        <SocialIcon name="linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:max-w-[241px] mx-auto w-full">
                <p className="lg:h-[50px] h-[32px] type-footer leading-[1] text-[18px]">
                  QUICK LINKS
                </p>

                <div className="lg:grid grid-cols-2 hidden">
                  <div className="">
                    <div className="space-y-4 text-[16px]">
                      <div className="block text-[16px]">
                        <Link
                          prefetch={true}
                          href="/"
                          onClick={(e) => {
                            if (isHomePage && isClient) {
                              e.preventDefault();
                              window.history.pushState({}, '', '/');
                              window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                              });
                            } else {
                              setPendingScroll(null);
                            }
                          }}
                          className="hover:text-gray-300 transition-colors"
                        >
                          Home
                        </Link>
                      </div>
                      <div className="block text-[16px]">
                        <button
                          onClick={(e) => handleSectionClick(e, 'culture')}
                          className="hover:text-gray-300 text-[16px] transition-colors"
                        >
                          About
                        </button>
                      </div>
                      {/* <div className="block text-[13px]">
                        <Link
                          href="/portfolio"
                          className="hover:text-gray-300 transition-colors"
                        >
                          Portfolio
                        </Link>
                      </div> */}
                      <div className="block text-[16px]">
                        <button
                          onClick={(e) => handleSectionClick(e, 'services')}
                          className="hover:text-gray-300 text-[16px] transition-colors"
                        >
                          Services
                        </button>
                      </div>
                      <div className="block text-[16px]">
                        <button
                          onClick={scrollToNews}
                          className="hover:text-gray-300 text-[16px] transition-colors"
                        >
                          Stories
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-auto">
                    <div className="space-y-4 text-[16px]">
                      <Link
                        prefetch={true}
                        href="#" /* original href: "/culture" */
                        onClick={(e) => {
                          if (pathname === '/culture') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                          setCurrentTab('culture');
                        }}
                        className="block hover:text-gray-300 transition-colors"
                      >
                        Culture
                      </Link>
                      <div className="hover:text-gray-300 text-[16px] transition-colors">
                        <button
                          onClick={(e) => handleSectionClick(e, 'client')}
                          className="block hover:text-gray-300 text-[16px] mx-auto transition-colors cursor-pointer"
                        >
                          Clientele
                        </button>
                      </div>
                      <Link
                        prefetch={true}
                        href="#" /* original href: "/careers" */
                        onClick={(e) => {
                          if (pathname === '/careers') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                          setCurrentTab('careers');
                        }}
                        // onClick={(e) => handleNavigation("/careers", e)}

                        className="block hover:text-gray-300 transition-colors"
                      >
                        Careers
                      </Link>
                      <Link
                        prefetch={true}
                        href="#" /* original href: "/partners" */
                        onClick={(e) => {
                          if (pathname === '/partners') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className="block hover:text-gray-300 transition-colors cursor-pointer"
                      >
                        Partners
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden mx-auto max-w-[450px]">
                  <div className="grid grid-cols-4 gap-[5px] items-center">
                    <div className="block text-[13px]">
                      <Link
                        prefetch={true}
                        href="/"
                        onClick={(e) => {
                          if (isHomePage && isClient) {
                            e.preventDefault();
                            window.history.pushState({}, '', '/');
                            window.scrollTo({
                              top: 0,
                              behavior: 'smooth',
                            });
                          } else {
                            setPendingScroll(null);
                          }
                        }}
                        className="hover:text-gray-300 transition-colors ml-[-5px]"
                      >
                        Home
                      </Link>
                    </div>
                    <div className="block text-[13px]">
                      <button
                        onClick={(e) => handleSectionClick(e, 'culture')}
                        className="hover:text-gray-300 text-[13px] ml-[-12px] transition-colors"
                      >
                        About
                      </button>
                    </div>
                    {/* <div className="block text-[13px]">
                        <Link
                          href="/portfolio"
                          className="hover:text-gray-300 transition-colors"
                        >
                          Portfolio
                        </Link>
                      </div> */}
                    <div className="block text-[13px]">
                      <button
                        onClick={(e) => handleSectionClick(e, 'services')}
                        className="hover:text-gray-300 text-[13px] transition-colors"
                      >
                        Services
                      </button>
                    </div>
                    <div className="block text-[13px]">
                      <button
                        onClick={(e) => handleSectionClick(e, 'stories')}
                        className="hover:text-gray-300 ml-[-10px] text-[13px] transition-colors"
                      >
                        Stories
                      </button>
                    </div>
                    <div className="block text-[13px]">
                      <Link
                        prefetch={true}
                        href="#" /* original href: "/culture" */
                        onClick={(e) => {
                          if (pathname === '/culture') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                          setCurrentTab('culture');
                        }}
                        className="block hover:text-gray-300 transition-colors"
                      >
                        Culture
                      </Link>
                    </div>
                    <div className="block text-[13px]">
                      <button
                        onClick={(e) => handleSectionClick(e, 'client')}
                        className="block hover:text-gray-300 text-[13px] mx-auto transition-colors cursor-pointer"
                      >
                        Clientele
                      </button>
                    </div>
                    <div className="block text-[13px]">
                      <Link
                        prefetch={true}
                        href="#" /* original href: "/careers" */
                        onClick={(e) => {
                          if (pathname === '/careers') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                          setCurrentTab('careers');
                        }}
                        // onClick={(e) => handleNavigation("/careers", e)}

                        className="block hover:text-gray-300 ml-[-5px] transition-colors"
                      >
                        Careers
                      </Link>
                    </div>
                    <div className="block text-[13px]">
                      <Link
                        prefetch={true}
                        href="#" /* original href: "/partners" */
                        onClick={(e) => {
                          if (pathname === '/partners') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className="block hover:text-gray-300 transition-colors cursor-pointer"
                      >
                        Partners
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[13px] lg:space-y-0 space-y-4 lg:ml-auto col-start-1 lg:col-span-1 lg:col-start-auto">
                <p className="lg:hidden block mt-0 text-[13px] lg:pb-6 pb-0 type-footer leading-[1]">
                  CONNECT WITH US
                </p>
                <div className="lg:hidden flex gap-[30px] pt-[5px] social-media-wrapper">
                  <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                    <a
                      href="#" /* original href: "https://www.facebook.com/bitpastel" */
                      /* target="_blank" */
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full rounded-full"
                      aria-label="Bitpastel on Facebook"
                    >
                      <SocialIcon name="facebook" />
                    </a>
                  </div>
                  <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                    <a
                      href="#" /* original href: "https://www.instagram.com/bitpastel.ai/" */
                      /* target="_blank" */
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full rounded-full"
                      aria-label="Bitpastel on Instagram"
                    >
                      <SocialIcon name="instagram" />
                    </a>
                  </div>
                  <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                    <a
                      href="#" /* original href: "https://www.linkedin.com/company/bitpastel" */
                      /* target="_blank" */
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full rounded-full"
                      aria-label="Bitpastel on LinkedIn"
                    >
                      <SocialIcon name="linkedin" />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="hidden lg:block lg:h-[50px] h-[32px] type-footer leading-[1] text-[18px]">
                    INFORMATION
                  </p>
                  <div className="lg:block hidden mt-0 space-y-4">
                    <a className="block text-[16px]" href="#" /* original href: "tel:+1 (872) 444 6679" */ /* target="_blank" */>
                      <span>US: +1 (872) 444 6679</span>
                    </a>
                    {/* <a className="block text-[13px]" href="tel:+44 2081 446579"> */}
                    {/* <a
                      className="block text-[13px]"
                      target="_blank"
                      href="https://api.whatsapp.com/send/?phone=442081446579&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"
                      href="https://api.whatsapp.com/send/?phone=+447469539191&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"
                    >
                      <span>UK: +44 2081 446579</span>
                      <span>UK: +44 7469 539191</span>
                    </a> */}
                    <a className="block text-[16px]" href="#" /* original href: "tel:+44 7469 539191" */ /* target="_blank" */>
                      <span>UK: +44 7469 539191</span>
                    </a>
                    <a className="block text-[16px]" href="#" /* original href: "tel:+91 9830 566 248" */ /* target="_blank" */>
                      <span>IN: +91 9830 566 248</span>
                    </a>
                    <a
                      className="mt-4 block text-[16px]"
                      href="#" /* original href: "mailto:connect@bitpastel.com" */
                      /* target="_blank" */
                    >
                      <span>connect@bitpastel.com</span>
                    </a>
                  </div>
                </div>
                <p className="lg:hidden block text-center text-white text-[12px] font-roboto font-[300] lg:max-w-[100%] max-w-[100%] mx-auto">
                  Copyright © Bitpastel Solution Private Limited {new Date().getFullYear()}
                  <br />
                  All Rights Reserved
                  <span className="px-2">|</span>
                  <Link prefetch={true} href="#" /* original href: "/privacy-policy" */>
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="pt-6 lg:block hidden"
              style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              <p className="text-center text-[#FCFFF9] lg:text-[14px] text-[12px] font-roboto font-[400] lg:max-w-[100%] max-w-[80%] mx-auto">
                Copyright © Bitpastel Solution Private Limited {new Date().getFullYear()} | All Rights Reserved |{' '}
                <Link prefetch={true} href="#" /* original href: "/privacy-policy" */>
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}

           <div className="root-mobile-nav animated-up lg:hidden fixed bottom-4 left-4 right-4 z-50" style={{  borderRadius: "100px",
              border: "0.5px solid rgba(180, 180, 180, 0.50)",
              background: "rgba(255, 255, 255, 0.60)",
              boxShadow: "1px 1px 8.8px 0 rgba(0, 0, 0, 0.13)",
              height: "60px",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",}}>
          <div className="footer-mobile-nav flex justify-around items-center" style={{ height: "64px", paddingLeft: "8px", paddingRight: "8px" }}>
            {/* Home */}
            <div
              className={`nav-item flex flex-col items-center ${isHomePage && isClient && !activeSection ? 'current' : ''}`}
            >
              <Link
                prefetch={true}
                href="/"
                onClick={(e) => {
                  if (isHomePage && isClient) {
                    e.preventDefault();
                    window.history.pushState({}, '', '/');
                    setActiveSection('');
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  } else {
                    setPendingScroll(null);
                  }
                  setCurrentTab('home');
                }}
                className="flex flex-col items-center"
              >
                <Image
                  src={isHomePage && isClient && !activeSection ? NAV_ICONS.home.solid : NAV_ICONS.home.line}
                  alt=""
                  aria-hidden="true"
                  width={NAV_ICON_SIZE}
                  height={NAV_ICON_SIZE}
                  className="h-[24px] w-[24px]"
                />
                <span className="text-[11px] mt-1">Home</span>
              </Link>
            </div>

            {/* Services */}
            <div
              className={`nav-item flex flex-col items-center ${
                isHomePage && isClient && activeSection === 'services' ? 'current' : ''
              }`}
            >
              <button
                onClick={(e) => {
                  lockActiveSection('services');
                  handleSectionClick(e, 'services');
                  setCurrentTab('services');
                }}
                className="flex flex-col items-center"
              >
                <Image
                  src={isHomePage && isClient && activeSection === 'services' ? NAV_ICONS.service.solid : NAV_ICONS.service.line}
                  alt=""
                  aria-hidden="true"
                  width={NAV_ICON_SIZE}
                  height={NAV_ICON_SIZE}
                  className="h-[24px] w-[24px]"
                />
                <span className="text-[11px] mt-1">Services</span>
              </button>
            </div>

            {/* Stories */}
            <div
              className={`nav-item flex flex-col items-center ${
                isHomePage && isClient && activeSection === 'stories' ? 'current' : ''
              }`}
            >
              <button
                onClick={() => { lockActiveSection('stories'); scrollToNews(); }}
                className="flex flex-col items-center"
              >
                <Image
                  src={isHomePage && isClient && activeSection === 'stories' ? NAV_ICONS.stories.solid : NAV_ICONS.stories.line}
                  alt=""
                  aria-hidden="true"
                  width={NAV_ICON_SIZE}
                  height={NAV_ICON_SIZE}
                  className="h-[24px] w-[24px]"
                />
                <span className="text-[11px] mt-1">Stories</span>
              </button>
            </div>

            {/* Culture */}
            <div
              className={`nav-item flex flex-col items-center ${pathname.startsWith('/culture') ? 'current' : ''}`}
            >
              <Link
                prefetch={true}
                href="#" /* original href: "/culture" */
                onClick={(e) => {
                  if (pathname === '/culture') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                  setCurrentTab('culture');
                }}
                className="flex flex-col items-center"
              >
                <Image
                  src={pathname.startsWith('/culture') ? NAV_ICONS.culture.solid : NAV_ICONS.culture.line}
                  alt=""
                  aria-hidden="true"
                  width={NAV_ICON_SIZE}
                  height={NAV_ICON_SIZE}
                  className="h-[24px] w-[24px]"
                />
                <span className="text-[11px] mt-1">Culture</span>
              </Link>
            </div>

            {/* Careers */}
            <div
              className={`nav-item flex flex-col items-center ${pathname.startsWith('/careers') ? 'current' : ''}`}
            >
              <Link
                prefetch={true}
                href="#" /* original href: "/careers" */
                onClick={(e) => {
                  if (pathname === '/careers') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                  setCurrentTab('careers');
                }}
                className="flex flex-col items-center"
              >
                <Image
                  src={pathname.startsWith('/careers') ? NAV_ICONS.career.solid : NAV_ICONS.career.line}
                  alt=""
                  aria-hidden="true"
                  width={NAV_ICON_SIZE}
                  height={NAV_ICON_SIZE}
                  className="h-[24px] w-[24px]"
                />
                <span className="text-[11px] mt-1">Careers</span>
              </Link>
            </div>

            {/* Contact */}
            <div className={`nav-item flex flex-col items-center`}>
              <button
                className={`flex flex-col items-center ${isModalOpen ? 'modal-open' : ''}`}
                onClick={handleContactClick}
              >
                <Image
                  src={isModalOpen ? NAV_ICONS.contact.solid : NAV_ICONS.contact.line}
                  alt=""
                  aria-hidden="true"
                  width={NAV_ICON_SIZE}
                  height={NAV_ICON_SIZE}
                  className="h-[24px] w-[24px]"
                />
                <span className="text-[11px] mt-1">Contact</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
      {/* Home-page-only showcase: free quote modal disabled
      <Modal
        open={isModalOpen}
        setIsModalOpen={((value) => {
          const next =
            typeof value === 'function'
              ? (value as (prev: boolean) => boolean)(isModalOpen)
              : value;
          if (next) {
            setIsModalOpen(true);
          } else {
            handleModalClose();
          }
        }) as React.Dispatch<React.SetStateAction<boolean>>}
      /> */}
      <Whatsapp />
    </>
  );
};

export default Footer;
