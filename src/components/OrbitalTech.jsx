import React, { useState } from 'react';
import { Orbit, Sparkles, CheckCircle2 } from 'lucide-react';

export default function OrbitalTech({ orbitalTech }) {
  const [activeNode, setActiveNode] = useState(null);

  const innerRing = orbitalTech.filter((t) => t.orbit === 'inner');
  const outerRing = orbitalTech.filter((t) => t.orbit === 'outer');

  return (
    <section id="cosmos" className="py-24 relative overflow-hidden bg-[#060314]/90 border-b border-[#8b5cf6]/20">
      
      {/* Ambient Nebula Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#7c3aed]/15 via-[#6366f1]/10 to-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="hud-badge mb-3">
            <Orbit size={13} className="text-[#38bdf8]" />
            <span>[ 02 // PLANETARY ECOSYSTEM ]</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase mb-3">
            The Functional <span className="bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent">Orbit</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-lg mx-auto">
            Interactive planetary radar: Hover over any satellite node to inspect its operational role in my ERP delivery stack.
          </p>
        </div>

        {/* The Cosmic Orbital Stage */}
        <div className="relative w-full max-w-[620px] h-[480px] sm:h-[540px] mx-auto flex items-center justify-center">
          
          {/* Outer Orbital Ring Ellipse */}
          <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full border border-dashed border-[#8b5cf6]/30 animate-orbit-spin-slow">
            {outerRing.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = 50 + 48 * Math.cos(rad);
              const y = 50 + 48 * Math.sin(rad);

              return (
                <div
                  key={node.name}
                  style={{ top: `${y}%`, left: `${x}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse-slow cursor-pointer group"
                  onMouseEnter={() => setActiveNode(node)}
                  onClick={() => setActiveNode(node)}
                >
                  <div className="px-3 py-1.5 rounded-full bg-[#0d0724]/95 border border-[#8b5cf6]/40 text-slate-200 text-xs font-mono font-bold shadow-lg shadow-black/80 group-hover:border-[#38bdf8] group-hover:text-white group-hover:scale-110 transition-all flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] group-hover:bg-[#38bdf8] transition-colors"></span>
                    <span>{node.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inner Orbital Ring Ellipse */}
          <div className="absolute w-[230px] sm:w-[310px] h-[230px] sm:h-[310px] rounded-full border border-dashed border-[#38bdf8]/35 animate-orbit-spin">
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
                  onClick={() => setActiveNode(node)}
                >
                  <div className="px-3.5 py-1.5 rounded-full bg-[#120a32]/95 border border-[#38bdf8]/60 text-white text-xs font-mono font-bold shadow-xl shadow-[#38bdf8]/20 group-hover:scale-115 transition-all flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles size={11} className="text-[#38bdf8]" />
                    <span>{node.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Planetary Core Sphere */}
          <div className="relative z-10 w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-gradient-to-tr from-[#7c3aed] via-[#6366f1] to-[#38bdf8] p-1 shadow-[0_0_50px_rgba(56,189,248,0.5)] flex items-center justify-center animate-pulse">
            <div className="w-full h-full rounded-full bg-[#080419] flex flex-col items-center justify-center text-center p-2">
              <div className="font-display text-xl sm:text-2xl font-black bg-gradient-to-r from-[#d8b4fe] to-[#38bdf8] bg-clip-text text-transparent">
                ABV
              </div>
              <div className="text-[8px] font-mono font-bold text-[#a78bfa] tracking-widest uppercase">
                CORE ERP
              </div>
            </div>
          </div>

        </div>

        {/* Selected Satellite Node Detail Box */}
        <div className="max-w-md mx-auto mt-6 min-h-[56px]">
          {activeNode ? (
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0f092b]/90 border border-[#38bdf8]/60 shadow-lg shadow-[#38bdf8]/20 animate-in fade-in zoom-in-95 duration-200">
              <CheckCircle2 size={16} className="text-[#38bdf8]" />
              <span className="text-xs font-mono font-bold text-white uppercase">{activeNode.name}:</span>
              <span className="text-xs text-[#d8b4fe] font-sans font-medium">{activeNode.category}</span>
            </div>
          ) : (
            <div className="text-slate-500 text-xs font-mono uppercase tracking-wider">
              [ HOVER OVER ANY ORBIT NODE TO INSPECT SPECIFICATION ]
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
