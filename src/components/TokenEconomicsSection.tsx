import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  PieChart, 
  BarChart3, 
  Target, 
  Shield, 
  Zap, 
  Lock,
  Coins,
  ArrowDown,
  ArrowUp,
  ChevronRight,
  Info,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import SEOHead from './SEOHead';

const TokenEconomicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedScenario, setSelectedScenario] = useState('base');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: PieChart },
    { id: 'distribution', label: 'Distribution', icon: Target },
    { id: 'endowment', label: 'Endowment', icon: Lock },
    { id: 'revenue', label: 'Revenue Model', icon: TrendingUp },
    { id: 'staking', label: 'Staking Economics', icon: Coins },
    { id: 'scenarios', label: 'Economic Scenarios', icon: BarChart3 }
  ];

  const distributionData = [
    { category: 'Perpetual Endowment', percentage: 35, amount: '311,111,111', purpose: 'Mathematical sustainability fund', lock: 'Permanent lock', color: 'bg-blue-500' },
    { category: 'Ecosystem Rewards', percentage: 40, amount: '355,555,555', purpose: 'Staking incentives distribution', lock: 'Performance-based', color: 'bg-green-500' },
    { category: 'Contributor Airdrop', percentage: 8, amount: '71,111,111', purpose: 'Task-based community rewards', lock: 'Merit-based', color: 'bg-purple-500' },
    { category: 'Fair Launch', percentage: 7, amount: '62,222,222', purpose: 'Public price discovery', lock: 'No vesting', color: 'bg-yellow-500' },
    { category: 'Initial Liquidity', percentage: 6, amount: '53,333,333', purpose: 'Uniswap V2 bootstrap', lock: 'Permanent lock', color: 'bg-cyan-500' },
    { category: 'Security Bounty', percentage: 2, amount: '17,777,777', purpose: 'Bug bounties and audits', lock: 'As-needed', color: 'bg-orange-500' },
    { category: 'Lottery/Gambit', percentage: 1, amount: '8,888,889', purpose: 'Gaming ecosystem fund', lock: 'Automated', color: 'bg-pink-500' },
    { category: 'Founder', percentage: 1, amount: '8,888,888', purpose: 'Development compensation', lock: '5-year cliff', color: 'bg-red-500' }
  ];

  const endowmentProjection = [
    { month: 1, release: '1,555,556', remaining: '309,555,555', cumulative: '1,555,556' },
    { month: 6, release: '1,517,361', remaining: '301,855,068', cumulative: '9,256,043' },
    { month: 12, release: '1,464,912', remaining: '292,982,400', cumulative: '18,128,711' },
    { month: 24, release: '1,338,089', remaining: '267,617,800', cumulative: '43,493,311' },
    { month: 60, release: '1,211,904', remaining: '242,380,800', cumulative: '68,730,311' },
    { month: 120, release: '979,851', remaining: '195,970,200', cumulative: '115,140,911' }
  ];

  const revenueStreams = [
    {
      name: 'Transaction Taxes',
      type: 'Variable Revenue',
      description: 'Tolerant Fortress tax system',
      rates: [
        { type: 'Wallet-to-wallet', rate: '0%', purpose: 'No friction for users' },
        { type: 'Official DEX (Uniswap V2)', rate: '2.0%', purpose: 'Reasonable trading tax' },
        { type: 'Approved contracts', rate: '2.5%', purpose: 'Slight premium for integrations' },
        { type: 'Unknown contracts', rate: '10.0%', purpose: 'Discourage fragmentation' },
        { type: 'MEV/Arbitrage bots', rate: '12.5%', purpose: 'Capture extractive value' }
      ]
    },
    {
      name: 'Perpetual Endowment',
      type: 'Guaranteed Revenue',
      description: 'Mathematical 0.5% monthly releases',
      formula: 'Monthly Release = Current Balance × 0.005'
    },
    {
      name: 'Protocol-Owned Liquidity',
      type: 'Growing Revenue',
      description: 'Compound LP yields from automated liquidity provision',
      mechanism: '40% of revenue → LP → Permanent staking → Compound growth'
    },
    {
      name: 'NFT & Gaming',
      type: 'Supplementary Revenue',
      description: 'Aetheria NFT minting + AECGambit house edge',
      flow: 'All proceeds → PerpetualEngine → Distribution'
    }
  ];

  const stakingTiers = [
    { period: '30 days', multiplier: '1.10x', apy: '12-18%', color: 'bg-green-500' },
    { period: '90 days', multiplier: '1.30x', apy: '15-22%', color: 'bg-blue-500' },
    { period: '180 days', multiplier: '1.60x', apy: '19-28%', color: 'bg-purple-500' }
  ];

  const scenarios = {
    conservative: {
      name: 'Conservative Case',
      volume: '$10,000/day',
      revenue: '$167,000/month',
      sustainability: 'Profitable and sustainable',
      color: 'text-yellow-400'
    },
    base: {
      name: 'Base Case',
      volume: '$100,000/day',
      revenue: '$320,000/month',
      sustainability: 'Strong growth trajectory',
      color: 'text-green-400'
    },
    optimistic: {
      name: 'Optimistic Case',
      volume: '$1,000,000/day',
      revenue: '$1,850,000/month',
      sustainability: 'Explosive growth cycle',
      color: 'text-blue-400'
    }
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Logo and Title */}
      <div className="text-center mb-8">
        <img 
          src="/Aethercycle_AEC_Logo.png" 
          alt="AetherCycle Logo" 
          className="w-16 h-16 mx-auto mb-4 opacity-80"
        />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold mb-2">888M</div>
          <div className="text-sm text-gray-400">Fixed Supply</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold mb-2 text-green-400">99%</div>
          <div className="text-sm text-gray-400">Community Controlled</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold mb-2 text-blue-400">35%</div>
          <div className="text-sm text-gray-400">Perpetual Endowment</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold mb-2 text-red-400">1%</div>
          <div className="text-sm text-gray-400">Founder Allocation</div>
        </div>
      </div>

      {/* Mathematical Guarantees */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 p-8 rounded-lg">
        <div className="flex items-center mb-6">
          <Calculator className="mr-3 text-blue-400" size={24} />
          <h3 className="text-2xl font-bold">Mathematical Guarantees</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <CheckCircle className="mx-auto mb-3 text-green-400" size={32} />
            <h4 className="font-bold mb-2">Infinite Operation</h4>
            <p className="text-sm text-gray-300">Mathematical endowment ensures perpetual funding</p>
          </div>
          <div className="text-center">
            <Shield className="mx-auto mb-3 text-blue-400" size={32} />
            <h4 className="font-bold mb-2">Zero Extraction</h4>
            <p className="text-sm text-gray-300">100% of revenue flows back to community</p>
          </div>
          <div className="text-center">
            <TrendingUp className="mx-auto mb-3 text-purple-400" size={32} />
            <h4 className="font-bold mb-2">Deflationary Pressure</h4>
            <p className="text-sm text-gray-300">Continuous supply reduction mechanisms</p>
          </div>
        </div>
      </div>

      {/* Revenue Distribution */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <PieChart className="mr-3" size={20} />
          Automated Revenue Distribution
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-red-900/20 border border-red-700 rounded-lg">
            <div className="text-3xl font-bold text-red-400 mb-2">20%</div>
            <div className="font-medium mb-2">BURN</div>
            <div className="text-sm text-gray-400">Permanent supply reduction</div>
          </div>
          <div className="text-center p-6 bg-blue-900/20 border border-blue-700 rounded-lg">
            <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
            <div className="font-medium mb-2">LIQUIDITY</div>
            <div className="text-sm text-gray-400">Automated LP provision</div>
          </div>
          <div className="text-center p-6 bg-green-900/20 border border-green-700 rounded-lg">
            <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
            <div className="font-medium mb-2">REWARDS</div>
            <div className="text-sm text-gray-400">Staking incentives</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDistribution = () => (
    <div className="space-y-8">
      {/* Distribution Chart */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6">Token Distribution Breakdown</h3>
        <div className="space-y-4">
          {distributionData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className={`w-4 h-4 ${item.color} rounded mr-4`}></div>
                <div>
                  <div className="font-medium">{item.category}</div>
                  <div className="text-sm text-gray-400">{item.purpose}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">{item.percentage}%</div>
                <div className="text-sm text-gray-400">{item.amount} AEC</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community vs Founder Analysis */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg">
          <h4 className="text-lg font-bold text-green-400 mb-4">Community Controlled: 99%</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Direct community benefit: 93%</li>
            <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Security and infrastructure: 6%</li>
            <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Total community control: 99%</li>
          </ul>
        </div>
        <div className="bg-red-900/20 border border-red-700 p-6 rounded-lg">
          <h4 className="text-lg font-bold text-red-400 mb-4">Founder Risk: 1%</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><AlertTriangle size={16} className="mr-2 text-red-400" />Subject to community burn/extend votes</li>
            <li className="flex items-center"><AlertTriangle size={16} className="mr-2 text-red-400" />5-year cliff vesting (no gradual unlock)</li>
            <li className="flex items-center"><AlertTriangle size={16} className="mr-2 text-red-400" />Smallest founder allocation in DeFi history</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderEndowment = () => (
    <div className="space-y-8">
      {/* Mathematical Formula */}
      <div className="bg-blue-900/20 border border-blue-700 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <Calculator className="mr-3 text-blue-400" size={20} />
          Mathematical Endowment System
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-4">Core Parameters</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-blue-400">Initial Balance:</span> 311,111,111 AEC (35%)</li>
              <li><span className="text-blue-400">Release Rate:</span> 0.5% monthly</li>
              <li><span className="text-blue-400">Frequency:</span> Monthly (30-day cooldown)</li>
              <li><span className="text-blue-400">Control:</span> Fully automated smart contract</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Mathematical Formula</h4>
            <div className="bg-gray-900 p-4 rounded font-mono text-sm">
              <div>Monthly Release = Current Balance × 0.005</div>
              <div>Remaining Balance = Current Balance × 0.995</div>
              <div className="text-blue-400 mt-2">Balance(n) = 311,111,111 × (0.995)^n</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projection Table */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6">Projected Release Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3">Month</th>
                <th className="text-left py-3">Release Amount (AEC)</th>
                <th className="text-left py-3">Remaining Balance (AEC)</th>
                <th className="text-left py-3">Cumulative Released</th>
              </tr>
            </thead>
            <tbody>
              {endowmentProjection.map((row, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-3 font-medium">{row.month}</td>
                  <td className="py-3 text-green-400">{row.release}</td>
                  <td className="py-3">{row.remaining}</td>
                  <td className="py-3 text-blue-400">{row.cumulative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Perpetual Operation Proof */}
      <div className="bg-purple-900/20 border border-purple-700 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6">Perpetual Operation Proof</h3>
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded">
            <h4 className="font-bold mb-2">Mathematical Guarantee:</h4>
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
    </div>
  );

  const renderRevenue = () => (
    <div className="space-y-8">
      {/* Revenue Streams */}
      <div className="grid md:grid-cols-2 gap-8">
        {revenueStreams.map((stream, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">{stream.name}</h3>
              <span className={`px-3 py-1 rounded text-xs font-medium ${
                stream.type === 'Guaranteed Revenue' ? 'bg-green-900 text-green-400' :
                stream.type === 'Variable Revenue' ? 'bg-yellow-900 text-yellow-400' :
                stream.type === 'Growing Revenue' ? 'bg-blue-900 text-blue-400' :
                'bg-purple-900 text-purple-400'
              }`}>
                {stream.type}
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-4">{stream.description}</p>
            
            {stream.rates && (
              <div className="space-y-2">
                {stream.rates.map((rate, rateIndex) => (
                  <div key={rateIndex} className="flex justify-between text-xs">
                    <span className="text-gray-400">{rate.type}</span>
                    <span className="font-medium">{rate.rate}</span>
                  </div>
                ))}
              </div>
            )}
            
            {stream.formula && (
              <div className="bg-gray-900 p-3 rounded font-mono text-xs text-blue-400">
                {stream.formula}
              </div>
            )}
            
            {stream.mechanism && (
              <div className="text-xs text-gray-400 mt-2">
                <strong>Mechanism:</strong> {stream.mechanism}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Revenue Resilience Matrix */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6">Revenue Resilience Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3">Revenue Source</th>
                <th className="text-left py-3">Market Dependency</th>
                <th className="text-left py-3">Volume Dependency</th>
                <th className="text-left py-3">Guaranteed?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-3">Endowment</td>
                <td className="py-3 text-green-400">None</td>
                <td className="py-3 text-green-400">None</td>
                <td className="py-3 text-green-400">Yes (Mathematical)</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3">Transaction Taxes</td>
                <td className="py-3 text-yellow-400">Medium</td>
                <td className="py-3 text-red-400">High</td>
                <td className="py-3 text-red-400">No (Activity-based)</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3">LP Yields</td>
                <td className="py-3 text-green-400">Low</td>
                <td className="py-3 text-green-400">Low</td>
                <td className="py-3 text-green-400">Yes (Compound growth)</td>
              </tr>
              <tr>
                <td className="py-3">NFT/Gaming</td>
                <td className="py-3 text-yellow-400">Medium</td>
                <td className="py-3 text-yellow-400">Medium</td>
                <td className="py-3 text-red-400">No (Adoption-based)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStaking = () => (
    <div className="space-y-8">
      {/* Token Staking Tiers */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <Coins className="mr-3" size={20} />
          Token Staking Model
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {stakingTiers.map((tier, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
              <div className={`w-16 h-16 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Lock className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">{tier.period}</h4>
              <div className="text-2xl font-bold text-blue-400 mb-2">{tier.multiplier}</div>
              <div className="text-sm text-gray-400">Est. APY: {tier.apy}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reward Allocation */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6">Reward Distribution Breakdown</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
            <div className="font-medium mb-2">LP Staking</div>
            <div className="text-sm text-gray-400">20% of total revenue</div>
            <div className="text-xs text-gray-500 mt-2">Highest allocation for market makers</div>
          </div>
          <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">37.5%</div>
            <div className="font-medium mb-2">Token Staking</div>
            <div className="text-sm text-gray-400">15% of total revenue</div>
            <div className="text-xs text-gray-500 mt-2">Core community rewards</div>
          </div>
          <div className="bg-purple-900/20 border border-purple-700 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">12.5%</div>
            <div className="font-medium mb-2">NFT Staking</div>
            <div className="text-sm text-gray-400">5% of total revenue</div>
            <div className="text-xs text-gray-500 mt-2">Limited to 500 NFTs max</div>
          </div>
        </div>
      </div>

      {/* APY Calculation */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6">APY Calculation Formula</h3>
        <div className="bg-gray-900 p-6 rounded font-mono text-sm">
          <div className="space-y-2">
            <div><span className="text-blue-400">User_Weighted_Stake</span> = Stake_Amount × Multiplier</div>
            <div><span className="text-green-400">User_Reward_Share</span> = User_Weighted_Stake / Total_Weighted_Stakes</div>
            <div><span className="text-purple-400">User_Rewards</span> = Token_Rewards_Pool × User_Reward_Share</div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <span className="text-yellow-400">APY</span> = (Annual_Token_Rewards × User_Multiplier) / User_Stake_Amount
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Advantages */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6">LP Staking Competitive Advantages</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3 text-green-400">User Advantages</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Highest reward allocation (50% of all rewards)</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Additional trading fee income</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Up to 1.5x multiplier available</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Growing protocol-owned liquidity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-blue-400">Protocol Design</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><Info size={16} className="mr-2 text-blue-400" />Protocol LP earns only 1.0x multiplier</li>
              <li className="flex items-center"><Info size={16} className="mr-2 text-blue-400" />User stakes can out-earn protocol</li>
              <li className="flex items-center"><Info size={16} className="mr-2 text-blue-400" />Retail-friendly design</li>
              <li className="flex items-center"><Info size={16} className="mr-2 text-blue-400" />Sustainable yield source</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScenarios = () => (
    <div className="space-y-8">
      {/* Scenario Selector */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-6">Economic Scenario Analysis</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(scenarios).map(([key, scenario]) => (
            <button
              key={key}
              onClick={() => setSelectedScenario(key)}
              className={`p-4 rounded-lg border transition-colors ${
                selectedScenario === key 
                  ? 'border-white bg-gray-700' 
                  : 'border-gray-600 bg-gray-900 hover:bg-gray-800'
              }`}
            >
              <div className={`font-bold ${scenario.color}`}>{scenario.name}</div>
              <div className="text-sm text-gray-400 mt-1">{scenario.volume}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Scenario Details */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6">
          {scenarios[selectedScenario as keyof typeof scenarios].name} - Detailed Analysis
        </h3>
        
        {selectedScenario === 'conservative' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Daily Volume</div>
                <div className="text-xl font-bold">$10,000</div>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Monthly Revenue</div>
                <div className="text-xl font-bold text-yellow-400">$167,000</div>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Annual Operation Cost</div>
                <div className="text-xl font-bold text-green-400">$0</div>
              </div>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-700 p-4 rounded">
              <h4 className="font-bold text-yellow-400 mb-2">Sustainability Analysis</h4>
              <p className="text-sm text-gray-300">
                Even with minimal adoption, the protocol remains profitable and sustainable. 
                Endowment alone provides $150,000/month baseline funding.
              </p>
            </div>
          </div>
        )}

        {selectedScenario === 'base' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Daily Volume</div>
                <div className="text-xl font-bold">$100,000</div>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Monthly Revenue</div>
                <div className="text-xl font-bold text-green-400">$320,000</div>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Annual Burns</div>
                <div className="text-xl font-bold text-red-400">$768,000</div>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Annual Rewards</div>
                <div className="text-xl font-bold text-blue-400">$1,536,000</div>
              </div>
            </div>
            <div className="bg-green-900/20 border border-green-700 p-4 rounded">
              <h4 className="font-bold text-green-400 mb-2">Growth Trajectory</h4>
              <p className="text-sm text-gray-300">
                Moderate adoption creates strong growth trajectory with healthy reward distribution 
                and meaningful deflationary pressure.
              </p>
            </div>
          </div>
        )}

        {selectedScenario === 'optimistic' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Daily Volume</div>
                <div className="text-xl font-bold">$1,000,000</div>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Monthly Revenue</div>
                <div className="text-xl font-bold text-blue-400">$1,850,000</div>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Annual Deflation</div>
                <div className="text-xl font-bold text-red-400">5% of supply</div>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <div className="text-sm text-gray-400">Growth Type</div>
                <div className="text-xl font-bold text-purple-400">Explosive</div>
              </div>
            </div>
            <div className="bg-blue-900/20 border border-blue-700 p-4 rounded">
              <h4 className="font-bold text-blue-400 mb-2">Explosive Growth Cycle</h4>
              <p className="text-sm text-gray-300">
                High adoption creates self-reinforcing growth cycle with massive deflationary pressure 
                and exponentially growing rewards.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Stress Test Scenarios */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-6">Stress Test Scenarios</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-900/20 border border-red-700 p-6 rounded-lg">
            <h4 className="font-bold text-red-400 mb-3">Bear Market (90% Decline)</h4>
            <ul className="space-y-2 text-sm">
              <li>Tax revenue: -95%</li>
              <li>LP yields: -50%</li>
              <li className="text-green-400">Endowment: 0% impact</li>
            </ul>
            <div className="mt-4 text-xs text-gray-400">
              Result: Protocol continues on endowment baseline
            </div>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-700 p-6 rounded-lg">
            <h4 className="font-bold text-yellow-400 mb-3">Zero Volume</h4>
            <ul className="space-y-2 text-sm">
              <li>Tax revenue: -100%</li>
              <li>LP yields: -90%</li>
              <li className="text-green-400">Endowment: 0% impact</li>
            </ul>
            <div className="mt-4 text-xs text-gray-400">
              Result: Infinite operation on endowment alone
            </div>
          </div>
          <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg">
            <h4 className="font-bold text-green-400 mb-3">Bull Market (10x Price)</h4>
            <ul className="space-y-2 text-sm">
              <li>Tax revenue: +500%</li>
              <li>LP yields: +300%</li>
              <li>Endowment: 0% impact</li>
            </ul>
            <div className="mt-4 text-xs text-gray-400">
              Result: Accelerated growth and rewards
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SEOHead
        title="Token Economics - Mathematical Model"
        description="Comprehensive mathematical analysis of AetherCycle's autonomous economic system. Mathematical sustainability guarantees through rigorous economic modeling."
        canonicalUrl="/tokenomics"
        keywords="tokenomics, token economics, mathematical model, DeFi economics, AEC token, sustainability"
      />
      <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">TOKEN ECONOMICS</h2>
          <h3 className="text-2xl md:text-3xl font-medium mb-4 text-blue-400">Mathematical Model Explained</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive mathematical analysis of AetherCycle's autonomous economic system.
            Mathematical sustainability guarantees through rigorous economic modeling.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <tab.icon size={16} className="mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'distribution' && renderDistribution()}
          {activeTab === 'endowment' && renderEndowment()}
          {activeTab === 'revenue' && renderRevenue()}
          {activeTab === 'staking' && renderStaking()}
          {activeTab === 'scenarios' && renderScenarios()}
        </div>

        {/* Mathematical Conclusion */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 p-8 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Mathematical Certainty</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-6">
              AetherCycle's token economics represent a paradigm shift from speculative to mathematical DeFi. 
              Through rigorous mathematical modeling, the protocol ensures guaranteed baseline operation, 
              revenue diversification, automatic value accrual, and sustainable growth.
            </p>
            <div className="text-xl font-bold text-blue-400">
              This is not speculation – this is mathematical certainty.
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 border border-gray-700 bg-gray-900 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="mr-3 text-yellow-400 mt-1 flex-shrink-0" size={20} />
            <div className="text-sm text-gray-400">
              <strong className="text-yellow-400">Disclaimer:</strong> Economic projections based on mathematical models and assumptions. 
              Actual results may vary based on market conditions, adoption rates, and external factors. Token values may fluctuate dramatically. 
              This analysis is for educational purposes and does not constitute financial advice.
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TokenEconomicsSection;