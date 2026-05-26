'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';

const cards = [
  {
    icon: '/images/revamp/file-icon.svg',
    title: 'Product Data, Customers, Blogs, and Pages Migration',
  },
  {
    icon: '/images/revamp/search-icon.svg',
    title: 'SEO Preservation',
  },
  {
    icon: '/images/revamp/settings-icon.svg',
    title: 'Store Functionality Replication',
  },
  {
    icon: '/images/revamp/computer-icon.svg',
    title: 'Shopify Theme 2.0',
  },
  {
    icon: '/images/revamp/brush.svg',
    title: 'Premium Theme Implementation',
  },
  {
    icon: '/images/revamp/lock.svg',
    title: 'UX/UI Improvements & Conversion Layouts',
  },
];

const RevampSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section className="relative overflow-hidden py-[80px] md:py-[100px]">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #22577a 19.3%, #56cc99 45.4%, #22577a 77%)',
        }}
      />

      {/* Wave image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-[position:60%_20%] bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('/images/backgrounds/background2.webp')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-[1206px]">
        <div
          ref={sectionRef}
          className="flex flex-col lg:flex-row lg:gap-[110px] items-start"
        >
          {/* Left column */}
          <motion.div
            className="w-full lg:w-[45%] flex-shrink-0 mb-[40px] lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            {/* Swap icon — rounded square */}
            <div className="w-[56px] h-[56px] rounded-[12px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-[20px]">
              <ArrowLeftRight size={24} color="white" strokeWidth={1.8} />
            </div>

            <h2 className="font-source font-bold text-[28px] md:text-[38px] leading-[1.15] md:leading-[45.6px] tracking-[-1.08px] text-[#FFFFFF] mb-[5px]">
              Replatforming &<br />
              Shopify Store Revamp
            </h2>

            <div
              className="h-[3px] w-[132px] rounded-full mb-[24px]"
              style={{
                background:
                  'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
              }}
            />

            <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[29.25px] text-[#FFFFFF] mb-[24px] max-w-[530px]">
              Switching platforms can feel complex, but our migration specialists
              ensure a seamless transition to Shopify without losing valuable data
              or SEO rankings.
            </p>

            <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[29.25px] text-[#FFFFFF] max-w-[550px]">
              If your current Shopify store feels outdated or is underperforming, we
              help transform it with modern, conversion-focused designs. Bitpastel
              redesigns stores using premium themes and custom UX strategies to
              enhance brand identity and improve customer engagement.
            </p>
          </motion.div>

          {/* Right column — 2x3 grid of cards */}
          <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-[24px] self-start">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="rounded-[16px] p-[20px] md:p-[24px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.10)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
              >
                <div className="w-[46px] h-[46px] rounded-full bg-[rgba(0,187,167,0.20)] flex items-center justify-center mb-[18px]">
                  <img src={card.icon} alt={card.title} width={20} height={20} />
                </div>
                <h3 className="font-source font-bold text-[16px] md:text-[18px] leading-[22.5px] text-[#FFFFFF]">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevampSection;
