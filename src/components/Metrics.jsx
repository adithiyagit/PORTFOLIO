import React from 'react';
import { Store, Layers, CheckCircle2, Clock } from 'lucide-react';

export default function Metrics({ metrics }) {
  const icons = [Store, Layers, CheckCircle2, Clock];

  return (
    <section className="py-12 border-y border-[#8b5cf6]/20 bg-[#070314]/70 relative">
      <div className="container">
        
        {/* HUD Sub-Bar Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/5">
          <div className="hud-badge text-[10px]">
            <span>[ SYSTEM TELEMETRY // MISSION STATS ]</span>
          </div>
          <div className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider hidden sm:block">
            LIVE DEPLOYMENT STATUS: OPERATIONAL
          </div>
        </div>

        {/* 4 Telemetry Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={metric.label}
                className="hud-card p-5 group rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#a78bfa] mb-3 group-hover:scale-110 group-hover:text-[#38bdf8] group-hover:border-[#38bdf8]/50 transition-all">
                  <Icon size={18} />
                </div>
                
                <div className="font-display text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-[#38bdf8] transition-colors">
                  {metric.value}
                </div>
                
                <div className="text-xs font-mono font-bold text-[#d8b4fe] uppercase tracking-wider mb-1">
                  {metric.label}
                </div>
                
                <div className="text-[11px] text-slate-400 font-sans leading-normal">
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
