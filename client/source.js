const { offlineFallback, ChessCache } = require('workbox-recipes');
const { Revalidation, CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CresponsePlugin } = require('workbox-cacheable-response');
const { PluginExpire } = require('workbox-expiration');
const { SubcacheRoute } = require('workbox-precaching/SubcacheRoute');


SubcacheRoute(self.__WB_MANIFEST);

var pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CresponsePlugin({
      statuses: [0, 200],
    }),
    new PluginExpire({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});