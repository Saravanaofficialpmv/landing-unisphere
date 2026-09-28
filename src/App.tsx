import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { ScrollToTop } from './components/ScrollToTop';
import { LandingPage } from './pages/LandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

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

          {/* Public Privacy Policy Page */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Public Terms of Service Page */}
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
}

export default App;
