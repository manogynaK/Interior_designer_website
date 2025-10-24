import Link from 'next/link';
import { useTheme } from './ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`border-t transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-dark-primary border-dark-gray-700 text-dark-gray-300'
        : 'bg-white border-gray-200 text-gray-600'
    }`}>
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className={`text-2xl font-serif font-bold mb-4 inline-block ${
              theme === 'dark' ? 'text-dark-accent' : 'text-accent'
            }`}>
              Meghana Interiors
            </Link>
            <p className={`text-sm leading-relaxed mb-4 max-w-md ${
              theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'
            }`}>
              Creating beautiful and functional spaces that reflect your personality and enhance your lifestyle. We specialize in residential and commercial interior design solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-dark-gray-700 text-dark-gray-300 hover:bg-dark-accent hover:text-dark-primary'
                    : 'bg-gray-100 text-gray-600 hover:bg-accent hover:text-white'
                }`}
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-dark-gray-700 text-dark-gray-300 hover:bg-dark-accent hover:text-dark-primary'
                    : 'bg-gray-100 text-gray-600 hover:bg-accent hover:text-white'
                }`}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-dark-gray-700 text-dark-gray-300 hover:bg-dark-accent hover:text-dark-primary'
                    : 'bg-gray-100 text-gray-600 hover:bg-accent hover:text-white'
                }`}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-serif font-bold text-lg mb-4 ${
              theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className={`text-sm hover:text-accent transition-colors ${
                  theme === 'dark' ? 'text-dark-gray-400 hover:text-dark-accent' : 'text-gray-600 hover:text-accent'
                }`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className={`text-sm hover:text-accent transition-colors ${
                  theme === 'dark' ? 'text-dark-gray-400 hover:text-dark-accent' : 'text-gray-600 hover:text-accent'
                }`}>
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`text-sm hover:text-accent transition-colors ${
                  theme === 'dark' ? 'text-dark-gray-400 hover:text-dark-accent' : 'text-gray-600 hover:text-accent'
                }`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`font-serif font-bold text-lg mb-4 ${
              theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
            }`}>
              Services
            </h3>
            <ul className="space-y-2">
              <li className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>
                Residential Design
              </li>
              <li className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>
                Commercial Design
              </li>
              <li className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>
                Space Planning
              </li>
              <li className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>
                3D Visualization
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`border-t pt-8 ${theme === 'dark' ? 'border-dark-gray-700' : 'border-gray-200'}`}>
          <div className="max-w-md mx-auto text-center">
            <h3 className={`font-serif font-bold text-lg mb-2 ${
              theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
            }`}>
              Stay Updated
            </h3>
            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'
            }`}>
              Get the latest design trends and project updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  theme === 'dark'
                    ? 'bg-dark-gray-700 border-dark-gray-600 text-dark-gray-300 placeholder-dark-gray-500'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button className={`bg-accent text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors ${
                theme === 'dark' ? 'shadow-lg shadow-accent/25' : 'shadow-lg'
              }`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t mt-8 pt-6 text-center ${
          theme === 'dark' ? 'border-dark-gray-700' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-500'}`}>
            &copy; {new Date().getFullYear()} Meghana Interiors. All rights reserved. |
            <Link href="#" className={`ml-1 hover:text-accent transition-colors ${
              theme === 'dark' ? 'hover:text-dark-accent' : 'hover:text-accent'
            }`}>
              Privacy Policy
            </Link> |
            <Link href="#" className={`ml-1 hover:text-accent transition-colors ${
              theme === 'dark' ? 'hover:text-dark-accent' : 'hover:text-accent'
            }`}>
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;