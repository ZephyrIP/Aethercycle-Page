import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();

  // Map routes to section names for header active state
  const getActiveSectionFromPath = (pathname: string): string => {
    switch (pathname) {
      case '/':
        return 'home';
      case '/documentation':
      case '/docs':
        return 'docs';
      case '/tokenomics':
      case '/token-economics':
        return 'tokenomics';
      case '/path-to-genesis':
      case '/prelaunch':
        return 'prelaunch';
      case '/faq':
        return 'faq';
      case '/whitepaper':
        return 'whitepaper';
      case '/community':
        return 'community';
      case '/risk':
      case '/risk-assessment':
        return 'risk';
      case '/privacy':
      case '/legal':
        return 'privacy';
      default:
        return 'home';
    }
  };

  const activeSection = getActiveSectionFromPath(location.pathname);

  const handleSectionChange = (section: string) => {
    switch (section) {
      case 'home':
        navigate('/');
        break;
      case 'docs':
        navigate('/documentation');
        break;
      case 'tokenomics':
        navigate('/tokenomics');
        break;
      case 'prelaunch':
        navigate('/path-to-genesis');
        break;
      case 'faq':
        navigate('/faq');
        break;
      case 'whitepaper':
        navigate('/whitepaper');
        break;
      case 'community':
        navigate('/community');
        break;
      case 'risk':
        navigate('/risk-assessment');
        break;
      case 'privacy':
        navigate('/legal');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<HeroSection onSectionChange={handleSectionChange} />} 
          />
          <Route 
            path="/documentation" 
            element={<DocumentationSection onSectionChange={handleSectionChange} />} 
          />
          <Route 
            path="/docs" 
            element={<DocumentationSection onSectionChange={handleSectionChange} />} 
          />
          <Route 
            path="/tokenomics" 
            element={<TokenEconomicsSection />} 
          />
          <Route 
            path="/token-economics" 
            element={<TokenEconomicsSection />} 
          />
          <Route 
            path="/path-to-genesis" 
            element={<PreLaunchSection onSectionChange={handleSectionChange} />} 
          />
          <Route 
            path="/prelaunch" 
            element={<PreLaunchSection onSectionChange={handleSectionChange} />} 
          />
          <Route 
            path="/faq" 
            element={<FAQSection />} 
          />
          <Route 
            path="/whitepaper" 
            element={<WhitepaperSection />} 
          />
          <Route 
            path="/community" 
            element={<CommunitySection />} 
          />
          <Route 
            path="/risk-assessment" 
            element={<RiskSection />} 
          />
          <Route 
            path="/risk" 
            element={<RiskSection />} 
          />
          <Route 
            path="/legal" 
            element={<PrivacySection />} 
          />
          <Route 
            path="/privacy" 
            element={<PrivacySection />} 
          />
          {/* Catch all route - redirect to home */}
          <Route 
            path="*" 
            element={<HeroSection onSectionChange={handleSectionChange} />} 
          />
        </Routes>
      </main>
      <Footer onSectionChange={handleSectionChange} />
    </div>
  );
}

export default App;