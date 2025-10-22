import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center text-secondary mb-12"
        >
          Our Work
        </motion.h1>

        {/* Loading State or Empty State */}
        {!loading && projects.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 text-6xl mb-4">📷</div>
            <h3 className="text-xl font-serif text-gray-600 mb-2">No Projects Yet</h3>
            <p className="text-gray-500">Projects will appear here once they're added to the portfolio.</p>
          </motion.div>
        ) : (
          <>
            {/* Loading State */}
            {loading && (
              <div className="max-w-6xl mx-auto">
                <div className="space-y-16">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse">
                      <div className="h-96 md:h-[500px] bg-gray-300"></div>
                      <div className="p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-6 bg-gray-300 rounded-full w-24"></div>
                        </div>
                        <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
                        <div className="space-y-3">
                          <div className="h-4 bg-gray-300 rounded"></div>
                          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                          <div className="h-4 bg-gray-300 rounded w-3/6"></div>
                        </div>
                        <div className="mt-6 h-10 bg-gray-300 rounded-lg w-48"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {!loading && (
              <div className="max-w-6xl mx-auto space-y-16">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  >
                    {/* Image Carousel Section */}
                    <div className="relative">
                      {project.images.length > 1 ? (
                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                          }}
                          pagination={{ clickable: true }}
                          autoplay={{ delay: 4000, disableOnInteraction: false }}
                          className="h-96 md:h-[500px]"
                        >
                          {project.images.map((image, imgIndex) => (
                            <SwiperSlide key={imgIndex}>
                              <div className="relative w-full h-96 md:h-[500px]">
                                <Image
                                  src={image}
                                  alt={`${project.title} - Image ${imgIndex + 1}`}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  {...(index === 0 && imgIndex === 0 ? { priority: true } : {})}
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      ) : (
                        <div className="h-96 md:h-[500px] relative">
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0}
                          />
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 md:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-secondary">
                          {project.title}
                        </h2>
                        {project.category && (
                          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                        )}
                      </div>

                      {project.location && (
                        <div className="flex items-center text-gray-500 mb-4">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm">{project.location}</span>
                        </div>
                      )}

                      <div className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                        {(() => {
                          const desc = project.description;
                          if (!desc) return <p className="text-gray-500">No description available.</p>;
                          const descStr = typeof desc === 'string' ? desc : String(desc);
                          return descStr.split('\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ));
                        })()}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Custom Swiper Navigation Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          @apply bg-white/80 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 md:p-4 transition-all duration-200;
          @apply text-gray-700 hover:text-accent;
          @apply w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          @apply text-sm sm:text-base md:text-lg;
        }

        .swiper-pagination-bullet {
          @apply bg-accent/50;
        }

        .swiper-pagination-bullet-active {
          @apply bg-accent;
        }

        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            @apply hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default Work;