'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Profileimg1 from '../../../public/images/Reece_W.jpg';
import Profileimg2 from '../../../public/images/cameron_01.jpg';
import Profileimg3 from '../../../public/images/Honey_P.jpg';
import Profileimg4 from '../../../public/images/Paul_R_T.jpg';
import Profileimg5 from '../../../public/images/david.jpg';
import Profileimg6 from '../../../public/images/Josiah_Y.jpg';
import Profileimg7 from '../../../public/images/Doug_A.jpg';
import Profileimg8 from '../../../public/images/Anthony.jpg';
import Profileimg9 from '../../../public/images/Brandon_P.jpg';
import Profileimg10 from '../../../public/images/Dan_M.jpg';
import Profileimg11 from '../../../public/images/Charles_F.jpg';
import Profileimg12 from '../../../public/images/Alf_B.jpeg';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  message: string;
  image: any;
  bgColor: string;
}


interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const orderedTestimonials: Testimonial[] = [
   // 8. Dan Miller
  {
    id: '10',
    name: 'Dan Miller',
    title: 'CEO, Young Professionals, UK',
    message:
      "We have worked with Bitpastel now for over 2 years and we've been really happy with the level of service and development work we have had done. They now manage all of our technology needs on an ongoing basis and nothing ever seems to be an issue with our requirements. Work is completed on time and to the highest quality that meets our expectations.",
    image: '/images/Dan_M.jpg',
    bgColor: 'bg-[#D8F5E9]',
  },
  // 1. Reece Wabara
  {
    id: '1',
    name: 'Reece Wabara',
    title: 'CEO, Maniére De Voir, UK | Forbes 30 Under 30',
    message:
      "Ayan and his team are superstars, they interpret suggestions well and propose even better and more efficient alternatives, the team's work is to a very high standard and turn around time is much faster than a UK equivalent",
    image: Profileimg1,
    bgColor: 'bg-[#CEEEF6]',
  },
  // 2. Paul R. Turner
  {
    id: '4',
    name: 'Paul R. Turner',
    title: 'International Director & Co-founder, Food for Life Global, USA',
    message:
      'Ayan and his team were excellent to work with. He was a great communicator, took the time to understand my needs and always delivered as promised. I will hire him again in the future.',
    image: '/images/Paul_R_T.jpg',
    bgColor: 'bg-[#FCF4D7]',
  },
  // 3. Cameron Sangster
  {
    id: '2',
    name: 'Cameron Sangster',
    title: 'Director, RareBoots4U, UK',
    message:
      'As soon as I came into contact with Ayan and his Bitpastel team, I felt in safe hands. What impressed me most is Ayan’s level of communication. In the past I have experienced slow turnaround times and lack of communication but with Ayan and his team I genuinely felt like I was their only client and the attention to detail is impeccable. I highly recommend them',
    image: '/images/cameron_01.jpg',
    bgColor: 'bg-[#FDE3E5]',
  },
  // 4. David Jones
  {
    id: '5',
    name: 'David Jones',
    title: 'Marketing Manager, Jax Brands, Canada',
    message:
      "Ayan and the Bitpastel team are a reliable and dedicated group. Whenever I reach out to the team about back-end or front-end tasks that need to be completed, they're not only quick to respond but I can rely on their turnaround time. Since partnering with them, my mind has been at ease knowing that they will get the job done so that I can focus on other tasks. It has been a pleasure working with them!",
    image: '/images/david.jpg',
    bgColor: 'bg-[#D8F5E9]',
  },
  // 5. Honey Patel
  {
    id: '3',
    name: 'Honey Patel',
    title: 'Business Strategy & Operations Leader, USA',
    message:
      'Bitpastel has been a delight to work with! They take the time to truly understand the requirements and provide expert opinion on design, development, and implementation. The team is also very detail oriented and communicate extremely well. Everything is timely, effective, and well done. I keep going back to them to build new things because there is no one else I would rather work with.',
    image: '/images/Honey_P.jpg',
    bgColor: 'bg-[#CEEEF6]',
  },
  // 6. Josiah M. Young
  {
    id: '6',
    name: 'Josiah M. Young, Esq.',
    title: 'Managing Shareholder, The Law Office of Josiah Young, USA',
    message:
      'Ayan and his team were very helpful, responsive and knowledgeable. This contract has been completed but I will continue to work with Ayan. I would recommend his services to anyone looking to build a website or improve their online presence. The design was very clean. Ayan was also a pleasure to work with and made the process of completing this task much easier.',
    image: '/images/Josiah_Y.jpg',
    bgColor: 'bg-[#FCF4D7]',
  },
  // 7. Doug Anderson
  {
    id: '7',
    name: 'Doug Anderson',
    title: 'President, Blue Fence Real Estate, USA',
    message:
      'The entire team did a great job and will definitely hire again for future projects. They delivered exactly what they promised on time and on budget. The attention to detail was perfect as was the constant communication. We are happy we finally found a great team to work with',
    image: '/images/Doug_A.jpg',
    bgColor: 'bg-[#FDE3E5]',
  },
 
  // 9. Anthony Deketelaere
  {
    id: '8',
    name: 'Anthony Deketelaere',
    title: 'Founder, YesMLS, Belgium',
    message:
      "The people at Bitpastel are professionals, the SRS (Software Requirement Specification) that the team is working on is the exact translation of my insights and idea's about the app. Bitpastel gives me the guarantee that the app will be all I wanted it to be, and more... I highly recommend them for your next project",
    image: '/images/Anthony.jpg',
    bgColor: 'bg-[#CEEEF6]',
  },
  // 10. Charles Fried
  {
    id: '11',
    name: 'Charles Fried',
    title: 'CTO & Co-Founder, BlockSmith Capital Ltd, UK',
    message:
      'Ayan is a sharp individual and showed a very good ability to quickly understand our brief and get his team to deliver according to our specification. I recommend',
    image: '/images/Charles_F.jpg',
    bgColor: 'bg-[#FCF4D7]',
  },
  // 11. Brandon Philbrick
  {
    id: '9',
    name: 'Brandon Philbrick',
    title: 'Brand Manager & Designer, USA',
    message:
      'Bitpastel has been doing custom HubSpot COS development for us and our expectations have been consistently exceeded. There is always a great turnaround on project requests and they are available for talking through upcoming work and ready to take on new challenges.',
    image: '/images/Brandon_P.jpg',
    bgColor: 'bg-[#FDE3E5]',
  },
  // 12. Alf Bergin
  {
    id: '12',
    name: 'Alf Bergin',
    title: 'CEO, Svart på Kvitt SA, Norway',
    message:
      'Bitpastel is an ambitious design & development team. They take good care of the client and have a professional attitude. What I really appreciate is that work is done quickly and without delays which is very important for a long-term business relationship. I really like their way to communicate',
    image: '/images/Alf_B.jpeg',
    bgColor: 'bg-[#D8F5E9]',
  },
];

const defaultTestimonials: Testimonial[] = [
  
  {
    id: '1',
    name: 'Dan Miller',
    title: 'CEO, Young Professionals, UK',
    message:
      "We have worked with Bitpastel now for over 2 years and we've been really happy with the level of service and development work we have had done. They now manage all of our technology needs on an ongoing basis and nothing ever seems to be an issue with our requirements. Work is completed on time and to the highest quality that meets our expectations.",
    image: Profileimg10,
    bgColor: 'bg-[#D8F5E9]',
  },
  {
    id: '2',
    name: 'Cameron Sangster',
    title: 'Director, RareBoots4U, UK',
    message:
      'As soon as I came into contact with Ayan and his Bitpastel team, I felt in safe hands. What impressed me most is Ayan’s level of communication. In the past I have experienced slow turnaround times and lack of communication but with Ayan and his team I genuinely felt like I was their only client and the attention to detail is impeccable. I highly recommend them',
    image: Profileimg2,
    bgColor: 'bg-[#FDE3E5]',
  },
  {
    id: '3',
    name: 'Honey Patel',
    title: 'Business Strategy & Operations Leader, USA',
    message:
      'Bitpastel has been a delight to work with! They take the time to truly understand the requirements and provide expert opinion on design, development, and implementation. The team is also very detail oriented and communicate extremely well. Everything is timely, effective, and well done. I keep going back to them to build new things because there is no one else I would rather work with.',
    image: Profileimg3,
    bgColor: 'bg-[#CEEEF6]',
  },
   {
    id: '10',
    name: 'Reece Wabara',
    title: 'CEO, Maniére De Voir, UK | Forbes 30 Under 30',
    message:
      "Ayan and his team are superstars, they interpret suggestions well and propose even better and more efficient alternatives, the team's work is to a very high standard and turn around time is much faster than a UK equivalent",
    image: Profileimg1,
    bgColor: 'bg-[#CEEEF6]',
  },
  {
    id: '4',
    name: 'Paul R. Turner',
    title: 'International Director & Co-founder, Food for Life Global, USA',
    message:
      'Ayan and his team were excellent to work with. He was a great communicator, took the time to understand my needs and always delivered as promised. I will hire him again in the future.',
    image: Profileimg4,
    bgColor: 'bg-[#FCF4D7]',
  },
  {
    id: '5',
    name: 'David Jones',
    title: 'Marketing Manager, Jax Brands, Canada',
    message:
      "Ayan and the Bitpastel team are a reliable and dedicated group. Whenever I reach out to the team about back-end or front-end tasks that need to be completed, they're not only quick to respond but I can rely on their turnaround time. Since partnering with them, my mind has been at ease knowing that they will get the job done so that I can focus on other tasks. It has been a pleasure working with them!",
    image: Profileimg5,
    bgColor: 'bg-[#D8F5E9]',
  },
  {
    id: '6',
    name: 'Josiah M. Young, Esq.',
    title: 'Managing Shareholder, The Law Office of Josiah Young, USA',
    message:
      'Ayan and his team were very helpful, responsive and knowledgeable. This contract has been completed but I will continue to work with Ayan. I would recommend his services to anyone looking to build a website or improve their online presence. The design was very clean. Ayan was also a pleasure to work with and made the process of completing this task much easier.',
    image: Profileimg6,
    bgColor: 'bg-[#FCF4D7]',
  },
  {
    id: '7',
    name: 'Doug Anderson',
    title: 'President, Blue Fence Real Estate, USA',
    message:
      'The entire team did a great job and will definitely hire again for future projects. They delivered exactly what they promised on time and on budget. The attention to detail was perfect as was the constant communication. We are happy we finally found a great team to work with',
    image: Profileimg7,
    bgColor: 'bg-[#FDE3E5]',
  },
  {
    id: '8',
    name: 'Anthony Deketelaere',
    title: 'Founder, YesMLS, Belgium',
    message:
      "The people at Bitpastel are professionals, the SRS (Software Requirement Specification) that the team is working on is the exact translation of my insights and idea's about the app. Bitpastel gives me the guarantee that the app will be all I wanted it to be, and more... I highly recommend them for your next project",
    image: Profileimg8,
    bgColor: 'bg-[#CEEEF6]',
  },
  {
    id: '9',
    name: 'Brandon Philbrick',
    title: 'Brand Manager & Designer, USA',
    message:
      'Bitpastel has been doing custom HubSpot COS development for us and our expectations have been consistently exceeded. There is always a great turnaround on project requests and they are available for talking through upcoming work and ready to take on new challenges.',
    image: Profileimg9,
    bgColor: 'bg-[#FDE3E5]',
  },
 
  {
    id: '11',
    name: 'Charles Fried',
    title: 'CTO & Co-Founder, BlockSmith Capital Ltd, UK',
    message:
      'Ayan is a sharp individual and showed a very good ability to quickly understand our brief and get his team to deliver according to our specification. I recommend',
    image: Profileimg11,
    bgColor: 'bg-[#FCF4D7]',
  },
  {
    id: '12',
    name: 'Alf Bergin',
    title: 'CEO, Svart på Kvitt SA, Norway',
    message:
      'Bitpastel is an ambitious design & development team. They take good care of the client and have a professional attitude. What I really appreciate is that work is done quickly and without delays which is very important for a long-term business relationship. I really like their way to communicate',
    image: Profileimg12,
    bgColor: 'bg-[#D8F5E9]',
  },
];
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = defaultTestimonials,
}) => {
  const mobileBgColors = ['bg-[#CEEEF6]', 'bg-[#FCF4D7]', 'bg-[#FDE3E5]', 'bg-[#CEEEF6]'];
  const mobileTestimonials = orderedTestimonials.map((t, i) => ({
    ...t,
    bgColor: t.bgColor || mobileBgColors[i % mobileBgColors.length],
  }));

  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [initialCount, setInitialCount] = useState(6);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [closingCards, setClosingCards] = useState<Set<string>>(new Set());
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentTestimonials = isMobile ? mobileTestimonials : testimonials;
  const initialTestimonials = currentTestimonials.slice(0, initialCount);
  const extraTestimonials = currentTestimonials.slice(initialCount);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setInitialCount(window.innerWidth < 768 ? 3 : 6);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setClosingCards((prev) => {
      const next = new Set(prev);
      if (hoveredCard && hoveredCard !== id) {
        next.add(hoveredCard);
      }
      next.delete(id);
      return next;
    });
    setHoveredCard(id);
  };

  const handleMouseLeave = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setClosingCards((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setHoveredCard(null);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const renderTestimonialCard = (testimonial: Testimonial) => (
    <div
      key={testimonial.id}
      className={`${testimonial.bgColor} break-inside-avoid overflow-hidden md:rounded-[20px] ${
        !isMobile ? 'testimonial-card-parent' : ''
      } rounded-[10px] md:px-12 px-6 py-6 text-[rgba(33,37,41,1)] flex flex-col ${
        hoveredCard === testimonial.id ? 'open' : ''
      } ${closingCards.has(testimonial.id) ? 'closing' : ''}`}
      onMouseEnter={() => handleMouseEnter(testimonial.id)}
      onMouseLeave={() => handleMouseLeave(testimonial.id)}
    >
      <div className="flex-grow">
        <div className={`${!isMobile ? 'testimonial-card-content min-h-[70px]' : ''}`}>
          <p
            className={`${!isMobile ? 'clamp-3' : ''} ${isMobile ? 'text-[12px]' : 'text-[13px] leading-[23px]'}`}
            onTransitionEnd={(e) => {
              if (e.propertyName === 'max-height' && closingCards.has(testimonial.id)) {
                setClosingCards((prev) => {
                  const next = new Set(prev);
                  next.delete(testimonial.id);
                  return next;
                });
              }
            }}
          >
            "{testimonial.message}"
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-transparent md:min-h-[80px]">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={56}
          height={56}
          className="rounded-full object-cover md:h-[56px] md:w-[56px] w-[40px] h-[40px]"
        />
        <div>
          <h4 className={`font-[600] ${isMobile ? 'text-[12px]' : 'paragraph'} font-source`}>
            {testimonial.name}
          </h4>
          <p className={`font-roboto italic ${isMobile ? 'text-[12px]' : 'text-[13px]'}`}>
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="stories" className="md:pt-[90px] pt-[55px]">
      <div className="container mx-auto px-4">
        <h2 className="font-source md:font-[600] font-[700] text-center text-title title md:mb-8 mb-3">
          Stories
        </h2>

        <div className={`columns-1 md:columns-2 desktop-testimonials gap-8 md:space-y-8 space-y-6 mx-auto w-full text-title ${showMore ? 'mb-4' : 'mb-0'}`}>
          {initialTestimonials.map(renderTestimonialCard)}
        </div>

        {showMore && (
          <div className={`columns-1 md:columns-2 gap-8 md:space-y-8 space-y-6 mt-6 mx-auto w-full text-title `}>
            {extraTestimonials.map(renderTestimonialCard)}
          </div>
        )}

        {extraTestimonials.length > 0 && !showMore && (
          <div className="flex justify-center md:mt-8 mt-7 space-x-4">
            <button
              onClick={() => setShowMore(true)}
              className="new-btn-design-full"
            >
              <span>Explore more stories</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
