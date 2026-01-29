import { LayoutDashboard, Wallet, CreditCard, TrendingUp, Settings, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'accounts', label: 'Accounts', icon: Wallet },
    { id: 'cards', label: 'Cards', icon: CreditCard },
    { id: 'investments', label: 'Investments', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleMenuClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg text-white"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-zinc-900/95 backdrop-blur-xl border-r border-zinc-800
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-900/30">
              <div className="text-lg font-bold text-zinc-900">EB</div>
            </div>
            <div>
              <h1 className="text-white font-light text-lg tracking-wide">Elite Banking</h1>
              <p className="text-zinc-500 text-xs">Premium Access</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200 font-light
                  ${isActive 
                    ? 'bg-gradient-to-r from-amber-500/10 to-yellow-600/10 border border-amber-500/20 text-amber-500' 
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white border border-transparent'
                  }
                `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-zinc-800 space-y-3">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-light truncate">John Doe</p>
              <p className="text-zinc-500 text-xs truncate">john.doe@email.com</p>
            </div>
          </div>
          
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:bg-red-500/10 hover:text-red-500 border border-transparent hover:border-red-500/20 transition-all duration-200 font-light"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
