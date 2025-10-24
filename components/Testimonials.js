import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeContext';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    // Using dummy data since API might not be working
    const dummyTestimonials = [
      {
        id: 1,
        name: 'Sarah Johnson',
        quote: 'Meghana Interiors transformed our home beyond our expectations. Every detail was perfect and the team was incredibly professional throughout the entire process.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        location: 'Mumbai'
      },
      {
        id: 2,
        name: 'Michael Chen',
        quote: 'The attention to detail and quality of work is outstanding. Our office space now reflects our brand perfectly. Highly recommended!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        location: 'Delhi'
      },
      {
        id: 3,
        name: 'Priya Patel',
        quote: 'Working with Meghana Interiors was a dream come true. They understood our vision perfectly and delivered exactly what we wanted within our budget.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        location: 'Bangalore'
      },
      {
        id: 4,
        name: 'David Rodriguez',
        quote: 'The team\'s creativity and professionalism exceeded our expectations. Our restaurant now has the perfect ambiance that keeps customers coming back.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        location: 'Pune'
      }
    ];

    // Try to fetch from API first, fallback to dummy data
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials');
        const data = await res.json();
        if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          setTestimonials(dummyTestimonials);
        }
      } catch (error) {
        console.log('Using dummy testimonials data');
        setTestimonials(dummyTestimonials);
      }
    };

    fetchTestimonials();
  }, []);

  // Create infinite scroll testimonials by duplicating the array
  const infiniteTestimonials = testimonials.length > 0 ? [...testimonials, ...testimonials, ...testimonials] : [];

  return (
    <div className={`py-8 sm:py-12 md:py-16 transition-colors duration-300 relative overflow-hidden ${
      theme === 'dark' ? 'bg-dark-primary text-dark-secondary' : 'bg-gray-50 text-secondary'
    }`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 opacity-20`}>
        <div className={`absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-dark-accent/10' : 'bg-accent/10'
        }`}></div>
        <div className={`absolute bottom-10 right-10 w-48 h-48 rounded-full blur-2xl ${
          theme === 'dark' ? 'bg-dark-accent/5' : 'bg-accent/5'
        }`}></div>
        <div className={`absolute top-1/2 right-1/4 w-32 h-32 rounded-full blur-xl ${
          theme === 'dark' ? 'bg-dark-accent/8' : 'bg-accent/8'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${
            theme === 'dark' ? 'bg-dark-accent/10 text-dark-accent border border-dark-accent/20' : 'bg-accent/10 text-accent border border-accent/20'
          }`}>
            <span>💬</span>
            <span>Client Testimonials</span>
          </div>

          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-3 ${
            theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
          }`}>
            What Our <span className={theme === 'dark' ? 'text-dark-accent' : 'text-accent'}>Clients Say</span>
          </h2>

          <div className={`w-12 sm:w-16 h-1 rounded-full mx-auto mb-3 sm:mb-4 ${
            theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
          }`}></div>

          <p className={`text-sm sm:text-base max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600'
          }`}>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        {/* Infinite Scroll Testimonials */}
        <div className="relative overflow-hidden px-4 sm:px-6">
          <div className="flex animate-scroll">
            {infiniteTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className={`group relative p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform flex-shrink-0 w-56 sm:w-64 mx-2 sm:mx-3 ${
                  theme === 'dark'
                    ? 'bg-dark-gray-100/50 border border-dark-gray-700/50 hover:border-dark-accent/30'
                    : 'bg-white border border-gray-200 hover:border-accent/30'
                }`}
              >
                {/* Quote decoration */}
                <div className={`absolute top-2 right-2 text-2xl sm:text-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${
                  theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                }`}>
                  "
                </div>

                {/* Profile section */}
                <div className="flex items-center mb-3">
                  <div className="relative mr-1.5 sm:mr-2">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg overflow-hidden ring-1.5 sm:ring-2 ring-white shadow-md">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 border-1.5 sm:border-2 border-white rounded-sm"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`text-sm sm:text-base font-serif font-bold ${
                        theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
                      }`}>
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-500'}`}>
                        📍 {testimonial.location}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-md ${
                        theme === 'dark' ? 'bg-dark-accent/20 text-dark-accent' : 'bg-accent/20 text-accent'
                      }`}>
                        Verified Client
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className={`text-xs leading-relaxed italic mb-1.5 sm:mb-2 p-1.5 sm:p-2 rounded-md sm:rounded-lg border-l-2 sm:border-l-4 ${
                  theme === 'dark'
                    ? 'text-dark-gray-300 bg-dark-gray-800/50 border-dark-accent/50'
                    : 'text-gray-700 bg-gray-50 border-accent/50'
                }`}>
                  "{testimonial.quote}"
                </blockquote>

                {/* Rating display */}
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-1.5 sm:gap-2 text-xs ${
                    theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-500'
                  }`}>
                    <span>{testimonial.rating}/5 Rating</span>
                  </div>

                  {/* Floating action */}
                  <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg flex items-center justify-center ${
                      theme === 'dark' ? 'bg-dark-accent/20' : 'bg-accent/20'
                    }`}>
                      <span className={`text-sm ${theme === 'dark' ? 'text-dark-accent' : 'text-accent'}`}>✓</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6 sm:mt-8"
        >
          <div className="mb-6">
            <p className={`text-sm sm:text-base mb-2 font-medium ${
              theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-700'
            }`}>
              Ready to join our satisfied clients?
            </p>
            <p className={`text-base ${
              theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'
            }`}>
              Let's create something amazing together
            </p>
          </div>

          <a
            href="/contact"
            className={`group inline-flex items-center gap-3 bg-accent text-white font-bold py-3 px-8 rounded-lg font-sans text-base hover:bg-accent/90 transition-all hover:scale-110 transform duration-300 ${
              theme === 'dark' ? 'shadow-lg shadow-accent/25' : 'shadow-xl'
            }`}
          >
            Start Your Project
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Custom CSS for infinite scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
