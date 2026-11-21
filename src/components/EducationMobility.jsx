import React from 'react';
import { GraduationCap, Globe, CheckCircle2 } from 'lucide-react';

export default function EducationMobility({ education, languages, profile }) {
  return (
    <section className="py-20 relative bg-[#090a10]/50 border-t border-white/5">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <div className="bg-[#121420]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#ff6b00]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/25 flex items-center justify-center text-[#ff8526]">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Academic Background</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="relative pl-4 border-l-2 border-[#ff6b00]">
                  <div className="text-base font-bold text-white mb-0.5">{edu.degree}</div>
                  <div className="text-xs text-slate-300 font-medium mb-1">{edu.institution}</div>
                  <div className="text-[11px] font-bold text-[#ff8526]">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal & Mobility Info Card */}
          <div className="bg-[#121420]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#ff6b00]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/25 flex items-center justify-center text-[#ff8526]">
                <Globe size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Personal &amp; Mobility</h3>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400 text-xs">Availability</span>
                <span className="font-bold text-[#ff8526] text-xs uppercase tracking-wider">{profile.availability}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400 text-xs">Mobility</span>
                <span className="font-semibold text-white text-xs">{profile.mobility}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400 text-xs">Nationality</span>
                <span className="font-semibold text-white text-xs">{profile.nationality}</span>
              </div>
              <div className="pt-2">
                <div className="text-slate-400 text-xs mb-2">Languages:</div>
                <div className="flex flex-wrap gap-1.5">
                  {languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-medium text-slate-300 border border-white/5"
                    >
                      {lang.name} <span className="text-[#ff8526]">({lang.level})</span>
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
