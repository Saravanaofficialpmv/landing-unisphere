import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  Layers, 
  ChevronRight,
  Info,
  Clock
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { AuthModal } from '../components/AuthModal';
import { DemoRequestModal } from '../components/DemoRequestModal';


export const PrivacyPolicy: React.FC = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('intro');

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-collected', title: '2. Information We Collect' },
    { id: 'how-we-use', title: '3. How We Use Information' },
    { id: 'authentication', title: '4. Authentication & Account Information' },
    { id: 'academic-data', title: '5. Academic & Institutional Data' },
    { id: 'data-storage', title: '6. Data Storage' },
    { id: 'third-party', title: '7. Third-Party Services' },
    { id: 'data-security', title: '8. Data Security' },
    { id: 'data-retention', title: '9. Data Retention' },
    { id: 'user-rights', title: '10. User Rights' },
    { id: 'children-student-privacy', title: '11. Children / Student Privacy' },
    { id: 'policy-changes', title: '12. Changes to This Privacy Policy' },
    { id: 'contact-us', title: '13. Contact Us' },
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
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm shadow-primary/20 group-hover:scale-105 transition-transform">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.2" strokeDasharray="5 3" />
                  <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                  <path d="M5 5L7 7M19 5L17 7M5 19L7 17M19 19L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-content-primary">
                  Unisphere
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary-subtle text-primary border border-primary/20">
                  SRM
                </span>
              </div>
            </Link>

            <span className="text-border-dark">/</span>
            <span className="text-sm font-semibold text-content-secondary hidden sm:inline">
              Privacy Policy
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
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-content-primary">
            Privacy Policy
          </h1>
          <p className="mt-3 text-base sm:text-lg text-content-secondary leading-relaxed">
            How Unisphere collects, protects, manages, and utilizes institutional and user data across academic portals.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-content-tertiary">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-content-secondary" />
              <span>Effective Date: </span>
              <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded font-mono font-semibold">
                [Effective Date]
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-content-secondary" />
              <span>Version: </span>
              <span className="font-semibold text-content-secondary">1.0</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>Institution: </span>
              <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded font-mono font-semibold">
                [Institution Name]
              </span>
            </div>
          </div>
        </div>

        {/* Notice Box */}
        <div className="mb-10 p-5 rounded-2xl bg-surface-soft border border-border/80 flex items-start gap-3.5 text-sm text-content-secondary leading-relaxed">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-content-primary">Notice regarding institutional implementation: </span>
            Unisphere is deployed as an academic management solution for <span className="font-mono text-xs px-1.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">[Institution Name]</span>. This policy outlines general data handling practices. Specific institutional retention bylaws and access governance are administered by the subscribing educational organization.
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
          {/* 1. Introduction */}
          <section id="introduction" className="scroll-mt-24 pt-4 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">1</span>
              <span>Introduction</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Welcome to <strong className="text-content-primary">Unisphere</strong> ("the Platform", "we", "our", or "us"). Unisphere is a unified academic and campus super-application developed for use by students, faculty, heads of departments (HODs), parents, and academic administrators of <span className="font-mono text-xs px-1.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">[Institution Name]</span>.
              </p>
              <p>
                We are committed to maintaining the confidentiality, integrity, and privacy of all personal, academic, and administrative data processed through the Platform. This Privacy Policy details the types of information collected, how that data is processed and stored, who can access it, and the rights available to users and affiliated institutions.
              </p>
              <p>
                By accessing or using Unisphere, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy.
              </p>
            </div>
          </section>

          {/* 2. Information We Collect */}
          <section id="information-collected" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">2</span>
              <span>Information We Collect</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Unisphere collects information necessary to deliver comprehensive academic management, communication, and administrative services. Information collected is classified into the following categories:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-content-primary">Account Identification Data:</strong> Full name, official institutional email address, institutional registration/roll number, employee identification ID, assigned academic department, and user role.
                </li>
                <li>
                  <strong className="text-content-primary">Academic Records:</strong> Course enrollments, attendance records, internal test scores, semester grades, GPA/CGPA calculations, timetable schedules, laboratory allocations, and assignment submissions.
                </li>
                <li>
                  <strong className="text-content-primary">Campus & Administrative Information:</strong> Hostel room assignments, gate pass logs, leave applications, cafeteria or fee ledger records, and official campus circular responses.
                </li>
                <li>
                  <strong className="text-content-primary">Communications & Feedback:</strong> Messages exchanged within verified portal channels, support tickets, advisor notes, parent-faculty meeting records, and feedback forms.
                </li>
                <li>
                  <strong className="text-content-primary">Technical & Usage Logs:</strong> Device type, browser user agent, IP address for security auditing, session timestamps, and page interaction telemetry for service optimization.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. How We Use Information */}
          <section id="how-we-use" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">3</span>
              <span>How We Use Information</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Information processed through Unisphere is strictly utilized for educational and institutional operations, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                  <h4 className="font-bold text-content-primary text-sm mb-1">Academic Administration</h4>
                  <p className="text-xs text-content-secondary">Facilitating automated grade calculation, attendance tracking, course registration, exam hall scheduling, and syllabus progression.</p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                  <h4 className="font-bold text-content-primary text-sm mb-1">Inter-Role Communication</h4>
                  <p className="text-xs text-content-secondary">Enabling seamless, authenticated messaging between students, faculty mentors, department heads, and parents.</p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                  <h4 className="font-bold text-content-primary text-sm mb-1">Campus Safety & Governance</h4>
                  <p className="text-xs text-content-secondary">Managing digital gate passes, hostel curfews, emergency institutional alerts, and verified identity verification.</p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-soft border border-border">
                  <h4 className="font-bold text-content-primary text-sm mb-1">Platform Security & Reliability</h4>
                  <p className="text-xs text-content-secondary">Detecting unauthorized access attempts, monitoring uptime, debugging platform performance, and enforcing role privileges.</p>
                </div>
              </div>
              <p className="mt-3">
                We do not sell, rent, or monetize personal or academic data to third-party advertising networks.
              </p>
            </div>
          </section>

          {/* 4. Authentication & Account Information */}
          <section id="authentication" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">4</span>
              <span>Authentication & Account Information</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Access to Unisphere requires role-based authentication credentials provisioned either directly by <span className="font-mono text-xs px-1.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">[Institution Name]</span> or authenticated via federated institutional Single Sign-On (SSO).
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-content-primary">Credential Security:</strong> User passwords are never stored in plaintext. Cryptographic hashing algorithms and salted tokens are utilized for authentication flows.
                </li>
                <li>
                  <strong className="text-content-primary">Role-Based Access Control (RBAC):</strong> Every authenticated user is bound to one or more verified profiles (Student, Faculty, HOD, Parent, Administrator). Access to internal data is strictly segregated based on minimum requisite permissions.
                </li>
                <li>
                  <strong className="text-content-primary">Session Management:</strong> Authentication tokens expire automatically upon inactivity to prevent unauthorized session hijacking on shared laboratory or library workstations.
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Academic & Institutional Data */}
          <section id="academic-data" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">5</span>
              <span>Academic & Institutional Data</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Academic and institutional records uploaded to or generated within Unisphere remain the property and responsibility of <span className="font-mono text-xs px-1.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">[Institution Name]</span>.
              </p>
              <p>
                Unisphere acts as a data processor on behalf of the educational institution. The institution remains the primary data controller for all student academic transcripts, attendance rosters, faculty evaluations, and department analytics.
              </p>
            </div>
          </section>

          {/* 6. Data Storage */}
          <section id="data-storage" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">6</span>
              <span>Data Storage</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Data processed by Unisphere is hosted on secure cloud infrastructure located in <span className="font-mono text-xs px-1.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">[Hosting Region / Jurisdiction, e.g., India / Regional Data Centers]</span> adhering to applicable local data residency regulations.
              </p>
              <p>
                Database instances employ encrypted storage volumes, automated point-in-time backups, and high-availability replication to ensure platform resilience and prevent data loss.
              </p>
            </div>
          </section>

          {/* 7. Third-Party Services */}
          <section id="third-party" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">7</span>
              <span>Third-Party Services</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                To provide critical communication, cloud computing, and infrastructure capabilities, Unisphere may integrate with vetted third-party service providers, which may include:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-content-primary">Cloud Infrastructure:</strong> High-performance server hosting, content delivery networks (CDNs), and encrypted database engines.</li>
                <li><strong className="text-content-primary">Email & SMS Gateways:</strong> Providers utilized for delivering one-time passwords (OTP), emergency notifications, and academic circulars.</li>
                <li><strong className="text-content-primary">Identity & SSO Providers:</strong> Institutional LDAP/OAuth2 or SAML authentication bridges where configured.</li>
              </ul>
              <p className="mt-2">
                Third-party partners are contracted under strict confidentiality terms and are prohibited from utilizing institutional data for non-platform purposes.
              </p>
            </div>
          </section>

          {/* 8. Data Security */}
          <section id="data-security" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">8</span>
              <span>Data Security</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                We employ technical and organizational safeguards designed to protect personal and academic information against unauthorized access, loss, misuse, or alteration:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong className="text-content-primary">Encryption in Transit:</strong> All communications between user browsers/mobile devices and Unisphere servers are encrypted using modern Transport Layer Security (TLS/HTTPS).</li>
                <li><strong className="text-content-primary">Encryption at Rest:</strong> Core database stores, file attachments, and database backups are encrypted at rest using industry-standard AES cryptography.</li>
                <li><strong className="text-content-primary">Strict Role Isolation:</strong> Architecture ensures users can only query records associated with their verified permissions.</li>
                <li><strong className="text-content-primary">Continuous Monitoring:</strong> Real-time logging of administrative actions, rate limiting on authentication endpoints, and threat mitigation filters.</li>
              </ul>
            </div>
          </section>

          {/* 9. Data Retention */}
          <section id="data-retention" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">9</span>
              <span>Data Retention</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Personal and academic records are retained for the duration of the user's active affiliation with <span className="font-mono text-xs px-1.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">[Institution Name]</span>, and thereafter in accordance with the institution's mandatory academic record archiving policies and applicable statutory requirements:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-content-primary">Active Academic Records:</strong> Retained throughout a student's graduation cycle and active administrative lifecycle.</li>
                <li><strong className="text-content-primary">Audit & Security Logs:</strong> Retained for <span className="font-mono text-xs px-1.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">[Retention Period, e.g., 12–24 months]</span> for compliance and forensic analysis before automated purging.</li>
                <li><strong className="text-content-primary">Account Deactivation:</strong> Upon formal institutional departure or contract conclusion, non-archived user account credentials are decommissioned.</li>
              </ul>
            </div>
          </section>

          {/* 10. User Rights */}
          <section id="user-rights" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">10</span>
              <span>User Rights</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Subject to institutional verification and statutory guidelines, authorized users possess the following rights regarding their personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong className="text-content-primary">Right of Access:</strong> Review your profile, academic attendance records, internal grades, and communication logs directly through your portal dashboard.</li>
                <li><strong className="text-content-primary">Right to Rectification:</strong> Request correction of inaccurate personal or contact details through your departmental coordinator or campus administrator.</li>
                <li><strong className="text-content-primary">Right to Inquire:</strong> Submit formal privacy or data handling queries to the designated institutional data administrator.</li>
              </ul>
            </div>
          </section>

          {/* 11. Children / Student Privacy */}
          <section id="children-student-privacy" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">11</span>
              <span>Children / Student Privacy</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                Unisphere is designed for higher education institutions, collegiate universities, and affiliated secondary/higher secondary campuses.
              </p>
              <p>
                Where students under the age of majority access the platform, parental or institutional legal guardian consent is administered directly by <span className="font-mono text-xs px-1.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">[Institution Name]</span> during enrollment. We do not knowingly solicit personal information directly from children outside the authorized institutional context.
              </p>
            </div>
          </section>

          {/* 12. Changes to This Privacy Policy */}
          <section id="policy-changes" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">12</span>
              <span>Changes to This Privacy Policy</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                We may periodically update this Privacy Policy to reflect modifications to platform capabilities, legal requirements, or institutional operational agreements.
              </p>
              <p>
                When modifications are published, the "Effective Date" at the top of this document will be revised accordingly. Material updates will be communicated through the Unisphere announcement feed or institutional email notification.
              </p>
            </div>
          </section>

          {/* 13. Contact Us */}
          <section id="contact-us" className="scroll-mt-24 pt-8 border-t border-border/60">
            <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center">13</span>
              <span>Contact Us</span>
            </h2>
            <div className="space-y-3 text-content-secondary">
              <p>
                For questions, feedback, or concerns regarding this Privacy Policy or data handling on Unisphere, please reach out to our team:
              </p>
              <div className="mt-4 p-6 rounded-2xl bg-surface-soft border border-border space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                  <strong className="text-content-primary min-w-[140px]">Support & Inquiries:</strong>
                  <a href="mailto:heydigitals.care@gmail.com" className="text-primary hover:underline font-semibold">
                    heydigitals.care@gmail.com
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                  <strong className="text-content-primary min-w-[140px]">Phone Support:</strong>
                  <a href="tel:+919080407021" className="text-content-primary font-semibold hover:text-primary">
                    +91 9080407021
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                  <strong className="text-content-primary min-w-[140px]">Website:</strong>
                  <a href="https://heydot.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                    heydot.in
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                  <strong className="text-content-primary min-w-[140px]">Institution:</strong>
                  <span className="font-mono text-xs px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded w-fit">[Institution Name]</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                  <strong className="text-content-primary min-w-[140px]">Campus Address:</strong>
                  <span className="font-mono text-xs px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded w-fit">[Institution Legal Address]</span>
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
            to="/terms-of-service"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-primary hover:text-primary-dark bg-primary-subtle hover:bg-primary/10 border border-primary/20 rounded-xl transition-all"
          >
            <span>View Terms of Service</span>
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

export default PrivacyPolicy;
