'use client';

import React from 'react';
import { MessagesSquare, Search, FileText, Truck, Zap, ShieldCheck } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      title: 'Requirement Discussion',
      desc: 'Initial consultation to analyze your facility electricity bills, peak connected load, and operational requirements.',
      icon: MessagesSquare,
      status: 'Initial Audit',
    },
    {
      num: '02',
      title: 'Site & Shadow Survey',
      desc: 'Our engineers conduct drone 3D rooftop profiling, structural load testing, and electrical panel inspection.',
      icon: Search,
      status: 'Engineering Survey',
    },
    {
      num: '03',
      title: 'Technical Design & Proposal',
      desc: 'Custom PVsyst energy generation simulations, ROI calculations, and transparent equipment BOQ proposal.',
      icon: FileText,
      status: 'Design Approval',
    },
    {
      num: '04',
      title: 'Supply & Erection',
      desc: 'Dispatch of Tier-1 solar modules, GI mounting structures, cables, and precision mechanical assembly on site.',
      icon: Truck,
      status: 'Assembly Line',
    },
    {
      num: '05',
      title: 'Testing & Commissioning',
      desc: 'Grid tie inverter synchronization, CEIG electrical inspector clearance, and UPCL net-metering activation.',
      icon: Zap,
      status: 'Grid Sync Live',
    },
    {
      num: '06',
      title: 'AMC & Lifetime Support',
      desc: 'SCADA remote generation monitoring, scheduled module cleaning, and 24/7 emergency repair support.',
      icon: ShieldCheck,
      status: 'Continuous Operations',
    },
  ];

  return (
    <section className="py-24 bg-[#070b12] relative overflow-hidden">
      {/* Conveyor Line Grid Accent */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Zap className="w-4 h-4" />
            <span>Assembly Line Execution Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            From Industrial Audit To{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Plant Commissioning
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Every Mayank Industries project follows a strict 6-stage engineering protocol for maximum performance, safety compliance, and zero disruption to active plant manufacturing.
          </p>
        </div>

        {/* Assembly Line Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((st, idx) => {
            const IconComponent = st.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <span className="text-2xl font-black text-amber-400 font-mono">
                    {st.num}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    {st.status}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:border-amber-400 transition-colors shadow-md">
                    <IconComponent className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {/* Conveyor Track Rail Indicator */}
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
                  <div className="w-full h-full bg-gradient-to-r from-amber-500 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
