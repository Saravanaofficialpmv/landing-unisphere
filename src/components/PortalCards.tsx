import React from 'react';
import { motion } from 'framer-motion';
import { PORTALS_DATA } from '../data/landingPageData';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Check,
  Sparkles
} from 'lucide-react';
import { UserRole } from '../types';

interface PortalCardsProps {
  onSelectPortal: (role: UserRole) => void;
  onBookDemoClick?: () => void;
}

export const PortalCards: React.FC<PortalCardsProps> = ({ 
  onSelectPortal,
  onBookDemoClick 
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return GraduationCap;
      case 'BookOpenCheck':
        return BookOpenCheck;
      case 'Building2':
        return Building2;
      case 'Users':
        return Users;
      case 'ShieldCheck':
        return ShieldCheck;
      default:
        return GraduationCap;
    }
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-surface-soft/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Role-Based Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            One institutional platform. Five connected experiences.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance">
            Every persona receives a purpose-built workspace engineered around their exact responsibilities and institutional hierarchy.
          </p>
        </div>

        {/* 5 Portals Grid: 3 on top row, 2 centered on bottom row (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PORTALS_DATA.map((portal, index) => {
            const Icon = getIcon(portal.iconName);
            const isBottomRowWide = index >= 3;

            return (
              <motion.div
                key={portal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-white rounded-3xl p-7 sm:p-8 border border-border hover:border-border-dark shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isBottomRowWide && index === 3 ? 'lg:col-span-1 lg:col-start-1 md:col-span-1' : ''
                }`}
              >
                {/* Top Accent Stripe with Brand Role Color */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 opacity-90 group-hover:opacity-100"
                  style={{ backgroundColor: portal.color }}
                />

                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 transition-transform group-hover:scale-105 shadow-2xs"
                      style={{ backgroundColor: portal.bgLight, color: portal.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span 
                      className="text-[11px] font-bold px-3 py-1 rounded-full border"
                      style={{ 
                        backgroundColor: portal.bgLight, 
                        color: portal.color,
                        borderColor: portal.borderLight
                      }}
                    >
                      {portal.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-content-primary tracking-tight">
                    {portal.name}
                  </h3>
                  <p 
                    className="text-sm font-extrabold mt-1 tracking-wide"
                    style={{ color: portal.color }}
                  >
                    {portal.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {portal.description}
                  </p>

                  {/* Feature Highlights Pills */}
                  <div className="mt-6 pt-5 border-t border-border/80 space-y-2.5">
                    {portal.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs font-semibold text-content-primary">
                        <div 
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: portal.bgLight, color: portal.color }}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Action Button */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectPortal(portal.id)}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between border border-border group-hover:border-primary/40 bg-surface-soft group-hover:bg-white text-content-primary group-hover:text-primary transition-all duration-200 cursor-pointer"
                  >
                    <span>Explore {portal.name} Preview</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Post-Section Conversion Banner */}
        {onBookDemoClick && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-border shadow-xs flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left"
          >
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-content-primary">
                Want to see these portals in action for your institution?
              </h4>
              <p className="text-xs sm:text-sm text-content-secondary mt-1">
                Schedule a guided demonstration tailored to your college leadership and departmental hierarchy.
              </p>
            </div>
            <button
              type="button"
              onClick={onBookDemoClick}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-primary hover:bg-primary-dark shadow-sm shadow-primary/25 transition-all whitespace-nowrap active:scale-95"
            >
              Book an Institutional Demo
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortalCards;
