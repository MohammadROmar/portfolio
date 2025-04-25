import type { Metadata } from 'next';
import { Ubuntu, IBM_Plex_Mono } from 'next/font/google';

import Header from '@/components/header';
import NavigationBar from '@/components/nav-bar';
import Footer from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'MohammadROmar',
  description: 'Mohammad Omar personal portfolio',
};

const ubuntuFont = Ubuntu({
  preload: true,
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

const ibmPlexMonoFont = IBM_Plex_Mono({
  preload: true,
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
});

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased ${ubuntuFont.variable} ${ibmPlexMonoFont.variable} font-ubuntu bg-background1 text-white`}
      >
        <div id="toasts" />

        <Header />

        <NavigationBar />

        <main className="overflow-x-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
