import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Sparkles } from 'lucide-react';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found — Unisphere';
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAFC] text-content-primary flex flex-col justify-between overflow-hidden selection:bg-primary/15 selection:text-primary font-sans antialiased">
      
      {/* Ambient Unisphere App Glow & Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.06)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.07),transparent_70%)] pointer-events-none z-0" />

      {/* Top Minimal Navigation Bar */}
      <header className="relative z-20 w-full px-6 py-5 sm:px-10 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
        >
          <img 
            src="/logo.png" 
            alt="Unisphere Logo" 
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-200" 
          />
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-content-primary">
            Unisphere
          </span>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-content-secondary hover:text-content-primary bg-white hover:bg-surface-muted border border-border rounded-xl shadow-2xs transition-colors"
        >
          <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
          <span>Home</span>
        </Link>
      </header>

      {/* Main 404 Hero Section */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 w-full my-auto">
        
        {/* Giant Watermark 404 in Unisphere Brand Blue Tint */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
          aria-hidden="true"
        >
          <span className="font-display font-black text-[28vw] sm:text-[32vw] md:text-[28rem] lg:text-[34rem] leading-none text-[#E0E7FF]/70 tracking-tighter opacity-80 select-none">
            404
          </span>
        </motion.div>

        {/* Foreground Content Card: Centered directly over the 404 watermark */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto px-4 py-8"
        >
          {/* Subtle Category Pill in Unisphere Primary */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Campus Route Lost</span>
          </div>

          {/* Headline in Momo Trust Display */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-content-primary tracking-tight leading-[1.12]">
            Page not found
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-content-secondary leading-relaxed max-w-md mx-auto font-normal text-balance">
            The page you are looking for doesn't exist, has been removed, or has taken an unexpected detour.
          </p>

          {/* Action Buttons in Unisphere App Theme */}
          <div className="mt-7 sm:mt-9 flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            {/* Primary Action: Unisphere Royal Blue Pill Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white pl-7 pr-6 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-[0_12px_28px_-6px_rgba(37,99,235,0.45)] hover:shadow-[0_16px_34px_-6px_rgba(37,99,235,0.55)] active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <span>Go To Home</span>
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Secondary Action: Explore Portals */}
            <Link
              to="/#solutions"
              className="inline-flex items-center gap-2 bg-white hover:bg-surface-muted text-content-primary px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base border border-border shadow-2xs hover:shadow-xs active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Portals</span>
            </Link>
          </div>
        </motion.div>

      </main>

      {/* Subtle Bottom Copyright Footer */}
      <footer className="relative z-20 w-full px-6 py-6 text-center text-xs text-content-tertiary font-medium">
        <span>© {new Date().getFullYear()} Unisphere SRM. All rights reserved.</span>
      </footer>

    </div>
  );
};

export default NotFound;
