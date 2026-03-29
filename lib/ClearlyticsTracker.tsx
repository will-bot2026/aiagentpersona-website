'use client';

/**
 * ClearlyticsTracker
 * Sends page_view events to /api/clearlytics-proxy on every navigation.
 * Zero-PII: Only sends pathname, referrer hostname, timestamp, viewport width.
 */

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

function generateSessionHash(): string {
  // Create a temporary session hash from viewport + timestamp (no PII stored)
  const seed = `${Date.now()}-${typeof window !== 'undefined' ? window.innerWidth : 1280}-${Math.random()}`;
  // Simple hash
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

// Session hash — ephemeral, not stored
let _sessionHash: string | null = null;
function getSessionHash(): string {
  if (!_sessionHash) {
    _sessionHash = generateSessionHash();
  }
  return _sessionHash;
}

export function ClearlyticsTracker() {
  const pathname = usePathname();

  const sendPageView = useCallback(async (path: string) => {
    try {
      const referrerHostname =
        typeof document !== 'undefined' && document.referrer
          ? new URL(document.referrer).hostname
          : '';

      // Read UTM params from the current URL's query string
      let utmSource: string | null = null;
      let utmMedium: string | null = null;
      let utmCampaign: string | null = null;
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        utmSource = params.get('utm_source');
        utmMedium = params.get('utm_medium');
        utmCampaign = params.get('utm_campaign');
      }

      const payload: Record<string, unknown> = {
        pathname: path,
        referrerHostname,
        timestamp: Date.now(),
        viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 1280,
        tempSessionHash: getSessionHash(),
      };

      // Only include UTM fields if present (collect route uses ALLOWED_FIELDS check)
      if (utmSource) payload.utmSource = utmSource;
      if (utmMedium) payload.utmMedium = utmMedium;
      if (utmCampaign) payload.utmCampaign = utmCampaign;

      await fetch('/api/clearlytics-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        // Use keepalive for reliability on page unload
        keepalive: true,
      });
    } catch {
      // Silently fail — tracking should never break the page
    }
  }, []);

  useEffect(() => {
    sendPageView(pathname);
  }, [pathname, sendPageView]);

  return null; // No UI
}
