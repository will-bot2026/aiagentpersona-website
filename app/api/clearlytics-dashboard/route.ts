/**
 * /api/clearlytics-dashboard
 * Pulls analytics data from Clearlytics Convex backend and returns it.
 * Also fetches sales data from Clearlytics Supabase via REST API.
 * Results cached for 5 minutes.
 */

import { NextResponse } from 'next/server';

const CONVEX_URL = (process.env.CLEARLYTICS_CONVEX_URL || 'https://wry-whale-127.convex.cloud').trim();
const CLEARLYTICS_SITE_ID = (process.env.CLEARLYTICS_SITE_ID || 'aiagentpersona-com').trim();

// Supabase REST API credentials (direct REST, no SDK dependency)
const SUPABASE_URL = (process.env.CLEARLYTICS_SUPABASE_URL || 'https://txsvztddpldvcapqeuzj.supabase.co').trim();
const SUPABASE_KEY = (process.env.CLEARLYTICS_SUPABASE_SERVICE_KEY || '').trim();

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

interface SaleRow {
  product_name: string | null;
  revenue_cents: number;
  created_at: string;
}

interface UtmRow {
  utm_source: string;
  count: number;
}

async function supabaseQuery(table: string, params: Record<string, string>): Promise<SaleRow[]> {
  if (!SUPABASE_KEY) return [];

  const queryString = Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

  const resp = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${queryString}`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!resp.ok) {
    console.warn(`[clearlytics-dashboard] Supabase query failed: ${resp.status}`);
    return [];
  }

  return resp.json();
}

async function fetchTopUtmSources(siteId: string): Promise<UtmRow[]> {
  if (!SUPABASE_KEY) return [];

  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

  // Use PostgREST RPC or raw select with grouping via the ?select= syntax
  // PostgREST doesn't support GROUP BY directly, so we fetch all UTM rows and aggregate in JS
  const queryString = new URLSearchParams({
    site_id: `eq.${siteId}`,
    utm_source: 'not.is.null',
    created_at: `gte.${thirtyDaysAgo}`,
    select: 'utm_source',
    limit: '1000',
  }).toString();

  const resp = await fetch(`${SUPABASE_URL}/rest/v1/live_sessions?${queryString}`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!resp.ok) return [];

  const rows: Array<{ utm_source: string }> = await resp.json();

  // Aggregate in JS
  const counts: Record<string, number> = {};
  for (const row of rows) {
    if (row.utm_source) {
      counts[row.utm_source] = (counts[row.utm_source] || 0) + 1;
    }
  }

  return Object.entries(counts)
    .map(([utm_source, count]) => ({ utm_source, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

async function fetchSalesData() {
  if (!SUPABASE_KEY) {
    return {
      today: { count: 0, revenue_cents: 0 },
      last7d: { count: 0, revenue_cents: 0 },
      last30d: { count: 0, revenue_cents: 0 },
      recentSales: [],
    };
  }

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
  const week7 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const month30 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();

  const BASE_PARAMS = {
    site_id: `eq.${CLEARLYTICS_SITE_ID}`,
    event_name: 'eq.sale',
  };

  const [todayRows, week7Rows, month30Rows, recentRows] = await Promise.allSettled([
    supabaseQuery('custom_events', { ...BASE_PARAMS, created_at: `gte.${todayStart}`, select: 'revenue_cents' }),
    supabaseQuery('custom_events', { ...BASE_PARAMS, created_at: `gte.${week7}`, select: 'revenue_cents' }),
    supabaseQuery('custom_events', { ...BASE_PARAMS, created_at: `gte.${month30}`, select: 'revenue_cents' }),
    supabaseQuery('custom_events', { ...BASE_PARAMS, select: 'product_name,revenue_cents,created_at', order: 'created_at.desc', limit: '10' }),
  ]);

  function aggregate(res: PromiseSettledResult<SaleRow[]>) {
    if (res.status !== 'fulfilled') return { count: 0, revenue_cents: 0 };
    return {
      count: res.value.length,
      revenue_cents: res.value.reduce((sum, r) => sum + (r.revenue_cents || 0), 0),
    };
  }

  return {
    today: aggregate(todayRows),
    last7d: aggregate(week7Rows),
    last30d: aggregate(month30Rows),
    recentSales: recentRows.status === 'fulfilled'
      ? recentRows.value.map((r) => ({
          product_name: r.product_name || 'Unknown Product',
          revenue_cents: r.revenue_cents || 0,
          created_at: r.created_at,
        }))
      : [],
  };
}

async function fetchAnalytics() {
  if (cache && cache.expiresAt > Date.now()) {
    return cache.data;
  }

  const today = getDateString(0);
  const weekAgo = getDateString(7);
  const monthAgo = getDateString(30);

  const [convexResult, salesResult, utmResult] = await Promise.allSettled([
    Promise.all([
      queryConvex('stats:getLiveCount', { siteId: CLEARLYTICS_SITE_ID }),
      queryConvex('stats:getStatsBySiteId', { siteId: CLEARLYTICS_SITE_ID, startDate: today, endDate: today }),
      queryConvex('stats:getStatsBySiteId', { siteId: CLEARLYTICS_SITE_ID, startDate: weekAgo, endDate: today }),
      queryConvex('stats:getStatsBySiteId', { siteId: CLEARLYTICS_SITE_ID, startDate: monthAgo, endDate: today }),
    ]),
    fetchSalesData(),
    fetchTopUtmSources(CLEARLYTICS_SITE_ID),
  ]);

  const sales = salesResult.status === 'fulfilled' ? salesResult.value : {
    today: { count: 0, revenue_cents: 0 },
    last7d: { count: 0, revenue_cents: 0 },
    last30d: { count: 0, revenue_cents: 0 },
    recentSales: [],
  };

  const topUtmSources = utmResult.status === 'fulfilled' ? utmResult.value : [];

  let analyticsData: Record<string, unknown>;
  if (convexResult.status === 'fulfilled') {
    const [liveCount, todayStats, weekStats, monthStats] = convexResult.value;
    analyticsData = {
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
      topPages: (monthStats?.topPages ?? []).map((p: { pathname: string; views: number }) => ({
        pathname: p.pathname,
        views: p.views,
      })),
      topReferrers: (monthStats?.topReferrers ?? []).map((r: { hostname: string; count: number }) => ({
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
  } else {
    console.error('[clearlytics-dashboard] Convex error:', (convexResult as PromiseRejectedResult).reason?.message || 'Unknown');
    analyticsData = {
      uniqueVisitors: { today: 0, last7d: 0, last30d: 0 },
      pageViews: { today: 0, last7d: 0, last30d: 0 },
      topPages: [],
      topReferrers: [],
      activeVisitors: 0,
      activePaths: [],
      devices: { mobile: 0, tablet: 0, desktop: 0 },
      lastUpdated: new Date().toISOString(),
      status: 'error',
      error: (convexResult as PromiseRejectedResult).reason?.message || 'Connection failed',
    };
  }

  const result = { ...analyticsData, sales, topUtmSources };
  cache = { data: result, expiresAt: Date.now() + CACHE_TTL_MS };
  return result;
}

export async function GET() {
  const data = await fetchAnalytics();
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'private, max-age=300',
    },
  });
}
