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
      router.push(path);
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
    setIsModalOpen(true)
  }

  // Open the Free Quote modal and reflect the URL as /free-quote in place
  // (matches the desktop "Chat with Us" UX in Header).
  const handleContactClick = useCallback(() => {
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
                    src="/images/Footer-logo.png"
                    alt="Bitpastel home"
                    width={196}
                    height={75}
                    className="h-12 w-auto block"
                  />
                </Link>
                <p className="lg:hidden leading-[1] block lg:mt-0 mt-0 h-[32px] lg:pb-6 type-footer text-[13px]">
                  INFORMATION
                </p>
                <div className="text-[16px] lg:mb-0 mb-[1rem] leading-relaxed block">
                  <a
                    href="https://www.google.com/maps/place/Technopolis+Building/@22.5797323,88.4351652,17z/data=!4m14!1m7!3m6!1s0x3a0275a701908349:0x8d6c12852bc079bc!2sTechnopolis+Building!8m2!3d22.5797323!4d88.4377401!16s%2Fg%2F11hblq2494!3m5!1s0x3a0275a701908349:0x8d6c12852bc079bc!8m2!3d22.5797323!4d88.4377401!16s%2Fg%2F11hblq2494?entry=ttu"
                    target="_blank"
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
                  <a className="block text-[16px]" href="tel:+1 (872) 444 6679">
                    <span>US: +1 (872) 444 6679</span>
                  </a>
                  {/* <a
                    className="block text-[13px]"
                    href="https://api.whatsapp.com/send/?phone=442081446579&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"
                    href="https://api.whatsapp.com/send/?phone=447469539191&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"
                  >
                     </a> */}
                  <a className="block text-[16px]" href="tel:+44 7469 539191">
                    {/* <span>UK: +44 2081 446579</span> */}
                    <span>UK: +44 7469 539191</span>
                  </a>
                  <a className="block text-[16px]" href="tel:+91 9830 566 248">
                    <span>IN: +91 9830 566 248</span>
                  </a>
                  <a className="mt-4 block text-[16px]" href="mailto:connect@bitpastel.com">
                    <span>connect@bitpastel.com</span>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <p className="mt-6 text-[16px] lg:pb-6 pb-2 type-footer leading-[1]">
                    CONNECT WITH US
                  </p>
                  <div className="flex lg:space-x-4 space-x-6 pt-2 lg:pt-0 social-media-wrapper">
                    <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                      <a
                        href="https://www.facebook.com/bitpastel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full rounded-full"
                      >
                        <Image
                          src="/images/img_basilfacebooksolid.svg"
                          alt="Bitpastel on Facebook"
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                    <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                      <a
                        href="https://www.instagram.com/bitpastel.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full rounded-full"
                      >
                        <Image
                          src="/images/img_mingcuteinstagramfill.svg"
                          alt="Bitpastel on Instagram"
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                    <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                      <a
                        href="https://www.linkedin.com/company/bitpastel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full rounded-full"
                      >
                        <Image
                          src="/images/img_uillinkedin.svg"
                          alt="Bitpastel on LinkedIn"
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:max-w-[300px] mx-auto w-full">
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
                        href="/culture"
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
                        href="/careers"
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
                        href="/partners"
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
                        href="/culture"
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
                        href="/careers"
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
                        href="/partners"
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
                      href="https://www.facebook.com/bitpastel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full rounded-full"
                    >
                      <Image
                        src="/images/img_basilfacebooksolid.svg"
                        alt="Bitpastel on Facebook"
                        width={16}
                        height={16}
                      />
                    </a>
                  </div>
                  <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                    <a
                      href="https://www.instagram.com/bitpastel.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full rounded-full"
                    >
                      <Image
                        src="/images/img_mingcuteinstagramfill.svg"
                        alt="Bitpastel on Instagram"
                        width={16}
                        height={16}
                      />
                    </a>
                  </div>
                  <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                    <a
                      href="https://www.linkedin.com/company/bitpastel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full rounded-full"
                    >
                      <Image
                        src="/images/img_uillinkedin.svg"
                        alt="Bitpastel on LinkedIn"
                        width={16}
                        height={16}
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="hidden lg:block lg:h-[50px] h-[32px] type-footer leading-[1] text-[18px]">
                    INFORMATION
                  </p>
                  <div className="lg:block hidden mt-0 space-y-4">
                    <a className="block text-[16px]" href="tel:+1 (872) 444 6679" target="_blank">
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
                    <a className="block text-[16px]" href="tel:+44 7469 539191" target="_blank">
                      <span>UK: +44 7469 539191</span>
                    </a>
                    <a className="block text-[16px]" href="tel:+91 9830 566 248" target="_blank">
                      <span>IN: +91 9830 566 248</span>
                    </a>
                    <a
                      className="mt-4 block text-[16px]"
                      href="mailto:connect@bitpastel.com"
                      target="_blank"
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
                  <Link prefetch={true} href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="pt-6 lg:block hidden"
              style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              <p className="text-center lg:text-[13px] text-[13px] font-roboto font-[300] lg:max-w-[100%] max-w-[80%] mx-auto">
                Copyright © Bitpastel Solution Private Limited {new Date().getFullYear()} | All Rights Reserved |{' '}
                <Link prefetch={true} href="/privacy-policy">
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
                href="/culture"
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
                href="/careers"
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
      />
      <Whatsapp />
    </>
  );
};

export default Footer;
