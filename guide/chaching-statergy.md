# Caching Strategy

- StaleWhileRevalidate
- cache first
- network first
- network only
-  cache only


## StaleWhileRevalidate
The stale-while-revalidate pattern allows you to respond to the request as quickly as possible with a cached response if available, falling back to the network request if it’s not cached. The network request is then used to update the cache.

:::tip
This is a fairly common strategy where having the most up-to-date resource is not vital to the application.
:::

```js
workbox.routing.registerRoute(
  new RegExp('/images/avatars/'),
  new workbox.strategies.StaleWhileRevalidate()
);
```

## Catch First
Offline web apps will rely heavily on the cache, but for assets that are non-critical and can be gradually cached, a cache first is the best option.

If there is a Response in the cache, the Request will be fulfilled using the cached response and the network will not be used at all. If there isn't a cached response, the Request will be fulfilled by a network request and the response will be cached so that the next request is served directly from the cache.

```js
workbox.routing.registerRoute(
  new RegExp('/styles/'),
  new workbox.strategies.CacheFirst()
);
```

## Network First
For requests that are updating frequently, the network first strategy is the ideal solution. By default, it will try to fetch the latest response from the network. If the request is successful, it’ll put the response in the cache. If the network fails to return a response, the cached response will be used.

```js
workbox.routing.registerRoute(
  new RegExp('/social-timeline/'),
  new workbox.strategies.NetworkFirst()
);
```

## Network Only
If you require specific requests to be fulfilled from the network, the network only is the strategy to use.

```js
workbox.routing.registerRoute(
  new RegExp('/admin/'),
  new workbox.strategies.NetworkOnly()
);
```
## Cache Only
The cache only strategy ensures that responses are obtained from a cache. This is less common in workbox, but can be useful if you have your own precaching step.

```js
workbox.routing.registerRoute(
  new RegExp('/app/v2/'),
  new workbox.strategies.CacheOnly()
);
```


