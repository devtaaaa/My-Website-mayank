'use client';

import React from 'react';
import { Factory, Warehouse, Building2, Hospital, Hotel, LandPlot, ShieldCheck, Zap, Cog } from 'lucide-react';

export default function IndustriesMarquee() {
  const industries = [
    { name: 'Manufacturing Units', icon: Factory },
    { name: 'Warehousing & Logistics', icon: Warehouse },
    { name: 'Hospitality & Hotels', icon: Hotel },
    { name: 'Hospitals & Healthcare', icon: Hospital },
    { name: 'Educational Campuses', icon: Building2 },
    { name: 'Government Sector PSUs', icon: ShieldCheck },
    { name: 'Commercial Buildings', icon: Building2 },
    { name: 'Industrial Parks (SIDCUL)', icon: LandPlot },
    { name: 'Hydropower & Utilities', icon: Zap },
    { name: 'Heavy Machinery Shops', icon: Cog },
  ];

  const brandPartners = [
    'SIEMENS', 'SCHNEIDER ELECTRIC', 'L&T ELECTRICAL', 'ABB INDIA', 'POLYCAB CABLES',
    'HAVELLS INDUSTRIAL', 'KSB PUMPS', 'SKF BEARINGS', 'LONGi SOLAR', 'GROWATT INVERTERS'
  ];

  return (
    <section className="py-16 bg-[#070b12] border-y border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-mono uppercase text-slate-400 tracking-widest">
          Sectors Served &amp; Industry Brand Ecosystem
        </span>
      </div>

      {/* Infinite Marquee 1: Sectors */}
      <div className="flex overflow-hidden relative w-full mb-8">
        <div className="animate-marquee flex items-center space-x-6">
          {[...industries, ...industries].map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-3 px-5 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-bold uppercase tracking-wider whitespace-nowrap"
              >
                <IconComponent className="w-4 h-4 text-amber-400" />
                <span>{ind.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Brand Partner Logos / Names Ticker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center mb-6">
          <p className="text-[11px] font-mono text-amber-400/90 uppercase tracking-widest">
            Associated with renowned electrical &amp; mechanical OEMs in Uttarakhand
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {brandPartners.map((brand, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-center font-mono font-bold text-xs text-slate-400 hover:text-white hover:border-amber-500/40 transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
