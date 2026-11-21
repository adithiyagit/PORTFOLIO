import React from 'react';
import { Calendar, MapPin, Radio } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-24 relative bg-[#060312]/90 border-t border-[#8b5cf6]/20">
      <div className="container max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="hud-badge mb-3">
            <Radio size={13} className="text-[#38bdf8] animate-pulse" />
            <span>[ 04 // EXPEDITION LOGS ]</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase mb-3">
            Mission History &amp; Operations
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans">
            Hands-on execution across live multi-module implementations, UAT sign-offs, and SDLC change governance.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-6">
          {experience.map((exp, idx) => (
            <div
              key={exp.company}
              className="hud-card p-6 sm:p-8 rounded-2xl group"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/5">
                <div>
                  <div className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider mb-1">
                    MISSION LOG #0{idx + 1} // {exp.type}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-medium mt-1 font-sans">
                    <span className="text-[#d8b4fe] font-bold">{exp.company}</span>
                    <span>•</span>
                    <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                      <MapPin size={12} className="text-[#38bdf8]" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#120a2e] border border-[#8b5cf6]/40 text-[#d8b4fe] text-[11px] font-mono font-bold self-start sm:self-auto rounded">
                  <Calendar size={12} className="text-[#38bdf8]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullets List */}
              <ul className="flex flex-col gap-3 font-sans">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="text-[#38bdf8] font-mono mt-0.5 shrink-0">&gt;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
