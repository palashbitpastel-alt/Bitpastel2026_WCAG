// app/services/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Life at Bitpastel - Caffeine, Code & Confetti',
  description: 'Peek inside Bitpastel: serious about quality, unserious about boredom. From town halls to coffee breaks, see how our teams work, laugh and ship together.',
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