import React from 'react';
import { GraduationCap, Wrench, CheckCircle2, ArrowRight, Quote } from 'lucide-react';

export default function ProcessAndSkills({ education, skillsList, workProcess, profile }) {
  return (
    <section id="process" className="py-20 relative bg-[#090407] border-t border-white/5">
      <div className="container">
        
        {/* Section Main Grid: Education & Skills (4 cols) | Work Process (5 cols) | Crimson Quote (3 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ===================================================================
              COLUMN 1: EDUCATION & SKILLS (4 Cols)
              =================================================================== */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Education Block */}
            <div id="education" className="editorial-card p-6 rounded-2xl">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                <GraduationCap size={18} className="text-red-500" />
                <h3 className="font-bebas text-2xl text-white tracking-wide">
                  EDUCATION
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="pl-3 border-l-2 border-red-500/60">
                    <div className="text-sm font-bold text-white mb-0.5">{edu.degree}</div>
                    <div className="text-xs text-slate-400 mb-1">{edu.institution}</div>
                    <div className="text-[11px] font-bold text-red-400">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills Block */}
            <div className="editorial-card p-6 rounded-2xl">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                <Wrench size={18} className="text-red-500" />
                <h3 className="font-bebas text-2xl text-white tracking-wide">
                  CORE SKILLS
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded bg-white/5 text-xs font-medium text-slate-300 border border-white/10 hover:border-red-500/40 hover:text-white transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ===================================================================
              COLUMN 2: WORK PROCESS PIPELINE (5 Cols)
              =================================================================== */}
          <div className="lg:col-span-5 editorial-card p-6 sm:p-8 rounded-2xl">
            {/* Heading Container with Safe Spacing */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bebas text-3xl text-white tracking-wide leading-none">
                WORK PROCESS
              </h3>
              <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
                Full SDLC Delivery
              </span>
            </div>
            <div className="w-full h-px bg-white/10 mb-6"></div>

            {/* Step-by-Step Pipeline with Isolated Columns so Line Never Crosses Text */}
            <div className="space-y-4">
              {workProcess.map((item, index) => (
                <div key={item.step} className="flex items-start gap-3.5 group">
                  
                  {/* Left Column: Number Badge + Connecting Line */}
                  <div className="flex flex-col items-center shrink-0 w-8">
                    <div className="w-8 h-8 rounded-full bg-[#12080e] border-2 border-red-500 flex items-center justify-center font-bebas text-sm text-white group-hover:bg-red-600 transition-colors shadow-md shadow-red-600/30">
                      {item.step}
                    </div>
                    {/* Connecting line to next step */}
                    {index < workProcess.length - 1 && (
                      <div className="w-0.5 h-12 bg-gradient-to-b from-red-500 via-rose-600 to-red-950 my-1"></div>
                    )}
                  </div>

                  {/* Right Column: Title, Tag & Description (Completely Isolated from Line) */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors">
                        {item.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-950/40 border border-red-500/30 text-red-300">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* ===================================================================
              COLUMN 3: CRIMSON QUOTE & PERSONAL SPECS (3 Cols)
              =================================================================== */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* The Signature Red Quote Card (Pinterest Reference) */}
            <div className="bg-gradient-to-br from-red-600 via-rose-600 to-red-800 text-white p-6 sm:p-7 rounded-2xl shadow-xl shadow-red-900/30 relative overflow-visible group">
              <Quote size={32} className="text-white/25 mb-3" />
              
              <p className="font-serif italic text-sm sm:text-base leading-relaxed text-white/95 mb-6">
                "{profile.quote}"
              </p>

              <div className="pt-4 border-t border-white/25 flex items-center justify-between gap-4">
                <div className="pl-1">
                  <div className="font-bebas text-xl sm:text-2xl tracking-wider text-white mb-0.5">
                    {profile.name}
                  </div>
                  <div className="text-xs font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                    <span>
                      <span className="text-white font-black text-sm">F</span>unctional Consultant
                    </span>
                  </div>
                </div>
                <div className="font-script text-2xl text-white/90 shrink-0">
                  Adithiya
                </div>
              </div>
            </div>

            {/* Mobility & Flight Specs Card */}
            <div className="editorial-card p-5 rounded-2xl space-y-3">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                MOBILITY &amp; RELOCATION
              </div>

              <div className="text-xs text-slate-300 flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Availability:</span>
                <span className="font-bold text-emerald-400">Immediate</span>
              </div>

              <div className="text-xs text-slate-300 flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Target Markets:</span>
                <span className="font-semibold text-white">India &amp; UAE / GCC</span>
              </div>

              <div className="text-xs text-slate-300 flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Citizenship:</span>
                <span className="font-semibold text-white">{profile.nationality}</span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] text-slate-400 block mb-1">Languages:</span>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-300">English (Prof.)</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-300">Malayalam (Native)</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-300">Tamil</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-300">Hindi</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
