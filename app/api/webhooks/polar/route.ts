// app/api/webhooks/polar/route.ts
// Receives Polar.sh webhook events and forwards sales to Clearlytics

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const POLAR_WEBHOOK_SECRET = process.env.POLAR_WEBHOOK_SECRET || '';
const CLEARLYTICS_COLLECT_URL = process.env.CLEARLYTICS_COLLECT_URL || 'https://clearlytics-sigma.vercel.app/api/collect';
const CLEARLYTICS_SITE_ID = process.env.CLEARLYTICS_SITE_ID || 'aiagentpersona-com';
const CLEARLYTICS_WEBHOOK_SECRET = process.env.CLEARLYTICS_WEBHOOK_SECRET || '';

export async function POST(request: NextRequest) {
  const body = await request.text();

  // Verify Polar webhook signature if secret is configured
  const signature = request.headers.get('webhook-signature') || request.headers.get('polar-signature') || '';
  if (POLAR_WEBHOOK_SECRET) {
    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
    }
    const expected = crypto
      .createHmac('sha256', POLAR_WEBHOOK_SECRET)
      .update(body)
      .digest('hex');
    
    // Use timing-safe comparison; normalize signature (may have prefix like "sha256=")
    const sigToCompare = signature.startsWith('sha256=') ? signature.slice(7) : signature;
    try {
      if (
        sigToCompare.length !== expected.length ||
        !crypto.timingSafeEqual(Buffer.from(sigToCompare, 'hex'), Buffer.from(expected, 'hex'))
      ) {
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
      }
    } catch {
      return NextResponse.json({ error: 'Invalid signature format' }, { status: 401 });
    }
  }

  let event: Record<string, unknown>;
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Only handle order.created events (confirmed purchases)
  const eventType = event.type as string;
  if (eventType !== 'order.created' && eventType !== 'checkout.order_created') {
    return NextResponse.json({ ok: true, skipped: true, eventType });
  }

  // Extract sale data from Polar event payload
  const data = (event.data || event) as Record<string, unknown>;
  const amount = (data.amount as number) || (data.total_amount as number) || 0;
  const productName = (
    ((data.product as Record<string, unknown>)?.name as string) ||
    ((data.items as Record<string, unknown>[])?.[0]?.name as string) ||
    'Unknown Product'
  );
  const currency = ((data.currency as string) || 'usd').toLowerCase();

  // Forward to Clearlytics as a custom event
  try {
    const collectResp = await fetch(CLEARLYTICS_COLLECT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        siteId: CLEARLYTICS_SITE_ID,
        type: 'event',
        eventName: 'sale',
        revenueCents: amount,
        currency,
        productName,
        secret: CLEARLYTICS_WEBHOOK_SECRET,
      }),
    });

    const collectBody = await collectResp.json().catch(() => ({}));

    if (!collectResp.ok) {
      console.error('[polar-webhook] Clearlytics collect failed:', collectResp.status, collectBody);
      // Don't fail the webhook — Polar will retry if we return non-2xx
      // But we should still return 200 to Polar if the event was valid
    }

    return NextResponse.json({
      ok: true,
      eventType,
      productName,
      amount,
      clearlytics: { status: collectResp.status, ok: collectResp.ok },
    });
  } catch (err) {
    console.error('[polar-webhook] Error forwarding to Clearlytics:', err instanceof Error ? err.message : 'Unknown');
    // Return 200 to Polar so it doesn't retry (the event was processed; Clearlytics is the issue)
    return NextResponse.json({ ok: true, warning: 'Clearlytics forwarding failed' });
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
