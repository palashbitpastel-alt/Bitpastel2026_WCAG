'use client';
import React from 'react';
import Image from 'next/image';
import { url } from 'inspector';

interface BenefitItem {
  text: string | string[]; // allow both string and string[]
  icon: string;
  alt: string;
}

interface JobDetailsBannerProps {
  jobTitle: string;
  backgroundImage: string;
  mobileBackgroundImage?: string; // Optional if same as desktop
  benefits: BenefitItem[];
  applyButtonText?: string;
  scrollToId?: string;
  overlayGradient?: string;
  overlayColor?: string;
  buttonanimation?: string;
}

const JobDetailsBanner: React.FC<JobDetailsBannerProps> = ({
  jobTitle = 'Full Stack Developer',
  backgroundImage = '/images/apply-job.png',
  mobileBackgroundImage,
  buttonanimation,
  benefits = [
    {
      text: 'Dynamic Teams working on new ideas',
      icon: '/images/img_materialsymbolscheckrounded.svg',
      alt: 'Check icon',
    },
    {
      text: 'Enjoy a Happy work environment',
      icon: '/images/img_materialsymbolscheckrounded.svg',
      alt: 'Check icon',
    },
    {
      text: 'Fast-track career progress',
      icon: '/images/img_materialsymbolscheckrounded.svg',
      alt: 'Check icon',
    },
  ],
  applyButtonText = 'Apply Now',
  scrollToId = 'jobCards',
  // overlayGradient = "none",
  // overlayColor = "rgba(255, 255, 255, 0.2)"
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div>
      <section className="relative lg:h-[470px] md:mt-[70px] mt-[50px] h-auto overflow-hidden">
        {/* Desktop Background */}
        <div
          className="md:block hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              url(${backgroundImage})
            `,
          }}
        ></div>

        {/* Mobile Background */}
        <div
          className="md:hidden h-[220px] absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/job_details_mob2.jpg")',
          }}
        ></div>

        {/* Content - Modified to align right */}
        <div className="relative z-10 container mx-auto px-4 md:h-full text-left">
          <div className="md:h-full content-center max-w-[450px] md:ml-auto md:max-w-[450px] mr-0  md:pt-[0] pt-[30px]">
            <h1 className=" text-title font-[600] title lg:leading-[40px] font-source leading-[normal] md:mb-5 mb-2 md:text-left ">
              <span>{jobTitle}</span>
            </h1>

            <div className="md:text-primary-white text-title md:text-left text-center mt-[1.8rem]">
              {/* First Benefit */}
              <div className="flex gap-4 mb-[5px] items-start">
                <Image
                  src={benefits[0].icon}
                  alt={benefits[0].alt}
                  width={24}
                  height={24}
                  className="md:w-[20px] md:h-[20px] md:mt-1.5 mt-1 w-[14px] h-[14px]"
                />
                {/* <p className="text-title font-roboto text-left md:text-[20px]  paragraph font-[400]  whitespace-normal break-words">
                  {benefits[0].text}
                </p> */}
                <div className="flex flex-wrap gap-0.5 text-title font-roboto text-left md:text-[20px] paragraph font-[400] whitespace-normal break-words">
                  {Array.isArray(benefits[0].text)
                    ? benefits[0].text.map((tag: string, index: number) => (
                        <span key={index} className="text-title font-roboto">
                          {tag}
                        </span>
                      ))
                    : benefits[0].text}
                </div>
              </div>

              {/* Second Benefit */}
              <div className="flex gap-4 mb-[5px] items-center">
                {/* <Image
                  src="/images/img_materialsymbolscheckrounded.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-auto md:block hidden"
                /> */}
                <Image
                  src={benefits[1].icon}
                  alt={benefits[1].alt}
                  width={24}
                  height={24}
                  className="md:w-[20px] md:h-[20px] w-[14px] h-[14px]"
                />
                <p className="md:text-[20px]  paragraph font-[400] text-left text-title font-roboto">
                  Experience: {benefits[1].text}
                </p>
              </div>

              {/* Third Benefit */}
              <div className="flex gap-4  mb-[5px] items-center">
                <Image
                  src={benefits[2].icon}
                  alt={benefits[2].alt}
                  width={24}
                  height={24}
                   className="md:w-[20px] md:h-[20px] w-[14px] h-[14px]"
                />
                <p className=" md:text-[20px]  paragraph font-[400] text-left text-title font-roboto">
                  Location: {benefits[2].text}
                </p>
              </div>
            </div>

            <button
              className={`${buttonanimation} btn leading-normal bg-green-btn md:w-auto w-[100%] text-primary-white mt-[25px] font-roboto`}
              onClick={() => scrollToSection(scrollToId)}
            >
              {applyButtonText}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetailsBanner;
