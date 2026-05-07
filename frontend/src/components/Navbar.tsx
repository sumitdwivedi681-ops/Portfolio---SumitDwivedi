import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const githubUrl = "https://github.com/sumitdwivedi681-ops";
  const linkedinUrl = "https://www.linkedin.com/in/sumit-dwivedi-76965b386/";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav-container">
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
          <a href="/SumitCV.pdf" target="_blank" rel="noreferrer" title="View Resume">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" title="GitHub">
            <GithubIcon />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" title="LinkedIn">
            <LinkedinIcon />
          </a>
        </div>

        <div className="nav-mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu show">
          <ul className="mobile-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
          <div className="mobile-socials">
            <a href="/SumitCV.pdf" target="_blank" rel="noreferrer" title="View Resume">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer"><GithubIcon /></a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer"><LinkedinIcon /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
