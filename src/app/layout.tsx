import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Untitled UI - Banking Technology',
  description: 'Simple, transparent banking. No hidden fees and free overdrafts. Banking technology that has your back.',
  keywords: ['banking', 'fintech', 'credit cards', 'financial technology', 'digital banking'],
  authors: [{ name: 'Untitled UI' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Untitled UI - Banking Technology',
    description: 'Simple, transparent banking. No hidden fees and free overdrafts.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Untitled UI - Banking Technology',
    description: 'Simple, transparent banking. No hidden fees and free overdrafts.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}