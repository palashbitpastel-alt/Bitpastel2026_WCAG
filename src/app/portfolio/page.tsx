// import PortfolioOptimized from '@/components/portfolio/optimizedPortfolio/OptimizedPortfolio'
// import React from 'react'

// export default function page() {
//   return (
//     <PortfolioOptimized />
//   )
// }



import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import OurProjects from "@/components/portfolio/OurProjects";
// // Dynamically import components with loading states
// const PortfolioBanner = dynamic(() => import(''), {
//   suspense: true,
//   loading: () => <div className="min-h-[100dvh] bg-gray-50 animate-pulse" />
// });

// const OurProjects = dynamic(() => import('@/components/portfolio/OurProjects'), {
//   suspense: true,
//   loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
// });

const MainPortfolio = () => {
  return (
    <div>
      {/* <Suspense fallback={<div className="min-h-[70vh] bg-gray-50 animate-pulse" />}> */}
        <PortfolioBanner />
      {/* </Suspense> */}

      {/* <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}> */}
        <OurProjects />
      {/* </Suspense> */}
    </div>
  );
};

export default MainPortfolio;