import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_METRICS } from '../data/landingPageData';
import { GlowingEffect } from './ui/glowing-effect';
import universityIcon from '../assets/university.png';
import workforceIcon from '../assets/workforce.png';
import workflowIcon from '../assets/workflow.png';
import feedbackIcon from '../assets/feedback.png';

export const TrustStrip: React.FC = () => {
  const iconMap: Record<string, { src: string; alt: string }> = {
    campus: { src: universityIcon, alt: 'One Campus' },
    roles: { src: workforceIcon, alt: 'Every Role' },
    workflows: { src: workflowIcon, alt: 'Every Workflow' },
    experience: { src: feedbackIcon, alt: 'One Experience' }
  };

  return (
    <section className="pt-12 pb-12 sm:pt-16 sm:pb-14 border-b border-border/80 bg-surface-soft/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_METRICS.map((metric, idx) => {
            const iconData = iconMap[metric.id];
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative h-full rounded-2xl md:rounded-3xl border border-slate-200/80 bg-slate-50/70 p-2 md:p-2.5 transition-all duration-300 shadow-xs hover:shadow-card group flex flex-col"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1.5}
                />
                <div className="relative z-10 flex-1 p-6 sm:p-7 rounded-xl md:rounded-2xl bg-white border border-border/70 shadow-2xs flex flex-col justify-between">
                  <div>
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-primary-subtle/70 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                      {iconData && (
                        <img 
                          src={iconData.src} 
                          alt={iconData.alt} 
                          className="w-7 h-7 object-contain select-none pointer-events-none" 
                          loading="eager"
                        />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-content-primary tracking-tight group-hover:text-primary transition-colors">
                      {metric.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-content-secondary mt-2 leading-relaxed font-normal">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
