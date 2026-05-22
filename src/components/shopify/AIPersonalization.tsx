'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import deviceMockup from '@/../public/images/shopify/pepa.webp'

const dividerGradient =
  'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)';

const resultBullets = [
  'Increase in overall revenue driven by AI-powered recommendations',
  'Higher average order value through targeted upsells',
  'Improved customer engagement and product discovery',
];

const solutionBullets = [
  'Dynamic product recommendations across product and cart pages',
  'Smart upsell and cross-sell widgets',
  'Personalized shopping experiences based on user behaviour',
];


const AIPersonalization: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section className="bg-[#f8fafc] py-[80px] md:py-[100px] overflow-x-clip mob-pad relative">
        <div className='container mx-auto px-4 max-w-[1206px]'>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT — Copy column */}
          <div className="flex flex-col gap-[30px]">
            {/* Headline + gradient divider */}
            <motion.div className="flex flex-col gap-[5px] items-center md:items-start" {...fadeUp(0)}>
              <h2 className="font-source font-bold text-[23px] md:text-[38px] leading-[1.2] md:leading-[49.4px] text-center md:text-left">
                AI Personalisation with Rebuy
              </h2>
              <div
                className="h-[3px] w-[132px] rounded-full"
                style={{ background: dividerGradient }}
              />
            </motion.div>

            {/* Client label */}
            <motion.p
              className="font-roboto font-bold text-[20px] leading-[26px] text-[#111827]"
              {...fadeUp(0.1)}
            >
              Client: Luxury Kidswear brand UK
            </motion.p>

            {/* Challenge */}
            <motion.div
              className="font-roboto text-[18px] text-[#45556c]"
              {...fadeUp(0.2)}
            >
              <span className="block font-bold text-[#f5747e] leading-[26px]">
                Challenge
              </span>
              <p className="leading-[30px] mt-[2px] text-[18px]">
                The client wanted to improve customer engagement and increase average
                order value by delivering more personalized shopping experiences across
                their Shopify store.
              </p>
            </motion.div>
    
            {/* Solution */}
            <motion.div
              className="font-roboto text-[18px] text-[#45556c]"
              {...fadeUp(0.3)}
            >
              <span className="block font-bold text-[#009689] leading-[26px]">
                Solution
              </span>
              <p className="leading-[30px] mt-[2px] text-[18px]">
                Bitpastel implemented{' '}
                <span className="font-semibold">Rebuy AI</span> to enhance the customer
                journey with:
              </p>
              <ul className="mt-[6px] space-y-[2px]">
                {solutionBullets.map((item, i) => (
                  <li
                    key={i}
                    className="leading-[30px] flex gap-[8px] text-[18px]"
                  >
                    <span className="text-[#009689] shrink-0" aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Results callout card */}
            <motion.div
              className="bg-[#d4f0f7] border-l-4 border-solid border-[#18abd4] rounded-r-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] pl-[24px] pr-[20px] py-[20px]"
              {...fadeUp(0.4)}
            >
              <div className="flex gap-[16px] items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22.2552 13.3294H18.9323C18.7205 13.3294 18.5433 13.2559 18.4008 13.1088C18.2586 12.9617 18.1875 12.7785 18.1875 12.5593C18.1875 12.3401 18.2586 12.1569 18.4008 12.0098C18.5433 11.8627 18.7205 11.7892 18.9323 11.7892H22.2552C22.4672 11.7892 22.6444 11.8627 22.7866 12.0098C22.9289 12.1569 23 12.3401 23 12.5593C23 12.7785 22.9289 12.9617 22.7866 13.1088C22.6444 13.2559 22.4672 13.3294 22.2552 13.3294ZM16.4174 19.6859C16.551 19.5041 16.7161 19.3975 16.9127 19.3659C17.1096 19.3343 17.2958 19.3876 17.4713 19.5257L20.1128 21.5815C20.2883 21.7196 20.3913 21.8904 20.4219 22.094C20.4524 22.2973 20.4009 22.4898 20.2673 22.6716C20.1337 22.8531 19.9685 22.9596 19.7717 22.9912C19.575 23.0228 19.3888 22.9695 19.213 22.8314L16.572 20.7756C16.3962 20.6375 16.293 20.4668 16.2625 20.2635C16.232 20.0599 16.2836 19.8674 16.4174 19.6859ZM19.9981 3.41888L17.357 5.4743C17.1812 5.61241 16.995 5.66567 16.7984 5.6341C16.6015 5.60252 16.4363 5.49599 16.3027 5.3145C16.1689 5.13276 16.1173 4.94023 16.1478 4.73692C16.1786 4.53336 16.2818 4.36252 16.4573 4.22441L19.0987 2.16861C19.2742 2.03051 19.4604 1.97724 19.6573 2.00881C19.854 2.04039 20.019 2.14705 20.1526 2.32879C20.2864 2.51028 20.3381 2.70281 20.3075 2.90637C20.277 3.10968 20.1738 3.28052 19.9981 3.41888ZM6.09892 15.6397H2.20286C1.85727 15.6397 1.5704 15.5218 1.34224 15.2859C1.11408 15.05 1 14.7532 1 14.3956V10.723C1 10.3654 1.11408 10.0686 1.34224 9.83273C1.5704 9.59682 1.85727 9.47886 2.20286 9.47886H6.09892L10.0978 5.34377C10.3403 5.09323 10.6225 5.03354 10.9442 5.16472C11.2662 5.29615 11.4272 5.54053 11.4272 5.89786V19.2207C11.4272 19.5781 11.2662 19.8224 10.9442 19.9539C10.6225 20.0851 10.3403 20.0254 10.0978 19.7748L6.09892 15.6397ZM9.93764 7.70762L6.73499 11.0191H2.48961V14.0995H6.73499L9.93764 17.411V7.70762Z" fill="#0A5F77"/>
</svg>
                {/* Image import retained for device mockup PNGs below */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-source font-bold text-[18px] leading-[22.4px] text-[#0a5f77] mb-[4px]">
                    Results
                  </h3>
                  <ul className="font-roboto font-normal text-[16px] text-[#1583a1]">
                    {resultBullets.map((item, i) => (
                      <li
                        key={i}
                        className="leading-[26px] flex gap-[6px]"
                      >
                        <span className="shrink-0" aria-hidden="true">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Device mockup column */}
          <motion.div
            className="lg:absolute lg:right-0 lg:h-[calc(100%-200px)] h-full md:mr-0 -mr-4 ml-auto lg:mx-0 flex items-center justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           <div className="w-full h-full lg:w-[100%] xl:w-[100%] lg:max-w-none flex items-center justify-end">
            <Image src={deviceMockup} alt="Device mockup" className="w-full h-full object-contain max-w-[690px]"  />
           </div>
          </motion.div>
        </div>

        </div>
    </section>
  );
};

export default AIPersonalization;
