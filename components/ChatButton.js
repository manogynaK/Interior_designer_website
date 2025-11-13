import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';
import { useRouter } from 'next/router';

// Default theme values if context is not available
const defaultTheme = {
  theme: 'light',
  dark: false
};

const ChatButton = ({ theme = 'light' }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  const handleClick = () => {
    if (router.pathname === '/contact') {
      // If already on contact page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Otherwise, navigate to contact page
      router.push('/contact');
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={`p-4 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors`}
        aria-label="Contact Us"
      >
        <FiMessageSquare className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default ChatButton;
