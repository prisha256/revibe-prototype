// src/components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-serif font-bold text-accent hover:opacity-80 transition-opacity">
              Endless Wardrobe
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/reviews" className="text-text-primary hover:text-accent transition-colors duration-300 font-medium">
              Reviews
            </Link>
            <button className="bg-cta text-white font-bold py-2 px-5 rounded-md hover:opacity-90 transition-opacity shadow-sm">
              Add to Closet
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;