"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import TeamBanner from "../../../public/images/team_member_banner.webp"

const TeamEngage = () => {
  const router = useRouter();
   const isNavigating = useRef(false)
  
        const handleNavigation = useCallback((path: string, e: React.MouseEvent) => {
        e.preventDefault()
        if (isNavigating.current) return
        isNavigating.current = true
        router.push(path)
        isNavigating.current = false
      }, [router])


 const handleFindOpportunities = () => {
    // Navigate to careers page with a query parameter
    router.push('/careers/#jobCards');
  };

  return (
    <section className="md:py-[100px] py-[70px]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-tr-[40px] rounded-br-[40px] overflow-hidden lg:mr-0 md:mr-4 mr-4 min-h-[15rem] md:min-h-[auto]">
            <Image
              src={TeamBanner}
              alt="Team collaboration"
              width={711}
              height={406}
              className="w-full md:h-[440px] h-[280px] md:object-unset object-cover md:object-[50%_17%] object-right"
              priority
            />
          </div>
          <div className="lg:ml-0 md:ml-4 ml-4 bg-primary-mint lg:pl-[80px] md:pl-[60px] md:pr-[40px] py-8 px-8 rounded-tl-[40px] rounded-bl-[40px] content-center overflow-hidden">
            <h2 className="md:leading-[40px] leading-[normal] font-source md:font-[600] font-bold title title text-title md:mb-[20px] mb-4">
              Work on awesome Ideas &
              <br />
              Technologies
            </h2>
            <div className='max-w-[500px]'>
              <p className="md:leading-[30px] leading-[20px] text-title">
                At Bitpastel, we create with curiosity. We continue to go forward with an inclusive
                view for creating equal opportunities for all our employees.
              </p>
              <p className="md:leading-[30px] leading-[30px] text-title">
                Visit our <Link className="inline-block underline text-[#009999]" 
                
                 href="/careers"
                // onClick={(e) => handleNavigation("/careers", e)}
                
                >Careers</Link> page to find out about
                open positions.
              </p>
              <button 
                className="btn font-inter mt-6 h-auto font-[400] bg-green-btn" 
               onClick={handleFindOpportunities}
              >
                Find Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamEngage;