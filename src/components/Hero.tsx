import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { RotatingText } from './RotatingText';
import { CloudShader } from './ui/cloud-shader';
import { NoiseBackground } from './ui/noise-background';

interface HeroProps {
  onGetStartedClick: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {

  return (
    <section 
      id="platform" 
      className="relative min-h-screen min-h-[100dvh] w-full bg-[#1b3b72] text-white overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[3.5rem] lg:rounded-b-[4rem] shadow-2xl border-b border-blue-900/20 flex flex-col justify-center items-center"
    >
      {/* Daylight Sky CloudShader Canvas starting from top 0 filling 100% */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/10 to-slate-950/25 pointer-events-none" />
      </div>

      {/* Hero Interactive Content Overlay - Centered in Fullscreen */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 flex flex-col items-center justify-center text-center my-auto">
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white mb-5 sm:mb-6 shadow-sm"
          >
            <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-xs">
              NEW
            </span>
            <span className="text-xs font-medium text-slate-200">
              The Connected Campus Operating System
            </span>
          </motion.div>

          {/* Primary H1 with Animated RotatingText */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
          >
            <span className="block">One platform to connect your</span>
            <span className="block mt-1 sm:mt-2 h-[1.25em] flex items-center justify-center overflow-hidden">
              <RotatingText
                texts={[
                  'entire campus.',
                  'academic operations.',
                  'students & faculty.',
                  'campus workflows.'
                ]}
                mainClassName="inline-flex font-extrabold text-white whitespace-nowrap"
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

          {/* Action CTA with NoiseBackground Effect (Theme-Aligned Colors) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 flex items-center justify-center w-full"
          >
            <NoiseBackground
              containerClassName="w-fit p-1.5 sm:p-2 rounded-full mx-auto shadow-2xl shadow-black/25"
              gradientColors={[
                "rgb(37, 99, 235)",
                "rgb(56, 189, 248)",
                "rgb(147, 197, 253)",
              ]}
              noiseIntensity={0.25}
            >
              <button
                type="button"
                onClick={onGetStartedClick}
                className="h-full w-full cursor-pointer rounded-full bg-gradient-to-r from-neutral-100 via-neutral-100 to-white px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-slate-950 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.8)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.2)] transition-all duration-100 active:scale-98 flex items-center justify-center gap-2.5 group"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0 text-primary" />
              </button>
            </NoiseBackground>
          </motion.div>
        </div>
    </section>
  );
};

export default Hero;
