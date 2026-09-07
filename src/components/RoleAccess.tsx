import React from 'react';
import { motion } from 'framer-motion';
import { GOVERNANCE_CARDS } from '../data/landingPageData';
import { ShieldCheck, Lock, Building, FileCheck, Check, Sparkles } from 'lucide-react';

export const RoleAccess: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-primary" />,
    Lock: <Lock className="w-6 h-6 text-purple-600" />,
    Building: <Building className="w-6 h-6 text-amber-600" />,
    FileCheck: <FileCheck className="w-6 h-6 text-emerald-600" />
  };

  return (
    <section id="governance" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Security & Governance
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            Designed around institutional access and governance.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance">
            Ensuring data boundaries, role isolation, and complete administrative oversight without unverifiable claims.
          </p>
        </div>

        {/* 4 Governance Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOVERNANCE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-surface-soft border border-border hover:border-primary/40 shadow-xs hover:shadow-card transition-all flex flex-col justify-between group"
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

                {/* Capabilities List */}
                <div className="mt-6 space-y-2 pt-4 border-t border-border/70">
                  {card.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-content-primary font-semibold">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-border/60">
                <span className="text-[11px] font-bold text-primary flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Enforced by Architecture</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleAccess;
