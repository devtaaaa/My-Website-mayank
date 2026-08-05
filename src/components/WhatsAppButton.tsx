'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useContactNumbers } from '@/hooks/useContactNumbers';

export default function WhatsAppButton() {
  const { primaryNumberClean } = useContactNumbers();
  return (
    <a
      href={`https://wa.me/${primaryNumberClean}?text=Hello%20Mayank%20Industries,%20I%20want%20to%20inquire%20about%20industrial%20solar/engineering%20solutions.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-black p-3.5 rounded-full shadow-2xl shadow-emerald-500/40 flex items-center justify-center hover:scale-110 transition-transform group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-black text-emerald-500" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold font-mono pl-0 group-hover:pl-2 text-black uppercase">
        WhatsApp Enquiry
      </span>
    </a>
  );
}
