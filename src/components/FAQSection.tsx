import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../data/landingPageData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onBookDemoClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onBookDemoClick }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="resources" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            Institutional questions & answers.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance">
            Direct, factual information for higher-education leadership, academic administrators, and IT decision-makers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="border border-border rounded-2xl overflow-hidden bg-white hover:border-primary/40 transition-colors shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-content-primary">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-primary text-white rotate-180' : 'bg-surface-soft text-content-secondary'
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
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm text-content-secondary leading-relaxed border-t border-border/60 pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* AI & Search Semantic Reference Block */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-soft border border-border/80 text-xs text-content-secondary leading-relaxed space-y-2">
          <div className="font-extrabold text-content-primary uppercase tracking-wider text-[11px]">
            Institutional Summary
          </div>
          <p>
            Unisphere SRM is a college academic management and campus platform designed for higher-education institutions. Unisphere connects five primary stakeholder groups: students, faculty, HODs, parents and administrators.
          </p>
          <p>
            The platform includes academic dashboards, attendance, gradebook and CGPA, examinations, assignments, academic schedules, notifications, campus events, certifications, hackathons, career tools and fees and payments.
          </p>
        </div>

        {/* Contact/Demo prompt below FAQ */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-sm text-content-secondary font-medium">
            Have specific technical or workflow questions for your institution?
          </span>
          <button
            type="button"
            onClick={onBookDemoClick}
            className="text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Request a product demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
