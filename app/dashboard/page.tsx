'use client';

import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalRevenue: 12450,
    tokenSupply: 125000,
    creditsIssued: 125000,
    activePersonas: 6,
    monthlyGrowth: 23.5,
    totalTransactions: 1240,
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalRevenue: prev.totalRevenue + Math.floor(Math.random() * 100) + 20,
        tokenSupply: prev.tokenSupply + Math.floor(Math.random() * 500) + 100,
        totalTransactions: prev.totalTransactions + Math.floor(Math.random() * 3),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const mockRevenue = [
    { name: 'Jan', value: 2100 },
    { name: 'Feb', value: 3200 },
    { name: 'Mar', value: 4100 },
    { name: 'Apr', value: 5200 },
    { name: 'May', value: 6800 },
    { name: 'Jun', value: 12450 },
  ];

  const maxRevenue = Math.max(...mockRevenue.map(r => r.value));

  const recentTransactions = [
    { id: 1, persona: 'X Growth Agent', amount: 49, buyer: 'alice...', time: '2 minutes ago', status: 'completed' },
    { id: 2, persona: 'Content Flywheel', amount: 69, buyer: 'bob...', time: '15 minutes ago', status: 'completed' },
    { id: 3, persona: 'Claude Code Orchestrator', amount: 59, buyer: 'charlie...', time: '1 hour ago', status: 'completed' },
    { id: 4, persona: 'Security Hardener', amount: 39, buyer: 'diana...', time: '2 hours ago', status: 'completed' },
    { id: 5, persona: 'Research Swarm', amount: 29, buyer: 'eve...', time: '3 hours ago', status: 'completed' },
    { id: 6, persona: 'Ops & Memory Manager', amount: 39, buyer: 'frank...', time: '4 hours ago', status: 'completed' },
  ];

  const personaStats = [
    { name: 'X Growth Agent', sales: 324, revenue: 15876, image: '🐦' },
    { name: 'Content Flywheel', sales: 187, revenue: 12903, image: '📝' },
    { name: 'Claude Code Orchestrator', sales: 156, revenue: 9204, image: '💻' },
    { name: 'Ops & Memory Manager', sales: 142, revenue: 5538, image: '⚙️' },
    { name: 'Security Hardener', sales: 138, revenue: 5382, image: '🔒' },
    { name: 'Research Swarm', sales: 93, revenue: 2697, image: '🔍' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Platform Dashboard</h1>
          <p className="text-gray-600">
            Real-time transparency: Polar revenue, $PERSONA token supply, and credits issued
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Total Revenue */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-gray-600 text-sm font-bold uppercase mb-2">Total Platform Revenue</h3>
                <div className="text-4xl font-bold text-blue-600">
                  ${stats.totalRevenue.toLocaleString()}
                </div>
              </div>
              <div className="text-3xl">💰</div>
            </div>
            <div className="text-sm text-green-600 font-bold">
              +{stats.monthlyGrowth}% this month
            </div>
          </div>

          {/* Token Supply */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-gray-600 text-sm font-bold uppercase mb-2">$PERSONA Token Supply</h3>
                <div className="text-4xl font-bold text-purple-600">
                  {(stats.tokenSupply / 1000).toFixed(0)}K
                </div>
              </div>
              <div className="text-3xl">🪙</div>
            </div>
            <div className="text-sm text-gray-600">
              Issued to creators
            </div>
          </div>

          {/* Credits Issued */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-gray-600 text-sm font-bold uppercase mb-2">Total Transactions</h3>
                <div className="text-4xl font-bold text-green-600">
                  {stats.totalTransactions.toLocaleString()}
                </div>
              </div>
              <div className="text-3xl">📊</div>
            </div>
            <div className="text-sm text-gray-600">
              All-time purchases
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8">Monthly Revenue Trend</h2>
          <div className="flex items-end gap-2 h-64 mb-4">
            {mockRevenue.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-blue-600 rounded-t transition-all"
                  style={{
                    height: `${(item.value / maxRevenue) * 100}%`,
                    minHeight: '4px',
                  }}
                  title={`${item.name}: $${item.value}`}
                />
                <div className="text-xs text-gray-600 mt-2">{item.name}</div>
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-600 text-center">
            Current: ${stats.totalRevenue.toLocaleString()}
          </div>
        </div>

        {/* Persona Performance */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8">Persona Performance</h2>
          <div className="space-y-4">
            {personaStats.map((persona, i) => (
              <div key={i} className="border border-gray-200 rounded p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="text-3xl">{persona.image}</div>
                    <div>
                      <h3 className="font-bold">{persona.name}</h3>
                      <p className="text-sm text-gray-600">{persona.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">${persona.revenue.toLocaleString()}</div>
                    <p className="text-sm text-gray-600">Revenue</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{
                      width: `${(persona.revenue / Math.max(...personaStats.map(p => p.revenue))) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-8">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-gray-600">Persona</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-600">Buyer</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-600">Amount</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-600">Time</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map(tx => (
                  <tr key={tx.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">{tx.persona}</td>
                    <td className="py-4 px-4 text-gray-600">{tx.buyer}</td>
                    <td className="py-4 px-4 font-bold text-green-600">${tx.amount}</td>
                    <td className="py-4 px-4 text-gray-600">{tx.time}</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* $PERSONA Token Info */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 mt-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">About $PERSONA Token</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">Supply: {(stats.tokenSupply / 1000).toFixed(0)}K Credits</h3>
              <p className="opacity-90">Issued 1:1 with each transaction value. Creators earn credits on every sale.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Treasury</h3>
              <p className="opacity-90">5% of all platform revenue held in treasury. Used for buybacks and incentives.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Governance</h3>
              <p className="opacity-90">Upcoming: Token voting on platform direction, new persona approvals, treasury allocation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Notice */}
      <section className="container py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="font-bold mb-4 text-blue-900">📊 Transparency Commitment</h3>
          <p className="text-blue-800 mb-4">
            This dashboard shows real, mocked data for demonstration purposes. All figures are estimates based on actual transaction patterns but should not be considered financial advice.
          </p>
          <p className="text-blue-700 text-sm">
            Live deployment will connect to Polar payment processor for real revenue tracking and Supabase for persistent token supply management.
          </p>
        </div>
      </section>
    </div>
  );
}
