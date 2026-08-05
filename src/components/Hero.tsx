'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Sun, ShieldCheck, ChevronRight, ArrowDownRight, Award, Factory, Wrench } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/ai/solar_epc_plant.png',
      tagline: 'TURNKEY INDUSTRIAL SOLAR EPC',
      title: 'Powering Factories With High-Yield Solar Infrastructure',
      subtitle: 'Slash monthly industrial electricity expenses by up to 70% with heavy-duty commercial rooftop and ground-mounted solar installations.',
    },
    {
      image: '/images/ai/ht_substation_panel.png',
      tagline: 'ELECTRICAL & CONTROL SYSTEMS',
      title: 'Precision Electrical Commissioning & Control Panels',
      subtitle: 'Complete HT/LT cable laying, SCADA control systems, relay panels, switchgear supply, and high-voltage grid integrations.',
    },
    {
      image: '/images/ai/machining_lathe_workshop.png',
      tagline: 'HEAVY FABRICATION & MACHINING',
      title: 'Industrial Heavy Machining, Fabrication & Plant AMC',
      subtitle: 'Overhauling industrial machinery, precision lathe fabrication, fire hydrant setups, and comprehensive annual maintenance contracts.',
    },
    {
      image: '/images/old-site/banner_1.jpg',
      tagline: 'STATEWIDE EXECUTION IN UTTARAKHAND',
      title: 'Trusted Partner For DISCOM & Govt Infrastructure',
      subtitle: 'Over 45+ years of engineering heritage associated with GOGOAL Hydro across industrial parks, PSUs, and commercial facilities.',
    },
    {
      image: '/images/old-site/banner_2.jpg',
      tagline: 'INSTRUMENT CALIBRATION & FIRE SAFETY',
      title: 'NABL Traceable Calibration & Fire NOC Systems',
      subtitle: 'Complete laboratory instrument testing, breakdown overhauling, and certified fire hydrant installation for plant safety compliance.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070b12]">
      {/* Background Image Carousel with Overlay */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-105 transition-transform duration-[8000ms]' : 'opacity-0 scale-100'
          }`}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-90"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          {/* Cinematic Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-[#070b12]/80 to-[#070b12]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b12] via-[#070b12]/70 to-transparent" />
        </div>
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Ambient Energy Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Small Label Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-300">
                Mayank Industries | Industrial Solar & Engineering Solutions
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase">
              Powering Industries With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Solar, Electrical
              </span>{' '}
              & Mechanical Excellence
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Turnkey solar power plant solutions, industrial electrical and mechanical services, heavy fabrication, instrument calibration, fire safety systems, and AMC support for factories, warehouses, and commercial facilities across Uttarakhand.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-2">
              <a
                href="#solar-calculator"
                className="mechanical-btn bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-7 py-4 rounded-md text-sm uppercase tracking-wider flex items-center justify-center shadow-xl shadow-amber-500/20"
              >
                <Sun className="w-5 h-5 mr-2 text-black" />
                <span>Book Free Solar Consultation</span>
              </a>

              <a
                href="#services"
                className="mechanical-btn-blue bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/80 font-bold px-6 py-4 rounded-md text-sm uppercase tracking-wider flex items-center justify-center backdrop-blur-md"
              >
                <Wrench className="w-4 h-4 mr-2 text-blue-400" />
                <span>Explore Industrial Services</span>
              </a>
            </div>

            {/* Slide Navigation Indicators */}
            <div className="flex items-center space-x-3 pt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs font-mono text-slate-400 uppercase ml-2">
                0{currentSlide + 1} / 0{slides.length} • {slides[currentSlide].tagline}
              </span>
            </div>

          </div>

          {/* Right Floating Mechanical Glass Feature Box */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-panel p-6 rounded-xl border border-slate-700/60 shadow-2xl relative overflow-hidden group">
              {/* Corner industrial bolt accents */}
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full border border-slate-500 bg-slate-800" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full border border-slate-500 bg-slate-800" />
              <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full border border-slate-500 bg-slate-800" />
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full border border-slate-500 bg-slate-800" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs font-mono uppercase text-amber-400 tracking-wider flex items-center">
                  <Zap className="w-3.5 h-3.5 mr-1" /> Core B2B Specialization
                </span>
                <span className="text-[10px] font-mono text-slate-500">ISO CERTIFIED EXECUTION</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {slides[currentSlide].title}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs p-2 rounded bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400">Sister Concern Legacy</span>
                  <span className="font-mono font-bold text-amber-400">GOGOAL Hydro</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400">Project Delivery</span>
                  <span className="font-mono font-bold text-emerald-400">100% Turnkey EPC</span>
                </div>
              </div>

              <a
                href="#solar-calculator"
                className="w-full text-xs font-bold uppercase tracking-wider py-2.5 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-black transition-colors flex items-center justify-center"
              >
                <span>Calculate Rooftop Savings</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Trust Strip Banner */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center space-x-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <Award className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <div className="text-left">
              <div className="text-sm font-extrabold text-white font-mono">
                <AnimatedNumber value={45} suffix="+ YEARS" duration={2000} />
              </div>
              <div className="text-[11px] text-slate-400">Engineering Legacy</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <Factory className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div className="text-left">
              <div className="text-sm font-extrabold text-white font-mono">
                <AnimatedNumber value={494} suffix="+ PROJECTS" duration={2000} />
              </div>
              <div className="text-[11px] text-slate-400">Industrial Executions</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div className="text-left">
              <div className="text-sm font-extrabold text-white font-mono">100% TURNKEY</div>
              <div className="text-[11px] text-slate-400">Design to Maintenance</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <ArrowDownRight className="w-6 h-6 text-purple-400 flex-shrink-0" />
            <div className="text-left">
              <div className="text-sm font-extrabold text-white font-mono">HARIDWAR, UK</div>
              <div className="text-[11px] text-slate-400">Industrial Area Hub</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
