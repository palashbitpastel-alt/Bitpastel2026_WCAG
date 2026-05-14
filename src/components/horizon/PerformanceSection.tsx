'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { TrendingUp, ScanSearch, CheckCircle2, Cpu } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';

const features = [
  { icon: TrendingUp, label: 'Core Web Vitals optimisation' },
  { icon: ScanSearch, label: 'Lighthouse, Google Page Speed Insights audits' },
  { icon: CheckCircle2, label: 'Theme code optimisation' },
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
  <div className="mb-[60px] md:mb-[75px] last:mb-0 w-full max-w-[460px]">
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
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full z-10"
        style={{ backgroundColor: color }}
      />
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
  'M52 205 C70 200, 88 192, 105 178 C122 164, 132 150, 145 150 C160 150, 168 165, 180 170 C195 175, 210 168, 225 150 C240 132, 252 110, 270 100 C288 92, 305 100, 320 115 C335 130, 348 135, 362 125 C380 112, 395 88, 415 70 C435 52, 462 48, 490 48';

const AREA =
  'M52 205 C70 200, 88 192, 105 178 C122 164, 132 150, 145 150 C160 150, 168 165, 180 170 C195 175, 210 168, 225 150 C240 132, 252 110, 270 100 C288 92, 305 100, 320 115 C335 130, 348 135, 362 125 C380 112, 395 88, 415 70 C435 52, 462 48, 490 48 L490 215 L52 215 Z';

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
        {/* width = 500 - 48 = 452, clips curve to match X axis end */}
        <clipPath id="graphClip">
          <rect x="48" y="0" width="452" height="218" />
        </clipPath>
      </defs>

      {/* horizontal grid lines — match X axis end at 560 */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
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
      <line x1="48" y1="4" x2="48" y2="215" stroke="#BEBEBE" strokeWidth="3" />
      {/* Y axis arrowhead removed */}

      {/* X axis line stops just before arrowhead */}
      <line x1="48" y1="215" x2="490" y2="215" stroke="#BEBEBE" strokeWidth="2" />

      {/* X axis arrowhead removed */}

      {/* Y label — rotated */}
      <text
        x="16"
        y="140"
        fill="#FFFFFF"
        fontSize="16"
        fontFamily="Roboto, sans-serif"
        fontWeight="400"
        transform="rotate(-90 16 140)"
        textAnchor="middle"
      >
        Loading Speed
      </text>
      {/* Y label arrow (just above text, pointing upward) */}
      <line x1="10" y1="78" x2="10" y2="48" stroke="#BEBEBE" strokeWidth="1.5" />
      <polygon points="10,48 6,56 14,56" fill="#BEBEBE" />

      {/* X label + arrow */}
      <text
        x="320"
        y="245"
        fill="#FFFFFF"
        fontSize="16"
        fontFamily="Roboto, sans-serif"
        fontWeight="400"
        textAnchor="middle"
      >
        Revenue &amp; engagement
      </text>
      <line x1="425" y1="239" x2="465" y2="239" stroke="#BEBEBE" strokeWidth="1.5" />
      <polygon points="465,239 457,235 457,243" fill="#BEBEBE" />

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

      {/* animated curve line */}
      <path
        ref={pathRef}
        d={CURVE}
        stroke="#00E396"
        strokeWidth="2.5"
        strokeLinecap="round"
        clipPath="url(#graphClip)"
        fill="none"
      />
    </svg>
  );
};

/* ─── Performance 99% floating card ─── */
const PerformanceCard = ({ inView }: { inView: boolean }) => (
  <motion.div
    className="absolute top-[15%] left-[0%] md:left-[1%] bg-white rounded-[12px] px-[24px] py-[18px] z-20 w-[200px] md:w-[220px]"
    style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <div className="flex justify-between items-center mb-[10px]">
      <span className="font-roboto font-semibold text-[14px] text-[#111827]">Performance</span>
      <span className="font-roboto font-bold text-[16px] text-[#00A974]">99%</span>
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
    <span className="font-roboto text-[12px] text-[#00A974] text-center block">Passing Core Web Vitals</span>
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
          className="relative flex flex-col lg:flex-row lg:gap-[40px] items-start mb-[60px] md:mb-[80px] overflow-visible"
        >
          {/* Left column — starts lower than image per Figma */}
          <div className="w-full lg:w-[42%] flex-shrink-0 lg:pt-[20px]">
            <h2 className="font-source font-bold text-[28px] md:text-[36px] leading-[1.15] md:leading-[44px] tracking-[-0.72px] text-[#111827] mb-[5px]">
              Shopify Speed Optimization
              <br />
              &amp; Performance Audits
            </h2>
            <div
              className="h-[3px] w-[132px] rounded-full mb-[20px]"
              style={{
                background:
                  'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
              }}
            />
            <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[26px] text-[#45556C] mb-[40px] max-w-[470px]">
              A slow store impacts conversions, SEO rankings, and user experience. Our Shopify
              performance experts conduct detailed speed audits and implement advanced optimisation
              strategies to ensure your store loads fast and performs efficiently across all
              devices.
            </p>
            <div className="flex flex-col gap-[24px]">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-[14px]">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#EFF9F6] flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} color="#2DD4A8" strokeWidth={1.8} />
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
              src="/images/horizon-new-images/performance-laptop.svg"
              alt="Shopify Performance Dashboard"
              className="w-full max-w-[615px] h-auto ml-auto"
            />
          </div>
        </div>

        {/* ═══ BOTTOM: Dark stats card ═══ */}
        <div
          ref={bottomRef}
          className="rounded-[20px] grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden"
          style={{
            background: '#0D2430',
            boxShadow: '1px 1px 18.3px rgba(0,0,0,0.07)',
          }}
        >
          {/* Left — Why Speed Matters */}
          <div className="px-[30px] md:px-[40px] xl:px-[50px] py-[40px] md:py-[50px] flex flex-col">
            <div className="flex items-center gap-[16px] mb-[55px] md:mb-[70px]">
              {/* Red gauge icon */}
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0 bg-[#152433] overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 61 63"
                  fill="none"
                >
                  <rect width="61" height="63" rx="30.5" fill="#152433" />
                  <path
                    d="M30.3621 35.0922C31.3382 35.0185 32.0473 34.6685 32.4894 34.0422L40.7255 22.8359C41.0179 22.4226 40.9984 22.0501 40.6669 21.7185C40.3354 21.3869 39.962 21.3665 39.5469 21.6572L28.2901 29.8422C27.627 30.2843 27.2495 30.9751 27.1574 31.9146C27.0653 32.854 27.3324 33.6369 27.9586 34.2633C28.5848 34.8896 29.386 35.1659 30.3621 35.0922ZM30.5002 12.6001C32.1578 12.6001 33.6773 12.7659 35.0587 13.0975C36.44 13.429 37.7937 13.9264 39.1198 14.5896C39.3408 14.7001 39.4974 14.8659 39.5895 15.0869C39.6815 15.308 39.6815 15.5106 39.5895 15.6948C39.4974 15.879 39.3408 15.9988 39.1198 16.054C38.8988 16.1093 38.6778 16.0817 38.4568 15.9712C37.2412 15.3448 35.9888 14.8843 34.6995 14.5896C33.4103 14.2948 32.0105 14.1475 30.5002 14.1475C25.6011 14.1475 21.4294 15.8698 17.9853 19.3146C14.5411 22.7593 12.8191 26.9317 12.8191 31.8317C12.8191 33.379 13.0309 34.908 13.4545 36.4185C13.8781 37.929 14.4767 39.3475 15.2502 40.6738H45.7502C46.5975 39.2738 47.2145 37.8185 47.6012 36.308C47.988 34.7975 48.1814 33.2317 48.1814 31.6106C48.1814 30.4317 48.0433 29.1514 47.767 27.7698C47.4907 26.3883 47.0395 25.0896 46.4133 23.8738C46.3028 23.6527 46.2659 23.4317 46.3028 23.2106C46.3396 22.9896 46.4536 22.8212 46.6448 22.7055C46.822 22.6002 47.0119 22.5843 47.2145 22.658C47.417 22.7317 47.5736 22.879 47.6841 23.1001C48.4577 24.6475 48.9918 26.0935 49.2865 27.4383C49.5812 28.783 49.7285 30.1738 49.7285 31.6106C49.7285 33.4527 49.5259 35.1567 49.1207 36.7225C48.7155 38.2883 48.0709 39.9001 47.1868 41.558C47.0763 41.7422 46.8921 41.8988 46.6343 42.0277C46.3764 42.1567 46.0818 42.2212 45.7502 42.2212H15.2502C14.9555 42.2212 14.6885 42.1475 14.4491 42.0001C14.2096 41.8527 13.9978 41.6317 13.8136 41.3369C13.1506 40.158 12.5612 38.7948 12.0455 37.2475C11.5298 35.7001 11.272 33.8948 11.272 31.8317C11.272 29.2159 11.7678 26.7407 12.7594 24.406C13.751 22.0717 15.1047 20.0269 16.8205 18.2718C18.5364 16.517 20.573 15.133 22.9305 14.1198C25.288 13.1067 27.8112 12.6001 30.5002 12.6001Z"
                    fill="#FF7171"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-source font-semibold text-[22px] md:text-[24px] leading-[1.2] tracking-[-0.5px] text-[#FFFFFF] mb-[2px]">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="32"
                  viewBox="0 0 30 32"
                  fill="none"
                >
                  <path
                    d="M2.6875 29.7417C1.94097 29.7417 1.30642 29.4804 0.783854 28.9578C0.261285 28.4352 0 27.8007 0 27.0542V4.8375C0 4.09097 0.261285 3.45642 0.783854 2.93385C1.30642 2.41128 1.94097 2.15 2.6875 2.15H11.2427C11.3622 1.55278 11.6533 1.04514 12.1161 0.627083C12.579 0.209028 13.1389 0 13.7958 0C14.4528 0 15.0127 0.209028 15.4755 0.627083C15.9384 1.04514 16.2295 1.55278 16.349 2.15H24.9042C25.6507 2.15 26.2852 2.41128 26.8078 2.93385C27.3304 3.45642 27.5917 4.09097 27.5917 4.8375V13.3479C27.5917 13.5271 27.5319 13.6764 27.4125 13.7958C27.2931 13.9153 27.1438 13.975 26.9646 13.975C26.7854 13.975 26.6361 13.9153 26.5167 13.7958C26.3972 13.6764 26.3375 13.5271 26.3375 13.3479V4.8375C26.3375 4.47917 26.1882 4.15069 25.8896 3.85208C25.591 3.55347 25.2625 3.40417 24.9042 3.40417H20.425V5.64375C20.425 6.03194 20.2981 6.35295 20.0443 6.60677C19.7905 6.86059 19.4694 6.9875 19.0813 6.9875H8.51042C8.12222 6.9875 7.80122 6.86059 7.5474 6.60677C7.29358 6.35295 7.16667 6.03194 7.16667 5.64375V3.40417H2.6875C2.32917 3.40417 2.00069 3.55347 1.70208 3.85208C1.40347 4.15069 1.25417 4.47917 1.25417 4.8375V27.0542C1.25417 27.4125 1.40347 27.741 1.70208 28.0396C2.00069 28.3382 2.32917 28.4875 2.6875 28.4875H10.75C10.9292 28.4875 11.0785 28.5472 11.1979 28.6667C11.3174 28.7861 11.3771 28.9354 11.3771 29.1146C11.3771 29.2937 11.3174 29.4431 11.1979 29.5625C11.0785 29.6819 10.9292 29.7417 10.75 29.7417H2.6875ZM14.7589 3.56094C15.0127 3.30712 15.1396 2.98611 15.1396 2.59792C15.1396 2.20972 15.0127 1.88872 14.7589 1.6349C14.505 1.38108 14.184 1.25417 13.7958 1.25417C13.4076 1.25417 13.0866 1.38108 12.8328 1.6349C12.579 1.88872 12.4521 2.20972 12.4521 2.59792C12.4521 2.98611 12.579 3.30712 12.8328 3.56094C13.0866 3.81476 13.4076 3.94167 13.7958 3.94167C14.184 3.94167 14.505 3.81476 14.7589 3.56094ZM20.2458 27.95C18.7229 27.95 17.4165 27.405 16.3266 26.3151C15.2366 25.2252 14.6917 23.9187 14.6917 22.3958C14.6917 20.8729 15.2366 19.5665 16.3266 18.4766C17.4165 17.3866 18.7229 16.8417 20.2458 16.8417C21.7688 16.8417 23.0752 17.3866 24.1651 18.4766C25.255 19.5665 25.8 20.8729 25.8 22.3958C25.8 23.0229 25.7104 23.6425 25.5313 24.2547C25.3521 24.8668 25.0535 25.4118 24.6354 25.8896L28.9354 30.1896C29.0549 30.309 29.122 30.4509 29.137 30.6151C29.1519 30.7793 29.0847 30.9361 28.9354 31.0854C28.7861 31.2347 28.6368 31.3019 28.4875 31.287C28.3382 31.272 28.1889 31.2049 28.0396 31.0854L23.7396 26.8302C23.2319 27.1587 22.6795 27.4274 22.0823 27.6365C21.4851 27.8455 20.8729 27.95 20.2458 27.95ZM23.2917 25.4417C24.1278 24.6056 24.5458 23.5903 24.5458 22.3958C24.5458 21.2014 24.1278 20.1861 23.2917 19.35C22.4556 18.5139 21.4403 18.0958 20.2458 18.0958C19.0514 18.0958 18.0361 18.5139 17.2 19.35C16.3639 20.1861 15.9458 21.2014 15.9458 22.3958C15.9458 23.5903 16.3639 24.6056 17.2 25.4417C18.0361 26.2778 19.0514 26.6958 20.2458 26.6958C21.4403 26.6958 22.4556 26.2778 23.2917 25.4417Z"
                    fill="#00E365"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-source font-semibold text-[22px] md:text-[24px] leading-[1.2] tracking-[-0.5px] text-[#FFFFFF] mb-[2px]">
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
