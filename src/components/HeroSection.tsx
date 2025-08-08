import React from 'react';
import { ExternalLink } from 'lucide-react';
import SEOHead from './SEOHead';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSectionChange }) => {
  return (
    <>
      <SEOHead
        title="AEC AetherCycle - Autonomous DeFi Protocol"
        description="Self-sustaining DeFi protocol with mathematical sustainability guarantees. No roadmap, no promises, just mathematics. 888M fixed supply, 1% founder allocation."
        canonicalUrl="/"
        keywords="AEC, AetherCycle, autonomous DeFi, mathematical sustainability, Base network, cryptocurrency, decentralized finance"
      />
      <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center mb-12">
            <img 
              src="/Aethercycle_AEC_Logo.png" 
              alt="AetherCycle Logo" 
              className="w-24 h-24 md:w-32 md:h-32 mb-8 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
              AUTONOMOUS
              <br />
              DEFI
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed tracking-normal">
            Self-sustaining protocol. No roadmap. No promises.
            <br />
            Just mathematics.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <button
              onClick={() => onSectionChange('faq')}
              className="border border-gray-700 text-white px-8 py-4 font-mono text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 min-w-[140px] justify-center"
            >
              READ FAQ
            </button>
            
            <button
              onClick={() => onSectionChange('docs')}
              className="border border-gray-700 text-white px-8 py-4 font-mono text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 min-w-[140px] justify-center"
            >
              READ DOCS
              <ExternalLink size={16} className="flex-shrink-0" />
            </button>

            <a
              href="https://app.aethercycle.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 font-mono text-sm hover:bg-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 min-w-[140px] justify-center"
            >
              LAUNCH APP
            </a>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-16">
            <div className="text-center py-6">
              <div className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">888M</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide leading-relaxed">Fixed Supply</div>
            </div>
            <div className="text-center py-6">
              <div className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">1%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide leading-relaxed">Founder Allocation</div>
            </div>
            <div className="text-center py-6">
              <div className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">0</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide leading-relaxed">VC Allocation</div>
            </div>
            <div className="text-center py-6">
              <div className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide leading-relaxed">Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;