import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-[#050608] relative z-10 text-center">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-left">
            <div className="text-sm font-bold text-white">{profile.name}</div>
            <div className="text-xs text-slate-400">{profile.headline}</div>
          </div>

          <div className="text-xs text-slate-500">
            © 2026 Adithiya B Vinu. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff6b00] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
