import { 
  Shield, 
  Users, 
  Database, 
  Lock, 
  GraduationCap, 
  BookOpen, 
  Building2, 
  HeartHandshake, 
  UserCog, 
  CheckCircle, 
  Server, 
  Mail
} from 'lucide-react';
import { LegalLayout, SectionItem } from '../components/LegalLayout';

export const PrivacyPolicy: React.FC = () => {
  const sections: SectionItem[] = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-we-collect', title: '2. Information We Collect' },
    { id: 'academic-institutional-data', title: '3. Academic & Institutional Data' },
    { id: 'how-we-use-information', title: '4. How We Use Information' },
    { id: 'authentication-accounts', title: '5. Authentication & Accounts' },
    { id: 'role-based-access', title: '6. Role-Based Access & Permissions' },
    { id: 'data-storage-security', title: '7. Data Storage & Security' },
    { id: 'data-sharing-disclosure', title: '8. Data Sharing & Disclosure' },
    { id: 'third-party-services', title: '9. Third-Party Services' },
    { id: 'data-retention', title: '10. Data Retention' },
    { id: 'user-rights-requests', title: '11. User Rights & Data Requests' },
    { id: 'cookies-analytics', title: '12. Cookies & Analytics' },
    { id: 'children-student-data', title: '13. Children\'s & Student Data' },
    { id: 'policy-changes', title: '14. Changes to This Policy' },
    { id: 'contact-privacy-requests', title: '15. Contact & Privacy Requests' },
  ];

  const noticeContent = (
    <div>
      <span className="font-bold text-content-primary">Institutional Data Architecture Notice: </span>
      UNISPHERE operates primarily as a specialized educational software provider and Data Processor to subscribing colleges, universities, and educational institutions (the Data Controllers). Inquiries regarding institutional student rosters, academic grading policies, or university-mandated retention periods should be coordinated directly with your institution's registrar or IT administrator.
    </div>
  );

  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How UNISPHERE collects, safeguards, manages, and governs academic and institutional data across connected higher education operations."
      badgeText="Data Governance & Privacy"
      badgeIcon={Shield}
      effectiveDate="September 2026"
      version="2.4"
      sections={sections}
      noticeContent={noticeContent}
    >
      {/* 1. Introduction */}
      <section id="introduction" className="scroll-mt-24 pt-4 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">1</span>
          <span>Introduction</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Welcome to <strong className="text-content-primary font-bold">UNISPHERE</strong> ("the Platform", "we", "our", or "us"). UNISPHERE is a unified academic operations operating system designed specifically for higher education institutions, connecting students, faculty members, department heads, parents, and administrative leadership.
          </p>
          <p>
            We recognize that academic records, campus communications, and student progress metrics are inherently sensitive and must be handled with the highest standard of confidentiality and institutional integrity. This Privacy Policy details our data governance practices, describing what information is processed, the lawful grounds for processing, the precise access boundaries enforced across user roles, and how we protect institutional data sovereignty.
          </p>
          <p>
            By accessing UNISPHERE through your institution's portal or visiting our public web domains, you acknowledge that your information is handled in accordance with this Privacy Policy and applicable institutional agreements.
          </p>
        </div>
      </section>

      {/* 2. Information We Collect */}
      <section id="information-we-collect" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">2</span>
          <span>Information We Collect</span>
        </h2>
        <div className="space-y-4 text-content-secondary">
          <p>
            We collect and process only the information strictly necessary to facilitate institutional operations, course management, identity verification, and cross-stakeholder communication:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-2xl bg-surface-soft border border-border">
              <h3 className="font-bold text-content-primary text-sm mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Account & Profile Data</span>
              </h3>
              <p className="text-xs leading-relaxed">
                Full legal name, institutional email address, employee ID or student enrollment/roll number, academic program, semester/year, profile photograph, and contact phone number provided by the institution or user.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-soft border border-border">
              <h3 className="font-bold text-content-primary text-sm mb-2 flex items-center gap-2">
                <Server className="w-4 h-4 text-primary" />
                <span>Technical & Telemetry Data</span>
              </h3>
              <p className="text-xs leading-relaxed">
                IP address, device operating system, browser type and version, session timestamps, network latency metrics, and essential authorization tokens needed to verify active portal sessions.
              </p>
            </div>
          </div>

          <p>
            We do not collect sensitive biometric data, credit bureau histories, or personal geolocation tracking. Location data is limited to coarse server-side IP geolocation strictly used to detect anomalous account takeover attempts.
          </p>
        </div>
      </section>

      {/* 3. Academic and Institutional Data */}
      <section id="academic-institutional-data" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">3</span>
          <span>Academic and Institutional Data</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE acts as a secure repository for institutional academic workflows. Data processed under this category includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Attendance & Session Records:</strong> Lecture attendance records, laboratory presence logs, leave applications, medical duty certifications, and attendance threshold calculations.</li>
            <li><strong className="text-content-primary font-semibold">Assessment & Curricular Metrics:</strong> Internal continuous assessment marks, semester examination results, GPA/CGPA calculations, course credits, and transcript records.</li>
            <li><strong className="text-content-primary font-semibold">Timetables & Workload Allocations:</strong> Classroom schedules, laboratory allocations, faculty course distribution matrices, and institutional academic calendars.</li>
            <li><strong className="text-content-primary font-semibold">Institutional Circulars & Notices:</strong> Official campus announcements, department circulars, emergency campus alerts, and academic deadlines.</li>
          </ul>
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-blue-950 text-xs sm:text-sm">
            <strong className="font-bold">Ownership Clarification: </strong>
            All student grades, syllabus materials, faculty lecture schedules, and institutional records remain the exclusive property of the contracting educational institution. UNISPHERE does not claim ownership over any academic data.
          </div>
        </div>
      </section>

      {/* 4. How We Use Information */}
      <section id="how-we-use-information" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">4</span>
          <span>How We Use Information</span>
        </h2>
        <div className="space-y-3 text-content-secondary">
          <p>
            We process collected information solely for legitimate educational operational purposes:
          </p>
          <div className="space-y-2.5 my-3 text-sm">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-soft border border-border/60">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong className="text-content-primary">Delivering Core Academic Workflows:</strong> Generating daily student/faculty timetables, calculating real-time attendance percentages, and providing automated gradebook rollups.</div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-soft border border-border/60">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong className="text-content-primary">Institutional Communication:</strong> Delivering administrative notices, urgent weather or campus safety announcements, and verified parent progress updates.</div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-soft border border-border/60">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong className="text-content-primary">Platform Integrity & Security:</strong> Auditing administrative modifications, preventing unauthorized access attempts, and verifying token validity.</div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-soft border border-border/60">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong className="text-content-primary">Diagnostic Optimization:</strong> Measuring endpoint latency and platform stability during high-concurrency campus events like semester result releases.</div>
            </div>
          </div>
          <p className="text-xs text-content-tertiary">
            We never use student, faculty, or institutional data to construct commercial user profiles, deliver targeted advertising, or train third-party public machine learning models.
          </p>
        </div>
      </section>

      {/* 5. Authentication and Account Information */}
      <section id="authentication-accounts" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">5</span>
          <span>Authentication and Account Information</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            User accounts are provisioned and authorized in partnership with your institution's central directory:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Institutional SSO Integration:</strong> Where configured, UNISPHERE authenticates accounts via standard institutional Single Sign-On (SAML 2.0, OpenID Connect, Google Workspace for Education, or Microsoft Entra ID). UNISPHERE does not store raw user directory passwords in these configurations.</li>
            <li><strong className="text-content-primary font-semibold">Direct Credential Security:</strong> For deployments using native UNISPHERE authentication, passwords are encrypted using salted, adaptive cryptographic hashes (Argon2 / bcrypt). Passwords are never stored or transmitted in plaintext.</li>
            <li><strong className="text-content-primary font-semibold">Session Management:</strong> Authenticated sessions utilize cryptographically signed JSON Web Tokens (JWT) or secure HTTP-only cookies with strict expiration thresholds and automatic idle timeouts.</li>
          </ul>
        </div>
      </section>

      {/* 6. Role-Based Access and Permissions */}
      <section id="role-based-access" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">6</span>
          <span>Role-Based Access and Permissions</span>
        </h2>
        <div className="space-y-4 text-content-secondary">
          <p>
            UNISPHERE enforces a strict Role-Based Access Control (RBAC) architecture. Data visibility is strictly compartmentalized based on five distinct institutional personas:
          </p>

          <div className="space-y-3.5 my-4">
            {/* Student Role */}
            <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/30">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#2563EB]/10 text-[#2563EB] font-bold text-xs">
                  <GraduationCap className="w-4 h-4" />
                  <span>Student Persona</span>
                </span>
                <span className="text-[11px] font-semibold text-content-tertiary">Scope: Personal Records Only</span>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                Students can only view their own attendance logs, personal class schedule, individual grades, course syllabus, and official campus announcements. Students have <strong className="text-content-primary">zero visibility</strong> into peer grades, other students' contact numbers, or internal faculty evaluations.
              </p>
            </div>

            {/* Faculty Role */}
            <div className="p-4 rounded-2xl border border-purple-200 bg-purple-50/30">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#7C3AED]/10 text-[#7C3AED] font-bold text-xs">
                  <BookOpen className="w-4 h-4" />
                  <span>Faculty Persona</span>
                </span>
                <span className="text-[11px] font-semibold text-content-tertiary">Scope: Assigned Courses & Batches</span>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                Faculty can record attendance, input evaluation scores, upload lesson plans, and view rosters exclusively for the classes and courses officially assigned to them by their HOD. Faculty cannot view records from unassigned departments.
              </p>
            </div>

            {/* HOD Role */}
            <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/30">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#D97706]/10 text-[#D97706] font-bold text-xs">
                  <Building2 className="w-4 h-4" />
                  <span>Head of Department (HOD)</span>
                </span>
                <span className="text-[11px] font-semibold text-content-tertiary">Scope: Department-Wide Oversight</span>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                HODs have oversight over departmental curriculum pacing, faculty workload balances, attendance anomalies across all departmental batches, elective subject allocations, and departmental leave escalations.
              </p>
            </div>

            {/* Parent Role */}
            <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/30">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#059669]/10 text-[#059669] font-bold text-xs">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Parent / Guardian Persona</span>
                </span>
                <span className="text-[11px] font-semibold text-content-tertiary">Scope: Linked Ward(s) Only</span>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                Parents are granted read-only visibility into their officially registered ward's verified attendance summary, published grade reports, institutional fee receipts, and official university notices. Parents cannot view any other student's information or communicate with other parents.
              </p>
            </div>

            {/* Admin Role */}
            <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#DC2626]/10 text-[#DC2626] font-bold text-xs">
                  <UserCog className="w-4 h-4" />
                  <span>System Administrator</span>
                </span>
                <span className="text-[11px] font-semibold text-content-tertiary">Scope: Campus Infrastructure & Governance</span>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                Designated institutional administrators manage master user rosters, configure term dates, oversee campus-wide integrations, and review security audit trails. Administrative actions are logged in immutable system audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Data Storage and Security */}
      <section id="data-storage-security" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">7</span>
          <span>Data Storage and Security</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            We implement defense-in-depth security measures to protect institutional information against unauthorized access, loss, or destruction:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-surface-soft border border-border">
              <div className="flex items-center gap-2 text-content-primary font-bold mb-1.5">
                <Lock className="w-4 h-4 text-primary" />
                <span>Encryption Standards</span>
              </div>
              <p className="text-content-secondary leading-relaxed">
                All data in transit is encrypted using modern TLS 1.3 / HTTPS. All persistent data, database storage, and backups are encrypted at rest using AES-256 standard encryption algorithms.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-soft border border-border">
              <div className="flex items-center gap-2 text-content-primary font-bold mb-1.5">
                <Database className="w-4 h-4 text-primary" />
                <span>Tenant Segregation</span>
              </div>
              <p className="text-content-secondary leading-relaxed">
                Institutions operate within strictly segregated multi-tenant database partitions. Rigorous tenant ID validation occurs at the database query layer to prevent cross-institution data leakage.
              </p>
            </div>
          </div>
          <p className="text-xs text-content-tertiary">
            While we apply comprehensive, industry-standard technical and organizational safeguards, no internet-based software architecture can guarantee 100% invulnerability. We maintain an incident response protocol to remediate potential vulnerabilities promptly.
          </p>
        </div>
      </section>

      {/* 8. Data Sharing and Disclosure */}
      <section id="data-sharing-disclosure" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">8</span>
          <span>Data Sharing and Disclosure</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p className="font-semibold text-content-primary">
            We never sell, rent, monetize, or trade student, faculty, or institutional data to advertising brokers, market research firms, or commercial third parties.
          </p>
          <p>
            Data disclosure is strictly confined to the following scenarios:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Institutional Operation:</strong> Data is disclosed to authorized personnel within your own educational institution in accordance with their assigned roles.</li>
            <li><strong className="text-content-primary font-semibold">Authorized Sub-Processors:</strong> Vetted infrastructure providers (such as cloud hosting, transactional notification dispatchers) bound by written Data Processing Agreements (DPAs).</li>
            <li><strong className="text-content-primary font-semibold">Legal & Regulatory Mandates:</strong> Where required by valid subpoena, court order, or governmental educational oversight body, following prior notification to the institution unless legally prohibited.</li>
          </ul>
        </div>
      </section>

      {/* 9. Third-Party Services */}
      <section id="third-party-services" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">9</span>
          <span>Third-Party Services</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE integrates with select, enterprise-grade technology partners to deliver specific technical capabilities:
          </p>
          <div className="space-y-2 text-xs sm:text-sm my-3">
            <div className="p-3 rounded-xl bg-surface-soft border border-border flex items-start gap-3">
              <Server className="w-4 h-4 text-content-secondary shrink-0 mt-0.5" />
              <div>
                <strong className="text-content-primary">Cloud Infrastructure: </strong>
                Data is hosted on ISO 27001 and SOC 2 Type II compliant cloud facilities located within recognized domestic data centers.
              </div>
            </div>
            <div className="p-3 rounded-xl bg-surface-soft border border-border flex items-start gap-3">
              <Mail className="w-4 h-4 text-content-secondary shrink-0 mt-0.5" />
              <div>
                <strong className="text-content-primary">Transactional Communications: </strong>
                SMS and automated email gateways for urgent emergency alerts and password resets under strict zero-retention transit contracts.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Data Retention */}
      <section id="data-retention" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">10</span>
          <span>Data Retention</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Because UNISPHERE acts on behalf of educational institutions, retention schedules are determined by university bylaws and regulatory education guidelines:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Active Enrollment & Service:</strong> Records are retained throughout the student's enrollment or faculty member's active tenure.</li>
            <li><strong className="text-content-primary font-semibold">Graduated & Alumni Records:</strong> Transcript and graduation records are archived in compliance with statutory university archival regulations.</li>
            <li><strong className="text-content-primary font-semibold">Contract Termination:</strong> Upon termination of an institution's service agreement, institutional data is exported in standard formats to the institution and securely scrubbed from production databases within 90 days.</li>
          </ul>
        </div>
      </section>

      {/* 11. User Rights and Data Requests */}
      <section id="user-rights-requests" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">11</span>
          <span>User Rights and Data Requests</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Users possess specific rights regarding their personal information under applicable privacy frameworks:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-1">Right to Access & Review</strong>
              Review personal information, course registrations, and attendance logs directly through the portal.
            </div>
            <div className="p-3.5 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-1">Right to Rectification</strong>
              Request correction of inaccurate biographical or contact information via the campus registrar.
            </div>
            <div className="p-3.5 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-1">Right to Data Portability</strong>
              Export personal academic schedules and transcript summaries in standard structured digital formats.
            </div>
            <div className="p-3.5 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-1">Right to Restriction / Deletion</strong>
              Subject to institutional statutory duties to maintain permanent academic records.
            </div>
          </div>
          <p className="text-xs text-content-tertiary">
            Because student and faculty rosters are governed by the institution, data modification and deletion requests are routed to the subscribing institution's designated privacy officer or registrar.
          </p>
        </div>
      </section>

      {/* 12. Cookies and Analytics */}
      <section id="cookies-analytics" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">12</span>
          <span>Cookies and Analytics</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE utilizes local web storage and essential session cookies strictly required for the platform to function securely:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Strictly Necessary Cookies:</strong> Cryptographic session tokens, CSRF protection identifiers, and load balancer affinity tokens.</li>
            <li><strong className="text-content-primary font-semibold">Functional Storage:</strong> Storing user UI preferences such as navigation drawer toggle states, active semester filters, and language selections.</li>
            <li><strong className="text-content-primary font-semibold">Platform Diagnostics:</strong> Aggregate, anonymized performance telemetry (page load durations, render timings) without individual user tracking.</li>
          </ul>
          <p className="text-xs text-content-tertiary">
            For granular technical information regarding specific cookies and local storage keys, please consult our dedicated <a href="/cookie-policy" className="text-primary font-semibold hover:underline">Cookie Policy</a>.
          </p>
        </div>
      </section>

      {/* 13. Children's / Student Data */}
      <section id="children-student-data" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">13</span>
          <span>Children's / Student Data</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE is built primarily for higher education institutions where enrolled students are typically aged 17 and older. However, where minor students are enrolled in dual-enrollment or collegiate preparatory programs:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>We process student information solely at the direction of the educational institution for legitimate educational purposes under relevant academic exemptions (such as FERPA alignments).</li>
            <li>Parental access is mediated strictly through the verified Parent Portal, linked exclusively to the parent or legal guardian's registered account.</li>
            <li>We do not solicit, require, or display personal information from minor students for marketing or commercial profiling.</li>
          </ul>
        </div>
      </section>

      {/* 14. Changes to This Privacy Policy */}
      <section id="policy-changes" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">14</span>
          <span>Changes to This Privacy Policy</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            We may periodically update this Privacy Policy to reflect platform feature additions, regulatory adjustments, or changes in data protection standards.
          </p>
          <p>
            When material changes are made, we will notify institutional administrators via registered email and post a conspicuous advisory banner within the platform notice feed. Continued use of UNISPHERE after the effective date of an updated policy constitutes acknowledgment of the revised terms.
          </p>
        </div>
      </section>

      {/* 15. Contact / Privacy Requests */}
      <section id="contact-privacy-requests" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">15</span>
          <span>Contact / Privacy Requests</span>
        </h2>
        <div className="space-y-4 text-content-secondary">
          <p>
            If you have questions regarding this Privacy Policy, wish to exercise your data subject rights, or wish to report a privacy concern, please contact our Data Governance team:
          </p>

          <div className="p-5 rounded-2xl bg-surface-soft border border-border space-y-3 text-xs sm:text-sm">
            <div className="font-bold text-content-primary">UNISPHERE Data Governance & Privacy Office</div>
            <div className="text-content-secondary">
              Email:{' '}
              <a href="mailto:privacy@unisphere.edu" className="text-primary font-semibold hover:underline">
                privacy@unisphere.edu
              </a>
            </div>
            <div className="text-content-secondary">
              Campus Support Desk:{' '}
              <a href="mailto:support@unisphere.edu" className="text-primary font-semibold hover:underline">
                support@unisphere.edu
              </a>
            </div>
            <div className="text-content-tertiary text-xs pt-2 border-t border-border/60">
              Note: For inquiries regarding individual academic grades, course enrollments, or official university records, please contact your university registrar or campus department head.
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
