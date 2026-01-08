import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
const TechPartnerSection = () => {
  return (
    <section className="md:pt-[70px] pt-[70px]" id="#partner">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="md:rounded-tr-[40px] md:rounded-br-[40px] rounded-br-[20px] rounded-tr-[20px] overflow-hidden lg:mr-0 md:mr-4 mr-4 min-h-[15rem] md:min-h-[auto]">
            {/* <Image
              src="/images/person-client.png"
              alt="Team collaboration"
              width={711}
              height={406}
              className="w-full md:h-full h-[280px] md:object-unset object-cover md:object-center object-right"
            /> */}
            <img src="/images/person-client.png" alt="Team collaboration" className="w-full md:h-full h-[280px] md:object-unset object-cover md:object-center object-right"/>
          </div>
          <div className="lg:ml-0 md:ml-4 ml-4 bg-primary-mint lg:p-12 md:p-12 py-10 px-6 md:rounded-tl-[40px] md:rounded-bl-[40px] rounded-bl-[20px] rounded-tl-[20px] content-center overflow-hidden">
            {/* <div className="lg:w-1/2 bg-primary-mint rounded-[40px] p-12"> */}
            <h2 className=" lg:leading-[45px] leading-[normal] font-source font-[600] text-dark title  text-title md:mb-8 mb-5 ">
              <span className="font-semibold">Why we are the best </span>
              <br />
              <span className="font-[600] text-accent-green">Tech Partner</span>
              <span className="font-semibold"> out there</span>
            </h2>
            <div className="md:space-y-4 space-y-2 leading-[1] text-title ">
              <div className="flex md:gap-4 gap-2 items-start">
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="md:w-[auto] w-[20px] md:h-[auto] h-[20px] md:mt-[-5px] mt-[-2px] hidden md:block"
                />
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-auto md:hidden mt-[-4px] block md:w-[auto]"
                />
                <p className="font-[400] font-roboto text-title paragraph">
                  Perfectly managed worry-free delivery
                </p>
              </div>

              <div className="flex md:gap-4 gap-2 items-start">
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="md:w-[auto] w-[20px] md:h-[auto] h-[20px] md:mt-[-5px] mt-[-2px] hidden md:block"
                />
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-auto md:hidden mt-[-4px] block md:w-[auto]"
                />
                <p className="font-[400] font-roboto text-title ">Fast turn-around time</p>
              </div>
              <div className="flex md:gap-4 gap-2 items-start">
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="md:w-[auto] w-[20px] md:h-[auto] h-[20px] md:mt-[-5px] mt-[-2px] hidden md:block"
                />
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-auto md:hidden mt-[-4px] block md:w-[auto]"
                />
                <p className="font-[400] font-roboto text-title ">
                  Multi-layered Quality Assurance
                </p>
              </div>
              <div className="flex md:gap-4 gap-2 items-start">
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="md:w-[auto] w-[20px] md:h-[auto] h-[20px] md:mt-[-5px] mt-[-2px] hidden md:block"
                />
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-auto md:hidden mt-[-4px] block md:w-[auto]"
                />
                <p className="font-[400] font-roboto text-title ">
                  Idea, Confidentiality & Data Protection
                </p>
              </div>
              <div className="flex md:gap-4 gap-2 items-start">
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="md:w-[auto] w-[20px] md:h-[auto] h-[20px] md:mt-[-5px] mt-[-2px] hidden md:block"
                />
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-auto md:hidden block mt-[-4px] md:w-[auto]"
                />
                <p className="font-[400] font-roboto text-title ">30 days free maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPartnerSection;
