// src/components/Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Navigate</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/rent" className="text-base text-gray-600 hover:text-accent">Rent</Link></li>
              <li><Link href="/reviews" className="text-base text-gray-600 hover:text-accent">Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-4">
               <li><a href="#" className="text-base text-gray-600 hover:text-accent">Our Mission</a></li>
               <li><a href="#" className="text-base text-gray-600 hover:text-accent">Consign With Us</a></li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-500">© {new Date().getFullYear()} Endless Wardrobe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;