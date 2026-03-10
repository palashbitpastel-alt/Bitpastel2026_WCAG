import React from 'react';
import Image from 'next/image';
import BannerImage from '../../../public/images/horizon-new-images/banner_section_image.webp';
import ShopifyXBitpastel from '../../../public/images/shopify_X_bitpastel.svg';

interface HerSectionProps {
  openModal?: () => void;
}

const HeroSection: React.FC<HerSectionProps> = ({ openModal: _openModal }) => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0b3535 0%, #0d4040 40%, #0e4a3a 70%, #0b3535 100%)', minHeight: '100vh' }}>

      {/* Decorative curved wave */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(0,169,116,0.22) 0%, rgba(0,153,153,0.14) 35%, transparent 65%)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 pointer-events-none hidden md:block"
        style={{
          width: '55%',
          background: 'radial-gradient(ellipse at 60% 50%, rgba(14,90,70,0.55) 0%, transparent 70%)',
          borderRadius: '60% 0 0 60% / 100% 0 0 100%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-[60px] lg:py-0 lg:h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8 w-full">

          {/* ── LEFT CONTENT ── */}
          <div className="flex-1 lg:max-w-[50%] w-full">

            {/* Shopify × bitpastel logo */}
            <div className="mb-7">
              <Image
                src={ShopifyXBitpastel}
                alt="Shopify × bitpastel"
                width={240}
                height={40}
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-primary-white font-source font-bold text-[30px] md:text-[36px] lg:text-[42px] leading-tight mb-5">
              We Help Brands Unlock the Full Potential of Shopify
            </h1>

            {/* Subtext */}
            <p className="text-primary-white font-roboto text-[15px] md:text-[17px] leading-[1.7] mb-8 opacity-85">
              Through custom development, store optimization, migrations, and advanced integrations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="btn leading-normal bg-white-btn bg-green-text md:w-auto w-full font-roboto btn-hover"
                onClick={() => {
                  const element = document.getElementById('flexible-horizon');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Horizon
              </button>
              <button
                className="btn leading-normal bg-transparent-btn md:w-auto w-full font-roboto btn-hover"
                onClick={() => window.open('https://calendly.com/ayanh/meet-ayan', '_blank')}
              >
                Speed Optimisation Service
              </button>
            </div>
          </div>

          {/* ── RIGHT CONTENT – Dashboard illustration ── */}
          <div className="flex-1 lg:max-w-[50%] w-full flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[600px]">
              <Image
                src={BannerImage}
                alt="Shopify dashboard illustration"
                width={600}
                height={500}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
