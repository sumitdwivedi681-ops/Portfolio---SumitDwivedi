import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px', position: 'relative', overflow: 'hidden' }}>
      <div className="hero-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', gap: '50px', flexWrap: 'wrap' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1, textAlign: 'left', minWidth: '300px' }}
        >
          <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: 'white', marginBottom: '10px' }}>
            Sumit <span className="gradient-text">Dwivedi</span>
          </h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '30px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Aspiring AI Engineer & Full Stack Developer
          </h2>
          <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: '#adb5bd', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6' }}>
            Merging the logic of Mathematics with the power of Artificial Intelligence to build 
            the future of intelligent web applications.
          </p>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            <a href="#projects" className="hero-btn" style={{ textDecoration: 'none' }}>View My Projects</a>
            <a href="#contact" className="hero-btn glass" style={{ textDecoration: 'none', background: 'transparent' }}>Get In Touch</a>
          </div>
          
          <div style={{ display: 'flex', gap: '25px', opacity: 0.8 }}>
            <a href="https://github.com/sumitdwivedi681-ops" target="_blank" rel="noreferrer" title="GitHub" style={{ color: 'white' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/sumit-dwivedi-76965b386/" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: 'white' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </motion.div>

        <div className="hero-3d" style={{ flex: 1, height: '500px', minWidth: '300px' }}>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="#9d4edd"
                attach="material"
                distort={0.4}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
