/**
 * /api/clearlytics-dashboard
 * Pulls analytics data from Clearlytics Convex backend and returns it.
 * Queries real data from Convex. Results cached for 5 minutes.
 */

import { NextResponse } from 'next/server';

const CONVEX_URL = (process.env.CLEARLYTICS_CONVEX_URL || 'https://wry-whale-127.convex.cloud').trim();
const CLEARLYTICS_SITE_ID = (process.env.CLEARLYTICS_SITE_ID || 'aiagentpersona-com').trim();

// Simple in-memory cache
let cache: { data: unknown; expiresAt: number } | null = null;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

export const dynamic = 'force-dynamic';

function getDateString(daysAgo: number): string {
  const d = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
  return d.toISOString().split('T')[0];
}

async function queryConvex(path: string, args: Record<string, unknown>) {
  const resp = await fetch(`${CONVEX_URL}/api/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path, args, format: 'json' }),
  });
  if (!resp.ok) throw new Error(`Convex query failed: ${resp.status}`);
  const data = await resp.json();
  if (data.status !== 'success') throw new Error(`Convex query error: ${JSON.stringify(data)}`);
  return data.value;
}

async function fetchAnalytics() {
  if (cache && cache.expiresAt > Date.now()) {
    return cache.data;
  }

  try {
    const today = getDateString(0);
    const weekAgo = getDateString(7);
    const monthAgo = getDateString(30);

    const [liveCount, todayStats, weekStats, monthStats] = await Promise.all([
      queryConvex('stats:getLiveCount', { siteId: CLEARLYTICS_SITE_ID }),
      queryConvex('stats:getStatsBySiteId', { siteId: CLEARLYTICS_SITE_ID, startDate: today, endDate: today }),
      queryConvex('stats:getStatsBySiteId', { siteId: CLEARLYTICS_SITE_ID, startDate: weekAgo, endDate: today }),
      queryConvex('stats:getStatsBySiteId', { siteId: CLEARLYTICS_SITE_ID, startDate: monthAgo, endDate: today }),
    ]);

    const result = {
      uniqueVisitors: {
        today: todayStats?.totalUniqueVisitors ?? 0,
        last7d: weekStats?.totalUniqueVisitors ?? 0,
        last30d: monthStats?.totalUniqueVisitors ?? 0,
      },
      pageViews: {
        today: todayStats?.totalPageViews ?? 0,
        last7d: weekStats?.totalPageViews ?? 0,
        last30d: monthStats?.totalPageViews ?? 0,
      },
      topPages: (monthStats?.topPages ?? []).map((p: any) => ({
        pathname: p.pathname,
        views: p.views,
      })),
      topReferrers: (monthStats?.topReferrers ?? []).map((r: any) => ({
        hostname: r.hostname,
        views: r.count,
      })),
      activeVisitors: liveCount?.activeVisitors ?? 0,
      activePaths: liveCount?.activePaths ?? [],
      devices: monthStats?.devices ?? { mobile: 0, tablet: 0, desktop: 0 },
      lastUpdated: new Date().toISOString(),
      status: 'connected',
      siteId: CLEARLYTICS_SITE_ID,
    };

    cache = { data: result, expiresAt: Date.now() + CACHE_TTL_MS };
    return result;
  } catch (error) {
    console.error('[clearlytics-dashboard] Error:', error instanceof Error ? error.message : 'Unknown');
    return {
      uniqueVisitors: { today: 0, last7d: 0, last30d: 0 },
      pageViews: { today: 0, last7d: 0, last30d: 0 },
      topPages: [],
      topReferrers: [],
      activeVisitors: 0,
      activePaths: [],
      devices: { mobile: 0, tablet: 0, desktop: 0 },
      lastUpdated: new Date().toISOString(),
      status: 'error',
      error: error instanceof Error ? error.message : 'Connection failed',
    };
  }
}

export async function GET() {
  const data = await fetchAnalytics();
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'private, max-age=300',
    },
  });
}
