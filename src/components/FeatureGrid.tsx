import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FEATURES_DATA } from '../data/landingPageData';
import {
  LayoutDashboard,
  CalendarCheck2,
  TrendingUp,
  FileSpreadsheet,
  CheckSquare,
  Clock,
  Bell,
  Sparkles,
  Award,
  Code2,
  Briefcase,
  CreditCard,
  ArrowUpRight
} from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Academics' | 'Campus Life' | 'Career & Ops'>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutDashboard':
        return LayoutDashboard;
      case 'CalendarCheck2':
        return CalendarCheck2;
      case 'TrendingUp':
        return TrendingUp;
      case 'FileSpreadsheet':
        return FileSpreadsheet;
      case 'CheckSquare':
        return CheckSquare;
      case 'Clock':
        return Clock;
      case 'Bell':
        return Bell;
      case 'Sparkles':
        return Sparkles;
      case 'Award':
        return Award;
      case 'Code2':
        return Code2;
      case 'Briefcase':
        return Briefcase;
      case 'CreditCard':
        return CreditCard;
      default:
        return LayoutDashboard;
    }
  };

  const filteredFeatures = activeFilter === 'All' 
    ? FEATURES_DATA 
    : FEATURES_DATA.filter(f => f.category === activeFilter);

  const categories = ['All', 'Academics', 'Campus Life', 'Career & Ops'] as const;

  return (
    <section id="features" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Powerful Features
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            Built around the academic journey.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal">
            Twelve integrated modules covering everything from lecture attendance to career placements in a cohesive workflow.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-primary text-white shadow-sm shadow-primary/30'
                    : 'bg-surface-soft text-content-secondary hover:text-content-primary hover:bg-surface-muted border border-border/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Features Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {filteredFeatures.map((feature, idx) => {
            const Icon = getIcon(feature.iconName);

            return (
              <motion.div
                key={feature.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                className="group p-6 rounded-2xl bg-white border border-border hover:border-primary/40 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-content-tertiary px-2 py-0.5 rounded bg-surface-soft border border-border/60">
                      {feature.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-content-primary group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{feature.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-content-tertiary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 text-[11px] font-semibold text-content-tertiary flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Integrated Real-time Module</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
