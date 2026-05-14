'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// import SnowfallAnimation from '@/components/SnowfallAnimation';
import HeroSection from '@/components/shopify/HeroSection';
import HorizonBanner from '@/components/shopify/HorizonBanner';
import ChooseHorizonSection from '@/components/shopify/ChooseHorizonSection';
import AiPoweredSection from '@/components/shopify/AiPoweredSection';
import MigrationSection from '@/components/shopify/MigrationSection';
import WhyPartnerSection from '@/components/shopify/WhyPartnerSection';
import FlexibleMigrationSection from '@/components/shopify/FlexibleMigrationSection';
import FAQSection from '@/components/shopify/FAQSection';
import TransformSection from '@/components/shopify/TransformSection';
import AdvantageSection from '@/components/shopify/AdvantageSection';
import BrandingSection from '@/components/shopify/BrandingSection';
import PerformanceSection from '@/components/shopify/PerformanceSection';
import EnhamcementShopify from '@/components/shopify/EnhamcementShopify';
import CheckoutSection from '@/components/shopify/CheckoutSection';
import RevampSection from '@/components/shopify/RevampSection';

const Modal = dynamic(() => import('@/components/Modal'), {
  suspense: true,
  ssr: false,
});

export default function Page () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      {/* <SnowfallAnimation /> */}

      <HeroSection openModal={openModal} />

      <AdvantageSection />
      <BrandingSection />
      <PerformanceSection />
      <RevampSection />
      <CheckoutSection />
      <EnhamcementShopify />
      <HorizonBanner />
      <ChooseHorizonSection openModal={openModal} />
      <AiPoweredSection openModal={openModal} />
      <MigrationSection openModal={openModal} />
      {/* <WhyPartnerSection openModal={openModal} />
       */}
      <FlexibleMigrationSection openModal={openModal} />
      <FAQSection openModal={openModal} />
      <TransformSection openModal={openModal} />

      {isModalOpen && <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
