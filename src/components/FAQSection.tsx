import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../data/landingPageData';
import { Plus, Minus } from 'lucide-react';

interface FAQSectionProps {
  onBookDemoClick?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = () => {
  // First item open by default to mirror reference design
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large FAQ Header (matching reference design) */}
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-content-primary leading-none select-none">
          FAQ
        </h2>

        {/* Lead Subtitle (matching reference design) */}
        <p className="mt-6 sm:mt-8 mb-12 sm:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-content-primary leading-[1.25] max-w-4xl text-balance">
          Explore the answers to common queries, and if you don't find what you're looking for, our support team is always ready to assist you.
        </p>

        {/* Minimalist Border-Separated Accordion List */}
        <div className="border-t border-slate-200/90">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="border-b border-slate-200/90 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-6 sm:py-7 flex items-start justify-between gap-6 text-left cursor-pointer group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium sm:font-semibold text-content-primary group-hover:text-primary transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 mt-0.5 text-content-secondary group-hover:text-primary transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-primary stroke-[2.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 sm:pb-8 text-sm sm:text-base text-content-secondary leading-relaxed max-w-3xl pr-6 sm:pr-12">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
