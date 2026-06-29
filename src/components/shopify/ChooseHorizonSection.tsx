import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
interface ChooseHorizonSectionProps {
    openModal?: () => void;
}
interface Advantages {
    id: string;
    title: string;
    description: string;
    icon: string;
    bgColor: string;
    bgcolorCollapsed: string;
    mobileTextColor: string;
}
const ChooseHorizonSection: React.FC<ChooseHorizonSectionProps> = ({ openModal }) => {

    const Advantages: Advantages[] = [
        {
            id: 'performance',
            title: 'Performance Optimised',
            description: 'Faster load times, improved Core Web Vitals',
            icon: '/images/AdvantagesIcon/PerformanceIcon.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        },
        {
            id: 'design',
            title: ' Modern Design Flexibility',
            description: 'Sleek layouts adaptable to any industry',
            icon: '/images/AdvantagesIcon/DesignIcon.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgb(243, 222, 155)]',
        }
        ,
        {
            id: 'mobile',
            title: 'Mobile-First UX',
            description: 'Designed for mobile shoppers to boost conversions',
            icon: '/images/AdvantagesIcon/FastmobileIcon.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        }
        ,
        {
            id: 'seo',
            title: 'SEO-Ready',
            description: 'Clean structure with built-in best practices',
            icon: '/images/AdvantagesIcon/SeoIcon.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        }
        ,
        {
            id: 'customization',
            title: 'Easy Customization',
            description: 'Change layouts without heavy coding',
            icon: '/images/AdvantagesIcon/EasyCustomizationIcon.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        },
        {
            id: 'futureproof',
            title: 'Free & Future-Proof',
            description: 'It’s free and fully aligned with Shopify’s Online Store 2.0',
            icon: '/images/AdvantagesIcon/Free&FutureProof.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        }
    ]
    const AdvantagesData = Advantages;

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <>
            <section id="Advantages" className="md:pt-[90px] pt-[50px] md:pb-[90px] pb-[50px]">
                <div className="container mx-auto px-4 overflow-hidden relative">
                    <h2 className="font-source font-bold lg:font-semibold lg:tracking-[-1px] text-[23px] md:text-[38px] leading-[1.2] md:leading-[49.4px] md:mb-[5px] text-center mb-[5px] text-[#111827] responsive-h2">
                        Why choose Horizon for your Store?
                    </h2>
                    <div className="flex justify-center items-center mb-[30px]">
                        <div className="ai-powered-green-gradient heading-bottom"></div>
                    </div>

                    <h4 className="md:font-[500] font-[500] font-roboto text-center text-[18px] leading-[20px] w-200 md:mb-0 mb-3 description text-[#6B7280] md:hidden">
                        <span className="text-[#111827] leading-[24px]">
                            <span className="block text-[#6B7280]  md:text-[16px] lg:text-[18px] font-[400] font-roboto md:w-[80%] mx-auto responsive-subtitle">
                                Horizon isn&apos;t just another Shopify theme; it&apos;s built for speed, scalability, and conversions. Whether you&apos;re running a startup store or scaling to enterprise level, Horizon ensures your brand looks modern, loads faster, and converts better.
                            </span>
                        </span>
                    </h4>
                    <h4 className="hidden md:font-[500] font-[500] font-roboto text-center text-[18px] leading-[20px] w-200 md:mb-8 mb-3 description text-[#6B7280] md:block responsive-subtitle">
                        <span className="text-[#111827] leading-[24px]">
                            <span className="block text-[#6B7280]  md:text-[16px] lg:text-[18px] font-[400] lg:font-light font-roboto md:w-[80%] mx-auto">
                                Horizon isn&apos;t just another Shopify theme; it&apos;s built for speed, scalability, and conversions. Whether you&apos;re running a startup store or scaling to enterprise level, Horizon ensures your brand looks modern, loads faster, and converts better.
                            </span>
                        </span>
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2  mx-auto our-services-wrapper horizon-our-services-wrapper mobile-horizon">
                        {AdvantagesData.map((service, index) => (
                            <div
                                key={service.id}
                               
                                // className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer py-10"
                                className={`card-element relative card-element-Horizon text-center transition-shadow duration-300m md:min-w-[275px] min-w-[unset] cursor-pointer md:py-6 pt-0 pb-8 md:bg-transparent ${service.bgColor} md:rounded rounded-[10px] md:min-h-full min-h-[160px]
                                ${activeIndex === index ? 'active' : ''}`}>
                                <div className="flex flex-col justify-start items-center h-full">
                                    <div
                                        className={`${service.bgColor} mobile-bg-transparent flex items-center justify-center mx-auto md:mb-4 mb-4 chooseImage`}
                                    >
                                        <Image src={service.icon} alt={service.title} width={50} height={50} />
                                    </div>
                                    <h3
                                        className={`font-[500] font-source md:font-bold  md:mb-2 mb-[10px] md:h-auto h-[60px] md:leading-[normal] md:text-[18px] lg:text-[20px] text-[16px] leading-[20px] md:px-0 px-[17px] text-[#111827] content-center responsive-h3`}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="font-roboto paragraph md:max-w-[240px] max-w-[unset] mx-auto text-[#6B7280] leading-[20px] font-[400]">
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
        </>
    )
}
export default ChooseHorizonSection; 
