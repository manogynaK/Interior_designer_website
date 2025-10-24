import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const steps = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'We start by understanding your vision, lifestyle, and budget requirements through detailed discussions.',
    duration: '1-2 weeks',
    icon: '💬'
  },
  {
    id: 2,
    title: 'Concept & Design',
    description: 'Our team creates mood boards, 2D layouts, and 3D renderings to bring your vision to life.',
    duration: '2-4 weeks',
    icon: '🎨'
  },
  {
    id: 3,
    title: 'Material Selection',
    description: 'We help you choose the perfect materials, finishes, and furnishings that match your style and budget.',
    duration: '1-2 weeks',
    icon: '✨'
  },
  {
    id: 4,
    title: 'Project Execution',
    description: 'Our skilled team manages the entire implementation process with regular updates and quality checks.',
    duration: '4-8 weeks',
    icon: '🔨'
  },
  {
    id: 5,
    title: 'Final Styling',
    description: 'We add the finishing touches with accessories, lighting, and decor to create your perfect space.',
    duration: '1 week',
    icon: '🌟'
  },
  {
    id: 6,
    title: 'Project Handover',
    description: 'Complete walkthrough, documentation, and after-care support to ensure your satisfaction.',
    duration: '1 day',
    icon: '🎉'
  },
];

const ProcessSection = () => {
  const { theme } = useTheme();

  return (
    <div className={`py-16 md:py-20 transition-colors duration-300 relative overflow-hidden ${
      theme === 'dark' ? 'bg-dark-primary text-dark-secondary' : 'bg-white text-secondary'
    }`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 opacity-15`}>
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-dark-accent/10' : 'bg-accent/10'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-dark-accent/8' : 'bg-accent/8'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 ${
          theme === 'dark' ? 'bg-dark-accent/5' : 'bg-accent/5'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'dark' ? 'bg-dark-accent/10 text-dark-accent border border-dark-accent/20' : 'bg-accent/10 text-accent border border-accent/20'
          }`}>
            <span>⚡</span>
            <span>Our Process</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 ${
            theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
          }`}>
            How We <span className={theme === 'dark' ? 'text-dark-accent' : 'text-accent'}>Work</span>
          </h2>

          <div className={`w-20 h-1 rounded-full mx-auto mb-6 ${
            theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
          }`}></div>

          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600'
          }`}>
            A streamlined, client-focused approach that ensures your vision becomes reality with precision and care
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connection Line */}
          <div className={`hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2 z-0 ${
            theme === 'dark' ? 'bg-gradient-to-r from-dark-accent/20 via-dark-accent/40 to-dark-accent/20' : 'bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20'
          }`}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
                className={`group relative text-center p-8 rounded-3xl transition-all duration-500 hover:scale-105 transform hover:-rotate-1 ${
                  theme === 'dark'
                    ? 'bg-dark-gray-100/50 border border-dark-gray-700/50 hover:border-dark-accent/50 hover:shadow-2xl hover:shadow-dark-accent/10 backdrop-blur-sm'
                    : 'bg-white/80 border border-gray-200/50 hover:border-accent/50 hover:shadow-2xl backdrop-blur-sm'
                }`}
              >
                {/* Step Number Circle */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-4 ${
                  theme === 'dark'
                    ? 'bg-dark-primary text-dark-accent border-dark-gray-700'
                    : 'bg-white text-accent border-gray-100'
                }`}>
                  {step.id}
                </div>

                {/* Icon with floating effect */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 ${
                    theme === 'dark' ? 'bg-dark-accent/20' : 'bg-accent/20'
                  }`}>
                    {step.icon}
                  </div>
                  {/* Floating particles */}
                  <div className={`absolute top-2 right-2 w-2 h-2 rounded-full opacity-60 animate-ping ${
                    theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                  }`}></div>
                  <div className={`absolute bottom-2 left-2 w-1 h-1 rounded-full opacity-40 animate-pulse ${
                    theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                  }`} style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-serif font-bold ${
                    theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`text-base leading-relaxed ${
                    theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-600'
                  }`}>
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                    theme === 'dark'
                      ? 'bg-dark-accent/10 text-dark-accent border-dark-accent/20'
                      : 'bg-accent/10 text-accent border-accent/20'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{step.duration}</span>
                  </div>
                </div>

                {/* Connection Arrow for Large Screens */}
                {index < steps.length - 1 && (
                  <div className={`hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    theme === 'dark' ? 'text-dark-accent' : 'text-accent'
                  }`}>
                    <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl ${
                  theme === 'dark' ? 'bg-dark-accent' : 'bg-accent'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
          className="text-center mt-20"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className={`text-2xl md:text-3xl font-serif font-bold mb-4 ${
              theme === 'dark' ? 'text-dark-secondary' : 'text-secondary'
            }`}>
              Ready to Transform Your Space?
            </h3>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss your project and bring your vision to life. Our team is here to guide you through every step of the journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className={`group inline-flex items-center gap-3 bg-accent text-white font-bold py-4 px-10 rounded-full font-sans text-lg hover:bg-accent/90 transition-all hover:scale-110 transform duration-300 ${
                theme === 'dark' ? 'shadow-lg shadow-accent/25' : 'shadow-xl'
              }`}
            >
              Start Your Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <span className={`text-sm ${theme === 'dark' ? 'text-dark-gray-400' : 'text-gray-500'}`}>
              Free consultation • No commitment required
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProcessSection;