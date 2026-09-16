const CACHE='memory-mate-flutter-parity-v2';
const SHELL=['./','index.html','main.dart.js','flutter.js','flutter_bootstrap.js','parity_bridge.js','speech.js','demo-memories/tea-walk.png','demo-memories/bihu-courtyard.png','demo-memories/river-ferry.png','demo-memories/golden-loom.png','demo-memories/kitchen-sweets.png','demo-memories/mountain-courtyard.png','manifest.json','memory-mate.svg','assets/AssetManifest.bin','assets/FontManifest.json','assets/fonts/MaterialIcons-Regular.otf','canvaskit/canvaskit.js','canvaskit/canvaskit.wasm','canvaskit/chromium/canvaskit.js','canvaskit/chromium/canvaskit.wasm'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url);
 if(req.method!=='GET'||url.pathname.startsWith('/api/'))return;
 if(url.origin!==self.location.origin&&!['fonts.gstatic.com'].includes(url.hostname))return;
 event.respondWith(fetch(req).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)));}return response;}).catch(async()=>{
  const cached=await caches.match(req);if(cached)return cached;
  if(req.mode==='navigate')return await caches.match('index.html');
  return Response.error();
 }));
});
