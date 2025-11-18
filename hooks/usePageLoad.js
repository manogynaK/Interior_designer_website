import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function usePageLoad() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      // Only set loading if it's a new page
      if (url !== router.asPath) {
        setIsLoading(true);
        // Scroll to top when starting navigation
        window.scrollTo(0, 0);
      }
    };

    const handleComplete = (url) => {
      // Only proceed if the URL has changed
      if (url === router.asPath) {
        // Small delay to ensure smooth transition
        setTimeout(() => {
          setIsLoading(false);
          // Ensure we're at the top after load
          window.scrollTo(0, 0);
        }, 100);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Set loading to false after initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0); // Ensure initial load scrolls to top
    }, 300);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
      clearTimeout(timer);
    };
  }, [router]);

  return isLoading;
}
