import dynamic from 'next/dynamic';
import TeamBanner from '@/components/team/TeamBanner';
import TeamEngage from '@/components/team/TeamEngage';
import { Suspense } from 'react';
import TeamTestimonialNew from '@/components/team/TeamTestimonialNew';
import MobileTeamCollage from '@/components/team/MobileTeamCollage';
import TeamCollageNew from '@/components/team/TeamCollageNew';
import SnowfallAnimation from '@/components/SnowfallAnimation';

// Dynamically import components with loading states
// const TeamTestimonialNew = dynamic(
//   () => import('@/components/team/TeamTestimonialNew'),
//   {
//     suspense: true,
//     loading: () => <div className="h-64 bg-gray-50 animate-pulse"></div>
//   }
// );

// const MobileTeamCollage = dynamic(
//   () => import('@/components/team/MobileTeamCollage'),
//   {
//     suspense: true,
//     loading: () => <div className="h-64 md:hidden bg-gray-50 animate-pulse"></div>
//   }
// );

// const TeamCollageNew = dynamic(
//   () => import('@/components/team/TeamCollageNew'),
//   {
//     suspense: true,
//     loading: () => <div className="hidden md:block h-96 bg-gray-50 animate-pulse"></div>
//   }
// );

export default function TeamPage() {
  return (
    
    <div className="relative bg-white">
      
      {/* Above-the-fold content loaded immediately */}
      <TeamBanner />

      {/* <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse"></div>}> */}
      <TeamTestimonialNew />
      {/* </Suspense> */}

      <div id="OurTeam">
        {/* Mobile version - only loaded when needed */}
        <div className="block md:hidden">
          {/* <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse"></div>}> */}
          <MobileTeamCollage />
          {/* </Suspense>  */}
        </div>

        {/* Desktop version - only loaded when needed */}
        <div className="hidden md:block">
          {/* <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse">
            
          </div>
          } */}
          {/* > */}
          <TeamCollageNew />

          {/* </Suspense> */}
        </div>
      </div>

      {/* Below-the-fold content */}
      {/* <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse"></div>}> */}
      <TeamEngage />
     
      {/* </Suspense> */}
    </div>
  );
}