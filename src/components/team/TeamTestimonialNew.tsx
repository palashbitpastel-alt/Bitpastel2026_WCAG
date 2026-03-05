'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SnowfallAnimation from '@/components/SnowfallAnimation';

import ShovanImg from '../../../public/images/Testimonial Section/Images/Shovan.webp';
import SumanImg from '../../../public/images/Testimonial Section/Images/Suman.webp';
import IbrahimImg from '../../../public/images/Testimonial Section/Images/Ibrahim.webp';
import SnehaImg from '../../../public/images/Testimonial Section/Images/sneha.webp';
import AditiImg from '../../../public/images/Testimonial Section/Images/Aditi.webp';
import MousumiImg from '../../../public/images/Testimonial Section/Images/Mousumi.webp';
import BonyImg from '../../../public/images/Testimonial Section/Images/Bony.webp';

interface Testimonial {
  id: number;
  name: string;
  image: StaticImageData;
  testimonialDesk: string;
  testimonialMob: string;
  rightSideTestimonial?: string;
  rightSideTestimonialMob?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Shovan',
    image: ShovanImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/Shovan Kar/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/Shovan Kar/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/Shovan Kar/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/Shovan Kar/right.webp',
  },
  {
    id: 2,
    name: 'Suman',
    image: SumanImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/Suman Naskar/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/Suman Naskar/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/Suman Naskar/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/Suman Naskar/right.webp',
  },
  {
    id: 3,
    name: 'Ibrahim',
    image: IbrahimImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/Md Ibrahim/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/Md Ibrahim/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/Md Ibrahim/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/Md Ibrahim/right.webp',
  },
  {
    id: 4,
    name: 'Sneha',
    image: SnehaImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/sneha mondal/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/sneha mondal/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/sneha mondal/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/sneha mondal/right.webp',
  },
  {
    id: 5,
    name: 'Aditi',
    image: AditiImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/Aditi sau/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/Aditi sau/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/Aditi sau/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/Aditi sau/right.webp',
  },
  {
    id: 6,
    name: 'Mousumi',
    image: MousumiImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/Mousumi sengupta/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/Mousumi sengupta/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/Mousumi sengupta/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/Mousumi sengupta/right.webp',
  },
  {
    id: 7,
    name: 'Bony',
    image: BonyImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/bony malakar/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/bony malakar/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/bony malakar/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/bony malakar/right.webp',
  },
];

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const fadeUp = {
  hidden: { opacity: 0, y: isMobile ? 20 : 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: isMobile ? 0.4 : 0.6 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: isMobile ? -20 : -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: isMobile ? 0.4 : 0.6, delay: 0.12 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: isMobile ? 20 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: isMobile ? 0.4 : 0.6, delay: 0.12 },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const TeamTestimonialNew = () => {
  const getRandomIndices = () => {
    const indices: number[] = [];
    while (indices.length < 3) {
      const rand = Math.floor(Math.random() * testimonials.length);
      if (!indices.includes(rand)) indices.push(rand);
    }
    return indices;
  };

  const [currentIndices, setCurrentIndices] = useState<number[]>(getRandomIndices());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices(getRandomIndices());
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const [t1, t2, t3] = currentIndices.map(i => testimonials[i]);

  return (
    <section className="md:pt-0 pt-[40px]">
      {/* <SnowfallAnimation /> */}

      {/* FIRST */}
      <AnimatePresence>
      <motion.div
        key={t1.id}
        className="testimonial testimonial-first"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp}>
          <Image
            src={t1.image}
            alt={t1.name}
            className="testimonial-person-image"
          />
        </motion.div>

        <motion.img
          src={t1.testimonialDesk}
          alt={t1.name}
          className="testimonial-data md:block hidden"
          variants={fadeRight}
        />

        <motion.img
          src={t1.testimonialMob}
          alt={t1.name}
          className="testimonial-data md:hidden block"
          variants={fadeRight}
        />
      </motion.div>
      </AnimatePresence>

      {/* SECOND */}
      <AnimatePresence>
      <motion.div
        key={t2.id}
        className="testimonial testimonial-second"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          src={t2.image.src}
          alt={t2.name}
          className="testimonial-person-image"
          variants={fadeUp}
        />

        <motion.img
          src={t2.rightSideTestimonial}
          alt={t2.name}
          className="testimonial-data md:block hidden"
          variants={fadeLeft}
        />

        <motion.img
          src={t2.rightSideTestimonialMob}
          alt={t2.name}
          className="testimonial-data md:hidden block"
          variants={fadeLeft}
        />
      </motion.div>
      </AnimatePresence>
      
      {/* THIRD */}
      <AnimatePresence>
      {/* THIRD */}
      <motion.div
        key={t3.id}
        className="testimonial testimonial-third"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          src={t3.image.src}
          alt={t3.name}
          className="testimonial-person-image"
          variants={fadeUp}
        />

        <motion.img
          src={t3.testimonialDesk}
          alt={t3.name}
          className="testimonial-data md:block hidden"
          variants={fadeRight}
        />

        <motion.img
          src={t3.testimonialMob}
          alt={t3.name}
          className="testimonial-data md:hidden block"
          variants={fadeRight}
        />
      </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TeamTestimonialNew;
