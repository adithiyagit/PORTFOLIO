import React from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import OrbitalTech from './components/OrbitalTech';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationMobility from './components/EducationMobility';
import ContactHub from './components/ContactHub';
import Footer from './components/Footer';

export default function App() {
  // Staggered meteors positions and delays
  const meteors = [
    { top: '12%', right: '15%', delay: '0s', duration: '5s' },
    { top: '28%', right: '35%', delay: '1.8s', duration: '6.5s' },
    { top: '48%', right: '8%', delay: '3.4s', duration: '5.5s' },
    { top: '65%', right: '28%', delay: '4.7s', duration: '7s' },
    { top: '82%', right: '45%', delay: '2.5s', duration: '6s' }
  ];

  // Twinkling background star cluster
  const stars = [
    { top: '5%', left: '12%', size: '2px', delay: '0.2s' },
    { top: '8%', left: '42%', size: '1.5px', delay: '1.1s' },
    { top: '14%', left: '78%', size: '2.5px', delay: '2.3s' },
    { top: '22%', left: '25%', size: '1px', delay: '0.8s' },
    { top: '30%', left: '60%', size: '2px', delay: '1.7s' },
    { top: '38%', left: '88%', size: '1.5px', delay: '2.9s' },
    { top: '45%', left: '15%', size: '2px', delay: '0.5s' },
    { top: '55%', left: '50%', size: '1.5px', delay: '1.4s' },
    { top: '62%', left: '82%', size: '2px', delay: '2.1s' },
    { top: '70%', left: '30%', size: '1px', delay: '0.9s' },
    { top: '78%', left: '68%', size: '2.5px', delay: '1.9s' },
    { top: '85%', left: '18%', size: '1.5px', delay: '2.7s' },
    { top: '92%', left: '90%', size: '2px', delay: '0.4s' }
  ];

  return (
    <div className="min-h-screen bg-[#060312] text-slate-100 relative selection:bg-[#8b5cf6] selection:text-white">
      
      {/* Dynamic Cosmic Space Backdrop (Meteors, Nebulas, Stars) */}
      <div className="space-backdrop">
        <div className="nebula-cloud-1"></div>
        <div className="nebula-cloud-2"></div>

        {/* Twinkling Stars Cluster */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="star-particle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay
            }}
          />
        ))}

        {/* Diagonal Falling Meteors / Shooting Stars */}
        {meteors.map((m, i) => (
          <div
            key={i}
            className="meteor"
            style={{
              top: m.top,
              right: m.right,
              animationDelay: m.delay,
              animationDuration: m.duration
            }}
          />
        ))}
      </div>

      {/* Main Mission Page Contents */}
      <div className="relative z-10 flex flex-col">
        <Navbar resumeUrl={portfolioData.profile.resumePdf} />
        
        <Hero
          profile={portfolioData.profile}
          summary={portfolioData.summary}
        />

        <div id="mission-stats">
          <Metrics metrics={portfolioData.metrics} />
        </div>

        <OrbitalTech orbitalTech={portfolioData.orbitalTech} />

        <Competencies competencies={portfolioData.competencies} />

        <Experience experience={portfolioData.experience} />

        <Projects projects={portfolioData.projects} />

        <EducationMobility
          education={portfolioData.education}
          languages={portfolioData.languages}
          profile={portfolioData.profile}
        />

        <ContactHub profile={portfolioData.profile} />

        <Footer profile={portfolioData.profile} />
      </div>

    </div>
  );
}
