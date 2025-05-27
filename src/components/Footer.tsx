import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-4">© 2024 Bharath K. All rights reserved.</p>
          <p className="text-gray-400">
            Built with React
          </p>
        </div>
      </div>
      
      <div className="absolute right-8 bottom-8">
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          duration={500}
          className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-colors"
        >
          <ChevronUp size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;