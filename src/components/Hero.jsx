import React, { useState, useEffect } from 'react';
import { FileText, ArrowDown, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero({ profile, summary }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profile.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

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

  const handleScrollToContent = () => {
    const target = document.getElementById('mission-stats') || document.getElementById('cosmos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-8 pb-16 overflow-hidden relative flex flex-col justify-between">
      
      {/* Space Mountains Silhouette Left & Right (Figma Horizon Elements) */}
      <div className="absolute bottom-0 left-0 w-80 h-96 pointer-events-none z-10 opacity-60 hidden lg:block">
        <svg viewBox="0 0 300 360" fill="none" className="w-full h-full">
          <polygon points="0,360 0,160 40,210 90,130 160,240 220,180 270,290 300,360" fill="#0d0822" />
          <polygon points="0,360 0,220 50,260 110,180 180,270 240,230 300,360" fill="#090417" />
          <path d="M90,130 L160,240 L220,180" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-96 pointer-events-none z-10 opacity-60 hidden lg:block">
        <svg viewBox="0 0 300 360" fill="none" className="w-full h-full">
          <polygon points="300,360 300,140 250,220 200,120 130,230 70,170 20,280 0,360" fill="#0d0822" />
          <polygon points="300,360 300,200 240,250 180,170 110,260 50,210 0,360" fill="#090417" />
          <path d="M200,120 L130,230 L70,170" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      </div>

      <div className="container relative z-20 flex-1 flex flex-col items-center justify-center text-center pt-6">
        
        {/* HUD Top Transmission Badge (Figma Screenshot Header) */}
        <div className="flex flex-col items-center mb-6">
          <div className="hud-badge mb-3">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
            <span>[ A MESSAGE FROM EARTH ]</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono tracking-widest uppercase">
            <span className="text-[#38bdf8]">TRANS-ORBITAL FREQUENCY</span>
            <span>•</span>
            <span className="text-[#a78bfa]">RELOCATION CLEARED: INDIA &amp; UAE / GCC</span>
          </div>
        </div>

        {/* The Giant Retro-Arcade Cyber Display Headline */}
        <div className="max-w-5xl mx-auto mb-6">
          <h1 className="cyber-hollow-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-none select-none mb-3">
            HELLO FELLOW GALAXY MEMBER
          </h1>

          {/* Futuristic Bracket Subtitle Line (Figma Signature Element) */}
          <div className="flex items-center justify-center gap-3 my-4 max-w-xl mx-auto">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#a855f7]/60"></div>
            <div className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#d8b4fe] uppercase font-bold px-2 py-0.5 border border-[#8b5cf6]/30 bg-[#0d0725]/80">
              A MESSAGE FROM EARTH
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#a855f7]/60"></div>
          </div>

          {/* Main Identifier: I AM ADITHIYA */}
          <div className="mt-2 mb-4">
            <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]">
              I AM{' '}
              <span className="bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent">
                ADITHIYA
              </span>
            </span>
          </div>

          {/* Dynamic Typewriter Role */}
          <div className="min-h-[38px] flex items-center justify-center">
            <span className="text-sm sm:text-lg font-semibold text-slate-200 tracking-wide font-mono bg-[#0d0724]/60 px-4 py-1 rounded-full border border-white/10">
              <span className="text-[#38bdf8]">$&gt;</span> {displayText}
              <span className="inline-block w-2 h-4 sm:h-5 bg-[#38bdf8] ml-1.5 animate-pulse align-middle"></span>
            </span>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-xl mx-auto mt-4 leading-relaxed">
            {profile.subtitle} • Hands-on execution across multi-module Odoo rollouts, UAT validation, and BRD/FRD change governance.
          </p>
        </div>

        {/* Earth Station Mission Commander Holographic Terminal */}
        <div className="relative z-30 max-w-xl mx-auto mb-10 w-full px-4">
          <div className="hud-card rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 shadow-2xl shadow-[#8b5cf6]/20 bg-[#0c0720]/80">
            
            {/* Commander Photo Capsule */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#38bdf8] via-[#a855f7] to-[#ec4899] rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border border-white/20 bg-[#060312]">
                <img
                  src={profile.photo}
                  alt="Adithiya B Vinu - ERP Functional Consultant"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm py-0.5 text-center text-[9px] font-mono text-[#38bdf8] font-bold">
                  COMMANDER
                </div>
              </div>
            </div>

            {/* Quick Field Telemetry */}
            <div className="text-left flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white tracking-wide uppercase">
                  {profile.name}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#10b981] font-bold px-2 py-0.5 rounded bg-[#10b981]/10 border border-[#10b981]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
                  FLIGHT READY
                </span>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed font-sans">
                Odoo Project Operations Assistant &amp; Functional Consultant. Spearheaded 9-store live retail deployment, 100% UAT sign-off, and 18+ SOP manuals.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="#projects"
                  className="btn-space-primary text-[10px] py-1.5 px-3"
                >
                  View Missions
                </a>
                <a
                  href={profile.resumePdf}
                  download
                  className="btn-space-glass text-[10px] py-1.5 px-3 flex items-center gap-1"
                >
                  <FileText size={12} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* =====================================================================
          THE GIANT EARTH HORIZON & SITTING ASTRONAUT (Figma Centerpiece)
          ===================================================================== */}
      <div className="relative z-20 w-full earth-horizon-stage mt-auto pt-10">
        
        {/* Astronaut Sitting on the Planet with Laptop */}
        <div className="relative -mb-6 z-30 animate-astronaut-float">
          <div className="w-28 sm:w-36 h-28 sm:h-36 relative">
            <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-[0_10px_25px_rgba(56,189,248,0.5)]">
              {/* Backpack Oxygen Tanks */}
              <rect x="42" y="55" width="20" height="48" rx="6" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
              <rect x="98" y="55" width="20" height="48" rx="6" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />

              {/* Astronaut Body & Suit */}
              <ellipse cx="80" cy="85" rx="26" ry="32" fill="#f8fafc" stroke="#64748b" strokeWidth="2.5" />
              
              {/* Mission Patch on Chest */}
              <rect x="74" y="70" width="12" height="8" rx="2" fill="#8b5cf6" />
              <circle cx="80" cy="74" r="2" fill="#38bdf8" />

              {/* Legs Sitting Cross-Legged */}
              <path d="M56 105 C 50 120, 65 130, 80 125 C 95 130, 110 120, 104 105" fill="#e2e8f0" stroke="#64748b" strokeWidth="2.5" />
              <ellipse cx="62" cy="124" rx="9" ry="6" fill="#334155" />
              <ellipse cx="98" cy="124" rx="9" ry="6" fill="#334155" />

              {/* Arms holding laptop */}
              <path d="M58 80 Q 52 100 66 108" stroke="#f8fafc" strokeWidth="9" strokeLinecap="round" />
              <path d="M102 80 Q 108 100 94 108" stroke="#f8fafc" strokeWidth="9" strokeLinecap="round" />

              {/* Laptop Computer */}
              <rect x="64" y="98" width="32" height="18" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="68" y="101" width="24" height="12" rx="1" fill="#0f172a" />
              {/* Glowing laptop screen glow on visor */}
              <line x1="71" y1="105" x2="84" y2="105" stroke="#38bdf8" strokeWidth="1" />
              <line x1="71" y1="108" x2="80" y2="108" stroke="#a855f7" strokeWidth="1" />

              {/* Astronaut Helmet */}
              <circle cx="80" cy="45" r="24" fill="#ffffff" stroke="#64748b" strokeWidth="2.5" />
              
              {/* Helmet Visor with Glowing Cyan / Gold Reflection */}
              <ellipse cx="80" cy="45" rx="16" ry="13" fill="url(#visorGradient)" stroke="#0284c7" strokeWidth="1.5" />
              <ellipse cx="76" cy="42" rx="6" ry="3" fill="#ffffff" opacity="0.6" />

              {/* Antenna */}
              <line x1="98" y1="36" x2="106" y2="24" stroke="#64748b" strokeWidth="2" />
              <circle cx="107" cy="23" r="3" fill="#ef4444" />

              {/* Visor Gradient Definition */}
              <defs>
                <linearGradient id="visorGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#1e1b4b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* The Curved Earth Globe Horizon Arc */}
        <div className="earth-globe-arc">
          <div className="earth-atmosphere-halo"></div>

          {/* Earth Continents and Clouds Texture Overlay */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <svg viewBox="0 0 1000 250" fill="none" className="w-full h-full">
              {/* Continents Shapes */}
              <path d="M120 70 Q 180 50 240 90 T 360 80 T 420 120 T 320 180 T 180 160 Z" fill="#0284c7" />
              <path d="M520 60 Q 600 40 680 80 T 780 110 T 720 170 T 560 150 Z" fill="#0369a1" />
              <path d="M820 90 Q 880 70 940 100 T 980 160 T 900 180 Z" fill="#0284c7" />
              {/* Cyber Coordinate Grid Rings */}
              <ellipse cx="500" cy="240" rx="460" ry="180" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.3" />
              <ellipse cx="500" cy="240" rx="340" ry="130" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.25" />
            </svg>
          </div>

          {/* The Iconic Cyber Targeting Reticle: CLICK TO OPEN */}
          <button
            onClick={handleScrollToContent}
            className="hud-target-reticle z-30 group"
            aria-label="Click to explore mission portfolio"
          >
            <span className="text-[11px] sm:text-xs text-[#38bdf8] font-bold group-hover:text-white transition-colors tracking-[0.2em]">
              CLICK
            </span>
            <span className="text-xs sm:text-sm text-white font-extrabold group-hover:text-[#38bdf8] transition-colors tracking-[0.2em] flex items-center gap-1.5">
              TO OPEN
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>

        </div>

      </div>

    </section>
  );
}
