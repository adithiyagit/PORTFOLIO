import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#a78bfa] text-xs font-bold uppercase tracking-wider mb-3">
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Relevant Implementations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            High-impact business systems delivered with rigor and user-centric focus.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-[#0e0f1e]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#8b5cf6]/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden shadow-xl shadow-black/50"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Platform Badge & Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white text-xs font-bold tracking-wide shadow-md shadow-[#7c3aed]/40">
                    {proj.platform}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {proj.year}
                  </span>
                </div>

                {/* Title & Scope */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#a78bfa] transition-colors">
                  {proj.title}
                </h3>
                <div className="text-xs font-semibold text-[#a78bfa] uppercase tracking-wider mb-4">
                  {proj.scope}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {proj.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center text-[#a78bfa] shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-semibold text-slate-300 border border-white/5 group-hover:border-[#8b5cf6]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
