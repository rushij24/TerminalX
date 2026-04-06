export const kpis = [
  { label: 'Total TEUs Today', value: '2,847', change: '+12%', trend: 'up', color: 'blue' },
  { label: 'Gate Processing Time', value: '4.2 min', change: '-40%', trend: 'up', color: 'green' },
  { label: 'Active Gates', value: '8 / 10', change: '80%', trend: 'neutral', color: 'yellow' },
  { label: 'Terminal Throughput', value: '94%', change: '+22%', trend: 'up', color: 'purple' },
  { label: 'Containers In', value: '1,423', change: '+8%', trend: 'up', color: 'blue' },
  { label: 'Containers Out', value: '1,424', change: '+5%', trend: 'up', color: 'green' },
]

export const gates = [
  { id: 'G-01', name: 'Gate 01 — North Entry', status: 'active', type: 'Inbound', queue: 12, avgTime: '3.8 min', processed: 284, compliance: 100 },
  { id: 'G-02', name: 'Gate 02 — North Entry', status: 'active', type: 'Outbound', queue: 7, avgTime: '4.1 min', processed: 261, compliance: 99 },
  { id: 'G-03', name: 'Gate 03 — South Entry', status: 'active', type: 'Inbound', queue: 15, avgTime: '4.5 min', processed: 198, compliance: 97 },
  { id: 'G-04', name: 'Gate 04 — South Entry', status: 'active', type: 'Outbound', queue: 4, avgTime: '3.6 min', processed: 310, compliance: 100 },
  { id: 'G-05', name: 'Gate 05 — East Entry', status: 'active', type: 'Inbound', queue: 9, avgTime: '4.0 min', processed: 227, compliance: 98 },
  { id: 'G-06', name: 'Gate 06 — East Entry', status: 'maintenance', type: 'Outbound', queue: 0, avgTime: '—', processed: 143, compliance: 100 },
  { id: 'G-07', name: 'Gate 07 — West Entry', status: 'active', type: 'Inbound', queue: 6, avgTime: '3.9 min', processed: 189, compliance: 99 },
  { id: 'G-08', name: 'Gate 08 — West Entry', status: 'active', type: 'Outbound', queue: 11, avgTime: '4.3 min', processed: 204, compliance: 98 },
  { id: 'G-09', name: 'Gate 09 — Customs', status: 'active', type: 'Customs', queue: 3, avgTime: '6.2 min', processed: 89, compliance: 100 },
  { id: 'G-10', name: 'Gate 10 — Customs', status: 'inactive', type: 'Customs', queue: 0, avgTime: '—', processed: 0, compliance: 0 },
]

export const containers = [
  { id: 'CXTU-2847103', status: 'In Terminal', type: '40ft', weight: '24.3T', location: 'Zone A-12', eta: '—', customs: 'Cleared', gate: 'G-01' },
  { id: 'MSCU-1938472', status: 'Processing', type: '20ft', weight: '18.7T', location: 'Gate G-03', eta: '6 min', customs: 'Pending', gate: 'G-03' },
  { id: 'COSCO-8374610', status: 'In Transit', type: '40ft HC', weight: '27.1T', location: 'Zone B-07', eta: '—', customs: 'Cleared', gate: 'G-04' },
  { id: 'HLXU-9284751', status: 'Outbound', type: '20ft', weight: '15.2T', location: 'Gate G-02', eta: '2 min', customs: 'Cleared', gate: 'G-02' },
  { id: 'EVRU-3847201', status: 'In Terminal', type: '40ft', weight: '22.8T', location: 'Zone C-03', eta: '—', customs: 'Cleared', gate: 'G-05' },
  { id: 'OOLU-7261849', status: 'Customs Hold', type: '40ft HC', weight: '29.4T', location: 'Customs Bay', eta: '—', customs: 'Under Review', gate: 'G-09' },
  { id: 'YMLU-4938271', status: 'Processing', type: '20ft', weight: '12.6T', location: 'Gate G-07', eta: '4 min', customs: 'Cleared', gate: 'G-07' },
  { id: 'CMAU-8374652', status: 'In Terminal', type: '40ft', weight: '25.1T', location: 'Zone A-08', eta: '—', customs: 'Cleared', gate: 'G-01' },
  { id: 'PCIU-1847362', status: 'Outbound', type: '20ft', weight: '16.9T', location: 'Gate G-08', eta: '8 min', customs: 'Cleared', gate: 'G-08' },
  { id: 'TGHU-5847291', status: 'In Transit', type: '40ft', weight: '23.5T', location: 'Zone D-11', eta: '—', customs: 'Cleared', gate: 'G-05' },
]

export const alerts = [
  { id: 1, severity: 'critical', title: 'Customs Hold — OOLU-7261849', message: 'Container flagged for inspection. Notify customs officer at Bay 2.', time: '2 min ago', gate: 'G-09', resolved: false },
  { id: 2, severity: 'warning', title: 'Queue Buildup — Gate G-03', message: 'Queue length exceeded 15 vehicles. Consider redirecting to G-05.', time: '8 min ago', gate: 'G-03', resolved: false },
  { id: 3, severity: 'warning', title: 'OCR Read Failure — Gate G-05', message: 'Plate recognition failed for 3 consecutive vehicles. Manual override active.', time: '14 min ago', gate: 'G-05', resolved: false },
  { id: 4, severity: 'info', title: 'Gate G-06 Maintenance Started', message: 'Scheduled maintenance window active. ETA: 45 minutes.', time: '22 min ago', gate: 'G-06', resolved: false },
  { id: 5, severity: 'info', title: 'Shift Change Completed', message: 'Operator handover complete at all active gates. All systems nominal.', time: '1 hr ago', gate: 'ALL', resolved: true },
  { id: 6, severity: 'critical', title: 'Geofence Breach — Zone B', message: 'Unauthorized vehicle detected in restricted Zone B. Security notified.', time: '1.5 hr ago', gate: '—', resolved: true },
]

export const throughputData = [
  { hour: '06:00', teus: 120 },
  { hour: '07:00', teus: 210 },
  { hour: '08:00', teus: 345 },
  { hour: '09:00', teus: 480 },
  { hour: '10:00', teus: 390 },
  { hour: '11:00', teus: 520 },
  { hour: '12:00', teus: 410 },
  { hour: '13:00', teus: 480 },
  { hour: '14:00', teus: 560 },
  { hour: '15:00', teus: 490 },
  { hour: '16:00', teus: 430 },
  { hour: '17:00', teus: 310 },
]
