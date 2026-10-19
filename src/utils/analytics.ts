import { Language, AggregateAnalyticsSummary, AnalyticsPingPayload } from '../types';

interface AnalyticsData {
  totalViews: number;
  byLang: Record<Language, number>;
  byPath: Record<string, number>;
  events: Record<string, number>;
  firstVisit: string;
  lastVisit: string;
}

const STORAGE_KEY = 'psychedu_analytics_v1';

function getStoredData(): AnalyticsData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {
    // ignore
  }

  return {
    totalViews: 0,
    byLang: { en: 0, hi: 0, gu: 0 },
    byPath: {},
    events: {},
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
  };
}

function saveData(data: AnalyticsData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

function getSanitizedReferrer(): string {
  if (typeof document === 'undefined') return 'Direct / QR Poster';
  const ref = document.referrer;
  if (!ref) {
    // Check if arrived with QR / source campaign param
    const search = window.location.search;
    if (search.includes('source=qr') || search.includes('qr=1') || search.includes('utm_source=qr')) {
      return 'QR Poster Scan';
    }
    return 'Direct / QR Poster';
  }
  try {
    const url = new URL(ref);
    if (url.hostname === window.location.hostname) {
      return 'Internal Navigation';
    }
    return url.hostname.replace(/^www\./, '');
  } catch {
    return 'Direct / QR Poster';
  }
}

function sendServerPing(payload: AnalyticsPingPayload) {
  if (typeof window === 'undefined') return;
  if (navigator.doNotTrack === '1') return;

  const dataStr = JSON.stringify(payload);

  // Try sendBeacon first for non-blocking telemetry
  if (navigator.sendBeacon) {
    const blob = new Blob([dataStr], { type: 'application/json' });
    const success = navigator.sendBeacon('/api/analytics/ping', blob);
    if (success) return;
  }

  // Fallback to fetch with keepalive
  try {
    fetch('/api/analytics/ping', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: dataStr,
      keepalive: true,
    }).catch(() => {
      // ignore network errors silently
    });
  } catch {
    // ignore
  }
}

export function recordPageView(path: string, lang: Language) {
  if (typeof window === 'undefined') return;
  if (navigator.doNotTrack === '1') return;

  const normalizedPath = path.replace(/^\/+|\/+$/g, '') || 'home';

  // 1. Local mirror
  const data = getStoredData();
  data.totalViews += 1;
  data.byLang[lang] = (data.byLang[lang] || 0) + 1;
  data.byPath[normalizedPath] = (data.byPath[normalizedPath] || 0) + 1;
  data.lastVisit = new Date().toISOString();
  saveData(data);

  // 2. Server anonymous aggregate ping
  const referrer = getSanitizedReferrer();
  if (referrer !== 'Internal Navigation') {
    sendServerPing({
      path: normalizedPath,
      lang,
      referrerDomain: referrer,
      deviceType: getDeviceType(),
      eventType: 'page_view',
      timestamp: Date.now(),
    });
  }
}

export function recordEvent(
  category: string,
  action: string,
  label?: string,
  lang: Language = 'en'
) {
  if (typeof window === 'undefined') return;
  if (navigator.doNotTrack === '1') return;

  const data = getStoredData();
  const eventKey = label ? `${category}:${action}:${label}` : `${category}:${action}`;
  data.events[eventKey] = (data.events[eventKey] || 0) + 1;
  saveData(data);

  // Map to server event types if applicable
  let eventType: AnalyticsPingPayload['eventType'] = undefined;
  if (category === 'screener') eventType = 'screener_completed';
  else if (category === 'myth' || (category === 'share_card' && label?.startsWith('myth'))) eventType = 'myth_card_shared';
  else if (category === 'share_card') eventType = 'card_shared';
  else if (category === 'qr') eventType = 'qr_landed';
  else if (category === 'pwa') eventType = 'pwa_installed';
  else if (category === 'audio') eventType = 'read_aloud';

  if (eventType) {
    sendServerPing({
      path: window.location.pathname,
      lang,
      referrerDomain: getSanitizedReferrer(),
      deviceType: getDeviceType(),
      eventType,
      eventName: eventKey,
      timestamp: Date.now(),
    });
  }
}

export async function fetchAggregateAnalytics(password: string): Promise<AggregateAnalyticsSummary> {
  try {
    const res = await fetch('/api/analytics/summary', {
      headers: {
        Authorization: `Bearer ${password}`,
      },
    });

    if (res.ok) {
      return await res.json();
    }
    if (res.status === 401) {
      throw new Error('Invalid admin password');
    }
  } catch (err: any) {
    if (err.message === 'Invalid admin password') throw err;
  }

  // Fallback to local storage aggregation if server is unreachable
  const local = getStoredData();
  const topPages = Object.entries(local.byPath)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const total = local.totalViews || 1;
  return {
    totalViews: local.totalViews,
    byLang: local.byLang,
    topPages,
    topReferrers: [{ domain: 'Direct / Local Browser', count: local.totalViews }],
    deviceBreakdown: {
      mobile: Math.round(total * 0.7),
      desktop: Math.round(total * 0.25),
      tablet: Math.round(total * 0.05),
    },
    events: {
      screenerCompleted: local.events['screener:completed'] || 0,
      mythCardShared: local.events['share_card:share:myth'] || local.events['myth:share'] || 0,
      cardShared: local.events['share_card:share'] || 0,
      qrLanded: local.events['qr:scan'] || 0,
      pwaInstalled: local.events['pwa:install'] || 0,
      readAloud: local.events['audio:play'] || 0,
    },
    dailyTrend: [
      {
        date: new Date().toISOString().split('T')[0],
        views: local.totalViews,
        events: Object.values(local.events).reduce((a, b) => a + b, 0),
      },
    ],
    lastUpdated: local.lastVisit,
  };
}

export function getLocalAnalyticsSummary(): AnalyticsData {
  return getStoredData();
}

export function clearLocalAnalytics() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
