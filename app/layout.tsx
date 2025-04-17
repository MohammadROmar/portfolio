import type { Metadata } from 'next';

import Header from '@/components/header';
import NavigationBar from '@/components/nav-bar';
import Footer from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'MohammadROmar',
  description: 'Mohammad Omar personal portfolio',
};

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-ubuntu bg-background1 text-white">
        <div id="toasts" className="toasts"></div>

        <Header />

        <NavigationBar />

        <main className="overflow-x-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
