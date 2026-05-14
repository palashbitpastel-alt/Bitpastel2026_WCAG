'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type AICard = {
  title: string;
  description: string;
  iconBg: string;
  borderColor: string;
  icon: React.ReactNode;
};

// Inline SVG icons (white stroke on gradient tile)
const SparkleIcon: React.FC = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.6889 3.7521C14.7461 3.44624 14.9084 3.16999 15.1477 2.97119C15.3871 2.7724 15.6885 2.66357 15.9996 2.66357C16.3108 2.66357 16.6121 2.7724 16.8515 2.97119C17.0908 3.16999 17.2531 3.44624 17.3103 3.7521L18.7116 11.1628C18.8111 11.6896 19.0672 12.1743 19.4463 12.5534C19.8255 12.9325 20.3101 13.1886 20.8369 13.2881L28.2476 14.6894C28.5535 14.7466 28.8297 14.9089 29.0285 15.1482C29.2273 15.3876 29.3361 15.6889 29.3361 16.0001C29.3361 16.3113 29.2273 16.6126 29.0285 16.852C28.8297 17.0913 28.5535 17.2536 28.2476 17.3108L20.8369 18.7121C20.3101 18.8116 19.8255 19.0677 19.4463 19.4468C19.0672 19.8259 18.8111 20.3106 18.7116 20.8374L17.3103 28.2481C17.2531 28.554 17.0908 28.8302 16.8515 29.029C16.6121 29.2278 16.3108 29.3366 15.9996 29.3366C15.6885 29.3366 15.3871 29.2278 15.1477 29.029C14.9084 28.8302 14.7461 28.554 14.6889 28.2481L13.2876 20.8374C13.1881 20.3106 12.932 19.8259 12.5529 19.4468C12.1738 19.0677 11.6891 18.8116 11.1623 18.7121L3.75161 17.3108C3.44575 17.2536 3.1695 17.0913 2.9707 16.852C2.77191 16.6126 2.66309 16.3113 2.66309 16.0001C2.66309 15.6889 2.77191 15.3876 2.9707 15.1482C3.1695 14.9089 3.44575 14.7466 3.75161 14.6894L11.1623 13.2881C11.6891 13.1886 12.1738 12.9325 12.5529 12.5534C12.932 12.1743 13.1881 11.6896 13.2876 11.1628L14.6889 3.7521Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.667 2.66699V8.00033" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M29.3333 5.3335H24" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.33366 29.3333C6.80642 29.3333 8.00033 28.1394 8.00033 26.6667C8.00033 25.1939 6.80642 24 5.33366 24C3.8609 24 2.66699 25.1939 2.66699 26.6667C2.66699 28.1394 3.8609 29.3333 5.33366 29.3333Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const ChatIcon: React.FC = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16.0004 6.66657C16.002 6.13328 15.8969 5.60506 15.6914 5.11297C15.4858 4.62089 15.1839 4.17487 14.8035 3.80117C14.423 3.42746 13.9717 3.1336 13.476 2.93688C12.9803 2.74016 12.4503 2.64454 11.9171 2.65565C11.3839 2.66677 10.8583 2.78439 10.3713 3.00159C9.88422 3.2188 9.44551 3.53121 9.08096 3.92044C8.71641 4.30968 8.43337 4.76788 8.24849 5.26811C8.06362 5.76833 7.98063 6.30047 8.00442 6.83324C7.22069 7.03475 6.49309 7.41197 5.87673 7.93632C5.26037 8.46067 4.77141 9.1184 4.44688 9.8597C4.12236 10.601 3.97077 11.4064 4.00361 12.215C4.03645 13.0235 4.25285 13.814 4.63642 14.5266C3.962 15.0745 3.43166 15.7789 3.09154 16.5785C2.75143 17.3781 2.61183 18.2487 2.68491 19.1146C2.75798 19.9804 3.04151 20.8153 3.51083 21.5466C3.98015 22.2779 4.62104 22.8834 5.37776 23.3106C5.28431 24.0336 5.34008 24.768 5.54161 25.4686C5.74314 26.1692 6.08615 26.821 6.54947 27.3838C7.01279 27.9467 7.58657 28.4085 8.23538 28.7409C8.8842 29.0733 9.59426 29.2691 10.3217 29.3164C11.0492 29.3636 11.7786 29.2611 12.4649 29.0154C13.1513 28.7696 13.7799 28.3858 14.3121 27.8876C14.8443 27.3894 15.2687 26.7873 15.559 26.1187C15.8494 25.45 15.9996 24.7289 16.0004 23.9999V6.66657Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 17.3333C13.1194 16.9395 14.0969 16.2227 14.8089 15.2733C15.5209 14.324 15.9354 13.1849 16 12" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.00403 6.8335C8.03039 7.47847 8.21247 8.10749 8.5347 8.66683" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.63574 14.528C4.87966 14.3293 5.14068 14.1527 5.41574 14" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.99962 24C7.08073 24.0004 6.17731 23.7634 5.37695 23.312" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 17.3335H21.3333" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 24H24C24.7072 24 25.3855 24.281 25.8856 24.781C26.3857 25.2811 26.6667 25.9594 26.6667 26.6667V28" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 10.6665H26.6667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.333 10.6667V6.66667C21.333 5.95942 21.614 5.28115 22.1141 4.78105C22.6142 4.28095 23.2924 4 23.9997 4" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.3337 18.0003C21.7018 18.0003 22.0003 17.7018 22.0003 17.3337C22.0003 16.9655 21.7018 16.667 21.3337 16.667C20.9655 16.667 20.667 16.9655 20.667 17.3337C20.667 17.7018 20.9655 18.0003 21.3337 18.0003Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.9997 4.66634C24.3679 4.66634 24.6663 4.36786 24.6663 3.99967C24.6663 3.63148 24.3679 3.33301 23.9997 3.33301C23.6315 3.33301 23.333 3.63148 23.333 3.99967C23.333 4.36786 23.6315 4.66634 23.9997 4.66634Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.6667 28.6668C27.0349 28.6668 27.3333 28.3684 27.3333 28.0002C27.3333 27.632 27.0349 27.3335 26.6667 27.3335C26.2985 27.3335 26 27.632 26 28.0002C26 28.3684 26.2985 28.6668 26.6667 28.6668Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.6667 11.3333C27.0349 11.3333 27.3333 11.0349 27.3333 10.6667C27.3333 10.2985 27.0349 10 26.6667 10C26.2985 10 26 10.2985 26 10.6667C26 11.0349 26.2985 11.3333 26.6667 11.3333Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const BrainIcon: React.FC = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M29.3337 22.6667C29.3337 23.3739 29.0527 24.0522 28.5526 24.5523C28.0525 25.0524 27.3742 25.3333 26.667 25.3333H9.10433C8.39714 25.3335 7.71897 25.6145 7.21899 26.1147L4.28299 29.0507C4.1506 29.183 3.98193 29.2732 3.79831 29.3097C3.61469 29.3462 3.42437 29.3275 3.2514 29.2558C3.07844 29.1842 2.9306 29.0629 2.82657 28.9072C2.72255 28.7516 2.66702 28.5685 2.66699 28.3813V6.66667C2.66699 5.95942 2.94794 5.28115 3.44804 4.78105C3.94814 4.28095 4.62641 4 5.33366 4H26.667C27.3742 4 28.0525 4.28095 28.5526 4.78105C29.0527 5.28115 29.3337 5.95942 29.3337 6.66667V22.6667Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const SearchIcon: React.FC = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16.0003 10.6668V5.3335H10.667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.9997 10.6665H7.99967C6.52692 10.6665 5.33301 11.8604 5.33301 13.3332V23.9998C5.33301 25.4726 6.52692 26.6665 7.99967 26.6665H23.9997C25.4724 26.6665 26.6663 25.4726 26.6663 23.9998V13.3332C26.6663 11.8604 25.4724 10.6665 23.9997 10.6665Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.66699 18.6665H5.33366" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.667 18.6665H29.3337" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 17.3335V20.0002" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 17.3335V20.0002" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const cards: AICard[] = [
  {
    title: 'AI Personalization & Product Recommendations',
    description:
      'We deploy recommendation engines dynamically suggesting products from customer behavior, boosting order value and conversions.',
    iconBg: 'linear-gradient(135deg, #2B7FFF 0%, #615FFF 100%)',
    borderColor: '#d9e3ff',
    icon: <SparkleIcon />,
  },
  {
    title: 'AI-Driven Customer Support & Engagement',
    description:
      'Deploy intelligent chat and support systems that automate responses, assist customers in real-time, and improve overall user experience.',
    iconBg: 'linear-gradient(135deg, #00BBA7 0%, #00BC7D 100%)',
    borderColor: '#ccf1e9',
    icon: <ChatIcon />,
  },
  {
    title: 'AI Inventory & Merchandising Optimisation',
    description:
      'Leverage AI to manage inventory efficiently, forecast demand, and ensure the right products are showcased to the right audience.',
    iconBg: 'linear-gradient(135deg, #FF8904 0%, #FB2C36 100%)',
    borderColor: '#ffdcd3',
    icon: <BrainIcon />,
  },
  {
    title: 'Smart Search & Product Discovery',
    description:
      'Enhance product discovery with AI-powered search, filtering, and merchandising to help customers find what they need faster.',
    iconBg: 'linear-gradient(135deg, #AD46FF 0%, #F6339A 100%)',
    borderColor: '#f2d9fb',
    icon: <SearchIcon />,
  },
];

const AISection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section className="bg-[#f8fafc] py-[80px] md:py-[100px]">
      <div className="container mx-auto px-4 max-w-[1206px]">
        <div ref={sectionRef}>
          {/* Header */}
          <motion.div
            className="flex flex-col items-center mb-[40px] md:mb-[40px]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-source font-bold text-[23px] md:text-[38px] leading-[1.2] md:leading-[49.4px] text-[#0f172b] text-center mb-[16px]">
              AI-Powered Shopify Enhancements
            </h2>

            <div
              className="h-[3px] w-[132px] rounded-full mb-[20px]"
              style={{
                background:
                  'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
              }}
            />

            <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[29.25px] text-[#45556c] text-center max-w-[834px]">
              We help Shopify stores unlock the power of AI to create smarter, more
              personalised shopping experiences. From intelligent product recommendations
              to automated customer interactions, our AI integrations are designed to
              increase engagement, improve conversions, and maximise revenue.
            </p>
          </motion.div>

          {/* 2x2 Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="rounded-[16px] bg-white px-[30px] py-[32px] md:px-[47px] md:py-[32px] flex flex-col items-start text-left mobile-style-admantage"
                style={{
                  boxShadow: '0 0 7px rgba(0,0,0,0.08)',
                  border: `1px solid ${card.borderColor}`,
                  minHeight: '200px',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.12 * i }}
              >
                {/* Icon tile */}
                <div
                  className="w-[56px] h-[56px] rounded-[12px] flex items-center justify-center text-white"
                  style={{
                    background: card.iconBg,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                    marginBottom: '18px',
                  }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-source font-bold text-[20px] leading-[26px] text-[#0f172b] mb-[10px] max-w-[499px] mobile-style-description">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-roboto font-normal text-[16px] leading-[26px] text-[#45556c] max-w-[499px] mobile-style-description">
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
