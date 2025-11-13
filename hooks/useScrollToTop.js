import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useScrollToTop() {
  const { pathname } = useRouter();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
