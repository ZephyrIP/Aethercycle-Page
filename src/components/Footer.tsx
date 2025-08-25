import React from 'react';
import { Github, Twitter, MessageSquare } from 'lucide-react';

interface FooterProps {
  onSectionChange: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionChange }) => {
  const footerLinks = [
    {
      title: 'Protocol',
      links: [
        { name: 'Documentation', section: 'docs' },
        { name: 'Token Economics', section: 'tokenomics' },
        { name: 'Path to Genesis', section: 'prelaunch' },
        { name: 'Whitepaper', section: 'whitepaper' },
        { name: 'FAQ', section: 'faq' },
        { name: 'Risk Assessment', section: 'risk' }
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Discord', url: 'https://discord.gg/wadaks9KPt' },
        { name: 'Twitter', url: 'https://x.com/Aethercycle' },
        { name: 'GitHub', url: 'https://github.com/aethercycle' },
        { name: 'Governance', url: 'https://discord.gg/wadaks9KPt' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', section: 'privacy' },
        { name: 'Terms of Service', section: 'privacy' },
        { name: 'Disclaimer', section: 'privacy' },
        { name: 'Contact', section: 'privacy' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/Aethercycle' },
    { name: 'Discord', icon: MessageSquare, url: 'https://discord.gg/wadaks9KPt' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/aethercycle' },
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white border-t border-white/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <img 
                src="/Aethercycle_AEC_Logo.png" 
                alt="AEC Logo" 
                className="w-10 h-10 mr-4 hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-3xl font-bold tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">AEC</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Autonomous DeFi Protocol
              <br />
              Mathematical sustainability
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h4 className="font-mono text-base font-medium mb-6 uppercase tracking-wider text-white">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => onSectionChange(link.section!)}
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-16 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h4 className="font-mono text-base font-medium mb-4">Network Status</h4>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  BASE NETWORK
                </span>
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                  CONTRACTS IN DEV
                </span>
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                  PRE-TESTNET
                </span>
              </div>
            </div>
            <div className="text-right bg-gradient-to-l from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <p className="text-sm text-gray-400 leading-relaxed">
                This document describes experimental financial software with inherent risks.
                <br />
                All smart contracts are immutable post-deployment.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 AEC Protocol. Autonomous Finance. No promises, no roadmap, no centralized control.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;