import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { Footer } from './Footer';

interface ScrollStatementProps {
  onBookDemoClick?: () => void;
}

export const ScrollStatement: React.FC<ScrollStatementProps> = ({ onBookDemoClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const textSpanRef = useRef<HTMLSpanElement>(null);

  const [metrics, setMetrics] = useState(() => {
    const vw = typeof window !== 'undefined' ? window.innerWidth : 1440;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 900;
    const isMob = vw < 640;
    const logoHW = isMob ? 28 : 40;
    const gap = isMob ? 32 : 56;
    const estTextWidth = isMob ? 1100 : 3800;
    const startX = Math.round((vw / 2) + logoHW + gap + estTextWidth + 150);
    return { vw, vh, startX };
  });

  useEffect(() => {
    const updateMetrics = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const isMob = vw < 640;
      const logoHW = isMob ? 28 : 40;
      const gap = isMob ? 32 : 56;
      const textWidth = textSpanRef.current ? textSpanRef.current.offsetWidth : (isMob ? 1100 : 3800);
      const startX = Math.round((vw / 2) + logoHW + gap + textWidth + 150);
      setMetrics({ vw, vh, startX });
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const isMobile = metrics.vw < 640;
  const logoHalfWidth = isMobile ? 28 : 40;
  const marqueeGap = isMobile ? 32 : 56;

  // 1. Horizontal Marquee Text: enters in sync with logo (0.00 -> 0.40), exits left (0.40 -> 0.55)
  const textX = useTransform(scrollYProgress, (val) => {
    if (val <= 0.40) {
      const t = val / 0.40;
      return metrics.startX * (1 - t);
    }
    if (val <= 0.55) {
      const t = (val - 0.40) / (0.55 - 0.40);
      return - (metrics.vw * 0.85) * t;
    }
    return - (metrics.vw * 0.85);
  });
  const textOpacity = useTransform(scrollYProgress, [0.38, 0.48], [1, 0]);

  // 2. THE SINGLE MASTER LOGO:
  // Enters from right (0.00 -> 0.40) to exact center (0), stays locked to dead center (0.40 -> 1.00)
  const logoX = useTransform(scrollYProgress, (val) => {
    if (val <= 0.40) {
      const t = val / 0.40;
      return metrics.startX * (1 - t);
    }
    return 0;
  });

  // 3. Blue Circle expands from behind centered logo (0.44 -> 0.62)
  const circleScale = useTransform(scrollYProgress, [0.44, 0.50, 0.62, 1.0], [0, 1.5, 60, 60]);
  const circleOpacity = useTransform(scrollYProgress, [0.42, 0.46, 1.0], [0, 1, 1]);

  // Solid blue base fills screen
  const blueFillOpacity = useTransform(scrollYProgress, [0.54, 0.62], [0, 1]);

  // 4. Logo Vertical Movement (0.60 -> 0.84):
  // User sketch Frame 4: "same logo move up slitly and foodercard + text come"
  // Dead center (0) until 0.60, then smoothly glides upward along vertical centerline to -dockedDistanceY
  const dockedDistanceY = isMobile
    ? Math.max(40, Math.round(456 - (metrics.vh / 2)))
    : Math.round((metrics.vh / 2) - (metrics.vh < 850 ? 56 : 72));

  const logoY = useTransform(scrollYProgress, (val) => {
    if (val <= 0.60) return 0;
    if (val <= 0.84) {
      const t = (val - 0.60) / (0.84 - 0.60);
      const ease = 1 - Math.pow(1 - t, 3);
      return -dockedDistanceY * ease;
    }
    return -dockedDistanceY;
  });

  // 5. Headline and buttons reveal directly below the logo as it glides up (0.65 -> 0.80)
  const textRevealOpacity = useTransform(scrollYProgress, [0.65, 0.80], [0, 1]);

  // 6. Footer card rises up smoothly from bottom and docks flush to bottom (0.65 -> 0.88)
  const cardY = useTransform(scrollYProgress, (val) => {
    if (val <= 0.65) return metrics.vh * 0.45;
    if (val <= 0.88) {
      const t = (val - 0.65) / (0.88 - 0.65);
      const ease = 1 - Math.pow(1 - t, 3);
      return (metrics.vh * 0.45) * (1 - ease);
    }
    return 0;
  });
  const cardOpacity = useTransform(scrollYProgress, [0.65, 0.78], [0, 1]);

  return (
    <section className="w-full bg-[#050505] relative z-[60]">
      {/* Solid blue behind everything once circle fills */}
      <motion.div
        style={{ opacity: blueFillOpacity }}
        className="absolute inset-0 bg-[#2563EB] pointer-events-none z-0"
      />

      {/* Smooth scroll runway */}
      <div ref={containerRef} className="relative h-[340vh] z-10">
        
        {/* Full-screen sticky viewport */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#050505] select-none">
          
          {/* Ambient dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0" />

          {/* Solid blue base */}
          <motion.div
            style={{ opacity: blueFillOpacity }}
            className="absolute inset-0 bg-[#2563EB] z-10 pointer-events-none"
          />

          {/* PHASE 1-2 MARQUEE TEXT: Moves in sync with logo, exits to left */}
          <motion.div
            style={{
              right: `calc(50% + ${logoHalfWidth + marqueeGap}px)`,
              x: textX,
              opacity: textOpacity,
            }}
            className="absolute inset-y-0 whitespace-nowrap z-20 pointer-events-none flex items-center justify-end will-change-transform"
          >
            <span
              ref={textSpanRef}
              className="font-display font-extrabold tracking-tight text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none uppercase whitespace-nowrap drop-shadow-sm shrink-0"
            >
              One campus, one connected experience
            </span>
          </motion.div>

          {/* THE SINGLE MASTER LOGO & CTA GROUP:
              Positioned via full-screen flexbox centering!
              When x=0 and y=0, it is 100.00% dead center in the viewport.
              Zero transform conflicts, zero swaps, zero jumps, zero ghosting! */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            <motion.div
              style={{
                x: logoX,
                y: logoY,
              }}
              className="relative flex flex-col items-center text-center will-change-transform pointer-events-none"
            >
              {/* Logo Badge Container: normal flow defines element position at center */}
              <div className="relative flex items-center justify-center shrink-0">
                {/* Expanding blue circle from center of logo */}
                <motion.div
                  style={{ scale: circleScale, opacity: circleOpacity }}
                  className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#2563EB] shadow-[0_0_120px_rgba(37,99,235,0.95)] pointer-events-none"
                />
                {/* The Logo Image directly without any outer background */}
                <img
                  src="/logo.png"
                  alt="Unisphere SRM Logo"
                  className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain relative z-10 select-none drop-shadow-xl"
                />
              </div>

              {/* CTA Headline & Action Buttons:
                  Positioned directly below the logo with explicit horizontal centering.
                  Moves up in perfect harmony with the logo as it glides up. */}
              <motion.div
                style={{
                  opacity: textRevealOpacity,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                className="absolute top-full w-[90vw] sm:w-[85vw] max-w-4xl flex flex-col items-center text-center pointer-events-auto"
              >
                {/* Headline: strictly 10-20px below logo */}
                <h2 className="mt-2 sm:mt-3.5 font-display font-extrabold text-xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.12] max-w-3xl text-balance">
                  One campus, one connected experience
                </h2>

                {/* Action Buttons: strictly 12-24px below headline */}
                <div className="mt-2.5 sm:mt-4 flex items-center justify-center gap-2.5 sm:gap-4 flex-wrap">
                  {/* Start Now Button: Curved rectangle with app blue badge (#2563EB) & white play icon */}
                  <button
                    type="button"
                    onClick={onBookDemoClick}
                    className="bg-[#0B0F19] hover:bg-black text-white pl-5 sm:pl-7 pr-2 sm:pr-2.5 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base flex items-center gap-2 sm:gap-3 shadow-xl transition-all active:scale-95 cursor-pointer group"
                  >
                    <span>Start Now</span>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                      <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white ml-0.5" />
                    </div>
                  </button>

                  {/* Talk to sales Button: Curved rectangle in pure white */}
                  <button
                    type="button"
                    onClick={onBookDemoClick}
                    className="bg-white hover:bg-slate-50 text-[#0F172A] font-bold text-xs sm:text-base px-5 sm:px-7 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center cursor-pointer"
                  >
                    <span>Talk to sales</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* BOTTOM FOOTER CARD: Sits flush to bottom edge, rises smoothly from 0.65 to 0.88 */}
          <motion.div
            style={{ y: cardY, opacity: cardOpacity }}
            className="absolute bottom-0 inset-x-0 w-full pointer-events-auto z-40"
          >
            <Footer
              variant="floating"
              showCTA={false}
              compact={true}
              showWordmark={true}
              onBookDemoClick={onBookDemoClick}
              onGetStartedClick={onBookDemoClick}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ScrollStatement;
