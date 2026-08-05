'use client';

import React, { useState } from 'react';
import { Sun, Cpu, Gauge, Wrench, ShieldAlert, Flame, ChevronRight, Check, X, ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Solar Power Plant EPC',
      category: 'RENEWABLE ENERGY',
      icon: Sun,
      image: '/images/ai/solar_epc_plant.png',
      summary: 'Turnkey rooftop & ground-mounted solar power plant setup for factories, warehouses, and commercial units.',
      details: [
        'Detailed PVsyst solar irradiation and shadow simulation',
        'Tier-1 Mono PERC & TopCon Solar PV module installation',
        'On-grid & hybrid solar inverters with remote SCADA logging',
        'State DISCOM (UPCL) net-metering & CEIG electrical approvals',
        'Lifetime preventive maintenance and performance guarantees',
      ],
      tag: '50 kWp - 5 MWp',
    },
    {
      id: 2,
      title: 'Electrical & Mechanical Erection',
      category: 'PLANT COMMISSIONING',
      icon: Cpu,
      image: '/images/ai/ht_substation_panel.png',
      summary: 'Supply, erection, testing & commissioning of HT/LT electrical lines, switchgear, and control rooms.',
      details: [
        'HT & LT power cable laying, trenching, and terminations',
        'Electrical control panel, relay logic & SCADA integration',
        'DG set synchronization, automatic transfer switches (ATS)',
        'Transformer installation, sub-station erection & bus ducting',
        'Heavy mechanical equipment mounting and precision alignment',
      ],
      tag: 'High Voltage HT/LT',
    },
    {
      id: 3,
      title: 'Calibration & Testing of Instruments',
      category: 'QUALITY & AUDIT LAB',
      icon: Gauge,
      image: '/images/old-site/thumb-services_5.jpg',
      summary: 'Precision calibration and laboratory testing of industrial gauges, relays, and power equipment.',
      details: [
        'Pressure gauge, temperature controller & flow meter calibration',
        'Transformer oil breakdown voltage (BDV) & DGA testing',
        'Relay testing, secondary injection & breaker tripmeter audits',
        'Thermal imaging thermography for hot-spot detection in panels',
        'NABL traceable calibration certificates for ISO audit compliance',
      ],
      tag: 'ISO Compliant Lab',
    },
    {
      id: 4,
      title: 'Fabrication & Heavy Machining',
      category: 'ENGINEERING WORKSHOP',
      icon: Wrench,
      image: '/images/ai/machining_lathe_workshop.png',
      summary: 'Custom heavy structural steel fabrication, precision machining, and spare part manufacturing.',
      details: [
        'Structural steel shed & heavy gantry crane girder fabrication',
        'CNC lathe turning, milling & precision gear cutting',
        'Custom shaft, coupling, flange & heavy machine component machining',
        'Hard facing, cladding & wear-resistant alloy welding',
        'Hydropower turbine runner & heavy machinery refurbishing',
      ],
      tag: 'Precision Lathe & CNC',
    },
    {
      id: 5,
      title: 'Repairing, Overhauling & AMC',
      category: 'PLANT RELIABILITY',
      icon: ShieldAlert,
      image: '/images/old-site/about-img-1.jpg',
      summary: 'Comprehensive Annual Maintenance Contracts (AMC), emergency breakdown repairs, and plant overhauling.',
      details: [
        'Industrial centrifugal pump, compressor & turbine overhauling',
        'Bearing replacement, dynamic balancing & vibration analysis',
        'Hydraulic valve, cylinder & fitting reconditioning',
        '24/7 breakdown response team for Haridwar & SIDCUL units',
        'Preventive maintenance schedules reducing unplanned downtime',
      ],
      tag: '24/7 AMC Support',
    },
    {
      id: 6,
      title: 'Fire Hydrant & Safety Systems',
      category: 'SAFETY NOC COMPLIANCE',
      icon: Flame,
      image: '/images/old-site/thumb-services_4.jpg',
      summary: 'End-to-end industrial fire hydrant network installation, diesel engine pumps, and sprinkler networks.',
      details: [
        'Fire hydrant main line piping (MS/GI heavy grade) laying',
        'Electric, jockey & diesel engine driven main fire pump room setup',
        'Automatic sprinkler systems & smoke detection alarm panels',
        'Fire NOC documentation & pressure testing audit support',
        'Routine pressure maintenance and fire pump AMC servicing',
      ],
      tag: 'Fire Safety NOC Ready',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#090e18] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Wrench className="w-4 h-4" />
            <span>Turnkey B2B Engineering Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Turnkey Industrial Services{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Under One Roof
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Mayank Industries executes complete engineering, erection, calibration, overhauling, and solar projects with experienced engineers, technicians, and specialized tooling.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div
                key={srv.id}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden relative group flex flex-col justify-between border border-slate-700/70"
              >
                {/* Service Card Image Header */}
                <div className="relative h-44 overflow-hidden bg-slate-950">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1526] via-[#0e1526]/50 to-transparent" />

                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-widest bg-amber-500 text-black px-2.5 py-1 rounded shadow">
                    {srv.category}
                  </span>
                  
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-slate-200 bg-slate-900/90 px-2 py-1 rounded border border-slate-700">
                    {srv.tag}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                        <IconComp className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {srv.summary}
                    </p>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={() => setActiveModal(srv.id)}
                    className="w-full py-3 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-black border border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-200 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Know Detailed Scope</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Drawer for Service Scope */}
        {activeModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-[#0b1322] border border-amber-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Details inside Modal */}
              {(() => {
                const modalData = services.find((s) => s.id === activeModal);
                if (!modalData) return null;
                const IconComponent = modalData.icon;
                return (
                  <div>
                    <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-slate-950">
                      <img
                        src={modalData.image}
                        alt={modalData.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1322] via-[#0b1322]/40 to-transparent" />
                    </div>

                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                          {modalData.category}
                        </span>
                        <h3 className="text-2xl font-black text-white">{modalData.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                      {modalData.summary}
                    </p>

                    <div className="space-y-3 mb-8">
                      <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                        Technical Deliverables &amp; Scope of Work:
                      </h4>
                      {modalData.details.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-slate-800">
                      <a
                        href="#contact"
                        onClick={() => setActiveModal(null)}
                        className="w-full sm:w-auto mechanical-btn bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-6 py-3 rounded-lg text-xs uppercase tracking-wider text-center"
                      >
                        Enquire For Plant Execution
                      </a>
                      <button
                        onClick={() => setActiveModal(null)}
                        className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-slate-300 hover:text-white"
                      >
                        Close Details
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
