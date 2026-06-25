import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
interface AiPoweredSectionProps {
    openModal?: () => void;
}

const AiPoweredSection: React.FC<AiPoweredSectionProps> = ({ openModal }) => {
    return (
        <>
            <section id="Advantages" className="relative h-auto overflow-hidden">
                {/* Mobile background */}
                <div
                    className="absolute inset-0 bg-no-repeat md:hidden"
                    style={{
                        backgroundImage: `url('/images/bgmob.webp')`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                    }}
                ></div>
                {/* Desktop / tablet background */}
                <div
                    className="absolute inset-0 bg-cover bg-[position:60%_20%] bg-no-repeat hidden md:block"
                    style={{
                        backgroundImage: `url('/images/ai-poweredbackground.webp')`,
                    }}
                ></div>
                <div className="relative z-10 container mx-auto px-4 md:pt-[50px] pt-[50px] md:pb-[50px] pb-[50px] text-left ">
                    <div className='grid md:grid-cols-1 lg:grid-cols-2  gap-8'>
                        <div className='flex justify-center items-left flex-col'>
                            <h1 className="font-source font-bold text-[23px] md:text-[38px] leading-[1.2] md:leading-[49.4px] mb-[5px] text-center md:text-left text-[#ffffff] ai-powered-title">
                                <span className="block text-[23px] md:text-[32px] lg:text-[36px] leading-[1.2] md:leading-[40px] mb-0">AI-Powered Selling </span>
                                <span className=" text-[23px] md:text-[32px] lg:text-[36px] leading-[1.2] md:leading-[40px] mb-0 horizon-title">with </span>
                                <span className="bold text-[23px] md:text-[32px] lg:text-[36px] leading-[1.2] md:leading-[40px] mb-0 horizon-title">  Horizon + Bitpastel</span>
                            </h1>
                            <div className="ai-powered-green-gradient"></div>
                            <h4 className='ai-powered-subtitle'>
                                <span className="block font-[300]  md:text-[16px] lg:text-[18px] text-roboto">Horizon becomes more powerful when paired with Bitpastel’s AI-driven  </span>
                                <span className="block font-[300]  md:text-[16px] lg:text-[18px]">solutions. We bring advanced personalisation and automation into your</span>
                                <span className='font-[300]  md:text-[16px] lg:text-[18px]'>Shopify store:</span>
                            </h4>
                            <div className="md:text-primary-white text-title md:text-left text-center">
                                {[
                                    'Smart product recommendations and upsells',
                                    'Personalised shopping journeys for every customer',
                                    'Dynamic content adjustments based on user behaviour',
                                    'AI-driven insights to improve conversion rates',
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
                                            className="md:hidden block w-[20px]"
                                        />
                                        <p className="paragraph font-[300]   md:text-[16px] lg:text-[18px] font-roboto ai-subtitle-description">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center align-middle'>
                            <Image src="/images/Ai_powered_Image.webp" alt="Ai_powered_Image" width={430} height={460} className="w-full h-auto max-w-[430px]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AiPoweredSection;