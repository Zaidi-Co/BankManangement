import { CreditCard, Lock, Unlock, Eye, EyeOff, Plus, MoreVertical } from 'lucide-react';
import { useState } from 'react';

export function Cards() {
  const [showCardNumbers, setShowCardNumbers] = useState({});

  const cards = [
    {
      id: 1,
      name: 'Elite Platinum Card',
      type: 'Credit',
      cardNumber: '4532 1234 5678 9012',
      expiryDate: '12/26',
      cvv: '123',
      balance: 8500.00,
      limit: 50000.00,
      status: 'active',
      gradient: 'from-amber-400 via-yellow-500 to-amber-600',
      network: 'Visa',
    },
    {
      id: 2,
      name: 'Premium Debit Card',
      type: 'Debit',
      cardNumber: '5412 9876 5432 1098',
      expiryDate: '09/27',
      cvv: '456',
      balance: 45678.90,
      limit: null,
      status: 'active',
      gradient: 'from-zinc-700 via-zinc-800 to-zinc-900',
      network: 'Mastercard',
    },
    {
      id: 3,
      name: 'Travel Rewards Card',
      type: 'Credit',
      cardNumber: '3782 8224 6310 005',
      expiryDate: '03/28',
      cvv: '789',
      balance: 2340.50,
      limit: 30000.00,
      status: 'active',
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      network: 'American Express',
    },
  ];

  const recentTransactions = [
    { id: 1, merchant: 'Amazon.com', amount: -89.99, date: '2024-01-15', category: 'Shopping', card: 'Elite Platinum Card' },
    { id: 2, merchant: 'Starbucks', amount: -12.50, date: '2024-01-15', category: 'Food & Drink', card: 'Premium Debit Card' },
    { id: 3, merchant: 'Delta Airlines', amount: -450.00, date: '2024-01-14', category: 'Travel', card: 'Travel Rewards Card' },
    { id: 4, merchant: 'Shell Gas Station', amount: -65.00, date: '2024-01-14', category: 'Gas', card: 'Premium Debit Card' },
    { id: 5, merchant: 'Netflix', amount: -15.99, date: '2024-01-13', category: 'Entertainment', card: 'Elite Platinum Card' },
  ];

  const toggleCardNumber = (cardId) => {
    setShowCardNumbers(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const formatCardNumber = (number, show) => {
    if (show) {
      return number;
    }
    return number.replace(/\d(?=\d{4})/g, '•');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-light text-white mb-2">Cards</h1>
          <p className="text-zinc-400">Manage your credit and debit cards</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-zinc-900 font-medium rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all shadow-lg shadow-amber-900/30">
          <Plus size={20} />
          <span>Add New Card</span>
        </button>
      </div>

      {/* Cards Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="group relative">
            {/* Card Front */}
            <div className={`relative h-56 bg-gradient-to-br ${card.gradient} rounded-2xl p-6 shadow-2xl transition-all hover:scale-105 cursor-pointer`}>
              {/* Card Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              </div>

              <div className="relative h-full flex flex-col justify-between">
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white/70 text-xs mb-1">{card.type}</p>
                    <p className="text-white font-light text-sm">{card.name}</p>
                  </div>
                  <button 
                    onClick={() => toggleCardNumber(card.id)}
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
                  >
                    {showCardNumbers[card.id] ? <EyeOff size={16} className="text-white" /> : <Eye size={16} className="text-white" />}
                  </button>
                </div>

                {/* Card Number */}
                <div>
                  <p className="text-white text-lg font-light tracking-wider mb-4">
                    {formatCardNumber(card.cardNumber, showCardNumbers[card.id])}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/50 text-xs mb-1">Expiry</p>
                      <p className="text-white font-light">{card.expiryDate}</p>
                    </div>
                    <div className="text-white/90 font-bold text-xl">{card.network}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Info Below */}
            <div className="mt-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-zinc-400 text-xs mb-1">
                    {card.type === 'Credit' ? 'Outstanding Balance' : 'Available Balance'}
                  </p>
                  <p className="text-white text-xl font-light">
                    ${card.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
                {card.limit && (
                  <div className="text-right">
                    <p className="text-zinc-400 text-xs mb-1">Credit Limit</p>
                    <p className="text-white font-light">${card.limit.toLocaleString('en-US')}</p>
                  </div>
                )}
              </div>

              {card.limit && (
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                    <span>Credit Used</span>
                    <span>{((card.balance / card.limit) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full transition-all"
                      style={{ width: `${(card.balance / card.limit) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex gap-2 mt-4">
                <button className="flex-1 py-2 bg-zinc-800/50 hover:bg-zinc-800 text-white rounded-lg transition-all text-sm font-light flex items-center justify-center gap-2">
                  <Lock size={14} />
                  Lock Card
                </button>
                <button className="p-2 bg-zinc-800/50 hover:bg-zinc-800 text-white rounded-lg transition-all">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Card Transactions */}
      <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-lg font-light">Recent Card Transactions</h3>
          <button className="text-amber-500 text-sm hover:text-amber-400 transition-colors">View All</button>
        </div>
        
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 transition-colors gap-3">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="text-white font-light">{transaction.merchant}</p>
                  <p className="text-zinc-500 text-sm">{transaction.card} • {transaction.date}</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4">
                <span className="px-3 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full">
                  {transaction.category}
                </span>
                <div className="text-lg font-light text-red-500">
                  ${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
            <CreditCard className="text-amber-500" size={24} />
          </div>
          <h4 className="text-white font-light mb-2">Cashback Rewards</h4>
          <p className="text-zinc-400 text-sm font-light">Earn up to 5% cashback on all purchases with your Elite cards</p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
            <Lock className="text-blue-500" size={24} />
          </div>
          <h4 className="text-white font-light mb-2">Advanced Security</h4>
          <p className="text-zinc-400 text-sm font-light">24/7 fraud monitoring and instant card lock/unlock feature</p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
            <Unlock className="text-green-500" size={24} />
          </div>
          <h4 className="text-white font-light mb-2">Global Access</h4>
          <p className="text-zinc-400 text-sm font-light">Use your cards worldwide with no international transaction fees</p>
        </div>
      </div>
    </div>
  );
}
