import React from 'react';
import { ShieldCheck, Layers, Zap, Cpu } from 'lucide-react';

const advantages = [
  {
    title: 'Reliable & Scalable Development',
    description: 'Built for high-volume stores with robust architecture.',
    iconBg: '#DBEAFE',
    borderColor: '#38BDF8',
    icon: <ShieldCheck size={28} color="#38BDF8" strokeWidth={1.5} />,
  },
  {
    title: 'End-to-End Shopify Solutions',
    description:
      'From strategy to custom theme development and ongoing support.',
    iconBg: '#FCE4EC',
    borderColor: '#E8607E',
    icon: <Layers size={28} color="#E8607E" strokeWidth={1.5} />,
  },
  {
    title: 'Performance & Conversion Focused',
    description: 'Optimized for speed to turn browsers into loyal buyers.',
    iconBg: '#D1FAE5',
    borderColor: '#2DD4A8',
    icon: <Zap size={28} color="#2DD4A8" strokeWidth={1.5} />,
  },
  {
    title: 'AI & Automation Integration',
    description:
      'Smart tools to streamline operations and personalize experiences.',
    iconBg: '#FEF9C3',
    borderColor: '#EAB308',
    icon: <Cpu size={28} color="#EAB308" strokeWidth={1.5} />,
  },
];

const AdvantageSection: React.FC = () => {
  return (
    <section className="bg-[#F8F9FB] py-[80px] md:py-[100px]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col items-center mb-[20px]">
          <h2 className="font-source font-bold text-[28px] md:text-[38px] leading-[1.2] md:leading-[49.4px] tracking-[-2px] text-center text-[#0F172B]">
            The Bitpastel Advantage
          </h2>
          {/* Gradient underline */}
          <div
            className="mt-[5px] h-[3px] w-[132px] rounded-full"
            style={{
              background:
                'linear-gradient(90deg, #22587a 0%, #C7FACE 36%, #56CC99 70%, #39A3A6 100%)',
            }}
          ></div>
        </div>

        {/* Subtitle */}
        <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[26px] text-center text-[#6B7280] max-w-[817px] mx-auto mb-[50px] md:mb-[60px]">
          At Bitpastel, we combine Shopify expertise with modern development
          practices to help brands build scalable and high-performing ecommerce
          stores. From store setup to advanced integrations, our team delivers
          tailored Shopify solutions that align with your business goals.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] max-w-[1206px] mx-auto">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[12px] border p-[30px] flex flex-col"
              style={{ borderColor: item.iconBg, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)' }}
            >
              {/* Icon */}
              <div
                className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-[24px]"
                style={{ backgroundColor: item.iconBg }}
              >
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-source font-bold text-[20px] leading-[26px] text-[#0F172B] mb-[12px]">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="font-roboto font-normal text-[16px] leading-[26px] text-[#45556C]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
