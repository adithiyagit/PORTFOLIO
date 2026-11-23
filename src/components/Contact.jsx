import React, { useState } from 'react';
import { Mail, Phone, FileText, Copy, Check } from 'lucide-react';

export default function Contact({ profile }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090407] border-t border-white/10 flex flex-col items-center justify-center text-center">
      
      {/* Subtle Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Centered Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold mb-5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span>GET IN TOUCH</span>
        </div>

        {/* Big Impact Headline Centered */}
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase mb-4 leading-none text-center">
          LET'S WORK <span className="text-red-500">TOGETHER</span>
        </h2>

        {/* Centered Description Paragraph */}
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed font-sans text-center">
          Prepared for immediate joining across India and open to relocation for UAE / GCC opportunities. Available for exploratory interviews via Teams, Google Meet, or direct phone.
        </p>

        {/* Centered Action Buttons Matrix with Standardized Heights and Alignment */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-2xl mx-auto mb-12 text-center">
          <a
            href={`mailto:${profile.email}`}
            className="btn-crimson-solid h-11 px-5 text-xs font-bold tracking-wider inline-flex items-center justify-center gap-2 rounded-lg"
          >
            <Mail size={15} />
            <span>Send Email</span>
          </a>

          <button
            onClick={handleCopy}
            className="btn-crimson-outline h-11 px-5 text-xs font-bold tracking-wider inline-flex items-center justify-center gap-2 rounded-lg cursor-pointer"
          >
            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
            <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
          </button>

          <a
            href={`https://wa.me/919633783038?text=Hi%20Adithiya,%20we%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson-outline h-11 px-5 text-xs font-bold tracking-wider inline-flex items-center justify-center gap-2 rounded-lg"
          >
            <Phone size={15} className="text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson-outline h-11 px-5 text-xs font-bold tracking-wider inline-flex items-center justify-center gap-2 rounded-lg"
          >
            <svg className="w-3.5 h-3.5 text-blue-400 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href={profile.resumePdf}
            download
            className="btn-crimson-solid h-11 px-6 text-xs font-bold tracking-wider inline-flex items-center justify-center gap-2 rounded-lg w-full sm:w-auto"
          >
            <FileText size={15} />
            <span>Download Official Resume</span>
          </a>
        </div>

        {/* Centered Quick Contact Info Strip */}
        <div className="editorial-card py-4 px-6 rounded-xl flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-300 w-full text-center">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Email:</span>
            <span className="text-white font-bold">{profile.email}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Direct Call:</span>
            <span className="text-white font-bold">{profile.phone}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Location:</span>
            <span className="text-white font-bold">{profile.location}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
