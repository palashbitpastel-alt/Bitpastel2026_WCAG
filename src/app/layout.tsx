import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Roboto, Source_Sans_3 } from 'next/font/google';
// import 'aos/dist/aos.css';
import '../styles/index.css';

import HeaderOptimized from '@/components/Header';
import FooterOptimized from '@/components/Footer';
import Script from 'next/script';

export const dynamic = 'force-static';
export const revalidate = 3600;

// ✅ Correct viewport export (proper typing)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// ✅ Correct metadata export (proper typing)
export const metadata: Metadata = {
  metadataBase: new URL('https://www.bitpastel.com'),
  title: 'Bitpastel - Shopify Plus Development Agency | AI Transformation & Custom SaaS Solutions',
  description: 'Bitpastel is a software development company specializing in Shopify Plus & e-commerce development, custom SaaS product development, AI transformation & automation, mobile apps, websites, and UI/UX design for startups and enterprises.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  robots: {
    index: true, // ✅ Changed from false - you want to be indexed!
    follow: true, // ✅ Changed from false
  },
};
// const roboto = Roboto({
//   weight: ['100', '300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   preload: true,
//   fallback: ['Arial', 'sans-serif'],
// });

// const sourceSans = Source_Sans_3({
//   weight: ['300', '400', '600', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   preload: true,
//   fallback: ['Arial', 'sans-serif'],
// });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        {/* ✅ Google Tag Manager Script - use afterInteractive for better performance */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N7Z2X3X');
          `}
        </Script>

        {/* Microsoft Clarity Script */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vqv49qxcab");
          `}
        </Script>


      </head>
      <body className="min-h-screen flex flex-col">
        {/* ✅ Google Tag Manager (noscript) - should be right after opening body tag */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7Z2X3X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>

        <HeaderOptimized />
        <main className="flex-grow pb-[88px] lg:pb-0">
          {children}
        </main>
        <FooterOptimized />
      </body>
    </html>
  );
}