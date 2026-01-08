import { Metadata } from 'next';
export const metadata: Metadata = {
 title: 'Bitpastel Partner Program - Refer & Grow Together',
  description: 'Join Bitpastel as a partner and unlock new business opportunities - refer web, mobile and SaaS projects. Enjoy simple referrals, transparent reward tracking and easy redemption.',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico'],
  },
};


export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}