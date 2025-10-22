import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-serif font-bold text-accent">
          <Link href="/">Meghana Interiors</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-sans text-lg text-secondary/80">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/work" className="hover:text-accent transition-colors">Our Work</Link></li>
            <li><Link href="/machinery" className="hover:text-accent transition-colors">Machinery</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary/80 hover:text-accent transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-primary/95 backdrop-blur-sm border-t border-light-gray"
        >
          <nav className="container mx-auto px-6 py-4">
            <ul className="flex flex-col space-y-4 font-sans text-lg text-secondary/80">
              <li><Link href="/" className="block hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link href="/work" className="block hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Our Work</Link></li>
              <li><Link href="/machinery" className="block hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Machinery</Link></li>
              <li><Link href="/contact" className="block hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;