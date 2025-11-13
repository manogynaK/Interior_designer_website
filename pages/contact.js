import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTheme } from '../components/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  // Force scroll to top when component mounts
  useEffect(() => {
    // Function to handle scrolling
    const scrollToTop = () => {
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
    };

    // Scroll immediately
    scrollToTop();
    
    // Scroll after a short delay to ensure all content is loaded
    const timer1 = setTimeout(scrollToTop, 50);
    const timer2 = setTimeout(scrollToTop, 150);
    const timer3 = setTimeout(scrollToTop, 300);
    
    // Handle browser back/forward
    window.onpopstate = () => {
      scrollToTop();
    };
    
    // Also handle route changes
    const handleRouteChange = () => {
      scrollToTop();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.onpopstate = null;
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ name: '', email: '', message: '', phone: '' });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div id="contact" className={`py-12 pt-24 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-dark-primary text-dark-secondary' : 'bg-white text-secondary'
    }`}>
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-8 md:mb-16 ${
            theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
          }`}
        >
          Contact Us
        </motion.h1>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className={`text-2xl sm:text-3xl font-serif font-bold mb-4 ${
              theme === 'dark' ? 'text-dark-accent' : 'text-accent'
            }`}>
              Get in Touch
            </h2>
            <p className={`font-sans mb-6 ${
              theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600'
            }`}>
              Have a project in mind? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-dark-gray-700' : 'bg-gray-50'} hover:shadow-md transition-shadow`}>
                <h3 className="font-bold text-lg mb-2">Nellore</h3>
                <a 
                  href="https://maps.app.goo.gl/bxTonSiAKzQP9S1a6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Map
                </a>
              </div>

              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-dark-gray-700' : 'bg-gray-50'} hover:shadow-md transition-shadow`}>
                <h3 className="font-bold text-lg mb-2">Hyderabad</h3>
                <a 
                  href="https://www.google.com/maps/search/sb+home+zone+hyderabad/@17.4764322,78.2995605,15z/data=!3m1!4b1?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Map
                </a>
              </div>

              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-dark-gray-700' : 'bg-gray-50'} hover:shadow-md transition-shadow`}>
                <h3 className="font-bold text-lg mb-2">Tirupati</h3>
                <a 
                  href="https://maps.app.goo.gl/def789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Map
                </a>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-dark-gray-600">
                <p className={`font-sans ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'} mb-2`}>
                  <strong>Email:</strong> Subbanachari1@gmail.com
                </p>
                <p className={`font-sans ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>
                  <strong>Phone:</strong> +91 123 456 7890
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className={`p-6 md:p-8 rounded-lg shadow-sm border ${
              theme === 'dark'
                ? 'bg-dark-gray-100 border-dark-gray-700'
                : 'bg-white border-gray-200'
            }`}>
              <div className="mb-4">
                <label htmlFor="name" className={`block font-sans mb-2 ${
                  theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded border text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    theme === 'dark'
                      ? 'bg-dark-gray-700 border-dark-gray-600 text-dark-gray-300'
                      : 'bg-white border-gray-300'
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className={`block font-sans mb-2 ${
                  theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded border text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    theme === 'dark'
                      ? 'bg-dark-gray-700 border-dark-gray-600 text-dark-gray-300'
                      : 'bg-white border-gray-300'
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className={`block font-sans mb-2 ${
                  theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
                }`}>
                  Phone Number
                </label>
                <PhoneInput
                  id="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  defaultCountry="IN"
                  className={`w-full p-3 rounded border text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    theme === 'dark'
                      ? 'bg-dark-gray-700 border-dark-gray-600'
                      : 'bg-white border-gray-300'
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className={`block font-sans mb-2 ${
                  theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded border text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 resize-vertical ${
                    theme === 'dark'
                      ? 'bg-dark-gray-700 border-dark-gray-600 text-dark-gray-300'
                      : 'bg-white border-gray-300'
                  }`}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full bg-accent text-white font-bold py-3 rounded-full font-sans text-lg hover:bg-accent/90 transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  theme === 'dark' ? 'shadow-lg shadow-accent/25' : 'shadow-lg'
                }`}
              >
                Send Message
              </button>
              {isSubmitted && (
                <p className="text-green-500 mt-4 text-center">
                  Thank you for your message!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;