import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp, Shield, FileText, Mail, Phone, Globe } from 'lucide-react';

interface FooterProps {
  onSignInClick: () => void;
  onGetStartedClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSignInClick, onGetStartedClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + hash);
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-surface-soft border-t border-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/80">
          {/* Left Column: Brand, Logo, Tagline */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link 
              to="/" 
              onClick={location.pathname === '/' ? scrollToTop : undefined}
              className="flex items-center gap-3 group"
            >
              <img 
                src="/logo.png" 
                alt="Unisphere Logo" 
                className="w-10 h-10 object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200" 
              />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-content-primary">
                  Unisphere
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary-subtle text-primary border border-primary/20">
                  SRM
                </span>
              </div>
            </Link>

            <p className="mt-4 text-sm text-content-secondary max-w-sm leading-relaxed">
              A unified academic and campus management platform connecting students, faculty, parents, HODs, and administrators.
            </p>

            <div className="mt-5 flex flex-col gap-2 text-xs text-content-secondary">
              <a href="mailto:heydigitals.care@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>heydigitals.care@gmail.com</span>
              </a>
              <a href="tel:+919080407021" className="hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>+91 9080407021</span>
              </a>
              <a href="https://heydot.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>heydot.in</span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={onGetStartedClick}
                className="px-4 py-2 text-xs font-bold text-white bg-primary hover:bg-primary-dark rounded-xl transition-all shadow-xs active:scale-95"
              >
                Request Campus Demo
              </button>
              <button
                type="button"
                onClick={onSignInClick}
                className="px-4 py-2 text-xs font-bold text-content-primary bg-white hover:bg-surface-soft border border-border rounded-xl transition-all active:scale-95"
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Center-Left Column: Platform Links */}
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
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className="text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center-Right Column: Resources Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-content-primary mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSectionClick(e, '#about')}
                  className="text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  onClick={(e) => handleSectionClick(e, '#ecosystem')}
                  className="text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                >
                  Ecosystem
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
            </ul>
          </div>

          {/* Right Column: Dedicated Legal Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-content-primary mb-4 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>Legal</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/privacy-policy"
                  className={`text-sm transition-colors flex items-center gap-1.5 ${
                    location.pathname === '/privacy-policy'
                      ? 'text-primary font-bold'
                      : 'text-content-secondary hover:text-primary'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-primary/70" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className={`text-sm transition-colors flex items-center gap-1.5 ${
                    location.pathname === '/terms-of-service'
                      ? 'text-primary font-bold'
                      : 'text-content-secondary hover:text-primary'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-primary/70" />
                  <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-content-tertiary leading-relaxed">
              Transparent governance and privacy standards for all institutional users.
            </p>
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

export default Footer;
