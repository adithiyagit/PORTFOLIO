import React, { useState } from 'react';
import { GraduationCap, Wrench, CheckCircle2, ArrowRight, Quote, Globe, GitBranch } from 'lucide-react';

export default function ProcessAndSkills({ education, skillsList, workProcess, profile }) {
  const [activeTab, setActiveTab] = useState('process'); // 'process' | 'skills' | 'education'

  const skillGroups = [
    {
      title: "ERP & Platforms",
      skills: ["Odoo ERP (v16/v17/v18)", "ERPNext", "Frappe Framework"]
    },
    {
      title: "Business Analysis",
      skills: ["BRD & FRD Authoring", "Gap Analysis", "Process Mapping (BPMN)"]
    },
    {
      title: "QA & Testing",
      skills: ["UAT Coordination & Sign-off", "Structured Test Case Design", "Defect Triage"]
    },
    {
      title: "Delivery & Documentation",
      skills: ["SOP Manuals (18+ authored)", "Jira & Trello Change Control", "MS Excel Reconciliation"]
    }
  ];

  return (
    <section id="process" className="py-20 relative bg-[#090407] border-t border-white/5">
      <div className="container">
        
        {/* Section Header with Minimalist Tab Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">
              METHODOLOGY &amp; QUALIFICATIONS
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              PROCESS &amp; CAPABILITIES
            </h2>
          </div>

          {/* Interactive Navigation Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('process')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === 'process'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              01 // WORK PROCESS
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === 'skills'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              02 // CORE SKILLS
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              03 // EDUCATION &amp; SPECS
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Active Tab Content (8 cols) | Crimson Quote Card (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Interactive Tab Stage (8 cols) */}
          <div className="lg:col-span-8">
            
            {/* TAB 1: WORK PROCESS PIPELINE */}
            {activeTab === 'process' && (
              <div className="editorial-card p-6 sm:p-8 rounded-2xl animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide leading-none">
                    5-STAGE SDLC IMPLEMENTATION LIFECYCLE
                  </h3>
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
                    Governance
                  </span>
                </div>
                <div className="w-full h-px bg-white/10 mb-6"></div>

                <div className="space-y-4">
                  {workProcess.map((item, index) => (
                    <div key={item.step} className="flex items-start gap-4 group">
                      
                      {/* Step Badge & Connector Line */}
                      <div className="flex flex-col items-center shrink-0 w-8">
                        <div className="w-8 h-8 rounded-full bg-[#12080e] border-2 border-red-500 flex items-center justify-center font-bebas text-sm text-white group-hover:bg-red-600 transition-colors shadow-md shadow-red-600/30">
                          {item.step}
                        </div>
                        {index < workProcess.length - 1 && (
                          <div className="w-0.5 h-10 bg-gradient-to-b from-red-500 via-rose-600 to-red-950 my-1"></div>
                        )}
                      </div>

                      {/* Content: Title & Deliverables */}
                      <div className="flex-1 pt-0.5">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
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
            )}

            {/* TAB 2: CORE SKILLS MATRIX */}
            {activeTab === 'skills' && (
              <div className="editorial-card p-6 sm:p-8 rounded-2xl animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide leading-none">
                    FUNCTIONAL COMPETENCIES &amp; TOOLS
                  </h3>
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
                    Verified Capabilities
                  </span>
                </div>
                <div className="w-full h-px bg-white/10 mb-6"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skillGroups.map((grp) => (
                    <div 
                      key={grp.title} 
                      className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all flex flex-col justify-between h-full min-h-[145px]"
                    >
                      <div>
                        <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3 font-mono">
                          {grp.title}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {grp.skills.map((s) => (
                            <span
                              key={s}
                              className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-200 border border-white/10 font-medium"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span>Standard Suite: Odoo, ERPNext, Jira, Trello, MS Excel</span>
                  <a href="#contact" className="text-red-400 hover:text-white font-bold flex items-center gap-1 transition-colors">
                    Request Skills Matrix →
                  </a>
                </div>
              </div>
            )}

            {/* TAB 3: EDUCATION & CREDENTIALS */}
            {activeTab === 'education' && (
              <div className="editorial-card p-6 sm:p-8 rounded-2xl animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide leading-none">
                    ACADEMIC DEGREES &amp; QUALIFICATIONS
                  </h3>
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
                    Verified Credentials
                  </span>
                </div>
                <div className="w-full h-px bg-white/10 mb-6"></div>

                <div className="space-y-4 mb-6">
                  {education.map((edu) => (
                    <div 
                      key={edu.degree} 
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 border-l-2 border-l-red-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-l-red-400 transition-colors"
                    >
                      <div>
                        <div className="text-base font-bold text-white mb-0.5">{edu.degree}</div>
                        <div className="text-xs text-slate-300">{edu.institution}</div>
                      </div>
                      <div className="text-xs font-mono font-bold text-red-400 shrink-0">[ {edu.period} ]</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <div>
                    Languages: <span className="text-white font-semibold">English (Prof.), Malayalam (Native), Tamil, Hindi</span>
                  </div>
                  <div>
                    Citizenship: <span className="text-white font-semibold">{profile.nationality}</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Crimson Quote Card & Quick Specs (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Signature Red Quote Card */}
            <div className="bg-gradient-to-br from-red-600 via-rose-600 to-red-800 text-white p-6 sm:p-7 rounded-2xl shadow-xl shadow-red-900/30 relative overflow-visible group">
              <Quote size={28} className="text-white/25 mb-3" />
              
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

            {/* Quick Contact Action Card */}
            <div className="editorial-card p-5 rounded-2xl flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-white mb-0.5">
                  Ready to Discuss an ERP Role?
                </div>
                <div className="text-[11px] text-slate-400">
                  Open to relocation for India &amp; UAE / GCC opportunities
                </div>
              </div>

              <a
                href="#contact"
                className="btn-crimson-solid text-[10px] py-2 px-3.5 shrink-0"
              >
                Connect →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
