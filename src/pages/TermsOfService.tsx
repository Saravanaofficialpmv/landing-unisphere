import { Scale, Ban } from 'lucide-react';
import { LegalLayout, SectionItem } from '../components/LegalLayout';

export const TermsOfService: React.FC = () => {
  const sections: SectionItem[] = [
    { id: 'acceptance-of-terms', title: '1. Acceptance of Terms' },
    { id: 'about-unisphere', title: '2. About UNISPHERE' },
    { id: 'eligibility-authorized-users', title: '3. Eligibility & Authorized Users' },
    { id: 'user-accounts', title: '4. User Accounts' },
    { id: 'role-based-access', title: '5. Role-Based Access' },
    { id: 'acceptable-use', title: '6. Acceptable Use' },
    { id: 'academic-institutional-data', title: '7. Academic & Institutional Data' },
    { id: 'user-responsibilities', title: '8. User Responsibilities' },
    { id: 'intellectual-property', title: '9. Intellectual Property' },
    { id: 'third-party-services', title: '10. Third-Party Services' },
    { id: 'platform-availability', title: '11. Platform Availability' },
    { id: 'notifications-communications', title: '12. Notifications & Communications' },
    { id: 'suspension-termination', title: '13. Account Suspension / Termination' },
    { id: 'disclaimers-limitations', title: '14. Disclaimers & Limitations' },
    { id: 'changes-to-service', title: '15. Changes to the Service' },
    { id: 'changes-to-terms', title: '16. Changes to These Terms' },
    { id: 'governing-framework', title: '17. Governing Legal Framework' },
    { id: 'contact-information', title: '18. Contact Information' },
  ];

  const noticeContent = (
    <div>
      <span className="font-bold text-content-primary">Higher Education Platform Agreement: </span>
      These Terms of Service govern access to and usage of the UNISPHERE platform for institutional partner organizations, enrolled students, faculty members, department heads, and parents. By accessing the platform, users agree to uphold academic integrity standards, maintain credential security, and comply with institutional university policies.
    </div>
  );

  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Standard operational conditions, institutional obligations, user responsibilities, and legal governance for UNISPHERE academic platform."
      badgeText="Platform Terms & Governance"
      badgeIcon={Scale}
      effectiveDate="September 2026"
      version="2.4"
      sections={sections}
      noticeContent={noticeContent}
    >
      {/* 1. Acceptance of Terms */}
      <section id="acceptance-of-terms" className="scroll-mt-24 pt-4 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">1</span>
          <span>Acceptance of Terms</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and <strong className="text-content-primary font-bold">UNISPHERE</strong> ("UNISPHERE", "the Platform", "we", "our", or "us"). These Terms govern your access to and use of UNISPHERE web portals, mobile interfaces, and related software services.
          </p>
          <p>
            By logging into the Platform via your institutional single sign-on, registering an account, or interacting with any UNISPHERE service, you affirm that you have read, understood, and agreed to be bound by these Terms, as well as the policies of your subscribing educational institution.
          </p>
          <p className="text-xs text-content-tertiary">
            If you are accessing UNISPHERE on behalf of an educational institution, you represent and warrant that you possess the necessary administrative authority to bind that institution to these Terms.
          </p>
        </div>
      </section>

      {/* 2. About UNISPHERE */}
      <section id="about-unisphere" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">2</span>
          <span>About UNISPHERE</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE is a unified academic operations platform engineered specifically for colleges, universities, and polytechnic institutes. The platform provides integrated tools for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Automated attendance logging, timetable scheduling, and curriculum tracking.</li>
            <li>Role-specific portal experiences for Students, Faculty, HODs, Parents, and Administrators.</li>
            <li>Departmental workload management, elective allocation, and performance analytics.</li>
            <li>Institutional notifications, circular distributions, and secure parent communication channels.</li>
          </ul>
        </div>
      </section>

      {/* 3. Eligibility and Authorized Users */}
      <section id="eligibility-authorized-users" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">3</span>
          <span>Eligibility and Authorized Users</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Access to UNISPHERE is restricted strictly to authorized individuals affiliated with an actively subscribing educational institution:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Active Students:</strong> Currently enrolled in an accredited program administered by the partner institution.</li>
            <li><strong className="text-content-primary font-semibold">Faculty & Staff:</strong> Employed or officially contracted educators, professors, and teaching assistants.</li>
            <li><strong className="text-content-primary font-semibold">Department Leadership:</strong> Appointed Heads of Departments (HODs), deans, and academic coordinators.</li>
            <li><strong className="text-content-primary font-semibold">Parents / Legal Guardians:</strong> Authorized guardians officially listed on an enrolled student's university profile.</li>
            <li><strong className="text-content-primary font-semibold">Administrative Personnel:</strong> University IT, registrar staff, and campus executive leadership.</li>
          </ul>
        </div>
      </section>

      {/* 4. User Accounts */}
      <section id="user-accounts" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">4</span>
          <span>User Accounts</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            User accounts are provisioned either directly by your institution's central directory or through official enrollment workflows:
          </p>
          <div className="space-y-2.5 my-3 text-sm">
            <div className="p-3.5 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-1">Credential Confidentiality</strong>
              You are solely responsible for maintaining the confidentiality of your credentials, password, and two-factor authentication tokens. Credential sharing is strictly prohibited.
            </div>
            <div className="p-3.5 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-1">Prompt Notification of Breach</strong>
              You must immediately report any suspected unauthorized access, compromised password, or security incident to your campus IT administrator or <a href="mailto:security@unisphere.edu" className="text-primary font-semibold hover:underline">security@unisphere.edu</a>.
            </div>
            <div className="p-3.5 rounded-xl bg-surface-soft border border-border">
              <strong className="text-content-primary block mb-1">Accurate Information</strong>
              Users must provide accurate, current, and verifiable contact details and keep contact information updated through official institutional channels.
            </div>
          </div>
        </div>
      </section>

      {/* 5. Role-Based Access */}
      <section id="role-based-access" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">5</span>
          <span>Role-Based Access</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE operates on a strict principle of role compartmentalization. Users are provisioned specific permission tiers based on their academic function:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Users may only access interfaces, datasets, and features explicitly authorized for their verified role.</li>
            <li>Any attempt to circumvent role boundaries, impersonate another user persona, or perform unauthorized privilege escalation is a material violation of these Terms.</li>
            <li>Role assignments are managed exclusively by designated institutional administrators; UNISPHERE support cannot manually elevate permissions without written administrative sign-off.</li>
          </ul>
        </div>
      </section>

      {/* 6. Acceptable Use */}
      <section id="acceptable-use" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">6</span>
          <span>Acceptable Use</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE is dedicated exclusively to academic and institutional management. Prohibited activities include:
          </p>
          <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200/80 text-rose-950 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-rose-900">
              <Ban className="w-4 h-4 text-rose-600" />
              <span>Expressly Prohibited Conduct:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-rose-900">
              <li>Tampering with attendance timestamps, grade matrices, or evaluation logs.</li>
              <li>Scraping, automated harvesting, or bulk exporting of institutional student directories or faculty contact information.</li>
              <li>Transmitting unsolicited commercial communications, defamatory remarks, harassment, or unlawful content through campus circular or messaging tools.</li>
              <li>Injecting malicious software, scripts, ransomware, or exploits into uploaded course files or attachments.</li>
              <li>Interfering with network infrastructure, conducting denial-of-service (DoS) attacks, or probing platform vulnerability without written authorization.</li>
            </ul>
          </div>
          <p className="text-xs text-content-tertiary">
            Detailed conduct policies are outlined in our dedicated <a href="/acceptable-use" className="text-primary font-semibold hover:underline">Acceptable Use Policy</a>.
          </p>
        </div>
      </section>

      {/* 7. Academic and Institutional Data */}
      <section id="academic-institutional-data" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">7</span>
          <span>Academic and Institutional Data</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            The educational institution retains sole ownership of all student academic records, grading data, attendance logs, and curriculum material uploaded to the Platform.
          </p>
          <p>
            By submitting data to UNISPHERE, the institution grants UNISPHERE a limited, non-exclusive, non-transferable license to host, process, reproduce, and transmit such data solely as necessary to provide the platform services. UNISPHERE will never commercialize, resell, or publicly display institutional data.
          </p>
        </div>
      </section>

      {/* 8. User Responsibilities */}
      <section id="user-responsibilities" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">8</span>
          <span>User Responsibilities</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Users agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Ensure that all submissions, leave justifications, assessment inputs, and feedback forms reflect accurate and honest information.</li>
            <li>Log out of sessions when accessing UNISPHERE from shared public terminals, library computers, or departmental lab systems.</li>
            <li>Adhere to the institutional code of conduct and honor pledge established by their educational organization.</li>
          </ul>
        </div>
      </section>

      {/* 9. Intellectual Property */}
      <section id="intellectual-property" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">9</span>
          <span>Intellectual Property</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            The UNISPHERE platform, including all user interfaces, logos, graphics, design systems, algorithms, source code, and documentation, is the exclusive intellectual property of UNISPHERE and its licensors, protected by copyright, trademark, and trade secret laws.
          </p>
          <p>
            Users are granted a personal, non-transferable, revocable license to access the Platform solely in connection with their authorized academic activities. Users may not reverse-engineer, decompile, duplicate, or create derivative works of any portion of UNISPHERE.
          </p>
        </div>
      </section>

      {/* 10. Third-Party Services */}
      <section id="third-party-services" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">10</span>
          <span>Third-Party Services</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE may interface with third-party software, including institutional single sign-on providers, university payment gateways, and learning management systems.
          </p>
          <p>
            Your interactions with third-party services are governed by the respective terms and privacy policies of those third parties. UNISPHERE is not liable for service disruptions, security failures, or data handling practices originating within external third-party software.
          </p>
        </div>
      </section>

      {/* 11. Platform Availability */}
      <section id="platform-availability" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">11</span>
          <span>Platform Availability</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            We strive to provide continuous, high-availability service with target uptime exceeding 99.5% during active academic semesters.
          </p>
          <p>
            From time to time, scheduled maintenance, security patching, or database optimization may necessitate temporary downtime. Maintenance windows are typically scheduled during off-peak weekend hours with advance notice published via administrative feeds.
          </p>
        </div>
      </section>

      {/* 12. Notifications and Communications */}
      <section id="notifications-communications" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">12</span>
          <span>Notifications and Communications</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            By using UNISPHERE, you consent to receive essential service-related communications, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Security alerts, password reset confirmation, and authentication verification codes.</li>
            <li>Official institutional notices, emergency weather or campus closure circulars.</li>
            <li>Attendance threshold alerts and published grade reports.</li>
          </ul>
          <p className="text-xs text-content-tertiary">
            Essential operational and academic notifications cannot be disabled while maintaining an active student or employee profile.
          </p>
        </div>
      </section>

      {/* 13. Account Suspension or Termination */}
      <section id="suspension-termination" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">13</span>
          <span>Account Suspension or Termination</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            An account may be suspended or deactivated under the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Institutional Status Change:</strong> Graduation, academic withdrawal, faculty resignation, or completion of contractual appointment.</li>
            <li><strong className="text-content-primary font-semibold">Policy Violation:</strong> Material breach of these Terms, unauthorized data access, credential distribution, or violation of university disciplinary codes.</li>
            <li><strong className="text-content-primary font-semibold">Security Precaution:</strong> Temporary suspension upon detection of active account compromise, anomalous session velocity, or brute-force authentication attacks.</li>
          </ul>
        </div>
      </section>

      {/* 14. Disclaimers and Limitations */}
      <section id="disclaimers-limitations" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">14</span>
          <span>Disclaimers and Limitations</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p className="uppercase text-xs font-bold tracking-wider text-content-primary">
            Service Disclaimer:
          </p>
          <p className="text-xs sm:text-sm">
            EXCEPT AS EXPRESSLY SET FORTH IN WRITTEN INSTITUTIONAL SERVICE AGREEMENTS, UNISPHERE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR UNINTERRUPTED ERROR-FREE OPERATION.
          </p>
          <p className="uppercase text-xs font-bold tracking-wider text-content-primary pt-2">
            Limitation of Liability:
          </p>
          <p className="text-xs sm:text-sm">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UNISPHERE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, LOSS OF GOODWILL, OR ACADEMIC DISRUPTION ARISING FROM OR RELATED TO YOUR USE OF THE PLATFORM.
          </p>
        </div>
      </section>

      {/* 15. Changes to the Service */}
      <section id="changes-to-service" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">15</span>
          <span>Changes to the Service</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            We continuously refine, update, and improve UNISPHERE. We reserve the right to enhance, modify, or deprecate specific features, user interfaces, or functionality to improve performance, comply with education regulations, or address security needs.
          </p>
          <p>
            Where a platform modification significantly alters core academic workflows, advance advisory notices will be communicated to institutional administrators.
          </p>
        </div>
      </section>

      {/* 16. Changes to These Terms */}
      <section id="changes-to-terms" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">16</span>
          <span>Changes to These Terms</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            We may update these Terms periodically. Notice of material modifications will be provided at least thirty (30) days prior to the effective date via institutional administrator notification and banner announcements on the login portal.
          </p>
          <p>
            Your continued access to the Platform after revisions become effective constitutes your binding acceptance of the updated Terms.
          </p>
        </div>
      </section>

      {/* 17. Governing / Applicable Legal Framework */}
      <section id="governing-framework" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">17</span>
          <span>Governing / Applicable Legal Framework</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            These Terms are governed by and construed in accordance with the substantive laws applicable to higher education software contracts within the jurisdiction specified in the master institutional agreement between UNISPHERE and your subscribing institution.
          </p>
          <p>
            Any disputes arising under these Terms shall be subject to the exclusive jurisdiction and dispute resolution mechanisms designated in your institution's institutional procurement contract.
          </p>
        </div>
      </section>

      {/* 18. Contact Information */}
      <section id="contact-information" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">18</span>
          <span>Contact Information</span>
        </h2>
        <div className="space-y-4 text-content-secondary">
          <p>
            For legal inquiries, compliance verifications, or contract questions regarding these Terms:
          </p>

          <div className="p-5 rounded-2xl bg-surface-soft border border-border space-y-3 text-xs sm:text-sm">
            <div className="font-bold text-content-primary">UNISPHERE Legal & Compliance Division</div>
            <div className="text-content-secondary">
              Email:{' '}
              <a href="mailto:legal@unisphere.edu" className="text-primary font-semibold hover:underline">
                legal@unisphere.edu
              </a>
            </div>
            <div className="text-content-secondary">
              Institutional Partnerships:{' '}
              <a href="mailto:institutions@unisphere.edu" className="text-primary font-semibold hover:underline">
                institutions@unisphere.edu
              </a>
            </div>
            <div className="text-content-tertiary text-xs pt-2 border-t border-border/60">
              For student-specific enrollment status, course add/drop disputes, or grading appeals, please contact your university department head or registrar's office.
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
};

export default TermsOfService;
