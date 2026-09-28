import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

interface ScrollStatementProps {
  onBookDemoClick?: () => void;
}

export const ScrollStatement: React.FC<ScrollStatementProps> = ({ onBookDemoClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const [metrics, setMetrics] = useState(() => {
    const vw = typeof window !== 'undefined' ? window.innerWidth : 1400;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 900;
    return { vw, vh, startX: vw, finalX: 0 };
  });

  useEffect(() => {
    const updateMetrics = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (trackRef.current && logoRef.current) {
        const logoCenterInTrack = logoRef.current.offsetLeft + (logoRef.current.offsetWidth / 2);
        const finalX = Math.round((vw / 2) - logoCenterInTrack);
        const startX = Math.round(vw);
        setMetrics({ vw, vh, startX, finalX });
      } else {
        setMetrics({ vw, vh, startX: vw, finalX: -vw });
      }
    };

    requestAnimationFrame(updateMetrics);
    window.addEventListener('resize', updateMetrics);
    if (document.fonts) {
      document.fonts.ready.then(updateMetrics);
    }
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track horizontal movement (0.00 -> 0.40 -> 0.55)
  const trackX = useTransform(scrollYProgress, (val) => {
    if (val <= 0.40) {
      const t = val / 0.40;
      return metrics.startX + (metrics.finalX - metrics.startX) * t;
    }
    if (val <= 0.55) {
      const t = (val - 0.40) / (0.55 - 0.40);
      const exitX = metrics.finalX - (metrics.vw * 0.8);
      return metrics.finalX + (exitX - metrics.finalX) * t;
    }
    return metrics.finalX - (metrics.vw * 0.8);
  });

  // Logo counter-transform to stay at center while track overshoots
  const logoCompensateX = useTransform(scrollYProgress, (val) => {
    if (val <= 0.40) return 0;
    if (val <= 0.55) {
      const t = (val - 0.40) / (0.55 - 0.40);
      return (metrics.vw * 0.8) * t;
    }
    return metrics.vw * 0.8;
  });

  // Text fades as it exits left
  const textOpacity = useTransform(scrollYProgress, [0.44, 0.52], [1, 0]);

  // Blue circle expands from behind centered logo
  const circleScale = useTransform(scrollYProgress, [0.40, 0.44, 0.58, 1.0], [0, 1.2, 50, 50]);
  const circleOpacity = useTransform(scrollYProgress, [0.39, 0.41, 1.0], [0, 1, 1]);

  // Solid blue base
  const blueFillOpacity = useTransform(scrollYProgress, [0.55, 0.58], [0, 1]);

  // LOGO moves up gracefully: from center (0) to -20vh
  const logoY = useTransform(scrollYProgress, (val) => {
    if (val <= 0.58) return 0;
    if (val <= 0.74) {
      const t = (val - 0.58) / (0.74 - 0.58);
      return -metrics.vh * 0.20 * t;
    }
    return -metrics.vh * 0.20;
  });

  // Headline + buttons rise gently
  const contentY = useTransform(scrollYProgress, (val) => {
    if (val <= 0.58) return 0;
    if (val <= 0.74) {
      const t = (val - 0.58) / (0.74 - 0.58);
      return -metrics.vh * 0.08 * t;
    }
    return -metrics.vh * 0.08;
  });

  // Fade in headline + buttons once logo has already risen and cleared
  const revealOpacity = useTransform(scrollYProgress, [0.70, 0.80], [0, 1]);

  return (
    <section className="w-full bg-[#050505] relative">
      {/* Solid blue behind everything once circle fills */}
      <motion.div
        style={{ opacity: blueFillOpacity }}
        className="absolute inset-0 bg-[#2563EB] pointer-events-none z-0"
      />

      {/* Scroll runway */}
      <div ref={containerRef} className="relative h-[560vh] z-10">
        
        {/* Full-screen sticky viewport */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] select-none">
          
          {/* Ambient dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0" />

          {/* Solid blue base */}
          <motion.div
            style={{ opacity: blueFillOpacity }}
            className="absolute inset-0 bg-[#2563EB] z-10 pointer-events-none"
          />

          {/* HORIZONTAL TRACK: [ TEXT ··· gap ··· LOGO ] */}
          <motion.div
            ref={trackRef}
            style={{ x: trackX }}
            className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center whitespace-nowrap will-change-transform z-40 pointer-events-none"
          >
            {/* Statement text */}
            <motion.span
              style={{ opacity: textOpacity }}
              className="font-display font-extrabold tracking-tight text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none uppercase whitespace-nowrap drop-shadow-sm shrink-0"
            >
              One campus, one connected experience
            </motion.span>

            {/* Gap */}
            <div className="w-10 sm:w-14 md:w-20 shrink-0" />

            {/* LOGO — moves up gracefully once blue fills */}
            <motion.div
              ref={logoRef}
              style={{
                x: logoCompensateX,
                y: logoY,
              }}
              className="shrink-0 flex items-center justify-center will-change-transform relative"
            >
              {/* Expanding blue circle from center of logo */}
              <motion.div
                style={{ scale: circleScale, opacity: circleOpacity }}
                className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-[#2563EB] shadow-[0_0_120px_rgba(37,99,235,0.95)] pointer-events-none"
              />
              {/* Logo icon (Official App Logo Squircle) */}
              <img
                src="/logo.png"
                alt="UNISPHERE"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.45)] relative z-10 select-none"
              />
            </motion.div>
          </motion.div>

          {/* HEADLINE + BUTTONS — positioned with comfortable, elegant clearance below logo */}
          <motion.div
            style={{ y: contentY }}
            className="absolute inset-x-0 top-0 flex flex-col items-center will-change-transform z-50 pointer-events-auto pt-[calc(50vh+4.5rem)] sm:pt-[calc(50vh+5rem)] md:pt-[calc(50vh+5.5rem)]"
          >
            <motion.div
              style={{ opacity: revealOpacity }}
              className="flex flex-col items-center w-full px-4 sm:px-6"
            >
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] max-w-4xl text-balance text-center">
                One campus, one connected experience
              </h2>

              <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={onBookDemoClick}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-extrabold text-xs sm:text-sm bg-[#090d1a] hover:bg-black text-white shadow-xl flex items-center gap-2.5 transition-all active:scale-95 cursor-pointer group"
                >
                  <Calendar className="w-4 h-4 text-white/90" />
                  <span>Start Now</span>
                  <div className="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center text-white ml-0.5">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={onBookDemoClick}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-extrabold text-xs sm:text-sm bg-white hover:bg-slate-100 text-[#0F172A] shadow-xl transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Talk to sales</span>
                </button>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Seamless blue transition into Footer */}
      <div className="w-full h-4 bg-[#2563EB] relative z-10" />
    </section>
  );
};

export default ScrollStatement;
