import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, Wallet, CreditCard } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function Dashboard() {
  const [accountData, setAccountData] = useState({
    balance: 124567.89,
    income: 8500.00,
    expenses: 3240.50,
    savings: 45230.00,
  });

  // Simulated live data updates
  const [chartData] = useState([
    { month: 'Jan', income: 7800, expenses: 3200, savings: 4600 },
    { month: 'Feb', income: 8200, expenses: 3100, savings: 5100 },
    { month: 'Mar', income: 7900, expenses: 3400, savings: 4500 },
    { month: 'Apr', income: 8500, expenses: 2900, savings: 5600 },
    { month: 'May', income: 8100, expenses: 3300, savings: 4800 },
    { month: 'Jun', income: 8500, expenses: 3240, savings: 5260 },
  ]);

  const [portfolioData] = useState([
    { name: 'Stocks', value: 45000, color: '#f59e0b' },
    { name: 'Bonds', value: 25000, color: '#eab308' },
    { name: 'Real Estate', value: 35000, color: '#ca8a04' },
    { name: 'Crypto', value: 15000, color: '#a16207' },
  ]);

  const [recentTransactions] = useState([
    { id: 1, name: 'Salary Deposit', amount: 8500, type: 'credit', date: '2024-01-15', category: 'Income' },
    { id: 2, name: 'Rent Payment', amount: -1200, type: 'debit', date: '2024-01-14', category: 'Housing' },
    { id: 3, name: 'Grocery Shopping', amount: -245.50, type: 'debit', date: '2024-01-13', category: 'Food' },
    { id: 4, name: 'Investment Return', amount: 450, type: 'credit', date: '2024-01-12', category: 'Investment' },
    { id: 5, name: 'Utility Bills', amount: -180, type: 'debit', date: '2024-01-11', category: 'Utilities' },
  ]);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Small random fluctuations to simulate live data
      setAccountData(prev => ({
        ...prev,
        balance: prev.balance + (Math.random() - 0.5) * 100,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: 'Total Balance',
      value: `$${accountData.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
      bgColor: 'from-amber-500/10 to-yellow-600/10',
      iconColor: 'text-amber-500',
      borderColor: 'border-amber-500/20',
    },
    {
      title: 'Monthly Income',
      value: `$${accountData.income.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: '+8.2%',
      isPositive: true,
      icon: TrendingUp,
      bgColor: 'from-green-500/10 to-emerald-600/10',
      iconColor: 'text-green-500',
      borderColor: 'border-green-500/20',
    },
    {
      title: 'Monthly Expenses',
      value: `$${accountData.expenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: '-3.1%',
      isPositive: true,
      icon: Wallet,
      bgColor: 'from-blue-500/10 to-cyan-600/10',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-500/20',
    },
    {
      title: 'Total Savings',
      value: `$${accountData.savings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: '+15.7%',
      isPositive: true,
      icon: CreditCard,
      bgColor: 'from-purple-500/10 to-violet-600/10',
      iconColor: 'text-purple-500',
      borderColor: 'border-purple-500/20',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-light text-white mb-2">Dashboard</h1>
        <p className="text-zinc-400">Welcome back, here's your financial overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm border ${stat.borderColor} rounded-xl p-6`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-zinc-900/50 rounded-lg ${stat.iconColor}`}>
                  <Icon size={24} />
                </div>
                <div className={`flex items-center gap-1 text-sm ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div>
                <p className="text-zinc-400 text-sm font-light mb-1">{stat.title}</p>
                <p className="text-white text-2xl font-light">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Income vs Expenses Chart */}
        <div className="xl:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <h3 className="text-white text-lg font-light mb-6">Income vs Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
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
              />
              <Legend />
              <Area type="monotone" dataKey="income" stroke="#10b981" fillOpacity={1} fill="url(#colorIncome)" />
              <Area type="monotone" dataKey="expenses" stroke="#f59e0b" fillOpacity={1} fill="url(#colorExpenses)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Portfolio Distribution */}
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <h3 className="text-white text-lg font-light mb-6">Portfolio Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={portfolioData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                formatter={(value) => `$${value.toLocaleString()}`}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {portfolioData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-zinc-400">{item.name}</span>
                </div>
                <span className="text-white font-light">${item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions & Savings Trend */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="xl:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-lg font-light">Recent Transactions</h3>
            <button className="text-amber-500 text-sm hover:text-amber-400 transition-colors">View All</button>
          </div>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    transaction.type === 'credit' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {transaction.type === 'credit' ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                  </div>
                  <div>
                    <p className="text-white font-light">{transaction.name}</p>
                    <p className="text-zinc-500 text-sm">{transaction.category} • {transaction.date}</p>
                  </div>
                </div>
                <div className={`text-lg font-light ${transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'}`}>
                  {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Savings Trend */}
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <h3 className="text-white text-lg font-light mb-6">Savings Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="month" stroke="#71717a" />
              <YAxis stroke="#71717a" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="savings" fill="#f59e0b" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
