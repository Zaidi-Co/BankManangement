import { useState } from 'react';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Accounts } from './components/Accounts';
import { Cards } from './components/Cards';
import { Investments } from './components/Investments';
import { Settings } from './components/Settings';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLogin(true);
  };

  const toggleAuth = () => {
    setShowLogin(!showLogin);
  };

  // Render login/signup screens
  if (!isAuthenticated) {
    return showLogin ? (
      <Login onLogin={handleLogin} onToggleAuth={toggleAuth} />
    ) : (
      <Signup onSignup={handleSignup} onToggleAuth={toggleAuth} />
    );
  }

  // Render main dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-stone-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
      
      <div className="relative flex">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
        
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-0 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'accounts' && <Accounts />}
            {activeTab === 'cards' && <Cards />}
            {activeTab === 'investments' && <Investments />}
            {activeTab === 'settings' && <Settings />}
          </div>
        </main>
      </div>
    </div>
  );
}
