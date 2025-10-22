import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch('/api/testimonials');
      const data = await res.json();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-secondary mb-12">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-primary p-8 rounded-lg shadow-sm text-center flex-1 border border-light-gray"
            >
              <p className="font-sans text-gray-700 italic text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-serif font-bold text-accent">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;