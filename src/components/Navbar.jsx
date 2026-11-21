import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Radio } from 'lucide-react';

export default function Navbar({ resumeUrl }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'MISSION', href: '#hero', code: '01' },
    { name: 'ORBIT', href: '#cosmos', code: '02' },
    { name: 'CAPABILITIES', href: '#competencies', code: '03' },
    { name: 'LOGS', href: '#experience', code: '04' },
    { name: 'DEPLOYMENTS', href: '#projects', code: '05' },
    { name: 'CREDENTIALS', href: '#credentials', code: '06' },
    { name: 'TRANSMIT', href: '#contact', code: '07' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'cosmos', 'competencies', 'experience', 'projects', 'credentials', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-3 z-50 flex justify-center px-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl px-4 py-2.5 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#090518]/95 backdrop-blur-2xl border-[#8b5cf6]/40 shadow-2xl shadow-[#8b5cf6]/20'
            : 'bg-[#0c0722]/85 backdrop-blur-lg border-[#8b5cf6]/20 shadow-lg shadow-black/60'
        }`}
        style={{
          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
        }}
      >
        {/* Brand Telemetry Station */}
        <a href="#hero" className="flex items-center gap-2.5 group text-decoration-none">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#7c3aed] to-[#38bdf8] flex items-center justify-center font-display font-black text-white text-xs tracking-wider shadow-md shadow-[#7c3aed]/50 group-hover:scale-105 transition-transform">
            ABV
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-xs text-white tracking-widest group-hover:text-[#38bdf8] transition-colors">
              ADITHIYA B VINU
            </span>
            <span className="text-[9px] font-mono text-[#a78bfa] tracking-wider uppercase hidden sm:inline">
              EARTH BASE // ERP FUNCTIONAL
            </span>
          </div>
        </a>

        {/* Desktop Sci-Fi Nav Links */}
        <div className="hidden lg:flex items-center gap-1 font-mono text-xs font-semibold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 transition-all duration-200 text-decoration-none tracking-wider text-[11px] ${
                  isActive
                    ? 'text-[#38bdf8] bg-[#38bdf8]/10 border-b-2 border-[#38bdf8]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-[9px] text-[#a78bfa] mr-1">{link.code}.</span>
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={resumeUrl}
            download
            className="btn-space-primary text-[10px] py-1.5 px-3 flex items-center gap-1.5"
          >
            <FileText size={12} />
            <span className="hidden sm:inline">RESUME</span> PDF
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-white p-2 hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 inset-x-4 bg-[#0a051d]/98 backdrop-blur-2xl border border-[#8b5cf6]/40 p-4 shadow-2xl flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 font-mono text-xs font-semibold text-slate-300 hover:text-[#38bdf8] hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5"
            >
              <span>{link.name}</span>
              <span className="text-[10px] text-[#a78bfa]">{link.code} // GOTO</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
