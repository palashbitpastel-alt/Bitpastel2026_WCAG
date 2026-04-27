"use client"

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import useScrollToNews from '@/hooks/useScrollToNews';

const TEAL = "#008B8B";
const GRAY = "#9CA3AF";

const FloatingFooter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { scrollToNews } = useScrollToNews();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const isHomePage = pathname === '/';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      const sections = ['services', 'stories'];
      let current = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
            break;
          }
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
    if (section === 'contact') return pathname === '/contact' || pathname === '/free-quote';
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
  // reflecting the URL as /free-quote without a Next.js navigation.
  const handleContactClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window === 'undefined') return;
    if (window.location.pathname !== '/free-quote') {
      const prev =
        window.location.pathname + window.location.search + window.location.hash;
      window.history.pushState({ bpFreeQuote: true, prev }, '', '/free-quote');
    }
    window.dispatchEvent(new CustomEvent('bp:open-free-quote'));
  }, []);

  const c = (section: string) => isActive(section) ? TEAL : GRAY;
  const textCls = (section: string) => `text-xs mt-1 ${isActive(section) ? 'text-teal-600' : 'text-gray-400'}`;

  return (
    <div className="root-mobile-nav fixed bottom-0 left-0 right-0 bg-[#ffffff] shadow-lg lg:hidden z-50">
      <div className="footer-mobile-nav flex justify-around items-center py-2">

        {/* Home */}
        <div className="nav-item flex flex-col items-center">
          <Link href="/" className="flex flex-col items-center">
            <svg fill="none" height="20" viewBox="0 0 24 21" width="20" stroke={c('home')}>
              <path d="M9.6 21V13.5882H14.4V21H20.4V11.1176H24L12 0L0 11.1176H3.6V21H9.6Z" fill={isActive('home') ? TEAL : ''} />
            </svg>
            <span className={textCls('home')}>Home</span>
          </Link>
        </div>

        {/* Services */}
        <div className="nav-item flex flex-col items-center">
          <a href="#services" onClick={handleServicesClick} className="flex flex-col items-center">
            <svg fill="none" height="20" viewBox="0 0 21 21" width="20">
              <path d="M17.7693 11.494L17.7526 11.633L17.8624 11.7199L20.0543 13.4524L20.0543 13.4524L20.0593 13.4563C20.1627 13.5337 20.1963 13.6691 20.1229 13.8026L18.0241 17.4362L18.0241 17.4362L18.0221 17.4398C17.9524 17.5652 17.8101 17.6114 17.6892 17.5649C17.6888 17.5648 17.6884 17.5646 17.6881 17.5645L15.0788 16.5155L14.9476 16.4628L14.8348 16.5481C14.311 16.9441 13.7391 17.2868 13.1192 17.5398L12.9863 17.594L12.9662 17.7362L12.5724 20.5187L12.5722 20.5187L12.5712 20.5289C12.5589 20.6517 12.4544 20.75 12.3081 20.75H8.10809C7.97586 20.75 7.86228 20.6621 7.82951 20.5108L7.43688 17.7362L7.41676 17.594L7.28382 17.5398C6.66319 17.2865 6.10467 16.9568 5.56898 16.5486L5.456 16.4626L5.32422 16.5155L2.72031 17.5623C2.58309 17.6052 2.44453 17.5542 2.38101 17.4398L2.38104 17.4398L2.37895 17.4362L0.281622 13.8052C0.219213 13.6833 0.252532 13.5302 0.34897 13.4522L2.56573 11.7208L2.68202 11.6299L2.6587 11.4843C2.60846 11.1703 2.58309 10.8291 2.58309 10.5C2.58309 10.1767 2.62051 9.83648 2.67183 9.51575L2.69514 9.37005L2.57886 9.27923L0.360732 7.54673L0.360762 7.54669L0.356844 7.54375C0.253522 7.46626 0.219906 7.33095 0.293255 7.19738L2.39208 3.56379L2.39211 3.56381L2.39413 3.56016C2.46376 3.43483 2.60605 3.38865 2.727 3.43507L5.33735 4.48446L5.46856 4.53721L5.58137 4.45191C6.10516 4.05588 6.67707 3.71322 7.29694 3.46021L7.42988 3.40595L7.45 3.26378L7.84359 0.482435C7.86535 0.339958 7.97252 0.25 8.10809 0.25H12.3081C12.4514 0.25 12.5651 0.34759 12.5857 0.482495C12.5858 0.482775 12.5858 0.483055 12.5859 0.483335L12.9793 3.26378L12.9994 3.40595L13.1324 3.46021C13.753 3.71353 14.3115 4.04322 14.8472 4.45136L14.9602 4.53744L15.092 4.48446L17.6959 3.43766C17.8331 3.39479 17.9717 3.44583 18.0352 3.56016L18.0351 3.56018L18.0372 3.56379L20.1346 7.1948C20.197 7.3167 20.1637 7.46982 20.0672 7.54777C20.0669 7.54803 20.0666 7.54828 20.0663 7.54853L17.8505 9.27923L17.7342 9.37005L17.7575 9.51575C17.8078 9.82998 17.8331 10.158 17.8331 10.5C17.8331 10.8421 17.8078 11.1731 17.7693 11.494ZM6.02059 10.5C6.02059 12.8037 7.9044 14.6875 10.2081 14.6875C12.5118 14.6875 14.3956 12.8037 14.3956 10.5C14.3956 8.1963 12.5118 6.3125 10.2081 6.3125C7.9044 6.3125 6.02059 8.1963 6.02059 10.5Z" stroke={c('services')} strokeWidth="1.5" />
            </svg>
            <span className={textCls('services')}>Services</span>
          </a>
        </div>

        {/* Stories */}
        <div className="nav-item flex flex-col items-center">
          <button onClick={scrollToNews} className="flex flex-col items-center">
            <svg xmlSpace="preserve" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.184 19.249a1.03 1.03 0 0 1-.124-.007c-.651-.071-.864-.79-.869-1.452a153.58 153.58 0 0 1-.002-1.516v-.383c-.433-.132-.87-.275-1.206-.509-1.247-.866-1.889-2.045-1.905-3.53-.02-1.909-.019-4.191-.001-6.413.018-2.158 1.594-3.753 3.746-4.086.199-.028.414-.043.679-.043 3.002-.002 6.005-.004 9.007-.001 2.115.002 3.894 1.283 4.329 3.33.061.285.093.819.094 1.152.007 1.942.005 3.902 0 5.922-.003 1.048-.331 2.08-.966 2.854-.636.776-1.436 1.178-2.458 1.378-.315.061-.774.04-1.036.041-.66.003-1.331.003-1.979.003-.681 0-1.385 0-2.077.004-.015 0-.05.01-.067.021-1.318.872-2.61 1.734-4.144 2.76-.172.115-.684.475-1.021.475zm5.709-16.988-5.391.003c-.215 0-.384.011-.533.034-1.681.259-2.865 1.615-2.879 3.295-.019 2.215-.018 4.217.002 6.12.012 1.158.514 2.089 1.493 2.769.326.227.714.389 1.186.496l.371.084v.58l-.001.634c-.001.494-.001 1.005.002 1.507.001.126.048.28.264.304a.148.148 0 0 0 .021.001c.06 0 .136-.033.245-.106a920.783 920.783 0 0 1 4.148-2.763c.171-.113.385-.178.588-.179.694-.003 1.399-.004 2.081-.004.648 0 1.317 0 1.975-.003.218-.001.473-.008.71-.054 1.633-.318 2.734-1.661 2.738-3.342.005-2.018.004-4.026-.003-5.966a3.63 3.63 0 0 0-.072-.736c-.339-1.596-1.679-2.67-3.333-2.672-1.202-.002-2.407-.002-3.612-.002z" fill={c('stories')} />
              <path d="M10.003 6.591c-1.722 0-3.444.002-5.166-.001-.644-.001-1.072-.53-.853-1.053.133-.318.402-.481.772-.514.067-.006.135-.003.203-.003 3.363 0 6.725-.001 10.088.002.147 0 .302.008.441.047.404.112.637.475.576.866-.056.36-.414.647-.834.653-.481.007-.963.002-1.444.002l-3.783.001zM8.262 9.043c-1.143 0-2.286.003-3.429-.001-.609-.003-1.011-.452-.879-.967.083-.322.4-.566.769-.589.054-.003.109-.004.163-.004h6.797c.509 0 .852.234.937.631.101.472-.272.91-.806.925-.496.014-.993.005-1.49.005H8.262zm1.056 1.67c0 .432-.35.782-.782.782H4.711a.782.782 0 1 1 0-1.564h3.825c.432 0 .782.35.782.782z" fill={c('stories')} />
            </svg>
            <span className={textCls('stories')}>Stories</span>
          </button>
        </div>

        {/* Culture */}
        <div className="nav-item flex flex-col items-center">
          <Link href="/culture" className="flex flex-col items-center">
            <svg fill="none" height="24" stroke={c('culture')} viewBox="0 0 24 24" width="24">
              <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <span className={textCls('culture')}>Culture</span>
          </Link>
        </div>

        {/* Careers */}
        <div className="nav-item flex flex-col items-center">
          <Link href="/careers" className="flex flex-col items-center">
            <svg xmlSpace="preserve" height="20px" viewBox="0 0 40 40" width="20px" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.447,14.585c0,6.069,0,12.138,0,18.207c-0.082,0.295-0.151,0.594-0.25,0.883c-0.692,2.02-2.518,3.285-4.751,3.285c-9.401,0.002-18.802,0.001-28.203,0.001c-0.112,0-0.224-0.001-0.336-0.006c-2.04-0.094-3.749-1.361-4.415-3.28c-0.1-0.288-0.168-0.588-0.25-0.883c0-6.069,0-12.138,0-18.207c0.027-0.092,0.066-0.183,0.079-0.277c0.352-2.544,2.764-4.778,5.335-4.864c1.85-0.062,3.704-0.034,5.556-0.047c0.143-0.001,0.286-0.012,0.452-0.02c0-1.122-0.004-2.202,0.001-3.281c0.008-1.732,1.206-2.975,2.944-2.986c3.158-0.021,6.316-0.021,9.474,0c1.738,0.012,2.935,1.254,2.944,2.986c0.005,0.957,0.001,1.915,0.001,2.872c0,0.133,0,0.266,0,0.43c0.194,0,0.342,0,0.489,0c1.604,0,3.208-0.011,4.811,0.002c2.592,0.021,4.496,1.171,5.609,3.529C39.18,13.447,39.28,14.031,39.447,14.585z M37.204,21.718c-0.504,0.191-0.942,0.41-1.406,0.525c-3.476,0.864-6.958,1.708-10.438,2.556c-0.772,0.188-0.773,0.184-0.798,0.976c-0.054,1.709-1.138,2.761-2.848,2.762c-0.982,0.001-1.964,0.005-2.947-0.002c-0.833-0.006-1.511-0.344-2.045-0.982c-0.531-0.634-0.629-1.39-0.588-2.173c0.017-0.316-0.101-0.425-0.39-0.494c-2.76-0.665-5.517-1.338-8.273-2.018c-1.07-0.264-2.137-0.542-3.2-0.834c-0.264-0.072-0.506-0.223-0.785-0.35c0,3.505-0.006,6.961,0.006,10.417c0.002,0.58,0.172,1.124,0.544,1.592c0.589,0.742,1.37,1,2.294,0.999c7.161-0.009,14.323-0.005,21.484-0.005c2.188,0,4.376-0.004,6.565,0.002c0.65,0.002,1.257-0.112,1.786-0.516c0.753-0.575,1.039-1.362,1.038-2.281c-0.001-3.27,0-6.54,0-9.81C37.204,21.964,37.204,21.844,37.204,21.718z M24.554,22.634c0.075,0,0.114,0.007,0.148-0.001c3.54-0.865,7.084-1.716,10.618-2.608c1.029-0.26,1.686-0.983,1.813-2.043c0.1-0.834,0.069-1.687,0.067-2.531c-0.005-2.201-1.588-3.78-3.784-3.785c-1.952-0.004-3.904-0.001-5.856-0.001c-6.764,0-13.528-0.002-20.292,0.001c-2.013,0.001-3.537,1.314-3.741,3.307c-0.094,0.922-0.077,1.867-0.004,2.793c0.096,1.235,0.825,2.02,2.028,2.315c3.419,0.838,6.841,1.668,10.261,2.5c0.101,0.025,0.203,0.041,0.308,0.062c0.217-1.827,1.609-2.633,3.052-2.545c0.892,0.054,1.791-0.016,2.685,0.022c0.4,0.017,0.823,0.098,1.185,0.262C23.977,20.81,24.456,21.59,24.554,22.634z M25.747,9.378c0.01-0.131,0.024-0.228,0.024-0.325c0.002-0.957,0.004-1.914,0-2.871c-0.003-0.616-0.186-0.805-0.798-0.806c-3.082-0.003-6.164-0.003-9.246,0c-0.629,0.001-0.807,0.189-0.809,0.833c-0.003,0.92,0.015,1.84-0.009,2.759c-0.009,0.344,0.092,0.438,0.435,0.436c3.33-0.012,6.661-0.007,9.991-0.008C25.467,9.397,25.6,9.385,25.747,9.378z M18.396,24.335c0,0.485,0.008,0.97-0.003,1.455c-0.007,0.326,0.143,0.499,0.459,0.502c0.995,0.008,1.99,0.007,2.985,0c0.29-0.002,0.459-0.147,0.457-0.464c-0.005-0.995-0.006-1.99,0.001-2.985c0.002-0.335-0.168-0.483-0.476-0.485c-0.982-0.006-1.965-0.006-2.947,0c-0.335,0.002-0.488,0.178-0.479,0.522C18.407,23.365,18.396,23.85,18.396,24.335z" fill={c('careers')} />
            </svg>
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
            <svg fill="none" height="20" viewBox="0 0 23 23" width="20">
              <path d="M21.9577 16.7225V19.8839C21.9589 20.1774 21.8988 20.4679 21.7812 20.7368C21.6637 21.0057 21.4912 21.247 21.275 21.4454C21.0587 21.6438 20.8034 21.7949 20.5254 21.8889C20.2474 21.9829 19.9528 22.0179 19.6605 21.9914C16.4178 21.6391 13.303 20.5311 10.5664 18.7563C8.02024 17.1384 5.86158 14.9798 4.24367 12.4336C2.46275 9.68454 1.35445 6.55458 1.00855 3.29735C0.98222 3.00594 1.01685 2.71225 1.11024 2.43496C1.20364 2.15767 1.35374 1.90287 1.551 1.68677C1.74827 1.47067 1.98837 1.29802 2.25601 1.1798C2.52366 1.06157 2.81299 1.00038 3.10558 1.0001H6.26693C6.77833 0.995069 7.27412 1.17617 7.66188 1.50964C8.04964 1.84311 8.30292 2.30621 8.37449 2.81261C8.50792 3.82431 8.75538 4.81767 9.11214 5.77374C9.25392 6.15091 9.2846 6.56082 9.20056 6.9549C9.11651 7.34898 8.92126 7.71071 8.63794 7.99722L7.29963 9.33552C8.79975 11.9737 10.9841 14.1581 13.6223 15.6582L14.9606 14.3199C15.2471 14.0366 15.6089 13.8413 16.0029 13.7573C16.397 13.6732 16.8069 13.7039 17.1841 13.8457C18.1402 14.2025 19.1335 14.4499 20.1452 14.5834C20.6571 14.6556 21.1246 14.9134 21.4588 15.3078C21.793 15.7022 21.9706 16.2057 21.9577 16.7225Z" stroke={c('contact')} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <span className={textCls('contact')}>Contact</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default FloatingFooter;