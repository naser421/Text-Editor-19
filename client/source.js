const { offlineFallback, ChessCache } = require('workbox-recipes');
const { Revalidation, CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CresponsePlugin } = require('workbox-cacheable-response');
const { PluginExpire } = require('workbox-expiration');
const { SubcacheRoute } = require('workbox-precaching/SubcacheRoute');