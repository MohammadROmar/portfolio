import type { Metadata } from 'next';

import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'MohammadROmar',
  description: 'Mohammad Omar personal portfolio',
};

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className="antialiased font-ubuntu bg-background1 text-white">
        <Header />

        <main className="spacing-x">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
