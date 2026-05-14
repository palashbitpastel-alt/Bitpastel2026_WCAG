import React from 'react';

const services = [
  {
    title: 'Shopify Store Setup & Development',
    icon: '/images/branding-icons/globe-window.svg',
  },
  {
    title: 'Shopify Theme Customisation',
    icon: '/images/branding-icons/crossed-tools.svg',
  },
  {
    title: 'Shopify Store Migration',
    icon: '/images/branding-icons/transfer-arrows.svg',
  },
  {
    title: 'Speed Audits & Performance Optimization',
    icon: '/images/branding-icons/speedometer.svg',
  },
  {
    title: 'App Integrations & Automation',
    icon: '/images/branding-icons/connected-nodes.svg',
  },
  {
    title: 'AI & Personalization Tools',
    icon: '/images/branding-icons/sparkle-star.svg',
  },
];

const BrandingSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-[80px] md:py-[100px]">
      {/* Wave background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/backgrounds/backgroung1.png')`,
        }}
      ></div>

      {/* Light wash overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col items-center mb-[20px]">
          <h2 className="font-source font-bold text-[28px] md:text-[36px] leading-[1.2] md:leading-[58px] tracking-[-0.72px] text-center text-[#FFFFFF]">
            Shopify Solutions & Branding
          </h2>
          {/* Gradient underline */}
          <div
            className="mt-[5px] h-[3px] w-[132px] rounded-full"
            style={{
              background:
                'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
            }}
          ></div>
        </div>

        {/* Subtitle */}
        <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[26px] text-center text-[#FFFFFF] max-w-[700px] mx-auto mb-[50px] md:mb-[60px]">
          We provide a wide range of Shopify development and optimization
          services designed to help brands build, scale, and optimize their
          e-commerce stores.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] max-w-[1206px] mx-auto">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-[20px] px-[30px] py-[40px] flex flex-col items-center text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '1px 1px 27.9px 0px rgba(0, 0, 0, 0.15)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Icon circle */}
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-[24px]"
                style={{
                  background: 'rgba(45, 212, 168, 0.15)',
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                />
              </div>

              {/* Label */}
              <h3 className="font-roboto font-bold text-[16px] leading-normal text-[#FFFFFF]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
