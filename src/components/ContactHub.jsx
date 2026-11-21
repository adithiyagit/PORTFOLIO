import React, { useState } from 'react';
import { Mail, Phone, FileText, Copy, Check } from 'lucide-react';

export default function ContactHub({ profile }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container max-w-4xl relative z-10">
        
        {/* Main Banner Card */}
        <div className="bg-gradient-to-b from-[#101222] to-[#080914] border border-[#8b5cf6]/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden group">
          {/* Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#a78bfa] text-xs font-bold uppercase tracking-wider mb-4">
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something <span className="bg-gradient-to-r from-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent">Impactful</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Prepared for immediate joining across India and open to relocation for UAE / GCC opportunities. Available for exploratory interviews via Teams, Meet, or phone.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:from-[#7c3aed] hover:to-[#4f46e5] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg shadow-[#8b5cf6]/30 hover:shadow-xl hover:shadow-[#8b5cf6]/50 hover:-translate-y-0.5 transition-all text-decoration-none"
            >
              <Mail size={16} />
              <span>Send Email</span>
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-full border border-white/15 hover:border-[#8b5cf6]/50 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              {copied ? <Check size={16} className="text-[#10b981]" /> : <Copy size={16} />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>

            <a
              href={`https://wa.me/919633783038?text=Hi%20Adithiya,%20we%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-full border border-white/15 hover:border-[#8b5cf6]/50 hover:-translate-y-0.5 transition-all text-decoration-none"
            >
              <Phone size={16} className="text-[#10b981]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-full border border-white/15 hover:border-[#8b5cf6]/50 hover:-translate-y-0.5 transition-all text-decoration-none"
            >
              <svg className="w-4 h-4 text-[#38bdf8] fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.resumePdf}
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg shadow-[#8b5cf6]/30 hover:shadow-xl hover:shadow-[#8b5cf6]/50 hover:-translate-y-0.5 transition-all text-decoration-none"
            >
              <FileText size={16} />
              <span>Download Official Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
