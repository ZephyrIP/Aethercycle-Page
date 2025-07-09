import React from 'react';
import { AlertTriangle, Shield, Info, CheckCircle } from 'lucide-react';

const RiskSection: React.FC = () => {
  const riskCategories = [
    {
      level: 'High',
      color: 'text-red-400',
      bgColor: 'bg-red-900/20',
      borderColor: 'border-red-800',
      icon: AlertTriangle,
      risks: [
        {
          title: 'Smart Contract Risk',
          description: 'Immutable contracts cannot be updated if bugs are discovered.',
          mitigation: 'Extensive auditing and testing completed pre-deployment.'
        },
        {
          title: 'Market Risk',
          description: 'Token value subject to extreme volatility and potential loss.',
          mitigation: 'Mathematical endowment provides baseline protocol sustainability.'
        }
      ]
    },
    {
      level: 'Medium',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/20',
      borderColor: 'border-yellow-800',
      icon: Shield,
      risks: [
        {
          title: 'Liquidity Risk',
          description: 'Limited trading liquidity may affect price stability.',
          mitigation: 'Automated liquidity provision through PerpetualEngine.'
        },
        {
          title: 'Regulatory Risk',
          description: 'Potential future regulatory changes affecting DeFi protocols.',
          mitigation: 'Decentralized, autonomous operation reduces regulatory surface.'
        }
      ]
    },
    {
      level: 'Low',
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-800',
      icon: CheckCircle,
      risks: [
        {
          title: 'Operational Risk',
          description: 'Protocol depends on community maintenance and operation.',
          mitigation: 'Autonomous mechanisms reduce human operational dependencies.'
        },
        {
          title: 'Governance Risk',
          description: 'Community decisions may not align with individual interests.',
          mitigation: 'Limited governance scope protects core protocol immutability.'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">RISK ASSESSMENT</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive risk analysis for the AEC protocol. Understand the risks 
            before participating in the ecosystem.
          </p>
        </div>

        <div className="mb-16 p-8 border border-gray-700 bg-gray-900 rounded-lg">
          <div className="flex items-center mb-6">
            <Info className="mr-3 text-blue-400" size={24} />
            <h3 className="text-xl font-bold">Important Disclaimer</h3>
          </div>
          <div className="space-y-4 text-sm text-gray-300">
            <p>
              This risk assessment describes experimental financial software with inherent risks. 
              All smart contracts are immutable post-deployment and cannot be modified or upgraded.
            </p>
            <p>
              Participants should conduct thorough research and understand all risks before participation. 
              This information is not financial advice and should not be considered as such.
            </p>
            <p className="font-mono text-xs text-gray-400">
              Last updated: July 7, 2025
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {riskCategories.map((category, index) => (
            <div key={index} className={`border ${category.borderColor} ${category.bgColor} p-8 rounded-lg`}>
              <div className="flex items-center mb-6">
                <category.icon className={`mr-3 ${category.color}`} size={24} />
                <h3 className="text-xl font-bold">{category.level} Risk</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.risks.map((risk, riskIndex) => (
                  <div key={riskIndex} className="space-y-3">
                    <h4 className="font-mono text-sm font-medium">{risk.title}</h4>
                    <p className="text-sm text-gray-300">{risk.description}</p>
                    <div className="border-l-2 border-gray-700 pl-4">
                      <p className="text-xs text-gray-400">
                        <strong>Mitigation:</strong> {risk.mitigation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-gray-700 bg-gray-900 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Risk Management Framework</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="font-mono text-sm font-medium mb-2">Assess</h4>
              <p className="text-xs text-gray-400">Understand all risks before participation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="font-mono text-sm font-medium mb-2">Diversify</h4>
              <p className="text-xs text-gray-400">Never invest more than you can afford to lose</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="font-mono text-sm font-medium mb-2">Monitor</h4>
              <p className="text-xs text-gray-400">Stay informed about protocol developments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;