import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { PROBLEM_CARDS } from '../data/landingPageData';
import { ScrollReveal } from './ScrollReveal';
import { GlowingEffect } from './ui/glowing-effect';
import foldersIcon from '../assets/section 2/folders.png';
import instructionsIcon from '../assets/section 2/instructions.png';
import deniedIcon from '../assets/section 2/denied.png';
import noConnectionIcon from '../assets/section 2/no-connection.png';

interface ProblemSectionProps {
  onExploreSolutions?: () => void;
  onBookDemoClick?: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = () => {
  const iconMap: Record<string, string> = {
    'fragmented-info': foldersIcon,
    'manual-workflows': instructionsIcon,
    'limited-visibility': deniedIcon,
    'disconnected-stakeholders': noConnectionIcon,
  };

  return (
    <section id="problem" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 mb-4 shadow-2xs">
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

        {/* 4 Problem Cards Grid with Outer Line & GlowingEffect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                  <div className="w-12 h-12 rounded-2xl bg-surface-soft border border-border flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-transform p-2">
                    <img 
                      src={iconMap[card.id]} 
                      alt={card.title} 
                      className="w-7 h-7 object-contain" 
                    />
                  </div>

                  <h3 className="text-lg font-extrabold text-content-primary tracking-tight group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
