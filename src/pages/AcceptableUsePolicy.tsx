import { 
  CheckCircle2, 
  KeyRound, 
  Ban, 
  GraduationCap, 
  BookOpen, 
  Building2, 
  UserCog
} from 'lucide-react';
import { LegalLayout, SectionItem } from '../components/LegalLayout';

export const AcceptableUsePolicy: React.FC = () => {
  const sections: SectionItem[] = [
    { id: 'purpose-scope', title: '1. Purpose & Scope' },
    { id: 'credential-responsibility', title: '2. Credential Security & Protection' },
    { id: 'unauthorized-access', title: '3. Unauthorized Access & Privilege Escalation' },
    { id: 'peer-data-access', title: '4. Academic & Peer Data Safeguards' },
    { id: 'misuse-institutional-info', title: '5. Misuse of Institutional Information' },
    { id: 'malicious-content', title: '6. Malicious Content & Exploits' },
    { id: 'interfering-operations', title: '7. Interfering with Platform Operations' },
    { id: 'communication-abuse', title: '8. Abuse of Communications & Notifications' },
    { id: 'security-compromise', title: '9. Compromising Platform Security' },
    { id: 'role-specific-standards', title: '10. Role-Specific Standards of Conduct' },
    { id: 'monitoring-investigation', title: '11. Monitoring & Audit Trails' },
    { id: 'enforcement-consequences', title: '12. Enforcement & Disciplinary Actions' },
    { id: 'reporting-violations', title: '13. Reporting Violations & Inquiries' },
  ];

  const noticeContent = (
    <div>
      <span className="font-bold text-content-primary">Academic Integrity & Ethical Standards: </span>
      UNISPHERE provides essential academic infrastructure for university communities. Every user is responsible for safeguarding their login credentials and treating peer and institutional information with strict ethical care. Violations of this policy may result in immediate account termination and formal escalation to university disciplinary committees.
    </div>
  );

  return (
    <LegalLayout
      title="Acceptable Use Policy"
      subtitle="Comprehensive rules, ethical expectations, prohibited activities, and account security responsibilities for all UNISPHERE users."
      badgeText="Platform Conduct & Security"
      badgeIcon={CheckCircle2}
      effectiveDate="September 2026"
      version="2.1"
      sections={sections}
      noticeContent={noticeContent}
    >
      {/* 1. Purpose & Scope */}
      <section id="purpose-scope" className="scroll-mt-24 pt-4 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">1</span>
          <span>Purpose & Scope</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            The purpose of this Acceptable Use Policy ("AUP") is to establish clear standards of conduct to safeguard the integrity, availability, confidentiality, and reliability of the UNISPHERE platform for all campus participants.
          </p>
          <p>
            This policy applies to all registered users, including enrolled students, faculty members, visiting lecturers, department heads, parents, guardians, and system administrators across all public web interfaces, authenticated portals, and mobile clients.
          </p>
        </div>
      </section>

      {/* 2. Credential Security & Protection */}
      <section id="credential-responsibility" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">2</span>
          <span>Credential Security & User Responsibility</span>
        </h2>
        <div className="space-y-4 text-content-secondary">
          <p className="font-semibold text-content-primary">
            You are personally and strictly responsible for all actions, submissions, and modifications carried out under your authenticated account.
          </p>
          
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <div className="font-bold flex items-center gap-2 text-amber-900">
              <KeyRound className="w-4 h-4 text-amber-700" />
              <span>Strict Rules for Credential Protection:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-amber-900">
              <li><strong className="font-bold">Zero Credential Sharing:</strong> You must never share your password, authentication token, Single Sign-On session, or Multi-Factor Authentication (MFA) one-time codes with any peer, family member, colleague, or unauthorized individual.</li>
              <li><strong className="font-bold">Shared Workstation Logout:</strong> When accessing UNISPHERE from shared campus terminals (such as library workstations, departmental computer laboratories, or public computers), you must explicitly log out and close all active browser sessions immediately upon concluding your work.</li>
              <li><strong className="font-bold">Immediate Duty to Report:</strong> If you suspect that your credentials have been lost, stolen, or compromised, you must immediately change your password and notify campus IT or UNISPHERE security.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Unauthorized Access & Privilege Escalation */}
      <section id="unauthorized-access" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">3</span>
          <span>Unauthorized Access & Privilege Escalation</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Users are provisioned with specific, role-bounded access rights. Under no circumstances may a user:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Attempt to bypass, alter, or manipulate Role-Based Access Control (RBAC) boundaries or security filters.</li>
            <li>Forge HTTP headers, manipulate JWT bearer tokens, or tamper with cookie payloads to elevate privileges to higher tiers (e.g. attempting to elevate from Student to Faculty, or Faculty to Administrator).</li>
            <li>Access, view, or modify data repositories, departmental folders, or administrative consoles that have not been explicitly assigned to your verified persona.</li>
            <li>Utilize administrative accounts or faculty credentials without explicit, written institutional authorization.</li>
          </ul>
        </div>
      </section>

      {/* 4. Academic & Peer Data Safeguards */}
      <section id="peer-data-access" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">4</span>
          <span>Academic & Peer Data Safeguards</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Respect for peer privacy and academic confidentiality is fundamental to a connected educational ecosystem:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Peer Grade Confidentiality:</strong> Users must never attempt to access, screenshot, export, or publish another student's academic grades, internal marks, GPA calculations, or exam score breakdowns without consent.</li>
            <li><strong className="text-content-primary font-semibold">Attendance Record Integrity:</strong> Attempting to proxy attendance, mark unauthorized check-ins on behalf of absent peers, or falsify duty leave documentation is strictly prohibited.</li>
            <li><strong className="text-content-primary font-semibold">Parent Portal Separation:</strong> Parents may only review records for their designated ward(s) and must not seek access to the records or contact information of other students or parents.</li>
          </ul>
        </div>
      </section>

      {/* 5. Misuse of Institutional Information */}
      <section id="misuse-institutional-info" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">5</span>
          <span>Misuse of Institutional Information</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Information accessible within UNISPHERE is designated strictly for educational and operational use. Users shall not:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Scrape, crawl, harvest, or bulk-export campus directories, faculty email lists, or student enrollment databases.</li>
            <li>Extract confidential institutional data, unreleased curriculum frameworks, or exam question banks for unauthorized distribution or commercial sale.</li>
            <li>Publish internal university communications, faculty workload schedules, or disciplinary memos outside the official platform channels.</li>
          </ul>
        </div>
      </section>

      {/* 6. Malicious Content & Exploits */}
      <section id="malicious-content" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">6</span>
          <span>Malicious Content & Exploits</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Users are strictly forbidden from transmitting or uploading malicious payloads to any UNISPHERE service:
          </p>
          <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200/80 text-rose-950 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-rose-900">
              <Ban className="w-4 h-4 text-rose-600" />
              <span>Prohibited Payload Types:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-rose-900">
              <li>Viruses, worms, trojans, ransomware, or keylogging utilities embedded in assignment submissions or syllabus attachments.</li>
              <li>Cross-site scripting (XSS) vectors, SQL injection strings, or command injection payloads entered into text input fields.</li>
              <li>Corrupted file archives or decompression bombs ("zip bombs") designed to overwhelm server storage or CPU processing.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Interfering with Platform Operations */}
      <section id="interfering-operations" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">7</span>
          <span>Interfering with Platform Operations</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            To ensure reliable platform performance during mission-critical academic events (such as course registrations and grade announcements), users must not:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Conduct Denial of Service (DoS) or Distributed Denial of Service (DDoS) attacks against platform servers or network gateways.</li>
            <li>Deploy automated scripts, bots, or browser macro tools to rapidly query endpoints or reserve course elective slots ahead of other students.</li>
            <li>Interfere with load-balancing systems or network firewalls through aggressive automated polling.</li>
          </ul>
        </div>
      </section>

      {/* 8. Abuse of Communications & Notifications */}
      <section id="communication-abuse" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">8</span>
          <span>Abuse of Communications & Notifications</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Platform announcement boards, circular distribution channels, and messaging features are reserved strictly for official university dialogue. Prohibited conduct includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Broadcasting unsolicited commercial promotions, advertising, or spam to campus distribution lists.</li>
            <li>Impersonating university officials, department heads, or course faculty members in public notice feeds.</li>
            <li>Distributing defamatory, abusive, threatening, discriminatory, or harassing messages directed at any student, faculty member, or staff member.</li>
            <li>Fabricating emergency alerts, weather cancellations, or exam schedule modifications.</li>
          </ul>
        </div>
      </section>

      {/* 9. Compromising Platform Security */}
      <section id="security-compromise" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">9</span>
          <span>Compromising Platform Security</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Except when participating in our authorized Responsible Disclosure Program in strict accordance with its guidelines, users shall not:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Port-scan, fuzz, or perform vulnerability scanning against production UNISPHERE domains.</li>
            <li>Reverse-engineer, decompile, or disassemble production application bundles or proprietary algorithms.</li>
            <li>Publicly publish or exploit an unpatched zero-day vulnerability without prior coordinated disclosure with the UNISPHERE security team.</li>
          </ul>
        </div>
      </section>

      {/* 10. Role-Specific Standards */}
      <section id="role-specific-standards" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">10</span>
          <span>Role-Specific Standards of Conduct</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/40">
              <span className="font-bold text-[#2563EB] block mb-1 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>Student Standard:</span>
              </span>
              Uphold academic honesty; submit authentic coursework; never share account credentials to manipulate attendance or test submissions.
            </div>

            <div className="p-3.5 rounded-xl border border-purple-200 bg-purple-50/40">
              <span className="font-bold text-[#7C3AED] block mb-1 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Faculty Standard:</span>
              </span>
              Accurately record daily attendance; maintain impartial, objective grading; safeguard student academic evaluation privacy.
            </div>

            <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/40">
              <span className="font-bold text-[#D97706] block mb-1 flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                <span>HOD Standard:</span>
              </span>
              Ensure fair curricular workload distribution; resolve attendance grievances equitably; supervise departmental data compliance.
            </div>

            <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/40">
              <span className="font-bold text-[#DC2626] block mb-1 flex items-center gap-1.5">
                <UserCog className="w-4 h-4" />
                <span>Administrator Standard:</span>
              </span>
              Manage role provisioning transparently; monitor audit anomalies vigilantly; never abuse administrative superuser privileges.
            </div>
          </div>
        </div>
      </section>

      {/* 11. Monitoring & Investigation */}
      <section id="monitoring-investigation" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">11</span>
          <span>Monitoring & Audit Trails</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            To maintain security and verify regulatory compliance, UNISPHERE logs critical platform actions, including login timestamps, IP addresses, attendance modification entries, grade overrides, and permission adjustments.
          </p>
          <p>
            These immutable audit trails may be reviewed by authorized institutional administrators or forensic personnel during formal investigations into academic fraud or cyber incidents.
          </p>
        </div>
      </section>

      {/* 12. Enforcement & Disciplinary Actions */}
      <section id="enforcement-consequences" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">12</span>
          <span>Enforcement & Disciplinary Actions</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Failure to adhere to this Acceptable Use Policy constitutes a material breach of platform terms. Depending on the severity of the infraction, consequences may include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Immediate Session Revocation:</strong> Mandatory password reset and temporary suspension of portal access.</li>
            <li><strong className="text-content-primary font-semibold">Institutional Disciplinary Referral:</strong> Formal escalation to university deans, provosts, or academic honor committees for potential disciplinary hearings, grade forfeiture, or expulsion.</li>
            <li><strong className="text-content-primary font-semibold">Legal Prosecution:</strong> Referral to law enforcement authorities in cases involving deliberate ransomware deployment, unauthorized exfiltration of personal records, or criminal cyber sabotage.</li>
          </ul>
        </div>
      </section>

      {/* 13. Reporting Violations */}
      <section id="reporting-violations" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">13</span>
          <span>Reporting Violations & Inquiries</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            If you witness or suspect an acceptable use violation, credential breach, or harassment incident within UNISPHERE:
          </p>
          <div className="p-4 rounded-xl bg-surface-soft border border-border text-xs sm:text-sm space-y-2">
            <div>
              <strong className="text-content-primary">UNISPHERE Conduct & Security Response:</strong>
            </div>
            <div>
              Email:{' '}
              <a href="mailto:security@unisphere.edu" className="text-primary font-semibold hover:underline">
                security@unisphere.edu
              </a>
            </div>
            <div>
              Campus Grievance Desk:{' '}
              <a href="mailto:conduct@unisphere.edu" className="text-primary font-semibold hover:underline">
                conduct@unisphere.edu
              </a>
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
};

export default AcceptableUsePolicy;
