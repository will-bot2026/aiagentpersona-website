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

      await fetch('/api/clearlytics-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pathname: path,
          referrerHostname,
          timestamp: Date.now(),
          viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 1280,
          tempSessionHash: getSessionHash(),
        }),
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
