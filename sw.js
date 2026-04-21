const CACHE_NAME = 'kids-studio-v1';
const FILES = ['./','./index.html','./manifest.json','./icon-192.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(c=>
      c||fetch(e.request).catch(()=>caches.match('./index.html'))
    )
  );
});

