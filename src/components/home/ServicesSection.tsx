import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import AiIcon from '../../../public/images/AI icon 1.svg';
import ShopifyIcon from '../../../public/images/img_hugeiconsshopify.svg';
import WebDevIcon from '../../../public/images/img_icoutlinelaptop.svg';
import DesignCreativeIcon from '../../../public/images/img_iconoirdesignnib.svg';
import EcommerceIcon from '../../../public/images/img_bicartplus.svg';
import SaasIcon from '../../../public/images/img_lineiconscloudiot2.svg';




interface services {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  bgcolorCollapsed: string;
  mobileTextColor: string;
  iconAlt?: string;

}

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setisMobile] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
 

  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  // Toggle active card. The slide + fade is fully CSS-driven off the `.active`
  // class (see .collapsible-element), so no JS timers are needed — that avoids
  // the timer/CSS-duration mismatch that made the text pop in mid-slide.
  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // WCAG 2.1.1: on mobile the description only appears on tap, so the icon/title
  // area acts as a disclosure button for keyboard and screen reader users.
  const handleToggleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(index);
    } else if (e.key === 'Escape' && activeIndex === index) {
      setActiveIndex(null);
    }
  };
  
  const services: services[] = [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'Smart AI agents and solutions driving automation, insight, and innovation',
      icon: AiIcon,
      bgColor: '  bg-primary-green-light',
      bgcolorCollapsed: '#fcf4d7',
      mobileTextColor: ' text-[#7A5C00]',
      iconAlt: 'Atom with sparkle icon representing AI and smart technology',
    },
    {
      id: 'shopify',
      title: 'Shopify Plus Development',
      description: 'Scalable Shopify Plus stores tailored for high-growth e-commerce brands',
      icon: ShopifyIcon,
      bgColor: 'bg-primary-yellow-light',
      bgcolorCollapsed: '#d8f5e9',
      mobileTextColor: 'text-[#00704E]',
      iconAlt: 'Shopify shopping bag icon',
    },
    {
      id: 'web',
      title: 'Web Development',
      description: 'Robust, responsive web apps built for performance and user experience',
      icon: WebDevIcon,
      bgColor: 'bg-primary-coral-light',
      bgcolorCollapsed: '#fde3e5',
      mobileTextColor: 'text-[#B3202D]',
      iconAlt: 'Laptop icon representing web development',
    },
    {
      id: 'design',
      title: 'Design & Creatives',
      description: 'Engaging, user-focused designs that bring your vision to life',
      icon: DesignCreativeIcon,
      bgColor: 'bg-primary-yellow-light',
      bgcolorCollapsed: '#fcf4d7',
      mobileTextColor: 'text-[#7A5C00]',
      iconAlt: 'Pen nib icon representing design and creative work',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Development',
      description: 'End-to-end e-commerce solutions for seamless shopping and sales growth',
      icon: EcommerceIcon,
      bgColor: 'bg-primary-coral-light',
      bgcolorCollapsed: '#fde3e5',
      mobileTextColor: 'text-[#B3202D]',
      iconAlt: 'Shopping cart with add icon representing e-commerce',
    },
    {
      id: 'saas',
      title: 'Custom SaaS Development',
      description: 'Tailored SaaS platforms that solve real problems and scale faster',
      icon: SaasIcon,
      bgColor: 'bg-primary-green-light',
      bgcolorCollapsed: '#d8f5e9',
      mobileTextColor: 'text-[#00704E]',
      iconAlt: 'Cloud network icon representing SaaS platforms',
    },
  ];

  const servicesMobile: services[] = [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'Smart AI agents and solutions driving automation, insight, and innovation',
      icon: '/images/Our services icons/ai-yellow-icon.svg',
      bgColor: ' bg-primary-yellow-light ',
      bgcolorCollapsed: '#fcf4d7',
      mobileTextColor: ' text-[#7A5C00] ',
      iconAlt: 'Atom with sparkle icon representing AI and smart technology',
    },
    {
      id: 'shopify',
      title: 'Shopify Plus Development',
      description: 'Scalable Shopify Plus stores tailored for high-growth e-commerce brands',
      icon: '/images/Our services icons/shopify-green-icon.svg',
      bgColor: 'bg-primary-green-light',
      bgcolorCollapsed: '#d8f5e9',
      mobileTextColor: 'text-[#00704E]',
      iconAlt: 'Shopify shopping bag icon',
    },
    {
      id: 'web',
      title: 'Web Development',
      description: 'Robust, responsive web apps built for performance and user experience',
      icon: '/images/Our services icons/web_developement_icon.svg',
      bgColor: 'bg-primary-coral-light',
      bgcolorCollapsed: '#fde3e5',
      mobileTextColor: 'text-[#B3202D]',
      iconAlt: 'Laptop icon representing web development',
    },
    {
      id: 'design',
      title: 'Design & Creatives',
      description: 'Engaging, user-focused designs that bring your vision to life',
      icon: '/images/Our services icons/design_creative_icon.svg',
      bgColor: 'bg-primary-yellow-light',
      bgcolorCollapsed: '#fcf4d7',
      mobileTextColor: 'text-[#7A5C00]',
      iconAlt: 'Pen nib icon representing design and creative work',
    },
    {
      id: 'saas',
      title: 'Custom SaaS Development',
      description: 'Tailored SaaS platforms that solve real problems and scale faster',
      icon: '/images/Our services icons/saas_developement.svg',
      bgColor: 'bg-primary-green-light',
      bgcolorCollapsed: '#d8f5e9',
      mobileTextColor: 'text-[#00704E]',
      iconAlt: 'Shopping cart with add icon representing e-commerce',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Development',
      description: 'End-to-end e-commerce solutions for seamless shopping and sales growth',
      icon: '/images/Our services icons/img_bicartplus.svg',
      bgColor: 'bg-primary-coral-light',
      bgcolorCollapsed: '#fde3e5',
      mobileTextColor: 'text-[#123B42]',
      iconAlt: 'Cloud network icon representing SaaS platforms',
    },
  ];

  const servicesData = isMobile ? servicesMobile : services;

  return (
    <section id="services" className="md:pt-[90px] pt-[60px]">
      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className=" md:font-[600] font-[700] font-source text-center text-title md:mb-0 mb-3 title">
          Our Services
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 py-[40px] gap-x-[24px] gap-y-[24px] mx-auto our-services-wrapper">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleClick(index)}
              style={{ borderColor: `var(--${service.bgColor.trim().replace(/^bg-/, '')})` }}
              // className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer py-10"
              className={`card-element text-center transition-shadow duration-300m md:min-w-[275px] min-w-[unset] cursor-pointer md:py-8 pt-[20px] pb-8 md:bg-transparent ${service.bgColor} border-1 borde md:rounded rounded-[20px] md:min-h-full min-h-[160px]
                        ${activeIndex === index ? 'active' : ''}
                        `}
            >
              <div
                className="mobile-none"
                {...(isMobile && {
                  role: 'button',
                  tabIndex: 0,
                  'aria-expanded': activeIndex === index,
                  'aria-controls': `service-panel-${service.id}`,
                  onKeyDown: (e: React.KeyboardEvent) => handleToggleKeyDown(e, index),
                })}
              >
                <div
                  className={`${service.bgColor} mobile-bg-transparent w-20 md:h-20 h-auto rounded-[10px] flex items-center justify-center mx-auto md:mb-10 mb-4`}
                >
                  <Image src={service.icon} alt={service.iconAlt ?? ''}  width={36} height={36} />
                </div>
                <h3
                  className={`font-[500] md:font-bold md:text-title md:mb-[15px] mb-0 md:h-auto h-[60px] md:leading-[normal] md:text-[22px] text-[16px] leading-[22px] md:px-0 px-[17px]  content-center ${service.mobileTextColor}`}
                >
                  {service.title}
                </h3>
                <p className="-relaxed text-[19px] md:max-w-[320px] max-w-[unset] w-full mx-auto text-title">
                  {service.description}
                </p>
              </div>
              <div
                id={`service-panel-${service.id}`}
                className={`collapsible-element text-left content-center${activeIndex === index ? 'active' : ''}`}
                style={{ background: service.bgcolorCollapsed }}
              >
                <p className="paragraph text-title text-[16px] leading-[20px]">
                  {service.description}
                </p>
              </div>

              {/* <div className='mobile-block'>
                           <h3 className={` font-bold ${service.mobileTextColor} mb-3 font-source leading-[20px]`}>{service.title}</h3>
                           <p className='text-[rgba(59,59,61,1)] text-[12px] leading-[20px]'>{service.description}</p>
                      </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
