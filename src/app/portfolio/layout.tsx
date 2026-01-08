 
 
 import { Metadata } from 'next';
export const metadata: Metadata = {
 title: 'Bitpastel Portfolio – Innovative Shopify Plus & E-commerce Solutions',
  description: 'Explore Bitpastel’s portfolio showcasing cutting-edge Shopify Plus stores, custom e-commerce solutions, and digital transformation success stories. See how we help businesses thrive online.',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico'],
  },

 keywords: [
    'Shopify Plus portfolio',
    'E-commerce case studies',
    'Web development projects',
    'Digital transformation examples',
    'Bitpastel work samples'
  ]
  };

  export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}