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
    <section id="hero" className="relative bg-white pt-24 lg:pt-32 pb-20 overflow-hidden">
      {/* Subtle Background Pattern for professional look */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Text Content (Negative Breathing Space) */}
          <div className="flex flex-col items-start space-y-8 pr-0 lg:pr-12">
            
            {/* Small Label Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Mayank Industries | Engineering Solutions
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h4 className="text-amber-600 font-bold tracking-widest text-sm uppercase">
                {slides[currentSlide].tagline}
              </h4>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                {slides[currentSlide].title.split(' ').map((word, i) => {
                  if (word.toLowerCase().includes('solar') || word.toLowerCase().includes('electrical')) {
                    return <span key={i} className="text-amber-500">{word} </span>;
                  }
                  return word + ' ';
                })}
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-light">
              {slides[currentSlide].subtitle}
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-4">
              <a
                href="#solar-calculator"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wider flex items-center justify-center shadow-lg shadow-amber-500/30 transition-all transform hover:-translate-y-1"
              >
                <Sun className="w-5 h-5 mr-2" />
                <span>Book Consultation</span>
              </a>

              <a
                href="#services"
                className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wider flex items-center justify-center shadow-sm transition-all transform hover:-translate-y-1"
              >
                <Wrench className="w-4 h-4 mr-2 text-slate-500" />
                <span>Explore Services</span>
              </a>
            </div>

            {/* Slide Navigation Indicators */}
            <div className="flex items-center space-x-3 pt-8">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentSlide ? 'w-10 bg-amber-500' : 'w-4 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs font-medium text-slate-600 ml-4">
                0{currentSlide + 1} / 0{slides.length}
              </span>
            </div>

          </div>

          {/* Right Floating Image Carousel */}
          <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
                {/* Subtle light overlay to blend corners if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
            ))}
            
            {/* Overlay Glass Box for extra professional feel */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-lg hidden sm:block">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-amber-600 tracking-wider flex items-center mb-1">
                    <Zap className="w-4 h-4 mr-1" /> Core B2B Specialization
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    100% Turnkey EPC
                  </h3>
                </div>
                <a
                  href="#solar-calculator"
                  className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Trust Strip Banner (Light Theme) */}
        <div className="mt-20 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
            <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <div className="text-center sm:text-left">
              <div className="text-xl font-black text-slate-900 font-mono">
                <AnimatedNumber value={45} suffix="+ YEARS" duration={2000} />
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Engineering Legacy</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
            <Factory className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <div className="text-center sm:text-left">
              <div className="text-xl font-black text-slate-900 font-mono">
                <AnimatedNumber value={494} suffix="+ PROJECTS" duration={2000} />
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Industrial Executions</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
            <ShieldCheck className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div className="text-center sm:text-left">
              <div className="text-xl font-black text-slate-900 font-mono">100% TURNKEY</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Design to Maintenance</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
            <ArrowDownRight className="w-8 h-8 text-purple-500 flex-shrink-0" />
            <div className="text-center sm:text-left">
              <div className="text-xl font-black text-slate-900 font-mono">HARIDWAR, UK</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Industrial Area Hub</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
