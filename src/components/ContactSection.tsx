'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Building, User, FileText } from 'lucide-react';
import { useContactNumbers } from '@/hooks/useContactNumbers';

export default function ContactSection() {
  const { numbers } = useContactNumbers();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: 'Industrial Solar',
    monthlyBill: '₹1 Lakh - ₹5 Lakhs',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Mail className="w-4 h-4" />
            <span>Haridwar Industrial Facility Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Connect With Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Engineering Team
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-600">
            Submit your industrial requirement or request a physical site audit at our Haridwar Industrial Area office.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Real Address & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-slate-200/80 shadow-2xl space-y-6">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-md inline-block mb-2">
                <img
                  src="/images/mayank-logo.png"
                  alt="Mayank Industries - Reliability & Quality"
                  width={160}
                  height={60}
                  className="h-10 w-auto object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 uppercase border-b border-slate-200 pb-3 flex items-center">
                <Building className="w-5 h-5 mr-2 text-amber-400" /> Plant &amp; Office Address
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Works Facility</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">Mayank Industries</div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    E-60, Industrial Area Haridwar,<br />
                    Near Income Tax Office,<br />
                    Haridwar - 249401, Uttarakhand, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Phone &amp; WhatsApp</div>
                  {numbers.map((num, i) => (
                    <a key={i} href={`tel:${num.replace(/\\D/g, '')}`} className={`block text-sm font-mono font-bold text-slate-900 hover:text-amber-400 ${i === 0 ? 'mt-0.5' : ''}`}>
                      {num}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Purchase &amp; Official Enquiries</div>
                  <a href="mailto:purchase@mayankindustries.org" className="block text-sm font-mono font-bold text-amber-400 hover:text-amber-300 mt-0.5">
                    purchase@mayankindustries.org
                  </a>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">
                    Direct routing for RFQs, Purchase Orders &amp; Form Submissions
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 border-t border-slate-200 pt-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Operating Hours</div>
                  <div className="text-xs text-slate-800 mt-0.5 font-mono">Monday - Saturday: 09:00 AM - 06:30 PM</div>
                  <div className="text-[10px] text-amber-400 font-mono">24/7 Breakdown AMC Support</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Industrial Enquiry Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-slate-200/80 shadow-2xl relative">
            <h3 className="text-xl font-bold text-slate-900 uppercase border-b border-slate-200 pb-3 mb-6 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-amber-400" /> Submit Technical Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Company / Plant Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Pharma Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+91-9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Requirement Type
                  </label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-400"
                  >
                    <option>Industrial Solar EPC</option>
                    <option>Electrical HT/LT Erection</option>
                    <option>Mechanical Installation</option>
                    <option>Fabrication & Machining</option>
                    <option>Instrument Calibration & Testing</option>
                    <option>Annual Maintenance Contract (AMC)</option>
                    <option>Fire Hydrant & Fire Fighting System</option>
                    <option>Industrial Product Supply</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Monthly Electricity Bill Range
                  </label>
                  <select
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-400"
                  >
                    <option>Under ₹1 Lakh</option>
                    <option>₹1 Lakh - ₹5 Lakhs</option>
                    <option>₹5 Lakhs - ₹15 Lakhs</option>
                    <option>₹15 Lakhs - ₹50 Lakhs</option>
                    <option>Above ₹50 Lakhs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Project Details / Specific Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your plant capacity, rooftop area, or specific machinery service requirement..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full mechanical-btn bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold py-3.5 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl"
              >
                <Send className="w-4 h-4" />
                <span>Submit Technical Enquiry</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>
                    Your enquiry has been received and routed directly to <strong>purchase@mayankindustries.org</strong>. Our engineering &amp; purchase department will respond within 4 business hours.
                  </span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
