import React from 'react'
import Image from 'next/image'
//import Button from '@/components/ui/Button'
import Map from '../../../public/images/HomeMap.webp'


const SatisfiedClientSection = () => {
      const stats = [
    {
      value: '900',
      label: 'Clients',
      icon: '/images/stat-clients.svg',
      color: 'text-accent-blue',
      borderColor: '#0D9EBF4D',
    },
    {
      value: '1400+',
      label: 'Projects',
      icon: '/images/stat-projects.svg',
      color: 'text-accent-yellow',
      borderColor: '#B48D0E4D',
    },
    {
      value: '50M',
      label: 'Lines of Code',
      icon: '/images/stat-lines-of-code.svg',
      color: 'text-accent-coral',
      borderColor: '#F245534D',
    },
    {
      value: '35',
      label: 'Countries',
      icon: '/images/stat-countries.svg',
      color: 'text-accent-green',
      borderColor: '#29996A4D',
    },
  ];
  return (
    <section className="md:pt-[100px] pt-[64px]" id='client'>
      <div className="container mx-auto px-4">
        <h2 className=" md:leading-[1] font-source md:font-[600] font-[700] text-center text-title title md:mb-8 mb-3">
          Satisfied Clientele Worldwide
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr] md:gap-[28px] gap-4 items-center">

          {/* Stats Section - Auto width on desktop, full width on mobile */}
          <div className="grid grid-cols-4 h-full md:grid-cols-4 lg:grid-cols-4 md:gap-[24px] gap-[12px] w-auto items-end">
            {/* card-element text-center transition-shadow duration-300m md:min-w-[275px] min-w-[unset] cursor-pointer md:py-8 pt-[20px] pb-8 md:bg-transparent bg-primary-yellow-light border-1 borde md:rounded rounded-[20px] md:min-h-full min-h-[160px] */}
                        
                        
            {stats.map((stat, index) => (
              <div key={index} className="text-center content-center md:min-h-[153px] h-full border md:rounded-[20px] rounded-[20px] md:p-[20px] p-[10px] shadow-[1px_2px_18px_0px_#00000014]" style={{ borderColor: stat.borderColor }}>
                <Image
                  src={stat.icon}
                  alt=""
                  aria-hidden="true"
                  width={62}
                  height={62}
                  className="mx-auto md:mb-6 mb-2 md:h-auto md:max-w-[60px] md:min-w-[40px] h-[30px] md:w-auto w-[30px]"
                />
                <div className='flex md:flex-row flex-col md:gap-[8px] gap-[2px] justify-center items-center'>
                <p className="m-0 leading-none font-source font-bold text-[#222B32] md:text-[28px] text-[23px]">{stat.value}</p>
                <div className={`leading-none font-source text-[13px] text-[#222B32] md:text-[24px]`}>{stat.label}</div>
                {/* <div className={`leading-none font-source text-[13px] text-[#222B32] md:text-[24px] font-bold ${stat.color}`}>{stat.label}</div> */}
              </div>
              </div>
            ))}
          </div>


          {/* Map Section - Takes full width on mobile, remaining space on desktop */}
          <div className="relative w-full bg-cover bg-center rounded-lg">
            <Image
              src={Map}
              alt="World map with location pins marking client locations across North America, South America, Europe, the Middle East, Asia, Africa and Australia"
              width={998}
              height={574}
              className="w-full h-full object-contain"
            />
          </div>



        </div>
      </div>
    </section>
  )
}

export default SatisfiedClientSection
