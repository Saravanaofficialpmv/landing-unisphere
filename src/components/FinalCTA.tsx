import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onGetStartedClick: () => void;
  onExploreClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onGetStartedClick, onExploreClick }) => {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-4xl bg-gradient-to-b from-primary via-primary-dark to-[#153e90] text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl shadow-primary/20 text-center"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary-light/30 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-extrabold uppercase tracking-widest">
                Start Connecting Today
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-balance">
              Your campus, connected.
            </h2>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/85 max-w-2xl font-normal leading-relaxed text-balance">
              Bring students, faculty, parents, HODs and administrators together with Unisphere.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onGetStartedClick}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-primary bg-white hover:bg-white/95 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-2xl backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
              >
                <Compass className="w-4 h-4" />
                <span>Explore the Platform</span>
              </button>
            </div>

            {/* Reassurance pills */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/80 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>5 Role-Tailored Portals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Zero Data Redundancy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Instant Multi-Device Sync</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
