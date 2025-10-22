// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const AboutSection = () => {
//   return (
//     <div className="py-24 bg-white">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="md:w-1/2"
//         >
//           <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Stylish interior" className="rounded-lg shadow-2xl" />
//         </motion.div>
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="md:w-1/2 md:pl-12 mt-8 md:mt-0"
//         >
//           <h2 className="text-4xl font-serif font-bold text-secondary mb-4">About Us</h2>
//           <p className="text-gray-600 leading-relaxed mb-6">
//           <p className="font-sans text-gray-700 leading-relaxed mb-6">
//             We are a passionate team of designers dedicated to creating beautiful and functional spaces. Our philosophy is to blend aesthetics with practicality, ensuring every design is a true reflection of our client's vision.
//           </p>
//           <Link href="/work" className="bg-accent text-white font-bold py-3 px-8 rounded-full font-sans text-lg hover:bg-accent/90 transition-all inline-block">
//             Learn More
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="relative w-full h-96 md:h-[500px] rounded-lg shadow-2xl overflow-hidden bg-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt="Stylish interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2 md:pl-8 lg:pl-12 mt-8 md:mt-0"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-secondary mb-4">About Us</h2>
          <p className="font-sans text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
            We are a passionate team of designers dedicated to creating beautiful and functional spaces. Our philosophy is to blend aesthetics with practicality, ensuring every design is a true reflection of our client's vision.
          </p>
          <Link href="/work" className="bg-accent text-white font-bold py-2 px-4 sm:py-3 sm:px-8 rounded-full font-sans text-sm sm:text-base md:text-lg hover:bg-accent/90 transition-all inline-block">
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;