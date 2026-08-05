'use client';

import React, { useState } from 'react';
import { Package, Zap, Cog, ShieldCheck, Filter, ArrowRight, FileCheck, Mail } from 'lucide-react';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<'electrical' | 'mechanical' | 'expertise'>('electrical');

  const products = {
    electrical: [
      { name: 'Industrial Power Transformers', desc: 'Step-up/Step-down distribution transformers up to 33kV class.', specs: '100 kVA - 10 MVA', image: '/images/ai/industrial_transformer.png' },
      { name: 'Heavy Duty DG Sets', desc: 'Silent diesel generator sets for backup factory load synchronization.', specs: '15 kVA - 1500 kVA', image: '/images/ai/diesel_generator_set.png' },
      { name: 'Industrial Air Compressors', desc: 'Screw & reciprocating compressors for pneumatics and automation.', specs: '7.5 kW - 250 kW', image: '/images/ai/air_compressor_industrial.png' },
      { name: 'Electrical Switchgear & VFDs', desc: 'Air circuit breakers (ACB), MCCBs, VFD drives & soft starters.', specs: 'Siemens / Schneider / L&T', image: '/images/ai/ht_substation_panel.png' },
      { name: 'Boilers & Industrial Chillers', desc: 'Steam boilers, thermic fluid heaters & process water chillers.', specs: 'High Thermal Eff.', image: '/images/old-site/banner_2.jpg' },
      { name: 'LT & HT Power Cables', desc: 'Armored XLPE copper and aluminum cables for industrial trenching.', specs: '1.1kV to 33kV Grade', image: '/images/ai/power_cables_ht_lt.png' },
      { name: 'Relay, SCADA & Control Panels', desc: 'Custom PLC control desks, motor control centers (MCC), and APFC panels.', specs: 'IP55 / IP65 Enclosure', image: '/images/old-site/thumb-services_2.jpg' },
      { name: 'Industrial Lubricants & Coating', desc: 'Insulating oils, transformer oils, anti-corrosive epoxy coatings.', specs: 'High Dielectric', image: '/images/old-site/about-img-2.jpg' },
      { name: 'Electrical Consumables', desc: 'Cable lugs, gland kits, busbars, insulators, and heat shrink sleeves.', specs: 'IS/IEC Certified', image: '/images/old-site/thumb-services_1.jpg' },
    ],
    mechanical: [
      { name: 'Industrial Pumps', desc: 'Centrifugal, multi-stage boiler feed, slurry & chemical process pumps.', specs: 'KSB / Grundfos Grade', image: '/images/old-site/about-img-1.jpg' },
      { name: 'Industrial Valves', desc: 'Butterfly, gate, globe, check, and safety relief valves in SS/CS.', specs: 'PN16 - PN100 Rating', image: '/images/old-site/thumb-services_3.jpg' },
      { name: 'Precision Industrial Bearings', desc: 'Deep groove ball, spherical roller, and taper bearings.', specs: 'SKF / FAG / TIMKEN', image: '/images/ai/precision_bearings.png' },
      { name: 'Hydraulic Fittings & Hoses', desc: 'High-pressure hydraulic hoses, adapters, quick couplers, and pipes.', specs: 'Up to 700 Bar', image: '/images/old-site/thumb-services_6.jpg' },
      { name: 'Heavy Duty Industrial Springs', desc: 'Compression, extension, and wave springs for machine assemblies.', specs: 'High Alloy Steel', image: '/images/ai/machining_lathe_workshop.png' },
      { name: 'Precision Instrumentation', desc: 'Digital pressure transmitters, RTD sensors, level indicators, and flow meters.', specs: '4-20mA HART Compliant', image: '/images/old-site/thumb-services_5.jpg' },
      { name: 'Self-Lubricating Bushes', desc: 'Sintered bronze, PTFE lined, and graphite filled self-lubricating bushes.', specs: 'Zero Maintenance', image: '/images/old-site/banner_3.jpg' },
      { name: 'Mechanical Consumables', desc: 'Gaskets, O-rings, mechanical seals, fasteners, and coupling inserts.', specs: 'High Temp & Pressure', image: '/images/old-site/banner_4.jpg' },
    ],
    expertise: [
      { name: 'Fire Fighting Systems', desc: 'Industrial fire pumps, hydrants, hose reels, and automatic deluge valves.', specs: 'TAC / NFPA Approved', image: '/images/old-site/thumb-services_4.jpg' },
      { name: 'Solar Panels & Inverters', desc: 'Tier-1 Mono PERC & TopCon solar modules and grid-tie string inverters.', specs: '550Wp+ / ALMM', image: '/images/ai/solar_epc_plant.png' },
      { name: 'Industrial Safety Items & PPE', desc: 'Safety helmets, arc-flash suits, safety shoes, harnesses, and gloves.', specs: 'EN / IS Standard', image: '/images/old-site/banner_1.jpg' },
      { name: 'Electrical & Calibration Testing Gear', desc: 'Insulation testers (Megger), relay test kits, oil BDV testers, thermographic cameras.', specs: 'NABL Calibrated', image: '/images/old-site/thumb-services_5.jpg' },
      { name: 'Specialized Synthetic Lubricants', desc: 'High-performance gear oils, compressor fluids, and extreme-pressure greases.', specs: 'Synthetic Base', image: '/images/old-site/banner_5.jpg' },
    ],
  };

  return (
    <section id="products" className="py-24 bg-[#070b12] relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Package className="w-4 h-4" />
            <span>Product & Equipment Supply Chain</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Industrial Products &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Equipment Supply
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Mayank Industries sources, supplies, and installs genuine industrial electrical components, mechanical spares, safety systems, and solar equipment for plant owners across Haridwar &amp; Uttarakhand.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 inline-flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-amber-300">
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
              For bulk purchase orders, RFQs &amp; component quotes:
            </span>
            <a
              href="mailto:sales@mayankindustries.org"
              className="px-4 py-2 rounded bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase transition-colors"
            >
              Email sales@mayankindustries.org
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 space-x-2 shadow-xl">
            <button
              onClick={() => setActiveTab('electrical')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
                activeTab === 'electrical'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Electrical Supply</span>
            </button>

            <button
              onClick={() => setActiveTab('mechanical')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
                activeTab === 'mechanical'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cog className="w-4 h-4" />
              <span>Mechanical Supply</span>
            </button>

            <button
              onClick={() => setActiveTab('expertise')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
                activeTab === 'expertise'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Other Expertise & Safety</span>
            </button>
          </div>
        </div>

        {/* Product Spec Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products[activeTab].map((prod, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-xl overflow-hidden border border-slate-800 flex flex-col justify-between group relative"
            >
              {/* Product Image Header */}
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1526] via-[#0e1526]/50 to-transparent" />

                <span className="absolute top-3 left-3 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  SPEC: {prod.specs}
                </span>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700 flex items-center justify-center backdrop-blur-md">
                  <FileCheck className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>

              {/* Product Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {prod.desc}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="w-full py-2.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors mt-2"
                >
                  <span>Request Price Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
