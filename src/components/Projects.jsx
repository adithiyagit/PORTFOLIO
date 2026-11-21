import React from 'react';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 relative bg-[#0b0509]/80 border-t border-white/5">
      <div className="container">
        
        {/* Section Header (Pinterest Style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">
              PROVEN IMPLEMENTATIONS
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              SELECTED PROJECTS
            </h2>
          </div>
          
          <div className="text-xs text-slate-400 font-sans max-w-md">
            Multi-module retail rollouts, custom ERP builds, and verified quality governance frameworks delivered with zero critical blockers.
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="editorial-card p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Red Line on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Index & Platform Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bebas text-2xl text-red-500 font-normal">
                    {proj.id} //
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-red-950/60 border border-red-500/30 text-red-400 text-[11px] font-bold tracking-wider uppercase">
                    {proj.platform}
                  </span>
                </div>

                {/* Title & Scope */}
                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-red-400 transition-colors">
                  {proj.title}
                </h3>
                
                <div className="text-xs text-slate-400 font-medium mb-4">
                  {proj.scope}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {proj.desc}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {proj.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-semibold text-slate-400 border border-white/5 group-hover:border-red-500/30 group-hover:text-slate-300 transition-colors"
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
