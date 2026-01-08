'use client';

import Image from "next/image";

interface JobCardProps {
  id?: string;
  title: string;
  hashtags: string[];
  experience: string;
  onApply?: () => void;
  onClick?: () => void;
  className?: string;
  gradientColors?: string;
  style?: React.CSSProperties;
}

export default function Card({  
  id,
  title, 
  hashtags, 
  experience, 
  onApply,
  onClick,
  className = "",
  gradientColors = "linear-gradient(to right, #7e5bef, #3b82f6)", // default fallback
  style
}: JobCardProps) {
  return (
    <div
      className={`w-full mx-auto bg-[#ffffff] rounded-[15px] card transition-all overflow-hidden flex flex-col gap-2 ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Gradient Header */}
      <div 
        className="h-20 flex items-center justify-center relative flex-shrink-0"
        style={{ background: gradientColors }}
      >
        <p className="text-primary-white subheading font-semibold text-center px-4 font-source">
          {title}
        </p>
      </div>
      
      {/* Content */}
      <div className="px-[15px] py-[30px] flex flex-col flex-grow">
        <div className="flex-grow min-h-[130px] space-y-5">
          {/* Hashtags */}
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className=" rounded-full  flex items-center justify-center mt-1.5 flex-shrink-0">
                <Image
                src={'/images/badge.png'}
                alt='badge icon'
                width={15}
                height={15}
                />
              </div>
              <div className="flex flex-wrap gap-x-1 gap-y-1 leading-relaxed">
                {hashtags.map((tag, index) => (
                  <span 
                    key={index}
                    className=""
                  >
                    {tag}{index < hashtags.length - 1 && ' '}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className=" rounded-full flex items-center justify-center flex-shrink-0">
              <Image
              src={'/images/power_career.png'}
              alt='experience icon'
              width={15}
              height={15}
              />
            </div>
            <span className="">
              Experience: {experience}
            </span>
          </div>
        </div>
        {/* Apply Button */}
        <div className="pt-4 flex-shrink-0 text-center">
          <button 
            onClick={onApply}
            className="min-w-[116px] card-button rounded-[4px] bg-green-btn text-primary-white py-2 px-5  w-auto mx-auto"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
