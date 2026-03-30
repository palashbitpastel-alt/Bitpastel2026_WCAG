import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Link from 'next/link';

interface HerSectionProps {
  openModal?: () => void;
}

const HeroSection: React.FC<HerSectionProps> = ({ openModal }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="relative lg:h-lvh md:h-[686px]  h-auto overflow-hidden">
        {/* Desktop background image */}
        <div
          className="md:block absolute inset-0 bg-cover bg-[position:60%_20%] bg-no-repeat"
          style={{
            backgroundImage: `
            
            url('/images/banner_landing_image.jpg')
          `,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:h-full pt-[40px] md:pt-[60px] text-left ">
          <div className="md:h-full content-center mx-auto md:max-w-[100%] max-w-[310px]">
            <div className="flex justify-center items-center mb-[90px] ml-[2%] horinzon-logo-area">
              <img src="/images/horizon_logo.png" alt="Horizon logo" width={535} height={220} />
            </div>
            <h1 className="md:text-primary-white md:text-center md:text-[32px] lg:text-[38px] text-title title lg:leading-[40px] font-source leading-[normal] md:mb-5 mb-4 text-center horizon-title">
              <span>Migrate seamlessly to </span>
              <span className="font-[700]">Shopify Horizon</span>
            </h1>
            <h4 className=" md:text-center md:text-[16px] lg:text-[18px] md:text-primary-white horizon-subtitle text-title title lg:leading-[40px] font-source leading-[normal] md:mb-5 mb-4 text-center">
              {/* <span className="block">
                Experience faster performance, AI-powered personalisation, and unmatched design flexibility. 
              </span> */}
              <span className="block">
                Bitpastel helps you migrate and customise your store on Shopify’s Horizon
              </span>
              <span>theme with zero hassle.</span>
            </h4>

            {/* <div className="flex justify-center items-center gap-4 hero-btn-area">
              <button
                className="btn leading-normal bg-white-btn bg-green-text md:w-auto w-[100%] mt-[15px] font-roboto btn-hover"
                onClick={() => {
                  const element = document.getElementById('flexible-horizon');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started with Horizon
              </button>
              <button
                className="btn leading-normal bg-transparent-btn md:w-auto w-[100%] mt-[15px] font-roboto btn-hover"
                onClick={() => window.open('https://calendly.com/ayanh/meet-ayan', '_blank')}
              >
                Book Free Consultation
              </button>
            </div> */}
            <div className="flex justify-center md:justify-center items-center gap-[18px] hero-btn-area">
              <button
                className="btn leading-normal bg-white-btn bg-green-text md:w-auto w-full mt-0 font-roboto btn-hover !rounded-full !min-w-[244px]"
                onClick={() => {
                  const element = document.getElementById('flexible-horizon');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Horizon
              </button>
              <button
                className="btn leading-normal bg-transparent-btn md:w-auto w-full mt-0 font-roboto btn-hover !rounded-full !min-w-[244px]"
                onClick={() =>
                  window.open(
                    'https://calendly.com/ayanh/meet-ayan',
                    '_blank'
                  )
                }
              >
                Speed Optimisation Service
              </button>
            </div>
            <div></div>
            {/* <button
              className="btn leading-normal bg-green-btn md:w-auto w-[100%] mt-[15px] font-roboto"
              // onClick={() => setIsModalOpen(true)}
              onClick={openModal}
            >
              Let’s Work Together
            </button> */}
          </div>
        </div>
      </section>
      {/* <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </>
  );
};

export default HeroSection;
