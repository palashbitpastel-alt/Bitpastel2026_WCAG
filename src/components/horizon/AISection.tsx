'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cards = [
  {
    name: 'Rebuy',
    description: 'AI personalisation app for intelligent product recommendations.',
    iconBg: 'linear-gradient(135deg, #4F6BF6 0%, #3B4FD4 100%)',
    borderColor: '#4F6BF6',
    icon: '/images/AiSection/sparkle-icon.svg',
  },
  {
    name: 'Assisty',
    description: 'AI inventory management to forecast and optimize stock levels.',
    iconBg: 'linear-gradient(45deg, #00BBA7 0%, #00BC7D 100%)',
    borderColor: '#2DD4A8',
    icon: '/images/AiSection/brain.svg',
  },
  {
    name: 'Tidio & Reamaze',
    description: 'Customer support automation with smart chatbot routing.',
    iconBg: 'linear-gradient(45deg, #FF8904 0%, #FB2C36 100%)',
    borderColor: '#F97316',
    icon: '/images/AiSection/chat-icon.svg',
  },
  {
    name: 'SurfaceKit',
    description: 'Intelligent merchandising to surface the right products instantly.',
    iconBg: 'linear-gradient(45deg, #AD46FF 0%, #F6339A 100%)',
    borderColor: '#C026D3',
    icon: '/images/AiSection/robot-face.svg',
  },
];

const AISection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section className="bg-[#F9FAFB] py-[80px] md:py-[100px]">
      <div className="container mx-auto px-4 max-w-[1206px]">
        <div ref={sectionRef}>
          {/* Header */}
          <motion.div
            className="flex flex-col items-center mb-[50px] md:mb-[60px]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-source font-bold text-[28px] md:text-[38px] leading-[1.2] md:leading-[49.4px] text-[#0F172B] text-center mb-[5px]">
              AI-Powered Shopify Enhancements
            </h2>

            <div
              className="h-[3px] w-[132px] rounded-full mb-[20px]"
              style={{
                background:
                  'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
              }}
            />

            <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[29.25px] text-[#45556C] text-center max-w-[620px]">
              We help Shopify stores leverage AI-powered tools to personalise shopping
              experiences and increase conversions.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[35px]">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="rounded-[16px] bg-white p-[25px] md:p-[25px]"
                style={{
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  border: `1px solid ${card.borderColor}20`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.12 * i }}
              >
                {/* Icon */}
                <div
                  className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center mb-[20px]"
                  style={{ background: card.iconBg }}
                >
                  <img src={card.icon} alt={card.name} width={24} height={24} />
                </div>

                {/* Title */}
                <h3 className="font-source font-bold text-[20px] leading-[24px] text-[#0F172B] mb-[10px]">
                  {card.name}
                </h3>

                {/* Description */}
                <p className="font-roboto font-normal text-[16px] leading-[22px] text-[#45556C]">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
