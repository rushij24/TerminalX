import { gates } from '../data/mockData'

const statusStyle: Record<string, string> = {
  active: 'text-green-400 bg-green-400/10 border-green-400/20',
  maintenance: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  inactive: 'text-gray-400 bg-gray-400/10 border-gray-400/20',
}

export default function Gates() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white font-semibold text-lg">Gate Management</h2>
          <p className="text-gray-400 text-sm">Real-time status of all terminal entry/exit points</p>
        </div>
        <div className="flex gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-green-400"><span className="w-2 h-2 bg-green-400 rounded-full"></span>Active: {gates.filter(g => g.status === 'active').length}</span>
          <span className="flex items-center gap-1.5 text-yellow-400"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>Maintenance: {gates.filter(g => g.status === 'maintenance').length}</span>
          <span className="flex items-center gap-1.5 text-gray-400"><span className="w-2 h-2 bg-gray-400 rounded-full"></span>Inactive: {gates.filter(g => g.status === 'inactive').length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gates.map(gate => (
          <div key={gate.id} className={`bg-gray-900 border rounded-xl p-5 ${
            gate.status === 'active' ? 'border-gray-800' :
            gate.status === 'maintenance' ? 'border-yellow-800/50' : 'border-gray-800 opacity-60'
          }`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-white font-medium">{gate.name}</h3>
                <span className="text-gray-400 text-xs">{gate.type}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full border capitalize ${statusStyle[gate.status]}`}>
                {gate.status}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="bg-gray-800 rounded-lg p-2">
                <p className="text-white font-semibold text-lg">{gate.queue}</p>
                <p className="text-gray-500 text-xs">Queue</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <p className="text-blue-400 font-semibold text-lg">{gate.processed}</p>
                <p className="text-gray-500 text-xs">Processed</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <p className="text-yellow-400 font-semibold text-sm">{gate.avgTime}</p>
                <p className="text-gray-500 text-xs">Avg Time</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <p className={`font-semibold text-lg ${gate.compliance === 100 ? 'text-green-400' : 'text-yellow-400'}`}>
                  {gate.compliance > 0 ? `${gate.compliance}%` : '—'}
                </p>
                <p className="text-gray-500 text-xs">Comply</p>
              </div>
            </div>

            {gate.status === 'active' && (
              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Queue load</span>
                  <span>{Math.round((gate.queue / 20) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${gate.queue > 12 ? 'bg-red-500' : gate.queue > 8 ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{ width: `${Math.min((gate.queue / 20) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
