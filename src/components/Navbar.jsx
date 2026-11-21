import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ resumeUrl }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Competencies', href: '#competencies' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'competencies', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 140;

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
    <header className="sticky top-4 z-50 flex justify-center px-4 transition-all duration-300">
      <nav
        className={`w-full max-w-4xl rounded-full px-4 py-2.5 transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? 'bg-[#0f111a]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60'
            : 'bg-[#12141f]/80 backdrop-blur-lg border border-white/5 shadow-lg shadow-black/40'
        }`}
      >
        {/* Brand Monogram */}
        <a href="#hero" className="flex items-center gap-2.5 group text-decoration-none">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff6b00] to-[#ffa14a] flex items-center justify-center font-bold text-white text-xs tracking-tight shadow-md shadow-[#ff6b00]/30 group-hover:scale-105 transition-transform">
            ABV
          </div>
          <span className="hidden sm:inline-block font-semibold text-sm text-white tracking-wide group-hover:text-[#ff8526] transition-colors">
            Adithiya B Vinu
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 text-decoration-none ${
                  isActive
                    ? 'bg-[#ff6b00] text-white shadow-md shadow-[#ff6b00]/40'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
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
            className="flex items-center gap-1.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c1a] hover:from-[#ff7d1a] hover:to-[#ffa142] text-white text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-[#ff6b00]/30 hover:shadow-lg hover:shadow-[#ff6b00]/50 hover:-translate-y-0.5"
          >
            <FileText size={13} />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 inset-x-4 bg-[#12141f]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
