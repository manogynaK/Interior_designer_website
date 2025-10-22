import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/3 rounded-full translate-y-24 -translate-x-24"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-3">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Discover our most inspiring interior design transformations
          </p>
        </motion.div>

        {/* Loading State or Empty State */}
        {!loading && projects.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-gray-600 mb-2">No Projects Yet</h3>
            <p className="text-gray-500 text-sm">Amazing projects will appear here soon.</p>
          </motion.div>
        ) : (
          <>
            {/* Loading State */}
            {loading && (
              <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-shrink-0 w-[280px] sm:w-[320px]">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                      <div className="h-[200px] sm:h-[240px] bg-gray-300"></div>
                      <div className="p-4 sm:p-5">
                        <div className="h-6 bg-gray-300 rounded mb-3"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-300 rounded"></div>
                          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {!loading && (
              <>
                {/* Mobile-friendly horizontal scroll with indicators */}
                <div className="relative">
                  {/* Scroll indicator for mobile */}
                  <div className="flex justify-center mb-6 md:hidden">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div className="w-2 h-2 bg-accent/30 rounded-full"></div>
                      <div className="w-2 h-2 bg-accent/30 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 scrollbar-hide scroll-smooth">
                    {projects.map((project, index) => (
                      <Link key={project.id} href="/work" className="block">
                        <motion.div
                          initial={{ y: 100, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-[280px] sm:w-[320px] bg-white border border-gray-100 cursor-pointer"
                        >
                          {/* Image Container */}
                          <div className="relative w-full h-[200px] sm:h-[240px] overflow-hidden">
                            <Image
                              src={project.images[0]}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                              sizes="(max-width: 640px) 280px, 320px"
                              {...(index < 2 ? { priority: true } : { loading: "lazy" })}
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Category Badge */}
                            {project.category && (
                              <div className="absolute top-3 left-3 bg-accent/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                                {project.category}
                              </div>
                            )}

                            {/* Location Badge */}
                            {project.location && (
                              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs">
                                📍 {project.location}
                              </div>
                            )}

                            {/* Hover overlay content */}
                            <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                              <div className="text-center">
                                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-2 drop-shadow-lg">
                                  {project.title}
                                </h3>
                                <div className="flex items-center justify-center space-x-1">
                                  <div className="w-8 h-0.5 bg-white/60"></div>
                                  <span className="text-white/80 text-xs uppercase tracking-wider">View All Projects</span>
                                  <div className="w-8 h-0.5 bg-white/60"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Content Card */}
                          <div className="p-4 sm:p-5 bg-white">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-base sm:text-lg font-serif font-bold text-secondary line-clamp-1 flex-1 mr-2">
                                {project.title}
                              </h3>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                              {(() => {
                                const desc = project.description;
                                if (!desc) return 'No description available...';
                                const descStr = typeof desc === 'string' ? desc : String(desc);
                                return descStr.split(' ').slice(0, 15).join(' ') + '...';
                              })()}
                            </p>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>

                  {/* Scroll hint for mobile */}
                  <div className="flex justify-center mt-4 md:hidden">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                      <span>Swipe to explore more</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjects;