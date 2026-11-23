import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, CheckCircle2, Store, ShieldCheck, BookOpen, Layers } from 'lucide-react';

export default function Hero({ profile, deliveryHighlights = [] }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: Number((x * 10).toFixed(2)),
      y: Number((-y * 10).toFixed(2))
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="hero" 
      className="pt-6 pb-12 sm:pb-16 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* =====================================================================
          GIANT "PORTFOLIO" CONDENSED HEADLINE (Behind Center Cutout)
          ===================================================================== */}
      <div className="absolute top-0 inset-x-0 flex justify-center z-0 pointer-events-none select-none overflow-hidden">
        <h1 className="giant-portfolio-text">
          PORTFOLIO
        </h1>
      </div>

      <div className="container relative z-10 pt-8 sm:pt-12">
        
        {/* 3-Column Hero Grid: Left Content | Center Transparent Cutout | Right Enhanced Proof Console */}
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
              ERP Functional Consultant bridging business operations and technical delivery. Specialized in multi-module Odoo implementations, UAT governance, and 9-store retail rollouts.
            </p>

            {/* Primary Action Buttons (NO duplicate resume button) */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="#projects"
                className="btn-crimson-solid"
              >
                <span>View Selected Projects</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="#contact"
                className="btn-crimson-outline flex items-center gap-2"
              >
                <Mail size={14} className="text-red-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Quick Internal Jump Links */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="text-red-500 font-bold">NAVIGATE:</span>
              <a href="#projects" className="hover:text-white hover:underline transition-colors">[ Projects ]</a>
              <a href="#process" className="hover:text-white hover:underline transition-colors">[ Process ]</a>
              <a href="#experience" className="hover:text-white hover:underline transition-colors">[ Experience ]</a>
              <a href="#contact" className="hover:text-white hover:underline transition-colors">[ Contact ]</a>
            </div>
          </div>

          {/* Center Column: TRANSPARENT CUTOUT PERSON (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center items-end order-1 lg:order-2 relative z-10 -mb-6 sm:-mb-8">
            <div 
              className="relative w-full max-w-[380px] sm:max-w-[450px] lg:max-w-[480px] flex justify-center items-end transition-transform duration-300 ease-out"
              style={{
                transform: isHovered 
                  ? `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` 
                  : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              
              {/* Crimson Atmospheric Spotlight Glow Behind Cutout */}
              <div className="absolute bottom-8 left-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-red-600/30 rounded-full blur-3xl pointer-events-none animate-aura-bloom"></div>

              {/* Seamless Floating Container (kicks in gently after entrance) */}
              <div className="relative z-10 w-full flex justify-center items-end animate-portrait-floating">
                {/* The Seamless Transparent Cutout Image with Opening Entrance Reveal */}
                <img
                  src={profile.photo}
                  alt={`${profile.name} - ERP Functional Consultant`}
                  className="relative z-10 w-full h-auto max-h-[520px] sm:max-h-[620px] object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] animate-portrait-entrance"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)'
                  }}
                />
              </div>

            </div>
          </div>

          {/* Right Column: ENHANCED EXECUTIVE IMPLEMENTATION CONSOLE (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-3 order-3 pb-2 lg:pb-6 z-20">
            
            {/* 1. Live Multi-Store Rollout Card */}
            <div className="editorial-card p-3.5 sm:p-4 rounded-xl text-left border-l-2 border-l-red-500 hover:border-l-red-400 transition-all group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bebas text-3xl text-white group-hover:text-red-500 transition-colors leading-none">
                  09+ <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-normal">Stores</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-mono font-bold border border-emerald-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Network
                </span>
              </div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Live Retail Deployment
              </div>
              <div className="flex flex-wrap gap-1">
                {["CRM", "POS", "Inventory", "Accounts", "HR"].map((m) => (
                  <span key={m} className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-slate-300 border border-white/5">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. UAT Quality Gate Card */}
            <div className="editorial-card p-3.5 sm:p-4 rounded-xl text-left border-l-2 border-l-red-500 hover:border-l-red-400 transition-all group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bebas text-3xl text-white group-hover:text-red-500 transition-colors leading-none">
                  100% <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-normal">Sign-Off</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-bold">
                  Zero Blockers
                </span>
              </div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Quality &amp; UAT Governance
              </div>
              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mb-1">
                <div className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-emerald-400 w-full rounded-full"></div>
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Structured Test Cases • Defect Triage
              </div>
            </div>

            {/* 3. SOP Governance Card */}
            <div className="editorial-card p-3.5 sm:p-4 rounded-xl text-left border-l-2 border-l-red-500 hover:border-l-red-400 transition-all group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bebas text-3xl text-white group-hover:text-red-500 transition-colors leading-none">
                  18+ <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-normal">Manuals</span>
                </span>
                <span className="text-[9px] font-mono text-red-300 font-bold px-1.5 py-0.5 rounded bg-red-950/40 border border-red-500/25">
                  Standardized
                </span>
              </div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                SOP Library &amp; Approval Matrices
              </div>
              <div className="text-[10px] text-slate-400 leading-snug">
                Purchase • Sales • HR • Bank Recon • Old Gold / Job Work
              </div>
            </div>

            {/* 4. Full SDLC Delivery Card */}
            <div className="editorial-card p-3.5 sm:p-4 rounded-xl text-left border-l-2 border-l-red-500 hover:border-l-red-400 transition-all group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bebas text-3xl text-white group-hover:text-red-500 transition-colors leading-none">
                  SDLC <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-normal">Lifecycle</span>
                </span>
                <span className="text-[9px] font-mono text-slate-400 font-bold">
                  SLA Governed
                </span>
              </div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                Functional Delivery Bridge
              </div>
              <div className="flex flex-wrap gap-1">
                {["Odoo", "ERPNext", "Jira", "MS Excel"].map((tool) => (
                  <span key={tool} className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-slate-300 border border-white/5">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
