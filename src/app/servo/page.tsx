'use client';

import React from 'react';
import { Zap, CheckCircle2, ShieldCheck, ArrowRight, Settings2, Activity } from 'lucide-react';
import Link from 'next/link';
import USPBanner from '@/components/USPBanner';

export default function ServoPage() {
  const servoTypes = [
    'Air Cooled Servo',
    'Oil Cooled Servo',
    'Single Phase Servo',
    'Three-Phase Servo',
    'Balanced Servo',
    'Unbalanced Servo',
    'Linear Servo'
  ];

  return (
    <main className="min-h-screen bg-[#070b12] text-slate-100 relative pt-16 sm:pt-24 pb-24">
      {/* USP Banner at the top */}
      <USPBanner />

      {/* Background Effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 sm:mt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-mono uppercase tracking-widest">
              <Activity className="w-4 h-4" />
              <span>Voltage Regulation Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              Industrial Servo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                Stabilizers
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              Ensure absolute voltage stability for your critical industrial machinery. We manufacture and supply heavy-duty servo voltage stabilizers designed to handle massive load fluctuations.
            </p>

            <div className="flex flex-col space-y-2 border-l-4 border-emerald-500 pl-4 my-6">
              <span className="text-xs font-mono text-slate-400 uppercase">Manufacturing Capacity</span>
              <span className="text-3xl font-black text-white">5 kVA <span className="text-emerald-500">to</span> 4 MW</span>
            </div>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Settings2 className="text-emerald-400" />
                Available Configurations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servoTypes.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-200 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-8 py-4 rounded-lg uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-2xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
              <img 
                src="/images/ai/servo_stabilizer.png" 
                alt="Industrial Heavy Duty Servo Voltage Stabilizer Control Panel" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Heavy Duty Grade</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-400 bg-black/50 px-2 py-1 rounded border border-emerald-500/30">
                    100% COPPER WOUND
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Specs */}
            <div className="absolute -left-6 top-1/4 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl hidden md:block animate-bounce-slow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Max Capacity</div>
                  <div className="font-bold text-white">4 MW</div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </main>
  );
}
