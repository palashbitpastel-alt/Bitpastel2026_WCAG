'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
// import { TrendingUp, ScanSearch, CheckCircle2, Cpu } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import TrendingUp from '@/../public/images/performanceicon/performance1.svg';
import ScanSearch from '@/../public/images/performanceicon/performance2.svg';
import CheckCircle2 from '@/../public/images/performanceicon/performance3.svg';
import Cpu from '@/../public/images/performanceicon/performance4.svg';

const features = [
  { icon: TrendingUp, label: 'Core Web Vitals optimization' },
  { icon: ScanSearch, label: 'Lighthouse, Google Page Speed Insights audits' },
  { icon: CheckCircle2, label: 'Theme code optimization' },
  { icon: Cpu, label: 'Script and Apps load management' },
];

/* ─── Animated progress bar (bottom card) ─── */
const AnimatedBar = ({
  label,
  value,
  color,
  targetWidth,
  inView,
  delay,
  duration,
  repeat = 0,
}: {
  label: string;
  value: string;
  color: string;
  targetWidth: string;
  inView: boolean;
  delay: number;
  duration: number;
  repeat?: number;
}) => (
  <div className="mb-[60px] md:mb-[70px] last:mb-0 w-full max-w-[460px]">
    <div className="flex justify-between items-center mb-[14px]">
      <span className="font-roboto font-medium text-[16px] md:text-[18px] leading-[24px] text-[#FFFFFF]">
        {label}
      </span>
      <span
        className="font-roboto font-normal text-[16px] md:text-[18px] leading-[24px]"
        style={{ color }}
      >
        {value}
      </span>
    </div>
    {/* bar track */}
    <div className="relative h-[4px] w-full rounded-full bg-[#1F2D3C]">
      {/* dot at start */}
      {/* <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full z-10"
        style={{ backgroundColor: color }}
      /> */}
      {/* animated fill */}
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: '0%' }}
        animate={inView ? { width: targetWidth } : { width: '0%' }}
        transition={{
          duration,
          delay,
          ease: 'easeOut',
          repeat: repeat === Infinity ? Infinity : repeat > 0 ? repeat : 0,
          ...((repeat > 0 || repeat === Infinity) && { repeatType: 'loop' as const }),
        }}
      />
    </div>
  </div>
);

/* ─── Animated graph with SVG path draw ─── */
// Curve tuned to match screenshot: gentle rise, first hump ~30%, subtle dip, sharp climb to high plateau
const CURVE =
  'M48 215 C54 214.5, 62 213.5, 72 211 C86 207.5, 98 200, 110 191 C128 180, 145 168, 162 162 C176 158, 184 172, 195 180 C208 188, 222 184, 238 162 C254 140, 268 116, 286 102 C304 92, 318 102, 332 122 C346 142, 358 144, 372 134 C390 122, 410 96, 430 70 C440 57, 462 50, 478 50 C484 50, 487 50, 490 50';

const AREA =
  'M48 215 C54 214.5, 62 213.5, 72 211 C86 207.5, 98 200, 110 191 C128 180, 145 168, 162 162 C176 158, 184 172, 195 180 C208 188, 222 184, 238 162 C254 140, 268 116, 286 102 C304 92, 318 102, 332 122 C346 142, 358 144, 372 134 C390 122, 410 96, 430 70 C440 57, 462 50, 478 50 C484 50, 487 50, 490 50 L490 215 L48 215 Z';


const AnimatedGraph = ({ inView }: { inView: boolean }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    if (!inView) {
      path.style.transition = 'none';
      path.style.strokeDashoffset = `${len}`;
      return;
    }

    const animate = () => {
      path.style.transition = 'none';
      path.style.strokeDashoffset = `${len}`;
      // Force reflow
      void path.getBoundingClientRect();
      path.style.transition = 'stroke-dashoffset 6.5s ease-in-out 0.1s';
      path.style.strokeDashoffset = '0';
    };

    animate();
    const interval = setInterval(animate, 7000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <svg
      viewBox="0 0 580 255"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00E396" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00E396" stopOpacity="0" />
        </linearGradient>
        {/* horizontal gradient: low opacity at the start of the curve, full opacity by ~25% across */}
        <linearGradient id="curveStroke" x1="490" y1="49" x2="0" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00E365" stopOpacity="1" />
          <stop offset="25%" stopColor="#00E365" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#00E365" stopOpacity="0.40" />
          <stop offset="75%" stopColor="#00E365" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#00E365" stopOpacity="0" />
        </linearGradient>
        {/* width = 500 - 48 = 452, clips curve to match X axis end */}
        <clipPath id="graphClip">
          <rect x="48" y="0" width="452" height="218" />
        </clipPath>
      </defs>

      {/* horizontal grid lines — match X axis end at 560 */}
      {[1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1="48"
          y1={215 - i * 35}
          x2="490"
          y2={215 - i * 35}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />
      ))}

      {/* Y axis — taller */}
      <line x1="48" y1="4" x2="48" y2="215" stroke="#FFFFFF" strokeWidth="1" />
      {/* Y axis arrowhead removed */}

      {/* X axis line stops just before arrowhead */}
      <line x1="48" y1="215" x2="490" y2="215" stroke="#FFFFFF" strokeWidth="1.5" />

      {/* X axis arrowhead removed */}

      {/* Y label — rotated, centered on x=22 to match the arrow shaft */}
      <text
        x="22"
        y="140"
        fill="#FFFFFF"
        fontSize="16"
        fontFamily="Roboto, sans-serif"
        fontWeight="400"
        transform="rotate(-90 22 140)"
        textAnchor="middle"
      >
        Loading Speed
      </text>
      {/* Y label arrow (just above text, pointing upward) — open/line head, centered on shaft x=16 */}
      <line x1="16" y1="78" x2="16" y2="42" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <polyline
        points="10,50 16,42 22,50"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* X label + arrow */}
      <text
        x="290"
        y="245"
        fill="#FFFFFF"
        fontSize="16"
        fontFamily="Roboto, sans-serif"
        fontWeight="400"
        textAnchor="middle"
      >
        Revenue &amp; engagement
      </text>
      <line x1="385" y1="239" x2="446" y2="239" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <polyline
        points="438,233 446,239 438,245"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* gradient fill area */}
      {/* <motion.path
        d={AREA}
        fill="url(#areaGrad)"
        clipPath="url(#graphClip)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 0, 1, 1, 0] } : { opacity: 0 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          times: [0, 0.85, 0.9, 0.95, 1],
        }}
      /> */}

      {/* animated curve line — stroke uses horizontal gradient so the start fades in */}
      <path
        ref={pathRef}
        d={CURVE}
        stroke="url(#curveStroke)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#graphClip)"
        fill="none"
      />
    </svg>
  );
};

/* ─── Performance 99% floating card ─── */
const PerformanceCard = ({ inView }: { inView: boolean }) => (
  <motion.div
    className="absolute top-[15%] left-[0%] md:left-[-2%] lg:left-[1%] bg-white rounded-[12px] px-[24px] py-[18px] z-20 w-[200px] md:w-[220px]"
    style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <div className="flex justify-between items-center mb-[10px]">
      <span className="font-roboto font-semibold text-[14px] text-[#111827]">Performance</span>
      <span className="font-roboto font-bold text-[16px] text-[#00a63e]">99%</span>
    </div>
    {/* green progress bar */}
    <div className="h-[8px] w-full rounded-full bg-[#E5E7EB] mb-[10px]">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: 'linear-gradient(90deg, #00D5BE 0%, #00C950 100%)',
        }}
        initial={{ width: '0%' }}
        animate={inView ? { width: '99%' } : { width: '0%' }}
        transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
      />
    </div>
    <span className="font-roboto font-medium text-[12px] text-[#62748E] text-center block">Passing Core Web Vitals</span>
  </motion.div>
);

/* ─── Main Section ─── */
const PerformanceSection: React.FC = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const topInView = useInView(topRef, { once: true, margin: '-50px' });
  const bottomInView = useInView(bottomRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="container mx-auto px-4 max-w-[1206px]">
        {/* ═══ TOP: Two columns ═══ */}
        <div
          ref={topRef}
          className="relative flex flex-col lg:flex-row lg:gap-[40px] items-center mb-[60px] md:mb-[80px] overflow-visible"
        >
          {/* Left column — starts lower than image per Figma */}
          <div className="w-full lg:w-[42%] flex-shrink-0 lg:pt-[20px]">
            <h2 className="font-source font-bold text-[23px] md:text-[36px] leading-[1.15] md:leading-[44px] tracking-[-0.72px] text-[#111827] mb-[5px] mobile-style-description">
              Shopify Speed Optimization
              <br />
              &amp; Performance Audits
            </h2>
            <div
              className="h-[3px] w-[132px] rounded-full mb-[20px] mobile-auto"
              style={{
                background:
                  'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
              }}
            />
            <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[26px] text-[#45556C] mb-[40px] max-w-[470px] mobile-style-description">
              A slow store impacts conversions, SEO rankings, and user experience. Our Shopify
              performance experts conduct detailed speed audits and implement advanced optimization
              strategies to ensure your store loads fast and performs efficiently across all
              devices.
            </p>
            <div className="flex flex-col gap-[10px] md:gap-[24px]">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-[14px]">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#EFF9F6] flex items-center justify-center flex-shrink-0">
                    <Image src={item.icon} alt="" width={20} height={20} />
                  </div>
                  <span className="font-roboto font-medium text-[18px] leading-[27px] text-[#1D293D]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — laptop SVG + floating card */}
          <div className="w-full lg:flex-1 relative mt-[30px] lg:mt-0">
            <PerformanceCard inView={topInView} />
            <img
              src="/images/horizon-new-images/performanceImage.png"
              alt="Shopify Performance Dashboard"
              className="w-full max-w-[300px] md:max-w-[550px] h-auto ml-auto"
            />
          </div>
        </div>

        {/* ═══ BOTTOM: Dark stats card ═══ */}
        <div
          ref={bottomRef}
          className="rounded-[20px] grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden"
          style={{
            background: '#0b1b2b',
            boxShadow: '1px 1px 18.3px rgba(0,0,0,0.07)',
          }}
        >
          {/* Left — Why Speed Matters */}
          <div className="px-[30px] md:px-[40px] xl:px-[50px] py-[40px] md:py-[50px] flex flex-col">
            <div className="flex items-center gap-[16px] mb-[55px] md:mb-[70px]">
              {/* Red gauge icon */}
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0 bg-[#152433]">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 39 30" fill="none" className='mt-[-6px]'>
                  <path d="M19.0901 22.4921C20.0663 22.4184 20.7754 22.0684 21.2174 21.4421L29.4535 10.2358C29.746 9.82247 29.7264 9.45 29.3949 9.11842C29.0634 8.78684 28.6901 8.7664 28.2749 9.05708L17.0181 17.2421C16.3551 17.6842 15.9775 18.375 15.8854 19.3145C15.7933 20.2539 16.0604 21.0368 16.6866 21.6632C17.3128 22.2895 18.114 22.5658 19.0901 22.4921ZM19.2283 0C20.8859 0 22.4053 0.165789 23.7867 0.497368C25.168 0.828947 26.5217 1.32632 27.8478 1.98947C28.0688 2.1 28.2254 2.26579 28.3175 2.48684C28.4096 2.70789 28.4096 2.91053 28.3175 3.09474C28.2254 3.27895 28.0688 3.39868 27.8478 3.45395C27.6268 3.50921 27.4058 3.48158 27.1848 3.37105C25.9692 2.74474 24.7168 2.28421 23.4275 1.98947C22.1383 1.69474 20.7385 1.54737 19.2283 1.54737C14.3291 1.54737 10.1575 3.26974 6.71332 6.71447C3.26917 10.1592 1.5471 14.3316 1.5471 19.2316C1.5471 20.7789 1.75891 22.3079 2.18252 23.8184C2.60613 25.3289 3.20471 26.7474 3.97826 28.0737H34.4783C35.3255 26.6737 35.9425 25.2184 36.3293 23.7079C36.716 22.1974 36.9094 20.6316 36.9094 19.0105C36.9094 17.8316 36.7713 16.5513 36.495 15.1697C36.2188 13.7882 35.7675 12.4895 35.1413 11.2737C35.0308 11.0526 34.994 10.8316 35.0308 10.6105C35.0676 10.3895 35.1816 10.2211 35.3728 10.1054C35.55 10.0001 35.7399 9.98421 35.9425 10.0579C36.1451 10.1316 36.3016 10.2789 36.4121 10.5C37.1857 12.0474 37.7198 13.4934 38.0145 14.8382C38.3092 16.1829 38.4565 17.5737 38.4565 19.0105C38.4565 20.8526 38.2539 22.5566 37.8487 24.1224C37.4435 25.6882 36.7989 27.3 35.9149 28.9579C35.8043 29.1421 35.6202 29.2987 35.3623 29.4276C35.1045 29.5566 34.8098 29.6211 34.4783 29.6211H3.97826C3.68357 29.6211 3.41652 29.5474 3.17708 29.4C2.93765 29.2526 2.72585 29.0316 2.54167 28.7368C1.87862 27.5579 1.28925 26.1947 0.773551 24.6474C0.25785 23.1 0 21.2947 0 19.2316C0 16.6158 0.495809 14.1406 1.48743 11.8059C2.47905 9.47155 3.83276 7.42682 5.54857 5.67166C7.26438 3.91687 9.30103 2.53289 11.6585 1.51974C14.016 0.506579 16.5392 0 19.2283 0Z" fill="#FF7171"/>
                </svg>
              </div>
              <div>
                <h3 className="font-source font-semibold text-[20px] md:text-[24px] leading-[1.2] tracking-[-0.5px] text-[#FFFFFF] mb-[2px]">
                  Why Speed Matters?
                </h3>
                <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[22px] text-[#FFFFFF]/90">
                  Performance directly affects revenue and engagement
                </p>
              </div>
            </div>

            {/* Animated bars — slow is ~10s, fast is ~1.5s matching Figma */}
            <AnimatedBar
              label="Slow loading (>6s)"
              value="50% abandon"
              color="#FF7171"
              targetWidth="100%"
              inView={bottomInView}
              delay={0.5}
              duration={10}
              repeat={Infinity}
            />
            <AnimatedBar
              label="Fast loading"
              value="High Rentention"
              color="#00E365"
              targetWidth="100%"
              inView={bottomInView}
              delay={0.5}
              duration={2}
              repeat={Infinity}
            />
          </div>

          {/* Right — Studies Show + Graph */}
          <div className="px-[30px] md:px-[40px] xl:px-[50px] py-[40px] md:py-[50px] flex flex-col">
            <div className="flex items-center gap-[16px] mb-[20px] md:mb-[25px]">
              {/* Green book + search icon */}
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0 bg-[#152433]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 30 32" fill="none">
                  <path d="M2.6875 29.7417C1.94097 29.7417 1.30642 29.4804 0.783854 28.9578C0.261285 28.4352 0 27.8007 0 27.0542V4.8375C0 4.09097 0.261285 3.45642 0.783854 2.93385C1.30642 2.41128 1.94097 2.15 2.6875 2.15H11.2427C11.3622 1.55278 11.6533 1.04514 12.1161 0.627083C12.579 0.209028 13.1389 0 13.7958 0C14.4528 0 15.0127 0.209028 15.4755 0.627083C15.9384 1.04514 16.2295 1.55278 16.349 2.15H24.9042C25.6507 2.15 26.2852 2.41128 26.8078 2.93385C27.3304 3.45642 27.5917 4.09097 27.5917 4.8375V13.3479C27.5917 13.5271 27.5319 13.6764 27.4125 13.7958C27.2931 13.9153 27.1438 13.975 26.9646 13.975C26.7854 13.975 26.6361 13.9153 26.5167 13.7958C26.3972 13.6764 26.3375 13.5271 26.3375 13.3479V4.8375C26.3375 4.47917 26.1882 4.15069 25.8896 3.85208C25.591 3.55347 25.2625 3.40417 24.9042 3.40417H20.425V5.64375C20.425 6.03194 20.2981 6.35295 20.0443 6.60677C19.7905 6.86059 19.4694 6.9875 19.0813 6.9875H8.51042C8.12222 6.9875 7.80122 6.86059 7.5474 6.60677C7.29358 6.35295 7.16667 6.03194 7.16667 5.64375V3.40417H2.6875C2.32917 3.40417 2.00069 3.55347 1.70208 3.85208C1.40347 4.15069 1.25417 4.47917 1.25417 4.8375V27.0542C1.25417 27.4125 1.40347 27.741 1.70208 28.0396C2.00069 28.3382 2.32917 28.4875 2.6875 28.4875H10.75C10.9292 28.4875 11.0785 28.5472 11.1979 28.6667C11.3174 28.7861 11.3771 28.9354 11.3771 29.1146C11.3771 29.2937 11.3174 29.4431 11.1979 29.5625C11.0785 29.6819 10.9292 29.7417 10.75 29.7417H2.6875ZM14.7589 3.56094C15.0127 3.30712 15.1396 2.98611 15.1396 2.59792C15.1396 2.20972 15.0127 1.88872 14.7589 1.6349C14.505 1.38108 14.184 1.25417 13.7958 1.25417C13.4076 1.25417 13.0866 1.38108 12.8328 1.6349C12.579 1.88872 12.4521 2.20972 12.4521 2.59792C12.4521 2.98611 12.579 3.30712 12.8328 3.56094C13.0866 3.81476 13.4076 3.94167 13.7958 3.94167C14.184 3.94167 14.505 3.81476 14.7589 3.56094ZM20.2458 27.95C18.7229 27.95 17.4165 27.405 16.3266 26.3151C15.2366 25.2252 14.6917 23.9187 14.6917 22.3958C14.6917 20.8729 15.2366 19.5665 16.3266 18.4766C17.4165 17.3866 18.7229 16.8417 20.2458 16.8417C21.7688 16.8417 23.0752 17.3866 24.1651 18.4766C25.255 19.5665 25.8 20.8729 25.8 22.3958C25.8 23.0229 25.7104 23.6425 25.5313 24.2547C25.3521 24.8668 25.0535 25.4118 24.6354 25.8896L28.9354 30.1896C29.0549 30.309 29.122 30.4509 29.137 30.6151C29.1519 30.7793 29.0847 30.9361 28.9354 31.0854C28.7861 31.2347 28.6368 31.3019 28.4875 31.287C28.3382 31.272 28.1889 31.2049 28.0396 31.0854L23.7396 26.8302C23.2319 27.1587 22.6795 27.4274 22.0823 27.6365C21.4851 27.8455 20.8729 27.95 20.2458 27.95ZM23.2917 25.4417C24.1278 24.6056 24.5458 23.5903 24.5458 22.3958C24.5458 21.2014 24.1278 20.1861 23.2917 19.35C22.4556 18.5139 21.4403 18.0958 20.2458 18.0958C19.0514 18.0958 18.0361 18.5139 17.2 19.35C16.3639 20.1861 15.9458 21.2014 15.9458 22.3958C15.9458 23.5903 16.3639 24.6056 17.2 25.4417C18.0361 26.2778 19.0514 26.6958 20.2458 26.6958C21.4403 26.6958 22.4556 26.2778 23.2917 25.4417Z" fill="#00E365"/>
                </svg>
              </div>
              <div>
                <h3 className="font-source font-semibold text-[20px] md:text-[24px] leading-[1.2] tracking-[-0.5px] text-[#FFFFFF] mb-[2px]">
                  Studies Show
                </h3>
                <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[22px] text-[#FFFFFF]/90">
                  70% visitors leave a sites taking more than 6s to load
                </p>
              </div>
            </div>

            <div className="w-full flex-1 min-h-[220px] md:min-h-[240px]">
              <AnimatedGraph inView={bottomInView} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
