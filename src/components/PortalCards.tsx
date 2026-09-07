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
  Sparkles
} from 'lucide-react';
import { UserRole } from '../types';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { CloudShader } from '@/components/ui/cloud-shader';

interface PortalCardsProps {
  onSelectPortal: (role: UserRole) => void;
  onBookDemoClick?: () => void;
}

// Concise, human-friendly summaries designed for zero cognitive overload
const PORTAL_SUMMARIES: Record<string, {
  shortTitle: string;
  roleBadge: string;
  conciseDesc: string;
  highlights: string[];
}> = {
  student: {
    shortTitle: 'Student Portal',
    roleBadge: 'Student',
    conciseDesc: 'Live attendance tracking, class timetables, continuous internal marks, and exam hall tickets.',
    highlights: ['Live Timetable', 'Attendance Gauges', 'Hall Tickets']
  },
  faculty: {
    shortTitle: 'Faculty Portal',
    roleBadge: 'Faculty',
    conciseDesc: 'One-tap period attendance, paperless assignment evaluations, marks entry, and student mentoring.',
    highlights: ['One-Tap Attendance', 'Digital Grading', 'Mentoring Notes']
  },
  hod: {
    shortTitle: 'HOD Portal',
    roleBadge: 'Department Leadership',
    conciseDesc: 'Department academic health overview, syllabus completion tracking, and faculty workload balancing.',
    highlights: ['Department Analytics', 'Syllabus Pacing', 'Workload Balancing', 'Approval Desk']
  },
  parent: {
    shortTitle: 'Parent Portal',
    roleBadge: 'Parent',
    conciseDesc: 'Automated daily attendance alerts, semester progress marksheets, and secure online tuition fee payments.',
    highlights: ['Attendance Alerts', 'Semester Marksheets', 'Digital Fee Payments']
  },
  admin: {
    shortTitle: 'Admin Portal',
    roleBadge: 'Campus Governance',
    conciseDesc: 'Role-based access permissions (RBAC), campus-wide broadcast dispatch, and security audit logs.',
    highlights: ['RBAC Permissions', 'Campus Broadcasts', 'Audit Logs']
  }
};

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

  // Balanced 12-column responsive layout: 3 cards top (col-4 each), 2 cards bottom (col-6 each)
  // Completely eliminates disproportionate vertical stretching and huge blank spaces
  const gridSpans = [
    "col-span-12 md:col-span-6 lg:col-span-4", // 0: Student (Top Row, 1/3)
    "col-span-12 md:col-span-6 lg:col-span-4", // 1: Faculty (Top Row, 1/3)
    "col-span-12 md:col-span-6 lg:col-span-4", // 2: HOD (Top Row, 1/3 - compact, equal height)
    "col-span-12 md:col-span-6 lg:col-span-6", // 3: Parent (Bottom Row, 1/2)
    "col-span-12 md:col-span-12 lg:col-span-6" // 4: Admin (Bottom Row, 1/2)
  ];

  return (
    <section id="solutions" className="py-20 sm:py-28 relative overflow-hidden text-white bg-[#1d4ed8]">
      {/* Daylight Sky & Cloud Blur Background matching user reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Vibrant daylight sky base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d4ed8] via-[#2563eb] to-[#1e40af]" />

        {/* Dynamic Daylight CloudShader Canvas */}
        <CloudShader
          className="h-full w-full opacity-90"
          speed={0.5}
          count={4}
          cloudColor="#ffffff"
          skyTopColor="#1d4ed8"
          skyBottomColor="#3b82f6"
        />

        {/* Soft dreamy cloud mist blurs at edges */}
        <div className="absolute -top-24 left-1/4 w-[48rem] h-60 bg-white/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-12 -right-16 w-[32rem] h-64 bg-white/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-16 w-[36rem] h-64 bg-white/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[40rem] h-48 bg-white/20 rounded-full blur-3xl pointer-events-none" />

        {/* Gentle atmospheric balance tint */}
        <div className="absolute inset-0 bg-blue-950/10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-white mb-4 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-100" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Role-Based Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance drop-shadow-sm">
            One platform. Five connected experiences.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-blue-50/95 font-normal text-balance">
            Purpose-built, connected workspaces tailored for every campus stakeholder.
          </p>
        </div>

        {/* 5 Portals Balanced Responsive Bento Grid (3 Top + 2 Bottom) */}
        <ul className="grid grid-cols-12 gap-4 lg:gap-5 p-0 m-0 list-none">
          {PORTALS_DATA.map((portal, index) => {
            const Icon = getIcon(portal.iconName);
            const spanClass = gridSpans[index] || "col-span-12 lg:col-span-4";
            const summary = PORTAL_SUMMARIES[portal.id] || {
              shortTitle: portal.name,
              roleBadge: portal.badge,
              conciseDesc: portal.description,
              highlights: portal.highlights.slice(0, 3)
            };

            return (
              <motion.li
                key={portal.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`list-none flex flex-col ${spanClass}`}
              >
                {/* Outer Frosted Glass Frame with GlowingEffect */}
                <div 
                  onClick={() => onSelectPortal(portal.id as UserRole)}
                  className="relative h-full rounded-2xl md:rounded-3xl border border-white/40 bg-white/30 hover:bg-white/40 backdrop-blur-2xl p-2 transition-all duration-300 shadow-xl shadow-blue-950/20 group cursor-pointer flex flex-col"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectPortal(portal.id as UserRole);
                    }
                  }}
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1.5}
                  />

                  {/* Inner Crisp White Glass Panel - Compact & Balanced */}
                  <div className="relative flex-1 flex flex-col justify-between gap-4 overflow-hidden rounded-xl md:rounded-2xl p-5 sm:p-6 bg-white/95 backdrop-blur-xl border border-white/80 shadow-xs text-content-primary">
                    <div>
                      {/* Top: Icon + Badge */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-2xs"
                          style={{ backgroundColor: portal.bgLight, color: portal.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span 
                          className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors shadow-2xs"
                          style={{ 
                            backgroundColor: portal.bgLight, 
                            color: portal.color,
                            borderColor: portal.borderLight
                          }}
                        >
                          {summary.roleBadge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-content-primary tracking-tight group-hover:text-primary transition-colors">
                        {summary.shortTitle}
                      </h3>

                      {/* Easy-to-understand Concise Description */}
                      <p className="mt-2 text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
                        {summary.conciseDesc}
                      </p>

                      {/* Minimal Feature Tags */}
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {summary.highlights.map((chip, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-surface-soft text-content-secondary border border-border/60 group-hover:border-primary/20 transition-colors"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Clean Minimal Action Link */}
                    <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold text-content-primary group-hover:text-primary transition-colors">
                      <span>Explore Preview</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        {/* Minimal Demo Banner on Floating Glass */}
        {onBookDemoClick && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-12 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/25 border border-white/40 shadow-2xl backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          >
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-white drop-shadow-xs">
                Want to see these portals in action for your institution?
              </h4>
              <p className="text-xs text-blue-50/95 mt-0.5 font-medium">
                Book a 15-minute guided walkthrough tailored to your campus hierarchy.
              </p>
            </div>
            <button
              type="button"
              onClick={onBookDemoClick}
              className="px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-extrabold text-primary bg-white hover:bg-blue-50 shadow-md shadow-blue-950/20 transition-all whitespace-nowrap active:scale-95 cursor-pointer shrink-0"
            >
              Book a Free Demo
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortalCards;
