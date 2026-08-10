import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/data/site';

// Previously there was no robots.txt at all — the URL 404'd, so crawlers had no
// pointer to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Nothing is disallowed on purpose. The /free-quote routes re-render
      // their parent page with the enquiry modal open and canonicalise to that
      // parent — which is the behaviour we want, and which only works while
      // crawlers can still fetch them and read the canonical tag. Blocking them
      // here would hide that tag and risk them being indexed as bare URLs
      // instead ("Indexed, though blocked by robots.txt").
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
