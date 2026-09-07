import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ArrowRight, Sparkles } from 'lucide-react';
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

            {/* Desktop Action Buttons & Staggered Menu Trigger */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                type="button"
                onClick={onSignInClick}
                className="px-4 py-2 text-xs lg:text-sm font-bold text-content-primary hover:text-primary border border-border hover:border-primary/40 rounded-xl transition-all duration-200 hover:bg-surface-soft active:scale-95 whitespace-nowrap cursor-pointer"
              >
                Login
              </button>
              <button
                type="button"
                onClick={onGetStartedClick}
                className="px-5 py-2.5 text-xs lg:text-sm font-extrabold text-white bg-primary hover:bg-primary-dark rounded-xl shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 transition-all duration-200 inline-flex items-center justify-center gap-2 active:scale-95 group whitespace-nowrap ring-2 ring-primary/20 cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150 shrink-0" />
              </button>

              {/* Desktop Staggered Menu Button */}
              <button
                type="button"
                onClick={() => staggeredMenuRef.current?.toggle()}
                className="p-2.5 rounded-xl text-content-secondary hover:text-primary hover:bg-surface-soft border border-border hover:border-primary/40 transition-all active:scale-95 flex items-center gap-2 group cursor-pointer"
                aria-label="Open institutional menu"
                title="Open Staggered Menu"
              >
                <span className="text-xs font-extrabold tracking-wider uppercase hidden xl:inline">Menu</span>
                <Menu className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Mobile Actions & Staggered Menu Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onGetStartedClick}
                className="px-3 py-1.5 text-xs font-bold text-white bg-primary rounded-lg shadow-xs active:scale-95 cursor-pointer"
              >
                Book a Demo
              </button>
              <button
                type="button"
                onClick={() => staggeredMenuRef.current?.toggle()}
                className="p-2 rounded-xl text-content-secondary hover:text-content-primary hover:bg-surface-soft border border-border/80 focus:outline-none active:scale-95 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                <Menu className="w-5 h-5 text-content-primary" />
              </button>
            </div>
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
