import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTheme } from './ThemeContext';

export default function PageLoader() {
  const { theme } = useTheme();
  
  // Force scroll to top when loader mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <motion.div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        theme === 'dark' ? 'bg-dark-background' : 'bg-white'
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="relative">
        <motion.div
          className={`w-16 h-16 rounded-full ${
            theme === 'dark' ? 'border-t-dark-accent border-r-dark-accent' : 'border-t-accent border-r-accent'
          } border-4 border-transparent`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <div className={`absolute inset-0 flex items-center justify-center text-sm font-medium ${
          theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
        }`}>
          Loading...
        </div>
      </div>
    </motion.div>
  );
}
