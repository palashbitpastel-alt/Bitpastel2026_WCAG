import React from 'react';
// import { ShieldCheck, Layers, Zap, Cpu } from 'lucide-react';


const ShieldCheck: React.FC = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
  <path d="M30.5 20.0417C30.5 27.75 25.25 31.6042 19.01 33.8396C18.6832 33.9534 18.3283 33.9479 18.005 33.8242C11.75 31.6042 6.5 27.75 6.5 20.0417V9.25C6.5 8.84113 6.65804 8.449 6.93934 8.15988C7.22064 7.87076 7.60218 7.70833 8 7.70833C11 7.70833 14.75 5.85833 17.36 3.515C17.6778 3.23596 18.082 3.08264 18.5 3.08264C18.918 3.08264 19.3222 3.23596 19.64 3.515C22.265 5.87375 26 7.70833 29 7.70833C29.3978 7.70833 29.7794 7.87076 30.0607 8.15988C30.342 8.449 30.5 8.84113 30.5 9.25V20.0417Z" stroke="#18ABD4" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 18.5001L17 21.5834L23 15.4167" stroke="#18ABD4" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const Layers: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M17.6068 2.90674C17.2594 2.74827 16.882 2.66626 16.5001 2.66626C16.1183 2.66626 15.7409 2.74827 15.3934 2.90674L3.96678 8.10674C3.73018 8.21106 3.52902 8.38193 3.3878 8.59854C3.24658 8.81516 3.17139 9.06816 3.17139 9.32674C3.17139 9.58532 3.24658 9.83832 3.3878 10.0549C3.52902 10.2715 3.73018 10.4424 3.96678 10.5467L15.4068 15.7601C15.7542 15.9185 16.1316 16.0005 16.5134 16.0005C16.8953 16.0005 17.2727 15.9185 17.6201 15.7601L29.0601 10.5601C29.2967 10.4557 29.4979 10.2849 29.6391 10.0683C29.7803 9.85165 29.8555 9.59865 29.8555 9.34007C29.8555 9.08149 29.7803 8.82849 29.6391 8.61188C29.4979 8.39527 29.2967 8.22439 29.0601 8.12007L17.6068 2.90674Z" stroke="#F5747E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.16651 16C3.16588 16.255 3.2384 16.5049 3.37546 16.7199C3.51253 16.935 3.7084 17.1062 3.93984 17.2133L15.4065 22.4267C15.7521 22.5832 16.1271 22.6641 16.5065 22.6641C16.8859 22.6641 17.2609 22.5832 17.6065 22.4267L29.0465 17.2267C29.2825 17.1206 29.4826 16.9481 29.6222 16.7303C29.7619 16.5125 29.8352 16.2587 29.8332 16" stroke="#F5747E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.16651 22.6667C3.16588 22.9218 3.2384 23.1716 3.37546 23.3867C3.51253 23.6017 3.7084 23.773 3.93984 23.8801L15.4065 29.0934C15.7521 29.2499 16.1271 29.3309 16.5065 29.3309C16.8859 29.3309 17.2609 29.2499 17.6065 29.0934L29.0465 23.8934C29.2825 23.7873 29.4826 23.6149 29.6222 23.3971C29.7619 23.1792 29.8352 22.9255 29.8332 22.6667" stroke="#F5747E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const Zap: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M5.83349 18.6667C5.58117 18.6675 5.33379 18.5968 5.12009 18.4627C4.90639 18.3285 4.73513 18.1365 4.62622 17.9089C4.51731 17.6813 4.47521 17.4275 4.50482 17.1769C4.53443 16.9263 4.63453 16.6893 4.79349 16.4933L17.9935 2.89335C18.0925 2.77906 18.2274 2.70182 18.3761 2.67432C18.5248 2.64683 18.6785 2.6707 18.8118 2.74202C18.9451 2.81334 19.0503 2.92788 19.1099 3.06682C19.1696 3.20577 19.1803 3.36088 19.1402 3.50668L16.5802 11.5333C16.5047 11.7354 16.4793 11.9527 16.5063 12.1667C16.5332 12.3807 16.6117 12.5849 16.7349 12.7619C16.8582 12.9389 17.0225 13.0834 17.2139 13.1829C17.4052 13.2824 17.6178 13.334 17.8335 13.3333H27.1668C27.4191 13.3325 27.6665 13.4032 27.8802 13.5374C28.0939 13.6715 28.2652 13.8635 28.3741 14.0911C28.483 14.3187 28.5251 14.5726 28.4955 14.8231C28.4659 15.0737 28.3658 15.3107 28.2068 15.5067L15.0068 29.1067C14.9078 29.221 14.7729 29.2982 14.6242 29.3257C14.4755 29.3532 14.3219 29.3293 14.1885 29.258C14.0552 29.1867 13.95 29.0722 13.8904 28.9332C13.8307 28.7943 13.82 28.6392 13.8602 28.4933L16.4202 20.4667C16.4956 20.2646 16.521 20.0473 16.494 19.8333C16.4671 19.6194 16.3886 19.4151 16.2654 19.2381C16.1421 19.0611 15.9778 18.9167 15.7865 18.8171C15.5951 18.7176 15.3825 18.666 15.1668 18.6667H5.83349Z" stroke="#009689" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);
const Cpu: React.FC = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16.5 26.6667V29.3334" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.5 2.66675V5.33341" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.1665 26.6667V29.3334" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.1665 2.66675V5.33341" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.1665 16H5.83317" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.1665 22.6667H5.83317" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.1665 9.33325H5.83317" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27.1665 16H29.8332" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27.1665 22.6667H29.8332" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27.1665 9.33325H29.8332" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.8335 26.6667V29.3334" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.8335 2.66675V5.33341" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5002 5.33325H8.50016C7.0274 5.33325 5.8335 6.52716 5.8335 7.99992V23.9999C5.8335 25.4727 7.0274 26.6666 8.50016 26.6666H24.5002C25.9729 26.6666 27.1668 25.4727 27.1668 23.9999V7.99992C27.1668 6.52716 25.9729 5.33325 24.5002 5.33325Z" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.4998 10.6667H12.4998C11.7635 10.6667 11.1665 11.2637 11.1665 12.0001V20.0001C11.1665 20.7365 11.7635 21.3334 12.4998 21.3334H20.4998C21.2362 21.3334 21.8332 20.7365 21.8332 20.0001V12.0001C21.8332 11.2637 21.2362 10.6667 20.4998 10.6667Z" stroke="#F0C638" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const advantages = [
  {
    title: 'Reliable & Scalable Development',
    description: 'Built for high-volume stores with robust architecture.',
    iconBg: 'rgba(159, 221, 238, 0.45)',
    borderColor: '#d4f0f7',
    iconColor: '#22577a',
    icon: ShieldCheck,
  },
  {
    title: 'End-to-End Shopify Solutions',
    description:
      'From strategy to custom theme development and ongoing support.',
    iconBg: '#fde3e5',
    borderColor: '#fde3e5',
    iconColor: '#e8607e',
    icon: Layers,
  },
  {
    title: 'Performance & Conversion Focused',
    description: 'Optimized for speed to turn browsers into loyal buyers.',
    iconBg: '#d8f5e9',
    borderColor: '#d8f5e9',
    iconColor: '#2dd4a8',
    icon: Zap,
  },
  {
    title: 'AI & Automation Integration',
    description:
      'Smart tools to streamline operations and personalize experiences.',
    iconBg: '#fcf4d7',
    borderColor: '#fcf4d7',
    iconColor: '#c9a227',
    icon: Cpu,
  },
];

const AdvantageSection: React.FC = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="container mx-auto px-4 md:px-[80px]">
        {/* Title */}
        <div className="flex flex-col items-center mb-[20px]">
          <h2 className="font-source font-bold text-[23px] md:text-[38px] leading-[1.2] md:leading-[49.4px] md:tracking-[-1px] tracking-[-.72px] text-center text-[#0F172B]">
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
        <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[26px] text-center text-[#6B7280] max-w-[909px] mx-auto mb-[40px] md:mb-[40px]">
          At Bitpastel, we combine Shopify expertise with modern development practices to help brands build scalable and high-performing ecommerce stores. From store setup to advanced integrations, our team delivers tailored Shopify solutions that align with your business goals.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] max-w-[1207px] mx-auto">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[16px] border p-[15px] md:p-[33px] flex flex-col gap-[15px] h-[296px] mobile-style-admantage"
                style={{
                  borderColor: item.borderColor,
                  boxShadow: '0 0 13.6px 0 rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-[64px] h-[64px] rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <Icon />
                </div>

                {/* Card Title */}
                <h3 className="font-source font-bold text-[20px] leading-[26px] text-[#0F172B]">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="font-roboto font-normal text-[16px] leading-[26px] text-[#45556C] mobile-style-description">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
