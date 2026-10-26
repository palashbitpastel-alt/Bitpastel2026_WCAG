import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });
import Link from 'next/link';
import BannerDesktop from '../../../public/images/banner_new02.webp';
import BannerMobile from '../../../public/images/banner-for-mobile.webp';
import CheckIcon from '../../../public/images/img_materialsymbolscheckrounded.svg';
import CheckIconMobile from '../../../public/images/img_materialsymbolscheckrounded_teal_300.svg';

interface HerSectionProps {
  openModal?: () => void;
}

const HeroSection: React.FC<HerSectionProps> = ({ openModal }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="relative lg:h-lvh md:h-[686px] h-auto overflow-hidden">
        {/* Desktop background image */}
        <div
          className="hidden md:block absolute inset-0">
          <Image
            src={BannerDesktop}
            alt="Smiling business owner in a restaurant"
            fill
            quality={60}
            style={{
              objectFit: 'cover',
              objectPosition: '60% 20%'
            }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              // backgroundImage: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 49.05%, rgba(0, 0, 0, 0.5) 78.85%)'
              // Figma "Rectangle 48": the #55B8D0 fill sits under the banner image, so only the dark gradient is visible
              backgroundImage: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 37.48%, rgba(0, 0, 0, 0.72) 69.27%)'
              
            }}

          ></div>
        </div>

        {/* style={{
            backgroundImage: `
               linear-gradient(82deg, rgba(0, 0, 0, 0.7) 6%, rgba(0, 0, 0, 0) 30%),
               url('/images/banner_new02.jpg')
            `,
          }} */}

        {/* Mobile background image on top */}
        <div
          className="block md:hidden relative w-full h-[310px]">
          <Image
            src={BannerMobile}
            alt="Smiling business owner in a restaurant"
            quality={60}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '55% 10%'
            }}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:h-full pt-[40px] md:pt-[60px] text-left ">
          <div className="md:h-full content-center mx-auto md:max-w-[100%] max-w-[330px]">
            <h1 className="md:text-primary-white text-title title lg:!text-[56px] lg:leading-[57.6px] lg:font-[600] font-source leading-[normal] md:mb-5 mb-4 text-center md:text-left ">
              <span>Crafting </span>
              <span className="font-bold lg:font-[900] lg:inline md:block inline">Digital Solutions</span>
              <span className="block"> for your business</span>
            </h1>

            <div className="md:text-primary-white text-title md:text-left text-center">
              {[
                'Shopify & eCommerce Solutions',
                'Custom SaaS Product Development',
                'AI Transformation & Automation Services',
              ].map((text, idx) => (
                <div key={idx} className="flex md:gap-4 gap-2 mb-[5px] lg:mb-0 items-center">
                  <Image
                    src={CheckIcon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-auto md:block hidden"
                  />
                  <Image
                    src={CheckIconMobile}
                    alt=""
                    width={24}
                    height={24}
                    className="md:hidden block w-[20px]"
                  />
                  <p className="  md:text-[20px] lg:!text-[20px] lg:leading-[44px]  paragraph font-[400] font-roboto">{text}</p>
                </div>
              ))}
            </div>
            <div className='button-area-main'>
              <button
                // prefetch={true}
                className='new-btn-design-full mt-[15px]'
                // href="#"
                // scroll={false}
                onClick={openModal}
              >
                Let’s Work Together
              </button>

            </div>
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
