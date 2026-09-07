import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_METRICS } from '../data/landingPageData';
import { Building2, Users, Workflow, Sparkles } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    campus: <Building2 className="w-5 h-5 text-primary" />,
    roles: <Users className="w-5 h-5 text-primary" />,
    workflows: <Workflow className="w-5 h-5 text-primary" />,
    experience: <Sparkles className="w-5 h-5 text-primary" />
  };

  return (
    <section className="pt-14 pb-12 sm:pt-16 sm:pb-14 border-b border-border/80 bg-surface-soft/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-border shadow-xs hover:border-primary/40 hover:shadow-card transition-all group cursor-default"
            >
              <div>
                {/* Top Row: Icon + Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-subtle border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                    {iconMap[metric.id]}
                  </div>
                  <span className="text-xs font-mono font-extrabold text-primary px-2.5 py-0.5 rounded-full bg-primary-subtle border border-primary/20 shadow-2xs">
                    {metric.value}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-content-primary tracking-tight group-hover:text-primary transition-colors">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-content-secondary mt-1.5 leading-relaxed font-normal">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
