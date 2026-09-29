import { Eye } from 'lucide-react';
import { LegalLayout, SectionItem } from '../components/LegalLayout';

export const AccessibilityStatement: React.FC = () => {
  const sections: SectionItem[] = [
    { id: 'our-commitment', title: '1. Our Commitment to Inclusion' },
    { id: 'conformance-standard', title: '2. Accessibility Standards (WCAG)' },
    { id: 'keyboard-navigation', title: '3. Keyboard Operability & Focus' },
    { id: 'contrast-typography', title: '4. Contrast, Color & Typography' },
    { id: 'screen-reader-compatibility', title: '5. Screen Reader Compatibility' },
    { id: 'motion-reduced-motion', title: '6. Motion & Reduced Motion Settings' },
    { id: 'responsive-device-design', title: '7. Responsive Multi-Device Design' },
    { id: 'ongoing-audits', title: '8. Ongoing Audits & Testing' },
    { id: 'known-limitations', title: '9. Known Limitations & Content Exceptions' },
    { id: 'feedback-contact', title: '10. Accessibility Feedback & Assistance' },
  ];

  const noticeContent = (
    <div>
      <span className="font-bold text-content-primary">Accessible Education for All: </span>
      UNISPHERE is committed to making digital campus life equitable, intuitive, and accessible to every student, professor, and parent, regardless of visual, auditory, cognitive, or physical abilities. We target Web Content Accessibility Guidelines (WCAG) 2.1 Level AA conformance across our entire product suite.
    </div>
  );

  return (
    <LegalLayout
      title="Accessibility Statement"
      subtitle="Our ongoing dedication to digital inclusion, assistive technology compatibility, universal campus usability, and WCAG standards."
      badgeText="Digital Inclusion & WCAG"
      badgeIcon={Eye}
      effectiveDate="September 2026"
      version="1.6"
      sections={sections}
      noticeContent={noticeContent}
    >
      {/* 1. Our Commitment */}
      <section id="our-commitment" className="scroll-mt-24 pt-4 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">1</span>
          <span>Our Commitment to Digital Inclusion</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Higher education should be universally accessible. At <strong className="text-content-primary font-bold">UNISPHERE</strong>, we believe that checking academic timetables, reviewing lecture attendance, submitting coursework, or viewing grade cards should be effortless for every member of the academic community.
          </p>
          <p>
            We continually evaluate and refine our platform to eliminate digital barriers for individuals with visual impairments, motor challenges, hearing limitations, neurodivergent conditions, or situational disabilities.
          </p>
        </div>
      </section>

      {/* 2. Conformance Standard */}
      <section id="conformance-standard" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">2</span>
          <span>Accessibility Standards (WCAG 2.1 AA)</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE targets full conformance with the <strong className="text-content-primary font-semibold">Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>, established by the World Wide Web Consortium (W3C).
          </p>
          <p>
            These guidelines outline four core principles that guide our product engineering:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-2xl bg-surface-soft border border-border">
              <strong className="text-content-primary block font-bold mb-1">Perceivable:</strong>
              Content is presented in multiple modalities so that users can comprehend information through sight, sound, or assistive touch.
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-soft border border-border">
              <strong className="text-content-primary block font-bold mb-1">Operable:</strong>
              All interface components, buttons, and modal dialogs are fully interactive using a keyboard or alternate input devices.
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-soft border border-border">
              <strong className="text-content-primary block font-bold mb-1">Understandable:</strong>
              Clear navigation structures, consistent terminology across all 5 roles, and transparent error recovery feedback.
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-soft border border-border">
              <strong className="text-content-primary block font-bold mb-1">Robust:</strong>
              Built with semantic HTML5 standards that maximize compatibility with current and future assistive screen readers.
            </div>
          </div>
        </div>
      </section>

      {/* 3. Keyboard Operability */}
      <section id="keyboard-navigation" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">3</span>
          <span>Keyboard Operability & Visible Focus</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Every interactive feature in UNISPHERE is designed to be accessible without relying on a mouse or touch screen:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Logical Tab Navigation:</strong> Form inputs, interactive timetable cards, and navigation buttons follow a logical top-to-bottom, left-to-right DOM tab sequence.</li>
            <li><strong className="text-content-primary font-semibold">High-Visibility Focus Indicators:</strong> Interactive elements display high-contrast, dual-tone focus rings (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded font-mono text-primary font-bold">focus-visible:ring-2 focus-visible:ring-primary</code>) when focused via keyboard.</li>
            <li><strong className="text-content-primary font-semibold">Modal Dialog Trap & Escape:</strong> When modal dialogs open (such as booking forms or leave requests), keyboard focus is maintained within the modal, and pressing the <kbd className="px-1.5 py-0.5 rounded bg-surface-muted border border-border text-xs font-mono">Esc</kbd> key closes the dialog cleanly.</li>
          </ul>
        </div>
      </section>

      {/* 4. Contrast, Color & Typography */}
      <section id="contrast-typography" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">4</span>
          <span>Contrast, Color & Typography</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            We adhere to strict visual legibility standards across both light and dark backgrounds:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">WCAG AA Contrast Ratios:</strong> Standard body copy maintains a minimum contrast ratio of 4.5:1 against surrounding backgrounds, and large headings exceed 3.0:1.</li>
            <li><strong className="text-content-primary font-semibold">Non-Color Information Cues:</strong> Color is never the sole indicator of platform status. For example, low attendance percentages are accompanied by explicit percentage numbers and warning icons, not merely a red border.</li>
            <li><strong className="text-content-primary font-semibold">Fluid Font Scaling:</strong> Layouts support browser text zoom up to 200% without overlapping text containers, truncation, or broken layout grids.</li>
          </ul>
        </div>
      </section>

      {/* 5. Screen Reader Compatibility */}
      <section id="screen-reader-compatibility" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">5</span>
          <span>Screen Reader Compatibility & Semantics</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            UNISPHERE utilizes semantic HTML5 structures to provide assistive software with clear contextual landmarks:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">ARIA Labels & Descriptions:</strong> Icon-only action buttons (such as notification bells, search toggles, and modal dismissals) have descriptive <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded font-mono">aria-label</code> tags.</li>
            <li><strong className="text-content-primary font-semibold">Meaningful Heading Hierarchy:</strong> Each view maintains a logical document outline with a single <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded font-mono">&lt;h1&gt;</code> landmark and properly nested subheadings.</li>
            <li><strong className="text-content-primary font-semibold">Descriptive Alt Text:</strong> University logos, diagrams, and illustrative assets include accurate alternative text descriptions. Purely decorative elements are tagged with <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded font-mono">aria-hidden="true"</code>.</li>
          </ul>
        </div>
      </section>

      {/* 6. Motion & Reduced Motion */}
      <section id="motion-reduced-motion" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">6</span>
          <span>Motion & Reduced Motion Settings</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            For users prone to vestibular disorders, motion sickness, or cognitive overload:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>We honor the operating system <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded font-mono text-primary font-bold">prefers-reduced-motion</code> media query.</li>
            <li>When reduced motion is enabled in system preferences, rapid parallax scrolling, intensive 3D rotations, and automated marquee animations are suppressed and replaced with simple, instant cross-fades.</li>
            <li>No flashing, strobing, or rapidly flickering visuals exceeding 3 flashes per second exist within UNISPHERE.</li>
          </ul>
        </div>
      </section>

      {/* 7. Responsive Multi-Device Design */}
      <section id="responsive-device-design" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">7</span>
          <span>Responsive Multi-Device Design</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Whether accessed via a student's mobile smartphone, a professor's classroom tablet, or an administrator's multi-monitor desktop workstation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Interactive touch targets meet minimum recommended dimensions of 44×44 CSS pixels.</li>
            <li>Layouts support portrait and landscape orientations seamlessly without forcing device lock.</li>
            <li>Responsive layouts avoid horizontal scrollbars on standard content views.</li>
          </ul>
        </div>
      </section>

      {/* 8. Ongoing Audits & Testing */}
      <section id="ongoing-audits" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">8</span>
          <span>Ongoing Audits & Testing</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            Accessibility is maintained through regular verification protocols:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Automated axe-core and Lighthouse accessibility CI/CD test passes.</li>
            <li>Manual keyboard-only test walkthroughs of new modules prior to release.</li>
            <li>Screen reader spot-testing with VoiceOver (macOS / iOS), NVDA (Windows), and TalkBack (Android).</li>
          </ul>
        </div>
      </section>

      {/* 9. Known Limitations */}
      <section id="known-limitations" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">9</span>
          <span>Known Limitations & Content Exceptions</span>
        </h2>
        <div className="space-y-3.5 text-content-secondary">
          <p>
            While we strive for comprehensive accessibility across the core platform, certain content types present known challenges:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-content-primary font-semibold">Third-Party Course Attachments:</strong> Legacy PDF scans, historical journal articles, or external presentations uploaded by individual course instructors may lack proper optical character recognition (OCR) or tag structures.</li>
            <li><strong className="text-content-primary font-semibold">Complex Scientific Notation:</strong> Specialized mathematical or chemical equation diagrams uploaded as flat images without MathML tags.</li>
          </ul>
          <p className="text-xs text-content-tertiary">
            If you encounter an inaccessible course document, please notify us, and our team will work with your institution's disability support office to provide an accessible transcript or structured alternative format.
          </p>
        </div>
      </section>

      {/* 10. Feedback & Contact */}
      <section id="feedback-contact" className="scroll-mt-24 pt-8 border-t border-border/70">
        <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-4 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">10</span>
          <span>Accessibility Feedback & Assistance</span>
        </h2>
        <div className="space-y-4 text-content-secondary">
          <p>
            We welcome constructive feedback, bug reports, and suggestions for improving accessibility across the UNISPHERE suite:
          </p>

          <div className="p-5 rounded-2xl bg-surface-soft border border-border space-y-3 text-xs sm:text-sm">
            <div className="font-bold text-content-primary">UNISPHERE Digital Inclusion & Accessibility Team</div>
            <div className="text-content-secondary">
              Direct Accessibility Email:{' '}
              <a href="mailto:accessibility@unisphere.edu" className="text-primary font-semibold hover:underline">
                accessibility@unisphere.edu
              </a>
            </div>
            <div className="text-content-secondary">
              Campus Support Desk:{' '}
              <a href="mailto:support@unisphere.edu" className="text-primary font-semibold hover:underline">
                support@unisphere.edu
              </a>
            </div>
            <div className="text-content-tertiary text-xs pt-2 border-t border-border/60">
              When reporting an accessibility barrier, please include the URL or view name, your browser and assistive technology tool (e.g. VoiceOver on Safari, NVDA on Firefox), and a brief description of the issue encountered.
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
};

export default AccessibilityStatement;
