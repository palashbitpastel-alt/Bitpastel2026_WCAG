'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingCart, AlertTriangle } from 'lucide-react';

const checklist = [
  'Checkout extensibility upgrades',
  'Thank You & Order Status extensibility upgrades',
  'Custom checkout blocks & Apps integration',
  'Checkout UI Extensions & Shopify Pixels',
];

/* ─── Checkout Card Mockup (Left Side) ─── */
const CheckoutCard = ({ inView }: { inView: boolean }) => (
  <motion.div
    className="w-full max-w-[550px] mx-auto lg:mx-0"
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
    transition={{ duration: 0.6 }}
  >
    {/* Outer wrapper with dotted bg */}
    <div
      className="rounded-[20px] p-[24px] md:p-[55px]"
      style={{
        background: '#F8FAFB',
        backgroundImage: 'radial-gradient(circle, #D1D5DB 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Inner white card */}
      <div
        className="rounded-[16px] bg-white p-[24px] md:p-[30px]"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-[28px]">
          <h3 className="font-roboto font-bold text-[21.14px] leading-[31.72px] text-[#111827]">
            Checkout
          </h3>
          <ShoppingCart size={22} color="#6B7280" strokeWidth={1.5} />
        </div>

        {/* Product row */}
        <div className="flex items-center gap-[14px] mb-[24px]">
          {/* Product image */}
          <div
            className="w-[72px] h-[72px] rounded-[10px] flex items-center justify-center flex-shrink-0 overflow-hidden"
            style={{
              background:
                'linear-gradient(146.52deg, rgba(0, 115, 114, 0.5) 4.73%, rgba(91, 198, 173, 0.5) 96.01%)',
              border: '1.36px solid #7BFFF4',
              boxShadow: '0 4px 12px rgba(0, 115, 114, 0.25)',
            }}
          >
            <img
              src="/images/checkoutsection/shoe.svg"
              alt="Nike Air Jordan Retro"
              width={48}
              height={48}
            />
          </div>
          <div className="flex-1">
            <p className="font-roboto font-medium text-[18px] leading-[23.79px] text-[#0B4F4A]">
              Nike Air Jordan Retro
            </p>
            <p className="font-roboto font-normal text-[16px] leading-[23.79px] text-[#0B4F4AD6]">
              Men&apos;s Sneakers
            </p>
            <p className="font-roboto font-bold text-[16px] leading-[23.79px] text-[#0B4F4A]">
              5% off (tax inc.)
            </p>
          </div>
          <span className="font-roboto font-bold text-[16px] leading-[20px] text-[#0B4F4A]">
            $165.00
          </span>
        </div>

        {/* Upsell offer box */}
        <div
          className="rounded-[15px] bg-[#F0FDFA] px-[22px] py-[20px] flex items-center gap-[12px] mb-[14px]"
          style={{ border: '1.32px solid #A2E4D8' }}
        >
          <div className="w-[32px] h-[32px] rounded-full bg-[#D1FAE5] flex items-center justify-center flex-shrink-0">
            <img src="/images/checkoutsection/check-icon.svg" alt="check" width={16} height={16} />
          </div>
          <div>
            <p className="font-roboto font-bold text-[15.86px] leading-[23.79px] text-[#0B4F4A]">
              Custom Upsell Offer
            </p>
            <p className="font-roboto font-normal text-[13.22px] leading-[19.82px] text-[#00786F]">
              Add complimentary item for 50% off
            </p>
          </div>
        </div>

        {/* Subtotal / Shipping */}
        <div className="pt-[16px] mb-[16px]">
          <div className="flex justify-between items-center mb-[8px]">
            <span className="font-roboto font-medium text-[15.86px] leading-[23.79px] text-[#0B4F4A]">
              Subtotal
            </span>
            <span className="font-roboto font-bold text-[15.86px] leading-[23.79px] text-[#0B4F4A] text-right">
              $135.00
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-roboto font-medium text-[15.86px] leading-[23.79px] text-[#0B4F4A]">
              Shipping
            </span>
            <span className="font-roboto font-bold text-[15.86px] leading-[23.79px] text-[#0B4F4A] text-right">
              $5.00
            </span>
          </div>
        </div>

        {/* Total */}
        <div className="border-t border-[#E5E7EB] pt-[16px] mb-[24px]">
          <div className="flex justify-between items-center">
            <span className="font-roboto font-bold text-[23.79px] leading-[35.68px] text-[#0F172B]">
              Total
            </span>
            <span className="font-roboto font-bold text-[23.79px] leading-[35.68px] text-[#009689]">
              $140.00
            </span>
          </div>
        </div>

        {/* Complete Order button */}
        <button className="w-full rounded-[10px] bg-[#0F172B] py-[14px] text-center font-roboto font-bold text-[18.5px] leading-[27.75px] text-[#FFFFFF]">
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
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="container mx-auto px-4 max-w-[1206px]">
        <div ref={sectionRef} className="flex flex-col lg:flex-row lg:gap-[60px] items-start">
          {/* Left — Checkout card mockup */}
          <div className="w-full lg:w-[45%] flex-shrink-0 mb-[40px] lg:mb-0">
            <CheckoutCard inView={inView} />
          </div>

          {/* Right — Content */}
          <motion.div
            className="w-full lg:flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-source font-bold text-[28px] md:text-[38px] leading-[1.15] md:leading-[45.6px] text-[#0F172B] mb-[5px]">
              Enhanced Checkout &<br />
              Post-Purchase Experiences
            </h2>

            <div
              className="h-[3px] w-[132px] rounded-full mb-[24px]"
              style={{
                background:
                  'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
              }}
            />

            <p
              className="font-roboto font-normal text-[16px] md:text-[18px] leading-[29.25px] text-[#45556C] mb-[20px] max-w-[530px]"
              style={{ wordSpacing: '-1px' }}
            >
              We extend Shopify&apos;s checkout and post-purchase journey to create personalised and
              high-converting experiences.
            </p>

            <p
              className="font-roboto font-normal text-[16px] md:text-[18px] leading-[29.25px] text-[#45556C] mb-[45px] max-w-[530px]"
              style={{ wordSpacing: '-1px' }}
            >
              By leveraging Shopify&apos;s latest Checkout Extensibility framework, we enhance
              critical touchpoints in the customer journey to improve engagement, increase order
              value, and deliver a consistent brand experience.
            </p>

            {/* Important Deadline callout */}
            <div className="rounded-[10px] bg-[#FFF7ED] border-l-[3px] border-[#F97316] px-[20px] py-[16px] mb-[45px] max-w-[530px]">
              <div className="flex items-start gap-[10px]">
                <AlertTriangle
                  size={20}
                  color="#F97316"
                  strokeWidth={2}
                  className="flex-shrink-0 mt-[2px]"
                />
                <div>
                  <p className="font-source font-bold text-[16px] leading-[22.4px] text-[#7E2A0C] mb-[4px]">
                    Important Deadline
                  </p>
                  <p className="font-roboto font-normal text-[14px] leading-[20px] text-[#9F2D00]">
                    Final deadline to upgrade Thank You &amp; Order Status Extensibility -{' '}
                    <span className="font-bold">26 August 2026 for non-Plus stores</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-[16px]">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-[12px]">
                  <img
                    src="/images/checkoutsection/check-icon.svg"
                    alt="check"
                    width={16}
                    height={16}
                  />
                  <span className="font-roboto font-medium text-[16px] leading-[24px] text-[#314158]">
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
