'use client';

import React from 'react';
import { Sun, Phone, MessageSquare, ArrowRight, Zap, ShieldCheck, Mail } from 'lucide-react';
import { useContactNumbers } from '@/hooks/useContactNumbers';

export default function ConversionCTA() {
  const { primaryNumber, primaryNumberClean } = useContactNumbers();
  return (
    <section className="py-20 bg-[#090e18] relative overflow-hidden">
      {/* Background Solar & Circuit Overlay */}
      <div className="absolute inset-0 solar-grid-pattern opacity-30 pointer-events-none" />

      {/* Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl glass-panel border border-amber-500/40 shadow-2xl relative text-center overflow-hidden bg-gradient-to-b from-[#0e1628] to-[#070b12]">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs font-mono uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4 animate-pulse" />
            <span>Turnkey Industrial Execution Partner</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-3xl mx-auto leading-tight">
            Ready To Reduce Your Industrial{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Power Costs &amp; Downtime?
            </span>
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Book a free site consultation and get a technical PVsyst energy yield &amp; ROI feasibility report tailored for your Haridwar or Uttarakhand industrial unit.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a
              href="#solar-calculator"
              className="mechanical-btn bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-8 py-4 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center shadow-2xl shadow-amber-500/30 w-full sm:w-auto"
            >
              <Sun className="w-4 h-4 mr-2" />
              <span>Book Free Solar Consultation</span>
            </a>

            <a
              href="mailto:sales@mayankindustries.org"
              className="mechanical-btn bg-slate-800 text-amber-400 font-bold px-7 py-4 rounded-lg text-xs uppercase tracking-wider border border-amber-500/30 hover:border-amber-400 flex items-center justify-center w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 mr-2 text-amber-400" />
              <span>Email sales@mayankindustries.org</span>
            </a>

            <a
              href={`tel:${primaryNumberClean}`}
              className="mechanical-btn-blue bg-slate-900 text-white font-bold px-7 py-4 rounded-lg text-xs uppercase tracking-wider border border-slate-700 flex items-center justify-center w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 mr-2 text-emerald-400" />
              <span>Call {primaryNumber}</span>
            </a>

            <a
              href={`https://wa.me/${primaryNumberClean}?text=Hello%20Mayank%20Industries,%20I%20want%20to%20inquire%20about%20industrial%20solar/engineering%20solutions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-colors w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1.5" />
              Haridwar Industrial Area Base
            </span>
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1.5" />
              45+ Years Legacy (GOGOAL Hydro)
            </span>
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1.5" />
              100% Turnkey Execution
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
