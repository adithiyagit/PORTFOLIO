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
  return (
    <div className="min-h-screen bg-[#05050a] text-slate-100 relative selection:bg-[#8b5cf6] selection:text-white">
      {/* Background Cosmic Glow Meshes */}
      <div className="cosmic-glow-orbs">
        <div className="cosmic-orb-1"></div>
        <div className="cosmic-orb-2"></div>
        <div className="cosmic-orb-3"></div>
      </div>

      <div className="app-content-wrapper">
        <Navbar resumeUrl={portfolioData.profile.resumePdf} />
        
        <Hero
          profile={portfolioData.profile}
          summary={portfolioData.summary}
        />

        <Metrics metrics={portfolioData.metrics} />

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
