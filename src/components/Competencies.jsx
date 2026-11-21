import React from 'react';
import {
  ShieldCheck,
  Users,
  FileSpreadsheet,
  CheckCircle2,
  BookOpen,
  Cpu
} from 'lucide-react';

export default function Competencies({ competencies }) {
  const iconMap = {
    ShieldAlert: ShieldCheck,
    Users: Users,
    FileSpreadsheet: FileSpreadsheet,
    CheckCircle2: CheckCircle2,
    BookOpen: BookOpen,
    Cpu: Cpu
  };

  return (
    <section id="competencies" className="py-24 relative bg-[#070316]/60">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="hud-badge mb-3">
            <span>[ 03 // MISSION OBJECTIVES ]</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase mb-3">
            Core Competencies &amp; Solutions
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans">
            Bridging business goals and technical execution across every phase of enterprise ERP delivery.
          </p>
        </div>

        {/* 6-Card HUD Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp) => {
            const Icon = iconMap[comp.icon] || ShieldCheck;
            return (
              <div
                key={comp.id}
                className="hud-card p-6 flex flex-col justify-between rounded-xl group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#d8b4fe] mb-5 group-hover:scale-110 group-hover:text-[#38bdf8] group-hover:border-[#38bdf8]/50 transition-all duration-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-display text-base font-bold text-white mb-2.5 group-hover:text-[#38bdf8] transition-colors uppercase tracking-wide">
                    {comp.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {comp.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {comp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded bg-[#130a2e] border border-[#8b5cf6]/30 text-[10px] font-mono text-[#d8b4fe] group-hover:border-[#38bdf8]/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
