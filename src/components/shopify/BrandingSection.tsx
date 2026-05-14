import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Build, Migrate & Customize on Shopify',
    icon: '/images/branding-icons/crossed-tools.svg',
    description:
      'From building new Shopify stores to migrating from other platforms, we handle complete setup and customize themes to match your brand and business goals.',
    iconWrapper: 'plain',
  },
  {
    title: 'Optimise Performance & Integrate Tools',
    icon: '/images/branding-icons/speedometer.svg',
    description:
      'We optimize your store for speed and performance while integrating powerful apps to enhance functionality, automation, and overall user experience.',
    iconWrapper: 'tile',
  },
  {
    title: 'Power Growth with AI & Personalisation',
    icon: '/images/branding-icons/sparkle-star.svg',
    description:
      'Leverage AI-driven tools to create personalized shopping journeys, improve engagement, and increase conversions through intelligent automation.',
    iconWrapper: 'tile',
  },
];

const BrandingSection: React.FC = () => {
  return (
    <section className='relative overflow-hidden  py-[80px] md:py-[100px]'>
      {/* Wave background image at 24% opacity */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none'
        style={{
          backgroundImage: `url('/images/backgrounds/BG 1.webp')`,
        }}
      ></div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4'>
        {/* Title */}
        <div className='flex flex-col items-center mb-[20px]'>
          <h2 className='font-source font-bold text-[23px] md:text-[36px] leading-[1.2] md:leading-[58px] tracking-[-0.72px] text-center text-[#FFF]'>
            Shopify Solutions & Branding
          </h2>
          {/* Gradient underline */}
          <div
            className='mt-[5px] h-[3px] w-[132px] rounded-full'
            style={{
              background:
                'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
            }}
          ></div>
        </div>

        {/* Subtitle */}
        <p className='font-roboto font-normal text-[16px] md:text-[18px] leading-[26px] text-center text-[#FFF] max-w-[655px] mx-auto mb-[40px] md:mb-[40px]'>
          We provide a wide range of Shopify development and optimization services designed to help
          brands build, scale, and optimize their e-commerce stores.
        </p>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[1207px] mx-auto'>
          {services.map((item, index) => (
            <div
              key={index}
              className='rounded-[20px] px-[30px] py-[40px] flex flex-col items-start text-left h-[396px] justify-center backdrop-blur-[27px] mobile-style-admantage'
              style={{
                background: ' #FFFFFF05',
                boxShadow: '1px 1px 27.9px 0 rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              {/* Icon */}
              {item.iconWrapper === 'tile' ? (
                <div className='w-[80px] h-[80px] flex items-center justify-center mb-[40px]'>
                  <Image src={item.icon} alt={item.title} width={80} height={80} />
                </div>
              ) : (
                <div className='w-[80px] h-[80px] flex items-center justify-center mb-[40px]'>
                  <Image src={item.icon} alt={item.title} width={80} height={80} />
                </div>
              )}

              {/* Label */}
              <h3 className='font-roboto font-bold text-[18px] leading-[28px] text-[#FFF] mb-[15px] max-w-[190px] mobile-style-description'>
                {item.title}
              </h3>
              <p className='font-roboto font-normal text-[16px] leading-[29.25px] text-[#FFF] mobile-style-description'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
