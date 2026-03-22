'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const DASHBOARD_PASSWORD = process.env.NEXT_PUBLIC_ANALYTICS_PASSWORD || 'productclaw2026';

interface AnalyticsData {
  uniqueVisitors: { today: number; last7d: number; last30d: number };
  pageViews: { today: number; last7d: number; last30d: number };
  topPages: Array<{ pathname: string; views: number }>;
  topReferrers: Array<{ hostname: string; views: number }>;
  lastUpdated: string;
}

export default function AnalyticsDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/clearlytics-dashboard');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
      setLastRefresh(new Date());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load analytics');
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-refresh every 60s when authenticated
  useEffect(() => {
    if (!authenticated) return;
    fetchData();
    const interval = setInterval(fetchData, 60_000);
    return () => clearInterval(interval);
  }, [authenticated, fetchData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DASHBOARD_PASSWORD) {
      setAuthenticated(true);
    } else {
      setError('Incorrect password');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-500 text-sm mb-6">ProductClaw — AI Agent Persona</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">📊 Analytics Dashboard</h1>
          <p className="text-sm text-gray-500">aiagentpersona.com — Powered by Clearlytics</p>
        </div>
        <div className="flex items-center gap-4">
          {lastRefresh && (
            <span className="text-xs text-gray-400">
              Last updated: {lastRefresh.toLocaleTimeString()}
            </span>
          )}
          <button
            onClick={fetchData}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Refreshing...' : '↻ Refresh'}
          </button>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">← Back to site</Link>
        </div>
      </div>

      <div className="container py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading && !data && (
          <div className="text-center py-20 text-gray-500">Loading analytics...</div>
        )}

        {data && (
          <div className="space-y-6">
            {/* Unique Visitors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-sm text-gray-500 mb-1">Unique Visitors Today</div>
                <div className="text-4xl font-bold text-blue-600">{data.uniqueVisitors.today.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-sm text-gray-500 mb-1">Unique Visitors (7d)</div>
                <div className="text-4xl font-bold text-blue-600">{data.uniqueVisitors.last7d.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-sm text-gray-500 mb-1">Unique Visitors (30d)</div>
                <div className="text-4xl font-bold text-blue-600">{data.uniqueVisitors.last30d.toLocaleString()}</div>
              </div>
            </div>

            {/* Page Views */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-sm text-gray-500 mb-1">Page Views Today</div>
                <div className="text-4xl font-bold text-emerald-600">{data.pageViews.today.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-sm text-gray-500 mb-1">Page Views (7d)</div>
                <div className="text-4xl font-bold text-emerald-600">{data.pageViews.last7d.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-sm text-gray-500 mb-1">Page Views (30d)</div>
                <div className="text-4xl font-bold text-emerald-600">{data.pageViews.last30d.toLocaleString()}</div>
              </div>
            </div>

            {/* Top Pages + Referrers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Top Pages</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-2">Page</th>
                      <th className="pb-2 text-right">Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.topPages.length === 0 ? (
                      <tr><td colSpan={2} className="py-4 text-center text-gray-400">No data yet</td></tr>
                    ) : (
                      data.topPages.map((page) => (
                        <tr key={page.pathname} className="border-b border-gray-50">
                          <td className="py-2 text-gray-700 font-mono text-xs">{page.pathname}</td>
                          <td className="py-2 text-right font-semibold text-gray-900">{page.views.toLocaleString()}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Traffic Sources</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-2">Referrer</th>
                      <th className="pb-2 text-right">Visits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.topReferrers.length === 0 ? (
                      <tr><td colSpan={2} className="py-4 text-center text-gray-400">No data yet</td></tr>
                    ) : (
                      data.topReferrers.map((ref) => (
                        <tr key={ref.hostname} className="border-b border-gray-50">
                          <td className="py-2 text-gray-700">{ref.hostname || '(direct)'}</td>
                          <td className="py-2 text-right font-semibold text-gray-900">{ref.views.toLocaleString()}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-gray-400 text-center">
              Data from Clearlytics (clearlytics-sigma.vercel.app) • Auto-refreshes every 60 seconds
              {data.lastUpdated && ` • Data as of ${new Date(data.lastUpdated).toLocaleString()}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
