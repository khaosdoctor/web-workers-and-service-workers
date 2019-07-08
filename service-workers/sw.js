const CACHE_NAME = 'picture-cache'

self.addEventListener('install', function (event) {
  // event.waitUntil takes a promise to know how
  // long the installation takes, and whether it
  // succeeded or not.
  event.waitUntil(precache().then(() => self.skipWaiting()))
})

// Precaches the root adding it to matches
async function precache () {
  const cache = await caches.open(CACHE_NAME)
  return cache.addAll([
    './',
    '/index.html'
  ])
}

// Fetch event is fired at every single request
self.addEventListener('fetch', (event) => {
  console.log('Asset being served from sw')
  event.respondWith(checkCacheOrNetwork(event.request))
})

async function checkCacheOrNetwork (request) {
  const cache = await caches.open(CACHE_NAME) // Open the cache
  const match = await cache.match(request) // Searches for match
  if (match) { // If there's a match, return the match response
    console.log('Returning match')
    return match // No fetching needed, everything is from the local website
  }
  return update(request)
}

async function update (request) { // Fetches the resource and updates the cache
  console.log('Did not found match, fetching...')
  const cache = await caches.open(CACHE_NAME) // Open cache again
  const cloned = request.clone() // Clones the request, since it can only be consumed once, and we're consuming it on the fetch event
  const response = await fetch(cloned) // Fetches the resource
  console.log('Fetched', response.clone())
  cache.put(request, response.clone()) // Adds the cloned response, since it can only be consumed once, to the cache
  return response // returns the original response
}

