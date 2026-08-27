import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_METRICS } from '../data/landingPageData';
import { Layers, Box, Smartphone, ShieldCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    portals: <Layers className="w-5 h-5 text-primary" />,
    modules: <Box className="w-5 h-5 text-primary" />,
    platform: <Smartphone className="w-5 h-5 text-primary" />,
    security: <ShieldCheck className="w-5 h-5 text-primary" />
  };

  return (
    <section className="py-12 border-y border-border/80 bg-surface-soft/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-2xl bg-white/70 border border-border/70 shadow-xs hover:border-primary/30 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary-subtle flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                {iconMap[metric.id]}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-content-primary tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-content-secondary mt-0.5">
                {metric.label}
              </div>
              <div className="text-xs text-content-tertiary mt-1 hidden sm:block">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
