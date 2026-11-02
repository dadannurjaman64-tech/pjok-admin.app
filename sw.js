const CACHE_NAME = 'sd-admin-v1.0.0';
const STATIC_ASSETS = [
  './', './index.html', './login.html', './dashboard.html', './students.html',
  './classes.html', './attendance.html', './grades.html', './modules.html',
  './cp_tp_atp.html', './prota_promes.html', './google_sheets.html', './reports.html',
  './test_runner.html', './css/design-system.css', './css/layout.css', './css/components.css',
  './js/config.js', './js/auth.js', './js/dashboard.js', './js/students.js',
  './js/classes.js', './js/attendance.js', './js/grades.js', './js/modules.js',
  './js/cp_tp_atp.js', './js/prota_promes.js', './js/google_sync.js', './js/reports.js', './js/test_suite.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).then(res => {
      if (res && res.status === 200) {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
      }
      return res;
    }).catch(() => caches.match(event.request))
  );
});