import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from './ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  // Access theme context
  const { theme, toggleTheme } = useTheme();

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
            <div className="flex items-center">
              <div className="text-xl md:text-2xl font-serif font-bold">
                <Link href="/" className="text-accent dark:text-dark-accent">
                  SB Home Zone
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    );
  }

  return (
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-balsamic/95 backdrop-blur-md shadow-md border-b border-iron/50 py-2'
              : 'bg-white/95 backdrop-blur-md shadow-md border-b border-flagstone/50 py-2'
            : theme === 'dark'
              ? 'bg-balsamic/90 backdrop-blur-sm border-b border-iron/20 py-2'
              : 'bg-white/90 backdrop-blur-sm border-b border-flagstone/20 py-2'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {/* Logo with Text */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 md:w-16 md:h-16 relative">
                  <Link href="/">
                    <Image 
                      src="https://i.postimg.cc/9MxT22GX/logo-meghana.jpg" 
                      alt="SB Home Zone Logo" 
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <h1 className={`text-base sm:text-lg font-bold font-serif ${
                      theme === 'dark' 
                        ? 'text-flagstone hover:text-tin' 
                        : 'text-balsamic hover:text-lucky-grey'
                    } transition-all duration-200 transform hover:scale-105`}>
                      SB Home Zone
                    </h1>
                  </Link>
                </div>
              </div>
            </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-sans text-lg">
            <li>
              <Link
                href="/"
                className={`relative transition-all hover:scale-105 transform duration-200 ${
                  activeSection === 'home'
                    ? theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
                    : theme === 'dark' 
                      ? 'text-tin hover:text-flagstone' 
                      : 'text-lucky-grey hover:text-balsamic'
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
                  activeSection === 'work'
                    ? theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
                    : theme === 'dark' 
                      ? 'text-tin hover:text-flagstone' 
                      : 'text-lucky-grey hover:text-balsamic'
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
                  activeSection === 'machinery'
                    ? theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
                    : theme === 'dark' 
                      ? 'text-tin hover:text-flagstone' 
                      : 'text-lucky-grey hover:text-balsamic'
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
                  activeSection === 'about'
                    ? theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
                    : theme === 'dark' 
                      ? 'text-tin hover:text-flagstone' 
                      : 'text-lucky-grey hover:text-balsamic'
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
                onClick={(e) => {
                  // Only handle the click if we're already on the contact page
                  if (router.pathname === '/contact') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`relative transition-all hover:scale-105 transform duration-200 ${
                  activeSection === 'contact'
                    ? theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
                    : theme === 'dark' 
                      ? 'text-tin hover:text-flagstone' 
                      : 'text-lucky-grey hover:text-balsamic'
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
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  theme === 'dark' ? 'bg-iron' : 'bg-flagstone'
                }`}
              >
                <span className="sr-only">Toggle theme</span>
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                >
                  {theme === 'dark' ? (
                    <FiSun className="h-3 w-3 m-1 text-flagstone" />
                  ) : (
                    <FiMoon className="h-3 w-3 m-1 text-iron" />
                  )}
                </span>
              </button>
            </li>
          </ul>
        </nav>
          {/* Mobile Menu Button and Theme Toggle - Only visible on mobile */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <FiSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            <button
              className="p-2 rounded-md focus:outline-none"
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
          </div>
        </motion.header>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Navigation Drawer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden fixed top-20 left-0 right-0 z-40 shadow-xl ${
              theme === 'dark' ? 'bg-dark-primary/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'
            }`}
          >
            <nav className="container mx-auto px-6 py-4">
              <ul className={`flex flex-col space-y-4 font-sans text-lg ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>
                  <Link
                    href="/"
                    className={`relative block hover:scale-105 transform duration-200 ${
                      activeSection === 'home'
                        ? theme === 'dark' ? 'text-white' : 'text-accent'
                        : theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-accent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                    {activeSection === 'home' && (
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
                      activeSection === 'about'
                        ? theme === 'dark' ? 'text-white' : 'text-accent'
                        : theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-accent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                    {activeSection === 'about' && (
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
                      ? theme === 'dark' ? 'text-white' : 'text-accent'
                      : theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-accent'
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
                      ? theme === 'dark' ? 'text-white' : 'text-accent'
                      : theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-accent'
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
                      ? theme === 'dark' ? 'text-white' : 'text-accent'
                      : theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-accent'
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
            </nav>
          </motion.div>
        </>
      )}
    </motion.header>
                </li>
                <li>
                  <Link
                    href="/work"
                    className={`relative block hover:scale-105 transform duration-200 ${
                      activeSection === 'work'
                        ? theme === 'dark' ? 'text-white' : 'text-accent'
                        : theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-accent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Work
                    {activeSection === 'work' && (
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
                      activeSection === 'machinery'
                        ? theme === 'dark' ? 'text-white' : 'text-accent'
                        : theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-accent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Machinery
                    {activeSection === 'machinery' && (
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
                      activeSection === 'contact'
                        ? theme === 'dark' ? 'text-white' : 'text-accent'
                        : theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-accent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                    {activeSection === 'contact' && (
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
        </>
      )}
    </>
  );
};

export default Header;