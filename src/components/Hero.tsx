import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { socialLinks, personalInfo } from '../data';
import { ChevronDown, Linkedin, Github, Code } from 'lucide-react';
import { Link } from 'react-scroll';

const socialIcons = {
  linkedin: <Linkedin size={20} />,
  github: <Github size={20} />,
  code: <Code size={20} />
};

const Hero: React.FC = () => {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (typedTextRef.current) {
      const typed = new Typed(typedTextRef.current, {
        strings: ['Frontend Developer', 'AI/ML Engineer', 'Problem Solver'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
      });
      
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 text-white mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-2">Hello, It's Me</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{personalInfo.name}</h1>
          <h3 className="text-xl md:text-2xl font-medium mb-4">
            And I'm a <span ref={typedTextRef} className="text-blue-400"></span>
          </h3>
          <p className="text-gray-300 mb-6 max-w-lg">
            "Innovating solutions through technology and creativity."
          </p>
          
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link) => (
              <a 
                key={link.platform} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                {socialIcons[link.icon as keyof typeof socialIcons]}
              </a>
            ))}
          </div>
          
          <a 
            href={personalInfo.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Download CV
          </a>
        </motion.div>
        
        <motion.div 
          className="md:w-5/12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="
            relative overflow-hidden mx-auto
            w-96 h-96           /* small/medium - 24rem */
            lg:w-[36rem] lg:h-[36rem]  /* large - 36rem */
            xl:w-[42rem] xl:h-[42rem]  /* extra-large - 42rem */
            border-4 border-transparent
            bg-gradient-to-tr from-green-400 to-blue-600
            p-1
            shadow-xl
            ring-4 ring-blue-400/40
            hover:scale-105
            transition-transform duration-300 ease-in-out
            rounded-xl
          ">
            <img
              src={personalInfo.avatarUrl}
              alt={`${personalInfo.name} avatar`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <ChevronDown size={32} className="text-blue-400 cursor-pointer" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;