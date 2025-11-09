import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from './ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  // Safely access theme context
  let theme = 'light';
  let toggleTheme = () => {};
  
  try {
    const themeContext = useTheme();
    theme = themeContext.theme || 'light';
    toggleTheme = themeContext.toggleTheme || (() => {});
  } catch (e) {
    console.warn('Theme context not available, using default theme');
  }

  // Function to determine active section based on current route
  const getActiveSection = (pathname, hash) => {
    if (pathname === '/contact' || pathname.includes('/contact')) {
      return 'contact';
    } else if (pathname === '/work' || pathname.includes('/work')) {
      return 'work';
    } else if (pathname === '/machinery' || pathname.includes('/machinery')) {
      return 'machinery';
    } else if (hash.includes('about')) {
      return 'about';
    } else {
      return 'home';
    }
  };

  useEffect(() => {
    setMounted(true);

    // Set initial active section based on current route
    setActiveSection(getActiveSection(router.pathname, router.asPath));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only update active section based on scroll if we're on the home page
      // This prevents scroll detection from overriding route-based active states
      if (router.pathname === '/') {
        // Update active section based on scroll position
        const sections = ['home', 'about', 'work', 'machinery', 'testimonials', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    // Handle route changes
    const handleRouteChange = (url) => {
      const [pathname, hash] = url.split('#');
      setActiveSection(getActiveSection(pathname, hash || ''));
      // Close mobile menu on route change
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.pathname, router.asPath]);

  // Prevent hydration mismatch by not rendering until mounted
  if (typeof window === 'undefined' || !mounted) {
    return (
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-2xl dark:bg-dark-primary/95"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl md:text-2xl font-serif font-bold">
              <Link href="/" className="text-accent dark:text-dark-accent">
                SB Home Zone
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {/* Theme Toggle for Mobile */}
              <button
                onClick={toggleTheme}
                className="md:hidden p-2 rounded-full focus:outline-none"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <FiSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse md:hidden"></div>
            </div>
          </div>
        </div>
      </motion.header>
    );
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mounted && isScrolled
            ? theme === 'dark'
              ? 'bg-dark-primary/95 backdrop-blur-md shadow-2xl'
              : 'bg-white/95 backdrop-blur-md shadow-2xl'
            : theme === 'dark'
              ? 'bg-dark-primary/80 backdrop-blur-sm'
              : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl md:text-2xl font-serif font-bold">
              <Link href="/" className={mounted ? (theme === 'dark' ? 'text-dark-accent' : 'text-accent') : 'text-accent'}>
                SB Home Zone
              </Link>
            </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-sans text-lg">
            <li>
              <Link
                href="/"
                className={`relative transition-all hover:scale-105 transform duration-200 ${
                  mounted && activeSection === 'home'
                    ? theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                    : mounted
                      ? (theme === 'dark' ? 'text-dark-gray-300 hover:text-dark-accent' : 'text-gray-600 hover:text-accent')
                      : 'text-gray-600 hover:text-accent'
                }`}
              >
                Home
                {mounted && activeSection === 'home' && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className={`relative transition-all hover:scale-105 transform duration-200 ${
                  mounted && activeSection === 'work'
                    ? theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                    : mounted
                      ? (theme === 'dark' ? 'text-dark-gray-300 hover:text-dark-accent' : 'text-gray-600 hover:text-accent')
                      : 'text-gray-600 hover:text-accent'
                }`}
              >
                Our Work
                {mounted && activeSection === 'work' && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
            <li>
              <Link
                href="/machinery"
                className={`relative transition-all hover:scale-105 transform duration-200 ${
                  mounted && activeSection === 'machinery'
                    ? theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                    : mounted
                      ? (theme === 'dark' ? 'text-dark-gray-300 hover:text-dark-accent' : 'text-gray-600 hover:text-accent')
                      : 'text-gray-600 hover:text-accent'
                }`}
              >
                Machinery
                {mounted && activeSection === 'machinery' && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className={`relative transition-all hover:scale-105 transform duration-200 ${
                  mounted && activeSection === 'about'
                    ? theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                    : mounted
                      ? (theme === 'dark' ? 'text-dark-gray-300 hover:text-dark-accent' : 'text-gray-600 hover:text-accent')
                      : 'text-gray-600 hover:text-accent'
                }`}
              >
                About
                {mounted && activeSection === 'about' && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`relative transition-all hover:scale-105 transform duration-200 ${
                  mounted && activeSection === 'contact'
                    ? theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                    : mounted
                      ? (theme === 'dark' ? 'text-dark-gray-300 hover:text-dark-accent' : 'text-gray-600 hover:text-accent')
                      : 'text-gray-600 hover:text-accent'
                }`}
              >
                Contact
                {mounted && activeSection === 'contact' && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
            <li className="flex items-center ml-4">
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
                style={{
                  backgroundColor: theme === 'dark' ? '#4f46e5' : '#d1d5db',
                }}
              >
                <span className="sr-only">Toggle theme</span>
                <span
                  className={`${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200`}
                >
                  {theme === 'dark' ? (
                    <FiSun className="h-3 w-3 text-yellow-500 m-0.5" />
                  ) : (
                    <FiMoon className="h-3 w-3 text-gray-600 m-0.5" />
                  )}
                </span>
              </button>
            </li>
          </ul>
        </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
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
          </div>
        </motion.header>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden fixed top-20 left-0 right-0 z-40 ${
              mounted
                ? (theme === 'dark' ? 'bg-dark-primary/95' : 'bg-white/95')
                : 'bg-white/95'
            }`}
          >
          <nav className="container mx-auto px-6 py-4">
            <ul className={`flex flex-col space-y-4 font-sans text-lg ${
              mounted
                ? (theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600')
                : 'text-gray-600'
            }`}>
              <li>
                <Link
                  href="/"
                  className={`relative block hover:scale-105 transform duration-200 ${
                    mounted && activeSection === 'home'
                      ? theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                      : 'hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                  {mounted && activeSection === 'home' && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className={`relative block hover:scale-105 transform duration-200 ${
                    mounted && activeSection === 'about'
                      ? theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                      : 'hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                  {mounted && activeSection === 'about' && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={`relative block hover:scale-105 transform duration-200 ${
                    mounted && activeSection === 'work'
                      ? theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                      : 'hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Work
                  {mounted && activeSection === 'work' && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/machinery"
                  className={`relative block hover:scale-105 transform duration-200 ${
                    mounted && activeSection === 'machinery'
                      ? theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                      : 'hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Machinery
                  {mounted && activeSection === 'machinery' && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`relative block hover:scale-105 transform duration-200 ${
                    mounted && activeSection === 'contact'
                      ? theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                      : 'hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                  {mounted && activeSection === 'contact' && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            </ul>
            </nav>
          </motion.div>
        )}
      </>
  );
};

export default Header;