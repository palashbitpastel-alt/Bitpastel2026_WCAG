import HomePageComponent from '@/components/home/HomePageComponent';

export const revalidate = 86400;          // 24 h
export const fetchCache = 'force-cache';  // Next.js 13+ opt-in to edge-cache
export const runtime = 'nodejs';        // or 'edge' if you deploy to Vercel Edge

export default function HomePage() {
  return <HomePageComponent />;
}
