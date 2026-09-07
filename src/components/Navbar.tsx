import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onSignInClick: () => void;
  onGetStartedClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSignInClick, onGetStartedClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Features', href: '#features' },
    { name: 'For Institutions', href: '#institutions' },
    { name: 'Resources', href: '#resources' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-subtle py-3'
            : 'bg-white/75 backdrop-blur-xs border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link 
              to="/"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
              aria-label="Unisphere SRM Home"
            >
              <img 
                src="/logo.png" 
                alt="Unisphere SRM Logo" 
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200" 
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-content-primary flex items-center gap-1.5">
                  UNISPHERE
                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-primary-subtle text-primary border border-primary/20 tracking-wider">
                    SRM
                  </span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-surface-soft/90 border border-border/80 shadow-2xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-content-secondary hover:text-primary transition-colors duration-150 rounded-full hover:bg-white cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={onSignInClick}
                className="px-4 py-2 text-xs lg:text-sm font-bold text-content-primary hover:text-primary border border-border hover:border-primary/40 rounded-xl transition-all duration-200 hover:bg-surface-soft active:scale-95 whitespace-nowrap"
              >
                Login
              </button>
              <button
                type="button"
                onClick={onGetStartedClick}
                className="px-5 py-2.5 text-xs lg:text-sm font-extrabold text-white bg-primary hover:bg-primary-dark rounded-xl shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 transition-all duration-200 inline-flex items-center justify-center gap-2 active:scale-95 group whitespace-nowrap ring-2 ring-primary/20"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150 shrink-0" />
              </button>
            </div>

            {/* Mobile Actions & Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onGetStartedClick}
                className="px-3 py-1.5 text-xs font-bold text-white bg-primary rounded-lg shadow-xs active:scale-95"
              >
                Book a Demo
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-content-secondary hover:text-content-primary hover:bg-surface-soft border border-border/80 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white/95 backdrop-blur-xl border-b border-border shadow-xl px-6 py-6 md:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between py-2.5 px-3 text-sm font-semibold text-content-primary hover:text-primary hover:bg-primary-subtle/50 rounded-xl transition-all cursor-pointer"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-content-tertiary" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-border flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSignInClick();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-content-primary border border-border rounded-xl hover:bg-surface-soft transition-colors"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetStartedClick();
                }}
                className="w-full py-3 text-center text-sm font-extrabold text-white bg-primary hover:bg-primary-dark rounded-xl shadow-md shadow-primary/25 active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book an Institutional Demo</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
