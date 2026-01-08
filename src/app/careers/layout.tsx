import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bitpastel Careers - Build Meaningful Products in Tech',
  description:
  'Explore Bitpastel careers in web, mobile, SaaS and product design. Join a curious team building global e-commerce and custom software solutions.',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico'],
  },
    
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
