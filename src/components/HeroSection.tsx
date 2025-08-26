import React from 'react';
import { ExternalLink, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-16">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center mb-16">
            <img 
              src="/Aethercycle_AEC_Logo.png" 
              alt="AetherCycle Logo" 
              className="w-28 h-28 md:w-40 md:h-40 mb-8 opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-110 drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-tight bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              <span className="block">AUTONOMOUS</span>
              <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">DEFI</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed tracking-wide mb-6">
              Self-sustaining protocol. No roadmap. No promises.
            </p>
            <p className="text-xl md:text-2xl font-light text-white/80">
              Just <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">mathematics</span>.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Shield className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Immutable</h3>
              <p className="text-sm text-gray-400">No admin keys, no upgrades, pure mathematics</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Zap className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Autonomous</h3>
              <p className="text-sm text-gray-400">Self-operating without human intervention</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <TrendingUp className="w-8 h-8 text-green-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Sustainable</h3>
              <p className="text-sm text-gray-400">Mathematical endowment ensures infinite operation</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => onSectionChange('faq')}
              className="group border border-white/30 text-white px-8 py-4 font-mono text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 min-w-[140px] justify-center rounded-xl backdrop-blur-sm"
            >
              READ FAQ
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => onSectionChange('docs')}
              className="group border border-white/30 text-white px-8 py-4 font-mono text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 min-w-[140px] justify-center rounded-xl backdrop-blur-sm"
            >
              READ DOCS
              <ExternalLink size={16} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
            </button>

            <a
              href="https://app.aethercycle.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-white to-gray-200 text-black px-8 py-4 font-mono text-sm hover:from-gray-100 hover:to-white hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 min-w-[140px] justify-center rounded-xl font-bold"
            >
              LAUNCH APP
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-32 pt-16">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-3 tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">888M</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide leading-relaxed">Fixed Supply</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-3 tracking-tight bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">1%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide leading-relaxed">Founder Allocation</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-3 tracking-tight bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">0</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide leading-relaxed">VC Allocation</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-3 tracking-tight bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide leading-relaxed">Community</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;