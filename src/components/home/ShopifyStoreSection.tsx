// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import ShopifyImage from '../../../public/images/shopify_X_bitpastel.svg';
// import ShopifyImageMobile from '../../../public/images/shopify_x_bitpastel_mobile.svg';
// //import Button from '@/components/ui/Button';
// const ShopifyStoreSection = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 767);
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//   return (
//     <section className="md:pt-[100px] pt-[60px]">
//       <div className="container mx-auto px-4  ">
//         {/* <div className="flex flex-col lg:flex-row items-center gap-12 md:md:rounded-[40px] md:p-8 px-4 pt-4 pb-12 bg-primary-mint md:text-left text-center "> */}
//         <div className="flex flex-col lg:flex-row items-center md:gap-0 gap-12 md:rounded-[40px] rounded-[20px] bg-primary-mint md:text-left text-center pt-[20px] px-[20px] pb-[40px] md:p-0 ">
//           <div className="lg:w-1/2 w-full xl:px-[55px] md:pl-[40px] md:pr-[20px] md:pt-[30px] md:pb-[40px]">
//             <div className='xl:mb-[20px] mb-[10px]'>
//               <Image
//                 src={isMobile ? ShopifyImageMobile : ShopifyImage}
//                 alt="Team working together"
//                 width={isMobile ? 230 : 266}
//                 height={53}
//                 className="shopifyX-image object-contain object-center md:object-cover md:object-[30%] xl:object-contain xl:object-center"
//               />
//             </div>
//             <h2 className=" font-source md:font-[600] font-[700] text-title title mb-6 md:leading-[45px] leading-[normal] text-accent-green">
//               <span className='text-accent-green'>400+</span> Shopify Stores
//               <br />
//               & <span className='text-accent-green'>100+</span> Shopify Plus Stores
//             </h2>
//             {/* <p className="text-[16px] leading-[26px] text-title md:leading-relaxed mb-8"> */}
//             <p className="text-[16px] leading-[26px] md:p-0 px-[10px] text-title md:leading-relaxed">
//               We have helped 100+ brands grow from scratch to $1M GMV.
//               <span className='md:block inline md:pl-0 pl-[5px]' />
//               At Bitpastel, we build differentiated, fast, and scalable online
//               <span className='md:block inline md:pl-0 pl-[5px]' />
//               stores to help you provide the best customer experience!
//             </p>
//             {/* <button className="btn font-roboto h-auto  font-[400] bg-green-btn">
//               Explore Our Portfolio
//             </button> */}
//           </div>
//           <div className="lg:w-1/2 lg:py-[11px] lg:pr-[11px] md:p-[11px]  w-full lg:order-last order-first xl:h-auto md:h-[-webkit-fill-available] h-auto">
//             <Image
//               src="/images/shopify_client_image.webp"
//               alt="Team working together"
//               width={1200}
//               height={800}
//               className="md:rounded-[40px] rounded-[20px] w-full xl:h-auto md:h-[100%] h-auto object-contain object-center md:object-cover md:object-[30%] xl:object-contain xl:object-center"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShopifyStoreSection;







import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ShopifyImage from '../../../public/images/shopify_X_bitpastel.svg';
import ShopifyImageMobile from '../../../public/images/shopify_x_bitpastel_mobile.svg';
import ShopifyClientImage from '../../../public/images/shopify_client_image1.webp';
import ShopifyClientImage2 from '../../../public/images/shopify_client_image2.webp';
import ShopifyClientImage3 from '../../../public/images/shopify_client_image3-1.webp';
//import Button from '@/components/ui/Button';
const ShopifyStoreSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className="md:pt-[73px] pt-[60px]">
      <div className="container mx-auto mb-12 px-4  ">
        {/* <div className="flex flex-col lg:flex-row items-center gap-12 md:md:rounded-[40px] md:p-8 px-4 pt-4 pb-12 bg-primary-mint md:text-left text-center "> */}
        <div className="flex flex-col lg:flex-row items-center md:gap-0 gap-12 md:rounded-[40px] rounded-[20px] bg-primary-mint md:text-left text-center pt-[20px] px-[20px] pb-[40px] md:p-0 ">
          <div className="lg:w-1/2 w-full xl:px-[55px] md:pl-[40px] md:pr-[20px] md:pt-[30px] md:pb-[40px]">
            <div className="xl:mb-[20px] mb-[10px]">
              <Image
                src={isMobile ? ShopifyImageMobile : ShopifyImage}
                alt="Team working together"
                width={isMobile ? 230 : 266}
                height={53}
                className="shopifyX-image object-contain object-center md:object-cover md:object-[30%] xl:object-contain xl:object-center"
              />
            </div>
            <h2 className=" font-source md:font-[600] font-[700] text-title title mb-6 md:leading-[45px] leading-[normal] text-accent-green">
              <span className="text-accent-green">400+</span> Shopify Stores
              <br />& <span className="text-accent-green">100+</span> Shopify Plus Stores
            </h2>
            {/* <p className="text-[16px] leading-[26px] text-title md:leading-relaxed mb-8"> */}
            <p className="text-[16px] leading-[26px] md:p-0 px-[10px] text-title md:leading-relaxed">
              We have helped 250+ brands grow from scratch to $1M GMV.
              <span className="md:block inline md:pl-0 pl-[5px]" />
              At Bitpastel, we build differentiated, fast, and scalable online
              <span className="md:block inline md:pl-0 pl-[5px]" />
              stores to help you provide the best customer experience!
              <span className="md:block inline md:pl-0 pl-[5px]" />
              We also deliver speed and performance optimization that 
              <span className="md:block inline md:pl-0 pl-[5px]" />
              contributes to better conversion rates.
            </p>
            {/* <button className="btn font-roboto h-auto  font-[400] bg-green-btn">
              Explore Our Portfolio
            </button> */}
          </div>
          <div className="lg:w-1/2 lg:py-[11px] lg:pr-[11px] md:p-[11px]  w-full lg:order-last order-first xl:h-auto md:h-[-webkit-fill-available] h-auto">
            <Image
              src={ShopifyClientImage}
              alt="Team working together"
              width={1200}
              height={800}
              quality={75}
              className="md:rounded-[40px] rounded-[20px] w-full xl:h-auto md:h-[100%] h-auto object-contain object-center md:object-cover md:object-[30%] xl:object-contain xl:object-center"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-12 px-4  ">
        {/* <div className="flex flex-col lg:flex-row items-center gap-12 md:md:rounded-[40px] md:p-8 px-4 pt-4 pb-12 bg-primary-mint md:text-left text-center "> */}
        <div className="flex flex-col lg:flex-row-reverse items-center md:gap-0 gap-12 md:rounded-[40px] rounded-[20px] bg-primary-mint md:text-left text-center pt-[20px] px-[20px] pb-[40px] md:p-0 ">
          <div className="lg:w-1/2 w-full xl:px-[55px] md:pl-[40px] md:pr-[20px] md:pt-[30px] md:pb-[40px]">
            {/* <div className="xl:mb-[20px] mb-[10px]">
              <Image
                src={isMobile ? ShopifyImageMobile : ShopifyImage}
                alt="Team working together"
                width={isMobile ? 230 : 266}
                height={53}
                className="shopifyX-image object-contain object-center md:object-cover md:object-[30%] xl:object-contain xl:object-center"
              />
            </div> */}
            <h2 className=" font-source md:font-[600] font-[700] text-title title mb-6 md:leading-[45px] leading-[normal] text-accent-green">
              Building Scalable SaaS
              <br />
              Platforms that grow with you
            </h2>
            {/* <p className="text-[16px] leading-[26px] text-title md:leading-relaxed mb-8"> */}
            <p className="text-[16px] leading-[26px] md:p-0 px-[10px] text-title md:leading-relaxed">
              {/* We have helped 100+ brands grow from scratch to $1M GMV.
              <span className="md:block inline md:pl-0 pl-[5px]" />
              At Bitpastel, we build differentiated, fast, and scalable online
              <span className="md:block inline md:pl-0 pl-[5px]" />
              stores to help you provide the best customer experience! */}
              We create SaaS solutions tailored to your business goals which
              <span className="md:block inline md:pl-0 pl-[5px]" />
              are secure, scalable, and designed for seamless growth, helping
              <span className="md:block inline md:pl-0 pl-[5px]" />
              you streamline operations, boost collaboration, and enhance
              <span className="md:block inline md:pl-0 pl-[5px]" />
              customer experiences.
              
            </p>
            {/* <button className="btn font-roboto h-auto  font-[400] bg-green-btn">
              Explore Our Portfolio
            </button> */}
          </div>
          <div className="lg:w-1/2 lg:py-[11px] lg:pr-[11px] md:p-[11px]  w-full lg:order-last order-first xl:h-auto md:h-[-webkit-fill-available] h-auto">
            <Image
              src={ShopifyClientImage2}
              alt="Team working together"
              width={1200}
              height={900}
              className="md:rounded-[40px] rounded-[20px] w-full xl:h-auto md:h-[100%] h-auto object-contain object-center md:object-cover md:object-[30%] xl:object-contain xl:object-center"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4  ">
        {/* <div className="flex flex-col lg:flex-row items-center gap-12 md:md:rounded-[40px] md:p-8 px-4 pt-4 pb-12 bg-primary-mint md:text-left text-center "> */}
        <div className="flex flex-col lg:flex-row items-center md:gap-0 gap-12 md:rounded-[40px] rounded-[20px] bg-primary-mint md:text-left text-center pt-[20px] px-[20px] pb-[40px] md:p-0 ">
          <div className="lg:w-1/2 w-full xl:px-[55px] md:pl-[40px] md:pr-[20px] md:pt-[30px] md:pb-[40px]">
            {/* <div className="xl:mb-[20px] mb-[10px]">
              <Image
                src={isMobile ? ShopifyImageMobile : ShopifyImage}
                alt="Team working together"
                width={isMobile ? 230 : 266}
                height={53}
                className="shopifyX-image object-contain object-center md:object-cover md:object-[30%] xl:object-contain xl:object-center"
              />
            </div> */}
            <h2 className=" font-source md:font-[600] font-[700] text-title title mb-6 md:leading-[45px] leading-[normal] text-accent-green">
              {/* <span className="text-accent-green">200+</span> Shopify Stores
              <br />& <span className="text-accent-green">50+</span> Shopify Plus Stores */}
              Transforming Businesses
              <br />
              with AI and Automation
            </h2>
            {/* <p className="text-[16px] leading-[26px] text-title md:leading-relaxed mb-8"> */}
            <p className="text-[16px] leading-[26px] md:p-0 px-[10px] text-title md:leading-relaxed">
              {/* We have helped 100+ brands grow from scratch to $1M GMV.
              <span className="md:block inline md:pl-0 pl-[5px]" />
              At Bitpastel, we build differentiated, fast, and scalable online
              <span className="md:block inline md:pl-0 pl-[5px]" />
              stores to help you provide the best customer experience! */}
              We build AI-powered solutions that help transform businesses
               <span className="md:block inline md:pl-0 pl-[5px]" />
               through intelligent
              automation, predictive insights, and human-
               <span className="md:block inline md:pl-0 pl-[5px]" />
              centric design - boosting efficiency,
              fueling innovation, and 
               <span className="md:block inline md:pl-0 pl-[5px]" />
              enabling smarter decisions at scale.
            </p>
            {/* <button className="btn font-roboto h-auto  font-[400] bg-green-btn">
              Explore Our Portfolio
            </button> */}
          </div>
          <div className="lg:w-1/2 lg:py-[11px] lg:pr-[11px] md:p-[11px]  w-full lg:order-last order-first xl:h-auto md:h-[-webkit-fill-available] h-auto">
            <Image
              src={ShopifyClientImage3}
              alt="Team working together"
              width={1200}
              height={800}
              className="md:rounded-[40px] rounded-[20px] w-full xl:h-auto md:h-[100%] h-auto object-contain object-center md:object-cover md:object-[30%] xl:object-contain xl:object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShopifyStoreSection;
