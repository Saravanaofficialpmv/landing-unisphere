import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutUnisphere } from './components/AboutUnisphere';
import { PortalCards } from './components/PortalCards';
import { FeatureGrid } from './components/FeatureGrid';
import { AppShowcase } from './components/AppShowcase';
import { EcosystemFlow } from './components/EcosystemFlow';
import { Technology } from './components/Technology';
import { WhyUnisphere } from './components/WhyUnisphere';
import { SimpleSurface } from './components/SimpleSurface';
import { RoleAccess } from './components/RoleAccess';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { DemoRequestModal } from './components/DemoRequestModal';
import { UserRole } from './types';

export function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedRoleForAuth, setSelectedRoleForAuth] = useState<UserRole>('student');

  const handleOpenAuth = (role: UserRole = 'student') => {
    setSelectedRoleForAuth(role);
    setAuthModalOpen(true);
  };

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleExploreScroll = () => {
    const target = document.querySelector('#portals');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreScroll = () => {
    const target = document.querySelector('#features');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-content-primary flex flex-col selection:bg-primary/15 selection:text-primary">
      {/* Navigation Bar */}
      <Navbar
        onSignInClick={() => handleOpenAuth('student')}
        onGetStartedClick={handleOpenDemo}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with interactive central dashboard */}
        <Hero
          onGetStartedClick={handleOpenDemo}
          onExploreClick={handleExploreScroll}
        />

        {/* 4 Key Metrics Strip */}
        <TrustStrip />

        {/* About Unisphere Section */}
        <AboutUnisphere onLearnMoreClick={handleLearnMoreScroll} />

        {/* 5 Tailored Portals */}
        <PortalCards onSelectPortal={(role) => handleOpenAuth(role)} />

        {/* 12 Academic & Campus Modules Grid */}
        <FeatureGrid />

        {/* Realistic Multi-Portal Application Showcase */}
        <AppShowcase />

        {/* Continuous 5-Role Connected Ecosystem */}
        <EcosystemFlow />

        {/* Technology Architecture Stack */}
        <Technology />

        {/* 3 Core Value Drivers */}
        <WhyUnisphere />

        {/* Simple on the Surface Micro-UI Preview Cards */}
        <SimpleSurface />

        {/* Role-Based Governance Matrix */}
        <RoleAccess onSelectRole={(role) => handleOpenAuth(role)} />

        {/* Final Blue Ambient CTA */}
        <FinalCTA
          onGetStartedClick={handleOpenDemo}
          onExploreClick={handleExploreScroll}
        />
      </main>

      {/* Footer */}
      <Footer
        onSignInClick={() => handleOpenAuth('student')}
        onGetStartedClick={handleOpenDemo}
      />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialRole={selectedRoleForAuth}
      />

      <DemoRequestModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}

export default App;
