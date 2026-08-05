'use client';

import React, { useEffect, useState } from 'react';
import { Cog, Zap, ShieldCheck } from 'lucide-react';

export default function LoaderScreen() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setLoading(false), 500);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070b12] transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Radial glow background */}
      <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Official Mayank Industries Logo Card */}
        <div className="bg-white px-5 py-3.5 rounded-2xl border border-slate-700/80 shadow-2xl mb-6 flex items-center justify-center animate-pulse">
          <img
            src="/images/mayank-logo.png"
            alt="Mayank Industries - Reliability & Quality"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>

        <div className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 font-mono tracking-widest uppercase">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Engineering Industrial Power & Solar EPC</span>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-6 border border-slate-700/50">
          <div className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-blue-500 animate-[flowCurrent_1.5s_infinite_linear] w-full rounded-full" />
        </div>
      </div>
    </div>
  );
}
