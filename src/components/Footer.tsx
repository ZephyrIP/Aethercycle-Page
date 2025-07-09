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
    <footer className="bg-black text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/Aethercycle_AEC_Logo.png" 
                alt="AEC Logo" 
                className="w-8 h-8 mr-3"
              />
              <h3 className="text-2xl font-bold tracking-wider">AEC</h3>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Autonomous DeFi Protocol
              <br />
              Mathematical sustainability
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-mono text-sm font-medium mb-4 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => onSectionChange(link.section!)}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
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

        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-mono text-sm font-medium mb-2">Network Status</h4>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  BASE NETWORK
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  CONTRACTS IN DEV
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  PRE-TESTNET
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">
                This document describes experimental financial software with inherent risks.
                <br />
                All smart contracts are immutable post-deployment.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © 2024 AEC Protocol. Autonomous Finance. No promises, no roadmap, no centralized control.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;