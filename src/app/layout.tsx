import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, DM_Serif_Display } from 'next/font/google';

export const metadata: Metadata = {
  title: 'ANAS SBIHI Showcase',
  description: 'Digital Environment & Asset Artist Portfolio',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: ['400'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable} scroll-smooth dark`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Script src="https://player.vimeo.com/api/player.js" />
      </body>
    </html>
  );
}
