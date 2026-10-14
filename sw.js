const CACHE="aethel-premium-v7-cloud-accounts";const FILES=["./","./index.html","./app.js","./practice-bank.js","./calendar.html","./manifest.webmanifest","./icon.svg","./icon-192.png","./icon-512.png","./apple-touch-icon.png","./favicon-32.png","./icon-maskable-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(a=>Promise.all(a.filter(x=>x!==CACHE).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET"||new URL(e.request.url).pathname.endsWith("/api/session"))return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});
