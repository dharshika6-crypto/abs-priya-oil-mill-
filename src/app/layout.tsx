'use client';

import React, { useEffect, useState } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LoadingAnimation from '@/components/LoadingAnimation';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ABS PRIYA OIL MILL - 100% Pure Traditional Marachekku (Wood Pressed) Oils from Tamil Nadu, India" />
        <meta name="keywords" content="Marachekku Oil, Wood Pressed Oil, Groundnut Oil, Coconut Oil, Sesame Oil, Tamil Nadu" />
        <meta property="og:title" content="ABS PRIYA OIL MILL - 100% Pure Traditional Marachekku Oils" />
        <meta property="og:description" content="Premium traditional wood-pressed oils without chemicals" />
        <meta property="og:type" content="business.business" />
        <title>ABS PRIYA OIL MILL - 100% Pure Traditional Marachekku Oils</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white dark:bg-dark text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          {isLoading && <LoadingAnimation />}
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
