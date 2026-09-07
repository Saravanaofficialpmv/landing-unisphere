import React from 'react';
import { motion } from 'framer-motion';
import { IMPLEMENTATION_STEPS } from '../data/landingPageData';
import { ArrowRight, CheckCircle2, Sparkles, Compass } from 'lucide-react';

interface ImplementationJourneyProps {
  onDiscussClick: () => void;
}

export const ImplementationJourney: React.FC<ImplementationJourneyProps> = ({ onDiscussClick }) => {
  return (
    <section id="implementation" className="py-20 sm:py-28 bg-surface-soft/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Onboarding Path
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            From first conversation to connected campus.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance">
            A structured institutional onboarding process designed to align with your academic calendar and departmental hierarchy.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {IMPLEMENTATION_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-border hover:border-primary/40 shadow-xs hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-primary-subtle text-primary border border-primary/20">
                    STAGE {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-content-primary tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
                  {step.description}
                </p>

                {/* Step Sub-points */}
                <div className="mt-6 space-y-2 pt-4 border-t border-border/80">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-content-primary font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60">
                <div className="h-1 w-10 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onDiscussClick}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm sm:text-base font-extrabold text-white bg-primary hover:bg-primary-dark shadow-md shadow-primary/25 hover:shadow-lg transition-all active:scale-95 cursor-pointer ring-2 ring-primary/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Discuss your institution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImplementationJourney;
