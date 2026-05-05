import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarsCanvas from './components/canvas/Stars';

const App: React.FC = () => {
  return (
    <div className="relative z-0" style={{ backgroundColor: '#0b090a', minHeight: '100vh' }}>
      <StarsCanvas />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
