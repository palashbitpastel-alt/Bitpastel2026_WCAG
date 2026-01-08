import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Link from 'next/link';

interface MigrationSectionProps {
    openModal?: () => void;
}

const MigrationSection: React.FC<MigrationSectionProps> = ({ openModal }) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <section id="Advantages" className="md:pt-[90px] pt-[60px] md:pb-[40px] pb-[50px] migration-section ">
                <div className="container overflow-hidden relative mx-auto px-4">
                    <h2 className=" md:font-[600] font-[700] font-source text-center md:text-[28px] lg:text-[36px]  md:mb-0 mb-3 text-[#111827]">
                        Effortless migration powered by Bitpastel
                    </h2>
                    <div className="flex justify-center items-center mb-[30px]">
                        <div className="ai-powered-green-gradient heading-bottom"></div>
                    </div>
                    <div className="grid grid-cols-5 md:grid-cols-5 custom-grid-wrapper-migration gap-4 md:gap-0">
                        <div className='flex justify-start items-center flex-col mb-[140px]  ml-[30px]'>
                            <div className='flex justify-center items-center flex-col'>
                                <h3 className='migration-title md:text-[14px] lg:text-[18px]'>Theme Audit</h3>
                                <p className='migration-subtitle min-w-[220px]'>Review your existing setup</p>
                            </div>

                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#FFF] migration-box-shadow'>
                                <Image src="/images/migration1.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='migration-number migration-number-1'>01.</span>
                        </div>
                        <div className='flex justify-end items-center flex-col-reverse lg:mt-[95px] md-mt-[120px] ml-[30px] '>
                            <div className='flex justify-center items-center flex-col'>
                                <h3 className='migration-title  md:text-[14px] lg:text-[18px]'>Strategy & Planning</h3>
                                <p className='migration-subtitle mb-0 min-w-[220px]'>Map features to Horizon</p>
                            </div>

                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#FFF] migration-box-shadow'>
                                <Image src="/images/migration2.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline2.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='migration-number'>02.</span>
                        </div>
                        <div className='flex justify-start items-center flex-col mb-[140px] ml-[30px]'>
                            <div className='flex justify-center items-center flex-col'>
                                <h3 className='migration-title  md:text-[14px] lg:text-[18px]'>Migration & Customisation</h3>
                                <p className='migration-subtitle min-w-[220px]'> Move design, products, and apps seamlessly</p>
                            </div>
                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#FFF] migration-box-shadow'>
                                <Image src="/images/migration3.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='migration-number migration-number-1'>03.</span>
                        </div>
                        <div className='flex justify-end items-center flex-col-reverse lg:mt-[95px] md-mt-[120px]'>
                            <div className='flex justify-start items-center flex-col'>
                                <h3 className='migration-title  md:text-[14px] lg:text-[18px]'>AI Integration</h3>
                                <p className='migration-subtitle mb-0 min-w-[220px]'>Add personalisation and automation</p>
                            </div>
                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#FFF] migration-box-shadow'>
                                <Image src="/images/migration4.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline2.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='migration-number'>04.</span>
                        </div>
                        <div className='flex justify-start items-center flex-col mb-[140px]  lg:ml-[30px]'>
                            <div className='flex justify-center items-center flex-col'>
                                <h3 className='migration-title  md:text-[14px] lg:text-[18px]' >Testing & launch</h3>
                                <p className='migration-subtitle min-w-[220px]'>Ensure smooth performance and conversions</p>
                            </div>
                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#FFF] migration-box-shadow'>
                                <Image src="/images/migration5.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='migration-number migration-number-1'>05.</span>
                        </div>

                    </div>
                    <div className='absolute max-w-[calc(100%-2em)] md:top-[65%] lg:top-[54%] left-[1em] md:translate-y-[-80%]  lg:translate-y-[-50%] migration-middle-line'>
                        <Image src="/images/migration-border.svg" alt="theme-audit" width={2000} height={8} />
                    </div>
                </div>
            </section>
            <section id="Advantages" className="md:pt-[90px] pt-[60px] pb-[60px] migration-section-mobile h-full">
                <div className="container  mx-auto px-4 overflow-hidden relative md:px-[30px] mx-auto">
                    <h2 className=" md:font-[600] font-[700] font-source text-center md:text-[28px] lg:text-[36px]  md:mb-0 mb-3 text-[#111827]">
                        Effortless Migration Powered by Bitpastel
                    </h2>
                    <div className="flex justify-center items-center mb-[30px]">
                        <div className="ai-powered-green-gradient heading-bottom"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 grid-gap-class pt-[70px] pb-[50px]">
                        <div className='flex justify-between items-center flex-col migration-section-item w-full gap-4 mt-4 mr-[20px]'>
                            <div className='flex justify-center items-left flex-col '>
                                <h3 className='migration-title md:text-[14px] lg:text-[16px] text-left'>Theme Audit</h3>
                                <p className='migration-subtitle word-break'>Review your existing setup</p>
                            </div>
                            <div className='flex item-center flex-row-reverse gap-6 mt-[-15px]'>
                                <div className='flex flex-col-reverse justify-center items-center'>
                                    <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} className='rotate-class' />
                                    <span className='migration-number mb-0'>01.</span>
                                </div>
                                <div className='flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#FFF] migration-box-shadow'>
                                    <Image src="/images/migration1.svg" alt="theme-audit" width={40} height={40} />
                                </div>
                            </div>



                        </div>
                        <div className='flex justify-between items-center flex-col migration-section-item w-full gap-4'>
                            <div className='flex justify-center items-left flex-col '>
                                <h3 className='migration-title md:text-[14px] lg:text-[16px]'>Strategy & Planning</h3>
                                <p className='migration-subtitle '>Map features to Horizon</p>
                            </div>
                            <div className='flex item-center flex-row-reverse gap-6 mt-[-15px]'>
                                 <div className='flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#FFF] migration-box-shadow'>
                                    <Image src="/images/migration2.svg" alt="theme-audit" width={40} height={40} />
                                </div>
                                <div className='flex flex-col-reverse justify-center items-center'>
                                    <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} className='rotate-class-rotate' />
                                    <span className='migration-number mb-0'>02.</span>
                                </div>
                               
                            </div>



                        </div>
                        <div className='flex justify-between items-center flex-col migration-section-item w-full gap-4'>
                            <div className='flex justify-center items-left flex-col w-[50%]'>
                                <h3 className='migration-title md:text-[14px] lg:text-[16px]'>Migration & Customisation</h3>
                                <p className='migration-subtitle'>Add personalisation and automation</p>
                            </div>
                            <div className='flex item-center flex-row-reverse gap-6 mt-[-15px]'>
                                <div className='flex flex-col-reverse justify-center items-center'>
                                    <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} className='rotate-class' />
                                    <span className='migration-number mb-0'>03.</span>
                                </div>
                                <div className='flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#FFF] migration-box-shadow'>
                                    <Image src="/images/migration3.svg" alt="theme-audit" width={40} height={40} />
                                </div>
                            </div>



                        </div>
                        <div className='flex justify-between items-center flex-col migration-section-item w-full gap-4'>
                            <div className='flex justify-center items-left flex-col '>
                                <h3 className='migration-title md:text-[14px] lg:text-[16px]'>AI Integration</h3>
                                <p className='migration-subtitle'>Review your existing setup</p>
                            </div>
                            <div className='flex item-center flex-row gap-6 mt-[-15px]'>
                                <div className='flex flex-col-reverse justify-center items-center'>
                                    <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} className='rotate-class-rotate' />
                                    <span className='migration-number mb-0'>04.</span>
                                </div>
                                <div className='flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#FFF] migration-box-shadow'>
                                    <Image src="/images/migration4.svg" alt="theme-audit" width={40} height={40} />
                                </div>
                            </div>



                        </div>
                        <div className='flex justify-between items-center flex-col migration-section-item w-full gap-4'>
                            <div className='flex justify-center items-left flex-col w-[50%]'>
                                <h3 className='migration-title md:text-[14px] lg:text-[16px]'>Testing & launch</h3>
                                <p className='migration-subtitle'>Ensure smooth performance and conversions</p>
                            </div>
                            <div className='flex item-center flex-row-reverse gap-6 mt-[-15px]'>
                                <div className='flex flex-col-reverse justify-center items-center'>
                                    <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} className='rotate-class' />
                                    <span className='migration-number mb-0'>05.</span>
                                </div>
                                <div className='flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#FFF] migration-box-shadow'>
                                    <Image src="/images/migration5.svg" alt="theme-audit" width={40} height={40} />
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className='absolute top-[15%] translate-x-[-50%] left-[45%] migration-middle-line'>
                        <Image src="/images/Vector 3.png" alt="theme-audit" className='w-[50px]' width={2000} height={8} />
                    </div>
                </div>
            </section>

        </>
    );
};

export default MigrationSection;
