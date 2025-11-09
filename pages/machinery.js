import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';
import { useEffect, useState } from 'react';

const machinery = [
  { 
    id: 1, 
    name: 'CNC Router', 
    description: 'High-precision CNC router for intricate woodworking and furniture making. Perfect for custom designs and detailed carvings.',
    specs: [
      '5-axis precision cutting',
      '8x4 feet working area',
      '0.1mm accuracy',
      'Ideal for MDF, plywood, and solid wood',
      'Dust collection system'
    ],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  { 
    id: 2, 
    name: 'Edge Banding Machine', 
    description: 'Automatic edge banding system for applying edge banding to panels with perfect precision and finish.',
    specs: [
      'Automatic feed and trim',
      '0.4-3mm edge banding',
      'Pre-milling and post-trimming',
      'Digital temperature control',
      'Up to 12m/min speed'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-4e2d8e8cff2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  { 
    id: 3, 
    name: 'Panel Saw', 
    description: 'Heavy-duty sliding table panel saw for precise cutting of large panels and sheets with clean edges.',
    specs: [
      '10ft sliding table',
      '5HP motor',
      'Laser guide system',
      'Dust extraction',
      'Digital angle display'
    ],
    image: 'https://images.unsplash.com/photo-1595437193396-180f342b19af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  { 
    id: 4, 
    name: 'Spray Booth', 
    description: 'Professional spray finishing booth with proper ventilation and lighting for flawless paint and finish application.',
    specs: [
      'Down-draft ventilation',
      'LED lighting system',
      'Temperature control',
      'Overspray filtration',
      'Fire suppression system'
    ],
    image: 'https://images.unsplash.com/photo-1583845112202-803a1840f1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  { 
    id: 5, 
    name: 'Sanding Machine', 
    description: 'Wide belt sanding machine for achieving smooth surfaces on wood panels and furniture components.',
    specs: [
      '37-inch working width',
      'Variable speed control',
      'Dust extraction ports',
      'Multiple sanding heads',
      'Digital thickness gauge'
    ],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  { 
    id: 6, 
    name: 'Drilling Machine', 
    description: 'Precision drilling machine for creating accurate holes in panels and furniture components.',
    specs: [
      'Multi-spindle drilling',
      'CNC controlled',
      'Adjustable drilling depth',
      'Dust collection system',
      'Touchscreen interface'
    ],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  }
];

const Machinery = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Don't render anything on the server
  if (!isMounted) {
    return null;
  }
  
  return (
    <div className={`min-h-screen py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-dark-primary text-dark-gray-200' : 'bg-white text-gray-800'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold tracking-wider uppercase mb-4 text-accent">Our Workshop</h2>
          <motion.h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            State-of-the-Art Machinery
          </motion.h1>
          <motion.p 
            className={`max-w-3xl mx-auto text-lg ${
              theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Our workshop is equipped with the latest technology to bring your designs to life with precision and efficiency. 
            Each piece of machinery is maintained to the highest standards to ensure quality in every project.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machinery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-dark-secondary/50 hover:bg-dark-secondary/70' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.name}</h3>
                    <div className="h-1 w-16 bg-accent mb-3"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className={`text-2xl font-serif font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Bring Your Vision to Life?
          </h3>
          <p className={`max-w-2xl mx-auto mb-8 ${
            theme === 'dark' ? 'text-dark-gray-300' : 'text-gray-600'
          }`}>
            Our advanced machinery and expert craftsmen are ready to turn your ideas into reality. 
            Contact us to discuss your project and how we can help you achieve exceptional results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            Get in Touch
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Machinery;