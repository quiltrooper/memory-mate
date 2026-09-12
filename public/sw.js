// Replaced with the emitted HTML/CSS/JS asset list during production builds.
const PRECACHE = ['/', '/index.html', '/manifest.webmanifest', '/memory-mate.svg'];
const CACHE_NAME = 'memory-mate-build';
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('memory-mate-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => response.ok ? response : caches.match('/index.html').then(cached => cached || response)).catch(() => caches.match('/index.html')));
    return;
  }
  // Only application assets belong in Cache Storage, never records or API replies.
  if (!PRECACHE.includes(url.pathname)) return;
  event.respondWith(caches.match(url.pathname).then(cached => cached || fetch(request)));
});
