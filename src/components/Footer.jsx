import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-white/5 bg-[#070305] relative z-10 text-center">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-left">
          <div className="font-bebas text-xl text-white tracking-wider">
            {profile.name} <span className="text-red-500">.</span>
          </div>
          <div className="text-xs text-slate-400">
            ERP Functional Consultant | QA &amp; UAT Lead • Kochi, Kerala &amp; UAE / GCC Relocation
          </div>
        </div>

        <div className="text-xs text-slate-500">
          © 2026 Adithiya B Vinu. All rights reserved.
        </div>

        <button
          onClick={scrollToTop}
          className="w-9 h-9 rounded bg-white/5 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
}
