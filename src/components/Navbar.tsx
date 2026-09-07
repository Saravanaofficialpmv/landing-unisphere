import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Sparkles } from 'lucide-react';
import { StaggeredMenu, StaggeredMenuRef, StaggeredMenuItem } from './StaggeredMenu';

interface NavbarProps {
  onSignInClick: () => void;
  onGetStartedClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSignInClick, onGetStartedClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const staggeredMenuRef = useRef<StaggeredMenuRef>(null);

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

  const menuItems: StaggeredMenuItem[] = [
    { label: 'Platform Overview', ariaLabel: 'Go to platform overview', link: '#platform' },
    { label: 'Stakeholder Portals', ariaLabel: 'Go to stakeholder portals', link: '#solutions' },
    { label: 'Academic Modules', ariaLabel: 'Go to academic modules', link: '#features' },
    { label: 'Connected Workflow', ariaLabel: 'Go to connected workflow', link: '#workflow' },
    { label: 'Why Unisphere', ariaLabel: 'Go to institutional foundation', link: '#institutions' },
    { label: 'Security & Governance', ariaLabel: 'Go to role access and governance', link: '#governance' },
    { label: 'Implementation Path', ariaLabel: 'Go to implementation journey', link: '#implementation' },
    { label: 'FAQ', ariaLabel: 'Go to frequently asked questions', link: '#faq' },
  ];

  const socialItems = [
    { label: 'Book Demo', link: '#', onClick: onGetStartedClick },
    { label: 'Portal Login', link: '#', onClick: onSignInClick },
    { label: 'Privacy Policy', link: '/privacy-policy' },
    { label: 'Terms of Service', link: '/terms-of-service' },
  ];

  const extraMenuContent = (
    <div className="flex flex-col gap-2.5 pt-2">
      <button
        type="button"
        onClick={() => {
          staggeredMenuRef.current?.close();
          onGetStartedClick();
        }}
        className="w-full py-3 px-5 text-xs sm:text-sm font-extrabold text-white bg-primary hover:bg-primary-dark rounded-xl shadow-md shadow-primary/25 active:scale-95 transition-all flex items-center justify-center gap-2 ring-2 ring-primary/20 cursor-pointer"
      >
        <Sparkles className="w-4 h-4" />
        <span>Book an Institutional Demo</span>
      </button>
      <button
        type="button"
        onClick={() => {
          staggeredMenuRef.current?.close();
          onSignInClick();
        }}
        className="w-full py-2.5 px-5 text-xs sm:text-sm font-bold text-content-primary hover:text-primary border border-border rounded-xl hover:bg-surface-soft transition-colors cursor-pointer"
      >
        Sign in to Stakeholder Portal
      </button>
    </div>
  );

  const handleNavScroll = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash);
      return;
    }
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
        <div 
          className={`max-w-5xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-2.5 ${
            isScrolled
              ? 'bg-[#090d1a]/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/40 text-white'
              : 'bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20 text-white'
          }`}
        >
          {/* Brand Logo (Left) */}
          <Link 
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
            aria-label="Unisphere SRM Home"
          >
            <img 
              src="/logo.png" 
              alt="Unisphere SRM Logo" 
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-lg shadow-xs group-hover:scale-105 transition-transform duration-200" 
            />
            <span className="font-bold text-base sm:text-lg tracking-tight text-white">
              Unisphere
            </span>
          </Link>

          {/* Desktop Navigation Links (Center / Right - Reference 2 style) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            <button 
              type="button" 
              onClick={() => handleNavScroll('#features')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Features
            </button>
            <button 
              type="button" 
              onClick={() => handleNavScroll('#solutions')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Portals
            </button>
            <button 
              type="button" 
              onClick={() => handleNavScroll('#workflow')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Workflow
            </button>
            <button 
              type="button" 
              onClick={() => handleNavScroll('#institutions')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Actions & Pill CTA (Right - Reference 2 Sign up pill) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onSignInClick}
              className="hidden lg:inline-flex text-xs sm:text-sm font-medium text-slate-300 hover:text-white px-2 py-1 transition-colors cursor-pointer"
            >
              Login
            </button>

            {/* Solid White Pill Button */}
            <button
              type="button"
              onClick={onGetStartedClick}
              className="px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold text-slate-950 bg-white hover:bg-slate-100 rounded-xl sm:rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Book a Demo
            </button>

            {/* Menu Trigger Button */}
            <button
              type="button"
              onClick={() => staggeredMenuRef.current?.toggle()}
              className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
              aria-label="Open menu"
              title="Open full menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* React Bits StaggeredMenu Component */}
      <StaggeredMenu
        ref={staggeredMenuRef}
        isFixed={true}
        hideHeader={true}
        position="right"
        colors={['#DBEAFE', '#2563EB']}
        accentColor="#2563EB"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        extraContent={extraMenuContent}
        onItemClick={(item) => {
          if (location.pathname !== '/' && item.link.startsWith('#')) {
            navigate('/' + item.link);
          }
        }}
      />
    </>
  );
};

export default Navbar;
