import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Layers, X, FileText, ExternalLink } from 'lucide-react';

export default function Projects({ projects }) {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative bg-[#0b0509]/80 border-t border-white/5">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">
              PROVEN IMPLEMENTATIONS
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              SELECTED PROJECTS
            </h2>
          </div>
          
          <div className="text-xs text-slate-400 font-sans max-w-sm">
            High-impact enterprise ERP deployments and quality governance frameworks. Click any project for the complete case study.
          </div>
        </div>

        {/* 3 Minimalist Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="editorial-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
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

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {proj.title}
                </h3>
                
                {/* One-line Scope / Impact */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                  {proj.scope}
                </p>

                {/* Top 2 Key Highlights Pills */}
                <div className="space-y-2 mb-6">
                  {proj.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 font-semibold">
                  {proj.year}
                </span>

                <button
                  onClick={() => setActiveModalProject(proj)}
                  className="btn-crimson-outline text-[11px] py-1.5 px-3 flex items-center gap-1.5 hover:bg-red-600 hover:text-white transition-all cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* =====================================================================
          INTERACTIVE CASE STUDY DETAIL MODAL
          ===================================================================== */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="editorial-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 relative border border-red-500/30 shadow-2xl shadow-red-950/50 bg-[#0e060b]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Platform & Year */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bebas text-2xl text-red-500">
                {activeModalProject.id} //
              </span>
              <span className="px-2.5 py-0.5 rounded bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                {activeModalProject.platform}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {activeModalProject.year}
              </span>
            </div>

            {/* Title & Scope */}
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide mb-2">
              {activeModalProject.title}
            </h3>
            <div className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider mb-6 pb-3 border-b border-white/10">
              {activeModalProject.scope}
            </div>

            {/* Executive Overview */}
            <div className="mb-6">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                Executive Overview:
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {activeModalProject.desc}
              </p>
            </div>

            {/* Key Deliverables & Test Scope */}
            <div className="mb-6">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 font-mono">
                Core Deliverables &amp; Outcomes:
              </div>
              <div className="space-y-2.5">
                {activeModalProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8 pt-4 border-t border-white/10">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                Implementation Tags:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setActiveModalProject(null)}
                className="btn-crimson-solid text-xs py-2 px-4"
              >
                Discuss This Implementation
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="btn-crimson-outline text-xs py-2 px-4"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
