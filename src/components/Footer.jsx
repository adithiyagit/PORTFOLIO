import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#8b5cf6]/20 bg-[#05020e] relative z-10 text-center">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          
          <div className="text-left font-mono">
            <div className="text-xs font-bold text-white tracking-widest uppercase">
              {profile.name} // EARTH GROUND CONTROL
            </div>
            <div className="text-[10px] text-slate-400">
              COORDINATES: KOCHI, KERALA, INDIA [09°58'N 76°17'E] • RELOCATION: UAE / GCC &amp; INDIA
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500">
            © 2026 ADITHIYA B VINU • CELESTIAL PORTFOLIO
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 bg-[#120a2e] border border-[#8b5cf6]/40 hover:border-[#38bdf8] text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer rounded"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
