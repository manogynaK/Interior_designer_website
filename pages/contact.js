import { motion } from 'framer-motion';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTheme } from '../components/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { theme } = useTheme();

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
            <div className="space-y-2">
              <p className={`font-sans ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>
                <strong>Address:</strong> 123 Design St, Creativity City, India
              </p>
              <p className={`font-sans ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>
                <strong>Email:</strong> contact@meghanainteriors.com
              </p>
              <p className={`font-sans ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>
                <strong>Phone:</strong> +91 123 456 7890
              </p>
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