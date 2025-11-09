import { useEffect, useState, useContext } from 'react';
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Script from 'next/script';
import Layout from '../components/Layout';
import { ThemeProvider } from '../components/ThemeContext';
import ChatButton from '../components/ChatButton';

// Wrapper component that has access to the theme
function ThemedApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ChatButton />
    </Layout>
  );
}

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
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
        <ThemedApp Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
