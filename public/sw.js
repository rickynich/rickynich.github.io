// Retires the service worker the old Gatsby site (gatsby-plugin-offline) installed at /sw.js.
//
// Browsers that visited the old site keep that worker, and it serves the old cached page, whose scripts,
// styles and images no longer exist, so the site looks broken. Browsers check this URL for updates, find
// this file, and install it in place of the old worker. It then deletes the old caches, unregisters itself
// and reloads any open tabs, which then load the current site straight from the network.
//
// Keep this file for as long as old visitors might come back. It does nothing for anyone else: the current
// site never registers a service worker.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const windows = await self.clients.matchAll({ type: "window" });
      await Promise.all(windows.map((client) => client.navigate(client.url).catch(() => undefined)));
    })(),
  );
});
