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
  CheckCircle2,
  GraduationCap,
  Building,
  BriefcaseBusiness
} from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Academics' | 'Campus Life' | 'Career & Ops'>('All');

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

  const categories = [
    { id: 'All', label: 'All 12 Modules', count: 12 },
    { id: 'Academics', label: 'Academics', count: 6, icon: GraduationCap },
    { id: 'Campus Life', label: 'Campus Life', count: 2, icon: Building },
    { id: 'Career & Ops', label: 'Career & Operations', count: 4, icon: BriefcaseBusiness },
  ] as const;

  const academicsFeatures = FEATURES_DATA.filter(f => f.category === 'Academics');
  const campusLifeFeatures = FEATURES_DATA.filter(f => f.category === 'Campus Life');
  const careerOpsFeatures = FEATURES_DATA.filter(f => f.category === 'Career & Ops');

  const renderModuleCard = (feature: typeof FEATURES_DATA[0], idx: number) => {
    const Icon = getIcon(feature.iconName);

    return (
      <motion.div
        key={feature.id}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
        className="p-6 rounded-3xl bg-white border border-border hover:border-primary/40 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
      >
        <div>
          {/* Header: Icon + Category Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-2xl bg-primary-subtle text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-200 shadow-2xs">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-content-tertiary px-2.5 py-1 rounded-full bg-surface-soft border border-border/70">
              {feature.category}
            </span>
          </div>

          {/* Module Title */}
          <h3 className="text-base sm:text-lg font-extrabold text-content-primary group-hover:text-primary transition-colors">
            {feature.title}
          </h3>

          {/* Feature Description */}
          <p className="mt-2 text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
            {feature.description}
          </p>
        </div>

        {/* Institutional Outcome Callout */}
        <div className="mt-5 pt-4 border-t border-border/70">
          <div className="text-[10px] uppercase font-bold tracking-wider text-content-tertiary mb-1">
            Institutional Outcome
          </div>
          <div className="text-xs font-semibold text-content-primary flex items-start gap-1.5 leading-snug">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span>{feature.outcome}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="features" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Comprehensive Platform Scope
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            Everything your institution needs to run a connected academic journey.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance">
            Twelve documented modules grouped into academic management, campus life, and career operations—engineered to deliver measurable outcomes.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-primary text-white shadow-sm shadow-primary/30'
                    : 'bg-surface-soft text-content-secondary hover:text-content-primary hover:bg-surface-muted border border-border/80'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeTab === cat.id ? 'bg-white/20 text-white' : 'bg-white text-content-tertiary border border-border'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display: Grouped or Filtered */}
        {activeTab === 'All' ? (
          <div className="space-y-16">
            {/* Group 1: ACADEMICS */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-content-primary">
                      Academics
                    </h3>
                    <p className="text-xs text-content-secondary">
                      Core teaching, attendance tracking, examination governance, and scheduling
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-surface-soft text-content-secondary border border-border">
                  6 Modules
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicsFeatures.map((feature, idx) => renderModuleCard(feature, idx))}
              </div>
            </div>

            {/* Group 2: CAMPUS LIFE */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-content-primary">
                      Campus Life
                    </h3>
                    <p className="text-xs text-content-secondary">
                      Urgent broadcasts, circulars, and institutional event coordination
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-surface-soft text-content-secondary border border-border">
                  2 Modules
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {campusLifeFeatures.map((feature, idx) => renderModuleCard(feature, idx))}
              </div>
            </div>

            {/* Group 3: CAREER & OPERATIONS */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <BriefcaseBusiness className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-content-primary">
                      Career & Operations
                    </h3>
                    <p className="text-xs text-content-secondary">
                      Skill certifications, hackathons, placement preparation, and fee collections
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-surface-soft text-content-secondary border border-border">
                  4 Modules
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {careerOpsFeatures.map((feature, idx) => renderModuleCard(feature, idx))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'Academics'
              ? academicsFeatures
              : activeTab === 'Campus Life'
              ? campusLifeFeatures
              : careerOpsFeatures
            ).map((feature, idx) => renderModuleCard(feature, idx))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureGrid;
