# TerminalX

A real-time port operations intelligence dashboard built for terminal control rooms. Tracks container movements, gate status, customs compliance, and operational alerts across a live terminal.

> Built from real-world experience managing Smart InGate Automation deployments at active port terminals.

---

## Features

### Dashboard
- Live KPI cards — TEUs processed, gate processing time, throughput %, containers in/out
- Hourly TEU throughput bar chart
- Live status panel — active gates, open alerts, customs clearance rate, compliance
- Recent alerts feed synced with the Alerts tab

### Gates
- Real-time status for all 10 terminal gates (Active / Maintenance / Inactive)
- Per-gate stats: queue length, vehicles processed, avg processing time, compliance %
- Color-coded queue load bar (green → yellow → red)

### Containers
- Full container tracking table with search by container ID
- Filter by status: In Terminal, Processing, In Transit, Outbound, Customs Hold
- Columns: Container ID, Status, Type, Weight, Location, ETA, Customs, Gate

### Alerts
- Severity-based alerts: Critical, Warning, Info
- Filter by: All, Open, Resolved
- One-click resolve — updates count on Dashboard in real time

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tooling
- **Tailwind CSS v4** — styling

---

## Getting Started

```bash
git clone https://github.com/rushij24/TerminalX.git
cd TerminalX
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Background

This project reflects real operational work:

- Deployed Smart InGate Automation systems at Nhava Sheva Port, Mumbai — reducing gate processing time by **40%**
- Coordinated monitoring of **2,800+ TEUs daily** for Indian Customs and port security
- Led 12-member cross-functional teams across software, hardware, and field operations

---

## Author

**Rushikesh Jagdhane** — Project Manager & Software Developer  
[rushikeshjagdhane.com](https://www.rushikeshjagdhane.com) · [LinkedIn](https://linkedin.com/in/rushikesh-jagdhane)
