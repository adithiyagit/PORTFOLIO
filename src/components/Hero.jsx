import React, { useState, useEffect } from 'react';
import { FileText, ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

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
    <section id="hero" className="pt-8 pb-16 overflow-hidden relative">
      
      {/* =====================================================================
          GIANT "PORTFOLIO" CONDENSED HEADLINE (Pinterest Signature Feature)
          ===================================================================== */}
      <div className="absolute top-2 inset-x-0 flex justify-center z-0 pointer-events-none opacity-90 select-none overflow-hidden">
        <h1 className="giant-portfolio-text">
          PORTFOLIO
        </h1>
      </div>

      <div className="container relative z-10 pt-12 md:pt-16">
        
        {/* Availability Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{profile.availability} • {profile.mobility}</span>
          </div>
        </div>

        {/* 3-Column Hero Grid: Left Content | Center Portrait | Right Stats Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bio & Introduction (5 cols) */}
          <div className="lg:col-span-5 text-left order-2 lg:order-1">
            <div className="font-script text-3xl sm:text-4xl text-red-400 font-bold mb-1">
              Hello, I'm
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-none mb-3">
              {profile.firstName}
              <br />
              <span className="text-red-500">{profile.lastName}</span>
            </h2>

            {/* Dynamic Typewriter Role */}
            <div className="inline-block px-3 py-1 bg-red-950/40 border-l-2 border-red-500 text-slate-200 text-xs sm:text-sm font-semibold tracking-wide mb-4">
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

          {/* Center Column: Portrait Layered over PORTFOLIO (4 cols) */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative group max-w-[320px] sm:max-w-[360px] w-full">
              
              {/* Subtle Red Halo Behind Portrait */}
              <div className="absolute -inset-2 bg-gradient-to-t from-red-600/30 via-rose-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition duration-500"></div>

              {/* Portrait Container with Bottom Gradient Fade */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0c050a]">
                <img
                  src={profile.photo}
                  alt="Adithiya B Vinu - ERP Functional Consultant"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top filter contrast-[1.03] brightness-[1.02] group-hover:scale-102 transition-transform duration-500"
                />

                {/* Bottom Shadow Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#090407] via-[#090407]/60 to-transparent pointer-events-none"></div>

                {/* Portrait Overlay Tag */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between z-10 px-3 py-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/10">
                  <div className="text-left">
                    <div className="text-xs font-bold text-white tracking-wide">
                      {profile.name}
                    </div>
                    <div className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">
                      Odoo Functional Consultant
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Vertical Stat Counters (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4 order-3">
            {stats.map((st, i) => (
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
