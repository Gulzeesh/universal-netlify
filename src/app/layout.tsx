import type { Metadata } from 'next';
import { DM_Sans, Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Tabs from '@/components/Tabs';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  preload: true,
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  preload: true,
});

const akira = localFont({
  src: '../../public/fonts/akira-expanded.otf',
  variable: '--font-akira',
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Solar Square',
  description: 'Your solar calculator PWA',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/pwa-icons/icon-512x512.png' },
    { rel: 'apple-touch-icon', url: '/pwa-icons/icon-512x512.png' },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${dmSans.variable} ${poppins.variable} ${akira.variable} overflow-hidden`}
      >
        {children}
        <Tabs />
      </body>
    </html>
  );
}
