import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { ScrollToTop } from './components/ScrollToTop';
import { LandingPage } from './pages/LandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { AcceptableUsePolicy } from './pages/AcceptableUsePolicy';
import { SecurityPolicy } from './pages/SecurityPolicy';
import { AccessibilityStatement } from './pages/AccessibilityStatement';
import { NotFound } from './pages/NotFound';

export function App() {
  // Lenis options tailored for a soft, silky feel with reduced scroll speed
  const lenisOptions = {
    duration: 1.6, // Soft, luxurious deceleration curve
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.7, // Reduces scroll velocity to prevent fast/jarring jumps
    touchMultiplier: 1.0,
    infinite: false,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Application Home Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Legal and Policy Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/acceptable-use" element={<AcceptableUsePolicy />} />
          <Route path="/acceptable-use-policy" element={<AcceptableUsePolicy />} />
          <Route path="/security" element={<SecurityPolicy />} />
          <Route path="/security-policy" element={<SecurityPolicy />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
          <Route path="/accessibility-statement" element={<AccessibilityStatement />} />

          {/* 404 Page Not Found */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
}

export default App;
