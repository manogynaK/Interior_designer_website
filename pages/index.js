import { motion } from 'framer-motion';
import Link from 'next/link';
import AboutSection from '../components/AboutSection';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import ProcessSection from '../components/ProcessSection';

const Home = () => {
  return (
    <div>
      <section id="home" className="pt-20">
        <div
          className="h-[60vh] md:h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 right-16 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50"></div>

          <div className="text-center relative z-10 max-w-5xl mx-auto px-6">
            <motion.h1
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Crafting Spaces,
              <br />
              <span className="text-accent">Creating Dreams</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl font-sans text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Bespoke interior designs that reflect your personality and elevate your lifestyle
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/work"
                className="group bg-accent text-white font-bold py-4 px-8 rounded-full font-sans text-lg hover:bg-accent/90 transition-all inline-flex items-center gap-3 hover:scale-110 transform duration-300 shadow-2xl hover:shadow-accent/25"
              >
                Explore Our Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <a
                href="/contact"
                className="group border-2 border-white text-white font-bold py-4 px-8 rounded-full font-sans text-lg hover:bg-white hover:text-gray-900 transition-all inline-flex items-center gap-3 hover:scale-110 transform duration-300"
              >
                Get Free Consultation
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about">
        <AboutSection />
      </section>
      <section id="work">
        <FeaturedProjects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ProcessSection />
      </section>
    </div>
  );
};

export default Home;