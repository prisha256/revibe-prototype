// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

// THIS IS THE CRITICAL LINE THAT CONNECTS YOUR CSS
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ReVibe', // Updated title
  description: 'Rent designer pieces, customize your fit, and give your pre-loved items a new life.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We apply the fonts and background color here */}
      <body className={`${inter.variable} bg-background font-sans text-primary`}>
        {children}
      </body>
    </html>
  );
}