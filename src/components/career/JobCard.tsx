'use client';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import { jobListings } from '@/data/jobs';

export default function Home() {
  const router = useRouter();
  
  // const scrollToSection = (id: string) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     setTimeout(() => {
  //       window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
  //     }, 100);
  //   }
  // };

  const scrollToSection = (id: string) => {
    // Remove any # from the id if present
    const cleanId = id.replace('#', '');
    const el = document.getElementById(cleanId);
    
    if (el) {
      // Calculate the position considering any fixed headers
      const yOffset = -40; // Adjust this value based on your header height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Cards render straight from the shared list in src/data/jobs.ts, so the
  // openings shown here can never drift from the detail pages or the sitemap.

  const handleApply = (jobTitle: string) => {
    // alert(`Applied for ${jobTitle} position!`);
  };

  const handleApplyClick = (id: string) => {
    // Absolute path: a relative one resolves against the current URL, so from
    // /careers/ it would push /careers/careers/applyJob/<id>.
    router.push(`/careers/applyJob/${id}`); // Navigate to job detail page
  };




  useEffect(() => {
    const handleHashScroll = () => {
      // Check if there's a hash in the URL
      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        const element = document.getElementById(hash);

        if (element) {
          // First scroll to top to ensure consistent behavior
          window.scrollTo(0, 0);

          // Calculate position with offset (adjust -100 for your header height)
          const yOffset = -0;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          // Smooth scroll to the element after a small delay
          setTimeout(() => {
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            });
          }, 100);
        }

        // Strip the hash from the URL so it reads as /careers rather than /careers#jobCards.
        window.history.replaceState(
          null,
          '',
          window.location.pathname + window.location.search
        );
      }
    };

    // Initial scroll handling
    handleHashScroll();

    // Also handle hash changes if they occur without page reload
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);





  return (
    <div className="min-h-screen md:pt-[90px] pt-[70px]" id='jobCards'>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-[30px]">
          <p className="text-title max-w-4xl paragraph mx-auto leading-relaxed md:block inline">
            To apply for any of the current job openings, please go to the respective box below and click on the
            <span className=" font-semibold  text-accent-green">"Apply"</span> button.
          </p>
          <p className="text-title paragraph md:block inline">
            If you don't see any suitable vacancy, send your resume
            <button className="text-accent-green font-medium px-1 hover:text-[#B2B2B2]"
            onClick={() => scrollToSection('#joinTeamForm')}
            >
                here </button>
            and we'll get in touch with you as soon as there is any opening that matches your profile.
          </p>
        </div>
        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center mx-auto grid-card-custom max-w-full">
          {jobListings.map((job, index) => (
            <Card
              key={job.id}
              title={job.title}
              hashtags={job.hashtags}
              experience={job.experience}
              gradientColors={job.gradientColors}
              onApply={() => handleApply(job.title)}
              onClick={() => handleApplyClick(job.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}