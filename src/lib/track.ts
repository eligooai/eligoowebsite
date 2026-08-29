// Lightweight first-party analytics — one beacon per page view to our own API.
function id(key: string, store: Storage) {
  let v = store.getItem(key);
  if (!v) { v = Math.random().toString(36).slice(2) + Date.now().toString(36); store.setItem(key, v); }
  return v;
}
export function trackPageView(path: string) {
  try {
    const body = JSON.stringify({
      visitorId: id('elg_vid', localStorage),
      sessionId: id('elg_sid', sessionStorage),
      path,
      referrer: document.referrer,
      screenW: window.screen.width,
    });
    if (navigator.sendBeacon) navigator.sendBeacon('/eapi/track', new Blob([body], { type: 'application/json' }));
    else fetch('/eapi/track', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true });
  } catch { /* never break the site */ }
}
