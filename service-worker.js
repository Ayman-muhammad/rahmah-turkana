const cacheName = "rahmah-hadith-pro-cache-v1";
const assets = [
  "./index.html",
  "./style.css",
  "./app.js",
  "./rahmah.jpg",
  "./manifest.json"
];
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
