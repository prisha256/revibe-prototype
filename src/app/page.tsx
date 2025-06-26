'use client'; // Required for animations and user interactions

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaCut, FaTags } from 'react-icons/fa';

// --- Navbar Component ---
// Defined right here for simplicity.
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-sans font-extrabold text-primary hover:opacity-75 transition-opacity">
            ReVibe
          </Link>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-secondary hover:text-primary transition-colors duration-300 font-semibold">
              Reviews
            </a>
            <button className="bg-accent text-white font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform">
              Add to Closet
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-base text-secondary">© {new Date().getFullYear()} ReVibe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// --- MAIN HOMEPAGE ---
export default function PrototypePage() {
  return (
    // We use a React Fragment <>...</> to return multiple elements
    <>
      <Navbar />
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-sans font-extrabold text-primary z-10"
          >
            Your Endless Wardrobe.
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-secondary z-10"
          >
            Rent designer pieces, customize your fit, and give your pre-loved items a new life.
          </motion.p>
        </section>

        {/* --- The Three Keyword Cards Section --- */}
        <section className="w-full max-w-6xl mx-auto py-16 px-4">
            <div className="grid md:grid-cols-3 gap-8">
                
                {/* Card 1: Book & Wear */}
                <div className="bg-surface p-8 rounded-xl border border-border flex flex-col text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <FaShoppingBag className="text-3xl text-accent mb-5" />
                    <h3 className="text-2xl font-sans font-bold mb-3 text-primary">Book & Wear</h3>
                    <p className="text-secondary mb-6 flex-grow">Access a curated collection of high-quality fashion for any event. Why buy when you can borrow?</p>
                    <a href="#" className="font-bold text-accent self-start hover:underline">
                        Start Renting →
                    </a>
                </div>

                {/* Card 2: Customize */}
                <div className="bg-surface p-8 rounded-xl border border-border flex flex-col text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <FaCut className="text-3xl text-accent mb-5" />
                    <h3 className="text-2xl font-sans font-bold mb-3 text-primary">Customize</h3>
                    <p className="text-secondary mb-6 flex-grow">(Coming Soon) Our expert tailoring service will offer alterations to make every piece feel perfectly yours.</p>
                     <a href="#" className="font-bold text-gray-400 self-start cursor-not-allowed">
                        Learn More →
                    </a>
                </div>

                {/* Card 3: Resell */}
                <div className="bg-surface p-8 rounded-xl border border-border flex flex-col text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <FaTags className="text-3xl text-accent mb-5" />
                    <h3 className="text-2xl font-sans font-bold mb-3 text-primary">Resell</h3>
                    <p className="text-secondary mb-6 flex-grow">Turn your unworn items into income. Our White Glove service makes it effortless to list and manage your closet.</p>
                     <a href="#" className="font-bold text-accent self-start hover:underline">
                        Become a Partner →
                    </a>
                </div>

            </div>
        </section>
        
      </main>
      <Footer />
    </>
  );
}