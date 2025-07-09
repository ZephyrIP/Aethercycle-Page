import React from 'react';
import { Shield, Eye, Lock, Users, AlertTriangle, FileText, Scale, Info } from 'lucide-react';

const PrivacySection: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">LEGAL DOCUMENTATION</h2>
          <p className="text-xl text-gray-300">
            Comprehensive legal notices, privacy policy, and risk disclosures for the AEC protocol.
          </p>
        </div>

        {/* Critical Disclaimer Banner */}
        <div className="mb-12 p-6 border-2 border-red-600 bg-red-900/20 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="mr-3 text-red-400 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3">CRITICAL LEGAL NOTICE</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                AEC is experimental financial software with substantial risks. All smart contracts are immutable and cannot be modified post-deployment. 
                You may lose your entire investment. Read the complete disclaimer below before participating.
              </p>
            </div>
          </div>
        </div>

        {/* Comprehensive Disclaimer */}
        <div className="mb-16 border border-gray-700 bg-gray-900 rounded-lg overflow-hidden">
          <div className="bg-gray-800 p-6 border-b border-gray-700">
            <div className="flex items-center">
              <Scale className="mr-3 text-yellow-400" size={24} />
              <h3 className="text-2xl font-bold">COMPREHENSIVE DISCLAIMER</h3>
            </div>
            <p className="text-sm text-gray-400 mt-2">IMPORTANT LEGAL NOTICE - READ CAREFULLY BEFORE PARTICIPATING</p>
          </div>
          
          <div className="p-6 space-y-8 text-sm leading-relaxed">
            {/* Experimental Software Warning */}
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                <AlertTriangle className="mr-2" size={18} />
                EXPERIMENTAL SOFTWARE WARNING
              </h4>
              <p className="text-gray-300 mb-3">
                AetherCycle (AEC) is experimental financial software implementing novel autonomous economic mechanisms. This protocol has not been tested at scale and may contain undiscovered vulnerabilities, bugs, or design flaws that could result in partial or total loss of funds. All smart contracts are immutable post-deployment and cannot be modified, upgraded, or corrected if issues arise.
              </p>
            </div>

            {/* Investment Risk Disclosure */}
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-3">INVESTMENT RISK DISCLOSURE</h4>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-red-400">HIGH RISK INVESTMENT:</strong> Participation in AEC involves substantial risk of loss. Token values are extremely volatile and may fluctuate dramatically or become worthless. Past performance does not indicate future results. You may lose your entire investment.</p>
                <p><strong className="text-yellow-400">MARKET RISKS:</strong> Cryptocurrency markets are highly speculative, unregulated, and subject to extreme volatility. Market conditions can change rapidly and unpredictably.</p>
                <p><strong className="text-yellow-400">LIQUIDITY RISKS:</strong> There is no guarantee that liquid markets will exist for AEC tokens. You may be unable to sell or transfer tokens when desired.</p>
                <p><strong className="text-yellow-400">TECHNOLOGICAL RISKS:</strong> Blockchain technology is experimental and subject to technical failures, network congestion, security vulnerabilities, and protocol changes that may affect functionality.</p>
              </div>
            </div>

            {/* No Financial Advice */}
            <div>
              <h4 className="text-lg font-bold text-blue-400 mb-3">NO FINANCIAL ADVICE</h4>
              <div className="space-y-3 text-gray-300">
                <p>This documentation and all related materials are for informational purposes only and do not constitute financial, investment, legal, or tax advice. Nothing contained herein should be construed as a recommendation to buy, sell, or hold any tokens or participate in any protocol activities.</p>
                <p><strong className="text-blue-400">CONSULT PROFESSIONALS:</strong> Before making any investment decisions, consult qualified financial advisors, legal counsel, and tax professionals appropriate to your jurisdiction and circumstances.</p>
              </div>
            </div>

            {/* Smart Contract Immutability */}
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3">SMART CONTRACT IMMUTABILITY</h4>
              <div className="space-y-3 text-gray-300">
                <p>All AEC protocol smart contracts are immutable and cannot be modified, paused, or upgraded after deployment. This includes:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Economic parameters and token distribution</li>
                  <li>Tax rates and revenue allocation mechanisms</li>
                  <li>Governance functions and founder accountability systems</li>
                  <li>Security features and access controls</li>
                </ul>
                <p><strong className="text-purple-400">NO EMERGENCY STOPS:</strong> There are no administrative functions to halt protocol operations, reverse transactions, or modify core mechanics if problems arise.</p>
              </div>
            </div>

            {/* Regulatory Uncertainty */}
            <div>
              <h4 className="text-lg font-bold text-orange-400 mb-3">REGULATORY UNCERTAINTY</h4>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-orange-400">LEGAL STATUS:</strong> The regulatory status of cryptocurrencies, DeFi protocols, and related activities varies by jurisdiction and is subject to change. Current or future regulations may prohibit or restrict access to AEC in your location.</p>
                <p><strong className="text-orange-400">COMPLIANCE RESPONSIBILITY:</strong> You are solely responsible for ensuring compliance with all applicable laws and regulations in your jurisdiction. We do not provide legal advice regarding regulatory compliance.</p>
                <p><strong className="text-orange-400">POTENTIAL RESTRICTIONS:</strong> Regulatory changes may affect the ability to access, use, or transfer tokens. Some jurisdictions may prohibit participation entirely.</p>
              </div>
            </div>

            {/* Technical Risks */}
            <div>
              <h4 className="text-lg font-bold text-cyan-400 mb-3">TECHNICAL RISKS</h4>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-cyan-400">SMART CONTRACT BUGS:</strong> Despite testing and auditing, smart contracts may contain vulnerabilities that could be exploited, resulting in loss of funds.</p>
                <p><strong className="text-cyan-400">ORACLE FAILURES:</strong> The protocol may depend on external data sources that could fail, be manipulated, or provide incorrect information.</p>
                <p><strong className="text-cyan-400">NETWORK CONGESTION:</strong> Blockchain network issues may prevent timely execution of transactions or protocol functions.</p>
                <p><strong className="text-cyan-400">INTEGRATION RISKS:</strong> Dependencies on external protocols (DEXs, bridges, etc.) introduce additional failure points beyond our control.</p>
              </div>
            </div>

            {/* No Warranties */}
            <div>
              <h4 className="text-lg font-bold text-gray-400 mb-3">NO WARRANTIES</h4>
              <div className="space-y-3 text-gray-300">
                <p>THE AEC PROTOCOL IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Merchantability or fitness for a particular purpose</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Security against unauthorized access or attacks</li>
                  <li>Compliance with applicable laws or regulations</li>
                  <li>Achievement of any particular investment returns</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-3">LIMITATION OF LIABILITY</h4>
              <div className="space-y-3 text-gray-300">
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>No party involved in AEC development shall be liable for any direct, indirect, incidental, special, or consequential damages</li>
                  <li>Total liability shall not exceed the amount you paid to participate in the protocol</li>
                  <li>This includes damages from loss of profits, data, or business interruption</li>
                  <li>Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you</li>
                </ul>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-lg font-bold text-green-400 mb-3">ACKNOWLEDGMENT</h4>
              <div className="space-y-3 text-gray-300">
                <p>BY PARTICIPATING IN THE AEC PROTOCOL, YOU ACKNOWLEDGE THAT:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>You have read and understood this disclaimer in its entirety</li>
                  <li>You accept all risks associated with experimental DeFi protocols</li>
                  <li>You are participating voluntarily and at your own risk</li>
                  <li>You have consulted appropriate professional advisors</li>
                  <li>You meet all legal requirements for participation in your jurisdiction</li>
                  <li>You understand that you may lose your entire investment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="mb-16 border border-gray-700 bg-gray-900 rounded-lg overflow-hidden">
          <div className="bg-gray-800 p-6 border-b border-gray-700">
            <div className="flex items-center">
              <Shield className="mr-3 text-blue-400" size={24} />
              <h3 className="text-2xl font-bold">PRIVACY POLICY</h3>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* What We Don't Collect */}
            <div>
              <div className="flex items-center mb-4">
                <Eye className="mr-3 text-red-400" size={20} />
                <h4 className="text-lg font-bold">WHAT WE DON'T COLLECT</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Personal information
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Email addresses
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  IP tracking or analytics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Browsing behavior
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Marketing data
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Usage statistics
                </li>
              </ul>
            </div>

            {/* What We Actually Use */}
            <div>
              <div className="flex items-center mb-4">
                <Lock className="mr-3 text-green-400" size={20} />
                <h4 className="text-lg font-bold">WHAT WE ACTUALLY USE</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Wallet address (for protocol interactions only)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Optional Twitter connection (for mission verification)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Optional Discord connection (for mission verification)
                </li>
              </ul>
            </div>

            {/* Blockchain Transparency */}
            <div>
              <div className="flex items-center mb-4">
                <Info className="mr-3 text-yellow-400" size={20} />
                <h4 className="text-lg font-bold">BLOCKCHAIN TRANSPARENCY</h4>
              </div>
              <p className="text-gray-300 text-sm">
                All blockchain transactions are permanently recorded and publicly visible. Privacy cannot be guaranteed for on-chain activities. 
                Your wallet address and transaction history are visible on the blockchain explorer.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border border-gray-700 bg-gray-900 p-8 rounded-lg text-center">
          <div className="flex items-center justify-center mb-6">
            <FileText className="mr-3 text-blue-400" size={24} />
            <h3 className="text-2xl font-bold">CONTACT INFORMATION</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300">
              All Inquiries: <span className="font-mono text-white">aethercycle@gmail.com</span>
            </p>
            <p className="text-sm text-gray-400">
              Last Updated: July 4, 2025
            </p>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xs text-gray-500">
                This document describes experimental financial software with inherent risks.
                <br />
                All smart contracts are immutable post-deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;