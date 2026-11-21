import React from 'react';
import { GraduationCap, Globe, CheckCircle2 } from 'lucide-react';

export default function EducationMobility({ education, languages, profile }) {
  return (
    <section id="credentials" className="py-24 relative bg-[#060312]/90 border-t border-[#8b5cf6]/20">
      <div className="container max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="hud-badge mb-3">
            <span>[ 06 // ASTRONAUT CREDENTIALS &amp; MOBILITY ]</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase mb-3">
            Credentials &amp; Relocation
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans">
            Formal postgraduate software engineering education backed by scientific rigor and international mobility readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education HUD Card */}
          <div className="hud-card p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#38bdf8]">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide">
                  Academic Background
                </h3>
                <span className="text-[10px] font-mono text-[#a78bfa]">VERIFIED QUALIFICATIONS</span>
              </div>
            </div>

            <div className="space-y-6 font-sans">
              {education.map((edu) => (
                <div key={edu.degree} className="relative pl-4 border-l-2 border-[#38bdf8]">
                  <div className="text-sm sm:text-base font-bold text-white mb-0.5">{edu.degree}</div>
                  <div className="text-xs text-slate-300 font-medium mb-1">{edu.institution}</div>
                  <div className="text-[11px] font-mono font-bold text-[#d8b4fe]">[ {edu.period} ]</div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal & Mobility HUD Card */}
          <div className="hud-card p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#38bdf8]">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide">
                  Flight &amp; Mobility Specs
                </h3>
                <span className="text-[10px] font-mono text-[#a78bfa]">OPERATIONAL CLEARANCE</span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs font-sans">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400 font-mono text-[11px]">AVAILABILITY</span>
                <span className="font-mono font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded border border-[#10b981]/30">
                  {profile.availability}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400 font-mono text-[11px]">MOBILITY TARGET</span>
                <span className="font-semibold text-white">{profile.mobility}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400 font-mono text-[11px]">CITIZENSHIP</span>
                <span className="font-semibold text-white">{profile.nationality}</span>
              </div>

              <div className="pt-2">
                <div className="text-slate-400 font-mono text-[11px] mb-2">COMMUNICATION FREQUENCIES (LANGUAGES):</div>
                <div className="flex flex-wrap gap-1.5">
                  {languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-2.5 py-1 rounded bg-[#120a2e] text-[11px] font-mono text-slate-200 border border-[#8b5cf6]/30"
                    >
                      {lang.name} <span className="text-[#38bdf8]">({lang.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
