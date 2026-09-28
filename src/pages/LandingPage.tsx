import { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { motion } from 'framer-motion';
import { BrandIntro } from '../components/BrandIntro';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { ProblemSection } from '../components/ProblemSection';
import { PortalCards } from '../components/PortalCards';
import { AppShowcase } from '../components/AppShowcase';
import { WhyUnisphere } from '../components/WhyUnisphere';
import { ImplementationJourney } from '../components/ImplementationJourney';
import { FAQSection } from '../components/FAQSection';
import { ScrollStatement } from '../components/ScrollStatement';
import { Footer } from '../components/Footer';
import { TextLoop } from '../components/TextLoop';
import { Sparkles } from 'lucide-react';

export function LandingPage() {
  const [showMobileStickyBar, setShowMobileStickyBar] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  const lenis = useLenis();

  // Temporarily pause scroll during brand intro
  useEffect(() => {
    if (!introFinished) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [introFinished, lenis]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 450;
          setShowMobileStickyBar((prev) => (prev !== shouldShow ? shouldShow : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenDemo = () => {
    window.location.href = 'https://www.heydigital.work/contact.html';
  };

  const handleExploreScroll = () => {
    if (lenis) {
      lenis.scrollTo('#solutions', { duration: 1.6, offset: -80 });
    } else {
      const target = document.querySelector('#solutions');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Cinematic Brand Intro (Brand-only sequence, ~2.4s max) */}
      {!introFinished && (
        <BrandIntro onComplete={() => setIntroFinished(true)} />
      )}

      <motion.div 
        className="min-h-screen bg-white text-content-primary flex flex-col selection:bg-primary/15 selection:text-primary"
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* 1. Navbar */}
        <Navbar
          onGetStartedClick={handleOpenDemo}
        />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onGetStartedClick={handleOpenDemo}
          onExploreClick={handleExploreScroll}
        />

        {/* 3. Institutional value/trust strip */}
        <TrustStrip />

        {/* Dynamic Campus Ribbon Loop - Placed directly under Trust Strip */}
        <section className="w-full overflow-hidden py-0 my-0 relative" aria-label="Unisphere SRM Brand Flow">
          <TextLoop
            text="Unisphere SRM ✦ One Campus ✦ One Connected Experience ✦ 5 Stakeholder Portals ✦ 12 Academic Modules"
            shape="wave"
            speed={80}
            direction="reverse"
            separator="✦"
            curviness={36}
            fontSize={24}
            fontWeight={800}
            letterSpacing={2}
            uppercase
            color="#ffffff"
            ribbon
            ribbonColor="#2563EB"
            ribbonWidth={56}
            pauseOnHover
            className="w-full"
          />
        </section>

        {/* 4. The disconnected-campus problem */}
        <ProblemSection
          onExploreSolutions={handleExploreScroll}
          onBookDemoClick={handleOpenDemo}
        />

        {/* 5. One platform / five stakeholder experiences */}
        <PortalCards
          onBookDemoClick={handleOpenDemo}
        />

        {/* 6. Interactive product experience */}
        <AppShowcase />

        {/* 10. Built for Institutions */}
        <WhyUnisphere />

        {/* 11. Implementation journey */}
        <ImplementationJourney onDiscussClick={handleOpenDemo} />

        {/* 13. FAQ */}
        <FAQSection onBookDemoClick={handleOpenDemo} />

        {/* 14. Scroll Statement & Brand Reveal */}
        <ScrollStatement onBookDemoClick={handleOpenDemo} />
      </main>

      {/* 15. Footer — flows naturally after scroll animation on blue background */}
      <Footer
        onBookDemoClick={handleOpenDemo}
        onGetStartedClick={handleOpenDemo}
      />

      {/* Mobile Sticky Conversion Bar */}
      {showMobileStickyBar && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-border shadow-elevated md:hidden flex items-center justify-between gap-3 animate-in fade-in duration-200">
          <div className="flex flex-col">
            <span className="text-xs font-extrabold text-content-primary">UNISPHERE SRM</span>
            <span className="text-[10px] text-content-secondary">Connected Campus</span>
          </div>
          <button
            type="button"
            onClick={handleOpenDemo}
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-extrabold rounded-xl shadow-xs flex items-center gap-1.5 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book a Demo</span>
          </button>
        </div>
      )}
      </motion.div>
    </>
  );
}

export default LandingPage;
