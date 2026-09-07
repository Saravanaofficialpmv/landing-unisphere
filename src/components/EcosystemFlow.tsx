import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  CalendarCheck2, 
  BookOpenCheck, 
  FileCheck2, 
  Building2, 
  BarChart3, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

interface EcosystemFlowProps {
  onBookDemoClick?: () => void;
}

export const EcosystemFlow: React.FC<EcosystemFlowProps> = ({ onBookDemoClick }) => {
  const workflowNodes = [
    {
      step: '01',
      entity: 'Student',
      action: 'Lecture Attendance Logged',
      icon: GraduationCap,
      color: '#2563EB',
      bgLight: 'rgba(37, 99, 235, 0.08)',
      detail: 'Student attends class, triggers real-time presence record in the course register.'
    },
    {
      step: '02',
      entity: 'Attendance',
      action: 'Automated Threshold Check',
      icon: CalendarCheck2,
      color: '#2563EB',
      bgLight: 'rgba(37, 99, 235, 0.08)',
      detail: 'System evaluates attendance criteria (85% safe / <75% condonation alert).'
    },
    {
      step: '03',
      entity: 'Faculty',
      action: 'Continuous Assessment',
      icon: BookOpenCheck,
      color: '#7C3AED',
      bgLight: 'rgba(124, 58, 237, 0.08)',
      detail: 'Professor grades coursework, records practical viva, and pushes internal marks.'
    },
    {
      step: '04',
      entity: 'Assessment',
      action: 'Gradebook Compilation',
      icon: FileCheck2,
      color: '#7C3AED',
      bgLight: 'rgba(124, 58, 237, 0.08)',
      detail: 'Continuous Internal Evaluation (CIE) aggregated against university credit tallies.'
    },
    {
      step: '05',
      entity: 'HOD',
      action: 'Department Supervision',
      icon: Building2,
      color: '#D97706',
      bgLight: 'rgba(217, 119, 6, 0.08)',
      detail: 'Head of Department reviews section syllabus pacing and endorses marks.'
    },
    {
      step: '06',
      entity: 'Department Analytics',
      action: 'Health Metric Synthesis',
      icon: BarChart3,
      color: '#D97706',
      bgLight: 'rgba(217, 119, 6, 0.08)',
      detail: 'Departmental pass percentages, attendance health, and syllabus pace compiled.'
    },
    {
      step: '07',
      entity: 'Parent',
      action: 'Verified Progress Update',
      icon: Users,
      color: '#059669',
      bgLight: 'rgba(5, 150, 105, 0.08)',
      detail: 'Guardians receive instant attendance updates, marksheets, and fee clearance.'
    },
    {
      step: '08',
      entity: 'Institution Administration',
      action: 'Campus-wide Governance',
      icon: ShieldCheck,
      color: '#DC2626',
      bgLight: 'rgba(220, 38, 38, 0.08)',
      detail: 'Central leadership maintains audit integrity, circular broadcasts, and compliance.'
    }
  ];

  return (
    <section id="workflow" className="pt-16 pb-6 sm:pt-24 sm:pb-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Connected Institutional Workflow
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            From classroom to campus, everything stays connected.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance">
            Every role sees the information relevant to them while the institution maintains a connected operational workflow.
          </p>
        </div>

        {/* Workflow Visualization: Continuous Responsive Chain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {workflowNodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-3xl bg-surface-soft border border-border hover:border-primary/40 shadow-xs hover:shadow-card transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs"
                      style={{ backgroundColor: node.bgLight, color: node.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span 
                      className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border"
                      style={{ 
                        color: node.color,
                        borderColor: `${node.color}30`,
                        backgroundColor: `${node.color}10`
                      }}
                    >
                      {node.step}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-content-primary tracking-tight">
                    {node.entity}
                  </h3>
                  <div 
                    className="text-xs font-extrabold mt-0.5"
                    style={{ color: node.color }}
                  >
                    {node.action}
                  </div>

                  <p className="mt-2.5 text-xs text-content-secondary leading-relaxed">
                    {node.detail}
                  </p>
                </div>

                {/* Transition Arrow Indicator */}
                {idx < workflowNodes.length - 1 && (
                  <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-[11px] font-semibold text-content-tertiary">
                    <span>Flows to next stage</span>
                    <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
                {idx === workflowNodes.length - 1 && (
                  <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-[11px] font-bold text-emerald-600">
                    <span>Continuous Feedback Loop</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Bottom Conversion Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-primary-subtle/50 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left"
        >
          <div>
            <h4 className="text-base sm:text-lg font-extrabold text-content-primary">
              Experience the connected workflow for your institution
            </h4>
            <p className="text-xs sm:text-sm text-content-secondary mt-1">
              Every role sees the information relevant to them while your leadership retains full institutional control.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {onBookDemoClick && (
              <button
                type="button"
                onClick={onBookDemoClick}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-primary hover:bg-primary-dark shadow-sm shadow-primary/25 transition-all whitespace-nowrap active:scale-95"
              >
                Book an Institutional Demo
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemFlow;
