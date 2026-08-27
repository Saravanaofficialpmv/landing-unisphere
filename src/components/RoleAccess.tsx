import React from 'react';
import { motion } from 'framer-motion';
import { ROLE_ACCESS_DATA } from '../data/landingPageData';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { UserRole } from '../types';

interface RoleAccessProps {
  onSelectRole: (role: UserRole) => void;
}

export const RoleAccess: React.FC<RoleAccessProps> = ({ onSelectRole }) => {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Role-Based Governance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            The right information for the right people.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal">
            Unisphere provides role-based experiences so every portal stays focused on the information and workflows relevant to its users.
          </p>
        </div>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {ROLE_ACCESS_DATA.map((item, idx) => {
            const roleKey = item.role.toLowerCase() as UserRole;

            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-surface-soft border border-border hover:border-border-dark shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Role Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="text-xs font-extrabold px-2.5 py-1 rounded-lg"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.role}
                    </span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  </div>

                  <h3 className="text-base font-extrabold text-content-primary">
                    {item.focus}
                  </h3>

                  <p className="mt-2 text-xs text-content-secondary leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Feature Pills */}
                  <div className="mt-5 space-y-1.5 pt-4 border-t border-border/80">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] font-semibold text-content-primary">
                        <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border/60">
                  <button
                    type="button"
                    onClick={() => onSelectRole(roleKey)}
                    className="w-full py-2 rounded-xl text-xs font-bold text-content-secondary group-hover:text-primary flex items-center justify-between transition-colors"
                  >
                    <span>View Role Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
