import type { Metadata } from 'next';

import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'MohammadROmar',
  description: 'Mohammad Omar personal portfolio',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-background1 text-white">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
export default RootLayout;
