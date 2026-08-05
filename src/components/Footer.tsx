'use client';

import React from 'react';
import { Zap, ShieldCheck, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useContactNumbers } from '@/hooks/useContactNumbers';

export default function Footer() {
  const { numbers } = useContactNumbers();
  return (
    <footer className="bg-[#05080f] text-slate-400 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white px-3.5 py-2 rounded-xl border border-slate-700/80 shadow-lg group-hover:scale-105 transition-transform inline-flex items-center">
                <img
                  src="/images/mayank-logo.png"
                  alt="Mayank Industries - Reliability & Quality"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Turnkey industrial solar EPC solutions, electrical &amp; mechanical installation, heavy machining, fire fighting setups, and AMC support for factories across Uttarakhand.
            </p>

            <div className="flex items-center space-x-2 text-[11px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>GOGOAL Hydro Associated Enterprise</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/solar" className="hover:text-amber-400 transition-colors">Solar Solutions</Link></li>
              <li><Link href="/transformers" className="hover:text-amber-400 transition-colors">Transformers</Link></li>
              <li><Link href="/servo" className="hover:text-amber-400 transition-colors">Servo Stabilizers</Link></li>
              <li><Link href="/electrical-panels" className="hover:text-amber-400 transition-colors">Electrical Panels & VCB</Link></li>
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">Industrial Services</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Product Range</Link></li>
              <li><Link href="/projects" className="hover:text-amber-400 transition-colors">Projects</Link></li>
              <li><Link href="/careers" className="hover:text-amber-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              B2B Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/solar" className="hover:text-amber-400">Solar Power Plant EPC</Link></li>
              <li><Link href="/servo" className="hover:text-amber-400">Servo Voltage Stabilizers</Link></li>
              <li><Link href="/electrical-panels" className="hover:text-amber-400">HT/LT Cable &amp; Switchgear</Link></li>
              <li><Link href="/services" className="hover:text-amber-400">Calibration &amp; Testing</Link></li>
              <li><Link href="/services" className="hover:text-amber-400">Heavy Machine Machining</Link></li>
              <li><Link href="/services" className="hover:text-amber-400">Fire Hydrant Systems</Link></li>
              <li><Link href="/services" className="hover:text-amber-400">Plant AMC Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Haridwar Facility
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>E-60, Industrial Area Haridwar, Near Income Tax Office, Haridwar 249401, UK</span>
              </div>
              {numbers.map((num, i) => (
                <div key={i} className="flex items-center space-x-2 font-mono">
                  <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{num}</span>
                </div>
              ))}
              <div className="flex items-center space-x-2 font-mono">
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href="mailto:sales@mayankindustries.org" className="hover:text-amber-400 transition-colors">
                  sales@mayankindustries.org
                </a>
              </div>
              <div className="flex items-center space-x-4 pt-4 mt-2 border-t border-slate-800">
                <a href="https://www.instagram.com/mayank.industries/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://www.linkedin.com/mynetwork/grow/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61591724854961" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Mayank Industries. All rights reserved. Haridwar, Uttarakhand, India.
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>ISO 9001:2015 Compliant Execution</span>
            <span>•</span>
            <a href="#hero" className="hover:text-amber-400 flex items-center">
              <span>Back to Top</span>
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
