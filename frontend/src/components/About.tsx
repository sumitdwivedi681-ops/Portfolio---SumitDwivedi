import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Rocket } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About: React.FC = () => {
  const education = [
    { degree: 'Master of Computer Applications (MCA)', year: '2025 – Present', institution: 'Ongoing' },
    { degree: 'B.Sc. in Mathematics', year: 'Graduated', institution: '7.2 CGPA' },
    { degree: 'Intermediate (12th) with Mathematics', year: '81%', institution: 'Board' },
    { degree: 'High School (10th)', year: '82%', institution: 'Board' },
  ];

  return (
    <section id="about" className="about-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="section-sub">Introduction</p>
        <h2 className="section-head">About Me.</h2>

        <div className="about-content-wrapper" style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '60px' }}>
          <div className="about-image glass" style={{ width: '280px', height: '350px', padding: '10px', overflow: 'hidden' }}>
            <img src={profileImg} alt="Sumit Dwivedi" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--primary)' }}>Career Objective</h3>
            <p className="about-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dim)', marginBottom: '25px' }}>
              Aspiring **AI Engineer** with a strong foundation in Mathematics and a passion for building intelligent systems. 
              My goal is to leverage my skills in **Artificial Intelligence, Data Analytics, and Full Stack Development** 
              to create impactful, data-driven solutions that solve complex real-world problems.
            </p>
            
            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--primary)' }}>Education</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {education.map((edu, index) => (
                <div key={index} className="glass" style={{ padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '5px' }}>{edu.degree}</h4>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{edu.institution}</p>
                  </div>
                  <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', textAlign: 'center' }}>Professional Highlights</h3>
          <div className="services-grid">
            <div className="service-card glass">
              <Brain size={40} color="var(--primary)" />
              <h3>AI & ML</h3>
              <p>Passionate about predictive modeling and intelligent automation.</p>
            </div>
            <div className="service-card glass">
              <Database size={40} color="var(--primary)" />
              <h3>Data Analytics</h3>
              <p>Skilled in data manipulation and visualization using Python libraries.</p>
            </div>
            <div className="service-card glass">
              <Code size={40} color="var(--primary)" />
              <h3>Full Stack</h3>
              <p>Experienced in building robust MERN applications with modern UI.</p>
            </div>
            <div className="service-card glass">
              <Rocket size={40} color="var(--primary)" />
              <h3>Leadership</h3>
              <p>Class Representative (CR) with strong communication and management skills.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
