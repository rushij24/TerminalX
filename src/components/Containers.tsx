import { useState } from 'react'
import { containers } from '../data/mockData'

const statusStyle: Record<string, string> = {
  'In Terminal': 'text-blue-400 bg-blue-400/10',
  'Processing': 'text-yellow-400 bg-yellow-400/10',
  'In Transit': 'text-purple-400 bg-purple-400/10',
  'Outbound': 'text-green-400 bg-green-400/10',
  'Customs Hold': 'text-red-400 bg-red-400/10',
}

const customsStyle: Record<string, string> = {
  'Cleared': 'text-green-400',
  'Pending': 'text-yellow-400',
  'Under Review': 'text-red-400',
}

export default function Containers() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const statuses = ['All', 'In Terminal', 'Processing', 'In Transit', 'Outbound', 'Customs Hold']

  const filtered = containers.filter(c => {
    const matchSearch = c.id.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'All' || c.status === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-white font-semibold text-lg">Container Tracking</h2>
        <p className="text-gray-400 text-sm">Live tracking of all containers in terminal</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search container ID..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 w-full sm:w-64"
        />
        <div className="flex gap-2 flex-wrap">
          {statuses.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === s ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left text-gray-400 text-xs font-medium px-4 py-3">Container ID</th>
                <th className="text-left text-gray-400 text-xs font-medium px-4 py-3">Status</th>
                <th className="text-left text-gray-400 text-xs font-medium px-4 py-3">Type</th>
                <th className="text-left text-gray-400 text-xs font-medium px-4 py-3">Weight</th>
                <th className="text-left text-gray-400 text-xs font-medium px-4 py-3">Location</th>
                <th className="text-left text-gray-400 text-xs font-medium px-4 py-3">ETA</th>
                <th className="text-left text-gray-400 text-xs font-medium px-4 py-3">Customs</th>
                <th className="text-left text-gray-400 text-xs font-medium px-4 py-3">Gate</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={c.id} className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors ${i % 2 === 0 ? '' : 'bg-gray-800/10'}`}>
                  <td className="px-4 py-3 font-mono text-sm text-white">{c.id}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${statusStyle[c.status]}`}>{c.status}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm">{c.type}</td>
                  <td className="px-4 py-3 text-gray-300 text-sm">{c.weight}</td>
                  <td className="px-4 py-3 text-gray-300 text-sm">{c.location}</td>
                  <td className="px-4 py-3 text-gray-300 text-sm">{c.eta}</td>
                  <td className={`px-4 py-3 text-sm font-medium ${customsStyle[c.customs]}`}>{c.customs}</td>
                  <td className="px-4 py-3 text-gray-400 text-sm font-mono">{c.gate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-10 text-gray-500">No containers match your search.</div>
          )}
        </div>
      </div>
    </div>
  )
}
