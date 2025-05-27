import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import { 
  Code, 
  Database, 
  FileCode2,
  Braces,
  FileJson,
  SquareCode
} from 'lucide-react';

const skillIcons = {
  python: <FileCode2 size={24} />,
  database: <Database size={24} />,
  code: <Code size={24} />,
  html: <Braces size={24} />,
  css: <FileJson size={24} />,
  javascript: <SquareCode size={24} />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          <span className="text-blue-400">Technical</span> Skills
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="mb-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-2">
                <span className="mr-2 text-white" style={{ color: skill.color }}>
                  {skillIcons[skill.icon as keyof typeof skillIcons]}
                </span>
                <span className="text-lg font-medium text-white">{skill.name}</span>
              </div>
              <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;