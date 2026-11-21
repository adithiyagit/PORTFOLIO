import React, { useState } from 'react';
import { Layers, Sparkles, Orbit, CheckCircle2 } from 'lucide-react';

export default function OrbitalTech({ orbitalTech }) {
  const [activeNode, setActiveNode] = useState(null);

  const innerRing = orbitalTech.filter((t) => t.orbit === 'inner');
  const outerRing = orbitalTech.filter((t) => t.orbit === 'outer');

  return (
    <section id="cosmos" className="py-24 relative overflow-hidden bg-[#06070d]/70 border-y border-white/5 starfield-grid">
      <div className="container relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#a78bfa] text-xs font-bold uppercase tracking-wider mb-3">
            <Orbit size={13} />
            <span>Planetary Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            The Functional <span className="bg-gradient-to-r from-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent">Orbit</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hover over any satellite node to inspect its operational role in my ERP delivery stack.
          </p>
        </div>

        {/* The Cosmic Orbital Stage */}
        <div className="relative w-full max-w-[620px] h-[480px] sm:h-[540px] mx-auto flex items-center justify-center">
          
          {/* Ambient Core Aura Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-[#7c3aed]/25 via-[#6366f1]/20 to-[#38bdf8]/15 blur-3xl pointer-events-none"></div>

          {/* Outer Orbital Ring Ellipse */}
          <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full border border-dashed border-[#8b5cf6]/25 animate-orbit-spin-slow">
            {outerRing.map((node, i) => {
              const radius = 240; // Desktop outer ring radius
              const rad = (node.angle * Math.PI) / 180;
              const x = 50 + 48 * Math.cos(rad);
              const y = 50 + 48 * Math.sin(rad);

              return (
                <div
                  key={node.name}
                  style={{ top: `${y}%`, left: `${x}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse-slow cursor-pointer group"
                  onMouseEnter={() => setActiveNode(node)}
                >
                  <div className="px-3 py-1.5 rounded-full bg-[#0e1022]/90 border border-[#8b5cf6]/40 text-slate-200 text-xs font-bold shadow-lg shadow-black/80 group-hover:border-[#38bdf8] group-hover:text-white group-hover:scale-110 transition-all flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] group-hover:bg-[#38bdf8] transition-colors"></span>
                    <span>{node.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inner Orbital Ring Ellipse */}
          <div className="absolute w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full border border-dashed border-[#a855f7]/30 animate-orbit-spin">
            {innerRing.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = 50 + 48 * Math.cos(rad);
              const y = 50 + 48 * Math.sin(rad);

              return (
                <div
                  key={node.name}
                  style={{ top: `${y}%`, left: `${x}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse cursor-pointer group"
                  onMouseEnter={() => setActiveNode(node)}
                >
                  <div className="px-3.5 py-1.5 rounded-full bg-[#12142a]/95 border border-[#8b5cf6] text-white text-xs font-extrabold shadow-xl shadow-[#8b5cf6]/30 group-hover:scale-115 transition-all flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles size={11} className="text-[#a855f7]" />
                    <span>{node.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Planetary Core Sphere */}
          <div className="relative z-10 w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-gradient-to-tr from-[#7c3aed] via-[#6366f1] to-[#38bdf8] p-1 shadow-[0_0_50px_rgba(139,92,246,0.6)] flex items-center justify-center animate-pulse">
            <div className="w-full h-full rounded-full bg-[#080914] flex flex-col items-center justify-center text-center p-2">
              <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent">
                ABV
              </div>
              <div className="text-[9px] font-bold text-slate-300 tracking-wider uppercase">
                Core ERP
              </div>
            </div>
          </div>

        </div>

        {/* Selected Satellite Node Detail Box */}
        <div className="max-w-md mx-auto mt-6 min-h-[56px]">
          {activeNode ? (
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121428]/90 border border-[#8b5cf6]/50 shadow-lg shadow-[#8b5cf6]/20 animate-in fade-in zoom-in-95 duration-200">
              <CheckCircle2 size={15} className="text-[#38bdf8]" />
              <span className="text-xs font-bold text-white">{activeNode.name}:</span>
              <span className="text-xs text-[#c4b5fd] font-medium">{activeNode.category}</span>
            </div>
          ) : (
            <div className="text-slate-500 text-xs italic">
              Hover over any orbit node above to explore functional specialization
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
