'use client';
import { useRef } from 'react';
import dynamic from 'next/dynamic';

import type { JobListing } from '@/data/jobs';

// Dynamically import components that might be heavy
const JoinTeam = dynamic(() => import('@/components/JoinTeamForm'));
const JobDetailsBanner = dynamic(() => import('@/components/career/JobDetailsBanner'));
const Common_banner = dynamic(() => import('@/components/ui/Common_banner'));

// Presentation only. The job is resolved on the server in page.tsx so the
// title, description and canonical are correct in the initial HTML, and an
// unknown id returns a real 404 instead of rendering a spinner then bailing.
export default function JobDetailContent({ job }: { job: JobListing }) {
  const formRef = useRef<HTMLDivElement>(null);

  const customBenefits = [
    {
      text: job.hashtags,
      icon: '/job-details/badge.png',
      alt: 'Check icon',
    },
    {
      text: job.experience,
      icon: '/job-details/power_career.png',
      alt: 'Check icon',
    },
    {
      text: job.location ?? 'Location not specified',
      icon: '/job-details/placeholder_career.png',
      alt: 'Check icon',
    },
  ];
  return (
    <>
      <section className='relative'>
        <JobDetailsBanner
          jobTitle={job.title}
          backgroundImage='/images/apply-job.png'
          benefits={customBenefits}
          applyButtonText='Apply Now'
          scrollToId='applicationForm'
          buttonanimation='ripple-btn'
        />
        {/* Job Details Content */}
        {/* className='md:pt-16 pt-12' */}
        <div className='md:pt-[90px] pt-[15px] text-title'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              {' '}
              {/* Added max-width and mx-auto for centering */}
              <div className='inner paragraph font-roboto text-title'>
                <p className='mb-10'>
                  {' '}
                  {/* Added text-center for the description */}
                  {job.description}
                  <br />
                  <br />
                  The current position requires the following skills:
                </p>
                {job.responsibilities && (
                  <div className='flex flex-col md:flex-row gap-[1em] md:gap-8 md:mb-[65px] mb-[30px]'>
                    {' '}
                    {/* Added gap for better spacing */}
                    <div className='md:w-1/3'>
                      <h3 className='subheading font-source font-semibold text-title'>
                        Responsibilities:
                      </h3>
                    </div>
                    <div className='md:w-2/3'>
                      <ul className='list-[circle] pl-5 text-title space-y-2 paragraph font-roboto'>
                        {job.responsibilities.map((skill, index) => (
                          <li className='text-title' key={index}>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {job.requirements && (
                  <div className='flex flex-col md:flex-row gap-[1em] md:gap-8'>
                    {' '}
                    {/* Added gap for better spacing */}
                    <div className='md:w-1/3'>
                      <h3 className='subheading font-source font-semibold text-title'>
                        Technical Skills:
                      </h3>
                    </div>
                    <div className='md:w-2/3'>
                      <ul className='list-[circle] pl-5 text-title space-y-2 paragraph font-roboto'>
                        {job.requirements.map((skill, index) => (
                          <li className='text-title' key={index}>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {job.softSkills && (
                  <div className='flex flex-col md:flex-row gap-[1em] md:gap-8 md:mt-[65px] mt-[30px]'>
                    <div className='md:w-1/3'>
                      <h3 className='subheading font-source font-semibold text-title'>
                        Soft Skills:
                      </h3>
                    </div>
                    <div className='md:w-2/3'>
                      <ul className='list-[circle] pl-5 text-title space-y-2 paragraph font-roboto'>
                        {job.softSkills.map((skill, index) => (
                          <li className='text-title' key={index}>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {job.desiredCandidateProfile && (
                  <div className='flex flex-col md:flex-row gap-[1em] md:gap-8 md:mt-[65px] mt-[30px]'>
                    <div className='md:w-1/3'>
                      <h3 className='subheading font-source font-semibold text-title'>
                        Desired Candidate Profile:
                      </h3>
                    </div>
                    <div className='md:w-2/3'>
                      <ul className='list-[circle] pl-5 text-title space-y-2 paragraph font-roboto'>
                        {job.desiredCandidateProfile.map((profile, index) => (
                          <li className='text-title' key={index}>
                            {profile}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              {/* Apply Div */}
              <div className='md:pt-[90px] pt-[30px]' ref={formRef}>
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center md:mb-16 mb-[30px] md:pt-[90px] pt-[30px]'>
                  <button
                    className='new-btn-design '
                    onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply Now
                  </button>
                </div>
                <div className='join-team-section' id='applicationForm'>
                  <JoinTeam title='Apply Now' className='md:pt-8 pt-[30px]' jobTitle={job.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Common_banner />
    </>
  );
}