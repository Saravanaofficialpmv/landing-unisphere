import React from 'react';
import { motion } from 'framer-motion';
import { WHY_UNISPHERE_DATA } from '../data/landingPageData';
import { CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

export const WhyUnisphere: React.FC = () => {
  const icons = [Layers, ShieldCheck, Zap];

  return (
    <section id="institutions" className="pt-6 pb-16 sm:pt-8 sm:pb-24 bg-surface-soft/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Institutional Foundation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            Built for the way institutions actually work.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance">
            Designed to bridge fragmented campus departments with focused, role-based workflows and institutional governance.
          </p>
        </div>

        {/* 3 Large Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_UNISPHERE_DATA.map((item, idx) => {
            const Icon = icons[idx];

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl sm:text-5xl font-extrabold text-primary/30 group-hover:text-primary transition-colors tracking-tighter">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary flex items-center justify-center group-hover:scale-110 shadow-xs transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-content-primary tracking-tight">
                    {item.number} — {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="mt-8 space-y-3 pt-6 border-t border-border/80">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-primary-subtle text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span className="text-xs sm:text-sm text-content-primary font-medium leading-normal">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <div className="h-1.5 w-12 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUnisphere;
