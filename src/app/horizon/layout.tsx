import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Horizon Theme Migration - Bitpastel | Fast, AI-Powered Stores',
  description:
  'Move to Horizon with Bitpastel. Get seamless Shopify theme migration, custom layouts and AI-driven optimisation for faster, higher-converting e-commerce stores.',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico'],
  },
    
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}