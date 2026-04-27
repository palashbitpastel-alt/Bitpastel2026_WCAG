

// import React from 'react'

// import HomeOptimized from '@/components/home/optimized/HomeOptimized'

// export default function page() {
//   return (
//     <HomeOptimized />
//   )
// }

'use client';
import React, { useState, useEffect } from 'react';

import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TechPartnerSection from '@/components/home/TechPartnerSection';
import SatisfiedClientSection from '@/components/home/SatisfiedClientSection';
import ShopifyStoreSection from '@/components/home/ShopifyStoreSection';
import CultureSection from '@/components/home/CultureSection';
import TestimonialsSection from '@/components/home/TestiminialSection';
import CtaSection from '@/components/home/CtaSection';
import Modal from '@/components/Modal';
import SnowfallAnimation from '@/components/SnowfallAnimation';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
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
      
      {isModalOpen && (
        <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default HomePage;