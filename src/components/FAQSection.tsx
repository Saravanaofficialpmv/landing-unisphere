import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../data/landingPageData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { CloudShader } from '@/components/ui/cloud-shader';

interface FAQSectionProps {
  onBookDemoClick?: () => void;
}

const FAQBackground = React.memo(() => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
    {/* Vibrant daylight sky base */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#1d4ed8] via-[#2563eb] to-[#1e40af]" />

    {/* Dynamic Daylight CloudShader Canvas */}
    <CloudShader
      className="h-full w-full opacity-90"
      speed={0.5}
      count={4}
      cloudColor="#ffffff"
      skyTopColor="#1d4ed8"
      skyBottomColor="#3b82f6"
    />

    {/* Soft dreamy cloud mist blurs (kept in upper and mid sky) */}
    <div className="absolute -top-24 left-1/4 w-[48rem] h-60 bg-white/40 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute top-1/2 -right-24 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />

    {/* Ending Deep Blue Atmosphere Effect transitioning seamlessly into Final CTA */}
    <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-b from-transparent 10% via-[#153e90] 65% to-[#153e90] 100% pointer-events-none z-[1]" />
  </div>
));

export const FAQSection: React.FC<FAQSectionProps> = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden text-white bg-[#1d4ed8]">
      {/* Daylight Sky & CloudShader Background */}
      <FAQBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-white backdrop-blur-md mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Institutional questions & answers.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/90 font-normal text-balance">
            Direct, factual information for higher-education leadership, academic administrators, and IT decision-makers.
          </p>
        </div>

        {/* FAQ Accordion List - Frosted Sky Cards */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-200 ${
                  isOpen
                    ? 'bg-white/20 border border-white/40 shadow-xl ring-1 ring-white/30'
                    : 'bg-white/10 border border-white/20 hover:border-white/35 hover:bg-white/15 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen 
                      ? 'bg-white text-primary rotate-180 shadow-xs' 
                      : 'bg-white/20 text-white'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-white/90 leading-relaxed border-t border-white/15 pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
