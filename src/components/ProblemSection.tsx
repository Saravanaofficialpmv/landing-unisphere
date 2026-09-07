import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSpreadsheet, 
  ClipboardList, 
  BarChart3, 
  UsersRound, 
  ArrowRight, 
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import { PROBLEM_CARDS } from '../data/landingPageData';
import { ScrollReveal } from './ScrollReveal';

interface ProblemSectionProps {
  onExploreSolutions: () => void;
  onBookDemoClick: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ 
  onExploreSolutions,
  onBookDemoClick 
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-amber-600" />,
    ClipboardList: <ClipboardList className="w-5 h-5 text-red-600" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-purple-600" />,
    UsersRound: <UsersRound className="w-5 h-5 text-blue-600" />
  };

  return (
    <section id="problem" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              The Campus Disconnect
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            Your campus shouldn't run on disconnected systems.
          </h2>

          <div className="mt-6 max-w-3xl mx-auto">
            <ScrollReveal
              baseOpacity={0.15}
              enableBlur={true}
              baseRotation={1}
              blurStrength={5}
              containerClassName="my-2"
              textClassName="text-base sm:text-xl md:text-2xl font-bold text-content-secondary leading-relaxed text-balance"
              wordAnimationEnd="bottom bottom-=15%"
            >
              Academic information often lives across spreadsheets, messaging groups, paper workflows, isolated portals, and disconnected systems. Unisphere brings the people, information, and workflows of your institution into one connected experience.
            </ScrollReveal>
          </div>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-surface-soft border border-border hover:border-border-dark shadow-xs hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                  {iconMap[card.iconName]}
                </div>

                <h3 className="text-lg font-extrabold text-content-primary tracking-tight">
                  {card.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-content-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/80">
                <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200/80 px-2.5 py-1 rounded-lg block leading-relaxed">
                  {card.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inter-Section Conversion Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-primary-subtle/50 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-content-primary">
                Ready to eliminate disconnected campus silos?
              </h4>
              <p className="text-xs sm:text-sm text-content-secondary">
                See how Unisphere unifies student, faculty, parent, HOD, and administrative workflows into one platform.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={onExploreSolutions}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-primary bg-white border border-primary/30 hover:bg-white/80 shadow-2xs transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>See how Unisphere connects them</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={onBookDemoClick}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-primary hover:bg-primary-dark shadow-sm shadow-primary/25 transition-all cursor-pointer whitespace-nowrap"
            >
              Book an Institutional Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
