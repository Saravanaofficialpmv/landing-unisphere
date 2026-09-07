import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HeroDashboard } from './HeroDashboard';
import { RotatingText } from './RotatingText';
import { CloudShader } from './ui/cloud-shader';
import { NoiseBackground } from './ui/noise-background';

interface HeroProps {
  onGetStartedClick: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  const roleTags = [
    { name: 'Student', color: '#3B82F6' },
    { name: 'Faculty', color: '#A855F7' },
    { name: 'HOD', color: '#F59E0B' },
    { name: 'Parent', color: '#10B981' },
    { name: 'Admin', color: '#F43F5E' },
  ];

  return (
    <section 
      id="platform" 
      className="relative pb-16 sm:pb-24 lg:pb-32 bg-[#1b3b72] text-white overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[3.5rem] lg:rounded-b-[4rem] shadow-2xl border-b border-blue-900/20"
    >
      {/* Daylight Sky CloudShader Canvas starting from top 0 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <CloudShader
          className="h-full w-full"
          speed={0.7}
          count={5}
          cloudColor="#ffffff"
          skyTopColor="#1d4ed8"
          skyBottomColor="#60a5fa"
        />
        {/* Soft atmospheric gradient to guarantee crystal-clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/10 to-slate-950/30 pointer-events-none" />
      </div>

      {/* Hero Interactive Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 flex flex-col items-center text-center">
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white mb-5 sm:mb-6"
          >
            <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-xs">
              NEW
            </span>
            <span className="text-xs font-medium text-slate-300">
              The Connected Campus Operating System
            </span>
          </motion.div>

          {/* Primary H1 with Animated RotatingText */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto"
          >
            <span className="block">One platform to connect your</span>
            <span className="block mt-1 sm:mt-2 h-[1.2em] sm:h-[1.25em] flex items-center justify-center overflow-hidden">
              <RotatingText
                texts={[
                  'entire campus.',
                  'academic operations.',
                  'students & faculty.',
                  'campus workflows.'
                ]}
                mainClassName="inline-flex font-extrabold text-white"
                staggerFrom="last"
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden inline-flex pb-1"
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                rotationInterval={2600}
              />
            </span>
          </motion.h1>

          {/* Hero Supporting Copy - Clear, Punchy, & Readable */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-300/90 max-w-2xl font-normal leading-relaxed text-balance"
          >
            Unify academics, campus operations, and communication across students, faculty, and administrators in one role-based platform.
          </motion.p>

          {/* Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 flex items-center justify-center w-full"
          >
            <NoiseBackground
              containerClassName="w-fit p-1.5 sm:p-2 rounded-full mx-auto shadow-xl shadow-black/15"
              gradientColors={[
                "rgb(255, 100, 150)",
                "rgb(100, 150, 255)",
                "rgb(255, 200, 100)",
              ]}
            >
              <button
                type="button"
                onClick={onGetStartedClick}
                className="h-full w-full cursor-pointer rounded-full bg-gradient-to-r from-neutral-100 via-neutral-100 to-white px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-slate-950 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.8)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.2)] transition-all duration-100 active:scale-98 flex items-center justify-center gap-2.5 group"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </NoiseBackground>
          </motion.div>

          {/* Stakeholder Pills Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs font-semibold"
          >
            <span className="text-xs text-slate-400 font-medium mr-1 hidden xs:inline">
              Built for:
            </span>
            {roleTags.map((role) => (
              <span
                key={role.name}
                className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 backdrop-blur-md shadow-xs font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <span 
                  className="w-2 h-2 rounded-full inline-block shadow-xs" 
                  style={{ backgroundColor: role.color }} 
                />
                {role.name}
              </span>
            ))}
          </motion.div>
        </div>

      {/* Central Dashboard Mockup Visual with generous outer sky space */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-12 sm:mt-16 mb-10 sm:mb-16 relative z-10">
        <HeroDashboard />
      </div>

    </section>
  );
};

export default Hero;
