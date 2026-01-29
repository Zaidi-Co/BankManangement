import { Wallet, ArrowUpRight, ArrowDownRight, Plus, Download, Send } from 'lucide-react';

export function Accounts() {
  const accounts = [
    {
      id: 1,
      name: 'Premium Checking',
      type: 'Checking',
      accountNumber: '****1234',
      balance: 45678.90,
      currency: 'USD',
      status: 'active',
      color: 'from-amber-500 to-yellow-600',
    },
    {
      id: 2,
      name: 'High Yield Savings',
      type: 'Savings',
      accountNumber: '****5678',
      balance: 78900.50,
      currency: 'USD',
      status: 'active',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 3,
      name: 'Investment Account',
      type: 'Investment',
      accountNumber: '****9012',
      balance: 120000.00,
      currency: 'USD',
      status: 'active',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 4,
      name: 'Emergency Fund',
      type: 'Savings',
      accountNumber: '****3456',
      balance: 25000.00,
      currency: 'USD',
      status: 'active',
      color: 'from-purple-500 to-violet-600',
    },
  ];

  const recentActivity = [
    { id: 1, description: 'Transfer to Savings', amount: -5000, date: '2024-01-15', account: 'Premium Checking' },
    { id: 2, description: 'Salary Deposit', amount: 8500, date: '2024-01-15', account: 'Premium Checking' },
    { id: 3, description: 'Interest Earned', amount: 125.50, date: '2024-01-14', account: 'High Yield Savings' },
    { id: 4, description: 'Investment Dividend', amount: 450, date: '2024-01-13', account: 'Investment Account' },
    { id: 5, description: 'ATM Withdrawal', amount: -200, date: '2024-01-12', account: 'Premium Checking' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-light text-white mb-2">Accounts</h1>
          <p className="text-zinc-400">Manage your accounts and balances</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-zinc-900 font-medium rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all shadow-lg shadow-amber-900/30">
          <Plus size={20} />
          <span>Add Account</span>
        </button>
      </div>

      {/* Total Balance Card */}
      <div className="bg-gradient-to-br from-amber-500/10 to-yellow-600/10 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-zinc-400 text-sm font-light mb-2">Total Balance Across All Accounts</p>
            <p className="text-white text-4xl font-light">
              ${accounts.reduce((sum, acc) => sum + acc.balance, 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 hover:bg-zinc-900/70 text-white rounded-lg transition-all border border-zinc-700">
              <Send size={18} />
              <span className="hidden sm:inline">Transfer</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 hover:bg-zinc-900/70 text-white rounded-lg transition-all border border-zinc-700">
              <Download size={18} />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        </div>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accounts.map((account) => (
          <div key={account.id} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white text-lg font-light">{account.name}</h3>
                  <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">Active</span>
                </div>
                <p className="text-zinc-500 text-sm">{account.type} • {account.accountNumber}</p>
              </div>
              <div className={`p-3 bg-gradient-to-br ${account.color} rounded-lg`}>
                <Wallet size={20} className="text-white" />
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-zinc-400 text-sm font-light mb-1">Available Balance</p>
              <p className="text-white text-3xl font-light">
                ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-zinc-800/50 hover:bg-zinc-800 text-white rounded-lg transition-all text-sm font-light">
                View Details
              </button>
              <button className="flex-1 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 rounded-lg transition-all text-sm font-light border border-amber-500/20">
                Transfer
              </button>
            </div>
          </div>
        ))}
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
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activity.amount > 0 ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  {activity.amount > 0 ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                </div>
                <div>
                  <p className="text-white font-light">{activity.description}</p>
                  <p className="text-zinc-500 text-sm">{activity.account} • {activity.date}</p>
                </div>
              </div>
              <div className={`text-lg font-light ${activity.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {activity.amount > 0 ? '+' : ''}${Math.abs(activity.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
