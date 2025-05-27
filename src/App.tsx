import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Achievements />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;