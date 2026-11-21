import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ resumeUrl }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Cosmos', href: '#cosmos' },
    { name: 'Services', href: '#competencies' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'cosmos', 'competencies', 'experience', 'projects', 'contact'];
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
            ? 'bg-[#0a0b16]/90 backdrop-blur-xl border border-[#8b5cf6]/20 shadow-2xl shadow-[#8b5cf6]/10'
            : 'bg-[#0f1020]/80 backdrop-blur-lg border border-white/5 shadow-lg shadow-black/40'
        }`}
      >
        {/* Brand Monogram */}
        <a href="#hero" className="flex items-center gap-2.5 group text-decoration-none">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#6366f1] flex items-center justify-center font-bold text-white text-xs tracking-tight shadow-lg shadow-[#8b5cf6]/40 group-hover:scale-105 transition-transform">
            ABV
          </div>
          <span className="hidden sm:inline-block font-semibold text-sm text-white tracking-wide group-hover:text-[#a78bfa] transition-colors">
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
                    ? 'bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-md shadow-[#7c3aed]/40'
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
            className="flex items-center gap-1.5 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:from-[#7c3aed] hover:to-[#4f46e5] text-white text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-[#8b5cf6]/30 hover:shadow-lg hover:shadow-[#8b5cf6]/50 hover:-translate-y-0.5"
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
        <div className="md:hidden fixed top-20 inset-x-4 bg-[#0e0f20]/95 backdrop-blur-2xl border border-[#8b5cf6]/20 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
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
