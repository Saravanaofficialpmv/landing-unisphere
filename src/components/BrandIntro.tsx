import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrandIntroProps {
  onComplete?: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showWordmark, setShowWordmark] = useState(false);

  useEffect(() => {
    // 1. Once blue finishes expanding to fill screen (~2.0s), trigger logo shift + wordmark entry
    const wordmarkTimer = setTimeout(() => {
      setShowWordmark(true);
    }, 2000);

    // 2. Hold brand lockup, then start gentle transition to landing page at ~3.75s
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3750);

    return () => {
      clearTimeout(wordmarkTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  const handleExitComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="brand-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden select-none"
          style={{ willChange: 'opacity, transform' }}
        >
          {/* STEP 2: EXPANDING ROYAL BLUE CIRCLE - Emerges from BEHIND the logo (z-10) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
            <motion.div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#2563EB]"
              style={{
                boxShadow: '0 0 100px rgba(37, 99, 235, 0.8)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 0.08, 1, 40],
                opacity: [0, 1, 1, 1],
              }}
              transition={{
                delay: 0.9,
                duration: 1.15,
                times: [0, 0.08, 0.35, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          {/* STEP 1 & 3: BRAND LOCKUP - Logo starts centered, then shifts left as wordmark enters from right (z-20) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 flex items-center justify-center pointer-events-none px-6"
          >
            {/* The Logo (starts centered alone, shifts left when wordmark appears) */}
            <motion.div
              layout
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center shrink-0"
            >
              <img
                src="/logo.png"
                alt="UNISPHERE"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain rounded-2xl drop-shadow-2xl"
              />
            </motion.div>

            {/* The Name (UNISPHERE wordmark sweeps from RIGHT beside the logo) */}
            <AnimatePresence>
              {showWordmark && (
                <motion.div
                  layout
                  initial={{ opacity: 0, x: 90, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: 'auto' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden flex items-center ml-3.5 sm:ml-5 md:ml-6"
                >
                  <h1 className="text-white font-sans font-black tracking-widest sm:tracking-[0.18em] text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase whitespace-nowrap drop-shadow-lg">
                    UNISPHERE
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrandIntro;
