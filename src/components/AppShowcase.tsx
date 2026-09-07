import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Lock 
} from 'lucide-react';
import { UserRole } from '../types';
import CardSwap, { Card } from './CardSwap';

export const AppShowcase: React.FC = () => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const roles = [
    { id: 'student' as UserRole, name: 'Student', icon: GraduationCap, color: '#2563EB', roleLabel: 'Student View', tagline: 'Learn. Track. Grow.' },
    { id: 'faculty' as UserRole, name: 'Faculty', icon: BookOpenCheck, color: '#7C3AED', roleLabel: 'Faculty View', tagline: 'Teach. Manage. Guide.' },
    { id: 'hod' as UserRole, name: 'HOD', icon: Building2, color: '#D97706', roleLabel: 'Department View', tagline: 'Lead your department.' },
    { id: 'parent' as UserRole, name: 'Parent', icon: Users, color: '#059669', roleLabel: 'Parent View', tagline: 'Stay connected.' },
    { id: 'admin' as UserRole, name: 'Admin', icon: ShieldCheck, color: '#DC2626', roleLabel: 'Institutional View', tagline: 'Manage the institution.' },
  ];

  const showcaseCards = [
    {
      id: 'student',
      role: 'Student',
      roleLabel: 'Student View · Academic Command Center',
      path: 'app.unisphere.edu/portal/student',
      badgeBg: 'bg-blue-50 text-blue-600 border-blue-200/60',
      imageSrc: '/ui/student.png',
      alt: 'Unisphere Student Academic Command Center'
    },
    {
      id: 'faculty',
      role: 'Faculty',
      roleLabel: 'Faculty View · Period 3 Active',
      path: 'app.unisphere.edu/portal/faculty',
      badgeBg: 'bg-purple-50 text-purple-600 border-purple-200/60',
      imageSrc: '/ui/staff.png',
      alt: 'Unisphere Faculty and Class Advisor Portal'
    },
    {
      id: 'hod',
      role: 'HOD',
      roleLabel: 'HOD View · Department Health',
      path: 'app.unisphere.edu/portal/hod',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200/60',
      imageSrc: '/ui/hod.png',
      alt: 'Unisphere Department Governance Portal'
    },
    {
      id: 'parent',
      role: 'Parent',
      roleLabel: 'Parent View · Student Live Tracking',
      path: 'app.unisphere.edu/portal/parent',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      imageSrc: '/ui/parent.png',
      alt: 'Unisphere Parent Portal and Campus Feed'
    },
    {
      id: 'admin',
      role: 'Admin',
      roleLabel: 'Institutional View · Executive Overview',
      path: 'app.unisphere.edu/portal/admin',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200/60',
      imageSrc: '/ui/admin.png',
      alt: 'Unisphere Institutional Governance Portal'
    },
  ];

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-surface-soft/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Interactive Preview
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            See Unisphere from every role.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-content-secondary font-normal text-balance">
            Automatically swapping across the five connected stakeholder views to preview how information is tailored for each campus persona.
          </p>

          {/* Active Role Indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {roles.map((r, idx) => {
              const Icon = r.icon;
              const isFront = activeRoleIndex === idx;
              return (
                <div
                  key={r.id}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    isFront
                      ? 'bg-white text-content-primary border border-border shadow-xs scale-105'
                      : 'bg-transparent text-content-tertiary border border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: r.color }} />
                  <span>{r.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CardSwap 3D Automatic Showcase Container */}
        <div className="relative w-full flex flex-col items-center justify-center min-h-[520px] sm:min-h-[580px] py-4 sm:py-8 overflow-visible">
          <CardSwap
            width={760}
            height={460}
            cardDistance={40}
            verticalDistance={32}
            delay={4200}
            pauseOnHover={true}
            skewAmount={3}
            easing="elastic"
            onSwap={(newIdx) => setActiveRoleIndex(newIdx)}
          >
            {showcaseCards.map((card) => (
              <Card
                key={card.id}
                customClass="!bg-white !border-border/80 shadow-2xl overflow-hidden flex flex-col"
              >
                {/* Browser Header */}
                <div className="bg-[#f8fafc] px-4 sm:px-5 py-2.5 border-b border-border/80 flex items-center justify-between shrink-0 select-none">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                    </div>
                    <div className="flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded-md bg-white border border-border/80 text-[11px] text-content-secondary font-mono">
                      <Lock className="w-3 h-3 text-emerald-600" />
                      <span>{card.path}</span>
                    </div>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${card.badgeBg}`}>
                    {card.roleLabel}
                  </span>
                </div>

                {/* Real UI Screenshot */}
                <div className="relative flex-1 w-full h-full overflow-hidden bg-slate-50">
                  <img
                    src={card.imageSrc}
                    alt={card.alt}
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                    loading="eager"
                    draggable={false}
                  />
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>

        {/* Caption below cards */}
        <div className="text-center mt-6">
          <p className="text-xs font-semibold text-content-tertiary">
            Hover over cards to pause rotation · Click anywhere on the deck to advance
          </p>
        </div>
      </div>
    </section>
  );
};
export default AppShowcase;
