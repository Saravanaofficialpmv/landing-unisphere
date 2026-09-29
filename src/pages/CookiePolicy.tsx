import { Cookie } from 'lucide-react';
import { LegalLayout, SectionItem } from '../components/LegalLayout';

export const CookiePolicy: React.FC = () => {
  const sections: SectionItem[] = [
    { id: 'what-are-cookies', title: '1. What Are Cookies & Web Storage' },
    { id: 'essential-cookies', title: '2. Strictly Essential Cookies' },
    { id: 'functional-cookies', title: '3. Functional Storage & Preferences' },
    { id: 'analytics-diagnostics', title: '4. Analytics & Diagnostics' },
    { id: 'third-party-technologies', title: '5. Third-Party Technologies' },
    { id: 'cookie-preferences', title: '6. Managing Cookie Preferences' },
    { id: 'changes-to-policy', title: '7. Changes to This Cookie Policy' },
    { id: 'contact-us', title: '8. Contact Information' },
  ];

  const noticeContent = (
    <div>
      <span className="font-bold text-content-primary">Privacy-Preserving Architecture: </span>
      UNISPHERE uses web storage and cookies strictly for essential authentication, session security, and basic user interface state. We do <strong className="font-semibold text-content-primary">not</strong> deploy third-party advertising cookies, retargeting beacons, cross-site trackers, or commercial monetization scripts on our platform.
    </div>
  );

  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Details regarding how UNISPHERE utilizes cookies, local storage, and session tokens to ensure platform security, session integrity, and seamless navigation."
      badgeText="Storage & Cookies"
      badgeIcon={Cookie}
      effectiveDate="September 2026"
      version="1.8"
      sections={sections}
      noticeContent={noticeContent}
    >
      {/* 1. What Are Cookies */}
      <section id="what-are-cookies" className="scroll-mt-24 pt-4 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">1</span>
          <span>What Are Cookies & Web Storage</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Cookies are small text files placed on your device (computer, tablet, or smartphone) by web servers when you access an online platform. Alongside HTTP cookies, modern web applications utilize browser storage mechanisms including <strong className="text-content-primary font-semibold">LocalStorage</strong> and <strong className="text-content-primary font-semibold">SessionStorage</strong>.
          </p>
          <p>
            In educational software, these technologies are vital for verifying that you are genuinely logged in as you transition between your lecture schedule, attendance records, and gradebook modules, without forcing you to re-authenticate on every single screen.
          </p>
        </div>
      </section>

      {/* 2. Essential Cookies */}
      <section id="essential-cookies" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">2</span>
          <span>Strictly Essential Cookies</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Essential cookies are mandatory for the core security and functionality of UNISPHERE. Without these cookies, authenticated services—such as role-verified grade submission or student attendance viewing—cannot function:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-xs sm:text-sm border border-border rounded-2xl overflow-hidden">
              <thead className="bg-surface-soft text-content-primary font-bold border-b border-border">
                <tr>
                  <th className="p-3">Category</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr className="bg-white">
                  <td className="p-3 font-semibold text-content-primary">Authentication Token</td>
                  <td className="p-3 text-content-secondary">Validates your active verified session across portal pages (Student, Faculty, HOD, Parent, Admin).</td>
                  <td className="p-3 text-content-tertiary">Session / 24 Hours</td>
                </tr>
                <tr className="bg-surface-soft/40">
                  <td className="p-3 font-semibold text-content-primary">CSRF Protection</td>
                  <td className="p-3 text-content-secondary">Cryptographic token preventing cross-site request forgery attacks on submitted forms and evaluation entries.</td>
                  <td className="p-3 text-content-tertiary">Session</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold text-content-primary">Load Balancer Affinity</td>
                  <td className="p-3 text-content-secondary">Ensures seamless server connectivity to the nearest campus proxy cluster during peak exam registration periods.</td>
                  <td className="p-3 text-content-tertiary">Session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-content-tertiary">
            Because these cookies are strictly essential for technical operation and account security, they cannot be individually opted out of while using the authenticated platform.
          </p>
        </div>
      </section>

      {/* 3. Functional Storage */}
      <section id="functional-cookies" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">3</span>
          <span>Functional Storage & Preferences</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Functional storage keys are stored on your local browser to remember interface configurations and enhance usability across visits:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Navigation Sidebar State:</strong> Preserves whether you prefer the navigation drawer expanded or collapsed.</li>
            <li><strong className="text-content-primary font-semibold">Active Semester Filter:</strong> Remembers your most recently viewed academic semester or department cohort so you don't need to reselect it upon returning.</li>
            <li><strong className="text-content-primary font-semibold">Language Selection:</strong> Stores your selected language preference across landing and authenticated views.</li>
          </ul>
        </div>
      </section>

      {/* 4. Analytics & Diagnostics */}
      <section id="analytics-diagnostics" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">4</span>
          <span>Analytics & Diagnostics</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE does <strong className="text-content-primary font-semibold">not</strong> utilize invasive third-party behavioral analytics, consumer profiling trackers, or pixel beacons.
          </p>
          <p>
            Our analytics are limited strictly to anonymized, first-party technical telemetry:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Measuring server response times and page render speeds to diagnose campus network bottlenecks.</li>
            <li>Recording anonymous JavaScript error events to identify client-side bugs or broken user flows.</li>
            <li>Tracking aggregate concurrent system load during institution-wide academic registration windows.</li>
          </ul>
        </div>
      </section>

      {/* 5. Third-Party Technologies */}
      <section id="third-party-technologies" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">5</span>
          <span>Third-Party Technologies</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            When utilizing external integrations supported by your institution, third-party authentication services may set their own essential cookies:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Institutional SSO Providers:</strong> Google Workspace for Education, Microsoft Entra ID (Azure AD), or campus SAML identity providers deploy their own authentication tokens during login handshakes.</li>
            <li><strong className="text-content-primary font-semibold">Integrated Payment Gateways:</strong> When paying institutional tuition or examination fees through authorized university gateways, payment processors deploy specialized fraud-prevention cookies.</li>
          </ul>
        </div>
      </section>

      {/* 6. Cookie Preferences */}
      <section id="cookie-preferences" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">6</span>
          <span>Managing Cookie Preferences</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            You have the right to control how cookies are stored on your device through browser settings:
          </p>
          <div className="p-4 rounded-2xl bg-surface-soft border border-border space-y-2 text-xs sm:text-sm">
            <div className="font-bold text-content-primary">Browser Configuration Instructions:</div>
            <ul className="list-disc pl-5 space-y-1 text-content-secondary">
              <li><strong className="text-content-primary">Google Chrome:</strong> Settings → Privacy and security → Third-party cookies.</li>
              <li><strong className="text-content-primary">Apple Safari:</strong> Settings → Safari → Advanced → Block all cookies.</li>
              <li><strong className="text-content-primary">Mozilla Firefox:</strong> Settings → Privacy & Security → Enhanced Tracking Protection.</li>
              <li><strong className="text-content-primary">Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies.</li>
            </ul>
          </div>
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs">
            <strong className="font-bold">Important Notice: </strong>
            Blocking strictly essential cookies will prevent authentication verification and will break your ability to log in or access your UNISPHERE student, faculty, or parent dashboard.
          </div>
        </div>
      </section>

      {/* 7. Changes to Policy */}
      <section id="changes-to-policy" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">7</span>
          <span>Changes to This Cookie Policy</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            We may update this Cookie Policy from time to time to accommodate technical platform enhancements or adjustments in regulatory privacy frameworks.
          </p>
          <p>
            Any modifications will be posted to this page with an updated effective date at the top of the document.
          </p>
        </div>
      </section>

      {/* 8. Contact Us */}
      <section id="contact-us" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">8</span>
          <span>Contact Information</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            If you have questions or inquiries regarding our use of cookies or web storage technologies:
          </p>
          <div className="p-4 rounded-xl bg-surface-soft border border-border text-xs sm:text-sm">
            <div className="font-bold text-content-primary mb-1">UNISPHERE Privacy & Architecture Team</div>
            <div>
              Email:{' '}
              <a href="mailto:privacy@unisphere.edu" className="text-primary font-semibold hover:underline">
                privacy@unisphere.edu
              </a>
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
};

export default CookiePolicy;
