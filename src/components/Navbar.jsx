import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ resumeUrl }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['hero', 'about', 'projects', 'process', 'experience', 'education', 'contact'];
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

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (href === '#education') {
      window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'education' }));
    } else if (href === '#process') {
      window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'process' }));
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-[#090407]/90 backdrop-blur-xl border-b border-white/5">
      <div className="container flex items-center justify-between py-4">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 text-decoration-none group">
          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-bebas text-lg text-white tracking-wider group-hover:bg-red-500 transition-colors">
            A
          </div>
          <span className="font-bebas text-2xl text-white tracking-wider group-hover:text-red-500 transition-colors">
            ADITHIYA <span className="text-red-600">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs font-semibold uppercase tracking-widest transition-colors text-decoration-none ${
                  isActive ? 'text-red-500 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={resumeUrl}
            download
            className="btn-crimson-solid text-[11px] py-2 px-4 rounded"
          >
            <FileText size={13} />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e060b] border-b border-white/10 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-red-500 py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
