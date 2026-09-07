import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Workflow, ShieldCheck, Building2 } from 'lucide-react';

export const WhyUnisphere: React.FC = () => {
  const valueCards = [
    {
      number: '01',
      title: 'Institutional Visibility',
      description:
        'Get a clearer view of academic progress, department activity, and important institutional workflows.',
      icon: BarChart3
    },
    {
      number: '02',
      title: 'Connected Workflows',
      description:
        'Bring everyday academic and administrative processes into one coordinated platform instead of managing them across disconnected systems.',
      icon: Workflow
    },
    {
      number: '03',
      title: 'Role-Based Control',
      description:
        'Give students, faculty, HODs, parents, and administrators access based on their responsibilities and institutional role.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="institutions" className="py-16 sm:py-24 bg-surface-soft/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-4 shadow-2xs">
            <Building2 className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Built for Institutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight text-balance">
            Built for the way your institution works.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal text-balance">
            Unisphere brings academic and institutional workflows into one structured platform, with role-based access that gives every stakeholder the information and actions they need.
          </p>
        </div>

        {/* 3 Compact Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {valueCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-border/80 hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Number + Clean Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-primary/30 group-hover:text-primary transition-colors tracking-tight font-mono">
                      {card.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-primary-subtle text-primary flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-content-primary tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Subtle bottom active accent line */}
                <div className="mt-6 pt-2">
                  <div className="h-1 w-10 bg-primary/20 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUnisphere;
