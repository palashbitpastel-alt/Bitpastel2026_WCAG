'use client';

import type React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import Whatsapp from '@/components/ui/Whatsapp';
import useScrollToNews from '@/hooks/useScrollToNews';
import {  scrollToSection } from '@/utils/navigationUtils';

interface HomePageProps {
  forceModalOpen?: boolean;
  onModalClose?: () => void;
}
const Footer = ({forceModalOpen = false, onModalClose}: HomePageProps) => {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useEffect : () => {};
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';
  const isNavigating = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(forceModalOpen);
  const {scrollToNews} = useScrollToNews();
  // Tracks the URL we should restore when the Free Quote modal is closed.
  const freeQuotePrevUrlRef = useRef<string | null>(null);
  useEffect(() => {
    setIsClient(true);
  }, []);

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

  // Helper component to ensure consistent SVG rendering
  const CareersIcon = ({ active }: { active: boolean }) => {
    if (active) {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12.5v-2h2v2zM7.5 5.417h5V4.173a.25.25 0 0 0-.08-.176.24.24 0 0 0-.177-.08H7.756a.25.25 0 0 0-.176.08.25.25 0 0 0-.08.176zM3.755 16.583q-.562 0-.951-.388a1.3 1.3 0 0 1-.389-.952v-3.201h5.5v.871q0 .286.192.479a.65.65 0 0 0 .478.191h2.827q.286 0 .478-.191a.65.65 0 0 0 .192-.479v-.871h5.5v3.201q0 .564-.389.952a1.3 1.3 0 0 1-.951.388zm-1.34-5.625V6.756q0-.563.389-.95.389-.39.95-.39h2.661V4.17q0-.565.389-.95a1.3 1.3 0 0 1 .95-.386h4.488q.563 0 .951.389.39.389.389.951v1.244h2.66q.563 0 .951.388.39.39.389.951v4.202h-5.5v-.871a.65.65 0 0 0-.192-.479.65.65 0 0 0-.478-.191H8.586a.65.65 0 0 0-.478.191.65.65 0 0 0-.192.479v.871z"
            fill="#099"
          />
        </svg>
      );
    }
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.756 16.583q-.562 0-.951-.388a1.3 1.3 0 0 1-.389-.952V6.756q0-.563.389-.95.389-.39.95-.39h2.661V4.17q0-.565.389-.95a1.3 1.3 0 0 1 .95-.386h4.488q.563 0 .951.389.39.389.389.951v1.244h2.66q.563 0 .951.388.39.39.389.951v8.487q0 .564-.389.952a1.3 1.3 0 0 1-.951.388zM7.499 5.417h5V4.173a.25.25 0 0 0-.08-.176.24.24 0 0 0-.176-.08H7.756a.25.25 0 0 0-.176.08.25.25 0 0 0-.08.176zm9 6.625h-4.416v.871q0 .286-.192.479a.65.65 0 0 1-.478.191H8.586a.65.65 0 0 1-.478-.191.65.65 0 0 1-.192-.479v-.871H3.499v3.201q0 .097.08.177.081.08.177.08h12.487a.24.24 0 0 0 .176-.08.24.24 0 0 0 .08-.177zM9 12.5h2v-2H9zm-5.5-1.542h4.417v-.871q0-.287.192-.479a.65.65 0 0 1 .478-.191h2.827q.286 0 .478.191a.65.65 0 0 1 .192.479v.871H16.5V6.756a.24.24 0 0 0-.08-.176.24.24 0 0 0-.176-.08H3.756a.25.25 0 0 0-.176.08.25.25 0 0 0-.08.176z"
          fill="#099"
        />
      </svg>
    );
  };

  // Helper component for Stories icon
  const StoriesIcon = ({ active }: { active: boolean }) => {
    if (active) {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m5.031 14.583-1.478 1.479q-.316.315-.727.143a.62.62 0 0 1-.41-.618V3.756q0-.564.389-.952t.95-.388h12.488q.563 0 .951.388.39.389.389.952v9.487q0 .563-.389.95a1.3 1.3 0 0 1-.951.39zm.718-2.791h5.5a.526.526 0 0 0 .542-.538.53.53 0 0 0-.156-.387.52.52 0 0 0-.386-.159h-5.5a.53.53 0 0 0-.385.155.52.52 0 0 0-.156.383q0 .228.156.387a.52.52 0 0 0 .385.159m0-2.75h8.5a.53.53 0 0 0 .386-.155.52.52 0 0 0 .156-.383.53.53 0 0 0-.156-.387.52.52 0 0 0-.386-.159h-8.5a.53.53 0 0 0-.385.155.52.52 0 0 0-.156.383q0 .228.156.387a.52.52 0 0 0 .385.159m0-2.75h8.5a.53.53 0 0 0 .386-.155.52.52 0 0 0 .156-.383.53.53 0 0 0-.156-.387.52.52 0 0 0-.386-.159h-8.5a.53.53 0 0 0-.385.155.52.52 0 0 0-.156.383q0 .228.156.387a.52.52 0 0 0 .385.159"
            fill="#099"
            
          />
        </svg>
      );
    }
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m5.031 14.583-1.478 1.479q-.316.316-.727.144-.41-.17-.41-.62V3.756q0-.563.389-.95.389-.39.95-.39h12.488q.563 0 .951.39.39.387.389.95v9.488q0 .563-.389.95a1.3 1.3 0 0 1-.951.39zM4.583 13.5h11.66a.25.25 0 0 0 .176-.08.25.25 0 0 0 .08-.176V3.757a.24.24 0 0 0-.08-.177.24.24 0 0 0-.176-.08H3.756a.25.25 0 0 0-.176.08.25.25 0 0 0-.08.177V14.59zm1.166-1.708h5.5a.526.526 0 0 0 .542-.537.53.53 0 0 0-.156-.388.52.52 0 0 0-.386-.159h-5.5a.526.526 0 0 0-.541.538q0 .228.155.387a.52.52 0 0 0 .386.159m0-2.75h8.5a.526.526 0 0 0 .542-.538.53.53 0 0 0-.156-.387.52.52 0 0 0-.386-.159h-8.5a.526.526 0 0 0-.541.538q0 .228.155.387a.52.52 0 0 0 .386.159m0-2.75h8.5a.526.526 0 0 0 .542-.538.53.53 0 0 0-.156-.387.52.52 0 0 0-.386-.159h-8.5a.526.526 0 0 0-.541.538q0 .228.155.387a.52.52 0 0 0 .386.159"
          fill="#099"
          
        />
      </svg>
    );
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
        <div className="desktop-footer bg-primary-dark text-white lg:pt-16 pt-10 lg:pb-6 pb-16 footer">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[60px] lg:gap-8 mb-8 align-top footer-wrapper">
              <div className="lg:space-y-3 col-start-1 lg:col-span-1 lg:col-start-auto">
                <Link
                  href="/"
                  prefetch={true}
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
                    alt="Bitpastel Logo"
                    width={196}
                    height={75}
                    className="h-12 w-auto lg:block hidden"
                  />
                </Link>
                <p className="lg:hidden leading-[1] block lg:mt-0 mt-0 h-[32px] lg:pb-6 type-footer text-[13px]">
                  INFORMATION
                </p>
                <div className="text-[13px] lg:mb-0 mb-[1rem] leading-relaxed block">
                  <a
                    href="https://www.google.com/maps/place/Technopolis+Building/@22.5797323,88.4351652,17z/data=!4m14!1m7!3m6!1s0x3a0275a701908349:0x8d6c12852bc079bc!2sTechnopolis+Building!8m2!3d22.5797323!4d88.4377401!16s%2Fg%2F11hblq2494!3m5!1s0x3a0275a701908349:0x8d6c12852bc079bc!8m2!3d22.5797323!4d88.4377401!16s%2Fg%2F11hblq2494?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="inline">
                      Technopolis, 11th Floor, BP Block, Sector V,
                      <br />
                      Salt Lake City, Kolkata - 700091
                    </span>
                  </a>
                </div>
                <div className="lg:hidden block space-y-2 text-[13px]">
                  <a className="block text-[13px]" href="tel:+1 (872) 444 6679">
                    <span>US: +1 (872) 444 6679</span>
                  </a>
                  {/* <a
                    className="block text-[13px]"
                    href="https://api.whatsapp.com/send/?phone=442081446579&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"
                    href="https://api.whatsapp.com/send/?phone=447469539191&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"
                  >
                     </a> */}
                  <a className="block text-[13px]" href="tel:+44 7469 539191">
                    {/* <span>UK: +44 2081 446579</span> */}
                    <span>UK: +44 7469 539191</span>
                  </a>
                  <a className="block text-[13px]" href="tel:+91 9830 566 248">
                    <span>IN: +91 9830 566 248</span>
                  </a>
                  <a className="mt-4 block text-[13px]" href="mailto:connect@bitpastel.com">
                    <span>connect@bitpastel.com</span>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <p className="mt-6 text-[13px] lg:pb-6 pb-2 type-footer leading-[1]">
                    CONNECT WITH US
                  </p>
                  <div className="flex lg:space-x-4 space-x-6 pt-2 lg:pt-0 social-media-wrapper">
                    <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-background-color cursor-pointer">
                      <a
                        href="https://www.facebook.com/bitpastel"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/img_basilfacebooksolid.svg"
                          alt="Facebook"
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
                      >
                        <Image
                          src="/images/img_mingcuteinstagramfill.svg"
                          alt="Instagram"
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
                      >
                        <Image
                          src="/images/img_uillinkedin.svg"
                          alt="LinkedIn"
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:max-w-[300px] mx-auto w-full">
                <p className="lg:h-[50px] h-[32px] type-footer leading-[1] text-[13px]">
                  QUICK LINKS
                </p>

                <div className="lg:grid grid-cols-2 hidden">
                  <div className="">
                    <div className="space-y-4 text-[13px]">
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
                          className="hover:text-gray-300 transition-colors"
                        >
                          Home
                        </Link>
                      </div>
                      <div className="block text-[13px]">
                        <button
                          onClick={(e) => handleSectionClick(e, 'culture')}
                          className="hover:text-gray-300 text-[13px] transition-colors"
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
                          onClick={scrollToNews}
                          className="hover:text-gray-300 text-[13px] transition-colors"
                        >
                          Stories
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-auto">
                    <div className="space-y-4 text-[13px]">
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
                      <div className="hover:text-gray-300 text-[13px] transition-colors">
                        <button
                          onClick={(e) => handleSectionClick(e, 'client')}
                          className="block hover:text-gray-300 text-[13px] mx-auto transition-colors cursor-pointer"
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
                    >
                      <Image
                        src="/images/img_basilfacebooksolid.svg"
                        alt="Facebook"
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
                    >
                      <Image
                        src="/images/img_mingcuteinstagramfill.svg"
                        alt="Instagram"
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
                    >
                      <Image
                        src="/images/img_uillinkedin.svg"
                        alt="LinkedIn"
                        width={16}
                        height={16}
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="hidden lg:block lg:h-[50px] h-[32px] type-footer leading-[1] text-[13px]">
                    INFORMATION
                  </p>
                  <div className="lg:block hidden mt-0 space-y-4">
                    <a className="block text-[13px]" href="tel:+1 (872) 444 6679" target="_blank">
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
                    <a className="block text-[13px]" href="tel:+44 7469 539191" target="_blank">
                      <span>UK: +44 7469 539191</span>
                    </a>
                    <a className="block text-[13px]" href="tel:+91 9830 566 248" target="_blank">
                      <span>IN: +91 9830 566 248</span>
                    </a>
                    <a
                      className="mt-4 block text-[13px]"
                      href="mailto:connect@bitpastel.com"
                      target="_blank"
                    >
                      <span>connect@bitpastel.com</span>
                    </a>
                  </div>
                </div>
                <p className="lg:hidden block text-center text-white text-[13px] font-roboto font-[300] lg:max-w-[100%] max-w-[100%] mx-auto">
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
              className={`nav-item flex flex-col items-center ${pathname === '/' && isClient && !window.location.hash ? 'current' : ''}`}
            >
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
                  setCurrentTab('home');
                }}
                className="flex flex-col items-center"
              >
                <svg fill="none" height="24" viewBox="0 0 24 21" width="24" className="">
                  <path
                    d="M9.6 13.3382H9.35V13.5882V20.75H3.85V11.1176V10.8676H3.6H0.637691L12 0.340803L23.3623 10.8676H20.4H20.15V11.1176V20.75H14.65V13.5882V13.3382H14.4H9.6Z"
                    stroke={
                      pathname === '/' && isClient && !window.location.hash ? '#00A974' : '#00A974'
                    }
                    strokeWidth="1.5"
                    fill={
                      pathname === '/' && isClient && !window.location.hash ? '#00A974' : 'none'
                    }
                  />
                </svg>
                <span className="text-[11px] mt-1">Home</span>
              </Link>
            </div>

            {/* Services */}
            <div
              className={`nav-item flex flex-col items-center ${
                isHomePage && isClient && window.location.hash === '#services' ? 'current' : ''
              }`}
            >
              <button
                onClick={(e) => {
                  handleSectionClick(e, 'services');
                  setCurrentTab('services');
                }}
                className="flex flex-col items-center gap-1"
              >
                <svg fill="none" height="20" viewBox="0 0 21 21" width="20" className="">
                  <path
                    d="M17.7693 11.494L17.7526 11.633L17.8624 11.7199L20.0543 13.4524L20.0543 13.4524L20.0593 13.4563C20.1627 13.5337 20.1963 13.6691 20.1229 13.8026L18.0241 17.4362L18.0241 17.4362L18.0221 17.4398C17.9524 17.5652 17.8101 17.6114 17.6892 17.5649C17.6888 17.5648 17.6884 17.5646 17.6881 17.5645L15.0788 16.5155L14.9476 16.4628L14.8348 16.5481C14.311 16.9441 13.7391 17.2868 13.1192 17.5398L12.9863 17.594L12.9662 17.7362L12.5724 20.5187L12.5722 20.5187L12.5712 20.5289C12.5589 20.6517 12.4544 20.75 12.3081 20.75H8.10809C7.97586 20.75 7.86228 20.6621 7.82951 20.5108L7.43688 17.7362L7.41676 17.594L7.28382 17.5398C6.66319 17.2865 6.10467 16.9568 5.56898 16.5486L5.456 16.4626L5.32422 16.5155L2.72031 17.5623C2.58309 17.6052 2.44453 17.5542 2.38101 17.4398L2.38104 17.4398L2.37895 17.4362L0.281622 13.8052C0.219213 13.6833 0.252532 13.5302 0.34897 13.4522L2.56573 11.7208L2.68202 11.6299L2.6587 11.4843C2.60846 11.1703 2.58309 10.8291 2.58309 10.5C2.58309 10.1767 2.62051 9.83648 2.67183 9.51575L2.69514 9.37005L2.57886 9.27923L0.360732 7.54673L0.360762 7.54669L0.356844 7.54375C0.253522 7.46626 0.219906 7.33095 0.293255 7.19738L2.39208 3.56379L2.39211 3.56381L2.39413 3.56016C2.46376 3.43483 2.60605 3.38865 2.727 3.43507L5.33735 4.48446L5.46856 4.53721L5.58137 4.45191C6.10516 4.05588 6.67707 3.71322 7.29694 3.46021L7.42988 3.40595L7.45 3.26378L7.84359 0.482435C7.86535 0.339958 7.97252 0.25 8.10809 0.25H12.3081C12.4514 0.25 12.5651 0.34759 12.5857 0.482495C12.5858 0.482775 12.5858 0.483055 12.5859 0.483335L12.9793 3.26378L12.9994 3.40595L13.1324 3.46021C13.753 3.71353 14.3115 4.04322 14.8472 4.45136L14.9602 4.53744L15.092 4.48446L17.6959 3.43766C17.8331 3.39479 17.9717 3.44583 18.0352 3.56016L18.0351 3.56018L18.0372 3.56379L20.1346 7.1948C20.197 7.3167 20.1637 7.46982 20.0672 7.54777C20.0669 7.54803 20.0666 7.54828 20.0663 7.54853L17.8505 9.27923L17.7342 9.37005L17.7575 9.51575C17.8078 9.82998 17.8331 10.158 17.8331 10.5C17.8331 10.8421 17.8078 11.1731 17.7693 11.494ZM6.02059 10.5C6.02059 12.8037 7.9044 14.6875 10.2081 14.6875C12.5118 14.6875 14.3956 12.8037 14.3956 10.5C14.3956 8.1963 12.5118 6.3125 10.2081 6.3125C7.9044 6.3125 6.02059 8.1963 6.02059 10.5Z"
                    stroke={
                      isHomePage && isClient && window.location.hash === '#services'
                        ? '#00A974'
                        : '#00A974'
                    }
                    strokeWidth="1.5"
                    fill={
                      isHomePage && isClient && window.location.hash === '#services'
                        ? '#00A974'
                        : 'none'
                    }
                  />
                </svg>
                <span className="text-[11px] mt-1">Services</span>
              </button>
            </div>

            {/* Stories */}
            <div
              className={`nav-item flex flex-col items-center ${
                isHomePage && isClient && window.location.hash === '#stories' ? 'current' : ''
              }`}
            >
              <button
                // onClick={(e) => {
                //   // handleSectionClick(e, 'stories');
                //   // setCurrentTab('stories');
                //   scrollToNews
                // }}
                onClick={() => { try { console.debug('[Footer] Stories button clicked', { pathname }); } catch {}; scrollToNews(); }}
                className="flex flex-col items-center"
              >
                <StoriesIcon
                  active={isHomePage && isClient && window.location.hash === '#stories'}
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
                <svg
                  fill="none"
                  height="24"
                  stroke="#00A974"
                  viewBox="0 0 24 24"
                  width="24"
                  className="ng-star-inserted"
                >
                  <path
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    stroke={pathname.startsWith('/culture') ? '#00A974' : '#00A974'}
                    fill={pathname.startsWith('/culture') ? '#00A974' : 'none'}
                  />
                </svg>
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
                <CareersIcon active={pathname.startsWith('/careers')} />
                <span className="text-[11px] mt-1">Careers</span>
              </Link>
            </div>

            {/* Contact */}
            <div className={`nav-item flex flex-col items-center`}>
              <button
                className={`flex flex-col items-center ${isModalOpen ? 'modal-open' : ''}`}
                onClick={handleContactClick}
              >
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 23 23"
                  width="24"
                  className="ng-star-inserted"
                >
                  <path
                    d="M21.9577 16.7225V19.8839C21.9589 20.1774 21.8988 20.4679 21.7812 20.7368C21.6637 21.0057 21.4912 21.247 21.275 21.4454C21.0587 21.6438 20.8034 21.7949 20.5254 21.8889C20.2474 21.9829 19.9528 22.0179 19.6605 21.9914C16.4178 21.6391 13.303 20.5311 10.5664 18.7563C8.02024 17.1384 5.86158 14.9798 4.24367 12.4336C2.46275 9.68454 1.35445 6.55458 1.00855 3.29735C0.98222 3.00594 1.01685 2.71225 1.11024 2.43496C1.20364 2.15767 1.35374 1.90287 1.551 1.68677C1.74827 1.47067 1.98837 1.29802 2.25601 1.1798C2.52366 1.06157 2.81299 1.00038 3.10558 1.0001H6.26693C6.77833 0.995069 7.27412 1.17617 7.66188 1.50964C8.04964 1.84311 8.30292 2.30621 8.37449 2.81261C8.50792 3.82431 8.75538 4.81767 9.11214 5.77374C9.25392 6.15091 9.2846 6.56082 9.20056 6.9549C9.11651 7.34898 8.92126 7.71071 8.63794 7.99722L7.29963 9.33552C8.79975 11.9737 10.9841 14.1581 13.6223 15.6582L14.9606 14.3199C15.2471 14.0366 15.6089 13.8413 16.0029 13.7573C16.397 13.6732 16.8069 13.7039 17.1841 13.8457C18.1402 14.2025 19.1335 14.4499 20.1452 14.5834C20.6571 14.6556 21.1246 14.9134 21.4588 15.3078C21.793 15.7022 21.9706 16.2057 21.9577 16.7225Z"
                    stroke="#00A974"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fill={isModalOpen ? '#00A974' : `none`}
                  />
                </svg>
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
