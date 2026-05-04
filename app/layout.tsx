import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CasaFix — Servicios verificados para hogares y profesionales',
  description:
    'Marketplace de servicios para el hogar y para profesionales (inmobiliarias, constructoras, arquitectos) con prestadores verificados en barrios privados del GBA Norte.',
  openGraph: {
    title: 'CasaFix — Servicios verificados para hogares y profesionales',
    description:
      'Marketplace de servicios para el hogar y para profesionales (inmobiliarias, constructoras, arquitectos) con prestadores verificados en barrios privados del GBA Norte.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
