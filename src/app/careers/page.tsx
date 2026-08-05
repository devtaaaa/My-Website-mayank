'use client';

import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Electrical Engineer',
      type: 'Full-time',
      location: 'Haridwar, UK',
      exp: '5-8 Years',
      desc: 'Lead the commissioning of 33kV substations, VCB panels, and industrial solar PV plants. Must have CEIG approval experience.',
    },
    {
      title: 'Solar EPC Technician',
      type: 'Full-time',
      location: 'Site-based (Uttarakhand)',
      exp: '2-5 Years',
      desc: 'Execute rooftop solar module mounting, DC/AC cable trenching, and grid-tie inverter synchronization.',
    },
    {
      title: 'Industrial Sales Executive',
      type: 'Full-time',
      location: 'Haridwar / Dehradun',
      exp: '3+ Years',
      desc: 'Drive B2B sales for industrial electrical consumables, bearings, and heavy fabrication AMC contracts.',
    },
    {
      title: 'Mechanical Fitter / Welder',
      type: 'Full-time',
      location: 'Haridwar, UK',
      exp: '4+ Years',
      desc: 'Expertise in heavy structural MS/SS fabrication, TIG/MIG welding, and industrial plant maintenance.',
    }
  ];

  return (
    <main className="min-h-screen bg-[#070b12] text-slate-100 relative pt-24 sm:pt-32 pb-24">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-full max-w-2xl h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Careers at <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
              Mayank Industries
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Build the future of industrial infrastructure. We are always looking for passionate engineers, technicians, and sales professionals to drive our heavy engineering and solar EPC projects forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Job Openings */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide flex items-center border-b border-slate-800 pb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 animate-pulse" />
              Current Openings
            </h2>

            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors group">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono text-slate-400">
                        <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" /> {job.location}</span>
                        <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {job.type}</span>
                        <span className="flex items-center px-2 py-0.5 bg-slate-800 rounded border border-slate-700 text-emerald-400">Exp: {job.exp}</span>
                      </div>
                    </div>
                    <button className="mt-4 sm:mt-0 text-xs font-bold uppercase tracking-wider text-black bg-emerald-500 hover:bg-emerald-400 px-4 py-2 rounded transition-colors whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-sm text-slate-300">
                    {job.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Form / Contact */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 glass-panel p-8 rounded-2xl border border-slate-700/80 shadow-2xl bg-slate-900/80">
              <h3 className="text-xl font-bold text-white mb-2">Don't see a perfect fit?</h3>
              <p className="text-sm text-slate-400 mb-6">
                Submit your resume to our general talent pool. We will contact you when a suitable position opens up.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Full Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="e.g. Rahul Sharma" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Email Address</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="rahul@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">Area of Expertise</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                    <option>Electrical Engineering</option>
                    <option>Mechanical / Fabrication</option>
                    <option>Solar EPC</option>
                    <option>Sales & Marketing</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="pt-2">
                  <div className="w-full border-2 border-dashed border-slate-700 rounded-lg p-6 text-center hover:border-emerald-500 transition-colors cursor-pointer bg-slate-900/50">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <div className="text-sm text-white font-medium">Click to upload Resume (PDF)</div>
                    <div className="text-xs text-slate-500 mt-1">Max file size 5MB</div>
                  </div>
                </div>

                <button type="button" className="w-full mt-6 bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-wider py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
