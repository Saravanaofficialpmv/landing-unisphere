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
  Check 
} from 'lucide-react';

export interface FooterProps {
  onBookDemoClick?: () => void;
  onGetStartedClick?: () => void;
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
  onGetStartedClick 
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

  return (
    <footer className="w-full bg-[#2563EB] pb-12 sm:pb-16 pt-0 px-4 sm:px-6 lg:px-8">
      {/* Floating Card Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-white/25 shadow-2xl p-7 sm:p-12 lg:p-16">
        
        {/* Top: Brand Logo on Left, Tagline in Right Corner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 mb-10 sm:mb-14 lg:mb-16">
          <Link
            to="/"
            onClick={location.pathname === '/' ? scrollToTop : undefined}
            className="inline-flex items-center gap-3 group focus:outline-none shrink-0"
          >
            <img
              src="/logo.png"
              alt="Unisphere SRM Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200"
            />
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-content-primary whitespace-nowrap">
              Unisphere SRM
            </span>
          </Link>

          {/* Tagline positioned at the right corner */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-content-primary max-w-xl text-left lg:text-right leading-[1.3]">
            Connected academic operations and intelligence for higher education.
          </h2>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-12 sm:pb-16">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-content-primary mb-4 sm:mb-5">
              Company
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-content-secondary">
              <li>
                <a
                  href="#institutions"
                  onClick={(e) => handleSectionClick(e, '#institutions')}
                  className="hover:text-primary transition-colors inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleSectionClick(e, '#platform')}
                  className="hover:text-primary transition-colors inline-block"
                >
                  Platform
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  onClick={(e) => handleSectionClick(e, '#showcase')}
                  className="hover:text-primary transition-colors inline-block"
                >
                  Showcase
                </a>
              </li>
              <li>
                <a
                  href="https://www.heydigital.work/contact.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Portals */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-content-primary mb-4 sm:mb-5">
              Portals
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-content-secondary">
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSectionClick(e, '#solutions')}
                  className="hover:text-primary transition-colors inline-block"
                >
                  Student Portal
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSectionClick(e, '#solutions')}
                  className="hover:text-primary transition-colors inline-block"
                >
                  Faculty Management
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSectionClick(e, '#solutions')}
                  className="hover:text-primary transition-colors inline-block"
                >
                  HOD Operations
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSectionClick(e, '#solutions')}
                  className="hover:text-primary transition-colors inline-block"
                >
                  Parent Desk
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSectionClick(e, '#solutions')}
                  className="hover:text-primary transition-colors inline-block"
                >
                  Admin Control
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-content-primary mb-4 sm:mb-5">
              Support
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-content-secondary">
              {handleDemoClick && (
                <li>
                  <button
                    type="button"
                    onClick={handleDemoClick}
                    className="hover:text-primary transition-colors inline-block text-left cursor-pointer"
                  >
                    Institutional demo
                  </button>
                </li>
              )}
              <li>
                <a
                  href="mailto:heydigitals.care@gmail.com"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Help center
                </a>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCookieModalOpen(true)}
                  className="hover:text-primary transition-colors inline-block text-left cursor-pointer"
                >
                  Cookie policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Developers & Platform */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-content-primary mb-4 sm:mb-5">
              Developers
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-content-secondary">
              <li>
                <a
                  href="https://heydigital.work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Heydigital.work
                </a>
              </li>
              <li>
                <a
                  href="#workflow"
                  onClick={(e) => handleSectionClick(e, '#workflow')}
                  className="hover:text-primary transition-colors inline-block"
                >
                  Implementation guide
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleSectionClick(e, '#faq')}
                  className="hover:text-primary transition-colors inline-block"
                >
                  Security & architecture
                </a>
              </li>
              <li>
                <span className="text-content-tertiary block">
                  Office hours: 9AM - 6PM IST
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Utility Bar: Language Selector | Social Circles */}
        <div className="pt-8 sm:pt-10 pb-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/80">
          
          {/* Left: Language Selector */}
          <div className="relative order-2 sm:order-1" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-content-primary hover:text-primary transition-colors py-2 px-3 rounded-xl hover:bg-surface-muted cursor-pointer"
              aria-label="Select language"
              aria-expanded={langDropdownOpen}
            >
              <Globe className="w-4 h-4 text-content-secondary shrink-0" />
              <span>{selectedLang}</span>
              <ChevronDown 
                className={`w-3.5 h-3.5 text-content-secondary transition-transform duration-200 ${
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

          {/* Right: Circular Social Media Icons + Copyright */}
          <div className="order-1 sm:order-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm text-content-secondary tracking-wide order-2 sm:order-1">
              © 2026 Unisphere SRM. All rights reserved.
            </span>
            <div className="flex items-center gap-3 order-1 sm:order-2">
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

        {/* Divider above large brand text */}
        <div className="w-full h-px bg-border/80" />

        {/* LARGE BRAND WORDMARK DISPLAY (Pipely style) */}
        <div className="w-full text-center overflow-hidden pt-8 pb-8 sm:pt-12 sm:pb-12 select-none">
          <span className="block font-sans font-bold tracking-tight text-[13.5vw] sm:text-[14.5vw] lg:text-[15.5vw] leading-[0.8] text-content-primary hover:text-primary transition-colors duration-300">
            Unisphere
          </span>
        </div>

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
