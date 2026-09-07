import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onGetStartedClick: () => void;
  onTalkToTeam?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ 
  onGetStartedClick, 
  onTalkToTeam 
}) => {
  const handleContactTeam = () => {
    if (onTalkToTeam) {
      onTalkToTeam();
    } else {
      window.location.href = 'https://www.heydigital.work/contact.html';
    }
  };

  return (
    <section className="w-full bg-surface-soft relative overflow-hidden pt-0 pb-10 sm:pb-16">
      {/* Edge-to-edge full width container seamlessly merging with FAQ section above */}
      <div className="relative w-full rounded-t-none rounded-b-[2.5rem] sm:rounded-b-[3.5rem] lg:rounded-b-[4.5rem] bg-gradient-to-b from-[#153e90] from-0% via-[#153e90] via-25% to-[#0f2c6b] text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl shadow-primary/20 text-center">
        {/* Ambient Glows - positioned safely away from top seam */}
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-light/10 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Dot Grid - masked at top so boundary is 100% pure identical color */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-25 [mask-image:linear-gradient(to_bottom,transparent_0%,black_100px)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-extrabold uppercase tracking-widest">
                Institutional Evaluation
              </span>
            </div>

            {/* Main H2 */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-balance">
              See what a connected campus could look like for your institution.
            </h2>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl font-normal leading-relaxed text-balance">
              Get a guided look at Unisphere SRM and explore how your students, faculty, HODs, parents and administrators can work from one connected platform.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onGetStartedClick}
                className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-extrabold text-primary bg-white hover:bg-white/95 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 group active:scale-95 cursor-pointer"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={handleContactTeam}
                className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-2xl backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk to Our Team</span>
              </button>
            </div>

            {/* Supporting Trust Line */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/80 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>No obligation</span>
              </div>
              <span className="text-white/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Guided platform walkthrough</span>
              </div>
              <span className="text-white/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Designed for institutional evaluation</span>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
