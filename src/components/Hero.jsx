import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, CheckCircle2, Store, ShieldCheck, BookOpen, Layers } from 'lucide-react';

export default function Hero({ profile, deliveryHighlights = [] }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [reentryPulse, setReentryPulse] = useState(false);

  const heroRef = useRef(null);

  // Typewriter effect with fixed container height to avoid layout jump
  useEffect(() => {
    const currentRole = profile.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 28 : 55;

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

  // Viewport re-entry detection: triggers animation whenever user scrolls back to the image
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReentryPulse(true);
          const t = setTimeout(() => setReentryPulse(false), 1400);
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.25 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: Number((x * 12).toFixed(2)),
      y: Number((-y * 12).toFixed(2))
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsImageHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="pt-6 pb-12 sm:pb-16 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Anchor for About navigation */}
      <div id="about" className="absolute -top-24 pointer-events-none"></div>
      
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

            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[0.9] mb-3">
              {profile.firstName}
              <br />
              <span className="text-red-500">{profile.lastName}</span>
            </h2>

            {/* Dynamic Typewriter Role with Locked Height (zero layout jumping) */}
            <div className="h-8 flex items-center px-3 bg-red-950/50 border-l-2 border-red-500 text-slate-200 text-xs sm:text-sm font-semibold tracking-wide mb-4 w-fit">
              <span>{displayText}</span>
              <span className="inline-block w-1.5 h-4 bg-red-500 ml-1.5 animate-pulse align-middle"></span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans max-w-md">
              ERP Functional Consultant bridging business operations and technical delivery. Specialized in multi-module Odoo implementations, UAT governance, and 9-store retail rollouts.
            </p>

            {/* Primary Action Buttons with Standardized Dimensions */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="#projects"
                className="btn-crimson-solid h-11 px-5 inline-flex items-center justify-center gap-2 text-xs font-bold tracking-wider"
              >
                <span>View Selected Projects</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="#contact"
                className="btn-crimson-outline h-11 px-5 inline-flex items-center justify-center gap-2 text-xs font-bold tracking-wider"
              >
                <Mail size={14} className="text-red-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Quick Internal Jump Links */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="text-red-500 font-bold">NAVIGATE:</span>
              <a href="#projects" className="hover:text-white hover:underline transition-colors">[ Projects ]</a>
              <a 
                href="#process" 
                onClick={() => window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'process' }))} 
                className="hover:text-white hover:underline transition-colors"
              >
                [ Process ]
              </a>
              <a href="#experience" className="hover:text-white hover:underline transition-colors">[ Experience ]</a>
              <a 
                href="#education" 
                onClick={() => window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'education' }))} 
                className="hover:text-white hover:underline transition-colors"
              >
                [ Education ]
              </a>
              <a href="#contact" className="hover:text-white hover:underline transition-colors">[ Contact ]</a>
            </div>
          </div>

          {/* Center Column: TRANSPARENT CUTOUT PERSON WITH DYNAMIC INTERACTIVE ANIMATIONS (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center items-end order-1 lg:order-2 relative z-10 -mb-6 sm:-mb-8">
            <div 
              className="relative w-full max-w-[380px] sm:max-w-[450px] lg:max-w-[480px] flex justify-center items-end cursor-pointer group"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
              style={{
                transform: isHovered 
                  ? `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` 
                  : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            >
              
              {/* Crimson Atmospheric Spotlight Glow Behind Cutout (Reactive on Hover & Scroll Re-entry) */}
              <div 
                className={`absolute bottom-6 left-1/2 rounded-full pointer-events-none transition-all duration-700 ${
                  reentryPulse ? 'animate-hero-reentry' : 'animate-aura-bloom'
                } ${
                  isImageHovered 
                    ? 'w-96 h-96 sm:w-[440px] sm:h-[440px] bg-red-600/40 blur-3xl scale-125' 
                    : 'w-80 h-80 sm:w-96 sm:h-96 bg-red-600/30 blur-3xl scale-100'
                }`}
              ></div>

              {/* Seamless Floating Container (kicks in gently after entrance) */}
              <div className="relative z-10 w-full flex justify-center items-end animate-portrait-floating">
                
                {/* The Seamless Transparent Cutout Image with Entrance & Hover Elevation */}
                <img
                  src={profile.photo}
                  alt={`${profile.name} - ERP Functional Consultant`}
                  className={`relative z-10 w-full h-auto max-h-[520px] sm:max-h-[620px] object-contain object-bottom animate-portrait-entrance transition-all duration-500 ${
                    isImageHovered 
                      ? 'scale-[1.03] drop-shadow-[0_30px_70px_rgba(0,0,0,0.98)] drop-shadow-[0_0_35px_rgba(239,68,68,0.5)]' 
                      : 'drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]'
                  }`}
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)'
                  }}
                />

                {/* Diagonal Light Sheen Beam on Image Arrival/Hover */}
                {isImageHovered && (
                  <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent portrait-hover-sheen"></div>
                  </div>
                )}
              </div>

              {/* Interactive Status Pill Badge */}
              <div className="absolute -bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-[#150710]/90 backdrop-blur-md border border-red-500/40 shadow-xl shadow-red-950/60 flex items-center gap-2 whitespace-nowrap transition-all duration-300 opacity-95 group-hover:scale-105 group-hover:border-red-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-200 tracking-wider">
                  LIVE RETAIL ERP ROLLOUT // 9 STORES
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: STANDARDIZED EXECUTIVE IMPLEMENTATION CONSOLE (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-3 order-3 pb-2 lg:pb-6 z-20">
            
            {/* 1. Live Multi-Store Rollout Card */}
            <div className="editorial-card h-[98px] sm:h-[104px] p-3 sm:p-3.5 rounded-xl text-left border-l-2 border-l-red-500 hover:border-l-red-400 transition-all group flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-bebas text-3xl text-white group-hover:text-red-500 transition-colors leading-none">
                  09+ <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-normal">Stores</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-mono font-bold border border-emerald-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Network
                </span>
              </div>
              <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
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
            <div className="editorial-card h-[98px] sm:h-[104px] p-3 sm:p-3.5 rounded-xl text-left border-l-2 border-l-red-500 hover:border-l-red-400 transition-all group flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-bebas text-3xl text-white group-hover:text-red-500 transition-colors leading-none">
                  100% <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-normal">Sign-Off</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-mono font-bold border border-emerald-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Zero Blockers
                </span>
              </div>
              <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                Quality &amp; UAT Governance
              </div>
              <div className="flex flex-wrap gap-1">
                {["Test Suites", "Defect Triage", "Regression", "Sign-Off"].map((item) => (
                  <span key={item} className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-slate-300 border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. SOP Governance Card */}
            <div className="editorial-card h-[98px] sm:h-[104px] p-3 sm:p-3.5 rounded-xl text-left border-l-2 border-l-red-500 hover:border-l-red-400 transition-all group flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-bebas text-3xl text-white group-hover:text-red-500 transition-colors leading-none">
                  18+ <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-normal">Manuals</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-950/40 text-red-300 text-[9px] font-mono font-bold border border-red-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  Standardized
                </span>
              </div>
              <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                SOP Library &amp; Matrices
              </div>
              <div className="flex flex-wrap gap-1">
                {["Sales", "Purchase", "Recon", "Job Work", "Audit"].map((tag) => (
                  <span key={tag} className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-slate-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Full SDLC Delivery Card */}
            <div className="editorial-card h-[98px] sm:h-[104px] p-3 sm:p-3.5 rounded-xl text-left border-l-2 border-l-red-500 hover:border-l-red-400 transition-all group flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-bebas text-3xl text-white group-hover:text-red-500 transition-colors leading-none">
                  SDLC <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-normal">Lifecycle</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 text-slate-400 text-[9px] font-mono font-bold border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  SLA Governed
                </span>
              </div>
              <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                Full Lifecycle Bridge
              </div>
              <div className="flex flex-wrap gap-1">
                {["Odoo", "ERPNext", "Jira", "MS Excel", "BPMN"].map((tool) => (
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
