import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const dataWeek = [
  { name: 'Mon', value: 8 },
  { name: 'Tue', value: 22 },
  { name: 'Wed', value: 35 },
  { name: 'Thu', value: 14 },
  { name: 'Fri', value: 28 },
  { name: 'Sat', value: 34 },
  { name: 'Sun', value: 18 }
]
const dataMonth = Array.from({ length: 12 }).map((_, i) => ({ name: `W${i + 1}`, value: Math.round(10 + Math.random() * 30) }))
const dataYear = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => ({ name: m, value: Math.round(10 + Math.random() * 40) }))

function pickData(tf) {
  if (tf === 'Last Week') return dataWeek
  if (tf === 'Last Month') return dataMonth
  return dataYear
}

export default function ChartPanel({ timeframe, onTimeframeChange }) {
  const data = pickData(timeframe)
  return (
    <section className="panel chart-panel">
      <div className="panel-header">
        <div className="panel-title">Contact</div>
        <div className="panel-controls">
          <select value={timeframe} onChange={e => onTimeframeChange(e.target.value)}>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>
      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1677ff" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#1677ff" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#1677ff" fillOpacity={1} fill="url(#colorBlue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}


