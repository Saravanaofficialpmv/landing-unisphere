import React from 'react';
import { motion } from 'framer-motion';
import { ECOSYSTEM_FLOW_DATA } from '../data/landingPageData';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Users, 
  ShieldCheck, 
  Check, 
  Sparkles,
  Zap
} from 'lucide-react';

export const EcosystemFlow: React.FC = () => {
  const getIcon = (roleKey: string) => {
    switch (roleKey) {
      case 'student':
        return GraduationCap;
      case 'faculty':
        return BookOpenCheck;
      case 'hod':
        return Building2;
      case 'parent':
        return Users;
      case 'admin':
        return ShieldCheck;
      default:
        return GraduationCap;
    }
  };

  return (
    <section id="ecosystem" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Connected Ecosystem
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            From classroom to campus, everything stays connected.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal">
            A continuous loop where data flows securely across roles, eliminating delays and disconnected communication.
          </p>
        </div>

        {/* Ecosystem Nodes: Desktop Horizontal Chain / Mobile Vertical Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-3 relative items-stretch">
          {ECOSYSTEM_FLOW_DATA.map((node, idx) => {
            const Icon = getIcon(node.key);

            return (
              <React.Fragment key={node.role}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-surface-soft rounded-3xl p-6 border border-border hover:border-border-dark shadow-subtle hover:shadow-card transition-all flex flex-col justify-between relative group"
                >
                  {/* Top indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{ backgroundColor: `${node.color}15`, color: node.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span 
                      className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border"
                      style={{ 
                        color: node.color, 
                        borderColor: `${node.color}30`,
                        backgroundColor: `${node.color}08`
                      }}
                    >
                      STEP 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-content-primary">
                      {node.role}
                    </h3>
                    <p className="text-xs font-bold text-content-secondary mt-0.5">
                      {node.title}
                    </p>

                    {/* Responsibilities list */}
                    <div className="mt-4 space-y-2">
                      {node.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-content-secondary">
                          <div 
                            className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: `${node.color}20`, color: node.color }}
                          >
                            <Check className="w-2 h-2 stroke-[3]" />
                          </div>
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Connection Pill */}
                  <div className="mt-6 pt-3 border-t border-border/80 text-[11px] font-semibold text-content-secondary">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-content-tertiary">
                      Connected Output:
                    </div>
                    <div className="text-content-primary font-bold mt-0.5">
                      {node.workflowOutputs}
                    </div>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-primary-subtle/50 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-content-primary">
                Single Source of Academic Truth
              </p>
              <p className="text-xs text-content-secondary">
                No desynchronized spreadsheets. Every mark, attendance percentage, and notification is unified.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-primary px-3 py-1 bg-white rounded-lg border border-primary/20 shrink-0">
            Real-Time Push Architecture
          </span>
        </div>
      </div>
    </section>
  );
};
