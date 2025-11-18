import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

export default function useScrollToTop() {
  const router = useRouter();

  const scrollToTop = useCallback(() => {
    try {
      // Try different methods to ensure it works
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // If we're at the top, scroll up a tiny bit and back to trigger any lazy loading
      if (window.pageYOffset === 0) {
        window.scrollBy(0, 1);
        setTimeout(() => window.scrollTo(0, 0), 0);
      }
    } catch (e) {
      console.error('Error scrolling to top:', e);
    }
  }, []);

  useEffect(() => {
    // Scroll immediately
    scrollToTop();
    
    // Scroll after a short delay to ensure all content is loaded
    const timer1 = setTimeout(scrollToTop, 50);
    const timer2 = setTimeout(scrollToTop, 150);
    const timer3 = setTimeout(scrollToTop, 300);
    
    // Handle browser back/forward
    const handlePopState = () => {
      scrollToTop();
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // Cleanup
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router.asPath, scrollToTop]);

  return null;
}
