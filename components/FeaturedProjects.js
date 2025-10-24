import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeContext';
import projectsData from '../data/projects.json';

const FeaturedProjects = () => {
  const { theme } = useTheme();

  // Process projects data and handle inconsistent field types
  const projects = projectsData.map(project => ({
    ...project,
    title: Array.isArray(project.title) ? project.title[0] : project.title,
    description: Array.isArray(project.description) ? project.description[0] : project.description,
    category: Array.isArray(project.category) ? project.category[0] : project.category,
    location: Array.isArray(project.location) ? project.location[0] : project.location,
  })).slice(0, 8); // Limit to 8 projects for carousel

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <div className={`pt-16 sm:pt-20 pb-4 sm:pb-6 md:pb-8 relative overflow-hidden ${
      theme === 'dark' ? 'bg-dark-primary' : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 opacity-30`}>
        <div className={`absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-dark-accent/20' : 'bg-accent/20'
        }`}></div>
        <div className={`absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-dark-accent/15' : 'bg-accent/15'
        }`}></div>
        <div className={`absolute top-1/2 left-1/3 w-24 h-24 rounded-full blur-2xl ${
          theme === 'dark' ? 'bg-dark-accent/10' : 'bg-accent/10'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 ${
            theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-20 h-1 rounded-full mx-auto mb-4 ${
            theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
          }`}></div>
          <p className={`text-base max-w-xl mx-auto ${
            theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600'
          }`}>
            Explore our stunning interior transformations
          </p>
        </motion.div>

        {/* Infinite Scroll Carousel */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className={`absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
              theme === 'dark' ? 'bg-gradient-to-r from-dark-primary to-transparent' : 'bg-gradient-to-r from-white to-transparent'
            }`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
              theme === 'dark' ? 'bg-gradient-to-l from-dark-primary to-transparent' : 'bg-gradient-to-l from-white to-transparent'
            }`}></div>

            {/* Scrollable Container */}
            <div className="overflow-hidden">
              <div
                className="flex gap-3 sm:gap-4 animate-scroll"
                style={{
                  width: 'calc(100% * 3)',
                  animation: 'scroll 40s linear infinite'
                }}
              >
                {duplicatedProjects.map((project, index) => (
                  <Link key={`${project.id}-${index}`} href="/work" className="block flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index % projects.length) * 0.1 }}
                      className={`group relative w-52 h-64 sm:w-64 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-rotate-2 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-dark-gray-100 border border-dark-gray-700'
                          : 'bg-white border border-gray-200'
                      }`}
                      style={{
                        perspective: '1000px',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* Image Container */}
                      <div className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                          sizes="208px"
                          priority={index < 3}
                          loading={index < 3 ? "eager" : "lazy"}
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Category Badge */}
                        {project.category && (
                          <div className={`absolute top-2 sm:top-3 left-2 sm:left-3 backdrop-blur-md text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${
                            theme === 'dark' ? 'bg-dark-accent/20 border-dark-accent/30' : 'bg-accent/20 border-accent/30'
                          }`}>
                            {project.category}
                          </div>
                        )}

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-base sm:text-lg font-serif font-bold text-white mb-1 drop-shadow-lg">
                            {project.title}
                          </h3>
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 sm:w-6 h-0.5 bg-white/60"></div>
                            <span className="text-white/80 text-xs uppercase tracking-wider">View Project</span>
                            <div className="w-4 sm:w-6 h-0.5 bg-white/60"></div>
                          </div>
                        </div>

                        {/* Rotating border effect */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-accent transition-all duration-500 opacity-0 group-hover:opacity-100">
                          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-accent/20 via-transparent to-accent/20 animate-pulse"></div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-6 sm:mt-8"
        >
          <Link
            href="/work"
            className={`inline-flex items-center gap-3 bg-accent text-white font-bold py-3 px-6 rounded-lg font-sans text-base hover:bg-accent/90 transition-all hover:scale-105 transform duration-200 ${
              theme === 'dark' ? 'shadow-lg shadow-accent/25' : 'shadow-xl'
            }`}
          >
            Explore All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        /* Pause animation on hover */
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

export default FeaturedProjects;