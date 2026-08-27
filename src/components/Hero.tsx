import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { HeroDashboard } from './HeroDashboard';

interface HeroProps {
  onGetStartedClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStartedClick, onExploreClick }) => {
  const roleTags = [
    { name: 'Student', color: '#2563EB', bg: 'rgba(37, 99, 235, 0.08)' },
    { name: 'Faculty', color: '#7C3AED', bg: 'rgba(124, 58, 237, 0.08)' },
    { name: 'HOD', color: '#D97706', bg: 'rgba(217, 119, 6, 0.08)' },
    { name: 'Parent', color: '#059669', bg: 'rgba(5, 150, 105, 0.08)' },
    { name: 'Admin', color: '#DC2626', bg: 'rgba(220, 38, 38, 0.08)' },
  ];

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative subtle grid */}
      <div className="absolute inset-0 subtle-grid-pattern opacity-40 -z-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Small Top Label / Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary shadow-2xs mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-widest">
              The Unified Campus Platform
            </span>
          </motion.div>

          {/* Main Headings */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-content-primary tracking-tight leading-[1.08] max-w-4xl text-balance"
          >
            One Campus. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary-dark">
              One Connected Experience.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-content-secondary max-w-2xl font-normal leading-relaxed text-balance"
          >
            Unisphere brings students, faculty, parents, HODs, and administrators together in one intelligent platform for a simpler, more connected academic experience.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={onGetStartedClick}
              className="w-full sm:w-auto px-7 py-3.5 text-base font-bold text-white bg-primary hover:bg-primary-dark rounded-2xl shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-7 py-3.5 text-base font-bold text-content-primary bg-surface hover:bg-surface-soft border border-border hover:border-primary/40 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-2xs"
            >
              <Compass className="w-4 h-4 text-primary" />
              <span>Explore Unisphere</span>
            </button>
          </motion.div>

          {/* Below Pill: Student • Faculty • HOD • Parent • Admin */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-content-secondary"
          >
            {roleTags.map((role, idx) => (
              <React.Fragment key={role.name}>
                <span 
                  className="px-2.5 py-1 rounded-full border border-border/80 text-content-primary"
                  style={{ backgroundColor: role.bg }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block mr-1.5" style={{ backgroundColor: role.color }} />
                  {role.name}
                </span>
                {idx < roleTags.length - 1 && (
                  <span className="text-content-tertiary hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Central Dashboard Mockup Visual */}
        <div className="mt-12 sm:mt-16">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
};
