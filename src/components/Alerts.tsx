import { useState } from 'react'
import type { Alert } from '../data/mockData'

const severityStyle: Record<string, string> = {
  critical: 'border-red-800 bg-red-950/30 text-red-400',
  warning: 'border-yellow-800 bg-yellow-950/30 text-yellow-400',
  info: 'border-blue-800 bg-blue-950/30 text-blue-400',
}

const dotStyle: Record<string, string> = {
  critical: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
}

type Props = {
  alerts: Alert[]
  onResolve: (id: number) => void
}

export default function Alerts({ alerts, onResolve }: Props) {
  const [filter, setFilter] = useState('all')

  const filtered = alerts.filter(a => {
    if (filter === 'open') return !a.resolved
    if (filter === 'resolved') return a.resolved
    return true
  })

  const openCount = alerts.filter(a => !a.resolved).length
  const criticalCount = alerts.filter(a => a.severity === 'critical' && !a.resolved).length

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-white font-semibold text-lg">Alerts & Notifications</h2>
          <p className="text-gray-400 text-sm">System alerts, gate issues, and compliance flags</p>
        </div>
        <div className="flex gap-3 text-sm">
          {criticalCount > 0 && (
            <span className="flex items-center gap-1.5 text-red-400 bg-red-400/10 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              {criticalCount} Critical
            </span>
          )}
          <span className="text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{openCount} Open</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {['all', 'open', 'resolved'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-lg text-sm capitalize transition-colors ${
              filter === f ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Alert List */}
      <div className="space-y-3">
        {filtered.map(alert => (
          <div
            key={alert.id}
            className={`border rounded-xl p-4 transition-opacity ${
              alert.resolved ? 'opacity-50 border-gray-800 bg-gray-900' : severityStyle[alert.severity]
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${alert.resolved ? 'bg-gray-500' : dotStyle[alert.severity]}`} />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-medium text-sm">{alert.title}</p>
                    <span className={`text-xs px-2 py-0.5 rounded capitalize font-medium ${
                      alert.resolved ? 'text-gray-400 bg-gray-700' : severityStyle[alert.severity]
                    }`}>
                      {alert.resolved ? 'resolved' : alert.severity}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{alert.message}</p>
                  <div className="flex gap-3 mt-2 text-xs text-gray-500">
                    <span>Gate: {alert.gate}</span>
                    <span>{alert.time}</span>
                  </div>
                </div>
              </div>
              {!alert.resolved && (
                <button
                  onClick={() => onResolve(alert.id)}
                  className="shrink-0 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Resolve
                </button>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">No alerts in this category.</div>
        )}
      </div>
    </div>
  )
}
