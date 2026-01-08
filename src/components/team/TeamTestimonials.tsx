import React from 'react';
import Image from 'next/image';
const TeamTestimonials = () => {
  return (
    <section className="md:pt-0 pt-14">
      <div className="bg-[rgba(85,184,208,1)]">
        <div className="container px-4 mx-auto">
          <div className="flex items-center md:flex-row flex-col ">
            <Image
              src="/images/ibrahim_sir_image.png"
              alt="Ibrahim's Testimonial"
              className=""
              width={307}
              height={307}
            />
            <div className="massage-arapper max-w-[735px] mx-auto text-primary-white md:p-0 p-6 md:text-left text-center">
              <p className="mb-10">
                “At Bitpastel, I’ve grown through meaningful challenges as a Backend Engineer and
                Team Lead. I build systems, lead teams, and value our open, supportive culture
                focused on great products.”
              </p>
              <p>Shovan Kar</p>
              <p>Senior Manager</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(240,198,56,1)]">
        <div className="container px-4 mx-auto">
          <div className="flex items-center md:flex-row flex-col">
            <div className="massage-arapper max-w-[735px] md:p-0 p-6 md:text-left text-center">
              <p className="mb-10">
                “At Bitpastel, I’ve grown through meaningful challenges as a Backend Engineer and
                Team Lead. The hybrid model is flexible, the team is supportive, and the culture
                encourages learning and building great products. A great experience overall.”
              </p>
              <p>Shovan Kar</p>
              <p>Senior Manager</p>
            </div>
            <Image
              src="/images/ibrahim_sir_image.png"
              alt="Ibrahim's Testimonial"
              className="md:ml-auto md:order-last order-first"
              width={307}
              height={307}
            />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(62,203,144,1)]">
        <div className="container px-4 mx-auto">
          <div className="flex items-center md:flex-row flex-col">
            <Image
              src="/images/ibrahim_sir_image.png"
              alt="Ibrahim's Testimonial"
              className=""
              width={307}
              height={307}
            />
            <div className="massage-arapper max-w-[735px] mx-auto text-primary-white md:p-0 p-6 md:text-left text-center">
              <p className="mb-10">
                “At Bitpastel, I’ve grown through meaningful challenges as a Backend Engineer and
                Team Lead. I build systems, lead teams, and value our open, supportive culture
                focused on great products.”
              </p>
              <p>Shovan Kar</p>
              <p>Senior Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamTestimonials;
