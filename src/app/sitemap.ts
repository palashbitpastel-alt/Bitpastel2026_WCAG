import type { MetadataRoute } from 'next';

import { jobListings } from '@/data/jobs';
import { SITE_URL } from '@/data/site';

// Replaces the old hand-maintained public/sitemap.xml, which had gone stale
// (lastmod stuck at 2025-11-11) and was missing /portfolio and every job page.
// Generating it means a route can never be forgotten again.
//
// Deliberately excluded: the /free-quote routes, which canonicalise to their
// parent page, and /home, which 308s to / (see next.config.mjs).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/shopify`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/partners`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/culture`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/careers`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const jobs: MetadataRoute.Sitemap = jobListings.map(job => ({
    url: `${SITE_URL}/careers/applyJob/${job.id}`,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  return [...pages, ...jobs].map(entry => ({ ...entry, lastModified }));
}
