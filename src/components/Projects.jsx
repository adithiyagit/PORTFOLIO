import React from 'react';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 relative bg-[#070316]/70 border-t border-[#8b5cf6]/20">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="hud-badge mb-3">
            <Sparkles size={13} className="text-[#38bdf8]" />
            <span>[ 05 // PLANETARY DEPLOYMENTS ]</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase mb-3">
            Relevant Implementations
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans">
            High-impact enterprise systems delivered with functional precision, structured testing, and zero critical blockers.
          </p>
        </div>

        {/* 2-Card HUD Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, idx) => (
            <div
              key={proj.title}
              className="hud-card p-6 sm:p-8 flex flex-col justify-between rounded-2xl group"
            >
              <div>
                {/* Deployment Tag & Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white text-[11px] font-mono font-bold tracking-wider rounded">
                    <ShieldCheck size={12} className="text-[#38bdf8]" />
                    <span>{proj.platform}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#a78bfa] font-bold">
                    [ {proj.year} ]
                  </span>
                </div>

                {/* Title & Scope */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {proj.title}
                </h3>
                
                <div className="text-xs font-mono font-semibold text-[#d8b4fe] uppercase tracking-wider mb-4 pb-3 border-b border-white/5">
                  &gt; {proj.scope}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {proj.desc}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6 font-sans">
                  {proj.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded bg-[#38bdf8]/15 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] shrink-0">
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
                    className="px-2.5 py-0.5 rounded bg-[#120a2e] text-[10px] font-mono text-[#d8b4fe] border border-[#8b5cf6]/30 group-hover:border-[#38bdf8]/40 transition-colors"
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
