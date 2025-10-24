import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useTheme } from '../components/ThemeContext';
import projectsData from '../data/projects.json';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useTheme();

  // Process projects data and handle inconsistent field types
  const projects = projectsData.map(project => ({
    ...project,
    title: Array.isArray(project.title) ? project.title[0] : project.title,
    description: Array.isArray(project.description) ? project.description[0] : project.description,
    category: Array.isArray(project.category) ? project.category[0] : project.category,
    location: Array.isArray(project.location) ? project.location[0] : project.location,
  }));

  const openImageModal = (project, imageIndex) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  return (
    <div className={`py-12 pt-24 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-dark-primary text-dark-secondary' : 'bg-white text-secondary'
    }`}>
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-8"
        >
          Our Work
        </motion.h1>

        {/* Projects or Empty State */}
        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className={`text-6xl mb-4 ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-400'}`}>📷</div>
            <h3 className={`text-xl font-serif mb-2 ${theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600'}`}>No Projects Yet</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-500'}`}>Projects will appear here once they're added to the portfolio.</p>
          </motion.div>
        ) : (
          <>
            {/* Projects */}
            <div className="max-w-6xl mx-auto space-y-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] transform ${
                    theme === 'dark' ? 'bg-dark-primary border border-dark-gray-700' : 'bg-white border border-gray-200'
                  }`}
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
                          className="h-96 md:h-[400px]"
                        >
                          {project.images.map((image, imgIndex) => (
                            <SwiperSlide key={imgIndex}>
                              <div className="relative w-full h-96 md:h-[400px] cursor-pointer group" onClick={() => openImageModal(project, imgIndex)}>
                                <Image
                                  src={image}
                                  alt={`${project.title} - Image ${imgIndex + 1}`}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  {...(index === 0 && imgIndex === 0 ? { priority: true, loading: "eager" } : { loading: "lazy" })}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                  {imgIndex + 1} / {project.images.length}
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      ) : (
                        <div className="h-96 md:h-[400px] relative cursor-pointer group" onClick={() => openImageModal(project, 0)}>
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                          {project.title}
                        </h2>
                        {project.category && (
                          <span className={`bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium`}>
                            {project.category}
                          </span>
                        )}
                        {project.location && (
                          <span className={`flex items-center text-sm ${
                            theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-500'
                          }`}>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {project.location}
                          </span>
                        )}
                      </div>

                      <div className={`text-base md:text-lg leading-relaxed mb-6 ${
                        theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600'
                      }`}>
                        {(() => {
                          const desc = project.description;
                          if (!desc) return <p className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-500'}`}>No description available.</p>;
                          const descStr = typeof desc === 'string' ? desc : String(desc);
                          return descStr.split('\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ));
                        })()}
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => openImageModal(project, 0)}
                          className={`bg-accent text-white font-bold py-2 px-6 rounded-full font-sans text-sm hover:bg-accent/90 transition-all hover:scale-105 transform duration-200 ${
                            theme === 'dark' ? 'shadow-lg shadow-accent/25' : 'shadow-lg'
                          }`}
                        >
                          View All Images ({project.images.length})
                        </button>
                        <a
                          href="/contact"
                          className={`border-2 border-accent text-accent font-bold py-2 px-6 rounded-full font-sans text-sm hover:bg-accent hover:text-white transition-all hover:scale-105 transform duration-200`}
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Image Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-5xl max-h-full w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-[70vh] rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.images[selectedImageIndex]}
                  alt={`${selectedProject.title} - Image ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  loading="eager"
                />

                {/* Navigation arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((prev) =>
                          prev === 0 ? selectedProject.images.length - 1 : prev - 1
                        );
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((prev) =>
                          prev === selectedProject.images.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Thumbnail strip */}
              {selectedProject.images.length > 1 && (
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                        index === selectedImageIndex ? 'ring-2 ring-accent' : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${selectedProject.title} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
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