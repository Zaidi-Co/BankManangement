import { User, Lock, Bell, Shield, CreditCard, Globe, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsAlerts: false,
    twoFactorAuth: true,
    biometricAuth: true,
    darkMode: true,
    language: 'en',
    currency: 'USD',
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Handle save logic
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-light text-white mb-2">Settings</h1>
        <p className="text-zinc-400">Manage your account preferences and security</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="xl:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
                <User size={20} />
              </div>
              <h3 className="text-white text-lg font-light">Personal Information</h3>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-light text-zinc-400 mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light text-zinc-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light text-zinc-400 mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue="john.doe@email.com"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-zinc-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <button
                type="submit"
                onClick={handleSave}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-zinc-900 font-medium rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all shadow-lg shadow-amber-900/30"
              >
                Save Changes
              </button>
            </form>
          </div>

          {/* Security Settings */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                <Shield size={20} />
              </div>
              <h3 className="text-white text-lg font-light">Security Settings</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg">
                <div>
                  <p className="text-white font-light">Two-Factor Authentication</p>
                  <p className="text-zinc-500 text-sm">Add an extra layer of security</p>
                </div>
                <button
                  onClick={() => handleToggle('twoFactorAuth')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.twoFactorAuth ? 'bg-amber-500' : 'bg-zinc-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg">
                <div>
                  <p className="text-white font-light">Biometric Authentication</p>
                  <p className="text-zinc-500 text-sm">Use fingerprint or face ID</p>
                </div>
                <button
                  onClick={() => handleToggle('biometricAuth')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.biometricAuth ? 'bg-amber-500' : 'bg-zinc-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.biometricAuth ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="p-4 bg-zinc-800/30 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lock size={20} className="text-zinc-400" />
                  <p className="text-white font-light">Change Password</p>
                </div>
                <button className="w-full sm:w-auto px-6 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-all text-sm font-light">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Bell size={20} />
              </div>
              <h3 className="text-white text-lg font-light">Notification Preferences</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg">
                <div>
                  <p className="text-white font-light">Email Notifications</p>
                  <p className="text-zinc-500 text-sm">Receive updates via email</p>
                </div>
                <button
                  onClick={() => handleToggle('emailNotifications')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.emailNotifications ? 'bg-amber-500' : 'bg-zinc-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg">
                <div>
                  <p className="text-white font-light">Push Notifications</p>
                  <p className="text-zinc-500 text-sm">Get mobile app notifications</p>
                </div>
                <button
                  onClick={() => handleToggle('pushNotifications')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.pushNotifications ? 'bg-amber-500' : 'bg-zinc-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg">
                <div>
                  <p className="text-white font-light">SMS Alerts</p>
                  <p className="text-zinc-500 text-sm">Receive text message alerts</p>
                </div>
                <button
                  onClick={() => handleToggle('smsAlerts')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.smsAlerts ? 'bg-amber-500' : 'bg-zinc-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.smsAlerts ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Sidebar */}
        <div className="space-y-6">
          {/* Preferences */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                <Globe size={20} />
              </div>
              <h3 className="text-white text-lg font-light">Preferences</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-light text-zinc-400 mb-2">Language</label>
                <select 
                  value={settings.language}
                  onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-light text-zinc-400 mb-2">Currency</label>
                <select 
                  value={settings.currency}
                  onChange={(e) => setSettings(prev => ({ ...prev, currency: e.target.value }))}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg">
                <div className="flex items-center gap-3">
                  {settings.darkMode ? <Moon size={20} className="text-zinc-400" /> : <Sun size={20} className="text-zinc-400" />}
                  <div>
                    <p className="text-white font-light">Dark Mode</p>
                    <p className="text-zinc-500 text-sm">Currently enabled</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle('darkMode')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.darkMode ? 'bg-amber-500' : 'bg-zinc-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Linked Accounts */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                <CreditCard size={20} />
              </div>
              <h3 className="text-white text-lg font-light">Linked Accounts</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 bg-zinc-800/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-light">PayPal</p>
                  <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">Connected</span>
                </div>
                <p className="text-zinc-500 text-sm">john.doe@email.com</p>
              </div>

              <div className="p-4 bg-zinc-800/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-light">Stripe</p>
                  <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">Connected</span>
                </div>
                <p className="text-zinc-500 text-sm">****1234</p>
              </div>

              <button className="w-full px-4 py-3 bg-zinc-800/50 hover:bg-zinc-800 text-white rounded-lg transition-all text-sm font-light border border-zinc-700">
                + Add New Account
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
            <h3 className="text-white text-lg font-light mb-4">Need Help?</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-zinc-800/50 hover:bg-zinc-800 text-white rounded-lg transition-all text-sm font-light text-left">
                Contact Support
              </button>
              <button className="w-full px-4 py-3 bg-zinc-800/50 hover:bg-zinc-800 text-white rounded-lg transition-all text-sm font-light text-left">
                Privacy Policy
              </button>
              <button className="w-full px-4 py-3 bg-zinc-800/50 hover:bg-zinc-800 text-white rounded-lg transition-all text-sm font-light text-left">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
