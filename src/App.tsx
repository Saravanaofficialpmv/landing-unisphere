import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { LandingPage } from './pages/LandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

export function App() {
  return (
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
  );
}

export default App;
