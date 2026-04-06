import { kpis, throughputData, alerts, gates } from '../data/mockData'

const colorMap: Record<string, string> = {
  blue: 'text-blue-400 bg-blue-400/10',
  green: 'text-green-400 bg-green-400/10',
  yellow: 'text-yellow-400 bg-yellow-400/10',
  purple: 'text-purple-400 bg-purple-400/10',
}

const maxTeus = Math.max(...throughputData.map(d => d.teus))

export default function Dashboard() {
  const activeAlerts = alerts.filter(a => !a.resolved)
  const activeGates = gates.filter(g => g.status === 'active').length

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <p className="text-gray-400 text-xs mb-2">{kpi.label}</p>
            <p className={`text-xl font-bold ${colorMap[kpi.color].split(' ')[0]}`}>{kpi.value}</p>
            <span className={`text-xs px-1.5 py-0.5 rounded mt-1 inline-block ${
              kpi.trend === 'up' ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'
            }`}>
              {kpi.change}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Throughput Chart */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h2 className="text-white font-semibold mb-1">TEU Throughput Today</h2>
          <p className="text-gray-400 text-xs mb-5">Container movements by hour</p>
          <div className="flex items-end gap-1 h-40">
            {throughputData.map((d) => (
              <div key={d.hour} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-blue-600 rounded-t hover:bg-blue-500 transition-colors"
                  style={{ height: `${(d.teus / maxTeus) * 100}%` }}
                  title={`${d.teus} TEUs`}
                />
                <span className="text-gray-500 text-[9px] rotate-45 origin-left">{d.hour}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status Summary */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-4">
          <h2 className="text-white font-semibold">Live Status</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Active Gates</span>
              <span className="text-green-400 font-semibold">{activeGates} / 10</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Open Alerts</span>
              <span className="text-red-400 font-semibold">{activeAlerts.length}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Customs Cleared</span>
              <span className="text-blue-400 font-semibold">97.8%</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Avg Queue</span>
              <span className="text-yellow-400 font-semibold">8.3 vehicles</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-400 text-sm">Compliance Rate</span>
              <span className="text-green-400 font-semibold">99.1%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
        <h2 className="text-white font-semibold mb-4">Recent Alerts</h2>
        <div className="space-y-2">
          {alerts.slice(0, 4).map(alert => (
            <div key={alert.id} className={`flex items-start gap-3 p-3 rounded-lg border ${
              alert.resolved ? 'border-gray-800 opacity-50' :
              alert.severity === 'critical' ? 'border-red-800 bg-red-950/30' :
              alert.severity === 'warning' ? 'border-yellow-800 bg-yellow-950/30' :
              'border-blue-800 bg-blue-950/30'
            }`}>
              <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                alert.resolved ? 'bg-gray-600' :
                alert.severity === 'critical' ? 'bg-red-500' :
                alert.severity === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
              }`} />
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium">{alert.title}</p>
                <p className="text-gray-400 text-xs mt-0.5">{alert.message}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-gray-500 text-xs">{alert.time}</span>
                {alert.resolved && <p className="text-green-500 text-xs">Resolved</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
