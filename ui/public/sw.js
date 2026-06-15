// MEOK OS v3 PWA Service Worker
// Offline-capable. Cache-first for static assets, network-first for /mcp.
const CACHE = 'meok-os-v3-1.0.0';
const ASSETS = [
  '/meok-os-v3/',
  '/meok-os-v3/index.html',
  '/meok-os-v3/unified-v3.html',
  '/meok-os-v3/dome-v3-ogw.html',
  '/meok-os-v3/bft-audit-log-v3.html',
  '/meok-os-v3/sigil-chain-live-v3.html',
  '/meok-os-v3/by-numbers-v3.html',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CACHE).map(k => caches.delete(k))
  )));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Network-first for /mcp API
  if (url.pathname.startsWith('/mcp') || url.pathname.startsWith('/health')) {
    e.respondWith(fetch(e.request).catch(() => new Response(JSON.stringify({offline: true}), {headers: {'Content-Type': 'application/json'}})));
    return;
  }
  // Cache-first for static assets
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(r => {
      if (r.ok) {
        const clone = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return r;
    }).catch(() => cached))
  );
});
