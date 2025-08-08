import React from 'react';
import { MessageSquare, Github, Twitter, ExternalLink } from 'lucide-react';
import SEOHead from './SEOHead';

const CommunitySection: React.FC = () => {
  const communityChannels = [
    {
      name: 'Discord',
      description: 'Real-time discussions and community support',
      icon: MessageSquare,
      url: 'https://discord.gg/2mfvNvWYq7'
    },
    {
      name: 'Twitter',
      description: 'Protocol announcements and updates',
      icon: Twitter,
      url: 'https://x.com/Aethercycle'
    },
    {
      name: 'GitHub',
      description: 'Code repository and technical discussions',
      icon: Github,
      url: 'https://github.com/aethercycle'
    }
  ];

  return (
    <>
      <SEOHead
        title="Community - Join the AEC Ecosystem"
        description="Join the AEC community. Participate in governance and help shape the future of autonomous DeFi. Connect via Discord, Twitter, and GitHub."
        canonicalUrl="/community"
        keywords="AEC community, DeFi community, Discord, Twitter, GitHub, governance, autonomous finance"
      />
      <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">COMMUNITY</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the AEC community. Participate in governance and help shape 
            the future of autonomous DeFi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communityChannels.map((channel, index) => (
            <a
              key={index}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 bg-gray-900 p-6 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 block"
            >
              <div className="flex items-center justify-between mb-4">
                <channel.icon size={24} />
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{channel.name}</h3>
              <p className="text-sm text-gray-300 mb-6">{channel.description}</p>
              <div className="text-center">
                <span className="text-xs font-mono text-white hover:text-gray-300 transition-colors">
                  JOIN →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="border border-gray-700 bg-gray-900 p-8">
          <h3 className="text-xl font-bold mb-6 text-center">Community Principles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="font-mono text-sm font-medium mb-2">Mathematics Over Hype</h4>
              <p className="text-xs text-gray-400">
                Focus on protocol mechanics and mathematical proofs, not speculation.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-mono text-sm font-medium mb-2">Autonomous Operation</h4>
              <p className="text-xs text-gray-400">
                Support systems that operate without human intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CommunitySection;