import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Users, 
  ShieldCheck, 
  ArrowDown, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface AboutUnisphereProps {
  onLearnMoreClick: () => void;
}

export const AboutUnisphere: React.FC<AboutUnisphereProps> = ({ onLearnMoreClick }) => {
  const [selectedRole, setSelectedRole] = useState<number>(0);

  const ecosystemSteps = [
    {
      role: 'Student',
      icon: GraduationCap,
      color: '#2563EB',
      bgLight: 'rgba(37, 99, 235, 0.08)',
      detail: 'Logs attendance, reviews daily timetable, submits coursework & tracks CGPA.',
      dataFlow: 'Triggers faculty gradebook & parent update'
    },
    {
      role: 'Faculty',
      icon: BookOpenCheck,
      color: '#7C3AED',
      bgLight: 'rgba(124, 58, 237, 0.08)',
      detail: 'Conducts lecture attendance, grades assignments & pushes internal marks.',
      dataFlow: 'Feeds departmental syllabus audit'
    },
    {
      role: 'HOD',
      icon: Building2,
      color: '#D97706',
      bgLight: 'rgba(217, 119, 6, 0.08)',
      detail: 'Oversees departmental batch metrics, approves curriculum & staff workloads.',
      dataFlow: 'Submits verified stats to campus admin'
    },
    {
      role: 'Parent',
      icon: Users,
      color: '#059669',
      bgLight: 'rgba(5, 150, 105, 0.08)',
      detail: 'Receives instant attendance alerts, semester grade cards & fee receipts.',
      dataFlow: 'Closes student care & mentorship loop'
    },
    {
      role: 'Admin',
      icon: ShieldCheck,
      color: '#DC2626',
      bgLight: 'rgba(220, 38, 38, 0.08)',
      detail: 'Configures institutional policies, role permissions, and campus broadcasts.',
      dataFlow: 'Governs institutional platform security'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text + Bullet points + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-extrabold uppercase tracking-wider">
                About Unisphere
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
              Everything your campus needs. Connected in one place.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
              Unisphere is a unified academic and campus management platform designed to connect the entire institutional ecosystem through role-based experiences and shared workflows.
            </p>

            {/* Key Value Points */}
            <div className="mt-8 space-y-3.5 w-full">
              {[
                'Single unified database replacing 6+ disparate university portals',
                'Zero duplicate data entry between classrooms and registrar records',
                'Instant push synchronization across mobile devices and web browsers',
                'Strict role isolation ensuring parents and students see exactly what matters'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-subtle text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-content-primary">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex items-center gap-4">
              <button
                type="button"
                onClick={onLearnMoreClick}
                className="px-6 py-3 text-sm font-bold text-white bg-primary hover:bg-primary-dark rounded-xl shadow-md shadow-primary/25 transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>Explore Campus Modules</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Ecosystem Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-surface-soft p-6 sm:p-8 rounded-3xl border border-border shadow-card relative"
          >
            <div className="flex items-center justify-between pb-4 border-b border-border/80 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-content-tertiary">
                  Interactive Ecosystem Pipeline
                </span>
                <h3 className="text-base font-extrabold text-content-primary">
                  Continuous Workflow Feedback Loop
                </h3>
              </div>
              <span className="text-[11px] font-semibold px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                Live Data Sync
              </span>
            </div>

            {/* Vertical Chain with interactive nodes */}
            <div className="space-y-3 relative">
              {ecosystemSteps.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = selectedRole === idx;
                return (
                  <React.Fragment key={step.role}>
                    <div
                      onClick={() => setSelectedRole(idx)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-white shadow-card-hover border-primary/40 ring-1 ring-primary/20'
                          : 'bg-white/60 hover:bg-white border-border hover:border-border-dark'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform"
                          style={{ backgroundColor: step.bgLight, color: step.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-extrabold text-content-primary">
                              {step.role}
                            </span>
                            <span
                              className="text-[10px] font-bold px-1.5 py-0.2 rounded"
                              style={{ backgroundColor: step.bgLight, color: step.color }}
                            >
                              Portal Node
                            </span>
                          </div>
                          <p className="text-xs text-content-secondary line-clamp-1 mt-0.5">
                            {step.detail}
                          </p>
                        </div>
                      </div>

                      <div className="hidden sm:flex flex-col items-end text-right">
                        <span className="text-[10px] uppercase font-bold text-content-tertiary">
                          Data Action
                        </span>
                        <span className="text-xs font-semibold text-primary">
                          {step.dataFlow.split(' ')[0]} {step.dataFlow.split(' ')[1]}
                        </span>
                      </div>
                    </div>

                    {/* Arrow down between items */}
                    {idx < ecosystemSteps.length - 1 && (
                      <div className="flex justify-center -my-1">
                        <div className="w-5 h-5 rounded-full bg-white border border-border flex items-center justify-center text-content-tertiary shadow-2xs">
                          <ArrowDown className="w-3 h-3 text-primary/70 animate-bounce" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Selected Role Interactive Preview Footer */}
            <div className="mt-5 pt-4 border-t border-border/80 flex items-center justify-between text-xs">
              <span className="text-content-secondary">
                Selected Focus:{' '}
                <strong className="text-content-primary">
                  {ecosystemSteps[selectedRole].role} Portal
                </strong>
              </span>
              <span className="text-primary font-bold">
                {ecosystemSteps[selectedRole].dataFlow}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
