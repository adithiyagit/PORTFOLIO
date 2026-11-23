import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function Experience({ experience }) {
  // Allow toggling of detailed bullet points per job
  const [expandedJobs, setExpandedJobs] = useState({ 0: false, 1: false });

  const toggleExpand = (idx) => {
    setExpandedJobs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="experience" className="py-20 relative bg-[#0b0509]/80 border-t border-white/5">
      <div className="container max-w-4xl">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">
              CAREER TIMELINE
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              WORK EXPERIENCE
            </h2>
          </div>
          
          <div className="text-xs text-slate-400 font-sans max-w-sm">
            Live implementation governance, UAT coordination, and client training. Click to view detailed test and documentation scope.
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {experience.map((exp, idx) => {
            const isExpanded = expandedJobs[idx];

            return (
              <div
                key={exp.company}
                className="editorial-card p-6 sm:p-8 pl-8 sm:pl-10 rounded-2xl group relative overflow-visible transition-all duration-300"
              >
                {/* Left Accent Crimson Line */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-600 via-rose-600 to-transparent rounded-l-2xl"></div>

                <div className="flex flex-col gap-4">
                  {/* Header Row: Role & Company on Left, Date Badge on Right */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-white/10">
                    <div className="flex-1 min-w-0">
                      
                      {/* Role Title with Bold Initial Letter (J & P) */}
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors tracking-wide leading-tight">
                          <span className="text-red-500 font-extrabold text-2xl sm:text-3xl inline-block mr-0.5">
                            {exp.role.charAt(0)}
                          </span>
                          <span>{exp.role.slice(1)}</span>
                        </h3>
                      </div>

                      {/* Company Name with Explicit High-Contrast Initial Letter (E & T) & Location */}
                      <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-300 font-semibold pl-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white font-bold tracking-wide">
                          <span className="text-red-500 font-black text-sm">{exp.company.charAt(0)}</span>
                          <span className="text-white font-bold">{exp.company.slice(1)}</span>
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-300 flex items-center gap-1 font-medium">
                          <MapPin size={13} className="text-red-400 shrink-0" /> {exp.location}
                        </span>
                      </div>

                    </div>

                    {/* Period / Date Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-bold rounded self-start sm:self-auto shrink-0">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* One-Sentence Summary: Aligned Exactly with pl-4 */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pl-4">
                    {idx === 0
                      ? "Leading functional validation, UAT planning & execution, and rotational batch end-user training for a live 9-store Odoo retail rollout across 6 core business modules."
                      : "Managed client change requests end-to-end using Jira, sprint planning, and delivered documented ERPNext workflows within agreed SLAs."}
                  </p>

                  {/* Interactive Expand / Collapse Toggle Button: Aligned Exactly with pl-4 */}
                  <div className="pl-4 pt-1 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-white transition-colors cursor-pointer py-1"
                    >
                      <span>
                        {isExpanded
                          ? "Hide Detailed Responsibilities"
                          : `View Full Deliverables & Test Scope (${exp.bullets.length} items)`}
                      </span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider hidden sm:inline">
                      {exp.type}
                    </span>
                  </div>

                  {/* Detailed Bullets: Aligned Exactly with pl-4 */}
                  {isExpanded && (
                    <ul className="mt-2 pt-4 border-t border-white/5 space-y-3 font-sans pl-4 animate-in fade-in duration-200">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <span className="text-red-500 font-bold mt-1 shrink-0">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
