'use client';

import React from 'react';
import { Award, ShieldCheck, Factory, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#090e18] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Company Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-mono uppercase tracking-widest">
              <Factory className="w-4 h-4" />
              <span>Haridwar Industrial Engineering Firm</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Building Quality Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Industrial Innovation
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Mayank Industries is a premier turnkey industrial solutions company based in Haridwar, Uttarakhand. We specialize in industrial solar power plant EPC, high-voltage electrical installations, mechanical machinery erection, instrument calibration, fire fighting setups, and comprehensive plant AMC.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs text-slate-300 space-y-2">
              <div className="font-mono font-bold text-amber-400 uppercase flex items-center">
                <Award className="w-4 h-4 mr-1.5 text-amber-400" /> Strategic Lineage With GOGOAL Hydro
              </div>
              <p className="leading-relaxed">
                Associated with <strong>GOGOAL Hydro</strong>, Mayank Industries inherits decades of heavy precision manufacturing, hydro turbine erection, generator overhauling, and multi-disciplinary engineering excellence.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'ISO Standard Quality & Safety Protocols',
                'In-House Machining Bay & Precision Calibration Lab in Haridwar',
                'Government DISCOM & CEIG Electrical Inspectorate Approvals',
                'Full Turnkey Project Ownership — From Blueprint to Maintenance',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="mechanical-btn bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-8 py-4 rounded-lg text-xs uppercase tracking-wider inline-flex items-center shadow-xl"
              >
                <span>Connect With Technical Team</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="h-64 rounded-2xl bg-cover bg-center border border-slate-700 shadow-xl"
                  style={{ backgroundImage: `url('/images/old-site/about-img-1.jpg')` }}
                />
                <div className="p-5 rounded-2xl glass-panel border border-slate-800 text-center">
                  <div className="text-3xl font-black text-amber-400 font-mono">
                    <AnimatedNumber value={494} suffix="+" duration={2000} />
                  </div>
                  <div className="text-xs font-bold text-white uppercase mt-1">Projects Executed</div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-2xl glass-panel border border-slate-800 text-center">
                  <div className="text-3xl font-black text-emerald-400 font-mono">
                    <AnimatedNumber value={45} suffix="+" duration={2000} /> Yrs
                  </div>
                  <div className="text-xs font-bold text-white uppercase mt-1">Engineering Heritage</div>
                </div>
                <div
                  className="h-64 rounded-2xl bg-cover bg-center border border-slate-700 shadow-xl"
                  style={{ backgroundImage: `url('/images/old-site/about-img-2.jpg')` }}
                />
              </div>
            </div>

            {/* Glowing Accent Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
