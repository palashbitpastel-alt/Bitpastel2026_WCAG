// 
// import PartnerOptimized from '@/components/partner/optimizedPartner/OptimizedPartner'
// import React from 'react'

// export default function page() {
//   return (
//     <PartnerOptimized />
//   )
// }



import React from 'react';
import PartnerHero from '@/components/partner/PartnerHero';
import PartnerService from '@/components/partner/PartnerService';
import NewIntegrated from '@/components/partner/NewIntegrated';

export default function PartnerPage() {
  return (
    <>
      <PartnerHero />
      <PartnerService />
      <NewIntegrated />
    </>
  );
}