import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HerSectionProps {
  openModal?: () => void;
}

const CtaSection: React.FC<HerSectionProps> = ({ openModal }) => {
  return (
    <section className="md:pb-[106px] md:pt-[106px] py-[70px] cta-section">
      <div className="container mx-auto px-4">
        <div className="relative md:rounded-[40px] overflow-hidden flex mx-0 flex-col md:block">
          {/* Background for desktop */}
          <div className="hidden md:block w-full md:absolute md:inset-0 h-full z-0">
            <Image
              src="/images/CTA.webp"
              alt="Background"
              fill
              quality={60}
              className="object-cover object-[50%_65%]"
              priority
            />
          </div>

          {/* Background for mobile */}
          <div className="md:hidden block w-full min-h-[310px] relative rounded-bl-[20px] rounded-tl-[20px] ml-4 overflow-hidden">
            <Image
              src="/images/mobile cta.webp"
              alt="Mobile background"
              fill
              quality={60}
              className="object-cover object-[73%_10%]"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative px-[16px] md:pt-[65px] md:pb-[75px] pt-[40px] pb-[0px] md:text-left text-center lg:px-[60px] text-title z-10">
            <div className="lg:max-w-[530px] md:max-w-[480px] max-w-full">
              <h2 className="md:font-[600] font-[700] font-source md:text-primary-white title text-title md:mb-4 mb-4 md:leading-[45px] md:p-0 px-[20px] leading-[normal]">
                Discover the digital 
                <span className='md:block inline md:pl-0 pl-[5px]'>possibilities we can help you </span>
                <span className='md:block inline md:pl-0 pl-[5px]'> unlock for your business!</span>
              </h2>
              <p className="md:text-primary-white text-title md:mb-8 mb-4 leading-relaxed max-w-[100%] md:max-w-[92%] mr-auto">
                We understand your unique way of work and provide bespoke technology solutions.
                Our team works in sync with you ensuring seamless delivery and optimum quality. We
                are eager to know about your business.
              </p>
              <Link 
                prefetch={true}
                href="#" 
                scroll={false}
                onClick={openModal}
                className="new-btn-design"
              >
                Contact Us
              </Link>
              {/* <button
              onClick={openModal}
                className="btn leading-normal bg-green-btn md:w-auto font-roboto inline-block text-center"
              >
                Contact Us
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection;