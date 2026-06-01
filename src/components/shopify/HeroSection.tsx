import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HerSectionProps {
  openModal?: () => void;
}

const HeroSection: React.FC<HerSectionProps> = ({ openModal }) => {
  return (
    <>
      <section className='relative lg:h-lvh md:h-[686px] h-auto overflow-hidden'>
        {/* Background gradient */}
        <div
          className='absolute inset-0'
          style={{
            background: 'linear-gradient(135deg, #22577a 19.3%, #56cc99 45.4%, #22577a 77%)',
          }}
        ></div>

        {/* Wave image overlay at 60% opacity */}
        <div
          className='absolute inset-0 bg-cover bg-[position:60%_20%] bg-no-repeat opacity-60'
          style={{
            backgroundImage: `url('/images/banner_landing_image.jpg')`,
          }}
        ></div>

        {/* Dark overlay at 10% */}
        <div className='absolute inset-0 bg-black/10'></div>

        {/* Right side - Dashboard Image (absolute positioned) */}
        <div className='hidden md:block absolute right-[2%] lg:right-[5%] top-1/2 -translate-y-[45%] w-[45%] lg:w-[42%] z-10'>
          <Image
            src='/images/horizon-new-images/banner_section_image.webp'
            alt='Shopify Dashboard'
            width={483}
            height={511}
            className='w-full h-auto object-contain drop-shadow-[12px_20px_41px_rgba(0,0,0,0.27)]'
            priority
          />
        </div>

        {/* Content */}
        <div className='relative z-20 container mx-auto px-4 md:h-full pt-[40px] md:pt-[60px] text-left'>
          <div className='md:h-full content-center mx-auto md:max-w-[100%] max-w-[310px]'>
            {/* Shopify X Bitpastel Logo */}
            <div className='flex justify-center md:justify-start items-center mb-[38px] horinzon-logo-area'>
              <img
                src='/images/shopify_X_bitpastel.svg'
                alt='Shopify X Bitpastel'
                className='w-[240px] md:w-[360px] brightness-0 invert'
              />
            </div>

            {/* Heading */}
            <h1 className='text-primary-white text-center md:text-left text-[26px] md:text-[32px] lg:text-[45px] font-source font-bold leading-[1.2] lg:leading-[55px] tracking-[-1.35px] mb-5 md:max-w-[571px] horizon-title'>
              We help brands unlock the <br /> Full Potential of Shopify
            </h1>

            {/* Subtitle */}
            <p className='text-primary-white text-center md:text-left font-roboto font-normal lg:font-light text-[16px] lg:text-[18px] leading-[26px] mb-10 md:max-w-[473px] horizon-subtitle'>
              through custom development, store optimization, migrations, and advanced integrations.
            </p>

            {/* Buttons */}
            <div className='flex justify-center md:justify-start items-center gap-[18px] hero-btn-area'>
              <button
                className='font-600 btn leading-normal bg-white-btn bg-green-text md:w-auto w-full mt-0 font-roboto btn-hover !rounded-full !min-w-[244px] flexible-horizon'
                onClick={() => {
                  const element = document.getElementById('flexible-horizon');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Explore Horizon</span>
              </button>
              <button
                className='font-600 btn leading-normal bg-transparent-btn md:w-auto w-full mt-0 font-roboto btn-hover !rounded-full !min-w-[244px]'
                onClick={() => window.open('https://calendly.com/ayanh/meet-ayan', '_blank')}
              >
                <span>Speed Optimisation Service</span>
              </button>
            </div>

            {/* Stats Bar */}
            <div className='flex justify-center md:justify-start items-center mt-8 md:mt-10 gap-[15px]'>
              <div className='text-center md:text-left pr-5 md:pr-6 lg:pr-8'>
                <p className='text-[#FFF] font-source font-[500] lg:font-semibold text-[28px] md:text-[36px] lg:text-[38px] leading-none'>
                  400+
                </p>
                <p className='text-[#FFF] font-source font-medium text-[14px] leading-[22px] mt-1'>
                  Shopify Stores
                </p>
              </div>
              <div
                className='w-px h-[54px] md:h-[64px]'
                style={{ backgroundColor: '#FFFFFF80' }}
              ></div>
              <div className='text-center md:text-left px-5 md:px-6 lg:px-8'>
                <p className='text-[#FFF] font-source font-[500] lg:font-semibold text-[28px] md:text-[36px] lg:text-[38px] leading-none'>
                  100+
                </p>
                <p className='text-[#FFF] font-source font-medium text-[14px] leading-[22px] mt-1'>
                  Shopify Plus Stores
                </p>
              </div>
              <div
                className='w-px h-[54px] md:h-[64px]'
                style={{ backgroundColor: '#FFFFFF80' }}
              ></div>
              <div className='pl-5 md:pl-6 lg:pl-8'>
                <Link
                  href='https://www.shopify.com/partners/directory/partner/bitpastel3'
                  target='_blank'
                >
                  <Image
                    src='/images/ShopifySelectPartnerHero.svg'
                    alt='Shopify Select Partner'
                    width={130}
                    height={50}
                    className='h-[54px] md:h-[64px] w-auto object-contain'
                  />
                </Link>
              </div>
            </div>

            {/* Mobile Dashboard Image */}
            <div className='md:hidden mt-8 mb-6 flex justify-center'>
              <div className='relative w-full max-w-[350px]'>
                <Image
                  src='/images/horizon-new-images/banner_section_image.webp'
                  alt='Shopify Dashboard'
                  width={483}
                  height={511}
                  className='w-full h-auto object-contain'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
