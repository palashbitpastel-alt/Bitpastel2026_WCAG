import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getJobById, jobListings } from '@/data/jobs';
import JobDetailContent from './JobDetailContent';

// Only the ids in jobListings are valid. dynamicParams: false makes Next.js
// answer anything else with a real 404 status instead of a 200 that renders a
// client-side not-found — Search Console reports those 200s as soft 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return jobListings.map(job => ({ id: job.id }));
}

// Google truncates around 155-160 characters, so trim on a word boundary.
function truncate(text: string, max = 155): string {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(' ', max)).trimEnd()}…`;
}

// Without this, every job page inherits title/description/canonical from
// src/app/careers/layout.tsx and declares itself a duplicate of /careers, so
// Google indexes /careers instead and the listing never appears in search.
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const job = getJobById(params.id);
  if (!job) return {};

  return {
    title: `${job.title} - Careers at Bitpastel`,
    description: truncate(
      job.location
        ? `${job.title} (${job.experience}) at Bitpastel, ${job.location}. ${job.description}`
        : `${job.title} (${job.experience}) at Bitpastel. ${job.description}`
    ),
    alternates: {
      canonical: `/careers/applyJob/${job.id}`,
    },
  };
}

export default function JobDetail({ params }: { params: { id: string } }) {
  const job = getJobById(params.id);
  if (!job) {
    notFound(); // throws
    return null; // unreachable, but narrows `job` without relying on the never type
  }

  return <JobDetailContent job={job} />;
}