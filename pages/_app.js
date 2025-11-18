import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Script from 'next/script';
import Layout from '../components/Layout';
import { ThemeProvider } from '../components/ThemeContext';
import ChatButton from '../components/ChatButton';
import useScrollToTop from '../hooks/useScrollToTop';
import usePageLoad from '../hooks/usePageLoad';
import PageLoader from '../components/PageLoader';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isLoading = usePageLoad();
  const [mounted, setMounted] = useState(false);

  // Use the scroll to top hook
  useScrollToTop();

  // Set mounted state after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <ThemeProvider>
      <>
        {isLoading && <PageLoader />}
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Layout>
            <Component {...pageProps} key={router.asPath} />
            <ChatButton />
          </Layout>
        </AnimatePresence>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
