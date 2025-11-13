import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Script from 'next/script';
import Layout from '../components/Layout';
import { ThemeProvider } from '../components/ThemeContext';
import ChatButton from '../components/ChatButton';
import useScrollToTop from '../hooks/useScrollToTop';

// Wrapper component that has access to the theme
function ThemedApp({ Component, pageProps }) {
  // Use the scroll to top hook
  useScrollToTop();
  
  return (
    <Layout>
      <Component {...pageProps} />
      <ChatButton />
    </Layout>
  );
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Handle scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Subscribe to route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Initial scroll to top
    window.scrollTo(0, 0);
    setMounted(true);

    // Cleanup
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_MEASUREMENT_ID');
          `,
        }}
      />
      <ThemeProvider>
        <ThemedApp Component={Component} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
