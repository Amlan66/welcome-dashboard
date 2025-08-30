import React from 'react'
import { FaUserFriends, FaLightbulb, FaChartBar, FaCoins } from 'react-icons/fa'

const Card = ({ title, value, icon: Icon, color }) => (
  <div className="stat-card">
    <div className="stat-info">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
    <div className="stat-icon" style={{ background: color }}>
      <Icon />
    </div>
  </div>
)

export default function StatsRow() {
  return (
    <div className="stats-row" aria-label="KPI cards">
      <Card title="Total Contacts" value={1358} icon={FaUserFriends} color="#1677ff" />
      <Card title="Total Opportunities" value={2345} icon={FaLightbulb} color="#f5a623" />
      <Card title="Total Activities" value={4564} icon={FaChartBar} color="#2ccac6" />
      <Card title="Total Wins" value={2320} icon={FaCoins} color="#2bbf5f" />
    </div>
  )
}


