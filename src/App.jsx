import React from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationMobility from './components/EducationMobility';
import ContactHub from './components/ContactHub';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 relative selection:bg-[#ff6b00] selection:text-white">
      {/* Background Animated Ambient Glow Orbs */}
      <div className="ambient-glow-orbs">
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
        <div className="glow-orb-3"></div>
      </div>

      <div className="app-content-wrapper">
        <Navbar resumeUrl={portfolioData.profile.resumePdf} />
        
        <Hero
          profile={portfolioData.profile}
          summary={portfolioData.summary}
        />

        <Metrics metrics={portfolioData.metrics} />

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
