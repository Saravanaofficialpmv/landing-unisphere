import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp, Shield, Mail, Phone, Globe, Calendar, X } from 'lucide-react';

export interface FooterProps {
  onSignInClick?: () => void;
  onBookDemoClick?: () => void;
  onGetStartedClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onSignInClick, 
  onBookDemoClick,
  onGetStartedClick 
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cookieModalOpen, setCookieModalOpen] = useState(false);

  const handleDemoClick = onBookDemoClick || onGetStartedClick;

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
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link
              to="/"
              onClick={location.pathname === '/' ? scrollToTop : undefined}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <img
                src="/logo.png"
                alt="Unisphere SRM Logo"
                className="w-9 h-9 object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200"
              />
              <span className="font-extrabold text-xl tracking-tight text-content-primary">
                Unisphere SRM
              </span>
            </Link>

            <p className="mt-4 text-xs sm:text-sm text-content-secondary max-w-sm leading-relaxed">
              The connected academic management and campus platform unifying students, faculty, HODs, parents, and administrators for modern higher-education institutions.
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
              <a href="https://heydigital.work" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>heydigital.work</span>
              </a>
            </div>

            {handleDemoClick && (
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleDemoClick}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-dark shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book a Free Demo</span>
                </button>
              </div>
            )}
          </div>

          {/* 4 Navigation Columns matching User's Layout */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 pt-1">
            {/* Column 1: Core Platform */}
            <div>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="#platform"
                    onClick={(e) => handleSectionClick(e, '#platform')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Platform Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    onClick={(e) => handleSectionClick(e, '#solutions')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Stakeholder Portals
                  </a>
                </li>
                <li>
                  <a
                    href="#showcase"
                    onClick={(e) => handleSectionClick(e, '#showcase')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Interactive Showcase
                  </a>
                </li>
                <li>
                  <a
                    href="#institutions"
                    onClick={(e) => handleSectionClick(e, '#institutions')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Built for Institutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Stakeholder Portals */}
            <div>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="#solutions"
                    onClick={(e) => handleSectionClick(e, '#solutions')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Student Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    onClick={(e) => handleSectionClick(e, '#solutions')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Faculty Management
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    onClick={(e) => handleSectionClick(e, '#solutions')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    HOD Department Hub
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    onClick={(e) => handleSectionClick(e, '#solutions')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Parent Oversight
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    onClick={(e) => handleSectionClick(e, '#solutions')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Admin Governance
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Institutional Journey & FAQ */}
            <div>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="#institutions"
                    onClick={(e) => handleSectionClick(e, '#institutions')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    RBAC & Governance
                  </a>
                </li>
                <li>
                  <a
                    href="#implementation"
                    onClick={(e) => handleSectionClick(e, '#implementation')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Implementation Path
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleSectionClick(e, '#faq')}
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    FAQ
                  </a>
                </li>
                {handleDemoClick && (
                  <li>
                    <button
                      type="button"
                      onClick={handleDemoClick}
                      className="text-xs sm:text-sm text-primary font-bold hover:underline inline-block text-left cursor-pointer"
                    >
                      Request Demo
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Column 4: Access & Legal */}
            <div>
              <ul className="space-y-3.5">
                {onSignInClick && (
                  <li>
                    <button
                      type="button"
                      onClick={onSignInClick}
                      className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors text-left cursor-pointer"
                    >
                      Portal Login
                    </button>
                  </li>
                )}
                <li>
                  <a
                    href="https://www.heydigital.work/contact.html"
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Institutional Contact
                  </a>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Student Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-service"
                    className="text-xs sm:text-sm text-content-secondary hover:text-primary transition-colors inline-block"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal + Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-content-tertiary">
          <p>© 2026 UNISPHERE SRM. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={() => setCookieModalOpen(true)}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white border border-border hover:border-primary/40 text-content-secondary hover:text-primary shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Policy Modal */}
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
                className="p-1 rounded-lg text-content-tertiary hover:text-content-primary"
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
