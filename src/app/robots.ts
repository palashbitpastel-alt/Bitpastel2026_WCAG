import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/data/site';

// Previously there was no robots.txt at all — the URL 404'd, so crawlers had no
// pointer to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The /free-quote routes re-render their parent page with the enquiry
      // modal open. They already canonicalise to the parent, which is what we
      // want; this just saves the crawl budget spent rediscovering that.
      disallow: ['/free-quote', '/careers/free-quote', '/culture/free-quote', '/shopify/free-quote'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
