# Precaching

The order in which you call workbox.precaching.precacheAndRoute() or workbox.precaching.addRoute() is important. You would normally want to call it early on in your service worker file, before registering any additional routes with workbox.routing.registerRoute(). If you did call workbox.routing.registerRoute() first, and that route matched an incoming request, whatever strategy you defined in that additional route will be used to respond, instead of the cache-first strategy used by workbox-precaching.



```js
workbox.precaching.precacheAndRoute([
  '/styles/example.ac29.css',
  { url: '/index.html', revision: 'abcd1234' },
  // ... other entries ...
]);
```

