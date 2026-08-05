'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, Phone, FileText, ChevronRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContactNumbers } from '@/hooks/useContactNumbers';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();
  const { primaryNumber, primaryNumberClean } = useContactNumbers();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solar', href: '/solar' },
    { name: 'Transformers', href: '/transformers' },
    { name: 'Servo Stabilizers', href: '/servo' },
    { name: 'Panels & VCB', href: '/electrical-panels' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#070b12]/90 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-black/50'
          : 'py-5 bg-gradient-to-b from-[#070b12]/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <div className="bg-white px-3 py-1.5 rounded-lg border border-slate-700/80 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
            <img
              src="/images/mayank-logo.png"
              alt="Mayank Industries - Reliability & Quality"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs xl:text-sm font-semibold transition-colors py-1 group whitespace-nowrap ${
                  isActive ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'
                }`}
              >
                {link.name}
                {/* Mechanical Rail Underline */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-500 to-blue-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
          <Link
            href="/contact"
            className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black px-4 xl:px-5 py-2 xl:py-2.5 rounded text-xs xl:text-sm font-extrabold uppercase tracking-widest transition-all shadow-lg hover:shadow-amber-500/25"
          >
            <FileText className="w-4 h-4" />
            <span>RFQ</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#090e18]/95 backdrop-blur-2xl border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-2xl animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 border-b border-slate-800 text-sm font-bold uppercase tracking-wider ${
                    isActive ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-600'}`} />
                </Link>
              );
            })}
            <div className="pt-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 bg-amber-500 text-black px-4 py-3 rounded text-sm font-extrabold uppercase tracking-widest"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us Now</span>
              </Link>
            </div>
            <a
              href={`tel:${primaryNumberClean}`}
              className="flex items-center justify-center py-2 text-xs font-mono text-slate-400 hover:text-amber-400"
            >
              <Phone className="w-4 h-4 mr-2 text-emerald-400" />
              <span>Direct Call: {primaryNumber}</span>
            </a>
        </div>
      )}
    </header>
  );
}
