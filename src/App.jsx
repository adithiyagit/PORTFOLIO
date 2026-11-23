import React from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProcessAndSkills from './components/ProcessAndSkills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090407] text-slate-100 relative selection:bg-red-600 selection:text-white">
      
      {/* Ambient Crimson Mesh Glow */}
      <div className="ambient-glow-mesh">
        <div className="glow-orb-top"></div>
        <div className="glow-orb-bottom"></div>
      </div>

      {/* Main Page Layout */}
      <div className="relative z-10 flex flex-col">
        <Navbar resumeUrl={portfolioData.profile.resumePdf} />
        
        <Hero
          profile={portfolioData.profile}
          deliveryHighlights={portfolioData.deliveryHighlights}
        />

        <Projects projects={portfolioData.projects} />

        <ProcessAndSkills
          education={portfolioData.education}
          skillsList={portfolioData.skillsList}
          workProcess={portfolioData.workProcess}
          profile={portfolioData.profile}
        />

        <Experience experience={portfolioData.experience} />

        <Contact profile={portfolioData.profile} />

        <Footer profile={portfolioData.profile} />
      </div>

    </div>
  );
}
