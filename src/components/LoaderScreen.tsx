'use client';

import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function LoaderScreen() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 2000; // 2 seconds
    const intervalTime = 20;
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setLoading(false), 500);
    }, totalDuration + 200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Radial glow background */}
      <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Official Mayank Industries Logo Card */}
        <div className="bg-white px-5 py-3.5 rounded-2xl border border-slate-200 shadow-xl mb-6 flex items-center justify-center">
          <img
            src="/images/mayank-logo.png"
            alt="Mayank Industries - Reliability & Quality"
            width={240}
            height={96}
            className="h-12 md:h-16 w-auto object-contain animate-pulse"
          />
        </div>

        <div className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 font-mono tracking-widest uppercase mb-4">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Engineering Industrial Power & Solar EPC</span>
        </div>

        {/* Percentage Counter */}
        <div className="text-4xl font-black text-slate-900 font-mono mb-3 tracking-tighter">
          {progress}%
        </div>

        {/* Animated Progress Bar */}
        <div className="w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-blue-500 transition-all duration-75 ease-linear rounded-full" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
