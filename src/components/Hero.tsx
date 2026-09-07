import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { HeroDashboard } from './HeroDashboard';
import { RotatingText } from './RotatingText';
import { Scanner } from './Scanner';

interface HeroProps {
  onGetStartedClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStartedClick, onExploreClick }) => {
  const roleTags = [
    { name: 'Student', color: '#2563EB', bg: 'rgba(37, 99, 235, 0.08)' },
    { name: 'Faculty', color: '#7C3AED', bg: 'rgba(124, 58, 237, 0.08)' },
    { name: 'HOD', color: '#D97706', bg: 'rgba(217, 119, 6, 0.08)' },
    { name: 'Parent', color: '#059669', bg: 'rgba(5, 150, 105, 0.08)' },
    { name: 'Admin', color: '#DC2626', bg: 'rgba(220, 38, 38, 0.08)' },
  ];

  return (
    <section id="platform" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Atmospheric Blue Gradient Foundation */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-primary-subtle/30 to-transparent -z-30 pointer-events-none" />

      {/* Background WebGL Scanner Effect (React Bits) - Vibrant Blue Waves */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-90"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 75% at 50% 30%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 50% 30%, black 40%, transparent 95%)'
        }}
      >
        <Scanner
          color1="#1D4ED8"
          color2="#2563EB"
          color3="#60A5FA"
          speed={0.4}
          sweepSpeed={0.25}
          sweepWidth={1.5}
          sweepFalloff={2.8}
          scale={1.3}
          frequency={2.2}
          ripple={0.25}
          bandDensity={14}
          lineSharpness={4.5}
          glow={0.4}
          scanDirection="vertical"
          colorSpread={0.6}
          brightness={1.25}
          contrast={1.2}
          softness={1.3}
          vignette={0.3}
          scanline={true}
          grain={true}
          grainIntensity={0.04}
          opacity={0.8}
          mouseInteraction={true}
          mouseRadius={0.5}
          mouseStrength={0.7}
          className="w-full h-full"
        />
      </div>

      {/* Background Decorative subtle grid & ambient blur */}
      <div className="absolute inset-0 subtle-grid-pattern opacity-25 -z-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-3xl -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary shadow-2xs mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest">
              ACADEMIC MANAGEMENT • CAMPUS OPERATIONS • CONNECTED EXPERIENCES
            </span>
          </motion.div>

          {/* Primary H1 with Animated RotatingText */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-content-primary tracking-tight leading-tight max-w-4xl"
          >
            One platform to connect your{' '}
            <span className="text-primary inline-flex">
              <RotatingText
                texts={[
                  'entire campus.',
                  'academic operations.',
                  '5 stakeholder portals.',
                  'connected institution.'
                ]}
                mainClassName="inline-flex text-primary font-extrabold"
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
            className="mt-6 text-base sm:text-lg md:text-xl text-content-secondary max-w-3xl font-normal leading-relaxed text-balance"
          >
            Unisphere SRM connects students, faculty, HODs, parents, and administrators through one role-based academic management platform—bringing everyday campus workflows, academic progress, communication, and institutional operations together.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={onGetStartedClick}
              className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-extrabold text-white bg-primary hover:bg-primary-dark rounded-2xl shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 transition-all duration-200 flex items-center justify-center gap-2.5 group active:scale-95 ring-2 ring-primary/20"
            >
              <span>Book an Institutional Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
            <button
              type="button"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-7 py-4 text-sm sm:text-base font-bold text-content-primary bg-surface hover:bg-surface-soft border border-border hover:border-primary/40 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-2xs"
            >
              <Compass className="w-4 h-4 text-primary" />
              <span>Explore the Platform</span>
            </button>
          </motion.div>

          {/* Supporting Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-xs sm:text-sm text-content-tertiary font-semibold"
          >
            Designed for modern higher-education institutions.
          </motion.p>

          {/* Five Stakeholder Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold"
          >
            {roleTags.map((role, idx) => (
              <React.Fragment key={role.name}>
                <span 
                  className="px-3 py-1 rounded-full border border-border/80 text-content-primary shadow-2xs font-bold"
                  style={{ backgroundColor: role.bg }}
                >
                  <span className="w-2 h-2 rounded-full inline-block mr-1.5" style={{ backgroundColor: role.color }} />
                  {role.name}
                </span>
                {idx < roleTags.length - 1 && (
                  <span className="text-content-tertiary hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Central Dashboard Mockup Visual */}
        <div className="mt-12 sm:mt-16">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
