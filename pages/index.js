import { motion } from 'framer-motion';
import Link from 'next/link';
import AboutSection from '../components/AboutSection';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import ProcessSection from '../components/ProcessSection';

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}
      >
        <div className="text-center bg-black/30 p-12 rounded-lg backdrop-blur-sm">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          >
            Crafting Spaces, Creating Dreams
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl font-sans text-white/90 mb-8"
          >
            Bespoke interior designs that reflect your personality and style.
          </motion.p>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
            <Link href="/work" className="bg-accent text-white font-bold py-2 px-4 sm:py-3 sm:px-8 rounded-full font-sans text-sm sm:text-base md:text-lg hover:bg-accent/90 transition-all inline-block">
              Explore Our Work
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <AboutSection />
      <FeaturedProjects />
      <Testimonials />
      <ProcessSection />
    </div>
  );
};

export default Home;