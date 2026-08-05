'use client';

import React from 'react';
import { Zap, CheckCircle2, ShieldCheck, ArrowRight, Settings } from 'lucide-react';
import Link from 'next/link';

export default function ElectricalPanelsPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-slate-100 relative pt-24 sm:pt-32 pb-24">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-mono uppercase tracking-widest">
              <Zap className="w-4 h-4" />
              <span>Switchgear & Automation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              Electrical Panels <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                & VCB Systems
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              Custom fabrication and commissioning of high-tension and low-tension electrical switchgear. We supply robust Relay, SCADA, MCC, and APFC panels equipped with top-tier components from Siemens, Schneider, and L&T.
            </p>

            <div className="space-y-4 pt-4">
              {[
                'Motor Control Centers (MCC) & APFC Panels',
                'Vacuum Circuit Breakers (VCB) & Air Circuit Breakers (ACB)',
                'IP55 / IP65 Enclosure Standards',
                'SCADA Automation & PLC Control Desks'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-slate-200 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white font-extrabold px-8 py-4 rounded-lg uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
              <img 
                src="/images/ai/ht_substation_panel.png" 
                alt="Electrical Switchgear & VFD Panels" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">CPRI Certified</span>
                  </div>
                  <div className="text-xs font-mono text-blue-400 bg-black/50 px-2 py-1 rounded border border-blue-500/30">
                    HT / LT GRADE
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Specs */}
            <div className="absolute -left-6 top-1/4 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl hidden md:block animate-bounce-slow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Components</div>
                  <div className="font-bold text-white">Siemens / L&T</div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </main>
  );
}
