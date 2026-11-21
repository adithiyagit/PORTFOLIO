import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Star, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';

export default function Hero({ profile, summary }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profile.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
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
    <section id="hero" className="pt-12 pb-20 overflow-hidden relative">
      <div className="container relative z-10">
        
        {/* Status Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff8526] text-xs font-semibold backdrop-blur-md shadow-lg shadow-[#ff6b00]/10">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span>Immediate Availability • Open to Relocation (India &amp; UAE / GCC)</span>
          </div>
        </div>

        {/* Main Headline & Role Cycler */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            I'm <span className="bg-gradient-to-r from-[#ff6b00] to-[#ffa043] bg-clip-text text-transparent">Adithiya</span>,
            <br />
            <span className="text-slate-200">
              {displayText}
              <span className="inline-block w-1 h-8 sm:h-12 bg-[#ff6b00] ml-1 animate-pulse align-middle"></span>
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg font-medium">
            Odoo Implementation &amp; Business Process Delivery
          </p>
        </div>

        {/* Center Stage: Portrait Arch & Floating Badges */}
        <div className="relative max-w-2xl mx-auto flex flex-col items-center mb-14">
          
          {/* Left Floating Stat Badge (Desktop) */}
          <div className="hidden md:flex flex-col absolute left-2 lg:-left-12 top-24 z-20 bg-[#141622]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/60 max-w-[210px] animate-float-left hover:border-[#ff6b00]/50 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-extrabold text-[#ff6b00]">9 Stores</span>
              <span className="px-2 py-0.5 rounded-full bg-[#ff6b00]/10 text-[#ff8526] text-[10px] font-bold">Odoo</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Live multi-module retail rollout, UAT execution &amp; rotational store training.
            </p>
          </div>

          {/* Center Arch Frame */}
          <div className="relative group">
            {/* Glowing Aura Ring Behind Arch */}
            <div className="absolute -inset-4 bg-gradient-to-b from-[#ff6b00]/30 via-[#ff881a]/20 to-transparent rounded-t-[200px] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-80"></div>
            
            {/* The Arch Container */}
            <div className="relative w-[280px] sm:w-[340px] h-[380px] sm:h-[440px] bg-gradient-to-b from-[#ff6b00] via-[#ff7d1a] to-[#ffa347] rounded-t-[170px] rounded-b-[24px] overflow-hidden shadow-2xl shadow-[#ff6b00]/25 border-2 border-[#ff8526]/40 flex items-end justify-center">
              <img
                src={profile.photo}
                alt="Adithiya B Vinu - Junior Project Manager"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlapping Action Pill Bar */}
              <div className="absolute bottom-4 inset-x-4 bg-[#0d0f17]/90 backdrop-blur-xl border border-white/15 p-1.5 rounded-full flex items-center justify-between shadow-2xl z-20">
                <a
                  href="#projects"
                  className="flex-1 text-center bg-[#ff6b00] hover:bg-[#ff7d1a] text-white text-xs font-bold py-2 px-3 rounded-full transition-all duration-200 shadow-md shadow-[#ff6b00]/40"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="flex-1 text-center text-slate-300 hover:text-white text-xs font-semibold py-2 px-3 rounded-full transition-colors"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>

          {/* Right Floating Stat Badge (Desktop) */}
          <div className="hidden md:flex flex-col absolute right-2 lg:-right-12 top-28 z-20 bg-[#141622]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/60 max-w-[210px] animate-float-right hover:border-[#ff6b00]/50 transition-colors">
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
            <div className="bg-[#141622]/90 border border-white/10 rounded-xl p-3 text-center flex-1 max-w-[160px]">
              <div className="text-base font-bold text-[#ff6b00]">9 Stores</div>
              <div className="text-[11px] text-slate-300">Live Odoo Rollout</div>
            </div>
            <div className="bg-[#141622]/90 border border-white/10 rounded-xl p-3 text-center flex-1 max-w-[160px]">
              <div className="text-base font-bold text-white">Full SDLC</div>
              <div className="text-[11px] text-slate-300">UAT Sign-off</div>
            </div>
          </div>
        </div>

        {/* Executive Summary Card */}
        <div id="about" className="max-w-3xl mx-auto bg-[#121420]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-[#ff6b00]/40 transition-colors">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff6b00] to-[#ffa14a]"></div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-2">
            {summary}
          </p>
        </div>

      </div>
    </section>
  );
}
