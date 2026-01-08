'use client';
import React, { useEffect, useState } from 'react';
// import 'aos/dist/aos.css';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  testimonialDesk: string;
  testimonialMob: string;
  rightSideTestimonial?: string;
  rightSideTestimonialMob?: string;
}

const NewTeamtestimonial = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Shovan",
      image: "/images/Testimonial Section/Images/Shovan.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Shovan Kar/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Shovan Kar/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Shovan Kar/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Shovan Kar/right.png"
    },
    {
      id: 2,
      name: "Suman",
      image: "/images/Testimonial Section/Images/Suman.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Suman Naskar/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Suman Naskar/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Suman Naskar/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Suman Naskar/right.png"
    },
    {
      id: 3,
      name: "Ibrahim",
      image: "/images/Testimonial Section/Images/Ibrahim.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Md Ibrahim/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Md Ibrahim/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Md Ibrahim/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Md Ibrahim/right.png"
    },
    {
      id: 4,
      name: "Sneha",
      image: "/images/Testimonial Section/Images/sneha.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/sneha mondal/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/sneha mondal/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/sneha mondal/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/sneha mondal/right.png"
    },
    {
      id: 5,
      name: "Sourav",
      image: "/images/Testimonial Section/Images/Sourav.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Sourav Saha/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Sourav Saha/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Sourav Saha/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Sourav Saha/right.png"
    },
    {
      id: 6,
      name: "Aditi",
      image: "/images/Testimonial Section/Images/Aditi.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Aditi sau/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Aditi sau/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Aditi sau/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Aditi sau/right.png"
    },
    {
      id: 7,
      name: "Mousumi",
      image: "/images/Testimonial Section/Images/Mousumi.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Mousumi sengupta/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Mousumi sengupta/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Mousumi sengupta/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Mousumi sengupta/right.png"
    },
    {
      id: 8,
      name: "Bony",
      image: "/images/Testimonial Section/Images/Bony.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/bony malakar/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/bony malakar/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/bony malakar/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/bony malakar/right.png"
    },
  ];

  const getRandomIndices = (): number[] => {
    const indices: number[] = [];
    while (indices.length < 3) {
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  const [currentIndices, setCurrentIndices] = useState<number[] | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setCurrentIndices(getRandomIndices());
  }, []);

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        offset: 120,
        delay: 0
      });
    };
    initAOS();
  }, []);

  useEffect(() => {
    if (!currentIndices) return;

    const interval = setInterval(() => {
      setCurrentIndices(getRandomIndices());
      setAnimationKey(prev => prev + 1);
    }, 9000);

    return () => clearInterval(interval);
  }, [currentIndices]);

  const currentStrip1 = currentIndices ? testimonials[currentIndices[0]] : null;
  const currentStrip2 = currentIndices ? testimonials[currentIndices[1]] : null;
  const currentStrip3 = currentIndices ? testimonials[currentIndices[2]] : null;

  if (!currentStrip1 || !currentStrip2 || !currentStrip3) {
    return null;
  }

  return (
    <section className="relative overflow-hidden" key={animationKey}>
      <div className="team-first-banner mx-auto">
        
        <div className="first relative">
          <img
            alt={`${currentStrip1.name}'s image`}
            className="testi-image"
            src={currentStrip1.image}
            data-aos="animated-up"
            data-aos-duration="600"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            alt={`${currentStrip1.name}'s Testimonial`}
            className="testi-data desk-team"
            src={currentStrip1.testimonialDesk}
            data-aos="animated-left"
            data-aos-duration="600"
            data-aos-anchor=".first .testi-image"
          />
          <img
            alt={`${currentStrip1.name}'s Testimonial`}
            className="testi-data mob-team"
            src={currentStrip1.testimonialMob}
            data-aos="animated-left"
            data-aos-duration="600"
            data-aos-anchor=".first .testi-image"
          />
        </div>

        
        <div className="second relative">
          <img
            alt={`${currentStrip2.name}'s image`}
            className="testi-image"
            src={currentStrip2.image}
            data-aos="animated-up"
            data-aos-duration="600"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            alt={`${currentStrip2.name}'s Testimonial`}
            className="testi-data desk-team"
            src={currentStrip2.rightSideTestimonial}
            data-aos="animated-right"
            data-aos-duration="600"
            data-aos-anchor=".second .testi-image"
          />
          <img
            alt={`${currentStrip2.name}'s Testimonial`}
            className="testi-data mob-team"
            src={currentStrip2.rightSideTestimonialMob}
            data-aos="animated-right"
            data-aos-duration="600"
            data-aos-anchor=".second .testi-image"
          />
        </div>

       
        <div className="third relative">
          <img
            alt={`${currentStrip3.name}'s image`}
            className="testi-image"
            src={currentStrip3.image}
            data-aos="animated-up"
            data-aos-duration="600"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            alt={`${currentStrip3.name}'s Testimonial`}
            className="testi-data desk-team"
            src={currentStrip3.testimonialDesk}
            data-aos="animated-left"
            data-aos-duration="600"
            data-aos-anchor=".third .testi-image"
          />
          <img
            alt={`${currentStrip3.name}'s Testimonial`}
            className="testi-data mob-team"
            src={currentStrip3.testimonialMob}
            data-aos="animated-left"
            data-aos-duration="600"
            data-aos-anchor=".third .testi-image"
          />
        </div>

      </div>
    </section>
  );
};

export default NewTeamtestimonial;