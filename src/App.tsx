import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Gates from './components/Gates'
import Containers from './components/Containers'
import Alerts from './components/Alerts'
import './index.css'

const tabs = ['Dashboard', 'Gates', 'Containers', 'Alerts']

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard')

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">T</span>
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg leading-none">TerminalOps</h1>
            <p className="text-gray-400 text-xs mt-0.5">Port Operations Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Live
          </span>
          <span className="text-gray-400 text-xs">Last sync: just now</span>
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
        {activeTab === 'Dashboard' && <Dashboard />}
        {activeTab === 'Gates' && <Gates />}
        {activeTab === 'Containers' && <Containers />}
        {activeTab === 'Alerts' && <Alerts />}
      </main>
    </div>
  )
}

export default App
