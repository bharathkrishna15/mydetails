import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data';
import { Code2, Brain, Cloud, Network } from 'lucide-react';

const achievementIcons = {
  'code-2': <Code2 size={32} />,
  'brain': <Brain size={32} />,
  'cloud': <Cloud size={32} />,
  'network': <Network size={32} />
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          MY <span className="text-blue-400">ACHIEVEMENTS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-400 mb-4">
                {achievementIcons[achievement.icon as keyof typeof achievementIcons]}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
