import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Layers, 
  ChevronRight,
  Info,
  Clock,
  Scale
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { AuthModal } from '../components/AuthModal';
import { DemoRequestModal } from '../components/DemoRequestModal';

export const TermsOfService: React.FC = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('acceptance');

  const sections = [
    { id: 'acceptance-of-terms', title: '1. Acceptance of Terms' },
    { id: 'about-unisphere', title: '2. About Unisphere' },
    { id: 'eligibility-access', title: '3. Eligibility & Account Access' },
    { id: 'acceptable-use', title: '4. Acceptable Use' },
    { id: 'user-responsibilities', title: '5. User Responsibilities' },
    { id: 'academic-information', title: '6. Academic & Institutional Information' },
    { id: 'intellectual-property', title: '7. Intellectual Property' },
    { id: 'third-party-services', title: '8. Third-Party Services' },
    { id: 'service-availability', title: '9. Service Availability' },
    { id: 'disclaimers', title: '10. Disclaimers' },
    { id: 'limitation-of-liability', title: '11. Limitation of Liability' },
    { id: 'suspension-termination', title: '12. Account Suspension or Termination' },
    { id: 'changes-to-terms', title: '13. Changes to Terms' },
    { id: 'contact-information', title: '14. Contact Information' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
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
  }, []);

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
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-border/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            >
              <img 
                src="/logo.png" 
                alt="Unisphere Logo" 
                className="w-9 h-9 object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200" 
              />
              <span className="font-extrabold text-lg tracking-tight text-content-primary">
                Unisphere
              </span>
            </Link>

            <span className="text-border-dark">/</span>
            <span className="text-sm font-semibold text-content-secondary hidden sm:inline">
              Terms of Service
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-content-secondary hover:text-content-primary bg-surface-soft hover:bg-surface-muted border border-border rounded-xl transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <button
              type="button"
              onClick={() => setAuthModalOpen(true)}
              className="hidden md:inline-flex px-4 py-2 text-xs font-bold text-white bg-primary hover:bg-primary-dark rounded-xl transition-all shadow-xs"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex-1">
        {/* Page Hero Header */}
        <div className="border-b border-border/80 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-content-primary">
            Terms of Service
          </h1>
          <p className="mt-3 text-base sm:text-lg text-content-secondary leading-relaxed">
            Standard terms, acceptable use policies, and operational agreements governing access to the Unisphere platform.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-content-tertiary">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-content-secondary" />
              <span>Effective Date: </span>
              <span className="font-semibold text-content-secondary">
                August 2026
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-content-secondary" />
              <span>Version: </span>
              <span className="font-semibold text-content-secondary">1.0</span>
            </div>
          </div>
        </div>

        {/* Notice Box */}
        <div className="mb-10 p-5 rounded-2xl bg-surface-soft border border-border/80 flex items-start gap-3.5 text-sm text-content-secondary leading-relaxed">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-content-primary">Institutional usage agreement: </span>
            Access to Unisphere is authorized for academic, collegiate, and campus administrative purposes. Use of the platform signifies compliance with these terms and standard institutional guidelines.
          </div>
        </div>

        {/* Quick Jump Navigation */}
        <div className="mb-12 p-6 rounded-3xl bg-surface-soft border border-border">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-content-primary mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" />
            <span>Table of Contents</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`px-3 py-2 rounded-xl transition-all flex items-center justify-between text-xs font-semibold ${
                  activeSection === sec.id
                    ? 'bg-white text-primary shadow-xs border border-primary/20 font-bold'
                    : 'text-content-secondary hover:text-content-primary hover:bg-white/60'
                }`}
              >
                <span>{sec.title}</span>
                <ChevronRight className={`w-3.5 h-3.5 ${activeSection === sec.id ? 'text-primary' : 'text-content-tertiary'}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Document Content Sections */}
        <div className="space-y-12 text-content-primary text-sm sm:text-base leading-relaxed">
          {/* 1. Acceptance of Terms */}
          <section id="acceptance-of-terms" className="scroll-mt-24 pt-4 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">1</span>
              <span>Acceptance of Terms</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and <strong className="text-content-primary">Unisphere</strong> ("the Platform", "we", "us", or "our"), governing your access to and use of the Unisphere web application, mobile interfaces, and academic services.
              </p>
              <p>
                By creating an account, logging in, or interacting with any portion of the Platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree to these Terms, you must not access or use Unisphere.
              </p>
            </div>
          </section>

          {/* 2. About Unisphere */}
          <section id="about-unisphere" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">2</span>
              <span>About Unisphere</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Unisphere is a unified academic and campus operations platform engineered to centralize academic management across five key stakeholder portals:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-content-primary">Student Portal:</strong> Attendance monitoring, timetable schedule, assignment submissions, internal grades, digital fee receipts, and digital gate pass requests.</li>
                <li><strong className="text-content-primary">Faculty Portal:</strong> Attendance logging, continuous assessment grading, course syllabus tracking, mentoring logs, and circulars.</li>
                <li><strong className="text-content-primary">HOD Portal:</strong> Department-wide performance metrics, faculty workload distribution, subject allocation, and curriculum analytics.</li>
                <li><strong className="text-content-primary">Parent Portal:</strong> Real-time student academic progress, verified attendance reports, institutional fee schedules, and direct mentor communication.</li>
                <li><strong className="text-content-primary">Admin Portal:</strong> Campus-wide role configuration, audit logging, system security governance, and broadcast communications.</li>
              </ul>
            </div>
          </section>

          {/* 3. Eligibility & Account Access */}
          <section id="eligibility-access" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">3</span>
              <span>Eligibility & Account Access</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Access to Unisphere is restricted to verified students, faculty members, parents/guardians, and authorized administrative staff.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong className="text-content-primary">Account Provisioning:</strong> Accounts are provisioned via institutional roster data or authenticated through Single Sign-On (SSO).</li>
                <li><strong className="text-content-primary">Accurate Information:</strong> You agree to maintain accurate, current, and complete profile information at all times.</li>
                <li><strong className="text-content-primary">Account Confidentiality:</strong> You are responsible for safeguarding your login credentials and for all activities occurring under your account. Sharing account credentials is strictly prohibited.</li>
              </ul>
            </div>
          </section>

          {/* 4. Acceptable Use */}
          <section id="acceptable-use" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">4</span>
              <span>Acceptable Use</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                You agree to use Unisphere solely for legitimate academic, educational, and authorized campus administrative purposes. You specifically agree NOT to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Attempt to bypass, alter, or compromise role-based permission boundaries or security mechanisms.</li>
                <li>Upload, transmit, or distribute malicious code, automated scripts, worms, or denial-of-service payloads.</li>
                <li>Impersonate another student, faculty member, administrator, or institutional official.</li>
                <li>Scrape, extract, or harvest database records or personal information without explicit authorization.</li>
                <li>Post defamatory, harassing, unlawful, or sexually explicit content within messaging channels, discussion boards, or assignment submissions.</li>
                <li>Falsify attendance records, grades, digital gate passes, or audit trails.</li>
              </ul>
            </div>
          </section>

          {/* 5. User Responsibilities */}
          <section id="user-responsibilities" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">5</span>
              <span>User Responsibilities</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Each user category carries distinct professional and ethical responsibilities:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                  <h4 className="font-bold text-content-primary text-sm mb-1">Students</h4>
                  <p className="text-xs text-content-secondary">Submit original academic work, adhere to digital academic integrity, review grade updates promptly, and follow campus gate pass protocols.</p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                  <h4 className="font-bold text-content-primary text-sm mb-1">Faculty & Mentors</h4>
                  <p className="text-xs text-content-secondary">Record attendance and grading timelines objectively and maintain confidential communication with students and parents.</p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                  <h4 className="font-bold text-content-primary text-sm mb-1">Parents & Guardians</h4>
                  <p className="text-xs text-content-secondary">Monitor academic updates, track ward progress constructively, and use official messaging for communication.</p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                  <h4 className="font-bold text-content-primary text-sm mb-1">HODs & Administrators</h4>
                  <p className="text-xs text-content-secondary">Enforce institutional compliance, uphold data privacy standards, and audit system permission delegations.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Academic & Institutional Information */}
          <section id="academic-information" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">6</span>
              <span>Academic & Institutional Information</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                All academic records, curricular syllabi, examination schedules, fee structures, and attendance policies displayed on the Platform are governed by the respective educational institution.
              </p>
              <p>
                While Unisphere facilitates automated aggregation, calculation, and reporting, final academic decisions regarding grade awards, attendance eligibility, and graduation clearance remain under the authority of the institution's Academic Council or designated authority.
              </p>
            </div>
          </section>

          {/* 7. Intellectual Property */}
          <section id="intellectual-property" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">7</span>
              <span>Intellectual Property</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                <strong className="text-content-primary">Platform IP:</strong> The Unisphere application software, interface design, brand identity, logos, algorithms, and source code are the proprietary intellectual property of Unisphere and its licensors.
              </p>
              <p>
                <strong className="text-content-primary">Institutional Content:</strong> Course materials, lecture notes, institutional syllabi, and official assets uploaded by the institution remain the property of the respective educational organization or faculty author.
              </p>
              <p>
                <strong className="text-content-primary">Student Submissions:</strong> Intellectual property in student projects, thesis submissions, and coursework is governed by standard institutional academic guidelines.
              </p>
            </div>
          </section>

          {/* 8. Third-Party Services */}
          <section id="third-party-services" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">8</span>
              <span>Third-Party Services</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Unisphere may interface with third-party service providers (such as cloud hosting infrastructure, payment gateways for fee transactions, or SMS delivery networks).
              </p>
              <p>
                Your interactions with third-party utilities are subject to the respective terms and conditions of those external vendors. Unisphere is not liable for service disruptions caused by external third-party integrations outside our reasonable control.
              </p>
            </div>
          </section>

          {/* 9. Service Availability */}
          <section id="service-availability" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">9</span>
              <span>Service Availability</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                We strive to maintain continuous platform uptime and reliability. However, Unisphere does not guarantee uninterrupted 100% service availability.
              </p>
              <p>
                Routine maintenance, server upgrades, network outages, or unforeseen emergency incidents may result in temporary service interruptions. Scheduled maintenance windows will be announced in advance through the institutional portal feed whenever feasible.
              </p>
            </div>
          </section>

          {/* 10. Disclaimers */}
          <section id="disclaimers" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">10</span>
              <span>Disclaimers</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the platform will be error-free, completely bug-free, or that any defects will be immediately resolved. Users are advised to maintain independent verification for mission-critical academic deliverables.
              </p>
            </div>
          </section>

          {/* 11. Limitation of Liability */}
          <section id="limitation-of-liability" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">11</span>
              <span>Limitation of Liability</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                To the maximum extent permitted by applicable law, in no event shall Unisphere or its developers be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, loss of goodwill, system downtime, or failure to submit assignments due to network interruptions.
              </p>
            </div>
          </section>

          {/* 12. Account Suspension or Termination */}
          <section id="suspension-termination" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">12</span>
              <span>Account Suspension or Termination</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Platform Administrators reserve the right to suspend or terminate user accounts:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Upon violation of these Terms of Service or institutional codes of conduct.</li>
                <li>In response to security incidents, suspected credential compromise, or malicious activity.</li>
                <li>Upon formal graduation, academic withdrawal, resignation, or termination of enrollment/employment.</li>
              </ul>
            </div>
          </section>

          {/* 13. Changes to Terms */}
          <section id="changes-to-terms" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">13</span>
              <span>Changes to Terms</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                We reserve the right to revise or modify these Terms at any time. When updates occur, the updated terms will be posted on this page with an updated "Effective Date".
              </p>
              <p>
                Continued use of Unisphere following the publication of changes signifies acceptance of the updated terms.
              </p>
            </div>
          </section>

          {/* 14. Contact Information */}
          <section id="contact-information" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">14</span>
              <span>Contact Information</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                For legal inquiries, terms clarification, or reporting violations of these Terms of Service, please reach out to:
              </p>
              <div className="mt-4 p-6 rounded-2xl bg-surface-soft border border-border space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                  <strong className="text-content-primary min-w-[140px]">Support & Legal Desk:</strong>
                  <a href="mailto:heydigitals.care@gmail.com" className="text-primary hover:underline font-semibold">
                    heydigitals.care@gmail.com
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                  <strong className="text-content-primary min-w-[140px]">Phone Contact:</strong>
                  <a href="tel:+919080407021" className="text-content-primary font-semibold hover:text-primary">
                    +91 9080407021
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                  <strong className="text-content-primary min-w-[140px]">Official Website:</strong>
                  <a href="https://heydigital.work" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                    heydigital.work
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-14 pt-8 border-t border-border/80 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-content-primary bg-surface-soft hover:bg-surface-muted border border-border rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Application Home</span>
          </Link>

          <Link
            to="/privacy-policy"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-primary hover:text-primary-dark bg-primary-subtle hover:bg-primary/10 border border-primary/20 rounded-xl transition-all"
          >
            <span>View Privacy Policy</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer 
        onSignInClick={() => setAuthModalOpen(true)} 
        onGetStartedClick={() => setDemoModalOpen(true)} 
      />

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialRole="student"
      />

      <DemoRequestModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
};

export default TermsOfService;
