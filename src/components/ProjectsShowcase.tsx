'use client';

import React, { useState } from 'react';
import { Award, Sun, Cpu, Flame, Wrench, ShieldCheck, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState<'all' | 'solar' | 'electrical' | 'mechanical'>('all');

  const projects = [
    {
      id: 1,
      title: '450 kWp Captive Industrial Solar Power Plant',
      category: 'solar',
      industry: 'Pharma Manufacturing Unit',
      location: 'SIDCUL Industrial Area, Haridwar',
      scope: 'Turnkey Solar EPC, Tier-1 Mono PERC Panels, UPCL Net-metering & CEIG Clearance',
      result: 'Reduced monthly electricity bill by 68%, saving ₹42 Lakhs annually.',
      image: '/images/ai/solar_epc_plant.png',
      badge: 'SOLAR EPC',
    },
    {
      id: 2,
      title: '11kV HT Substation & Control Room Erection',
      category: 'electrical',
      industry: 'Heavy Machinery Plant',
      location: 'Roorkee Industrial Corridor',
      scope: 'HT cable laying, VFD panel installation, transformer commissioning, and SCADA logging',
      result: 'Eliminated power trip downtime with zero voltage fluctuation.',
      image: '/images/ai/ht_substation_panel.png',
      badge: 'ELECTRICAL HT',
    },
    {
      id: 3,
      title: 'Heavy Structural Fabrication & Machining Workshop',
      category: 'mechanical',
      industry: 'Hydro Power Utility',
      location: 'Garhwal Hydropower Project',
      scope: 'Custom runner repair, dynamic balancing, lathe machining, and hard-facing alloy welding',
      result: 'Restored hydro generator capacity to 100% rated MW output.',
      image: '/images/ai/machining_lathe_workshop.png',
      badge: 'FABRICATION',
    },
    {
      id: 4,
      title: 'Industrial Fire Hydrant & Deluge Pump House',
      category: 'mechanical',
      industry: 'Logistics & Warehousing Complex',
      location: 'Bahadrabad, Haridwar',
      scope: 'Electric & diesel standby fire pumps, MS heavy piping, sprinkler ring, Fire NOC audit',
      result: 'Full compliance approval achieved with 100% test pressure stability.',
      image: '/images/old-site/thumb-services_4.jpg',
      badge: 'FIRE SAFETY',
    },
    {
      id: 5,
      title: 'Precision Instrument Calibration & Testing Lab',
      category: 'electrical',
      industry: 'Process Manufacturing & Utilities',
      location: 'Haridwar Industrial Area',
      scope: 'NABL traceable calibration, relay test set, Megger insulation audit, thermal imaging',
      result: 'Certified 100% instrument precision with zero factory audit compliance rejection.',
      image: '/images/old-site/thumb-services_5.jpg',
      badge: 'CALIBRATION',
    },
    {
      id: 6,
      title: 'Facility Annual Maintenance Contract (AMC)',
      category: 'mechanical',
      industry: 'FMCG Packaging Plant',
      location: 'Haridwar Industrial Area',
      scope: 'Preventive monthly audits, pump overhauling, motor bearings, and emergency repair',
      result: 'Maintained 99.8% plant operational uptime over 3 consecutive years.',
      image: '/images/old-site/banner_4.jpg',
      badge: 'PLANT AMC',
    },
    {
      id: 7,
      title: '250 kWp Commercial Rooftop Solar Project',
      category: 'solar',
      industry: 'Educational & Technical Institute',
      location: 'Dehradun Campus',
      scope: 'Shadow-free solar design, elevated GI mounting structure, smart energy monitoring',
      result: 'Transitioned campus to 80% clean solar energy footprint.',
      image: '/images/old-site/banner_1.jpg',
      badge: 'SOLAR EPC',
    },
    {
      id: 8,
      title: 'Government Sector Turnkey Electrical Supply',
      category: 'electrical',
      industry: 'StateDISCOM & Infrastructure',
      location: 'Uttarakhand State',
      scope: 'Heavy power transformers, HT switchgear panels, and outdoor distribution hardware',
      result: 'Completed 100% on-time commissioning under DISCOM quality standards.',
      image: '/images/old-site/banner_2.jpg',
      badge: 'GOVT TURNKEY',
    },
    {
      id: 9,
      title: 'Heavy Equipment Overhauling & Pump Installation',
      category: 'mechanical',
      industry: 'Chemical & Water Treatment Plant',
      location: 'Rishikesh Region',
      scope: 'Multi-stage boiler feed pump alignment, mechanical seal replacement & dynamic testing',
      result: 'Extended machinery lifecycle by 8+ years with zero fluid leakage.',
      image: '/images/old-site/about-img-1.jpg',
      badge: 'EQUIPMENT AMC',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#090e18] relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 solar-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Award className="w-4 h-4" />
            <span>Proven Track Record • Real Project Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Featured Projects &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Case Studies
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Explore authentic turnkey solar installations, electrical substations, heavy fabrication, and AMC contracts executed by Mayank Industries across Haridwar &amp; Uttarakhand.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 space-x-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'solar', label: 'Industrial Solar' },
              { id: 'electrical', label: 'Electrical & HT' },
              { id: 'mechanical', label: 'Mechanical & AMC' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === tab.id
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              {/* Top Image with Overlay Badge */}
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1322] via-[#0b1322]/30 to-transparent" />

                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-widest bg-amber-500 text-black px-2.5 py-1 rounded shadow">
                  {p.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-[11px] font-mono text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1 flex-shrink-0" />
                    <span>{p.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {p.title}
                  </h3>

                  <div className="text-xs font-mono text-blue-400 mb-3">
                    Industry: {p.industry}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    <span className="font-bold text-slate-200">Scope:</span> {p.scope}
                  </p>
                </div>

                {/* Result highlight */}
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{p.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
