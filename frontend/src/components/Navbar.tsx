import React, { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const githubUrl = "https://github.com/sumitdwivedi681-ops";
  const linkedinUrl = "https://www.linkedin.com/in/sumit-dwivedi-76965b386/";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav-container glass">
      <div className="nav-content">
        <div className="nav-logo">
          <a href="#" onClick={() => window.scrollTo(0, 0)}>
            <span className="gradient-text">SUMIT</span>
          </a>
        </div>
        
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-socials">
          <a href={githubUrl} target="_blank" rel="noreferrer" title="GitHub">
            <Github size={22} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" title="LinkedIn">
            <Linkedin size={22} />
          </a>
        </div>

        <div className="nav-mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu glass show" style={{ display: 'block' }}>
          <ul className="mobile-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px', justifyContent: 'center' }}>
            <a href={githubUrl} target="_blank" rel="noreferrer" style={{ color: 'white' }}><Github size={24} /></a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" style={{ color: 'white' }}><Linkedin size={24} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

export default Navbar;
