
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
interface TransformSectionProps {
    openModal?: () => void;
}

const TransformSection: React.FC<TransformSectionProps> = ({ openModal }) => {
    return (
        <>
            <section id="Advantages" className="relative  overflow-hidden md:pb-[90px] pb-[60px] transform-section">
                <div className="relative z-10 container  mx-auto px-4 md:pt-[50px] pt-[50px] md:pb-[50px] pb-[50px]  text-left ">
                    <div
                        className="absolute inset-0 bg-cover rounded-[20px] md:mx-4 bg-[position:60%_20%] bg-no-repeat z-[-1] background-image"
                        style={{
                            backgroundImage: `
            url('/images/transformsectionbackground.png')
          `,
                        }}
                    ></div>

                    <div className='grid  md:grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className="md:h-full content-center mx-auto md:max-w-[100%] max-w-[310px]">
                            <div className="flex md:justify-center lg:justify-start items-center mb-3 horinzon-logo-area-small">
                                <img src="/images/horizon_logo.png" alt="Horizon logo" width={146} height={60} />
                            </div>
                            <h1 className="md:text-primary-white md:text-[32px] lg:text-[36px] lg:leading-[40px] font-source leading-[normal] md:mb-5 mb-4 md:text-center lg:text-start  horizon-title ">
                                <span className='block'>Ready to transform</span>
                                <span>your Shopify store with Horizon?</span>
                            </h1>
                            <h4 className="md:text-primary-white horizon-subtitle md:text-[16px] lg:text-[18px] lg:leading-[40px] font-source leading-[normal] md:mb-5 mb-4  md:text-center lg:text-start ">
                                <span className='block'>Let Bitpastel handle your migration, customisation,</span>
                                <span> and AI integration-so you can focus on growth.</span>
                            </h4>

                            <div className='flex lg:justify-start md:justify-center items-center gap-2'>
                                <button
                                    className="btn leading-normal bg-white-btn bg-green-text md:w-auto w-[100%] mt-[15px] font-roboto btn-hover"
                                    // onClick={() => setIsModalOpen(true)}
                                    onClick={() => window.open('https://calendly.com/ayanh/meet-ayan', '_blank')}
                                >
                                  Book Free Consultation
                                </button>
                                
                            </div>
                            <div>


                            </div>
                            {/* <button
              className="btn leading-normal bg-green-btn md:w-auto w-[100%] mt-[15px] font-roboto"
              // onClick={() => setIsModalOpen(true)}
              onClick={openModal}
            >
              Let’s Work Together
            </button> */}

                        </div>
                        <div className='flex justify-center align-middle'>
                            <img src="/images/transformmain.webp" alt="transformmain" width={430} height={460} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TransformSection;