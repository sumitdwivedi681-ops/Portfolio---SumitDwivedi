import React from 'react';

const Navbar: React.FC = () => {
  const githubUrl = "https://github.com/sumitdwivedi681-ops";
  const linkedinUrl = "https://www.linkedin.com/in/sumit-dwivedi-76965b386/";

  return (
    <nav className="nav-container glass" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '90%', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px' }}>
      <div className="nav-logo">
        <a href="#" style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
          <span className="gradient-text" style={{ fontSize: '24px', fontWeight: '800' }}>SUMIT</span>
        </a>
      </div>
      
      <ul className="nav-links" style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#about" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>About</a></li>
        <li><a href="#experience" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Experience</a></li>
        <li><a href="#projects" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contact</a></li>
      </ul>

      <div className="nav-socials" style={{ display: 'flex', gap: '20px' }}>
        <a href={githubUrl} target="_blank" rel="noreferrer" title="GitHub" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
