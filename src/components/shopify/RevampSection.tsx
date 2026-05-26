'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowLeftRight,
  LayoutGrid,
} from 'lucide-react';

const Database: React.FC = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12" stroke="#00D5BE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);
const Search: React.FC = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 20.9999L16.66 16.6599" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);
const Settings: React.FC = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.671 4.13591C9.7261 3.55625 9.99533 3.01795 10.4261 2.62619C10.8569 2.23442 11.4182 2.01733 12.0005 2.01733C12.5828 2.01733 13.1441 2.23442 13.5749 2.62619C14.0057 3.01795 14.2749 3.55625 14.33 4.13591C14.3631 4.51036 14.486 4.87133 14.6881 5.18825C14.8903 5.50517 15.1659 5.76872 15.4915 5.95658C15.8171 6.14445 16.1831 6.25111 16.5587 6.26753C16.9343 6.28395 17.3082 6.20964 17.649 6.05091C18.1781 5.81069 18.7777 5.77593 19.331 5.95339C19.8843 6.13086 20.3518 6.50786 20.6425 7.01101C20.9332 7.51417 21.0263 8.10748 20.9036 8.67548C20.781 9.24348 20.4514 9.74552 19.979 10.0839C19.6714 10.2998 19.4203 10.5865 19.2469 10.9199C19.0736 11.2533 18.983 11.6236 18.983 11.9994C18.983 12.3752 19.0736 12.7455 19.2469 13.0789C19.4203 13.4123 19.6714 13.6991 19.979 13.9149C20.4514 14.2533 20.781 14.7553 20.9036 15.3233C21.0263 15.8913 20.9332 16.4846 20.6425 16.9878C20.3518 17.491 19.8843 17.868 19.331 18.0454C18.7777 18.2229 18.1781 18.1881 17.649 17.9479C17.3082 17.7892 16.9343 17.7149 16.5587 17.7313C16.1831 17.7477 15.8171 17.8544 15.4915 18.0422C15.1659 18.2301 14.8903 18.4936 14.6881 18.8106C14.486 19.1275 14.3631 19.4885 14.33 19.8629C14.2749 20.4426 14.0057 20.9809 13.5749 21.3726C13.1441 21.7644 12.5828 21.9815 12.0005 21.9815C11.4182 21.9815 10.8569 21.7644 10.4261 21.3726C9.99533 20.9809 9.7261 20.4426 9.671 19.8629C9.63794 19.4883 9.5151 19.1272 9.31286 18.8102C9.11063 18.4931 8.83497 18.2295 8.50923 18.0416C8.18349 17.8537 7.81727 17.7471 7.44158 17.7308C7.06589 17.7145 6.6918 17.789 6.351 17.9479C5.82189 18.1881 5.22233 18.2229 4.669 18.0454C4.11567 17.868 3.64817 17.491 3.35748 16.9878C3.06679 16.4846 2.97371 15.8913 3.09636 15.3233C3.219 14.7553 3.5486 14.2533 4.021 13.9149C4.32862 13.6991 4.57973 13.4123 4.75309 13.0789C4.92645 12.7455 5.01695 12.3752 5.01695 11.9994C5.01695 11.6236 4.92645 11.2533 4.75309 10.9199C4.57973 10.5865 4.32862 10.2998 4.021 10.0839C3.54926 9.74535 3.22025 9.2435 3.0979 8.67589C2.97555 8.10828 3.06861 7.51545 3.35898 7.01262C3.64936 6.50979 4.11631 6.13288 4.66909 5.95515C5.22187 5.77741 5.82098 5.81154 6.35 6.05091C6.69076 6.20964 7.06474 6.28395 7.4403 6.26753C7.81586 6.25111 8.18193 6.14445 8.50754 5.95658C8.83314 5.76872 9.10869 5.50517 9.31086 5.18825C9.51304 4.87133 9.63588 4.51036 9.669 4.13591" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);
const Monitor: React.FC = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 8V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H12" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 19V15.04V18.19" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 19H12" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 12H18C16.8954 12 16 12.8954 16 14V20C16 21.1046 16.8954 22 18 22H20C21.1046 22 22 21.1046 22 20V14C22 12.8954 21.1046 12 20 12Z" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);
const Brush: React.FC = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14.622 17.8969L3.94202 14.9839" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.376 2.62198C18.5731 2.42486 18.8071 2.26851 19.0646 2.16183C19.3222 2.05515 19.5982 2.00024 19.877 2.00024C20.1557 2.00024 20.4318 2.05515 20.6893 2.16183C20.9469 2.26851 21.1809 2.42486 21.378 2.62198C21.5751 2.81909 21.7314 3.0531 21.8381 3.31064C21.9448 3.56819 21.9997 3.84422 21.9997 4.12298C21.9997 4.40174 21.9448 4.67777 21.8381 4.93531C21.7314 5.19286 21.5751 5.42686 21.378 5.62398L17.36 9.64298C17.2662 9.73674 17.2136 9.8639 17.2136 9.99648C17.2136 10.1291 17.2662 10.2562 17.36 10.35L18.304 11.294C18.7559 11.7459 19.0097 12.3589 19.0097 12.998C19.0097 13.6371 18.7559 14.25 18.304 14.702L17.36 15.646C17.2662 15.7397 17.1391 15.7924 17.0065 15.7924C16.8739 15.7924 16.7467 15.7397 16.653 15.646L8.35397 7.34798C8.26024 7.25421 8.20758 7.12706 8.20758 6.99448C8.20758 6.8619 8.26024 6.73474 8.35397 6.64098L9.29797 5.69698C9.74993 5.24509 10.3629 4.99123 11.002 4.99123C11.6411 4.99123 12.254 5.24509 12.706 5.69698L13.65 6.64098C13.7437 6.73471 13.8709 6.78737 14.0035 6.78737C14.1361 6.78737 14.2632 6.73471 14.357 6.64098L18.376 2.62198Z" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.99998 8C7.19598 10.71 5.02998 11.46 2.41698 11.948C2.3303 11.9638 2.24924 12.002 2.18179 12.0587C2.11434 12.1154 2.06283 12.1887 2.03235 12.2713C2.00186 12.354 1.99345 12.4432 2.00794 12.5301C2.02243 12.617 2.05932 12.6987 2.11498 12.767L9.43498 21.65C9.58366 21.8079 9.77965 21.9132 9.9934 21.95C10.2071 21.9868 10.4271 21.9531 10.62 21.854C12.735 20.405 16 16.792 16 15" stroke="#00D5BE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);



const cards = [
  {
    icon: Database,
    title: 'Product Data, Customers, Blogs, and Pages Migration',
  },
  {
    icon: Search,
    title: 'SEO Preservation',
  },
  {
    icon: Settings,
    title: 'Store Functionality Replication',
  },
  {
    icon: Monitor,
    title: 'Shopify Theme 2.0',
  },
  {
    icon: Brush,
    title: 'Premium Theme Implementation',
  },
  {
    icon: LayoutGrid,
    title: 'UX/UI Improvements & Conversion Layouts',
  },
];

const RevampSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section className="relative overflow-hidden bg-[#0f182c] py-[80px] md:py-[100px]">
      {/* Gradient overlay - dark navy → teal accent → dark navy */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(261.36deg, rgb(17, 24, 44) 43.22%, rgba(0, 213, 190, 0.33) 77.13%, rgb(16, 24, 43) 99.09%)',
        }}
      />

      {/* Wave image overlay flipped */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  pointer-events-none "
        style={{
          backgroundImage: `url('/images/backgrounds/BG2.webp')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-[1206px]">
        <div
          ref={sectionRef}
          className="flex flex-col lg:flex-row lg:gap-[110px] items-center"
        >
          {/* Left column */}
          <motion.div
            className="w-full lg:w-[45%] flex-shrink-0 mb-[40px] lg:mb-0 flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            {/* Swap icon — rounded square with subtle glass */}
            <div className="w-[64px] h-[64px] rounded-[16px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] flex items-center justify-center mb-[10px] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]">
              <ArrowLeftRight size={32} color="white" strokeWidth={1.6} />
            </div>

            <h2 className="font-source font-bold text-[23px] md:text-[38px] leading-[1.15] md:leading-[45.6px] tracking-[-1.08px] text-[#FFF] mb-[5px]">
              Replatforming & Elevated Shopify Experiences
            </h2>

            <div
              className="h-[3px] w-[132px] rounded-full mb-[24px]"
              style={{
                background:
                  'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
              }}
            />

            <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[29.25px] text-[#FFF] mb-[40px] max-w-[557px]">
              Switching platforms can feel complex, but our migration specialists
              ensure a seamless transition to Shopify without losing valuable data
              or SEO rankings.
            </p>

            <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[29.25px] text-[#FFF] max-w-[557px]">
              If your current Shopify store feels outdated or is underperforming, we
              help transform it with modern, conversion-focused designs. Bitpastel
              redesigns stores using premium themes and custom UX strategies to
              enhance brand identity and improve customer engagement.
            </p>
          </motion.div>

          {/* Right column — 2x3 grid of cards */}
          <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-[24px] self-start">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  className="rounded-[16px] p-[25px] h-[159px] backdrop-blur-[27px] flex flex-col items-center text-center sm:items-start sm:text-left"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.10)',
                    boxShadow:
                      '0 10px 15px rgba(0, 0, 0, 0.10), 0 4px 6px rgba(0, 0, 0, 0.10)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <div className="w-[48px] h-[48px] rounded-full bg-[rgba(0,187,167,0.20)] flex items-center justify-center mb-[16px]">
                    <Icon size={24} color="#00D5BE" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-source font-bold text-[18px] leading-[22.5px] text-[#FFF] sm:max-w-[208px]">
                    {card.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevampSection;
