import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MoveUpRight } from 'lucide-react';
import tradingBotImg from '../assets/trading-bot.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Elite Exam Portal',
      desc: 'A full-stack examination system with student registration, real-time testing, and an automated result viewing system. Built with MERN stack.',
      tags: ['MongoDB', 'Express', 'Node.js', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/sumitdwivedi681-ops',
      link: 'https://exam-portal-five-rose.vercel.app/'
    },
    {
      title: 'LPA Prediction Model',
      desc: 'A Machine Learning project using Python to predict salary packages based on academic and professional features. Implements Scikit-learn for high accuracy.',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/sumitdwivedi681-ops/LPA-pridection-Model.git',
      link: '#'
    },
    {
      title: 'Trading Bot Binance',
      desc: 'An automated crypto trading bot for Binance using real-time market data and custom trading strategies. Built with Python and Binance API.',
      tags: ['Python', 'Binance API', 'WebSockets', 'Algorithms'],
      image: tradingBotImg,
      github: 'https://github.com/sumitdwivedi681-ops/Trading-bot-binance.git',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <p className="section-sub">My Work</p>
      <h2 className="section-head">Featured Projects.</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -10 }}
            className="project-card glass"
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noreferrer"><Terminal /></a>
                <a href={project.link} target="_blank" rel="noreferrer"><MoveUpRight /></a>
              </div>
            </div>
            <div className="project-info">
              <h3 style={{ color: 'white', marginBottom: '10px' }}>{project.title}</h3>
              <p style={{ color: '#adb5bd', fontSize: '0.95rem', marginBottom: '20px' }}>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag" style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600' }}>#{tag} </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
