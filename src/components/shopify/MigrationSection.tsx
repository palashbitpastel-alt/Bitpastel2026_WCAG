import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });
import Link from 'next/link';

interface MigrationSectionProps {
    openModal?: () => void;
}

const MigrationSection: React.FC<MigrationSectionProps> = ({ openModal }) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const migrationSteps = [
        { num: '01', icon: '/images/migration1.svg', title: 'Theme Audit', desc: 'Review your existing setup', color: '#22577A' },
        { num: '02', icon: '/images/migration2.svg', title: 'Strategy & Planning', desc: 'Map features to Horizon', color: '#39A3A6' },
        { num: '03', icon: '/images/migration3.svg', title: 'Migration & Customisation', desc: 'Move design, products, and apps seamlessly', color: '#56CC99' },
        { num: '04', icon: '/images/migration4.svg', title: 'AI Integration', desc: 'Add personalization and automation', color: '#56CC99' },
        { num: '05', icon: '/images/migration5.svg', title: 'Testing & launch', desc: 'Ensure smooth performance and conversions', color: '#39A3A6' },
    ];

    return (
        <>
            <section id="Advantages" className="md:pt-[90px] pt-[60px] md:pb-[40px] pb-[50px] migration-section ">
                <div className="container overflow-hidden relative mx-auto px-4">
                    <h2 className="font-source font-bold lg:font-semibold lg:tracking-[-1px] text-[23px] md:text-[38px] leading-[1.2] md:leading-[49.4px] text-center mb-[5px] text-[#111827]">
                        Effortless Migration powered by Bitpastel
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
                            <span className='text-[#39A3A6] migration-number migration-number-1'>01.</span>
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
                            <span className='text-[#56CC99] migration-number'>02.</span>
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
                            <span className='text-[#56CC99] migration-number migration-number-1'>03.</span>
                        </div>
                        <div className='flex justify-end items-center flex-col-reverse lg:mt-[95px] md-mt-[120px]'>
                            <div className='flex justify-start items-center flex-col'>
                                <h3 className='migration-title  md:text-[14px] lg:text-[18px]'>AI Integration</h3>
                                <p className='migration-subtitle mb-0 min-w-[220px]'>Add personalization and automation</p>
                            </div>
                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#FFF] migration-box-shadow'>
                                <Image src="/images/migration4.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline2.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='text-[#56CC99] migration-number'>04.</span>
                        </div>
                        <div className='flex justify-start items-center flex-col mb-[140px]  lg:ml-[6px]'>
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
                            <span className='text-[#22577A] migration-number migration-number-1 '>05.</span>
                        </div>

                    </div>
                    <div className='absolute max-w-[calc(100%-2em)] md:top-[65%] lg:top-[54%] left-[1em] md:translate-y-[-80%]  lg:translate-y-[-50%] migration-middle-line'>
                        <Image src="/images/migration-border.svg" alt="theme-audit" width={2000} height={8} />
                    </div>
                </div>
            </section>
            <section id="Advantages" className="pt-[50px] pb-[50px] migration-section-mobile">
                <div className="container mx-auto px-4">
                    <h2 className="font-[700] font-source text-center text-[23px] leading-[30px] mb-3 text-[#111827]">
                        Effortless Migration Powered by Bitpastel
                    </h2>
                    <div className="flex justify-center items-center mb-[10px]">
                        <div className="ai-powered-green-gradient heading-bottom"></div>
                    </div>

                    {/* Clean vertical timeline — single connector line through the icon centers */}
                    <div className="relative max-w-[400px] mx-auto mt-[34px]">
                        <div
                            aria-hidden="true"
                            className="absolute top-[35px] bottom-[35px] left-[35px] w-[2px] -translate-x-1/2 rounded-full"
                            style={{ background: 'linear-gradient(180deg,#22577A 0%,#56CC99 50%,#39A3A6 100%)' }}
                        />
                        {migrationSteps.map((step) => (
                            <div key={step.num} className="relative flex items-start gap-[18px] pb-[34px] last:pb-0">
                                <div
                                    className="relative z-10 shrink-0 w-[70px] h-[70px] rounded-full bg-[#FFF] flex items-center justify-center"
                                    style={{ boxShadow: '1px 1px 14px 0px #0000001c' }}
                                >
                                    <Image src={step.icon} alt={step.title} width={38} height={38} />
                                </div>
                                <div className="pt-[4px]">
                                    <span
                                        className="block font-source font-[600] text-[14px] leading-[1] mb-[6px]"
                                        style={{ color: step.color }}
                                    >
                                        {step.num}
                                    </span>
                                    <h3 className="font-source font-[700] text-[18px] leading-[24px] text-[#111827] mb-[4px]">
                                        {step.title}
                                    </h3>
                                    <p className="font-roboto font-[400] text-[15px] leading-[22px] text-[#6B7280]">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default MigrationSection;
