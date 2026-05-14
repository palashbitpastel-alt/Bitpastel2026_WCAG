'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const benefits = [
  'Built for Speed and Performance',
  'Flexible & Modern Design System',
  'Optimized for Mobile-first Shopping',
  "Powered by Shopify's Latest Architecture",
  'AI-Ready Commerce Foundation',
];

const HorizonBanner: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, margin: '-50px' });

  return (
    <section className="relative overflow-hidden bg-[#05111d] pt-[100px] pb-[90px]">
      {/* Animation keyframes — 5-state Figma keyframe cycle (default → variant4a → variant3 → variant4b → variant5).
          Matches Figma Interaction prototype: 2500ms ease-out smart-animate per transition, 1ms delay between
          (= continuous chain). 5 transitions × 2.5s = 12.5s total cycle. Ease-out per segment via animation-timing-function. */}
      <style>{`
        @keyframes horizon-vmarquee {
          0%, 8%   { transform: translate3d(0, 0%, 0);   animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          20%, 28% { transform: translate3d(0, -10%, 0); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          40%, 48% { transform: translate3d(0, -20%, 0); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          60%, 68% { transform: translate3d(0, -30%, 0); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          80%, 88% { transform: translate3d(0, -40%, 0); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          100%     { transform: translate3d(0, -50%, 0); }
        }
        @keyframes horizon-glow-a {
          0%,   8%  { left: -9.59%; top: 55.66%; width: 41.29%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          20%, 28%  { left:  7.39%; top: 57.22%; width: 47.14%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          40%, 48%  { left: 31.70%; top: 57.22%; width: 47.14%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          60%, 68%  { left: 31.70%; top: 33.81%; width: 47.14%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          80%, 88%  { left: -9.59%; top: 60.86%; width: 41.29%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          100%      { left: -9.59%; top: 55.66%; width: 41.29%; }
        }
        @keyframes horizon-glow-b {
          0%,   8%  { left: 27.09%; top: 72.95%; width: 38.07%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          20%, 28%  { left: 34.26%; top:  6.11%; width: 43.49%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          40%, 48%  { left: -1.68%; top: 20.68%; width: 43.49%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          60%, 68%  { left: -1.68%; top: 58.13%; width: 43.49%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          80%, 88%  { left: 27.09%; top: 78.15%; width: 38.07%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          100%      { left: 27.09%; top: 72.95%; width: 38.07%; }
        }
        @keyframes horizon-glow-c {
          0%,   8%  { left: 88.36%; top: 37.97%; width: 17.35%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          20%, 28%  { left: 80.31%; top: 16.51%; width: 26.35%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          40%, 48%  { left: 68.16%; top: 52.28%; width: 26.35%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          60%, 68%  { left: 61.13%; top:  7.80%; width: 32.43%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          80%, 88%  { left: 88.36%; top: 41.87%; width: 17.35%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          100%      { left: 88.36%; top: 37.97%; width: 17.35%; }
        }
        @keyframes horizon-glow-d {
          0%,   8%  { left: 72.62%; top: 77.89%; width: 24.38%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          20%, 28%  { left: 74.23%; top: 45.25%; width: 35.87%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          40%, 48%  { left: 74.23%; top:  6.11%; width: 35.87%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          60%, 68%  { left: 77.60%; top: 39.53%; width: 35.87%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          80%, 88%  { left: 72.62%; top: 81.79%; width: 24.38%; animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          100%      { left: 72.62%; top: 77.89%; width: 24.38%; }
        }
      `}</style>

      {/* Layer 1 — Four solid-fill blurred circles cycling through 5 Figma keyframes (Figma exact spec) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Glow A — #00D5BE, blur 105.9px, base 564px */}
        <div
          className="pointer-events-none absolute will-change-[left,top,width] motion-safe:[animation:horizon-glow-a_20s_linear_infinite]"
          style={{
            left: '-9.59%',
            top: '55.66%',
            width: '41.29%',
            aspectRatio: '1 / 1',
            background: '#00D5BE',
            filter: 'blur(183.2px)',
            opacity: 0.66,
            borderRadius: '50%',
          }}
        />
        {/* Glow B — #00E365, blur 105.9px, base 528px */}
        <div
          className="pointer-events-none absolute will-change-[left,top,width] motion-safe:[animation:horizon-glow-b_20s_linear_infinite]"
          style={{
            left: '27.09%',
            top: '72.95%',
            width: '38.07%',
            aspectRatio: '1 / 1',
            background: '#00E365',
            filter: 'blur(183.2px)',
            opacity:0.66,
            borderRadius: '50%',
          }}
        />
        {/* Glow C — #00E365, blur 91.6px, base 237px */}
        <div
          className="pointer-events-none absolute will-change-[left,top,width] motion-safe:[animation:horizon-glow-c_20s_linear_infinite]"
          style={{
            left: '88.36%',
            top: '37.97%',
            width: '17.35%',
            aspectRatio: '1 / 1',
            background: '#00E365',
            filter: 'blur(183.2px)',
            opacity:0.66,
            borderRadius: '50%',
          }}
        />
        {/* Glow D — #02C8B7, blur 91.6px, base 333px */}
        <div
          className="pointer-events-none absolute will-change-[left,top,width] motion-safe:[animation:horizon-glow-d_20s_linear_infinite]"
          style={{
            left: '72.62%',
            top: '77.89%',
            width: '24.38%',
            aspectRatio: '1 / 1',
            background: '#02C8B7',
            filter: 'blur(183.2px)',
            opacity: 0.66,
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Layer 2 — Vertical column-grid "glass curtain" (stronger, 83px stripe to match Figma) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(217,217,217,0.20) 0%, rgba(0,0,0,0.33) 23.077%, rgba(217,217,217,0) 100%)',
          backgroundSize: '83px 100%',
          backgroundRepeat: 'repeat-x',
          mixBlendMode: 'overlay',
          opacity: 0.80,
        }}
      />
      {/* Layer 2b — Vertical fade mask so the columns read as soft glass blades top→bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,17,29,0) 0%, rgba(5,17,29,0) 35%, rgba(5,17,29,0.55) 100%)',
            opacity: 0.33,
        }}
      />

      {/* Layer 3 — Centered emblem + headline + subhead */}
      <div className="container relative z-10 mx-auto px-4 max-w-[1206px]">
        <div ref={headingRef} className="flex flex-col items-center text-center">
          {/* Chrome script-lettering "Horizons" emblem (Rectangle 52 from Figma) */}
          <motion.div
            className="relative z-10 flex justify-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            style={{marginLeft: '85px'}}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/shopify/horizon-banner/horizons-emblem.png"
              alt="Horizons"
              className="w-[280px] md:w-[420px] lg:w-[562px] h-auto select-none pointer-events-none"
              draggable={false}
            />
          </motion.div>

          <motion.h2
            className="mt-2 md:mt-4 font-source font-bold text-[30px] md:text-[45px] leading-[1.2] md:leading-[55px] tracking-[-1.35px] text-[#FFF]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Introducing Horizon for Shopify
          </motion.h2>

          <motion.p
            className="mt-[24px] font-roboto font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-[#FFF] max-w-[934px]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Horizon represents the next evolution of Shopify themes-built for performance, flexibility, and modern e-commerce experiences. Designed with a mobile-first approach and powered by Shopify’s latest capabilities, Horizon enables brands to create fast, scalable, and visually engaging storefronts without unnecessary complexity.
          </motion.p>
        </div>
      </div>

      {/* Layer 4 — Vertical bottom→top slide-up marquee, synced with the 30s spotlight keyframe cycle. */}
      <div
        aria-hidden="true"
        className="relative z-10 mt-[30px] md:mt-[30px] w-full max-w-[1303px] mx-auto h-[60px] md:h-[100px] overflow-hidden"
      >
        <div
          className="flex flex-col items-center motion-safe:[animation:horizon-vmarquee_20s_linear_infinite] motion-reduce:translate-y-0 will-change-transform"
        >
          {[0, 1].map((dup) => (
            <ul
              key={dup}
              className="flex flex-col items-center gap-[40px] md:gap-[85px] pb-[40px] md:pb-[85px] shrink-0"
            >
              {benefits.map((phrase, i) => (
                <li
                  key={`${dup}-${i}`}
                  className="font-source font-light text-[22px] sm:text-[32px] md:text-[80px] leading-[1.1] tracking-[-0.6px] md:tracking-[-2.4px] text-[#FFF] opacity-50 whitespace-nowrap text-center py-[6px] px-[10px]"
                >
                  {phrase}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizonBanner;
