/**
 * /api/clearlytics-proxy
 * Proxies page view events to the Clearlytics backend.
 * This keeps the Clearlytics collect endpoint on a first-party domain,
 * reducing adblocker interference.
 */

import { NextRequest, NextResponse } from 'next/server';

const CLEARLYTICS_COLLECT_URL =
  process.env.CLEARLYTICS_COLLECT_URL ||
  'https://clearlytics-sigma.vercel.app/api/collect';

const CLEARLYTICS_SITE_ID =
  process.env.CLEARLYTICS_SITE_ID || 'aiagentpersona-com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Build the payload for Clearlytics (zero-PII format)
    const payload = {
      siteId: CLEARLYTICS_SITE_ID,
      pathname: body.pathname || '/',
      referrerHostname: body.referrerHostname || '',
      timestamp: body.timestamp || Date.now(),
      viewportWidth: body.viewportWidth || 1280,
      tempSessionHash: body.tempSessionHash || '',
    };

    const res = await fetch(CLEARLYTICS_COLLECT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { ok: false, error: text },
        { status: res.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[clearlytics-proxy] Error:', error instanceof Error ? error.message : 'Unknown');
    return NextResponse.json({ ok: false, error: 'Internal error' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
