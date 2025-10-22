import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Consultation', description: 'We start by understanding your vision, needs, and budget.' },
  { id: 2, title: 'Design & Planning', description: 'Our team creates detailed plans and 3D renderings for your approval.' },
  { id: 3, title: 'Execution', description: 'We manage the entire project, ensuring quality and timeliness.' },
];

const ProcessSection = () => {
  return (
    <div className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-secondary mb-16">Our Process</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-8 bg-white rounded-lg flex-1 max-w-sm shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-serif font-bold text-accent mb-4">{step.title}</h3>
              <p className="font-sans text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;