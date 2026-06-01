import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });
import Link from 'next/link';

interface FAQSectionProps {
    openModal?: () => void;
}
interface FAQSection {
    id: string;
    title: string;
    description: string;
    iconPlus: string;
    iconMinus: string;

}

const FAQSection: React.FC<FAQSectionProps> = ({ openModal }) => {
    const FAQSection: FAQSection[] = [
        {
            id: 'accoridon1',
            title: 'What makes Horizon better than my current theme?',
            description: "Horizon is optimized for speed, design flexibility, AI features and conversions, helping your store perform better on all fronts",
            iconPlus: 'images/AccordionPlus.svg',
            iconMinus: 'images/AccordionMinus.svg',
        },
        {
            id: 'accoridon2',
            title: 'Can you migrate from any Shopify theme (free or paid)?',
            description: "Yes, we can migrate from both free and premium themes into Horizon",
            iconPlus: 'images/AccordionPlus.svg',
            iconMinus: 'images/AccordionMinus.svg',
        }
        ,
        {
            id: 'accoridon3',
            title: 'How long does the migration process take?',
            description: "Typically 3-4 weeks, depending on complexity and customizations",
            iconPlus: 'images/AccordionPlus.svg',
            iconMinus: 'images/AccordionMinus.svg',
        },
        {
            id: 'accoridon4',
            title: 'Do I need new apps when switching to Horizon?',
            description: " Not always. We review your current apps and ensure compatibility or suggest better alternatives",
            iconPlus: 'images/AccordionPlus.svg',
            iconMinus: 'images/AccordionMinus.svg',
        }
    ]
    const faqData = FAQSection;
    const [expanded, setExpanded] = useState<number | false>(0);

    const handleChange =
        (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <>
            <section id="services" className="md:pt-[70px] pt-[40px] md:pb-[90px] pb-[60px]">
                <div className="container mx-auto px-4 overflow-hidden relative">
                    <h2 className="font-source font-[600] font-bold lg:font-medium lg:tracking-[-1px] text-[23px] md:text-[38px] leading-[1.2] md:leading-[49.4px] text-center text-[#111827] md:mb-[5px] mb-[5px]">
                        Frequently Asked Questions
                    </h2>
                     <div className="flex justify-center items-center mb-[30px]">
                        <div className="ai-powered-green-gradient heading-bottom"></div>
                    </div>
                    <div className="max-w-[940px] mx-auto accordion md:mt-[40px] mt-[20px]">
                        {faqData.map((item, index) => {
                            const isActive = expanded === index;

                            return (
                                <div
                                    key={item.id}
                                    className={`rounded-[10px] shadow-[1px_1px_14px_0px_rgba(0,0,0,0.11)] mb-[10px] mt-[10px] transition-all duration-300 ${
                                        isActive ? 'bg-gradient-to-br from-[#22587A] to-[#56CC99]' : 'bg-white'
                                    }`}
                                >
                                    <button
                                        onClick={() => handleChange(index)(null as any, !isActive)}
                                        className="w-full flex justify-between item-start md:items-center py-[25px] px-[25px] text-left"
                                        aria-controls={`panel${item.id}-content`}
                                        id={`panel${item.id}-header`}
                                        aria-expanded={isActive}
                                    >
                                        <span
                                            className={`accordion-item-title text-[20px] font-[500] font-source responsive-h3 ${
                                                isActive ? 'text-[#FFF] mt-[6px]' : 'text-[#111827]'
                                            }`}
                                        >
                                            {item.title}
                                        </span>
                                        <img
                                            src={
                                                isActive
                                                    ? '/images/AccordionMinus.svg'
                                                    : '/images/AccordionPlus.svg'
                                            }
                                            alt={isActive ? 'Collapse' : 'Expand'}
                                            className="w-5 h-5 md:w-7 md:h-7 flex-shrink-0 ml-3"
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${
                                            isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                        id={`panel${item.id}-content`}
                                    >
                                        <div className="px-[25px] pb-[25px]">
                                            <p
                                                className={`md:text-[16px] lg:text-[18px] responsive-subtitle ${
                                                    isActive ? 'text-[#FFF]' : 'text-[#111827]'
                                                } text-[18px] leading-[26px] w-[75%] font-roboto font-[400]`}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section >

        </>
    );
};

export default FAQSection;
