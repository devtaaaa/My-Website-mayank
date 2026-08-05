'use client';

import React, { useState } from 'react';
import { Calculator, Sun, IndianRupee, ShieldCheck, ArrowRight, Zap, CheckCircle2, Phone } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(150000); // Default ₹1.5 Lakhs
  const [roofArea, setRoofArea] = useState(12000); // sq ft
  const [businessType, setBusinessType] = useState('Factory / Manufacturing');
  const [location, setLocation] = useState('Haridwar Industrial Area');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Solar Estimator Math Logic
  // 1 kWp solar requires ~ 100 sq.ft roof and produces ~ 4 units/day (120 units/month, 1440 units/yr)
  // Commercial unit cost = ₹9.5
  const maxKwByArea = Math.floor(roofArea / 100);
  const kwByBill = Math.floor(monthlyBill / (120 * 9.5));
  const recommendedKw = Math.min(kwByBill, maxKwByArea) || 50;

  const annualSavings = Math.round(recommendedKw * 1440 * 9.5);
  const carbonOffset = Math.round(recommendedKw * 1.15); // Tons CO2 per year
  const paybackYears = (3.4).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="solar-calculator" className="py-24 bg-[#070b12] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Calculator className="w-4 h-4" />
            <span>Interactive Industrial ROI Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Calculate Your Plant&apos;s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Solar Savings Potential
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Use our technical B2B estimator to evaluate recommended solar capacity (kWp), estimated annual electricity bill savings, payback timeline, and environmental impact.
          </p>
        </div>

        {/* Technical Dashboard Calculator UI */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Panel */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <span className="text-xs font-mono text-amber-400 uppercase flex items-center">
                <Zap className="w-4 h-4 mr-1 text-amber-400" /> B2B Solar Feasibility Parameters
              </span>
              <span className="text-[10px] font-mono text-slate-400">MAYANK ENGINEERING V3.2</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1: Monthly Electricity Bill */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Average Monthly Electricity Bill (₹)
                  </label>
                  <span className="text-base font-mono font-extrabold text-amber-400 bg-slate-900 px-3 py-1 rounded border border-amber-500/30">
                    ₹ {monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="2000000"
                  step="25000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>₹25,000 / mo</span>
                  <span>₹10,000,000+ / mo</span>
                </div>
              </div>

              {/* Field 2: Available Roof / Land Area */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Available Roof or Land Area (Sq. Ft.)
                  </label>
                  <span className="text-base font-mono font-extrabold text-blue-400 bg-slate-900 px-3 py-1 rounded border border-blue-500/30">
                    {roofArea.toLocaleString('en-IN')} sq.ft
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="150000"
                  step="1000"
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>2,000 sq.ft</span>
                  <span>150,000+ sq.ft</span>
                </div>
              </div>

              {/* Field 3 & 4: Business Type & Location */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                    Industry / Business Type
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-lg p-3 text-xs font-semibold text-white focus:outline-none focus:border-amber-400"
                  >
                    <option>Factory / Manufacturing</option>
                    <option>Warehouse / Logistics Hub</option>
                    <option>Hotel / Resort</option>
                    <option>Hospital / Educational</option>
                    <option>Commercial Complex</option>
                    <option>Industrial Park / Hydropower</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                    Facility Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-lg p-3 text-xs font-semibold text-white focus:outline-none focus:border-amber-400"
                  >
                    <option>Haridwar Industrial Area</option>
                    <option>SIDCUL Haridwar</option>
                    <option>Roorkee Industrial Hub</option>
                    <option>Dehradun Commercial Region</option>
                    <option>Rudrapur / Pantnagar</option>
                    <option>Other Uttarakhand Location</option>
                  </select>
                </div>
              </div>

              {/* Field 5: Phone Number & Contact */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                  Contact Phone / WhatsApp (For Detailed Engineering Audit)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                  <input
                    type="tel"
                    required
                    placeholder="+91-9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-lg py-3 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mechanical-btn bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold py-4 rounded-lg text-sm uppercase tracking-wider flex items-center justify-center shadow-xl shadow-amber-500/20"
              >
                <Sun className="w-5 h-5 mr-2" />
                <span>Request Detailed Engineering Feasibility Report</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>
                    Thank you! Our senior solar EPC engineer will contact you shortly with custom PVsyst yield reports for your Haridwar plant.
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Right Live Results Output Dashboard Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0b1322] to-[#070b12]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <span className="text-xs font-mono text-emerald-400 uppercase flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1 text-emerald-400" /> Live Solar Metrics
              </span>
              <span className="text-[10px] font-mono text-slate-400">NET-METERING READY</span>
            </div>

            {/* Estimated Solar System Capacity */}
            <div className="mb-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-mono text-slate-400 uppercase mb-1">Recommended Solar Capacity</div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono flex items-baseline">
                <AnimatedNumber value={recommendedKw} duration={1500} /> <span className="text-lg font-normal text-slate-300 ml-2">kWp Plant</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Optimized for {businessType} load profile
              </div>
            </div>

            {/* Estimated Annual Electricity Savings */}
            <div className="mb-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-mono text-slate-400 uppercase mb-1">Estimated Annual Bill Savings</div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono flex items-baseline">
                ₹ <AnimatedNumber value={annualSavings} format={(val) => Math.floor(val).toLocaleString('en-IN')} duration={2000} className="ml-2" />{' '}
                <span className="text-xs font-normal text-slate-400 ml-2">/ Year</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Based on commercial slab tariff &amp; captive consumption
              </div>
            </div>

            {/* Grid Stats: CO2 & Payback */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Carbon Offset</div>
                <div className="text-lg font-bold text-blue-400 font-mono mt-0.5">
                  <AnimatedNumber value={carbonOffset} duration={1500} /> Tons
                </div>
                <div className="text-[9px] text-slate-500">CO2 Reduced / Year</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Estimated Payback</div>
                <div className="text-lg font-bold text-purple-400 font-mono mt-0.5">
                  <AnimatedNumber value={Number(paybackYears)} format={(val) => val.toFixed(1)} duration={1500} /> Years
                </div>
                <div className="text-[9px] text-slate-500">25 Yr Warranty Life</div>
              </div>
            </div>

            {/* Guarantee note */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 leading-relaxed mb-6">
              <span className="font-bold">Mayank Industries Guarantee:</span> All feasibility estimates include Tier-1 PV modules, ALMM approved inverters, CEIG inspection clearance, and 5-Year Comprehensive AMC.
            </div>

            <a
              href="#contact"
              className="w-full py-3 text-xs font-bold uppercase tracking-wider rounded bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center justify-center border border-slate-700"
            >
              <span>Book Site Visit & Roof Inspection</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
