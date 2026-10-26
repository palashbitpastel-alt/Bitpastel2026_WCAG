import HomePageComponent from '@/components/home/HomePageComponent';

export const revalidate = 86400; // 24 hours
export const fetchCache = 'force-cache';
export const runtime = 'nodejs';

export default function HomePage() {
  return <HomePageComponent />;
}