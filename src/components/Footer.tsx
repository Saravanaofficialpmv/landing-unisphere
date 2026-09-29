import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { 
  Globe, 
  ChevronDown, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowUp, 
  Shield, 
  X, 
  Check,
  Play
} from 'lucide-react';

export interface FooterProps {
  onBookDemoClick?: () => void;
  onGetStartedClick?: () => void;
  showCTA?: boolean;
  compact?: boolean;
  showWordmark?: boolean;
  variant?: 'standard' | 'floating';
}

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी (Hindi)' },
  { code: 'ta', label: 'தமிழ் (Tamil)' },
  { code: 'te', label: 'తెలుగు (Telugu)' },
  { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
];

export const Footer: React.FC<FooterProps> = ({ 
  onBookDemoClick,
  onGetStartedClick,
  showCTA = false,
  compact = false,
  showWordmark = false,
  variant = 'standard',
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDemoClick = onBookDemoClick || onGetStartedClick;

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.6 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + hash);
      setTimeout(() => {
        if (lenis) {
          lenis.scrollTo(hash, { duration: 1.6, offset: -80 });
        } else {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      if (lenis) {
        lenis.scrollTo(hash, { duration: 1.6, offset: -80 });
      } else {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isFloating = variant === 'floating' || showCTA;

  return (
    <footer 
      className={
        isFloating
          ? `w-full bg-[#2563EB] pb-0 ${showCTA ? 'pt-14 sm:pt-20 lg:pt-24' : 'pt-0'} px-4 sm:px-6 lg:px-8`
          : 'w-full bg-white border-t border-border mt-auto'
      }
    >
      {showCTA && (
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-9 sm:mb-11">
          {/* App Logo */}
          <img 
            src="/logo.png" 
            alt="Unisphere SRM Logo" 
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl select-none" 
          />

          {/* Headline - tight ~20-24px spacing matching Image 1 */}
          <h2 className="mt-5 sm:mt-6 font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] max-w-3xl text-balance">
            One campus, one connected experience
          </h2>

          {/* Action Buttons - tight ~24-28px spacing matching Image 1 & exact Image 3 styling */}
          <div className="mt-6 sm:mt-7 flex items-center justify-center gap-3.5 sm:gap-4 flex-wrap">
            {/* Start Now Button: Curved rectangle shape */}
            <button
              type="button"
              onClick={handleDemoClick}
              className="bg-[#0B0F19] hover:bg-black text-white pl-6 sm:pl-7 pr-2.5 py-2 sm:py-2.5 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-3 shadow-xl transition-all active:scale-95 cursor-pointer group"
            >
              <span>Start Now</span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
              </div>
            </button>

            {/* Talk to sales Button: Curved rectangle shape */}
            <button
              type="button"
              onClick={handleDemoClick}
              className="bg-white hover:bg-slate-50 text-[#0F172A] font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <span>Talk to sales</span>
            </button>
          </div>
        </div>
      )}

      {/* Container: Floating Card when isFloating, or Full-Width clean container when standard */}
      <div 
        className={
          isFloating
            ? `max-w-7xl mx-auto bg-white rounded-t-[1.75rem] sm:rounded-t-[2.5rem] rounded-b-none border border-white/25 border-b-0 shadow-2xl ${compact ? 'px-4 pt-3.5 sm:px-7 sm:pt-7 lg:px-8 lg:pt-8' : 'p-6 sm:p-10 lg:p-12'} pb-0 sm:pb-0 lg:pb-0 overflow-hidden`
            : `max-w-7xl mx-auto ${compact ? 'px-4 py-4 sm:px-6 sm:py-6' : 'px-4 sm:px-6 lg:px-8 py-8 sm:py-12'}`
        }
      >
        
        {/* Top: Brand Logo on Left, Tagline & Badge on Right */}
        <div className={`flex items-center justify-between gap-2 ${compact ? 'pb-2 sm:pb-4' : 'pb-6 sm:pb-8'} border-b border-border/70`}>
          <Link
            to="/"
            onClick={location.pathname === '/' ? scrollToTop : undefined}
            className="inline-flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
          >
            <img
              src="/logo.png"
              alt="Unisphere SRM Logo"
              className="w-7 h-7 sm:w-10 sm:h-10 object-contain rounded-lg sm:rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-2xl tracking-tight text-content-primary whitespace-nowrap">
                Unisphere SRM
              </span>
              <span className="text-xs text-content-secondary hidden sm:inline-block">
                Connected academic operations for higher education
              </span>
            </div>
          </Link>

          {/* Right badge */}
          <div className="text-[10px] sm:text-xs font-semibold text-content-secondary flex items-center gap-3 shrink-0">
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
              Higher Education Intelligence
            </span>
          </div>
        </div>

        {/* Compact Horizontal Categorized Links */}
        <div className={`${compact ? 'py-2 sm:py-4 space-y-1 sm:space-y-2.5' : 'py-6 sm:py-7 space-y-3.5 sm:space-y-4'}`}>
          {/* Row 1: Company */}
          <div className="flex items-baseline gap-2 sm:gap-6">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider w-20 sm:w-24 shrink-0">Company</span>
            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-4 gap-y-0.5 text-[10px] sm:text-sm font-medium text-content-secondary">
              <a
                href="#institutions"
                onClick={(e) => handleSectionClick(e, '#institutions')}
                className="hover:text-primary transition-colors inline-block"
              >
                About
              </a>
              <span className="text-slate-300 select-none">•</span>
              <a
                href="#platform"
                onClick={(e) => handleSectionClick(e, '#platform')}
                className="hover:text-primary transition-colors inline-block"
              >
                Platform
              </a>
              <span className="text-slate-300 select-none">•</span>
              <a
                href="#showcase"
                onClick={(e) => handleSectionClick(e, '#showcase')}
                className="hover:text-primary transition-colors inline-block"
              >
                Showcase
              </a>
              <span className="text-slate-300 select-none">•</span>
              <a
                href="https://www.heydigital.work/contact.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors inline-block"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Row 2: Portals */}
          <div className="flex items-baseline gap-2 sm:gap-6">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider w-20 sm:w-24 shrink-0">Portals</span>
            <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-4 gap-y-0.5 text-[10px] sm:text-sm font-medium text-content-secondary">
              <a
                href="#solutions"
                onClick={(e) => handleSectionClick(e, '#solutions')}
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Student</span>
                <span className="hidden sm:inline">Student Portal</span>
              </a>
              <span className="text-slate-300 select-none">•</span>
              <a
                href="#solutions"
                onClick={(e) => handleSectionClick(e, '#solutions')}
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Faculty</span>
                <span className="hidden sm:inline">Faculty Management</span>
              </a>
              <span className="text-slate-300 select-none">•</span>
              <a
                href="#solutions"
                onClick={(e) => handleSectionClick(e, '#solutions')}
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">HOD</span>
                <span className="hidden sm:inline">HOD Operations</span>
              </a>
              <span className="text-slate-300 select-none">•</span>
              <a
                href="#solutions"
                onClick={(e) => handleSectionClick(e, '#solutions')}
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Parents</span>
                <span className="hidden sm:inline">Parent Desk</span>
              </a>
              <span className="text-slate-300 select-none">•</span>
              <a
                href="#solutions"
                onClick={(e) => handleSectionClick(e, '#solutions')}
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Admin</span>
                <span className="hidden sm:inline">Admin Control</span>
              </a>
            </div>
          </div>

          {/* Row 3: Support */}
          <div className="flex items-baseline gap-2 sm:gap-6">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider w-20 sm:w-24 shrink-0">Support</span>
            <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-4 gap-y-0.5 text-[10px] sm:text-sm font-medium text-content-secondary">
              {handleDemoClick && (
                <>
                  <button
                    type="button"
                    onClick={handleDemoClick}
                    className="hover:text-primary transition-colors inline-block text-left cursor-pointer"
                  >
                    <span className="sm:hidden">Demo</span>
                    <span className="hidden sm:inline">Institutional demo</span>
                  </button>
                  <span className="text-slate-300 select-none">•</span>
                </>
              )}
              <a
                href="mailto:heydigitals.care@gmail.com"
                className="hover:text-primary transition-colors inline-block"
              >
                Help center
              </a>
              <span className="text-slate-300 select-none">•</span>
              <Link
                to="/terms-of-service"
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Terms</span>
                <span className="hidden sm:inline">Terms of service</span>
              </Link>
              <span className="text-slate-300 select-none">•</span>
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Privacy</span>
                <span className="hidden sm:inline">Privacy policy</span>
              </Link>
              <span className="text-slate-300 select-none">•</span>
              <Link
                to="/cookie-policy"
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Cookies</span>
                <span className="hidden sm:inline">Cookie policy</span>
              </Link>
              <span className="text-slate-300 select-none">•</span>
              <Link
                to="/acceptable-use"
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Acceptable use</span>
                <span className="hidden sm:inline">Acceptable use</span>
              </Link>
              <span className="text-slate-300 select-none">•</span>
              <Link
                to="/accessibility"
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Accessibility</span>
                <span className="hidden sm:inline">Accessibility statement</span>
              </Link>
            </div>
          </div>

          {/* Row 4: Developers */}
          <div className="flex items-baseline gap-2 sm:gap-6">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider w-20 sm:w-24 shrink-0">Developers</span>
            <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-4 gap-y-0.5 text-[10px] sm:text-sm font-medium text-content-secondary">
              <a
                href="https://heydigital.work"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors inline-block"
              >
                heydigital.work
              </a>
              <span className="text-slate-300 select-none">•</span>
              <a
                href="#workflow"
                onClick={(e) => handleSectionClick(e, '#workflow')}
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Guide</span>
                <span className="hidden sm:inline">Implementation guide</span>
              </a>
              <span className="text-slate-300 select-none">•</span>
              <Link
                to="/security"
                className="hover:text-primary transition-colors inline-block"
              >
                <span className="sm:hidden">Security</span>
                <span className="hidden sm:inline">Security & disclosure</span>
              </Link>
              <span className="text-slate-300 select-none hidden min-[480px]:inline">•</span>
              <span className="text-content-tertiary hidden min-[480px]:inline">
                Office hours: 9AM - 6PM IST
              </span>
            </div>
          </div>
        </div>

        {/* Utility Bar: Language Selector | Social Circles */}
        <div className={`${compact ? 'pt-2 pb-2 sm:pt-3.5 sm:pb-3.5' : 'pt-5 pb-5'} flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 border-t border-border/80`}>
          
          {/* Top Row on Mobile: Language Selector + Social Icons | Left on Desktop */}
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-content-primary hover:text-primary transition-colors py-1 sm:py-2 px-2 sm:px-3 rounded-lg sm:rounded-xl hover:bg-surface-muted cursor-pointer"
                aria-label="Select language"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-content-secondary shrink-0" />
                <span>{selectedLang}</span>
                <ChevronDown 
                  className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-content-secondary transition-transform duration-200 ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-44 bg-white rounded-2xl shadow-elevated border border-border py-1.5 z-20 animate-in fade-in slide-in-from-bottom-2 duration-150">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang.label.split(' ')[0]);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-3.5 py-2 text-left text-xs flex items-center justify-between hover:bg-surface-muted transition-colors ${
                        selectedLang === lang.label.split(' ')[0] 
                          ? 'text-primary font-bold bg-primary-subtle' 
                          : 'text-content-secondary'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {selectedLang === lang.label.split(' ')[0] && (
                        <Check className="w-3.5 h-3.5 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile-only compact social icons */}
            <div className="flex sm:hidden items-center gap-1.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-content-primary flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-content-primary flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-content-primary flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-content-primary flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                title="Back to top"
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-content-secondary flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Desktop Right: Circular Social Media Icons + Copyright | Mobile Bottom: Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="text-[10px] sm:text-sm text-content-secondary tracking-wide">
              © 2026 Unisphere SRM. All rights reserved.
            </span>
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-content-primary flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-content-primary flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-content-primary flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-content-primary flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                title="Back to top"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-content-secondary flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 cursor-pointer ml-1"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* LARGE BRAND WORDMARK DISPLAY: ~90% visible, cropped at bottom */}
        {showWordmark && (
          <>
            <div className="w-full h-px bg-border/80" />
            <div className={`w-full text-center overflow-hidden ${compact ? 'pt-1.5 sm:pt-4' : 'pt-6 sm:pt-8'} select-none`}>
              <span 
                className="block font-sans font-bold tracking-tight text-[15vw] sm:text-[13.5vw] lg:text-[14vw] leading-[0.8] text-content-primary hover:text-primary transition-colors duration-300"
                style={{ marginBottom: '-0.10em' }}
              >
                Unisphere
              </span>
            </div>
          </>
        )}

      </div>

      {/* Institutional Cookie Policy Modal */}
      {cookieModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-content-primary/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-border p-6 max-w-md w-full shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-border/80 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <h3 className="text-base font-bold text-content-primary">Institutional Cookie Policy</h3>
              </div>
              <button
                type="button"
                onClick={() => setCookieModalOpen(false)}
                className="p-1 rounded-lg text-content-tertiary hover:text-content-primary cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              Unisphere SRM uses strictly essential cookies required for session authentication, role-based access control, and platform security. We do not use intrusive third-party cross-site advertising trackers.
            </p>
            <button
              type="button"
              onClick={() => setCookieModalOpen(false)}
              className="w-full py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer"
            >
              Accept & Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
