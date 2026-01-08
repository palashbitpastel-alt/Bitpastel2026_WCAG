"use client";

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/Modal';


interface HerSectionProps {
  openModal?: () => void;
}



const PortfolioBanner: React.FC<HerSectionProps> = ({ openModal}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="relative lg:h-lvh md:h-[686px] h-auto overflow-hidden">
        {/* Desktop background image */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-[position:60%_20%] bg-no-repeat"
          style={{
            backgroundImage: `
            linear-gradient(270deg, rgba(0, 0, 0, 0) 49.05%, rgba(0, 0, 0, 0.5) 78.85%),
            url('/images/portfolio-banner.jpg')
          `,
          }}
        ></div>

         {/* style={{
            backgroundImage: `
               linear-gradient(82deg, rgba(0, 0, 0, 0.7) 6%, rgba(0, 0, 0, 0) 30%),
               url('/images/banner_new02.jpg')
            `,
          }} */}

        {/* Mobile background image on top */}
        <div
          className="block md:hidden w-full h-[310px] bg-cover bg-[position:58%_10%] bg-no-repeat"
          style={{
            backgroundImage: `
             linear-gradient(359.17deg, rgba(0, 0, 0, 0) 84%, rgba(0, 0, 0, 0.6) 120.15%),
                  linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            url('/images/portfolio-banner.jpg')
          `,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:h-full pt-[40px] md:pt-[60px] text-left ">
          <div className="md:h-full content-center mx-auto md:max-w-[100%] max-w-[310px]">
            <h1 className="md:text-primary-white text-title title lg:leading-[40px] font-source leading-[normal] md:mb-5 mb-4 text-center md:text-left ">
              {/* <span>Crafting </span>
              <span className="font-bold lg:inline md:block inline">Digital Solutions</span> */}
              <span className="block"> Where Vision Meets Execution</span>
              <span className="block"> Explore Our Best Work</span>
               
            </h1>

            <div className="md:text-primary-white text-title md:text-left text-center">
              {[
                'High-Performance Solutions',
                'Design That Connects',
                'End-to-End Expertise'
              ].map((text, idx) => (
                <div key={idx} className="flex md:gap-4 gap-2 mb-[5px] items-center">
                  <Image
                    src="/images/img_materialsymbolscheckrounded.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="w-auto md:block hidden"
                  />
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="w-auto md:hidden block"
                  />
                  <p className="  md:text-[20px]  paragraph font-[400] font-roboto">{text}</p>
                </div>
              ))}
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
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default PortfolioBanner;
