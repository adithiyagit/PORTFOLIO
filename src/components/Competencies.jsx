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
    <section id="competencies" className="py-24 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#a78bfa] text-xs font-bold uppercase tracking-wider mb-3">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Core Competencies &amp; Solutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging business goals and technical execution across every phase of enterprise ERP delivery.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp) => {
            const Icon = iconMap[comp.icon] || ShieldCheck;
            return (
              <div
                key={comp.id}
                className="bg-[#0e0f1e]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#8b5cf6]/50 transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden"
              >
                {/* Top Glowing Gradient Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 flex items-center justify-center text-[#a78bfa] mb-5 group-hover:scale-110 group-hover:bg-[#8b5cf6]/20 transition-all duration-300 shadow-md shadow-[#8b5cf6]/15">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#a78bfa] transition-colors">
                  {comp.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {comp.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {comp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] font-semibold text-slate-300 group-hover:border-[#8b5cf6]/30 transition-colors"
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
