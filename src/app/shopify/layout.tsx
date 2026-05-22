import { Metadata } from 'next';

export const metadata: Metadata = {
title: 'Shopify X Bitpastel - We Help Brands unlock the Full Potential of Shopify',
  description:
  'Build differentiated Shopify experiences with Bitpastel through scalable development, speed optimization, and AI-driven solutions focused on better conversions.',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico'],
  },
    
};
// export const metadata: Metadata = {
//   title: 'Shopify Horizon Theme Migration - Bitpastel | Fast, AI-Powered Stores',
//   description:
//   'Move to Horizon with Bitpastel. Get seamless Shopify theme migration, custom layouts and AI-driven optimisation for faster, higher-converting e-commerce stores.',
//   icons: {
//     icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
//     shortcut: ['/favicon.ico'],
//   },
    
// };

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}