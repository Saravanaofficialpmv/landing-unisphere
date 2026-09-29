import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, 
  Layers, 
  ChevronRight, 
  Info, 
  Clock, 
  Shield, 
  Scale, 
  Cookie, 
  CheckCircle2, 
  Lock, 
  Eye,
  FileText,
  LucideIcon
} from 'lucide-react';
import { Footer } from './Footer';

export interface SectionItem {
  id: string;
  title: string;
}

export interface LegalLayoutProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  effectiveDate: string;
  version: string;
  sections: SectionItem[];
  noticeContent?: React.ReactNode;
  children: React.ReactNode;
}

export const LEGAL_NAV_ITEMS = [
  { path: '/privacy-policy', title: 'Privacy Policy', icon: Shield, badge: 'Data' },
  { path: '/terms-of-service', title: 'Terms of Service', icon: Scale, badge: 'Legal' },
  { path: '/cookie-policy', title: 'Cookie Policy', icon: Cookie, badge: 'Storage' },
  { path: '/acceptable-use', title: 'Acceptable Use Policy', icon: CheckCircle2, badge: 'Conduct' },
  { path: '/security', title: 'Security & Disclosure', icon: Lock, badge: 'Trust' },
  { path: '/accessibility', title: 'Accessibility Statement', icon: Eye, badge: 'Inclusion' },
];

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  subtitle,
  badgeText,
  badgeIcon: BadgeIcon,
  effectiveDate,
  version,
  sections,
  noticeContent,
  children,
}) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} — Unisphere`;
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [title, sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-content-primary flex flex-col selection:bg-primary/15 selection:text-primary font-sans antialiased">
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-border/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
            <Link 
              to="/" 
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg shrink-0"
            >
              <img 
                src="/logo.png" 
                alt="Unisphere Logo" 
                className="w-9 h-9 object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200" 
              />
              <span className="font-extrabold text-lg tracking-tight text-content-primary hidden min-[400px]:inline">
                Unisphere
              </span>
            </Link>

            <span className="text-border-dark select-none">/</span>
            <span className="text-sm font-semibold text-content-secondary truncate">
              {title}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold text-content-secondary hover:text-content-primary bg-surface-soft hover:bg-surface-muted border border-border rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex-1">
        {/* Document Header Banner */}
        <div className="border-b border-border/80 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <BadgeIcon className="w-3.5 h-3.5" />
            <span>{badgeText}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-content-primary">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-content-secondary leading-relaxed max-w-4xl text-pretty">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-medium text-content-tertiary">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-content-secondary" />
              <span>Effective Date: </span>
              <span className="font-semibold text-content-secondary">
                {effectiveDate}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-content-secondary" />
              <span>Version: </span>
              <span className="font-semibold text-content-secondary">{version}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-content-secondary" />
              <span>Applicable Entity: </span>
              <span className="font-semibold text-content-secondary">Unisphere Academic Platform</span>
            </div>
          </div>
        </div>

        {/* Informational Callout Notice */}
        {noticeContent && (
          <div className="mb-10 p-5 rounded-2xl bg-surface-soft border border-border/80 flex items-start gap-3.5 text-sm text-content-secondary leading-relaxed">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>{noticeContent}</div>
          </div>
        )}

        {/* Two-Column Layout (Sidebar Navigation + Document Content) */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-start">
          
          {/* Left Column: Sticky Table of Contents & Related Legal Pages */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            
            {/* Table of Contents Box */}
            <div className="p-5 rounded-3xl bg-surface-soft border border-border shadow-2xs max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-content-primary mb-3.5 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  <span>On This Page</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-muted text-content-secondary">
                  {sections.length} Sections
                </span>
              </h2>

              <nav className="space-y-1 text-xs" aria-label="Table of contents">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`px-3 py-2 rounded-xl transition-all flex items-center justify-between font-semibold ${
                      activeSection === sec.id
                        ? 'bg-white text-primary shadow-xs border border-primary/20 font-bold'
                        : 'text-content-secondary hover:text-content-primary hover:bg-white/60'
                    }`}
                  >
                    <span className="truncate pr-2">{sec.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${activeSection === sec.id ? 'text-primary' : 'text-content-tertiary'}`} />
                  </a>
                ))}
              </nav>
            </div>

            {/* Related Policies Navigation Block */}
            <div className="p-5 rounded-3xl bg-surface-soft border border-border shadow-2xs">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-content-primary mb-3 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span>Policy Center</span>
              </h3>
              <nav className="space-y-1" aria-label="Related legal documents">
                {LEGAL_NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isCurrent = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`px-3 py-2 rounded-xl text-xs flex items-center justify-between font-medium transition-all ${
                        isCurrent
                          ? 'bg-primary text-white font-bold shadow-xs'
                          : 'text-content-secondary hover:text-content-primary hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-white' : 'text-content-tertiary'}`} />
                        <span className="truncate">{item.title}</span>
                      </div>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
                        isCurrent ? 'bg-white/20 text-white' : 'bg-surface-muted text-content-tertiary'
                      }`}>
                        {item.badge}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3.5 border-t border-border/80 text-[11px] text-content-tertiary">
                Need legal support? Contact{' '}
                <a href="mailto:legal@unisphere.edu" className="text-primary font-semibold hover:underline">
                  legal@unisphere.edu
                </a>
              </div>
            </div>

          </aside>

          {/* Right Column: Full Document Sections */}
          <div className="lg:col-span-8">
            
            {/* Mobile / Tablet Quick Navigation */}
            <div className="lg:hidden mb-10 p-5 rounded-2xl bg-surface-soft border border-border">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-content-primary mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <span>Jump to Section</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className="p-2 rounded-lg bg-white border border-border/70 text-content-secondary hover:text-primary font-medium flex items-center justify-between"
                  >
                    <span className="truncate pr-1">{sec.title}</span>
                    <ChevronRight className="w-3 h-3 text-content-tertiary shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Document Content */}
            <article className="space-y-12 text-content-primary text-sm sm:text-base leading-relaxed">
              {children}
            </article>

            {/* Document End Badge */}
            <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-content-secondary">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Document Active & Verified for 2026 Academic Term</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="font-bold text-primary hover:underline cursor-pointer"
                >
                  Back to Top ↑
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer (without altering Footer component) */}
      <Footer showCTA={false} />
    </div>
  );
};
