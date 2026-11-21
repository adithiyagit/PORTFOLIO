import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Star, FileText, CheckCircle2 } from 'lucide-react';

export default function Hero({ profile, summary }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profile.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2200);
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
    <section id="hero" className="pt-10 pb-20 overflow-hidden relative">
      <div className="container relative z-10">
        
        {/* Playful Hook Pill (Figma Screenshot Signature) */}
        <div className="flex flex-col items-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#a78bfa] text-xs font-semibold backdrop-blur-md shadow-lg shadow-[#8b5cf6]/10 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span>Immediate Availability • Open to Relocation (India &amp; UAE / GCC)</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-medium tracking-wide">
            <span>✨</span>
            <span className="italic">{profile.hook}</span>
          </div>
        </div>

        {/* Main Headline & Dynamic Typewriter */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            I'm <span className="bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#38bdf8] bg-clip-text text-transparent">Adithiya</span>,
            <br />
            <span className="text-slate-100">
              {displayText}
              <span className="inline-block w-1 h-8 sm:h-12 bg-[#8b5cf6] ml-1 animate-pulse align-middle shadow-[0_0_12px_#8b5cf6]"></span>
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            {profile.subtitle}
          </p>
        </div>

        {/* Center Stage: Futuristic Portrait Hologram & Floating Stat Badges */}
        <div className="relative max-w-2xl mx-auto flex flex-col items-center mb-16">
          
          {/* Left Floating Stat Badge */}
          <div className="hidden md:flex flex-col absolute left-0 lg:-left-12 top-20 z-20 bg-[#0e1022]/90 backdrop-blur-xl border border-[#8b5cf6]/30 rounded-2xl p-4 shadow-2xl shadow-black/70 max-w-[210px] animate-float-gentle hover:border-[#8b5cf6] transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-extrabold text-[#a78bfa]">9 Stores</span>
              <span className="px-2 py-0.5 rounded-full bg-[#8b5cf6]/15 text-[#c4b5fd] text-[10px] font-bold">Odoo</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Live multi-module retail rollout, UAT execution &amp; rotational store training.
            </p>
          </div>

          {/* Central Portrait Card */}
          <div className="relative group">
            {/* Glowing Nebula Ring Behind Portrait */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#7c3aed]/40 via-[#6366f1]/30 to-[#ec4899]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-90"></div>
            
            <div className="relative w-[280px] sm:w-[330px] h-[370px] sm:h-[430px] rounded-3xl overflow-hidden shadow-2xl shadow-[#7c3aed]/30 border-2 border-[#8b5cf6]/40 flex items-end justify-center bg-gradient-to-b from-[#181a32] to-[#0a0b16]">
              <img
                src={profile.photo}
                alt="Adithiya B Vinu - ERP Functional Consultant"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlapping Action Pill Bar */}
              <div className="absolute bottom-4 inset-x-4 bg-[#0a0b16]/90 backdrop-blur-xl border border-white/15 p-1.5 rounded-full flex items-center justify-between shadow-2xl z-20">
                <a
                  href="#projects"
                  className="flex-1 text-center bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:from-[#7c3aed] hover:to-[#4f46e5] text-white text-xs font-bold py-2 px-3 rounded-full transition-all duration-200 shadow-md shadow-[#8b5cf6]/40 text-decoration-none"
                >
                  Portfolio
                </a>
                <a
                  href={profile.resumePdf}
                  download
                  className="flex-1 text-center text-slate-300 hover:text-white text-xs font-semibold py-2 px-3 rounded-full transition-colors flex items-center justify-center gap-1 text-decoration-none"
                >
                  <FileText size={12} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Floating Stat Badge */}
          <div className="hidden md:flex flex-col absolute right-0 lg:-right-12 top-28 z-20 bg-[#0e1022]/90 backdrop-blur-xl border border-[#8b5cf6]/30 rounded-2xl p-4 shadow-2xl shadow-black/70 max-w-[210px] animate-float-gentle hover:border-[#8b5cf6] transition-colors" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-1 text-amber-400 mb-1 text-xs">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
            </div>
            <div className="text-sm font-bold text-white mb-0.5">Full SDLC Delivery</div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Requirements → Design → Build → UAT Testing → Deployment.
            </p>
          </div>

          {/* Mobile Fallback Badges */}
          <div className="flex md:hidden gap-3 mt-4 w-full justify-center">
            <div className="bg-[#0e1022]/90 border border-[#8b5cf6]/30 rounded-xl p-3 text-center flex-1 max-w-[160px]">
              <div className="text-base font-bold text-[#a78bfa]">9 Stores</div>
              <div className="text-[11px] text-slate-300">Live Odoo Rollout</div>
            </div>
            <div className="bg-[#0e1022]/90 border border-[#8b5cf6]/30 rounded-xl p-3 text-center flex-1 max-w-[160px]">
              <div className="text-base font-bold text-white">Full SDLC</div>
              <div className="text-[11px] text-slate-300">UAT Sign-off</div>
            </div>
          </div>
        </div>

        {/* Executive Summary Card */}
        <div id="about" className="max-w-3xl mx-auto bg-[#0d0e1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-[#8b5cf6]/40 transition-colors">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b5cf6] via-[#6366f1] to-[#38bdf8]"></div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-2">
            {summary}
          </p>
        </div>

      </div>
    </section>
  );
}
