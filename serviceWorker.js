const staticApp = "floriaaan-app";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/responsive.css",
  "/js/main.js",
  "/js/uses.js",
  "/lib/jquery/jquery.min.js",
  "/lib/jquery/jquery-migrate.min.js",
  "/lib/typed/typed.js",
  "/images/home-bg.jpg",
  "/images/logo.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticApp).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
