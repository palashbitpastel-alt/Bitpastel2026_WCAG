import React from 'react'
import Image from 'next/image'
//import Button from '@/components/ui/Button'
import Map from '../../../public/images/HomeMap.webp'


const SatisfiedClientSection = () => {
      const stats = [
    {
      value: '900',
      label: 'Clients',
      icon: '/images/img_fasolidusers.svg',
      color: 'text-accent-blue',
    },
    {
      value: '1400+',
      label: 'Projects',
      icon: '/images/img_tablerbulbfilled.svg',
      color: 'text-accent-yellow',
    },
    {
      value: '50M',
      label: 'Lines of Code',
      icon: '/images/img_group.svg',
      color: 'text-accent-coral',
    },
    {
      value: '35',
      label: 'Countries',
      icon: '/images/img_tdesignlocationfilled.svg',
      color: 'text-accent-green',
    },
  ];
  return (
    <section className="md:pt-[100px] pt-[64px]" id='client'>
      <div className="container mx-auto px-4">
        <h2 className=" md:leading-[1] font-source md:font-[600] font-[700] text-center text-title title md:mb-8 mb-3">
          Satisfied Clientele Worldwide
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] md:gap-28 gap-4 items-center">
          {/* Map Section - Takes full width on mobile, remaining space on desktop */}
          <div className="relative w-full bg-cover bg-center rounded-lg">
            <Image
              src={Map}
              alt="World Map with Pointers"
              width={998}
              height={574}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Stats Section - Auto width on desktop, full width on mobile */}
          <div className="grid grid-cols-4 h-full md:grid-cols-4 lg:grid-cols-1 md:gap-8 gap-0 lg:pl-12 w-auto items-end">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={34}
                  height={34}
                  className="mx-auto mb-3 md:h-auto h-10"
                />
                <h2 className=" font-source font-bold text-title text-title md:title title leading-[1]">{stat.value}</h2>
                <div className={`font-source md:paragraph text-[13px] md:text-[20px] font-bold ${stat.color}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SatisfiedClientSection
