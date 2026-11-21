import React, { useState, useEffect } from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

export default function Hero({ profile, stats }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profile.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2400);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % profile.roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, profile.roles]);

  return (
    <section id="hero" className="pt-6 pb-12 sm:pb-16 overflow-hidden relative">
      
      {/* =====================================================================
          GIANT "PORTFOLIO" CONDENSED HEADLINE (Behind Center Cutout)
          ===================================================================== */}
      <div className="absolute top-0 inset-x-0 flex justify-center z-0 pointer-events-none select-none overflow-hidden">
        <h1 className="giant-portfolio-text">
          PORTFOLIO
        </h1>
      </div>

      <div className="container relative z-10 pt-8 sm:pt-12">
        
        {/* Availability Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{profile.availability} • {profile.mobility}</span>
          </div>
        </div>

        {/* 3-Column Hero Grid: Left Content | Center Transparent Cutout | Right Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Column: Bio & Name (4 cols on lg) */}
          <div className="lg:col-span-4 text-left order-2 lg:order-1 pb-2 lg:pb-6 z-20">
            <div className="font-script text-3xl sm:text-4xl text-red-400 font-bold mb-1">
              Hello, I'm
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-none mb-3">
              {profile.firstName}
              <br />
              <span className="text-red-500">{profile.lastName}</span>
            </h2>

            {/* Dynamic Typewriter Role */}
            <div className="inline-block px-3 py-1 bg-red-950/50 border-l-2 border-red-500 text-slate-200 text-xs sm:text-sm font-semibold tracking-wide mb-4">
              <span>{displayText}</span>
              <span className="inline-block w-1.5 h-4 bg-red-500 ml-1 animate-pulse align-middle"></span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
              ERP Functional Consultant with hands-on experience across the full implementation lifecycle — functional testing, UAT, BRD/FRD documentation, and change control on a live 9-store Odoo rollout. Skilled at bridging business users, developers, and vendors.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="btn-crimson-solid"
              >
                <span>View Projects</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={profile.resumePdf}
                download
                className="btn-crimson-outline flex items-center gap-2"
              >
                <FileText size={14} className="text-red-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Center Column: TRANSPARENT CUTOUT PERSON (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center items-end order-1 lg:order-2 relative z-10 -mb-6 sm:-mb-8">
            <div className="relative w-full max-w-[380px] sm:max-w-[450px] lg:max-w-[480px] flex justify-center items-end">
              
              {/* Crimson Atmospheric Spotlight Glow Behind Cutout */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-600/25 rounded-full blur-3xl pointer-events-none"></div>

              {/* The Seamless Transparent Cutout Image */}
              <img
                src={profile.photo}
                alt={`${profile.name} - ERP Functional Consultant`}
                className="relative z-10 w-full h-auto max-h-[520px] sm:max-h-[620px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)'
                }}
              />

            </div>
          </div>

          {/* Right Column: Vertical Stat Counters (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 order-3 pb-2 lg:pb-6 z-20">
            {stats.map((st) => (
              <div
                key={st.label}
                className="editorial-card p-4 rounded-xl text-left border-l-2 hover:border-l-red-500 transition-all group"
              >
                <div className="font-bebas text-3xl sm:text-4xl text-white group-hover:text-red-500 transition-colors leading-none mb-0.5">
                  {st.number}
                </div>
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-0.5">
                  {st.label}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {st.sub}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
