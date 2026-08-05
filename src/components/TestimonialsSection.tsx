'use client';

import React from 'react';
import { Quote, Star, Building, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Rakesh Sharma',
      role: 'General Manager - Operations',
      company: 'Pharma Manufacturing Unit, SIDCUL Haridwar',
      text: 'Mayank Industries executed our 450 kWp commercial rooftop solar project within 45 days. Their team handled everything from CEIG electrical inspector clearance to UPCL net-metering sync seamlessly. Our monthly electricity bill dropped by nearly 70%.',
      rating: 5,
    },
    {
      name: 'Vipin Agarwal',
      role: 'VP - Procurement & Infrastructure',
      company: 'Automotive Component Plant, Roorkee',
      text: 'We handed over our complete 11kV electrical substation erection and HT cable laying contract to Mayank Industries. Their technical expertise, OEM switchgear supply, and safety standards are unmatched in Uttarakhand.',
      rating: 5,
    },
    {
      name: 'Sanjeev Devrani',
      role: 'Chief Engineer',
      company: 'Garhwal Hydropower Project',
      text: 'Having worked with their sister concern GOGOAL Hydro for decades, Mayank Industries delivered exceptional heavy machine overhauling and runner fabrication. Reliable, fast, and technically rigorous.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#070b12] relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Quote className="w-4 h-4" />
            <span>Client Endorsements &amp; B2B Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            What Industrial Decision Makers Say About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Mayank Industries
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Read feedback from plant heads, facility managers, and engineering heads across Haridwar &amp; Uttarakhand.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-8 rounded-2xl border border-slate-800 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-amber-500/20 mb-4 group-hover:text-amber-500/40 transition-colors" />

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                &ldquo;{rev.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="font-bold text-white text-sm">{rev.name}</div>
                <div className="text-xs text-amber-400 font-mono">{rev.role}</div>
                <div className="text-[11px] text-slate-500 flex items-center mt-1">
                  <Building className="w-3 h-3 mr-1 text-slate-400" />
                  <span>{rev.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
