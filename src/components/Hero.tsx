import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { HeroDashboard } from './HeroDashboard';
import { RotatingText } from './RotatingText';
import { Scanner } from './Scanner';

interface HeroProps {
  onGetStartedClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStartedClick, onExploreClick }) => {
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
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 bg-[#07080f] text-white overflow-hidden"
    >
      {/* Background WebGL Scanner Effect (React Bits) - Neon Signal Field */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <Scanner
          color1="#5227FF"
          color2="#FF9FFC"
          color3="#FFFFFF"
          speed={0.45}
          sweepSpeed={0.22}
          sweepWidth={1.6}
          sweepFalloff={5.5}
          scale={1.4}
          frequency={2.0}
          ripple={0.22}
          bandDensity={11}
          lineSharpness={5.5}
          glow={0.35}
          scanDirection="vertical"
          colorSpread={0.7}
          brightness={1.1}
          contrast={1.15}
          softness={1.4}
          vignette={0.4}
          scanline={true}
          grain={true}
          grainIntensity={0.05}
          opacity={1.0}
          mouseInteraction={true}
          mouseRadius={0.5}
          mouseStrength={0.6}
          className="w-full h-full"
        />
      </div>

      {/* Atmospheric Top Glow & Grid Texture */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#5227FF]/18 via-[#2563EB]/10 to-transparent rounded-full blur-3xl -z-20 pointer-events-none" />
      <div className="absolute inset-0 subtle-grid-pattern opacity-10 -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-white shadow-inner mb-6"
          >
            <span className="px-2 py-0.5 rounded-full bg-white text-black font-extrabold text-[10px] tracking-wider uppercase shadow-xs">
              NEW
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-200 tracking-wide">
              ACADEMIC MANAGEMENT • CAMPUS OPERATIONS • CONNECTED EXPERIENCES
            </span>
          </motion.div>

          {/* Primary H1 with Animated RotatingText */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl"
          >
            One platform to connect your{' '}
            <span className="inline-flex text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-pink-400">
              <RotatingText
                texts={[
                  'entire campus.',
                  'academic operations.',
                  '5 stakeholder portals.',
                  'connected institution.'
                ]}
                mainClassName="inline-flex font-extrabold text-white drop-shadow-[0_0_30px_rgba(96,165,250,0.6)]"
                staggerFrom="last"
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden inline-flex pb-1"
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                rotationInterval={2600}
              />
            </span>
          </motion.h1>

          {/* Hero Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed text-balance"
          >
            Unisphere SRM connects students, faculty, HODs, parents, and administrators through one role-based academic management platform—bringing everyday campus workflows, academic progress, communication, and institutional operations together.
          </motion.p>

          {/* Action CTAs (Solid White + Translucent Glass) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={onGetStartedClick}
              className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-extrabold text-slate-950 bg-white hover:bg-slate-100 rounded-2xl shadow-xl shadow-white/10 hover:shadow-white/20 transition-all duration-200 flex items-center justify-center gap-2.5 group active:scale-95 cursor-pointer"
            >
              <span>Book an Institutional Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
            <button
              type="button"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-7 py-4 text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-black/20 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Explore the Platform</span>
            </button>
          </motion.div>

          {/* Supporting Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-xs sm:text-sm text-slate-400 font-medium"
          >
            Designed for modern higher-education institutions.
          </motion.p>

          {/* Five Stakeholder Pills (Dark Glass Capsules) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold"
          >
            {roleTags.map((role, idx) => (
              <React.Fragment key={role.name}>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 backdrop-blur-md shadow-xs font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <span 
                    className="w-2 h-2 rounded-full inline-block shadow-xs" 
                    style={{ backgroundColor: role.color }} 
                  />
                  {role.name}
                </span>
                {idx < roleTags.length - 1 && (
                  <span className="text-white/20 hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Central Dashboard Mockup Visual */}
        <div className="mt-16 sm:mt-24 relative z-10">
          <HeroDashboard />
        </div>
      </div>

      {/* Smooth Transition Fade to Light Page Background Below */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
