'use client';
import React, { useEffect, useRef } from 'react';
import NewMember from './NewMember';
import NewRefer from './NewRefer';

function NewIntegrated() {
  const formRef = useRef<HTMLDivElement>(null);

  // Optional: If you need to handle hash URLs
  useEffect(() => {
    if (window.location.hash === '#become-a-partner-form' && formRef.current) {
      const y = formRef.current.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='relative parent-container' id="become-a-partner">
      <div className="container px-4 lg:gap-8 mx-auto flex flex-col lg:flex-row">
        <div className="lg:flex-1">
          <NewRefer />
        </div>
        <div 
          className="lg:flex-1" 
          id="become-a-partner-form"
          ref={formRef}
        >
          <NewMember />
        </div>
      </div>
    </div>
  );
}

export default NewIntegrated;