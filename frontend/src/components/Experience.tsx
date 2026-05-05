import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="section-sub">My Journey</p>
        <h2 className="section-head">Internship Experience.</h2>

        <div className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '5px' }}>Data Science Intern</h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '600' }}>Unified Mentor Private Limited</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-dim)', background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '50px' }}>
              <Calendar size={18} />
              <span>May 1, 2026 – Aug 1, 2026</span>
            </div>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', lineHeight: '1.8', marginBottom: '30px' }}>
            Actively contributing to high-impact Data Science projects, focusing on end-to-end development 
            from deep research to model deployment. My role involves solving complex data challenges 
            and delivering production-ready machine learning solutions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            <div className="experience-item" style={{ display: 'flex', gap: '15px' }}>
              <CheckCircle2 color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
              <p style={{ color: 'white' }}>Conducting in-depth research and preparing comprehensive research papers on data patterns.</p>
            </div>
            <div className="experience-item" style={{ display: 'flex', gap: '15px' }}>
              <CheckCircle2 color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
              <p style={{ color: 'white' }}>Building and training robust machine learning models using advanced Python libraries.</p>
            </div>
            <div className="experience-item" style={{ display: 'flex', gap: '15px' }}>
              <CheckCircle2 color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
              <p style={{ color: 'white' }}>Designing intuitive and user-friendly interfaces to interact with ML model outputs.</p>
            </div>
            <div className="experience-item" style={{ display: 'flex', gap: '15px' }}>
              <CheckCircle2 color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
              <p style={{ color: 'white' }}>Managing the full project lifecycle, including version control and deployment on GitHub.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
