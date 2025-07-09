import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, ExternalLink, FileText } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Generate unique IDs for ARIA relationships
  const generateId = (categoryIndex: number, faqIndex: number) => {
    return `faq-${categoryIndex}-${faqIndex}`;
  };

  const faqCategories = [
    {
      title: "Philosophy & Design",
      faqs: [
        {
          question: "Why no roadmap?",
          answer: "AEC is designed around reality, not promises and speculation. What you see now is what AEC is. All core infrastructure exists at genesis - PerpetualEngine, mathematical endowment, staking systems, and governance. We don't make future promises because we deliver everything upfront. Success is driven purely by mathematical design and community adoption, not marketing hype.\n\nNote: We do have a 'Path to Genesis' that outlines the necessary steps to deploy the complete protocol (community building, testing, audit, fair launch), but these are deployment prerequisites, not ongoing development promises."
        },
        {
          question: "What makes AEC fundamentally different?",
          answer: "AEC is non-speculative by design. There are no promises, no roadmaps to deliver, no adoption targets to hit. What you see is what you get - a complete, functioning autonomous system. You can calculate every parameter: endowment releases, tax distributions, burn rates, reward flows.\n\nWith traditional DeFi, you invest in promises and can't sleep peacefully wondering if the team will deliver their roadmap, if adoption will materialize, if they'll exit scam. That's speculative risk you can't quantify.\n\nWith AEC, all risks are transparent and calculable. Smart contract risk? Code is auditable. Market risk? Protocol operates regardless of price. Team risk? Protocol runs without the team. You invest knowing exactly what you're getting - working autonomous infrastructure, not future promises.\n\nYou're not betting on team execution or market speculation. You're investing in mathematical certainty and proven operational systems. This is how mature capital allocation works."
        },
        {
          question: "Is this just another experimental token?",
          answer: "Yes, and we're honest about it. This is experimental software with real risks. But unlike others, our experiments are backed by mathematical proofs and immutable code. We don't promise moon - we deliver working autonomous systems and let mathematics determine success."
        },
        {
          question: "Why no marketing or partnerships?",
          answer: "Mathematics doesn't need marketing. Either the protocol works or it doesn't. Real partnerships form naturally around valuable infrastructure. We're not paying influencers or buying fake partnerships. If AEC succeeds, it's because the technology is superior, not because we had better memes."
        }
      ]
    },
    {
      title: "Team & Governance",
      faqs: [
        {
          question: "What if the team dumps their tokens?",
          answer: "What team tokens? Founder gets 1% after 5 years, and community can burn it. No VC allocations. No \"advisor\" tokens. No \"marketing\" reserves. We eliminated the dump risk by eliminating the dump supply. Meanwhile, other protocols hand 30% to insiders and wonder why price crashes when unlock happens."
        },
        {
          question: "How does the 1% founder allocation work?",
          answer: "Founder gets only 1% (vs typical 20-30%) with a 5-year cliff vesting. But here's the key: the community DAO can vote to extend vesting or permanently burn the entire allocation. This creates unprecedented accountability - founder compensation depends entirely on community satisfaction and protocol success."
        },
        {
          question: "What if the developer disappears after launch?",
          answer: "Checkmate. That's exactly the point. Unlike traditional DeFi where founders disappearing = protocol death, AEC is designed for this scenario. PerpetualEngine runs autonomously, endowment keeps releasing funds, staking rewards continue flowing. The founder could literally get hit by a bus tomorrow and AEC keeps operating for decades. Try asking other protocols this question - watch them stutter about \"strong team commitment\" and \"community takeover plans.\""
        },
        {
          question: "Who controls the protocol treasury?",
          answer: "Nobody. There is no treasury multisig for humans to control. All funds flow through immutable smart contracts. Compare this to \"decentralized\" protocols where 5-of-9 multisig can drain everything. Our treasuryless design makes exit scams mathematically impossible."
        },
        {
          question: "What about governance attacks?",
          answer: "What governance? Core protocol parameters are immutable. No DAO can vote to change tax rates, modify endowment mechanics, or upgrade contracts. Governance only controls founder compensation. We learned from other protocols that got destroyed by their own \"democratic\" governance."
        }
      ]
    },
    {
      title: "Fair Launch & Liquidity",
      faqs: [
        {
          question: "How is initial liquidity obtained?",
          answer: "Through Fair Launch mechanism only. We allocate specific tokenomics portion for initial liquidity, designed to be balanced not excessive. Fair Launch is completely equitable - you deposit USDC, everyone gets proportional allocation regardless of amount. Formula: (Your USDC / Total USDC) × Total Fair Launch Allocation = Your tokens. No vesting because we trust Fair Launch participants believe in our vision."
        },
        {
          question: "What if developers run away with Fair Launch funds?",
          answer: "Impossible by design. All USDC from Fair Launch automatically flows to LiquidityDeployer smart contract, not to any human wallet. The contract automatically creates AEC/USDC pair using fair launch funds + AEC allocation. Participants claim their tokens BEFORE liquidity is added. Zero human intervention in fund handling."
        },
        {
          question: "Can the team rug pull by removing LP tokens?",
          answer: "No. All LP tokens from LiquidityDeployer.sol automatically stake in LP staking contract with permanent lock design - they can NEVER be withdrawn. Protocol-owned liquidity grows forever, never shrinks. This is anti-rug by mathematical impossibility."
        }
      ]
    },
    {
      title: "Protocol Mechanics",
      faqs: [
        {
          question: "What is the PerpetualEngine?",
          answer: "The autonomous economic heart of AEC. It processes transaction taxes, burns 20%, adds 40% to liquidity, and distributes 40% as rewards. Anyone can trigger cycles and earn 0.1% of processed amount. No human intervention required - pure mathematics in action."
        },
        {
          question: "Where do all protocol revenues go?",
          answer: "100% back to the protocol and community. Zero extraction by developers. Every fraction of revenue flows through immutable smart contracts: transaction taxes → PerpetualEngine → 20% burn + 40% liquidity + 40% staking rewards. NFT minting fees → PerpetualEngine → same distribution. Gambling fees → PerpetualEngine → same distribution. LP yields → PerpetualEngine → same distribution.\n\nThere are no developer fees, no protocol fees, no admin take. Developers cannot extract value from protocol operations - ever."
        },
        {
          question: "Why the transaction tax system?",
          answer: "Our \"Tolerant Fortress\" protects the ecosystem while staying permissionless. 0% tax for normal transfers, 2-2.5% for official trading, 10-12.5% for unofficial contracts. This concentrates liquidity on official pairs while capturing value from arbitrage and MEV."
        },
        {
          question: "What prevents PerpetualEngine from dying?",
          answer: "Triple funding sources: (1) Perpetual Endowment provides baseline funding forever (2) Transaction taxes provide activity-based revenue (3) Its own LP staking position compounds daily, growing larger and generating more rewards. It's designed as a self-reinforcing positive feedback loop."
        },
        {
          question: "How can the protocol never stop working?",
          answer: "Mathematical impossibility of failure. Protocol has reserve funds, LP staking rewards that stay within ecosystem, and creates healthy \"devil loop\" where tokens flow back into protocol systems continuously. There's no extraction mechanism - only accumulation and redistribution."
        }
      ]
    },
    {
      title: "Token Utilities & Staking",
      faqs: [
        {
          question: "What are AEC token utilities?",
          answer: "Multiple utility layers: (1) Governance - vote on founder vesting decisions (extend/burn allocation) (2) Staking rewards - earn yield through token staking with lock multipliers (3) Transaction medium - used for all protocol interactions, NFT minting, gambling (4) Deflationary asset - 20% of all protocol revenue burned permanently (5) Liquidity provision - pair with stablecoins for LP rewards (6) Protocol fuel - powers all autonomous operations."
        },
        {
          question: "How does token staking work?",
          answer: "Tiered lock system with multipliers: 30-day lock = 1.1x rewards, 90-day lock = 1.3x rewards, 180-day lock = 1.6x rewards. Longer commitment = higher returns. Rewards come from 15% of total protocol revenue. You can partially withdraw after unlock or compound automatically. No maximum staking amount, scales infinitely."
        },
        {
          question: "What about LP staking for market makers?",
          answer: "Premium rewards for liquidity providers. Stake AEC/USDC LP tokens for enhanced yields receiving 20% of total protocol revenue (largest allocation). Lock periods: 7-day (1.0x), 30-day (1.2x), 90-day (1.5x). PerpetualEngine stakes permanently but gets base 1.0x multiplier, so active LPs can out-earn the protocol itself with longer locks."
        },
        {
          question: "Can regular users compete with PerpetualEngine's large LP staking position?",
          answer: "Yes, easily. PerpetualEngine gets the lowest reward multiplier despite its size. Regular users can stake for 30/60/90 days with increasing reward multipliers that often exceed the Engine's returns. We designed this specifically so retail isn't disadvantaged by protocol size."
        },
        {
          question: "Are there other staking opportunities?",
          answer: "NFT staking available. Aetheria NFT collection (max 500 pieces) can be staked for 5% of protocol revenue. NFTs minted using AEC tokens, proceeds go to PerpetualEngine. Different rarity traits provide different staking multipliers. Limited supply creates scarcity value beyond utility."
        },
        {
          question: "Can I use AEC for anything besides staking?",
          answer: "Yes, multiple utilities: Mint Aetheria NFTs for collection/staking, play AECGambit (provably fair gambling), pay transaction taxes (auto-deducted), participate in governance voting, provide liquidity pairs. All ecosystem activities require AEC, creating natural demand beyond speculation."
        }
      ]
    },
    {
      title: "Sustainability & Competition",
      faqs: [
        {
          question: "What happens when yield farming rewards end?",
          answer: "They don't end. Mathematical endowment provides baseline funding forever. While other protocols scramble for \"liquidity mining Season 2\" or beg VCs for more runway, AEC operates on autopilot. We solved the sustainability problem that kills 99% of DeFi protocols."
        },
        {
          question: "How do you compete with higher APY protocols?",
          answer: "We don't. High APY = high inflation = eventual collapse. We offer sustainable yields backed by real revenue and mathematical guarantees. Yield chasers will leave for the next 1000% APY farm, and we'll wave goodbye while continuing to operate when their protocol is dead."
        },
        {
          question: "What makes AEC staking sustainable long-term?",
          answer: "Diversified revenue sources feeding rewards: Transaction taxes (continuous), PerpetualEngine LP position (growing), Perpetual Endowment releases (infinite), NFT minting proceeds, gambling fees. Unlike typical yield farming that ends when emissions stop, our rewards come from real protocol revenue that scales with usage."
        },
        {
          question: "How do market makers benefit specifically?",
          answer: "Multiple revenue streams: (1) Trading fees from providing liquidity (2) LP staking rewards (largest protocol allocation) (3) Lock multipliers for longer commitments (4) Protocol-owned liquidity never competes aggressively (5) Growing TVL from autonomous LP additions increases trading volume. We designed the system to reward professional liquidity provision."
        },
        {
          question: "How long can the protocol operate?",
          answer: "Mathematically, forever. The 35% endowment releases 0.5% monthly, creating infinite operational funding. Even if all trading stops, the protocol continues operating through endowment releases. This is sustainability through mathematics, not hope."
        }
      ]
    },
    {
      title: "Security & Regulatory Resistance",
      faqs: [
        {
          question: "Can the tokenomics be changed?",
          answer: "No. All core parameters are immutable post-deployment. Tax rates, distribution percentages, endowment mechanics - everything is locked in code. No governance can modify the economic model. What you see is what you get, permanently."
        },
        {
          question: "Why should I trust this?",
          answer: "Don't trust - verify. All code is open source and will be audited. The beauty of AEC is you don't need to trust anyone. Smart contracts enforce all rules automatically. Mathematics doesn't lie, and immutable code can't be corrupted."
        },
        {
          question: "What if AEC gets hit by regulations?",
          answer: "Better question: What if YOUR token has upgradeable features? When regulators come knocking, protocols with admin keys, multisigs, or upgrade mechanisms can be forced to shut down, freeze contracts, or modify tokenomics. One court order = protocol death.\n\nWith AEC: When regulators tell developer to stop the protocol, developer answers \"I can't - AEC runs autonomously.\"\n\nNo kill switch exists. No admin keys to confiscate. No multisig to pressure. No servers to raid. The mathematics run on thousands of decentralized nodes. Developer literally cannot stop AEC even if they wanted to comply with shutdown orders.\n\nThis is TRUE regulatory resistance through technical impossibility, not legal arguments. Other protocols claim decentralization but retain emergency powers \"just in case.\" AEC burns those bridges intentionally.\n\nRegulators can ban developer, arrest developer, sue developer - protocol keeps operating. They'd have to shut down Base network itself to stop AEC, which means shutting down Coinbase, which means... good luck with that.\n\nMeanwhile, ask holders of \"compliant\" DeFi tokens how they'll feel when their upgradeable protocol gets \"regulatory updates\" that destroy tokenomics to satisfy bureaucrats.\n\nTrue decentralization isn't a feature - it's the ultimate regulatory moat."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-xl text-gray-300">
            Direct answers about AEC's philosophy, mechanics, and mathematical guarantees.
          </p>
        </div>

        {/* Important Disclaimer */}
        <div className="mb-12 p-6 border border-yellow-600 bg-yellow-900/20 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="mr-3 text-yellow-400 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-3">IMPORTANT DISCLAIMER</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                This information is not financial advice and should not be construed as investment guidance or recommendations. 
                AEC represents experimental financial software with inherent risks including total loss of capital. All smart contracts 
                are immutable and cannot be upgraded post-deployment.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mt-3">
                Before participating, you must thoroughly research all risks, read our complete Disclaimer, Privacy Policy, and Terms of Service. 
                Cryptocurrency investments are highly volatile and may not be suitable for all investors. You are solely responsible for your 
                investment decisions and their consequences.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mt-3">
                Consult qualified financial advisors and legal counsel appropriate to your jurisdiction before making any investment decisions.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} role="region" aria-labelledby={`category-${categoryIndex}`}>
              <h3 id={`category-${categoryIndex}`} className="text-2xl font-bold mb-6 text-center border-b border-gray-700 pb-4">
                {category.title}
              </h3>
              <div className="space-y-4" role="list">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex; // Unique index for each FAQ
                  const faqId = generateId(categoryIndex, faqIndex);
                  const answerId = `${faqId}-answer`;
                  const isExpanded = openFAQ === globalIndex;
                  
                  return (
                    <div 
                      key={globalIndex} 
                      className="border border-gray-700 bg-gray-900 rounded-lg overflow-hidden"
                      role="listitem"
                    >
                      <button
                        id={faqId}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                        onClick={() => setOpenFAQ(openFAQ === globalIndex ? null : globalIndex)}
                        aria-expanded={isExpanded}
                        aria-controls={answerId}
                        aria-describedby={isExpanded ? answerId : undefined}
                      >
                        <span className="font-mono text-sm font-medium pr-4">{faq.question}</span>
                        {isExpanded ? (
                          <ChevronUp size={20} className="text-gray-400 flex-shrink-0" aria-hidden="true" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-400 flex-shrink-0" aria-hidden="true" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <div 
                          id={answerId}
                          className="px-6 pb-4 border-t border-gray-800"
                          role="region"
                          aria-labelledby={faqId}
                        >
                          <div className="text-sm text-gray-300 leading-relaxed pt-4 whitespace-pre-line">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Join our community channels for real-time support and discussions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Community support links">
            <a
              href="https://discord.gg/wadaks9KPt"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 text-white px-8 py-4 font-mono text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2 min-w-[140px]"
              aria-label="Join Discord community for support"
            >
              <ExternalLink size={16} aria-hidden="true" />
              JOIN DISCORD
            </a>
            <a
              href="#docs"
              className="border border-gray-700 text-white px-8 py-4 font-mono text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2 min-w-[140px]"
              aria-label="View comprehensive documentation"
            >
              <FileText size={16} aria-hidden="true" />
              VIEW DOCS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;