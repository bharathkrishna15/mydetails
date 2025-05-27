import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:py-5">
        <a href="#" className="text-2xl font-bold text-white">Portfolio</a>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className={`fixed md:static top-16 left-0 w-full md:w-auto transition-all duration-300 bg-slate-900 md:bg-transparent ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}`}>
          <ul className="flex flex-col md:flex-row p-4 md:p-0">
            {['home', 'about', 'services', 'skills', 'achievements', 'projects'].map((item) => (
              <li key={item} className="my-2 md:my-0 md:mx-4">
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white font-medium hover:text-blue-400 transition-colors cursor-pointer capitalize text-lg"
                  activeClass="text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;