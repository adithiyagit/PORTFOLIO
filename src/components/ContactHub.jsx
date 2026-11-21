import React, { useState } from 'react';
import { Mail, Phone, FileText, Copy, Check, Radio } from 'lucide-react';

export default function ContactHub({ profile }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070314]/90 border-t border-[#8b5cf6]/20">
      <div className="container max-w-4xl relative z-10">
        
        {/* Main Banner Card */}
        <div className="hud-card p-8 sm:p-12 text-center rounded-3xl relative overflow-hidden shadow-2xl shadow-[#8b5cf6]/20">
          
          {/* Ambient Cosmic Aura */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="hud-badge mb-4">
            <Radio size={13} className="text-[#38bdf8] animate-ping" />
            <span>[ 07 // SUB-SPACE TRANSMISSION CONSOLE ]</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-wide uppercase mb-4">
            Establish Ground <span className="bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent">Uplink</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Flight-ready for immediate ERP Functional, Business Analyst, and Project Coordination roles across India and open to relocation for UAE / GCC operations.
          </p>

          {/* Action Buttons Matrix */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto font-mono">
            <a
              href={`mailto:${profile.email}`}
              className="btn-space-primary text-xs py-3 px-5 flex items-center gap-2"
            >
              <Mail size={15} />
              <span>TRANSMIT EMAIL</span>
            </a>

            <button
              onClick={handleCopy}
              className="btn-space-glass text-xs py-3 px-4 flex items-center gap-2"
            >
              {copied ? <Check size={15} className="text-[#10b981]" /> : <Copy size={15} />}
              <span>{copied ? 'FREQUENCY COPIED!' : 'COPY EMAIL'}</span>
            </button>

            <a
              href={`https://wa.me/919633783038?text=Hi%20Adithiya,%20we%20reviewed%20your%20space%20portfolio%20and%20would%20like%20to%20connect.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-space-glass text-xs py-3 px-4 flex items-center gap-2 text-white"
            >
              <Phone size={15} className="text-[#10b981]" />
              <span>WHATSAPP</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-space-glass text-xs py-3 px-4 flex items-center gap-2 text-white"
            >
              <svg className="w-3.5 h-3.5 text-[#38bdf8] fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LINKEDIN</span>
            </a>

            <a
              href={profile.resumePdf}
              download
              className="btn-space-primary text-xs py-3 px-5 flex items-center gap-2"
            >
              <FileText size={15} />
              <span>DOWNLOAD OFFICIAL RESUME</span>
            </a>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
            DIRECT CALL: <span className="text-[#38bdf8]">{profile.phone}</span> • LOCATION: <span className="text-[#d8b4fe]">{profile.location}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
