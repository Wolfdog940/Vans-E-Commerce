/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

// Precarga todos los archivos que se encuentran en el manifiesto de precache.
precacheAndRoute(self.__WB_MANIFEST);

// Elimina cachés obsoletas.
cleanupOutdatedCaches();

// Cachea las solicitudes a archivos que no estén en el precache.
registerRoute(
  ({ request }) => request.destination === 'document' || request.destination === 'script' || request.destination === 'style' || request.destination === 'image' || request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: 'my-cache',
  })
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});