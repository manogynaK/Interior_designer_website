'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeContext';

const AboutSection = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`py-16 md:py-24 transition-colors duration-300 relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-dark-primary text-dark-secondary'
          : 'bg-white text-secondary'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-dark-accent/10' : 'bg-accent/10'
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-dark-accent/5' : 'bg-accent/5'
          }`}
        ></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 md:gap-16 relative z-10">
        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotateY: -15 }}
          whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex-shrink-0 px-4 sm:px-0"
        >
          <div className="relative group z-10 w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern kitchen design showcasing premium materials and contemporary styling"
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (min-width: 769px) 50vw"
              className="object-cover"
              quality={85}
            />

            {/* Floating elements */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-xl">✨</span>
            </div>
            <div
              className="absolute bottom-8 right-8 w-8 h-8 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce"
              style={{ animationDelay: '1s' }}
            >
              <span className="text-white text-sm">🎨</span>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-accent/10"></div>

            {/* Floating badge */}
            <div
              className={`absolute -top-2 sm:-top-4 -right-2 sm:-right-4 px-3 sm:px-6 py-1.5 sm:py-3 rounded-full shadow-lg backdrop-blur-sm border transform rotate-12 hover:rotate-0 transition-transform duration-500 ${
                theme === 'dark'
                  ? 'bg-dark-accent/20 border-dark-accent/30 text-dark-accent'
                  : 'bg-accent/20 border-accent/30 text-accent'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">Premium Design</span>
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 100, opacity: 0, rotateY: 15 }}
          whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/2 lg:pl-8"
        >
          <div className="space-y-6">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                theme === 'dark'
                  ? 'bg-dark-accent/10 text-dark-accent border border-dark-accent/20'
                  : 'bg-accent/10 text-accent border border-accent/20'
              }`}
            >
              <span>🏆</span>
              <span>Excellence in Interior Design</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
              About{' '}
              <span
                className={
                  theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
                }
              >
                SB Home Zone
              </span>
            </h2>

            <div className="space-y-4">
              <p
                className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-700'
                }`}
              >
                We are passionate designers dedicated to creating beautiful and
                functional spaces that reflect your unique personality and
                lifestyle.
              </p>

              <p
                className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'
                }`}
              >
                With over a decade of experience in residential and commercial
                design, we transform ordinary spaces into extraordinary
                environments that inspire and delight.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div
                  className={`text-2xl sm:text-3xl font-bold mb-1 ${
                    theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                  }`}
                >
                  500+
                </div>
                <div
                  className={`text-sm ${
                    theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'
                  }`}
                >
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl sm:text-3xl font-bold mb-1 ${
                    theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                  }`}
                >
                  10+
                </div>
                <div
                  className={`text-sm ${
                    theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'
                  }`}
                >
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl sm:text-3xl font-bold mb-1 ${
                    theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                  }`}
                >
                  100%
                </div>
                <div
                  className={`text-sm ${
                    theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'
                  }`}
                >
                  Client Satisfaction
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/work"
                className={`group bg-accent text-white font-bold py-3 px-8 rounded-full font-sans text-lg hover:bg-accent/90 transition-all inline-flex items-center gap-2 hover:scale-105 transform duration-300 ${
                  theme === 'dark'
                    ? 'shadow-lg shadow-accent/25'
                    : 'shadow-lg'
                }`}
              >
                View Our Portfolio
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <a
                href="/contact"
                className={`group border-2 border-current font-bold py-3 px-8 rounded-full font-sans text-lg transition-all inline-flex items-center gap-2 hover:scale-105 transform duration-300 ${
                  theme === 'dark'
                    ? 'text-dark-secondary border-dark-gray-600 hover:bg-dark-accent hover:text-dark-primary hover:border-dark-accent'
                    : 'text-secondary border-gray-600 hover:bg-accent hover:text-white hover:border-accent'
                }`}
              >
                Schedule Consultation
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;


// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useTheme } from './ThemeContext';

// const AboutSection = () => {
//   const { theme } = useTheme();

//   return (
//     <div className={`py-16 md:py-24 transition-colors duration-300 relative overflow-hidden ${
//       theme === 'dark' ? 'bg-dark-primary text-dark-secondary' : 'bg-white text-secondary'
//     }`}>
//       {/* Background decorative elements */}
//       <div className={`absolute inset-0 opacity-20`}>
//         <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
//           theme === 'dark' ? 'bg-dark-accent/10' : 'bg-accent/10'
//         }`}></div>
//         <div className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl ${
//           theme === 'dark' ? 'bg-dark-accent/5' : 'bg-accent/5'
//         }`}></div>
//       </div>

//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 md:gap-16 relative z-10">
//         <motion.div
//           initial={{ x: -100, opacity: 0, rotateY: -15 }}
//           whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="lg:w-1/2"
//         >
//           <div className="relative group">
//             <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
//               <Image
//                 src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
//                 alt="Modern kitchen design showcasing premium materials and contemporary styling"
//                 fill
//                 loading="eager"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 className="object-cover"
//               />

//               {/* Floating elements */}
//               <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
//                 <span className="text-white text-xl">✨</span>
//               </div>
//               <div className="absolute bottom-8 right-8 w-8 h-8 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
//                 <span className="text-white text-sm">🎨</span>
//               </div>

//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-accent/10"></div>
//             </div>

//             {/* Floating badge */}
//             <div className={`absolute -top-4 -right-4 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border transform rotate-12 hover:rotate-0 transition-transform duration-500 ${
//               theme === 'dark' ? 'bg-dark-accent/20 border-dark-accent/30 text-dark-accent' : 'bg-accent/20 border-accent/30 text-accent'
//             }`}>
//               <span className="font-bold text-sm">Premium Design</span>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ x: 100, opacity: 0, rotateY: 15 }}
//           whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="lg:w-1/2 lg:pl-8"
//         >
//           <div className="space-y-6">
//             {/* Badge */}
//             <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
//               theme === 'dark' ? 'bg-dark-accent/10 text-dark-accent border border-dark-accent/20' : 'bg-accent/10 text-accent border border-accent/20'
//             }`}>
//               <span>🏆</span>
//               <span>Excellence in Interior Design</span>
//             </div>

//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
//               About <span className={theme === 'dark' ? 'text-dark-accent' : 'text-accent'}>Meghana Interiors</span>
//             </h2>

//             <div className="space-y-4">
//               <p className={`text-lg leading-relaxed ${
//                 theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-700'
//               }`}>
//                 We are passionate designers dedicated to creating beautiful and functional spaces that reflect your unique personality and lifestyle.
//               </p>

//               <p className={`text-lg leading-relaxed ${
//                 theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'
//               }`}>
//                 With over a decade of experience in residential and commercial design, we transform ordinary spaces into extraordinary environments that inspire and delight.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4 py-6">
//               <div className="text-center">
//                 <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
//                   theme === 'dark' ? 'text-dark-accent' : 'text-accent'
//                 }`}>500+</div>
//                 <div className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
//               </div>
//               <div className="text-center">
//                 <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
//                   theme === 'dark' ? 'text-dark-accent' : 'text-accent'
//                 }`}>10+</div>
//                 <div className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>Years Experience</div>
//               </div>
//               <div className="text-center">
//                 <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
//                   theme === 'dark' ? 'text-dark-accent' : 'text-accent'
//                 }`}>100%</div>
//                 <div className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'}`}>Client Satisfaction</div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 href="/work"
//                 className={`group bg-accent text-white font-bold py-3 px-8 rounded-full font-sans text-lg hover:bg-accent/90 transition-all inline-flex items-center gap-2 hover:scale-105 transform duration-300 ${
//                   theme === 'dark' ? 'shadow-lg shadow-accent/25' : 'shadow-lg'
//                 }`}
//               >
//                 View Our Portfolio
//                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </Link>

//               <a
//                 href="/contact"
//                 className={`group border-2 border-current font-bold py-3 px-8 rounded-full font-sans text-lg transition-all inline-flex items-center gap-2 hover:scale-105 transform duration-300 ${
//                   theme === 'dark' ? 'text-dark-secondary border-dark-gray-600 hover:bg-dark-accent hover:text-dark-primary hover:border-dark-accent' : 'text-secondary border-gray-600 hover:bg-accent hover:text-white hover:border-accent'
//                 }`}
//               >
//                 Schedule Consultation
//                 <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;