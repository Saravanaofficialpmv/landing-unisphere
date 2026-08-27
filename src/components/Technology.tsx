import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK_DATA } from '../data/landingPageData';
import { Smartphone, Flame, Database, Boxes, Code2, Cpu, Layers } from 'lucide-react';

export const Technology: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return Smartphone;
      case 'Flame':
        return Flame;
      case 'Database':
        return Database;
      case 'Boxes':
        return Boxes;
      default:
        return Code2;
    }
  };

  const subStack = [
    'Dart',
    'GoRouter',
    'Material 3',
    'Google Fonts',
    'Material Symbols'
  ];

  return (
    <section id="technology" className="py-20 sm:py-28 bg-surface-soft/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Technology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            Built with modern technology.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-content-secondary font-normal">
            Designed for performance, scalability, and a seamless experience across platforms.
          </p>
        </div>

        {/* 4 Tech Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK_DATA.map((tech, idx) => {
            const Icon = getIcon(tech.icon);

            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-content-tertiary px-2 py-0.5 rounded bg-surface-soft border border-border">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-content-primary group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>

                  <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Production Ready Stack</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sub-Stack Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 py-5 px-6 rounded-2xl bg-white border border-border shadow-xs flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <span className="text-xs font-bold text-content-tertiary uppercase tracking-wider">
            Supporting Architecture:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {subStack.map((item, idx) => (
              <React.Fragment key={item}>
                <span className="text-xs sm:text-sm font-bold text-content-primary px-3 py-1 bg-surface-soft rounded-lg border border-border/80">
                  {item}
                </span>
                {idx < subStack.length - 1 && (
                  <span className="text-content-tertiary hidden sm:inline">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
