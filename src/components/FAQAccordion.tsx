'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

interface FAQAccordionProps {
  categories: FAQCategory[];
}

export default function FAQAccordion({ categories }: FAQAccordionProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveCategory(idx);
              setOpenFaqIndex(null);
            }}
            className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeCategory === idx
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {categories[activeCategory].faqs.map((faq, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-amber-500/50 shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left px-6 py-4 flex items-center justify-between bg-slate-50/50 hover:bg-slate-100/50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-base sm:text-lg pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
