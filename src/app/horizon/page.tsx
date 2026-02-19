'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// import SnowfallAnimation from '@/components/SnowfallAnimation';
import HeroSection from '@/components/horizon/HeroSection';
import ChooseHorizonSection from '@/components/horizon/ChooseHorizonSection';
import AiPoweredSection from '@/components/horizon/AiPoweredSection';
import MigrationSection from '@/components/horizon/MigrationSection';
import WhyPartnerSection from '@/components/horizon/WhyPartnerSection';
import FlexibleMigrationSection from '@/components/horizon/FlexibleMigrationSection';
import FAQSection from '@/components/horizon/FAQSection';
import TransformSection from '@/components/horizon/TransformSection';

const Modal = dynamic(() => import('@/components/Modal'), {
  suspense: true,
  ssr: false,
});

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      {/* <SnowfallAnimation /> */}

      <HeroSection openModal={openModal} />
      <ChooseHorizonSection openModal={openModal} />
      <AiPoweredSection openModal={openModal} />
      <MigrationSection openModal={openModal} />
      <WhyPartnerSection openModal={openModal} />
      <FlexibleMigrationSection openModal={openModal} />
      <FAQSection openModal={openModal} />
      <TransformSection openModal={openModal} />

      {isModalOpen && (
        <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen}  />
      )}
    </>
  );
}
