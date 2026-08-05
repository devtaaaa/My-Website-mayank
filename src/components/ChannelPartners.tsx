'use client';

import React from 'react';
import { Handshake, Award, ShieldCheck } from 'lucide-react';

const partnerLogos = [
  { id: 'servokon', name: 'Servokon Systems', src: '/partners/Servokon-logo.png' },
  { id: 'partner-3', name: 'Industrial Partner', src: '/partners/3.jpg' },
  { id: 'partner-6', name: 'OEM Partner', src: '/partners/6.jpg' },
  { id: 'partner-7', name: 'Technology Partner', src: '/partners/7.jpg' },
  { id: 'partner-10', name: 'Solar & Power Partner', src: '/partners/10.jpg' },
  { id: 'partner-12', name: 'Engineering Partner', src: '/partners/12.jpg' },
  { id: 'partner-13', name: 'Equipment Partner', src: '/partners/13.jpg' },
  { id: 'partner-15', name: 'Manufacturing Partner', src: '/partners/15.jpg' },
  { id: 'partner-images', name: 'Supply Partner', src: '/partners/images.png' },
  { id: 'partner-screenshot', name: 'Haridwar Ecosystem Partner', src: '/partners/Screenshot%202026-07-31%20at%209.53.29%20AM.png' },
];

export default function ChannelPartners() {
  // Duplicate array 4 times to ensure a smooth, continuous, seamless infinite loop on any screen width
  const marqueeItems = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section id="channel-partners" className="py-20 bg-[#070b12] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Decorative Grids & Glow */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/90 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
          <Handshake className="w-4 h-4 text-amber-400" />
          <span>Strategic Collaborations &amp; OEM Associations</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
          Our Channel <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">Partners</span>
        </h2>

        <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
          We collaborate with world-class manufacturers, energy leaders, and industrial equipment suppliers to deliver uncompromised quality across Uttarakhand.
        </p>

        <div className="mt-4 flex justify-center items-center space-x-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1.5" /> 100% Genuine Components</span>
          <span className="flex items-center"><Award className="w-3.5 h-3.5 text-amber-400 mr-1.5" /> Authorized Dealer Network</span>
        </div>
      </div>

      {/* Infinite Marquee Loop Slider */}
      <div className="relative w-full overflow-hidden py-4 bg-slate-950/40 border-y border-slate-800/60 shadow-inner group">
        {/* Left & Right Gradient Fades */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#070b12] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#070b12] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee flex items-center space-x-8 px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-48 h-24 px-4 py-3 rounded-xl bg-white/95 hover:bg-white border border-slate-700/40 shadow-lg hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center group/card cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.name}
                className="max-h-16 max-w-full object-contain filter grayscale group-hover/card:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
          Hover over marquee to pause • Click to explore partner details
        </p>
      </div>
    </section>
  );
}
