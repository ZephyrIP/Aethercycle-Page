import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DocumentationSection from './components/DocumentationSection';
import RiskSection from './components/RiskSection';
import CommunitySection from './components/CommunitySection';
import FAQSection from './components/FAQSection';
import WhitepaperSection from './components/WhitepaperSection';
import PrivacySection from './components/PrivacySection';
import TokenEconomicsSection from './components/TokenEconomicsSection';
import PreLaunchSection from './components/PreLaunchSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onSectionChange={setActiveSection} />;
      case 'docs':
        return <DocumentationSection onSectionChange={setActiveSection} />;
      case 'tokenomics':
        return <TokenEconomicsSection />;
      case 'prelaunch':
        return <PreLaunchSection onSectionChange={setActiveSection} />;
      case 'risk':
        return <RiskSection />;
      case 'community':
        return <CommunitySection />;
      case 'faq':
        return <FAQSection />;
      case 'whitepaper':
        return <WhitepaperSection />;
      case 'privacy':
        return <PrivacySection />;
      default:
        return <HeroSection onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer onSectionChange={setActiveSection} />
    </div>
  );
}

export default App;