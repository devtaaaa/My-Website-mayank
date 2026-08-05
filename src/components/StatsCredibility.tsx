'use client';

import React from 'react';
import { Award, ShieldCheck, Factory, Wrench, Users, CheckCircle, Zap } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

export default function StatsCredibility() {
  const stats = [
    { value: 45, suffix: '+', label: 'Years Experience', subtext: 'Associated with GOGOAL Hydro' },
    { value: 494, suffix: '+', label: 'Projects Completed', subtext: 'Factories, Hydro & Solar' },
    { value: 100, suffix: '%', label: 'Turnkey Execution', subtext: 'Design, Supply & Erection' },
    { value: 24, suffix: '/7', label: 'AMC & Tech Support', subtext: 'Haridwar Industrial Base' },
  ];

  const highlights = [
    'Deep engineering lineage through sister concern GOGOAL Hydro (established 1979)',
    'Full turnkey handling: Site survey, load calculation, DISCOM approvals, supply, erection & commissioning',
    'In-house heavy fabrication workshop and certified instrument calibration testing lab',
    'Extensive track record with government PSUs, private factories, and hydro power projects',
    'OEM supply partnerships for genuine electrical switchgear, transformers, pumps & solar modules',
    'Dedicated rapid-response maintenance crew based in Haridwar Industrial Area',
  ];

  return (
    <section className="py-24 bg-[#090e18] relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 solar-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Animated Counter Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 text-center relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500/10 rounded-bl-full border-b border-l border-amber-500/20" />
              
              <div className="text-4xl sm:text-5xl font-black text-amber-400 font-mono mb-2 group-hover:scale-105 transition-transform">
                <AnimatedNumber value={st.value} suffix={st.suffix} duration={2500} />
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                {st.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                {st.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Content Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest">
              <Award className="w-4 h-4" />
              <span>Engineering Authority & Trust</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              Why Plant Owners &amp; Procurement Heads Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Mayank Industries
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              In industrial operations, downtime and unreliable contractors cost millions. Mayank Industries brings four decades of precision hydro engineering and turnkey solar execution to keep your facility running at peak performance.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="mechanical-btn bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-8 py-4 rounded-lg text-xs uppercase tracking-wider inline-flex items-center shadow-xl shadow-amber-500/20"
              >
                <ShieldCheck className="w-4 h-4 mr-2" />
                <span>Partner With Mayank Industries</span>
              </a>
            </div>
          </div>

          {/* Right Column Feature Badge Grid */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-8 rounded-2xl border border-slate-700/80 shadow-2xl relative space-y-6">
              
              <div className="flex items-center space-x-4 border-b border-slate-800 pb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Factory className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">GOGOAL Hydro Lineage</h3>
                  <p className="text-xs text-slate-400">Founded with deep roots in hydro turbine manufacturing, erection, and heavy machinery maintenance.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 border-b border-slate-800 pb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Government & PSU Approvals</h3>
                  <p className="text-xs text-slate-400">Class-A electrical contractor license, CEIG inspectorate clearance experience, and state DISCOM registrations.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Haridwar Industrial Base</h3>
                  <p className="text-xs text-slate-400">Located at E-60, Industrial Area Haridwar—equipped with machining bay, testing meters, and mobile service vans.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
