import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Space_Grotesk, Source_Code_Pro } from 'next/font/google';

export const metadata: Metadata = {
  title: 'ANAS SBIHI Showcase',
  description: 'Digital Environment & Asset Artist Portfolio',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  weight: ['400'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${sourceCodePro.variable} scroll-smooth`}>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
        <Toaster />
        <Script src="https://player.vimeo.com/api/player.js" />
      </body>
    </html>
  );
}
