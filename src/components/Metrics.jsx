import React from 'react';
import { Store, Layers, CheckCircle2, Clock } from 'lucide-react';

export default function Metrics({ metrics }) {
  const icons = [Store, Layers, CheckCircle2, Clock];

  return (
    <section className="py-12 border-y border-white/5 bg-[#0b0c13]/50">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={metric.label}
                className="bg-[#121420]/70 backdrop-blur-lg border border-white/5 rounded-2xl p-5 hover:border-[#ff6b00]/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center text-[#ff8526] mb-3 group-hover:scale-110 group-hover:bg-[#ff6b00]/20 transition-all">
                  <Icon size={18} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 group-hover:text-[#ff8526] transition-colors">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-0.5">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {metric.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
