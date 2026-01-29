import { TrendingUp, TrendingDown, DollarSign, PieChart as PieChartIcon, Plus } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Investments() {
  const portfolioValue = 145680.50;
  const totalGain = 18450.25;
  const gainPercentage = 14.5;

  const holdings = [
    { id: 1, name: 'Apple Inc.', symbol: 'AAPL', shares: 150, price: 178.50, value: 26775.00, gain: 12.5, gainAmount: 2980.00 },
    { id: 2, name: 'Microsoft Corp.', symbol: 'MSFT', shares: 100, price: 380.00, value: 38000.00, gain: 8.3, gainAmount: 2912.00 },
    { id: 3, name: 'Tesla Inc.', symbol: 'TSLA', shares: 75, price: 245.30, value: 18397.50, gain: -5.2, gainAmount: -1009.50 },
    { id: 4, name: 'Amazon.com Inc.', symbol: 'AMZN', shares: 80, price: 156.80, value: 12544.00, gain: 15.7, gainAmount: 1705.00 },
    { id: 5, name: 'Alphabet Inc.', symbol: 'GOOGL', shares: 120, price: 142.50, value: 17100.00, gain: 10.2, gainAmount: 1584.00 },
  ];

  const performanceData = [
    { month: 'Jul', value: 120000 },
    { month: 'Aug', value: 125000 },
    { month: 'Sep', value: 123000 },
    { month: 'Oct', value: 132000 },
    { month: 'Nov', value: 138000 },
    { month: 'Dec', value: 140000 },
    { month: 'Jan', value: 145680 },
  ];

  const allocation = [
    { category: 'Stocks', percentage: 65, value: 94692.32, color: 'bg-amber-500' },
    { category: 'Bonds', percentage: 20, value: 29136.10, color: 'bg-blue-500' },
    { category: 'Real Estate', percentage: 10, value: 14568.05, color: 'bg-green-500' },
    { category: 'Crypto', percentage: 5, value: 7284.03, color: 'bg-purple-500' },
  ];

  const recentActivity = [
    { id: 1, action: 'Buy', asset: 'AAPL', shares: 10, price: 178.50, date: '2024-01-15' },
    { id: 2, action: 'Sell', asset: 'TSLA', shares: 5, price: 245.30, date: '2024-01-14' },
    { id: 3, action: 'Dividend', asset: 'MSFT', amount: 125.50, date: '2024-01-13' },
    { id: 4, action: 'Buy', asset: 'GOOGL', shares: 15, price: 142.50, date: '2024-01-12' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-light text-white mb-2">Investments</h1>
          <p className="text-zinc-400">Track and manage your investment portfolio</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-zinc-900 font-medium rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all shadow-lg shadow-amber-900/30">
          <Plus size={20} />
          <span>New Investment</span>
        </button>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-amber-500/10 to-yellow-600/10 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-zinc-900/50 rounded-lg text-amber-500">
              <DollarSign size={24} />
            </div>
            <div className="flex items-center gap-1 text-sm text-green-500">
              <TrendingUp size={16} />
              <span>+{gainPercentage}%</span>
            </div>
          </div>
          <p className="text-zinc-400 text-sm font-light mb-1">Total Portfolio Value</p>
          <p className="text-white text-3xl font-light">
            ${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-zinc-900/50 rounded-lg text-green-500">
              <TrendingUp size={24} />
            </div>
          </div>
          <p className="text-zinc-400 text-sm font-light mb-1">Total Gain</p>
          <p className="text-white text-3xl font-light text-green-500">
            +${totalGain.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-zinc-900/50 rounded-lg text-blue-500">
              <PieChartIcon size={24} />
            </div>
          </div>
          <p className="text-zinc-400 text-sm font-light mb-1">Total Holdings</p>
          <p className="text-white text-3xl font-light">{holdings.length}</p>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
        <h3 className="text-white text-lg font-light mb-6">Portfolio Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={performanceData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey="month" stroke="#71717a" />
            <YAxis stroke="#71717a" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
              labelStyle={{ color: '#fff' }}
              formatter={(value) => `$${value.toLocaleString()}`}
            />
            <Area type="monotone" dataKey="value" stroke="#f59e0b" fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Holdings and Allocation */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Holdings */}
        <div className="xl:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-lg font-light">Holdings</h3>
            <button className="text-amber-500 text-sm hover:text-amber-400 transition-colors">View All</button>
          </div>
          
          <div className="space-y-3">
            {holdings.map((holding) => (
              <div key={holding.id} className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{holding.symbol.substring(0, 2)}</span>
                  </div>
                  <div>
                    <p className="text-white font-light">{holding.name}</p>
                    <p className="text-zinc-500 text-sm">{holding.shares} shares @ ${holding.price}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-light">${holding.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                  <div className={`flex items-center gap-1 text-sm justify-end ${holding.gain > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {holding.gain > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    <span>{holding.gain > 0 ? '+' : ''}{holding.gain}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Asset Allocation */}
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <h3 className="text-white text-lg font-light mb-6">Asset Allocation</h3>
          
          <div className="space-y-4">
            {allocation.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-zinc-400 text-sm">{item.category}</span>
                  </div>
                  <span className="text-white font-light">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <p className="text-zinc-500 text-xs mt-1">
                  ${item.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400 text-sm">Total Allocated</span>
              <span className="text-white font-light">100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-lg font-light">Recent Activity</h3>
          <button className="text-amber-500 text-sm hover:text-amber-400 transition-colors">View All</button>
        </div>
        
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  activity.action === 'Buy' ? 'bg-green-500/10 text-green-500' :
                  activity.action === 'Sell' ? 'bg-red-500/10 text-red-500' :
                  'bg-blue-500/10 text-blue-500'
                }`}>
                  {activity.action}
                </div>
                <div>
                  <p className="text-white font-light">
                    {activity.asset} {activity.shares && `- ${activity.shares} shares`}
                    {activity.amount && `- $${activity.amount}`}
                  </p>
                  <p className="text-zinc-500 text-sm">{activity.date}</p>
                </div>
              </div>
              {activity.price && (
                <div className="text-white font-light">
                  ${(activity.shares * activity.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
