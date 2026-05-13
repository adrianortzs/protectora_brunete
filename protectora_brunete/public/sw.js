const CACHE_NAME = 'arat-adopta-v2'
const IMAGE_CACHE_NAME = 'arat-supabase-images-v1'
const APP_SHELL = ['/', '/index.html', '/manifest.webmanifest']

const PRESERVED_CACHE_NAMES = new Set([CACHE_NAME, IMAGE_CACHE_NAME])

async function supabaseImageCacheFirst(urlString, originalRequest) {
  const cache = await caches.open(IMAGE_CACHE_NAME)
  const cached = await cache.match(urlString)
  if (cached) return cached

  try {
    const response = await fetch(urlString, { mode: 'cors', credentials: 'omit' })
    if (response.ok && response.type === 'cors') {
      await cache.put(urlString, response.clone())
    }
    return response
  } catch {
    return fetch(originalRequest)
  }
}

function isSupabaseAnimalsPublicObject(url) {
  return (
    url.hostname.endsWith('.supabase.co') &&
    url.pathname.includes('/storage/v1/object/public/animals/')
  )
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => !PRESERVED_CACHE_NAMES.has(cacheName))
          .map((cacheName) => caches.delete(cacheName)),
      ),
    ),
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  if (request.method !== 'GET') return

  const url = new URL(request.url)

  if (isSupabaseAnimalsPublicObject(url)) {
    event.respondWith(supabaseImageCacheFirst(request.url, request))
    return
  }

  if (url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('/index.html')),
    )
    return
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const networkResponse = fetch(request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache))
          return response
        })
        .catch(() => cachedResponse)

      return cachedResponse || networkResponse
    }),
  )
})
