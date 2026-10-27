// import React, { useState } from 'react';
// import Image from 'next/image';

// const CultureSection = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const handleClick = (index: number) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const features = [
//     {
//       id: 1,
//       title: 'Reliable Engineering',
//       icon: '/images/img_icroundsettings.svg',
//       mobileTextColor: 'text-[rgba(62,203,144,1)]',
//       mobileBg: 'bg-[rgba(216,245,233,1)]',
//       arrowcolor: '#3ECB90',
//       items: [
//         'Multifunctional engineering teams with deep expertise',
//         'Proven track record of 100% Customer Satisfaction',
//       ],
//     },
//     {
//       id: 2,
//       title: 'Quality Assurance',
//       icon: '/images/img_icbaselinediamond.svg',
//       mobileTextColor: 'text-[rgba(240,198,56,1)]',
//       mobileBg: 'bg-[rgba(252,244,215,1)]',
//       arrowcolor: '#F0C638',
//       items: [
//         'Dedicated QA team for thorough testing',
//         'Multilayered Quality Assurance before delivery',
//       ],
//     },
//     {
//       id: 3,
//       title: 'Cool & Elegant Designs',
//       icon: '/images/ink-pen 2.svg',
//       mobileTextColor: 'text-[rgba(85,184,208,1)]',
//       mobileBg: 'bg-[rgba(216,247,255,1)]',
//       arrowcolor: '#55B8D0',
//       items: ['Dedicated design studio with a talented team', 'Specialists in high-quality UI/UX'],
//     },
//     {
//       id: 4,
//       title: 'Agile Delivery',
//       icon: '/images/img_mingcutetimefill.svg',
//       mobileTextColor: 'text-[rgba(245,116,126,1)]',
//       mobileBg: 'bg-[rgba(253,227,229,1)]',
//       arrowcolor: '#F5747E',
//       items: ['Delivery on demanding timelines', 'Fast-paced response across all timezone'],
//     },
//   ];

//   return (
//     <section id="culture" className="md:pt-[90px] pt-[64px] bg-[#ffffff]">
//       <div className="container mx-auto px-4">
//         <h2 className="font-source md:font-[600] font-[700] text-center text-title title md:mb-8 mb-4">
//           Why work with us?
//         </h2>
//         <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] md:grid-cols-1 items-center md:gap-12 gap-8">
//           {/* Fixed Image Container - Maintains original height behavior */}
//           <div className="w-full md:h-full h-auto">
//             <div className="relative w-full h-full md:rounded-[40px] rounded-[20px] overflow-hidden">
//               <Image
//                 src="/images/img_rectangle_51.webp"
//                 alt="Team collaboration"
//                 width={1200}  // Actual image width
//                 height={800}   // Actual image height
//                 quality={100}
//                 className="w-full md:h-full h-auto"
//                 priority
//               />
//             </div>
//           </div>
          
//           <div className="work-with-us-features grid grid-cols-1 md:grid-cols-1 xl:gap-10 md:gap-6 gap-4">
//             {features.map((feature, index) => (
//               <div
//                 key={feature.id}
//                 className={`relative rounded-[10px] transition-all duration-300 ease-in-out overflow-hidden
//                   md:bg-transparent md:p-0 md:rounded-none
//                   ${feature.mobileBg} p-5
//                 `}
//                 onClick={() => handleClick(index)}
//               >
//                 <div className="flex md:space-x-4 space-x-3 md:mb-4 flex-row gap-0 text-left justify-start cursor-pointer">
//                   <Image
//                     src={feature.icon}
//                     alt={feature.title}
//                     width={24}
//                     height={24}
//                     quality={100}
//                     className=""
//                   />
//                   <h3
//                     className={`font-bold font-source text-title subheading leading-[1] ${feature.mobileTextColor} md:text-inherit`}
//                   >
//                     {feature.title}
//                   </h3>
//                   <span className="md:hidden block arrow-icon">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'rotate-0 ' : 'rotate-180'}`}
//                     >
//                       <path
//                         d="M11.9463 8.7625L19.6618 16.4778C19.8091 16.6253 19.9863 16.698 20.1933 16.696C20.4005 16.6942 20.5777 16.6195 20.725 16.472C20.8725 16.3247 20.9463 16.1474 20.9463 15.9403C20.9463 15.7333 20.8725 15.556 20.725 15.4085L13.0828 7.772C12.9213 7.6105 12.7412 7.49259 12.5425 7.41826C12.3437 7.34392 12.145 7.30675 11.9463 7.30675C11.7476 7.30675 11.5489 7.34392 11.35 7.41826C11.1514 7.49259 10.9713 7.6105 10.8098 7.772L3.16754 15.4145C3.02004 15.5618 2.94729 15.7381 2.94929 15.9433C2.95112 16.1484 3.02579 16.3247 3.17329 16.472C3.32062 16.6195 3.49787 16.6933 3.70504 16.6933C3.91204 16.6933 4.08929 16.6195 4.23679 16.472L11.9463 8.7625Z"
//                         fill={feature.arrowcolor}
//                       />
//                     </svg>
//                   </span>
//                 </div>

//                 {/* Mobile Accordion Content (hidden on desktop) */}
//                 <div
//                   className="md:hidden transition-all duration-300 ease-in-out overflow-hidden"
//                   style={{
//                     maxHeight: activeIndex === index ? '200px' : '0',
//                     opacity: activeIndex === index ? 1 : 0,
//                   }}
//                 >
//                   <ul className="pl-[36px] text-title mt-4">
//                     {feature.items.map((item, itemIndex) => (
//                       <li key={itemIndex} className="leading-[normal] font-roboto text-[13px] mb-2">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Desktop Static Content (hidden on mobile) */}
//                 <div className="hidden md:block">
//                   <ul className="lg:pl-[57px] md:pl-[41px] text-title">
//                     {feature.items.map((item, itemIndex) => (
//                       <li key={itemIndex} className="leading-[1] font-roboto text-[16px] md:mb-3">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CultureSection;






import React, { useState } from 'react';
import Image from 'next/image';

const CultureSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const features = [
    {
      id: 1,
      title: 'Reliable Engineering',
      icon: '/images/feature-reliable-engineering.svg',
      mobileTextColor: 'text-[#00704E]',
      mobileBg: 'bg-[rgba(216,245,233,1)]',
      arrowcolor: '#3ECB90',
      iconAltText: 'Icon representing reliable engineering',
      items: [
        'Multifunctional engineering teams with deep expertise',
        'Proven track record of 100% Customer Satisfaction',
      ],
    },
    {
      id: 2,
      title: 'Quality Assurance',
      icon: '/images/feature-quality-assurance.svg',
      mobileTextColor: 'text-[#7A5C00]',
      mobileBg: 'bg-[rgba(252,244,215,1)]',
      arrowcolor: '#F0C638',
      iconAltText: 'Icon representing quality assurance',
      items: [
        'Dedicated QA team for thorough testing',
        'Multilayered Quality Assurance before delivery',
      ],
    },
    {
      id: 3,
      title: 'Cool & Elegant Designs',
      icon: '/images/feature-elegant-designs.svg',
      mobileTextColor: 'text-[#0A6A80]',
      mobileBg: 'bg-[rgba(216,247,255,1)]',
      arrowcolor: '#55B8D0',
      iconAltText: 'Icon representing cool and elegant designs',
      items: ['Dedicated design studio with a talented team', 'Specialists in high-quality UI/UX'],
    },
    {
      id: 4,
      title: 'Agile Delivery',
      icon: '/images/feature-agile-delivery.svg',
      mobileTextColor: 'text-[#B3202D]',
      mobileBg: 'bg-[rgba(253,227,229,1)]',
      arrowcolor: '#F5747E',
      iconAltText: 'Icon representing agile delivery',
      items: ['Delivery on demanding timelines', 'Fast-paced response across all timezone'],
    },
  ];

  return (
    <section id="culture" className="md:pt-[90px] pt-[64px] bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2 className=" md:leading-[1] font-source md:font-[600] font-[700] text-center text-title title md:mb-[40px] mb-3">
          {/* Why work with us? */}
          {/* Our Commitment to You */}
          The Value We Bring
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_60%] md:grid-cols-1 items-center md:gap-[24px] gap-8">


<div className="work-with-us-features md:border md:border-[#BDE0CE] rounded-[40px] flex flex-col justify-between h-full p-[30px] grid grid-cols-1 md:grid-cols-1 xl:gap-10 md:gap-6 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`md:content-center relative md:after:content-[''] after:absolute after:bottom-[-14px] after:left-0 after:w-full after:border-b after:border-[#29996A4D] last:after:hidden rounded-[10px] transition-all duration-300 ease-in-out md:overflow-visible overflow-hidden
                  md:bg-transparent md:p-0 md:rounded-none
                  ${feature.mobileBg} p-5
                `}
                onClick={() => handleClick(index)}
              >
                <div className="flex md:space-x-4 space-x-3 md:mb-4 flex-row gap-0 text-left justify-start cursor-pointer">
                  <Image
                    src={feature.icon}
                    alt={feature.iconAltText}
                    aria-hidden="true"
                    width={24}
                    height={24}
                    quality={100}
                    className=""
                  />
                  <h3
                    className={`font-bold font-source md:text-[22px] text-[20px] leading-[1] ${feature.mobileTextColor} md:text-[#123B42]`}
                  >
                    {feature.title}
                  </h3>
                  <span className="md:hidden block arrow-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'rotate-0 ' : 'rotate-180'}`}
                    >
                      <path
                        d="M11.9463 8.7625L19.6618 16.4778C19.8091 16.6253 19.9863 16.698 20.1933 16.696C20.4005 16.6942 20.5777 16.6195 20.725 16.472C20.8725 16.3247 20.9463 16.1474 20.9463 15.9403C20.9463 15.7333 20.8725 15.556 20.725 15.4085L13.0828 7.772C12.9213 7.6105 12.7412 7.49259 12.5425 7.41826C12.3437 7.34392 12.145 7.30675 11.9463 7.30675C11.7476 7.30675 11.5489 7.34392 11.35 7.41826C11.1514 7.49259 10.9713 7.6105 10.8098 7.772L3.16754 15.4145C3.02004 15.5618 2.94729 15.7381 2.94929 15.9433C2.95112 16.1484 3.02579 16.3247 3.17329 16.472C3.32062 16.6195 3.49787 16.6933 3.70504 16.6933C3.91204 16.6933 4.08929 16.6195 4.23679 16.472L11.9463 8.7625Z"
                        fill={feature.arrowcolor}
                      />
                    </svg>
                  </span>
                </div>

                {/* Mobile Accordion Content (hidden on desktop) */}
                <div
                  className="md:hidden transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: activeIndex === index ? '200px' : '0',
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                >
                  <ul className="pl-[36px] text-title mt-4">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="leading-[normal] font-roboto text-[13px] mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desktop Static Content (hidden on mobile) */}
                <div className="hidden md:block">
                  <ul className="lg:pl-[25px] md:pl-[41px] text-[#222B32]">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="leading-[1] font-roboto text-[16px] md:mb-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Fixed Image Container - Maintains original height behavior */}
          <div className="w-full md:h-full h-auto">
            <div className="relative w-full h-full md:rounded-[40px] rounded-[20px] overflow-hidden">
              <Image
                src="/images/img_rectangle_51.webp"
                alt="Colleagues shaking hands across a meeting table"
                width={783}  // Actual image width
                height={578}   // Actual image height
                quality={75}
                className="w-full md:h-full h-auto"
                priority
              />
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default CultureSection;