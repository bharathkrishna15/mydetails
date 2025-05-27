import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          ABOUT <span className="text-blue-400">ME</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* About Image */}
          <motion.div
            className="md:w-5/12 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: [0, 2, -2, 0] }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              duration: 0.8,
            }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-blue-500 hover:ring-8 hover:ring-blue-400/30 transition-all duration-300 max-w-sm md:max-w-md">
              <img
                src={personalInfo.aboutImageUrl}
                alt="Bharath K working"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent rounded-xl"></div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            className="md:w-7/12 text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {personalInfo.title}
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse rounded-full" />
            </motion.h3>

            <motion.p
              className="text-gray-300 leading-relaxed md:text-lg tracking-wide mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.a
              href="#projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
