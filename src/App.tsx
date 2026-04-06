import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Gates from './components/Gates'
import Containers from './components/Containers'
import Alerts from './components/Alerts'
import portHero from './assets/port-hero.jpg'
import { alerts as initialAlerts } from './data/mockData'
import type { Alert } from './data/mockData'
import './index.css'

const tabs = ['Dashboard', 'Gates', 'Containers', 'Alerts']

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts)

  const resolveAlert = (id: number) => {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, resolved: true } : a))
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Hero Banner */}
      <div className="relative h-40 overflow-hidden">
        <img src={portHero} alt="Port terminal" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-gray-950" />
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h1 className="text-white text-3xl font-bold tracking-tight">TerminalX</h1>
            <p className="text-blue-300 text-sm mt-1">Port Operations Intelligence Dashboard</p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-green-400 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Live
            </span>
            <span className="text-gray-300 text-xs bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">Last sync: just now</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">T</span>
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg leading-none">TerminalX</h1>
            <p className="text-gray-400 text-xs mt-0.5">Port Operations Dashboard</p>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6">
        <div className="flex gap-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="p-6">
        {activeTab === 'Dashboard' && <Dashboard alerts={alerts} />}
        {activeTab === 'Gates' && <Gates />}
        {activeTab === 'Containers' && <Containers />}
        {activeTab === 'Alerts' && <Alerts alerts={alerts} onResolve={resolveAlert} />}
      </main>
    </div>
  )
}

export default App
