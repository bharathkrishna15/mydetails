import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data';
import { Code, Brain, Terminal } from 'lucide-react';

const serviceIcons = {
  code: <Code size={40} />,
  brain: <Brain size={40} />,
  terminal: <Terminal size={40} />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          MY <span className="text-blue-400">SERVICES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-lg transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-400 mb-4">
                {serviceIcons[service.icon as keyof typeof serviceIcons]}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <a 
                href="#" 
                className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
