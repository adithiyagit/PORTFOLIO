import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience({ experience }) {
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
          
          <div className="text-xs text-slate-400 font-sans max-w-md">
            Hands-on execution across live multi-module implementations, change request scoping, and structured end-user enablement.
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={exp.company}
              className="editorial-card p-6 sm:p-8 pl-8 sm:pl-10 rounded-2xl group relative overflow-visible"
            >
              {/* Left Accent Crimson Line */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-600 via-rose-600 to-transparent rounded-l-2xl"></div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="pl-1">
                  {/* Role Title with Explicitly Highlighted & Visible First Letter (J & P) */}
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors tracking-wide">
                      <span className="text-red-500 font-extrabold text-2xl sm:text-3xl inline-block mr-0.5">
                        {exp.role.charAt(0)}
                      </span>
                      <span>{exp.role.slice(1)}</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-semibold mt-1.5 pl-4.5">
                    <span className="text-red-400 font-bold">{exp.company}</span>
                    <span>•</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <MapPin size={12} className="text-red-500" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-bold rounded self-start sm:self-auto shrink-0">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points from Resume */}
              <ul className="space-y-3 font-sans pl-1">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="text-red-500 font-bold mt-1 shrink-0">▸</span>
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
