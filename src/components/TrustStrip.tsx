import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_METRICS } from '../data/landingPageData';
import { Users, Box, ShieldCheck, Layers } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    portals: <Users className="w-5 h-5 text-primary" />,
    modules: <Box className="w-5 h-5 text-primary" />,
    workflows: <ShieldCheck className="w-5 h-5 text-primary" />,
    platform: <Layers className="w-5 h-5 text-primary" />
  };

  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-border/80 bg-surface-soft/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col p-5 sm:p-6 rounded-2xl bg-white border border-border shadow-xs hover:border-primary/40 hover:shadow-card transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-subtle flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {iconMap[metric.id]}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-content-primary tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-extrabold text-content-primary mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-content-secondary mt-1 leading-relaxed">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
