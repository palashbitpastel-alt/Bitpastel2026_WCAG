// 'use client';
import React from 'react';
import Image from 'next/image';
const Banner = () => {
  const scrollToSection = (id: string) => {
    // Try multiple approaches for better compatibility
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -0; // Adjust this if needed
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      // Fallback if smooth scroll isn't working
      if (!('scrollBehavior' in document.documentElement.style)) {
        window.scrollTo(0, y);
      }
    } else {
      console.warn(`Element with id ${id} not found`);
      // Optional: Wait for dynamic content and try again
      setTimeout(() => {
        const retryEl = document.getElementById(id);
        if (retryEl) {
          const y = retryEl.getBoundingClientRect().top + window.pageYOffset - 70;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <div>
      <section className="relative lg:h-lvh md:h-[686px] h-auto overflow-hidden">
        <div
          className="hidden md:block absolute inset-0 bg-cover career-bg-desktop bg-center bg-no-repeat"
          style={{
            backgroundImage: `
                  linear-gradient(286.17deg, rgba(0, 0, 0, 0) 43.84%, rgba(0, 0, 0, 0.6) 65.15%),
                  linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                  url('/images/career.webp')
                `,
          }}
        ></div>

        {/* Mobile background image on top */}
        <div
          className="block md:hidden w-full h-[310px]  bg-cover bg-[position:59%_10%] bg-no-repeat"
          style={{
            backgroundImage: `
                  linear-gradient(359.17deg, rgba(0, 0, 0, 0) 84%, rgba(0, 0, 0, 0.6) 120.15%),
                  linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                  url('/images/Career-Mobile.webp')
                  `,
            //             linear-gradient(359.17deg, rgba(0, 0, 0, 0) 42.84%, rgba(0, 0, 0, 0.6) 120.15%),
            // linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            //          url('/images/Career-Mobile.webp')
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:h-full pt-[40px] md:pt-[60px] text-left ">
          <div className="md:h-full content-center mx-auto md:max-w-[100%] max-w-[310px]">
            <h1 className="md:text-primary-white text-title title lg:leading-[40px] font-source leading-[normal] md:mb-5 mb-4 text-center md:text-left ">
              <span>Work</span>
              <span className="font-bold inline pl-2">@ Bitpastel</span>
              <br />
              on Awesome Projects
            </h1>

            <div className="md:text-primary-white text-title md:text-left text-center">
              {[
                'Dynamic Teams working on new ideas',
                'Enjoy a Happy work enviroment',
                'Fast-track career progress',
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

            <button
              className="btn leading-normal bg-green-btn md:w-auto w-[100%] mt-[15px] font-roboto"
              onClick={() => scrollToSection('jobCards')}
            >
              Explore Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
