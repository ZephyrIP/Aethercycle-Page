import React, { useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  Target,
  Calendar,
  AlertTriangle,
  Info,
  ExternalLink,
  MessageSquare,
  Twitter,
  FileText,
  Github
} from 'lucide-react';
import SEOHead from './SEOHead';

interface PreLaunchSectionProps {
  onSectionChange: (section: string) => void;
}

const PreLaunchSection: React.FC<PreLaunchSectionProps> = ({ onSectionChange }) => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 'community',
      title: 'Community Building',
      status: 'active',
      timeline: 'Q2 2025 - Q3 2025',
      description: 'Building foundational community, education, and gathering early supporters while transitioning from private to public',
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-700',
      details: [
        'Transitioning from private to public community',
        'Core contributor recruitment and vetting',
        'Educational content creation and distribution',
        'Community governance framework preparation',
        'Public awareness and early supporter onboarding'
      ],
      currentStatus: 'Currently going public after internal development phase, focusing on community education and growth'
    },
    {
      id: 'repository',
      title: 'Internal Testing & Development',
      status: 'active',
      timeline: 'Q2 2025 - Q3 2025',
      description: 'Intensive internal testing, concept refinement, and private development completion',
      icon: Github,
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-700',
      details: [
        'Smart contract development and refinement',
        'Intensive internal testing and concept validation',
        'Private repository development with core team',
        'Bug identification and resolution',
        'Gas optimization and mathematical model validation'
      ],
      currentStatus: 'Active internal testing phase, preparing for public testnet deployment'
    },
    {
      id: 'testnet',
      title: 'Public Testnet',
      status: 'upcoming',
      timeline: 'Q3 2025 - Q4 2025',
      description: 'Public testing phase with community participation',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/20',
      borderColor: 'border-yellow-700',
      details: [
        'Public testnet deployment on Base Sepolia',
        'Community testing and feedback collection',
        'Bug bounty program launch',
        'User interface and experience refinement',
        'Documentation completion and review'
      ],
      currentStatus: 'Scheduled after internal testing completion'
    },
    {
      id: 'audit',
      title: 'Security Audit & Bug Bounty',
      status: 'upcoming',
      timeline: 'Q4 2025',
      description: 'Comprehensive security audit and community bug bounty program',
      icon: Shield,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
      borderColor: 'border-purple-700',
      details: [
        'Professional third-party security audit',
        'Community bug bounty program activation',
        'Vulnerability assessment and penetration testing',
        'Security improvements and optimization implementation',
        'Public audit report and transparency documentation'
      ],
      currentStatus: 'Scheduled after successful public testnet phase'
    },
    {
      id: 'fairlaunch',
      title: 'Fair Launch',
      status: 'upcoming',
      timeline: 'Q1 2026',
      description: 'Public fair launch and protocol activation',
      icon: Target,
      color: 'text-red-400',
      bgColor: 'bg-red-900/20',
      borderColor: 'border-red-700',
      details: [
        '48-hour fair launch contribution period',
        'Transparent price discovery mechanism',
        'Automated liquidity deployment',
        'Protocol activation and autonomous operation begins',
        'Community governance transition to full autonomy'
      ],
      currentStatus: 'Scheduled after successful audit and security validation'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Clock className="text-blue-400" size={16} />;
      case 'upcoming':
        return <Calendar className="text-gray-400" size={16} />;
      default:
        return <CheckCircle className="text-green-400" size={16} />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'IN PROGRESS';
      case 'upcoming':
        return 'UPCOMING';
      default:
        return 'COMPLETED';
    }
  };

  return (
    <>
      <SEOHead
        title="Path to Genesis - Deployment Timeline"
        description="The necessary steps to deploy a complete, autonomous protocol. These are not promises of future features—they are prerequisites for launching a fully functional system."
        canonicalUrl="/path-to-genesis"
        keywords="path to genesis, deployment timeline, protocol launch, AEC roadmap, autonomous deployment"
      />
      <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">PATH TO GENESIS</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            The necessary steps to deploy a complete, autonomous protocol. 
            These are not promises of future features—they are prerequisites for launching 
            a fully functional system that operates without further development.
          </p>
          
          {/* Important Distinction */}
          <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-start">
              <Info className="mr-3 text-blue-400 mt-1 flex-shrink-0" size={20} />
              <div className="text-left">
                <h3 className="text-lg font-bold text-blue-400 mb-2">This is NOT a Roadmap</h3>
                <p className="text-sm text-gray-300">
                  Traditional roadmaps promise future features and ongoing development. 
                  This is a deployment checklist—the steps required to launch a complete, 
                  autonomous system that needs no further development after genesis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Deployment Timeline</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 ${
                    phase.status === 'active' ? 'bg-blue-500 border-blue-400' :
                    phase.status === 'upcoming' ? 'bg-gray-700 border-gray-500' :
                    'bg-green-500 border-green-400'
                  }`}>
                    <phase.icon size={24} className="text-white" />
                  </div>
                  
                  {/* Phase Content */}
                  <div className="ml-8 flex-1">
                    <button
                      onClick={() => setActivePhase(index)}
                      className={`w-full text-left p-6 rounded-lg border transition-all duration-300 ${
                        activePhase === index 
                          ? `${phase.borderColor} ${phase.bgColor}` 
                          : 'border-gray-700 bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold">{phase.title}</h4>
                          <p className="text-sm text-gray-400">{phase.timeline}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(phase.status)}
                          <span className={`text-xs font-mono px-2 py-1 rounded ${
                            phase.status === 'active' ? 'bg-blue-900 text-blue-400' :
                            phase.status === 'upcoming' ? 'bg-gray-800 text-gray-400' :
                            'bg-green-900 text-green-400'
                          }`}>
                            {getStatusText(phase.status)}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{phase.description}</p>
                      
                      {activePhase === index && (
                        <div className="mt-6 pt-6 border-t border-gray-700">
                          <h5 className="font-bold mb-3">Phase Details:</h5>
                          <ul className="space-y-2 mb-4">
                            {phase.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start text-sm">
                                <CheckCircle size={16} className="mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                          <div className="bg-gray-800 p-4 rounded">
                            <h6 className="font-medium text-green-400 mb-2">Current Status:</h6>
                            <p className="text-sm text-gray-300">{phase.currentStatus}</p>
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Deployment Principles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Shield className="mx-auto mb-4 text-blue-400" size={32} />
              <h4 className="font-bold mb-2">Complete at Genesis</h4>
              <p className="text-sm text-gray-300">
                All features and mechanisms will be fully functional from day one. 
                No future development required.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Target className="mx-auto mb-4 text-green-400" size={32} />
              <h4 className="font-bold mb-2">Autonomous Operation</h4>
              <p className="text-sm text-gray-300">
                Protocol operates independently without human intervention 
                after successful deployment.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Users className="mx-auto mb-4 text-purple-400" size={32} />
              <h4 className="font-bold mb-2">Community Controlled</h4>
              <p className="text-sm text-gray-300">
                99% of tokens controlled by community with unprecedented 
                founder accountability mechanisms.
              </p>
            </div>
          </div>
        </div>

        {/* What Happens After Genesis */}
        <div className="mb-16 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-700 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">What Happens After Genesis?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-green-400 mb-3">Protocol Operations</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />PerpetualEngine processes revenue automatically</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Mathematical endowment releases monthly</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Staking rewards distributed continuously</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Burns and liquidity provision automated</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-3">Community Activities</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-blue-400" />Governance votes on founder accountability</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-blue-400" />Community-driven ecosystem growth</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-blue-400" />Bug bounty and security monitoring</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-blue-400" />Educational content and adoption</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community Participation */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Join the Journey</h3>
          <p className="text-center text-gray-300 mb-8">
            Participate in the pre-launch phases and help ensure a successful genesis deployment.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://discord.gg/wadaks9KPt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-6 rounded-lg text-center transition-colors group"
            >
              <MessageSquare className="mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="font-bold mb-2">Join Discord</h4>
              <p className="text-sm opacity-90">Participate in community discussions and testing</p>
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-blue-200 hover:text-white transition-colors">
                  JOIN COMMUNITY →
                </span>
              </div>
            </a>
            
            <a
              href="https://x.com/Aethercycle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 p-6 rounded-lg text-center transition-colors group"
            >
              <Twitter className="mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="font-bold mb-2">Follow Updates</h4>
              <p className="text-sm opacity-90">Stay informed about deployment progress</p>
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-gray-300 hover:text-white transition-colors">
                  FOLLOW →
                </span>
              </div>
            </a>
            
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSectionChange('whitepaper');
              }}
              className="bg-gray-700 hover:bg-gray-600 p-6 rounded-lg text-center transition-colors group"
            >
              <FileText className="mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="font-bold mb-2">View Whitepaper</h4>
              <p className="text-sm opacity-90">Complete whitepaper and technical documentation</p>
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-gray-300 hover:text-white transition-colors">
                  VIEW WHITEPAPER →
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-16 p-6 border border-yellow-600 bg-yellow-900/20 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="mr-3 text-yellow-400 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-3">Important Notice</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                These phases represent necessary steps to deploy a complete autonomous protocol, not promises of future features. 
                The timeline may adjust based on security requirements, audit findings, or community feedback. 
                The goal is to launch a mathematically sustainable system that operates independently after genesis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PreLaunchSection;