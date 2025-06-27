// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
// THIS IS THE CRITICAL IMPORT
import './globals.css';

// We import both fonts now
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'ReVibe',
  description: 'Rethink. Rewear. Revive.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      {/* We apply both fonts and the main text color here */}
      <body className={`${inter.variable} ${playfair.variable} bg-background font-sans text-primary`}>
        {children}
      </body>
    </html>
  );
}