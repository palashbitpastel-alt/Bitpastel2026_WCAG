'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingCart, AlertTriangle, Check, Footprints } from 'lucide-react';
import shoeImage from '@/../public/images/checkout/shoe.svg';
import Image from 'next/image';

const checklist = [
  'Checkout extensibility upgrades',
  'Thank You & Order Status extensibility upgrades',
  'Custom checkout blocks & Apps integration',
  'Checkout UI Extensions & Shopify Pixels',
];

/* ─── Checkout Card Mockup (Left Side) ─── */
const CheckoutCard = ({ inView }: { inView: boolean }) => (
  <motion.div
    className='w-full max-w-[550px] mx-auto lg:mx-0'
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
    transition={{ duration: 0.6 }}
  >
    {/* Outer wrapper with dotted bg */}
    <div
      className='rounded-[20px] p-[20px] md:p-[55px]'
      style={{
        background: '#F8FAFB',
        backgroundImage: 'radial-gradient(circle, #D1D5DB 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        boxShadow:
          '0 24px 48px -12px rgba(15, 23, 43, 0.18), 0 8px 18px -8px rgba(15, 23, 43, 0.12)',
      }}
    >
      {/* Inner white card */}
      <div
        className='rounded-[16px] bg-white p-[24px] md:p-[30px]'
        style={{
          boxShadow:
            '0 12px 32px -8px rgba(15, 23, 43, 0.12), 0 4px 10px -4px rgba(15, 23, 43, 0.08)',
        }}
      >
        {/* Header */}
        <div className='flex justify-between items-center mb-[28px]'>
          <h3 className='font-roboto font-bold text-[21.14px] leading-[31.72px] text-[#111827]'>
            Checkout
          </h3>
          <ShoppingCart size={22} color='#6B7280' strokeWidth={1.5} />
        </div>

        {/* Product row */}
        <div className='flex items-center gap-[14px] mb-[24px]'>
          {/* Product image */}
          <div
            className='w-[72px] h-[72px] rounded-[10px] flex items-center justify-center flex-shrink-0 overflow-hidden'
            style={{
              background:
                'linear-gradient(146.52deg, rgba(0, 115, 114, 0.5) 4.73%, rgba(91, 198, 173, 0.5) 96.01%)',
              border: '1.36px solid #7BFFF4',
              boxShadow: '0 4px 12px rgba(0, 115, 114, 0.25)',
            }}
          >
            <Image src={shoeImage} alt='Shoe' width={80} height={80} />
          </div>
          <div className='flex-1'>
            <p className='font-roboto font-medium text-[18px] leading-[23.79px] text-[#0B4F4A]'>
              Nike Air Jordan Retro
            </p>
            <p className='font-roboto font-normal text-[16px] leading-[23.79px] text-[#0B4F4AD6]'>
              Men&apos;s Sneakers
            </p>
            <p className='font-roboto font-bold text-[16px] leading-[23.79px] text-[#0B4F4A]'>
              5% off (tax inc.)
            </p>
          </div>
          <span className='font-roboto font-bold text-[16px] leading-[20px] text-[#0B4F4A]'>
            $165.00
          </span>
        </div>

        {/* Upsell offer box */}
        <div
          className='rounded-[15px] bg-[#F0FDFA] px-[22px] py-[20px] flex items-center gap-[12px] mb-[14px]'
          style={{ border: '1.32px solid #A2E4D8' }}
        >
          <div className='w-[42.29px] h-[42.29px] rounded-full bg-[#cbfbf1] flex items-center justify-center flex-shrink-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
            >
              <path
                d='M19.2068 8.81043C19.6092 10.785 19.3224 12.8379 18.3944 14.6267C17.4664 16.4155 15.9531 17.8321 14.1071 18.6402C12.261 19.4484 10.1937 19.5992 8.24987 19.0676C6.30606 18.5359 4.60324 17.354 3.4254 15.7189C2.24755 14.0837 1.66587 12.0942 1.77735 10.0821C1.88884 8.06996 2.68675 6.15688 4.03803 4.66186C5.38932 3.16684 7.21228 2.18026 9.20293 1.86664C11.1936 1.55302 13.2316 1.93131 14.9771 2.93844'
                stroke='#009689'
                stroke-width='1.10127'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7.92871 9.69105L10.5718 12.3341L19.3819 3.52393'
                stroke='#009689'
                stroke-width='1.10127'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <div>
            <p className='font-roboto font-bold text-[15.86px] leading-[23.79px] text-[#0B4F4A]'>
              Custom Upsell Offer
            </p>
            <p className='font-roboto font-normal text-[13.22px] leading-[19.82px] text-[#00786F]'>
              Add complimentary item for 15% off
            </p>
          </div>
        </div>

        {/* Subtotal / Shipping */}
        <div className='pt-[16px] mb-[16px]'>
          <div className='flex justify-between items-center mb-[8px]'>
            <span className='font-roboto font-medium text-[15.86px] leading-[23.79px] text-[#0B4F4A]'>
              Subtotal
            </span>
            <span className='font-roboto font-bold text-[15.86px] leading-[23.79px] text-[#0B4F4A] text-right'>
              $135.00
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-roboto font-medium text-[15.86px] leading-[23.79px] text-[#0B4F4A]'>
              Shipping
            </span>
            <span className='font-roboto font-bold text-[15.86px] leading-[23.79px] text-[#0B4F4A] text-right'>
              $5.00
            </span>
          </div>
        </div>

        {/* Total */}
        <div className='border-t border-[#E5E7EB] pt-[16px] mb-[24px]'>
          <div className='flex justify-between items-center'>
            <span className='font-roboto font-bold text-[23.79px] leading-[35.68px] text-[#0F172B]'>
              Total
            </span>
            <span className='font-roboto font-bold text-[23.79px] leading-[35.68px] text-[#009689]'>
              $140.00
            </span>
          </div>
        </div>

        {/* Complete Order button */}
        <button className='w-full rounded-[10px] bg-[#0F172B] py-[14px] text-center font-roboto font-bold text-[18.5px] leading-[27.75px] text-[#FFFFFF]'>
          Complete Order
        </button>
      </div>
    </div>
  </motion.div>
);

/* ─── Main Section ─── */
const CheckoutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section className='bg-white py-[80px] md:py-[100px]'>
      <div className='container mx-auto px-4 max-w-[1206px]'>
        <div ref={sectionRef} className='flex flex-col lg:flex-row lg:gap-[60px] items-start'>
          {/* Left — Checkout card mockup */}
          <div className='w-full lg:w-[45%] flex-shrink-0 mb-[40px] lg:mb-0'>
            <CheckoutCard inView={inView} />
          </div>

          {/* Right — Content */}
          <motion.div
            className='w-full lg:flex-1 flex flex-col items-center text-center lg:items-start lg:text-left'
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className='font-source font-bold lg:font-semibold lg:tracking-[-1px] text-[23px] md:text-[38px] leading-[1.15] md:leading-[45.6px] text-[#0F172B] mb-[5px]'>
              Enhanced Checkout &<br />
              Post-Purchase Experiences
            </h2>

            <div
              className='h-[3px] w-[132px] rounded-full mb-[24px]'
              style={{
                background:
                  'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
              }}
            />

            <p
              className='font-roboto font-normal lg:font-light text-[16px] md:text-[18px] leading-[29.25px] text-[#45556C] mb-[20px] max-w-[530px]'
              style={{ wordSpacing: '-1px' }}
            >
              We extend Shopify&apos;s checkout and post-purchase journey to create personalised and
              high-converting experiences.
            </p>

            <p
              className='font-roboto font-normal lg:font-light text-[16px] md:text-[18px] leading-[29.25px] text-[#45556C] mb-[45px] max-w-[530px]'
              style={{ wordSpacing: '-1px' }}
            >
              By leveraging Shopify&apos;s latest Checkout Extensibility framework, we enhance
              critical touchpoints in the customer journey to improve engagement, increase order
              value, and deliver a consistent brand experience.
            </p>

            {/* Important Deadline callout */}
            <div className='rounded-[10px] bg-[#FFF7ED] border-l-[3px] border-[#F97316] px-[20px] py-[16px] mb-[45px] max-w-[530px] text-left self-stretch lg:self-auto'>
              <div className='flex items-start gap-[10px]'>
                <AlertTriangle
                  size={20}
                  color='#F97316'
                  strokeWidth={2}
                  className='flex-shrink-0 mt-[2px]'
                />
                <div>
                  <p className='font-source font-bold text-[16px] leading-[22.4px] text-[#7E2A0C] mb-[4px]'>
                    Important Deadline
                  </p>
                  <p className='font-roboto font-normal text-[14px] leading-[20px] text-[#9F2D00]'>
                    Final deadline to upgrade Thank You &amp; Order Status Extensibility -{' '}
                    <span className='font-bold'>26 August 2026 for non-Plus stores</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className='flex flex-col gap-[12px] text-left self-start'>
              {checklist.map((item, i) => (
                <div key={i} className='flex items-center gap-[12px]'>
                  <div className=' flex items-center justify-center flex-shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.1675 8.33357C18.5481 10.2013 18.2769 12.1431 17.3991 13.8351C16.5213 15.527 15.0899 16.8669 13.3438 17.6313C11.5976 18.3957 9.64221 18.5384 7.8036 18.0355C5.965 17.5327 4.35435 16.4147 3.24025 14.8681C2.12616 13.3214 1.57596 11.4396 1.68141 9.53639C1.78686 7.63318 2.54159 5.82364 3.81973 4.40954C5.09787 2.99545 6.82217 2.06226 8.70508 1.76561C10.588 1.46897 12.5157 1.82679 14.1667 2.7794" stroke="#009689" stroke-width="1.04167" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.5 9.16683L10 11.6668L18.3333 3.3335" stroke="#009689" stroke-width="1.04167" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </div>
                  <span className='font-roboto font-medium text-[16px] leading-[24px] text-[#314158]'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
