import React from 'react';
import { ShieldCheck, ArrowRight, RotateCw } from 'lucide-react';
import Link from 'next/link';

export default function USPBanner() {
  return (
    <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-black py-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat mix-blend-multiply" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-start md:items-center gap-4">
          <div className="bg-white/20 p-3 rounded-full shrink-0">
            <RotateCw className="w-8 h-8 text-black" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-1">
              Zero Downtime Guarantee
            </h3>
            <p className="font-semibold text-black/80 max-w-2xl">
              We provide standby transformers and servos <span className="font-bold underline decoration-2 underline-offset-2">without any cost</span> until your new unit arrives, along with a free site visit.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="shrink-0 bg-black text-amber-500 hover:bg-slate-900 font-bold px-6 py-3 rounded-lg uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl"
        >
          <span>Claim Free Site Visit</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        
      </div>
    </section>
  );
}
