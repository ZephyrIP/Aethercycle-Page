import React, { useState } from 'react';
import { BookOpen, Zap, Shield, Users, Code, FileText, ChevronRight, ExternalLink } from 'lucide-react';

const DocumentationSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Protocol Overview', icon: BookOpen },
    { id: 'quickstart', title: 'Quick Start Guide', icon: Zap },
    { id: 'tokenomics', title: 'Token Economics', icon: FileText },
    { id: 'security', title: 'Security Model', icon: Shield },
    { id: 'governance', title: 'Governance', icon: Users },
    { id: 'technical', title: 'Technical Specs', icon: Code }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <img 
          src="/Aethercycle_AEC_Logo.png" 
          alt="AetherCycle Logo" 
          className="w-16 h-16 mx-auto mb-4 opacity-80"
        />
        <h3 className="text-2xl font-bold mb-4">AetherCycle Protocol Overview</h3>
      </div>
      <div className="space-y-6 text-gray-300">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Autonomous DeFi Protocol</h4>
          <p className="mb-2"><strong>Version:</strong> 1.0</p>
          <p className="mb-2"><strong>Publication Date:</strong> July 2025</p>
          <p className="mb-2"><strong>Network:</strong> Base (Ethereum Layer 2)</p>
          <p className="mb-4"><strong>Total Supply:</strong> 888,888,888 AEC (Fixed)</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">What is AetherCycle?</h4>
          <h5 className="text-md font-medium text-white mb-2">The Problem with Modern DeFi</h5>
          <p className="mb-4">The decentralized finance ecosystem faces fundamental sustainability challenges that have led to the failure of countless protocols:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Yield Locusts:</strong> Users farm high APY rewards temporarily, dump tokens, and leave when emissions end</li>
            <li><strong>Founder Risk:</strong> Teams typically hold 20-30% allocations with short vesting periods, creating constant sell pressure</li>
            <li><strong>Governance Capture:</strong> Multisig controls and whale dominance undermine true decentralization</li>
            <li><strong>Growth Dependency:</strong> Unsustainable tokenomics requiring infinite user growth to maintain operations</li>
          </ul>
          <p className="mb-4">Most DeFi protocols die within 6-24 months when their growth assumptions prove incorrect and token emissions end.</p>
        </div>

        <div>
          <h5 className="text-md font-medium text-white mb-2">The AetherCycle Solution</h5>
          <p className="mb-4">AetherCycle introduces Autonomous Finance (AutonoFi) - a new category of DeFi protocols that operate independently of human intervention through mathematical sustainability guarantees.</p>
          <p className="mb-4"><strong>Core Innovation:</strong> Instead of relying on promises, roadmaps, or continuous growth, AEC delivers a complete, working autonomous system that operates through pure mathematics.</p>
        </div>

        <div>
          <h5 className="text-md font-medium text-white mb-2">What Makes AEC Different</h5>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h6 className="font-medium text-red-400 mb-2">Traditional DeFi:</h6>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Promises future features via roadmaps</li>
                <li>Depends on team execution and funding</li>
                <li>High founder allocations (20-30%)</li>
                <li>Governance can modify core parameters</li>
                <li>Success depends on speculation and hype</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-green-400 mb-2">AetherCycle:</h6>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Everything exists at genesis - no roadmap needed</li>
                <li>Operates autonomously through smart contracts</li>
                <li>Minimal founder allocation (1%) with community control</li>
                <li>Immutable core parameters - no governance corruption</li>
                <li>Success depends on mathematical sustainability</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Core Concepts</h4>
          
          <div className="mb-6">
            <h5 className="text-md font-medium text-white mb-2">Pure Protocol Architecture</h5>
            <p className="mb-2">AetherCycle embodies the "Pure Protocol" design philosophy:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Immutable Core:</strong> All essential parameters locked permanently at deployment</li>
              <li><strong>No Admin Keys:</strong> No human can pause, modify, or control core functions</li>
              <li><strong>Complete at Launch:</strong> Every feature works from day one - no future development required</li>
              <li><strong>Community Operated:</strong> Protocol maintenance performed by community incentives</li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="text-md font-medium text-white mb-2">Mathematical Endowment System</h5>
            <p className="mb-2">The protocol's sustainability foundation is a Mathematical Endowment comprising 35% of total supply (311,111,111 AEC):</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><strong>Purpose:</strong> Provides guaranteed baseline funding independent of market conditions</li>
              <li><strong>Release Mechanism:</strong> 0.5% of remaining balance released monthly</li>
              <li><strong>Duration:</strong> Infinite - mathematical proof ensures perpetual operation</li>
              <li><strong>Control:</strong> Fully automated smart contract - no human access</li>
            </ul>
            
            <div className="bg-gray-800 p-4 rounded mb-4">
              <h6 className="font-medium mb-2">Example Timeline:</h6>
              <ul className="text-sm space-y-1">
                <li>Month 1: Release 1,555,556 AEC</li>
                <li>Month 12: Release 1,464,912 AEC</li>
                <li>Month 60: Release 1,211,904 AEC</li>
                <li>Month 120: Release 979,851 AEC</li>
              </ul>
            </div>
            <p>The endowment ensures protocol operation even during extended bear markets or low user activity.</p>
          </div>

          <div className="mb-6">
            <h5 className="text-md font-medium text-white mb-2">PerpetualEngine - Autonomous Economic Processor</h5>
            <p className="mb-2">The PerpetualEngine is AEC's autonomous economic heart that processes all protocol revenue:</p>
            
            <div className="mb-4">
              <h6 className="font-medium mb-2">Revenue Sources:</h6>
              <ul className="list-disc list-inside space-y-1">
                <li>Transaction taxes (2-12.5% depending on trading route)</li>
                <li>LP staking yields from protocol-owned liquidity</li>
                <li>Monthly endowment releases</li>
              </ul>
            </div>

            <div className="mb-4">
              <h6 className="font-medium mb-2">Automated Distribution:</h6>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>20% Burn:</strong> Permanent supply reduction</li>
                <li><strong>40% Liquidity:</strong> Automated LP provision to strengthen ecosystem</li>
                <li><strong>40% Rewards:</strong> Distribution to all staking participants</li>
              </ul>
            </div>

            <p><strong>Community Operation:</strong> Anyone can trigger processing cycles and earn 0.1% of processed revenue as incentive.</p>
          </div>

          <div className="mb-6">
            <h5 className="text-md font-medium text-white mb-2">Community Control Framework</h5>
            <p className="mb-2">AetherCycle implements unprecedented community control over founder compensation:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><strong>Founder Allocation:</strong> Only 1% of total supply (vs typical 20-30%)</li>
              <li><strong>Vesting Period:</strong> 5-year cliff (no gradual releases)</li>
            </ul>
            
            <div className="mb-4">
              <h6 className="font-medium mb-2">Community Powers:</h6>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Extend Vesting:</strong> DAO can vote to extend founder vesting up to 2 additional years</li>
                <li><strong>Burn Allocation:</strong> DAO can permanently destroy founder tokens for poor performance</li>
              </ul>
            </div>
            <p>This creates the strongest accountability mechanism ever deployed in DeFi.</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Getting Involved</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-md font-medium text-white mb-2">Fair Launch Participation</h5>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Prepare USDC for contributions</li>
                <li>Contribute during 48-hour window</li>
                <li>Receive proportional allocation</li>
                <li>Trade immediately after launch</li>
              </ul>
            </div>
            <div>
              <h5 className="text-md font-medium text-white mb-2">Community Governance</h5>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Vote on founder vesting decisions</li>
                <li>Help grow the ecosystem</li>
                <li>Earn rewards by triggering cycles</li>
                <li>Report bugs for bounty rewards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuickStart = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <img 
          src="/Aethercycle_AEC_Logo.png" 
          alt="AetherCycle Logo" 
          className="w-16 h-16 mx-auto mb-4 opacity-80"
        />
        <h3 className="text-2xl font-bold mb-4">Quick Start Guide</h3>
        <p className="text-xl text-gray-300 mb-6">Begin using AEC in 5 minutes - Get up and running with AetherCycle Protocol quickly and safely.</p>
      </div>
      
      <div className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
            Prerequisites (1 minute)
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-white mb-2">What You Need:</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li><strong>Wallet:</strong> MetaMask, Coinbase Wallet, or any Web3 wallet</li>
                <li><strong>Network:</strong> Base network configured</li>
                <li><strong>Funds:</strong> USDC for Fair Launch participation (optional)</li>
                <li><strong>Browser:</strong> Chrome, Firefox, or Brave recommended</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-white mb-2">Base Network Setup:</h5>
              <p className="text-gray-300 mb-2">If Base isn't in your wallet yet:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-300">
                <li>Visit bridge.base.org</li>
                <li>Click "Add Base Network"</li>
                <li>Confirm in your wallet</li>
              </ol>
              
              <div className="mt-4 bg-gray-900 p-4 rounded">
                <h6 className="font-medium text-white mb-2">Network Details:</h6>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li><strong>Name:</strong> Base</li>
                  <li><strong>RPC:</strong> https://mainnet.base.org</li>
                  <li><strong>Chain ID:</strong> 8453</li>
                  <li><strong>Currency:</strong> ETH</li>
                  <li><strong>Explorer:</strong> https://basescan.org</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
            Get AEC Tokens (2 minutes)
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-green-400 mb-2">Option A: Fair Launch (Recommended)</h5>
              <p className="text-sm text-gray-300 mb-2"><strong>When:</strong> During 48-hour Fair Launch period</p>
              <p className="text-sm text-gray-300 mb-3"><strong>What:</strong> Contribute USDC, get proportional AEC allocation</p>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300 mb-3">
                <li>Visit: app.aethercycle.xyz</li>
                <li>Connect wallet to Base network</li>
                <li>Enter USDC amount you want to contribute</li>
                <li>Confirm transaction and wait for completion</li>
                <li>Claim tokens after Fair Launch ends</li>
              </ol>
              
              <div className="bg-gray-900 p-3 rounded">
                <p className="text-xs text-gray-400"><strong>Formula:</strong> Your AEC = (Your USDC ÷ Total USDC) × Fair Launch Allocation</p>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium text-yellow-400 mb-2">Option B: DEX Trading (Post-Launch)</h5>
              <p className="text-sm text-gray-300 mb-2"><strong>When:</strong> After Fair Launch completes</p>
              <p className="text-sm text-gray-300 mb-3"><strong>Where:</strong> Uniswap V2 AEC/USDC pair</p>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300 mb-3">
                <li>Visit: app.uniswap.org</li>
                <li>Connect wallet to Base network</li>
                <li>Select: AEC/USDC trading pair</li>
                <li>Set slippage: 3-5% (due to 2% tax)</li>
                <li>Swap USDC for AEC</li>
              </ol>
              
              <div className="bg-gray-900 p-3 rounded">
                <p className="text-xs text-gray-400"><strong>Note:</strong> 2% tax applies to DEX purchases</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
            Choose Your Strategy (1 minute)
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 p-4 rounded">
              <h5 className="font-medium text-blue-400 mb-2">🚀 For Quick Participation:</h5>
              <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Get involved immediately</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Action:</strong> Hold AEC tokens, participate in governance</p>
              <p className="text-sm text-gray-300"><strong>Benefit:</strong> Exposure to protocol growth, voting rights</p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded">
              <h5 className="font-medium text-green-400 mb-2">💰 For Yield Earning:</h5>
              <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Earn passive income</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Action:</strong> Stake AEC tokens with lock periods</p>
              <p className="text-sm text-gray-300"><strong>Benefit:</strong> 1.1x to 1.6x reward multipliers</p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded">
              <h5 className="font-medium text-purple-400 mb-2">🌊 For Liquidity Providers:</h5>
              <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Maximum rewards</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Action:</strong> Provide AEC/USDC liquidity, stake LP tokens</p>
              <p className="text-sm text-gray-300"><strong>Benefit:</strong> 60% of all protocol rewards</p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded">
              <h5 className="font-medium text-pink-400 mb-2">🎨 For NFT Collectors:</h5>
              <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Unique utility</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Action:</strong> Mint Aetheria NFTs, stake for rewards</p>
              <p className="text-sm text-gray-300"><strong>Benefit:</strong> Continuous yield + collectible value</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
            Start Earning (1 minute)
          </h4>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-medium text-green-400 mb-2">Token Staking (Easiest)</h5>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300 mb-3">
                <li>Visit: app.aethercycle.xyz/stake</li>
                <li>Connect wallet with AEC tokens</li>
                <li>Choose lock period:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>30 days = 1.1x multiplier</li>
                    <li>90 days = 1.3x multiplier</li>
                    <li>180 days = 1.6x multiplier</li>
                  </ul>
                </li>
                <li>Stake tokens and start earning immediately</li>
              </ol>
            </div>
            
            <div>
              <h5 className="font-medium text-blue-400 mb-2">LP Staking (Highest Rewards)</h5>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                <li>Add liquidity on Uniswap V2 (AEC/USDC pair)</li>
                <li>Receive LP tokens from Uniswap</li>
                <li>Visit: app.aethercycle.xyz/stake-lp</li>
                <li>Stake LP tokens with preferred lock period</li>
                <li>Earn 60% of all protocol rewards</li>
              </ol>
            </div>
            
            <div>
              <h5 className="font-medium text-purple-400 mb-2">NFT Staking (Unique Utility)</h5>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                <li>Visit: app.aethercycle.xyz/nft</li>
                <li>Mint Aetheria NFT using AEC tokens</li>
                <li>Stake NFT in staking contract</li>
                <li>Earn rewards based on NFT rarity</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
            Monitor & Optimize (Ongoing)
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-white mb-2">Track Your Performance:</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li><strong>Dashboard:</strong> app.aethercycle.xyz/dashboard</li>
                <li><strong>Rewards:</strong> Check pending and claimed rewards</li>
                <li><strong>APY Calculator:</strong> Estimate returns based on lock periods</li>
                <li><strong>Protocol Stats:</strong> Monitor TVL, burn rate, reward distribution</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-white mb-2">Stay Informed:</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li><strong>Discord:</strong> Real-time community discussions</li>
                <li><strong>Twitter:</strong> Protocol updates and announcements</li>
                <li><strong>GitHub:</strong> Technical updates and code reviews</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4">
            <h5 className="font-medium text-white mb-2">Optimize Strategy:</h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li><strong>Compound rewards:</strong> Reinvest earned AEC for higher returns</li>
              <li><strong>Extend locks:</strong> Longer periods = higher multipliers</li>
              <li><strong>Diversify:</strong> Combine token staking + LP staking + NFT staking</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-900/20 border border-red-700 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-red-400 mb-4">Safety Checklist</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-green-400 mb-2">Before You Start:</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>✅ Verify website URL: Only use aethercycle.xyz</li>
                <li>✅ Check contract addresses: Match official documentation</li>
                <li>✅ Start small: Test with minimal amounts first</li>
                <li>✅ Understand risks: Read disclaimer and risk assessment</li>
                <li>✅ Secure wallet: Use hardware wallet for large amounts</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-red-400 mb-2">Red Flags to Avoid:</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>❌ Fake websites: Always verify official links</li>
                <li>❌ Social media scams: No official team DMs</li>
                <li>❌ Unofficial tokens: Only use verified contract address</li>
                <li>❌ Too-good-to-be-true APYs: Sustainable yields only</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTokenomics = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <img 
          src="/Aethercycle_AEC_Logo.png" 
          alt="AetherCycle Logo" 
          className="w-16 h-16 mx-auto mb-4 opacity-80"
        />
        <h3 className="text-2xl font-bold mb-4">Token Economics - Mathematical Model Explained</h3>
        <p className="text-xl text-gray-300 mb-6">Comprehensive mathematical analysis of AetherCycle's autonomous economic system</p>
      </div>
      
      <div className="space-y-8">
        <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Executive Summary</h4>
          <p className="text-gray-300 mb-4">
            AetherCycle implements a mathematically sustainable economic model designed for infinite operation through autonomous mechanisms. 
            Unlike traditional DeFi protocols that rely on continuous growth assumptions, AEC's economic model provides mathematical guarantees of perpetual operation through:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li><strong>Mathematical Endowment:</strong> 35% of supply providing infinite baseline funding</li>
            <li><strong>Revenue Diversification:</strong> Multiple sustainable income streams</li>
            <li><strong>Automated Processing:</strong> Zero human intervention in economic operations</li>
            <li><strong>Deflationary Pressure:</strong> Continuous supply reduction mechanisms</li>
            <li><strong>Community Alignment:</strong> 99% of value accrual to community participants</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Token Specification</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-white mb-2">Basic Parameters</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><strong>Name:</strong> AetherCycle</li>
                <li><strong>Symbol:</strong> AEC</li>
                <li><strong>Network:</strong> Base (Ethereum Layer 2)</li>
                <li><strong>Standard:</strong> ERC-20</li>
                <li><strong>Decimals:</strong> 18</li>
                <li><strong>Total Supply:</strong> 888,888,888 AEC (FIXED - no minting capability)</li>
                <li><strong>Supply Type:</strong> Deflationary (burns reduce circulating supply)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-white mb-2">Key Properties</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><strong>Immutable Supply:</strong> No additional tokens can ever be created</li>
                <li><strong>Burn Mechanism:</strong> Permanent supply reduction through protocol operations</li>
                <li><strong>Tax Integration:</strong> Built-in transaction taxes funding autonomous operations</li>
                <li><strong>Governance Rights:</strong> Limited to founder accountability only</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Mathematical Endowment System</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-white mb-2">Core Parameters</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><strong>Initial Balance:</strong> 311,111,111 AEC (35% of total supply)</li>
                <li><strong>Release Rate:</strong> 0.5% of current balance per month</li>
                <li><strong>Release Frequency:</strong> Monthly (30-day cooldown)</li>
                <li><strong>Control Mechanism:</strong> Fully automated smart contract</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-white mb-2">Mathematical Formula</h5>
              <div className="bg-gray-900 p-4 rounded font-mono text-sm">
                <div>Monthly Release = Current Balance × 0.005</div>
                <div>Remaining Balance = Current Balance × 0.995</div>
                <div className="text-blue-400 mt-2">Balance(n) = 311,111,111 × (0.995)^n</div>
                <div className="text-gray-400 text-xs mt-2">Where n = number of months since deployment</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h5 className="font-medium text-white mb-2">Projected Release Schedule</h5>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">Month</th>
                    <th className="text-left py-2">Release Amount (AEC)</th>
                    <th className="text-left py-2">Remaining Balance (AEC)</th>
                    <th className="text-left py-2">Cumulative Released</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-2">1</td>
                    <td className="py-2 text-green-400">1,555,556</td>
                    <td className="py-2">309,555,555</td>
                    <td className="py-2 text-blue-400">1,555,556</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">6</td>
                    <td className="py-2 text-green-400">1,517,361</td>
                    <td className="py-2">301,855,068</td>
                    <td className="py-2 text-blue-400">9,256,043</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">12</td>
                    <td className="py-2 text-green-400">1,464,912</td>
                    <td className="py-2">292,982,400</td>
                    <td className="py-2 text-blue-400">18,128,711</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">24</td>
                    <td className="py-2 text-green-400">1,338,089</td>
                    <td className="py-2">267,617,800</td>
                    <td className="py-2 text-blue-400">43,493,311</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">60</td>
                    <td className="py-2 text-green-400">1,211,904</td>
                    <td className="py-2">242,380,800</td>
                    <td className="py-2 text-blue-400">68,730,311</td>
                  </tr>
                  <tr>
                    <td className="py-2">120</td>
                    <td className="py-2 text-green-400">979,851</td>
                    <td className="py-2">195,970,200</td>
                    <td className="py-2 text-blue-400">115,140,911</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/20 border border-purple-700 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Perpetual Operation Proof</h4>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded">
              <h5 className="font-bold mb-2">Mathematical Guarantee:</h5>
              <div className="font-mono text-sm text-purple-400">
                lim(n→∞) Balance(n) = 0, but for any finite n: Balance(n) &gt; 0
              </div>
              <div className="text-sm text-gray-300 mt-2">
                Therefore: ∃ monthly releases for all finite time periods
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">10 Years</div>
                <div className="text-gray-400">63% remaining</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">20 Years</div>
                <div className="text-gray-400">48% remaining</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">∞</div>
                <div className="text-gray-400">Always funded</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Revenue Generation Model</h4>
          <div className="space-y-6">
            <div>
              <h5 className="font-medium text-white mb-2">1. Transaction Taxes (Variable Revenue)</h5>
              <p className="text-gray-300 mb-2">Tax Structure - "Tolerant Fortress" System:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2">Transaction Type</th>
                      <th className="text-left py-2">Tax Rate</th>
                      <th className="text-left py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Wallet-to-wallet</td>
                      <td className="py-2 text-green-400">0%</td>
                      <td className="py-2">No friction for users</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Official DEX (Uniswap V2)</td>
                      <td className="py-2 text-yellow-400">2.0%</td>
                      <td className="py-2">Reasonable trading tax</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Approved contracts</td>
                      <td className="py-2 text-yellow-400">2.5%</td>
                      <td className="py-2">Slight premium for integrations</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Unknown contracts</td>
                      <td className="py-2 text-red-400">10.0%</td>
                      <td className="py-2">Discourage fragmentation</td>
                    </tr>
                    <tr>
                      <td className="py-2">MEV/Arbitrage bots</td>
                      <td className="py-2 text-red-400">12.5%</td>
                      <td className="py-2">Capture extractive value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-white mb-2">2. Perpetual Endowment Releases (Guaranteed Revenue)</h5>
              <div className="bg-gray-900 p-4 rounded font-mono text-sm">
                <div>Monthly Endowment Revenue = Current Balance × 0.005</div>
                <div>Annualized = Monthly × 12</div>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-white mb-2">3. Protocol-Owned Liquidity Yields (Growing Revenue)</h5>
              <p className="text-gray-300 mb-2">Mechanism:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                <li>40% of processed revenue automatically adds AEC/USDC liquidity</li>
                <li>LP tokens permanently staked in AECStakingLP contract</li>
                <li>Yields compound monthly, creating growing revenue stream</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-2">4. NFT and Gaming Revenue (Supplementary)</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                <li>Aetheria NFT minting fees (paid in AEC)</li>
                <li>AECGambit gambling house edge</li>
                <li>All proceeds flow to PerpetualEngine</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Automated Distribution Mechanics</h4>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded">
              <h5 className="font-medium text-white mb-2">Distribution Formula (Fixed Percentages):</h5>
              <div className="font-mono text-sm space-y-1">
                <div>Total Revenue = Tax Revenue + Endowment + LP Yields + Other</div>
                <div className="text-red-400">Burn Amount = Total Revenue × 0.20 (20%)</div>
                <div className="text-blue-400">Liquidity Amount = Total Revenue × 0.40 (40%)</div>
                <div className="text-green-400">Rewards Amount = Total Revenue × 0.40 (40%)</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-900/20 border border-red-700 p-4 rounded text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">20%</div>
                <div className="font-medium mb-2">BURN</div>
                <div className="text-xs text-gray-400">Permanent supply reduction</div>
              </div>
              <div className="bg-blue-900/20 border border-blue-700 p-4 rounded text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">40%</div>
                <div className="font-medium mb-2">LIQUIDITY</div>
                <div className="text-xs text-gray-400">Automated LP provision</div>
              </div>
              <div className="bg-green-900/20 border border-green-700 p-4 rounded text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">40%</div>
                <div className="font-medium mb-2">REWARDS</div>
                <div className="text-xs text-gray-400">Staking incentives</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Mathematical Certainty</h4>
          <p className="text-gray-300 mb-4">
            AetherCycle's token economics represent a paradigm shift from speculative to mathematical DeFi. 
            Through rigorous mathematical modeling, the protocol ensures guaranteed baseline operation, 
            revenue diversification, automatic value accrual, and sustainable growth.
          </p>
          <div className="text-xl font-bold text-blue-400 text-center">
            This is not speculation – this is mathematical certainty.
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4">Security Model</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Immutable Architecture</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <Shield className="mr-2 mt-1 text-green-400 flex-shrink-0" size={16} />
              No admin keys or upgrade mechanisms
            </li>
            <li className="flex items-start">
              <Shield className="mr-2 mt-1 text-green-400 flex-shrink-0" size={16} />
              Core parameters locked permanently
            </li>
            <li className="flex items-start">
              <Shield className="mr-2 mt-1 text-green-400 flex-shrink-0" size={16} />
              No pause or emergency stop functions
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Audit Status</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <Shield className="mr-2 mt-1 text-blue-400 flex-shrink-0" size={16} />
              Internal security audit in progress
            </li>
            <li className="flex items-start">
              <Shield className="mr-2 mt-1 text-blue-400 flex-shrink-0" size={16} />
              Bug bounty program active
            </li>
            <li className="flex items-start">
              <Shield className="mr-2 mt-1 text-blue-400 flex-shrink-0" size={16} />
              Code review and testing ongoing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderGovernance = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4">Governance Framework</h3>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Limited Governance Scope</h4>
        <p className="text-gray-300 mb-4">
          AEC implements minimal governance to prevent corruption while maintaining founder accountability.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-green-400 mb-2">What Governance CAN Control:</h5>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Founder vesting extension (up to 2 years)</li>
              <li>• Founder allocation burn (permanent)</li>
              <li>• Community proposals and discussions</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-red-400 mb-2">What Governance CANNOT Control:</h5>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Tax rates or economic parameters</li>
              <li>• Smart contract upgrades</li>
              <li>• Protocol pause or emergency stops</li>
              <li>• Token supply or minting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechnical = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Smart Contract Architecture</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><strong>AEC Token:</strong> ERC-20 with integrated tax system</li>
            <li><strong>PerpetualEngine:</strong> Autonomous revenue processor</li>
            <li><strong>Staking Contracts:</strong> Token, LP, and NFT staking</li>
            <li><strong>Endowment:</strong> Mathematical release mechanism</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Network Details</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><strong>Blockchain:</strong> Base (Ethereum Layer 2)</li>
            <li><strong>Gas Efficiency:</strong> Optimized for low fees</li>
            <li><strong>Finality:</strong> ~2 seconds</li>
            <li><strong>Compatibility:</strong> Full Ethereum tooling support</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">DOCUMENTATION</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides and technical documentation for the AEC protocol.
            Everything you need to understand and participate in autonomous DeFi.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeSection === section.id
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <section.icon size={16} className="mr-2" />
                {section.title}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[600px]">
          {activeSection === 'overview' && renderOverview()}
          {activeSection === 'quickstart' && renderQuickStart()}
          {activeSection === 'tokenomics' && renderTokenomics()}
          {activeSection === 'security' && renderSecurity()}
          {activeSection === 'governance' && renderGovernance()}
          {activeSection === 'technical' && renderTechnical()}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Need More Help?</h3>
          <p className="text-gray-300 mb-6">
            Join our community for real-time support and discussions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/wadaks9KPt"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 text-white px-8 py-4 font-mono text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2 min-w-[140px]"
            >
              <ExternalLink size={16} />
              JOIN DISCORD
            </a>
            <a
              href="#whitepaper"
              className="border border-gray-700 text-white px-8 py-4 font-mono text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2 min-w-[140px]"
            >
              <FileText size={16} />
              VIEW WHITEPAPER
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;