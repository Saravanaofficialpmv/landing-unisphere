import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onSignInClick: () => void;
  onGetStartedClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSignInClick, onGetStartedClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface-soft border-t border-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border/80">
          {/* Left Column: Brand, Logo, Tagline */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a 
              href="#overview" 
              onClick={(e) => handleLinkClick(e, '#overview')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.2" strokeDasharray="5 3" />
                  <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                  <path d="M5 5L7 7M19 5L17 7M5 19L7 17M19 19L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-content-primary">
                  Unisphere
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary-subtle text-primary border border-primary/20">
                  SRM
                </span>
              </div>
            </a>

            <p className="mt-4 text-sm text-content-secondary max-w-sm leading-relaxed">
              A unified academic and campus management platform connecting students, faculty, parents, HODs, and administrators.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={onGetStartedClick}
                className="px-4 py-2 text-xs font-bold text-white bg-primary hover:bg-primary-dark rounded-xl transition-all shadow-xs"
              >
                Request Campus Demo
              </button>
              <button
                type="button"
                onClick={onSignInClick}
                className="px-4 py-2 text-xs font-bold text-content-primary bg-white hover:bg-surface-soft border border-border rounded-xl transition-all"
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Center Column: Platform Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-content-primary mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Overview', href: '#overview' },
                { name: 'Portals', href: '#portals' },
                { name: 'Features', href: '#features' },
                { name: 'Technology', href: '#technology' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-content-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Resources Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-content-primary mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="text-sm text-content-secondary hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onSignInClick}
                  className="text-sm text-content-secondary hover:text-primary transition-colors text-left"
                >
                  Sign In
                </button>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  onClick={(e) => handleLinkClick(e, '#ecosystem')}
                  className="text-sm text-content-secondary hover:text-primary transition-colors"
                >
                  Ecosystem Architecture
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-content-tertiary">
          <p>© 2026 Unisphere. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>SRM Institute of Science and Technology</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white border border-border hover:border-primary/40 text-content-secondary hover:text-primary shadow-2xs transition-all flex items-center gap-1.5"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
