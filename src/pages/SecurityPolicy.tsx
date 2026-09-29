import { Lock, Compass } from 'lucide-react';
import { LegalLayout, SectionItem } from '../components/LegalLayout';

export const SecurityPolicy: React.FC = () => {
  const sections: SectionItem[] = [
    { id: 'security-philosophy', title: '1. Security-Focused Design' },
    { id: 'role-based-controls', title: '2. Role-Based Access Controls' },
    { id: 'authentication-security', title: '3. Authentication & Sessions' },
    { id: 'data-protection', title: '4. Protecting Academic Information' },
    { id: 'infrastructure-resilience', title: '5. Infrastructure & Operations' },
    { id: 'responsible-disclosure', title: '6. Responsible Vulnerability Disclosure' },
    { id: 'what-to-include', title: '7. What to Include in a Report' },
    { id: 'security-contact', title: '8. Security Response & Contact' },
  ];

  const noticeContent = (
    <div>
      <span className="font-bold text-content-primary">Commitment to Transparent Security: </span>
      UNISPHERE protects academic information through layered defense-in-depth, least-privilege role boundaries, and regular vulnerability audits. We believe in transparent, truthful security practices rather than misleading marketing guarantees. We actively welcome responsible disclosures from security researchers and academic technologists.
    </div>
  );

  return (
    <LegalLayout
      title="Security & Responsible Disclosure"
      subtitle="Overview of UNISPHERE's security architecture, access controls, data safeguards, and ethical vulnerability disclosure guidelines."
      badgeText="Platform Security & Trust"
      badgeIcon={Lock}
      effectiveDate="September 2026"
      version="2.0"
      sections={sections}
      noticeContent={noticeContent}
    >
      {/* 1. Security Philosophy */}
      <section id="security-philosophy" className="scroll-mt-24 pt-4 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">1</span>
          <span>Security-Focused Platform Design</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            At UNISPHERE, software security is an integral architectural requirement, not an afterthought. Higher education institutions manage critical student educational records, evaluation metrics, and campus operational schedules.
          </p>
          <p>
            Our architecture is built around three foundational security pillars:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-surface-soft border border-border">
              <strong className="text-content-primary block font-bold mb-1">1. Least Privilege</strong>
              Every API query, session token, and UI view is strictly scoped to the exact permissions required for that role.
            </div>
            <div className="p-4 rounded-2xl bg-surface-soft border border-border">
              <strong className="text-content-primary block font-bold mb-1">2. Multi-Tenant Isolation</strong>
              Each subscribing university's data is logically segregated with enforced institutional tenant boundaries.
            </div>
            <div className="p-4 rounded-2xl bg-surface-soft border border-border">
              <strong className="text-content-primary block font-bold mb-1">3. Defense in Depth</strong>
              Layered security controls spanning transport encryption, network firewalls, rate limiters, and audit logging.
            </div>
          </div>
        </div>
      </section>

      {/* 2. Role-Based Controls */}
      <section id="role-based-controls" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">2</span>
          <span>Role-Based Access Controls (RBAC)</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE enforces granular authorization gates at both the client and application server levels:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Server-Side Authorization Checks:</strong> Client-side route protections are mirrored by rigorous server-side verification. An unauthorized API request will return an immediate HTTP 403 Forbidden regardless of client state.</li>
            <li><strong className="text-content-primary font-semibold">Strict Persona Segregation:</strong> A Student token cannot read course roster arrays. A Faculty token cannot inspect unassigned department workflows. A Parent token is restricted to verified ward records.</li>
            <li><strong className="text-content-primary font-semibold">Administrative Action Audit:</strong> Sensitive operations—such as role modifications, attendance reconciliation, and term configuration changes—are written to immutable audit logs.</li>
          </ul>
        </div>
      </section>

      {/* 3. Authentication & Sessions */}
      <section id="authentication-security" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">3</span>
          <span>Authentication & Session Security</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Authentication safeguards protect access across all portal endpoints:
          </p>
          <div className="space-y-2.5 my-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-1">Institutional SSO & MFA Support</strong>
              Supports federated identity standards (SAML 2.0, OpenID Connect) enabling universities to enforce their own central Single Sign-On and hardware token or app-based Multi-Factor Authentication.
            </div>
            <div className="p-3.5 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-1">Secure Password Hashing</strong>
              Native credentials use modern, salted, memory-hard hashing functions (Argon2 / bcrypt). Plaintext passwords are never recorded in logs, database tables, or memory dumps.
            </div>
            <div className="p-3.5 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-1">Session Expiration & Token Revocation</strong>
              Sessions automatically expire after predetermined periods of inactivity. Users can actively terminate all other active sessions from account security settings.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Protecting Academic Information */}
      <section id="data-protection" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">4</span>
          <span>Protection of Institutional & Academic Information</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            We implement industry-standard encryption protocols to protect data throughout its lifecycle:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Data in Transit:</strong> All HTTP traffic is forced to HTTPS using modern Transport Layer Security (TLS 1.3 / TLS 1.2) with strict HSTS (HTTP Strict Transport Security) headers.</li>
            <li><strong className="text-content-primary font-semibold">Data at Rest:</strong> Database tables, document stores, and backup archives are encrypted using AES-256 standard encryption algorithms with secure key management.</li>
            <li><strong className="text-content-primary font-semibold">Input Validation & Sanitization:</strong> All user inputs are sanitized against SQL injection, cross-site scripting (XSS), and malicious parameter tampering.</li>
          </ul>
        </div>
      </section>

      {/* 5. Infrastructure & Operations */}
      <section id="infrastructure-resilience" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">5</span>
          <span>Infrastructure & Operational Resilience</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE operates on managed cloud infrastructure with automated monitoring and redundancy:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Automated Backup Schedules:</strong> Encrypted daily snapshots stored in georedundant secondary locations to guarantee disaster recovery capabilities.</li>
            <li><strong className="text-content-primary font-semibold">Rate Limiting & DDoS Mitigation:</strong> Cloud edge firewalls and endpoint rate limiters absorb traffic spikes and suppress brute-force credential stuffing.</li>
            <li><strong className="text-content-primary font-semibold">Continuous Vulnerability Scanning:</strong> Automated software dependency scanning across our repositories to catch CVEs and outdated libraries before deployment.</li>
          </ul>
        </div>
      </section>

      {/* 6. Responsible Disclosure */}
      <section id="responsible-disclosure" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">6</span>
          <span>Responsible Vulnerability Disclosure Program</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            We appreciate the efforts of independent security researchers, academic technologists, and university students in keeping software safe. If you discover a potential vulnerability in UNISPHERE, we encourage you to notify us promptly under our Safe Harbor guidelines.
          </p>

          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/80 text-blue-950 text-xs sm:text-sm space-y-2">
            <div className="font-bold flex items-center gap-2 text-blue-900">
              <Compass className="w-4 h-4 text-primary" />
              <span>Safe Harbor Guidelines for Ethical Researchers:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-blue-900">
              <li>Do not access, download, view, or modify personal data belonging to actual students, faculty, or institutional personnel. Use test accounts where possible.</li>
              <li>Do not conduct Denial of Service (DoS) attacks, spam campaigns, or resource-exhaustion tests against production clusters.</li>
              <li>Provide us a reasonable remediation window (typically 90 days) before any public discussion or disclosure.</li>
              <li>Act in good faith without extorting or demanding financial compensation for vulnerability reports.</li>
            </ul>
          </div>
          <p className="text-xs text-content-tertiary">
            Researchers acting in strict accordance with these Safe Harbor guidelines will not face legal action or referral to law enforcement from UNISPHERE.
          </p>
        </div>
      </section>

      {/* 7. What to Include */}
      <section id="what-to-include" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">7</span>
          <span>What to Include in a Security Report</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            To help our security engineering team triage and resolve issues quickly, please include:
          </p>
          <div className="space-y-2 text-xs sm:text-sm my-3">
            <div className="p-3 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-0.5">Vulnerability Description & Impact:</strong>
              Clear technical description of the vulnerability and its potential impact on institutional or user data.
            </div>
            <div className="p-3 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-0.5">Step-by-Step Reproduction:</strong>
              Step-by-step instructions or minimal Proof of Concept (PoC) demonstrating the vulnerability.
            </div>
            <div className="p-3 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-0.5">Affected Endpoints:</strong>
              Exact URLs, API endpoints, parameters, or mobile view screens involved.
            </div>
            <div className="p-3 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-0.5">Recommended Remediation:</strong>
              Any technical suggestions for patching or mitigating the identified issue.
            </div>
          </div>
        </div>
      </section>

      {/* 8. Security Contact */}
      <section id="security-contact" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">8</span>
          <span>Security Response & Contact</span>
        </h2>
        <div className="space-y-4 text-content-secondary">
          <p>
            Our dedicated security engineering team monitors incoming vulnerability disclosures and operational security alerts:
          </p>

          <div className="p-5 rounded-2xl bg-surface-soft border border-border space-y-3 text-xs sm:text-sm">
            <div className="font-bold text-content-primary">UNISPHERE Security Operations & Incident Response</div>
            <div className="text-content-secondary">
              Direct Security Email:{' '}
              <a href="mailto:security@unisphere.edu" className="text-primary font-semibold hover:underline">
                security@unisphere.edu
              </a>
            </div>
            <div className="text-content-secondary">
              Response Commitment: We endeavor to acknowledge all submitted security reports within forty-eight (48) hours of receipt.
            </div>
            <div className="text-content-tertiary text-xs pt-2 border-t border-border/60">
              For account password resets or forgotten student roll numbers, please reach out to your campus IT helpdesk or <a href="mailto:support@unisphere.edu" className="text-primary hover:underline">support@unisphere.edu</a>.
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
};

export default SecurityPolicy;
