

// import React from 'react'

// import HomeOptimized from '@/components/home/optimized/HomeOptimized'

// export default function page() {
//   return (
//     <HomeOptimized />
//   )
// }

'use client';
import React from 'react';

import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TechPartnerSection from '@/components/home/TechPartnerSection';
import SatisfiedClientSection from '@/components/home/SatisfiedClientSection';
import ShopifyStoreSection from '@/components/home/ShopifyStoreSection';
import CultureSection from '@/components/home/CultureSection';
import TestimonialsSection from '@/components/home/TestiminialSection';
import CtaSection from '@/components/home/CtaSection';
import SnowfallAnimation from '@/components/SnowfallAnimation';

const HomePage = () => {
  // Open the global Free Quote modal in place (same UX as the header's
  // "Chat with Us" button), reflecting the URL as /free-quote without a
  // Next.js navigation. Mirrors FloatingFooter.handleContactClick.
  const openModal = () => {
    if (typeof window === 'undefined') return;
    const isFreeQuote = window.location.pathname === '/free-quote';
    if (!isFreeQuote) {
      const prev =
        window.location.pathname + window.location.search + window.location.hash;
      window.history.pushState({ bpFreeQuote: true, prev }, '', '/free-quote');
    }
    window.dispatchEvent(new CustomEvent('bp:open-free-quote'));
  };


  return (
    <>
      {/* <SnowfallAnimation /> */}
      <HeroSection openModal={openModal} />
      <ServicesSection />
      <ShopifyStoreSection />
      <TestimonialsSection />
      <SatisfiedClientSection />
      <TechPartnerSection />
      <CultureSection />
      <CtaSection   openModal={openModal} />
    </>
  );
};

export default HomePage;