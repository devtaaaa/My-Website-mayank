'use client';

import React from 'react';
import { Factory, Warehouse, Building2, Hospital, Hotel, LandPlot, Sun, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SolarFocus() {
  const sectors = [
    {
      icon: Factory,
      title: 'Factories & Manufacturing',
      desc: 'Offset massive daytime heavy machinery electricity loads with customized high-yield rooftop or shed solar plants.',
      badge: 'High Load Offset',
      image: '/images/ai/solar_epc_plant.png',
    },
    {
      icon: LandPlot,
      title: 'Industrial Parks',
      desc: 'Cluster solar solutions and ground-mounted captive solar farms engineered for industrial clusters in Haridwar & SIDCUL.',
      badge: 'Ground Mounted / Captive',
      image: '/images/ai/ground_mounted_solar.png',
    },
    {
      icon: Hotel,
      title: 'Hotels & Resorts',
      desc: 'Lower HVAC and water heating utility bills while enhancing green hospitality sustainability metrics for guests.',
      badge: 'Green Hospitality',
      image: '/images/old-site/thumb-services_7.jpg',
    },
    {
      icon: Hospital,
      title: 'Hospitals & Institutions',
      desc: 'Ensure reliable secondary renewable power backed by net-metering for critical infrastructure & campuses.',
      badge: 'Uninterrupted Power',
      image: '/images/old-site/banner_5.jpg',
    },
    {
      icon: Building2,
      title: 'Commercial Buildings',
      desc: 'Cut commercial slab tariff costs with high-efficiency Tier-1 solar modules & grid tie inverters.',
      badge: 'Tariff Protection',
      image: '/images/old-site/thumb-services_2.jpg',
    },
    {
      icon: Warehouse,
      title: 'Warehouses & Logistics',
      desc: 'Utilize expansive corrugated roof spaces to generate clean captive power and monetize unutilized ceiling acreage.',
      badge: 'Max Rooftop Area',
      image: '/images/ai/warehouse_solar.png',
    },
  ];

  return (
    <section id="solar-solutions" className="py-24 bg-[#090e18] relative overflow-hidden">
      {/* Background Solar Grid Line Effect */}
      <div className="absolute inset-0 solar-grid-pattern opacity-30 pointer-events-none" />

      {/* Decorative Glow Orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sun className="w-4 h-4 animate-spin-slow" />
            <span>Core B2B Marketing Focus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Industrial Solar Solutions For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              High-Energy Businesses
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Industrial electricity rates consume up to 35% of operational overhead. Mayank Industries delivers complete turnkey solar EPC—from feasibility analysis and structural audits to CEIG net-metering approvals and grid synchronization.
          </p>
        </div>

        {/* Animated Visual Schematic: Solar Panels -> Factory Power Grid */}
        <div className="mb-16 p-8 rounded-2xl glass-panel border border-slate-700/80 shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Schematic Diagram */}
            <div className="lg:col-span-7 bg-[#05080f] p-6 rounded-xl border border-slate-800 relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
                <span className="text-xs font-mono text-amber-400 uppercase flex items-center">
                  <Zap className="w-4 h-4 mr-1 text-amber-400" /> Live Power Schematic Simulation
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  ACTIVE GENERATION: 500 kWp
                </span>
              </div>

              {/* Schematic SVG Diagram */}
              <div className="relative py-4">
                <svg viewBox="0 0 600 220" className="w-full h-auto">
                  {/* Solar Panel Icon Box */}
                  <g transform="translate(30, 40)">
                    <rect width="130" height="90" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                    {/* Faint solar grid lines */}
                    <line x1="0" y1="30" x2="130" y2="30" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    <line x1="0" y1="60" x2="130" y2="60" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    <line x1="43" y1="0" x2="43" y2="90" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    <line x1="86" y1="0" x2="86" y2="90" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    {/* Text */}
                    <text x="65" y="42" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold" fontFamily="monospace">ROOFTOP SOLAR</text>
                    <text x="65" y="62" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="monospace">Tier-1 Modules</text>
                  </g>

                  {/* Flow Current Line 1: Solar to Inverter */}
                  <path d="M 160 85 L 260 85" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" className="animate-[flowCurrent_2s_linear_infinite]" />

                  {/* Inverter Box */}
                  <g transform="translate(260, 45)">
                    <rect width="100" height="80" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
                    <text x="50" y="35" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold" fontFamily="monospace">INVERTER</text>
                    <text x="50" y="55" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">98.6% Eff.</text>
                  </g>

                  {/* Flow Current Line 2: Inverter to Factory Load */}
                  <path d="M 360 85 L 450 85" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6 4" className="animate-[flowCurrent_1.5s_linear_infinite]" />

                  {/* Factory Plant Box */}
                  <g transform="translate(450, 30)">
                    <rect width="120" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                    <text x="60" y="35" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold" fontFamily="monospace">FACTORY LOAD</text>
                    <text x="60" y="60" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace">Heavy Machining</text>
                    <text x="60" y="80" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace">Zero Grid Bill</text>
                  </g>
                </svg>
              </div>

              {/* Status bar */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800 text-center text-xs font-mono">
                <div className="p-2 rounded bg-slate-900">
                  <div className="text-slate-500 text-[10px]">PAYBACK PERIOD</div>
                  <div className="text-amber-400 font-bold">3.2 - 4.5 Years</div>
                </div>
                <div className="p-2 rounded bg-slate-900">
                  <div className="text-slate-500 text-[10px]">SYSTEM WARRANTY</div>
                  <div className="text-blue-400 font-bold">25 Years Performance</div>
                </div>
                <div className="p-2 rounded bg-slate-900">
                  <div className="text-slate-500 text-[10px]">TAX BENEFIT</div>
                  <div className="text-emerald-400 font-bold">40% Accelerated Depr.</div>
                </div>
              </div>
            </div>

            {/* Turnkey Process Explanation */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                End-To-End Solar EPC Services For Industrial Units
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Mayank Industries takes care of your entire solar journey. From initial shadow profiling and roof load structural testing to Net-metering sync with UPCL/state discoms and lifetime preventive AMC.
              </p>

              <div className="space-y-3">
                {[
                  'Customized PVsyst Energy Yield Simulation & ROI Reports',
                  'High-Tensile Galvanized Iron / Aluminum Roof Mounting Structures',
                  'CEIG Electrical Inspectorate Approval & Net-Metering Setup',
                  'SCADA Remote Performance Monitoring & Diagnostic Dashboards',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#solar-calculator"
                  className="mechanical-btn bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-6 py-3.5 rounded-md text-xs uppercase tracking-wider inline-flex items-center shadow-lg"
                >
                  <span>Check Solar Suitability For Your Industry</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Industry Sector Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const IconComponent = sec.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-xl overflow-hidden relative group flex flex-col justify-between border border-slate-700/70"
              >
                {/* Sector Image Header */}
                <div className="relative h-44 overflow-hidden bg-slate-950">
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1526] via-[#0e1526]/50 to-transparent" />

                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-widest bg-amber-500 text-black px-2.5 py-1 rounded shadow">
                    {sec.badge}
                  </span>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700 flex items-center justify-center backdrop-blur-md">
                    <IconComponent className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {sec.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {sec.desc}
                    </p>
                  </div>

                  <a
                    href="#solar-calculator"
                    className="inline-flex items-center text-xs font-semibold text-amber-400 group-hover:text-amber-300 pt-3 border-t border-slate-800/80"
                  >
                    <span>Explore Solar Audit</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
