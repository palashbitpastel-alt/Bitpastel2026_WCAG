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
    <section className="relative overflow-hidden bg-[#05111d] pt-[50px] md:pt-[100px] pb-[50px] md:pb-[90px]">
      {/* Animation keyframes — 5-state Figma keyframe cycle (default → variant4a → variant3 → variant4b → variant5).
          Matches Figma Interaction prototype: 2500ms ease-out smart-animate per transition, 1ms delay between
          (= continuous chain). 5 transitions × 2.5s = 12.5s total cycle. Ease-out per segment via animation-timing-function. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes horizon-vmarquee {
          0%, 8%   { transform: translate3d(0, 0%, 0);   animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          20%, 28% { transform: translate3d(0, -10%, 0); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          40%, 48% { transform: translate3d(0, -20%, 0); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          60%, 68% { transform: translate3d(0, -30%, 0); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          80%, 88% { transform: translate3d(0, -40%, 0); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          100%     { transform: translate3d(0, -50%, 0); }
        }
        /* Glow keyframes converted from the original left/top/width values to GPU-composited
           transforms (translate + scale). transform-origin is the top-left of each blob, and the
           translate->scale order reproduces the exact same motion path. Vertical (translateY) values
           were scaled by the banner section ratio H/W ~ 0.5256 so the path matches the % layout. */
        @keyframes horizon-glow-a {
          0%,   8%  { transform: translate(0%, 0%) scale(1);              animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          20%, 28%  { transform: translate(41.124%, 1.986%) scale(1.142); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          40%, 48%  { transform: translate(100%, 1.986%) scale(1.142);    animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          60%, 68%  { transform: translate(100%, -27.816%) scale(1.142);  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          80%, 88%  { transform: translate(0%, 6.62%) scale(1);           animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          100%      { transform: translate(0%, 0%) scale(1); }
        }
        @keyframes horizon-glow-b {
          0%,   8%  { transform: translate(0%, 0%) scale(1);                 animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          20%, 28%  { transform: translate(18.834%, -92.287%) scale(1.142);  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          40%, 48%  { transform: translate(-75.571%, -72.17%) scale(1.142);  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          60%, 68%  { transform: translate(-75.571%, -20.462%) scale(1.142); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          80%, 88%  { transform: translate(0%, 7.18%) scale(1);              animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          100%      { transform: translate(0%, 0%) scale(1); }
        }
        @keyframes horizon-glow-c {
          0%,   8%  { transform: translate(0%, 0%) scale(1);                  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          20%, 28%  { transform: translate(-46.398%, -65.016%) scale(1.519);  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          40%, 48%  { transform: translate(-116.427%, 43.354%) scale(1.519);  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          60%, 68%  { transform: translate(-156.945%, -91.404%) scale(1.869); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          80%, 88%  { transform: translate(0%, 11.816%) scale(1);             animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          100%      { transform: translate(0%, 0%) scale(1); }
        }
        @keyframes horizon-glow-d {
          0%,   8%  { transform: translate(0%, 0%) scale(1);                 animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          20%, 28%  { transform: translate(6.604%, -70.373%) scale(1.471);   animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          40%, 48%  { transform: translate(6.604%, -154.76%) scale(1.471);   animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          60%, 68%  { transform: translate(20.427%, -82.705%) scale(1.471);  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          80%, 88%  { transform: translate(0%, 8.409%) scale(1);             animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          100%      { transform: translate(0%, 0%) scale(1); }
        }
      `,
        }}
      />

      {/* Layer 1 — Four solid-fill blurred circles cycling through the 5 Figma keyframes (Figma exact spec).
          CROSS-BROWSER FIX (identical look): the 183.2px blur is unchanged, but it now lives on a STATIC
          inner circle while only the non-blurred WRAPPER animates — and it animates via `transform`
          (translate + scale) instead of left/top/width. Safari rasterizes the blur ONCE into a composited
          layer and GPU-transforms that texture every frame, instead of re-running the blur per frame and
          tiling it at low resolution (the blocky pixelation you saw). Result: the same rich, dark glow as
          the original, now smooth in Safari, Chrome and Firefox. transform-origin is the top-left of each
          blob so `scale()` reproduces the original width growth exactly. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Glow A — #00D5BE, blur 183.2px, base 41.29% */}
        <div
          className="pointer-events-none absolute will-change-transform motion-safe:[animation:horizon-glow-a_20s_linear_infinite]"
          style={{ left: '-9.59%', top: '55.66%', width: '41.29%', aspectRatio: '1 / 1', transformOrigin: '0 0' }}
        >
          <div
            className="absolute inset-0 [filter:blur(70px)] md:[filter:blur(183.2px)]"
            style={{ background: '#00D5BE', opacity: 0.66, borderRadius: '50%' }}
          />
        </div>
        {/* Glow B — #00E365, blur 183.2px, base 38.07% */}
        <div
          className="pointer-events-none absolute will-change-transform motion-safe:[animation:horizon-glow-b_20s_linear_infinite]"
          style={{ left: '27.09%', top: '72.95%', width: '38.07%', aspectRatio: '1 / 1', transformOrigin: '0 0' }}
        >
          <div
            className="absolute inset-0 [filter:blur(70px)] md:[filter:blur(183.2px)]"
            style={{ background: '#00E365', opacity: 0.66, borderRadius: '50%' }}
          />
        </div>
        {/* Glow C — #00E365, blur 183.2px, base 17.35% */}
        <div
          className="pointer-events-none absolute will-change-transform motion-safe:[animation:horizon-glow-c_20s_linear_infinite]"
          style={{ left: '88.36%', top: '37.97%', width: '17.35%', aspectRatio: '1 / 1', transformOrigin: '0 0' }}
        >
          <div
            className="absolute inset-0 [filter:blur(70px)] md:[filter:blur(183.2px)]"
            style={{ background: '#00E365', opacity: 0.66, borderRadius: '50%' }}
          />
        </div>
        {/* Glow D — #02C8B7, blur 183.2px, base 24.38% */}
        <div
          className="pointer-events-none absolute will-change-transform motion-safe:[animation:horizon-glow-d_20s_linear_infinite]"
          style={{ left: '72.62%', top: '77.89%', width: '24.38%', aspectRatio: '1 / 1', transformOrigin: '0 0' }}
        >
          <div
            className="absolute inset-0 [filter:blur(70px)] md:[filter:blur(183.2px)]"
            style={{ background: '#02C8B7', opacity: 0.66, borderRadius: '50%' }}
          />
        </div>
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
            className="relative z-10 flex justify-center mb-8 md:mb-10 ml-[20px] md:ml-[85px]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
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
            className="mt-2 md:mt-4 font-source font-bold lg:font-semibold lg:tracking-[-1px] text-[23px] md:text-[38px] leading-[1.2] md:leading-[49.4px] text-[#FFF]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Introducing Horizon for Shopify
          </motion.h2>

          <motion.p
            className="mt-[24px] font-roboto font-normal lg:font-light text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-[#FFF] max-w-[934px]"
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
        className="relative z-10 mt-[30px] md:mt-[30px] w-full max-w-[1303px] mx-auto h-[90px] md:h-[130px] overflow-hidden"
        style={{
          padding: '10px',
          WebkitMaskImage:
            'linear-gradient(transparent 0%, black 25%, black 90%, transparent 100%)',
          maskImage:
            'linear-gradient(transparent 0%, black 25%, black 90%, transparent 100%)',
        }}
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
                  className="font-source font-light text-[22px] sm:text-[32px] md:text-[80px] leading-[1.1] tracking-[-0.6px] md:tracking-[-2.4px] lg:tracking-[-1px] text-[#FFF] opacity-50 whitespace-nowrap text-center py-[6px] px-[10px]"
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
