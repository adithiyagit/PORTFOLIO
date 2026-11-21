import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-24 relative bg-[#06070d]/60">
      <div className="container max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#a78bfa] text-xs font-bold uppercase tracking-wider mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on execution across live multi-module implementations and SDLC change control.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-6">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="bg-[#0e0f1e]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#8b5cf6]/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#8b5cf6] via-[#6366f1] to-transparent"></div>

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#a78bfa] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 font-semibold mt-1">
                    <span className="text-[#a78bfa]">{exp.company}</span>
                    <span>•</span>
                    <span className="text-slate-400 flex items-center gap-1 text-xs">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 text-[#a78bfa] text-xs font-bold self-start sm:self-auto">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullets List */}
              <ul className="flex flex-col gap-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="text-[#8b5cf6] mt-1 shrink-0">▸</span>
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
