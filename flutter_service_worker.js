'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "%20cors.json": "718445b0bc62210b2f3494b7ad4459fb",
"assets/AssetManifest.json": "1fdf54859e1eb8e3d2ee1ec6e647ad69",
"assets/assets/fonts/Manrope/Manrope-VariableFont_wght.ttf": "29b7f4fc75797a82d890da507b02ae92",
"assets/assets/fonts/Manrope/OFL.txt": "20ed27f4304142d166ffec29fc8d44ee",
"assets/assets/fonts/Manrope/README.txt": "b3c645a9ae3d1b2dffc08deaf009ad3b",
"assets/assets/fonts/Manrope/static/Manrope-Bold.ttf": "cb17fa4a508de3daf0d9ea64a0ab724e",
"assets/assets/fonts/Manrope/static/Manrope-ExtraBold.ttf": "ff3defe710a0202082b8fd2227c66dad",
"assets/assets/fonts/Manrope/static/Manrope-ExtraLight.ttf": "ac1f9121d9c60af8f12abace6296bb5d",
"assets/assets/fonts/Manrope/static/Manrope-Light.ttf": "a115fc6209a11c4e1d4344557ae25433",
"assets/assets/fonts/Manrope/static/Manrope-Medium.ttf": "39d3c7a46503479402db5fdd131016cd",
"assets/assets/fonts/Manrope/static/Manrope-Regular.ttf": "e506b64ab60eae396e058916603b61cf",
"assets/assets/fonts/Manrope/static/Manrope-SemiBold.ttf": "9e7aaa1e74322a45c153c790fdbacf90",
"assets/assets/png/current_project_1.png": "b81bb1a51cc964f508c03a1478d2af95",
"assets/assets/png/current_project_2.png": "bb0e55d50a04c6b45a9c318a97cb7bd1",
"assets/assets/png/current_project_3.png": "0e8d8c7e64886d5958f172b39f0c3325",
"assets/assets/svg/about_us.svg": "1cddd70c52f90964db2b4e3d4cabea62",
"assets/assets/svg/drawer.svg": "51e14f13ad55d40e88c921a1db405526",
"assets/assets/svg/frame1.svg": "a17c6c7565994c0fe11294a1ba063be7",
"assets/assets/svg/logo.svg": "7f10d4fc2d487d0ce27b45f1f4fe7dfe",
"assets/assets/svg/logo_footer.svg": "b8a994e9b4f00d7b2992001ca9a682a8",
"assets/assets/svg/logo_large.svg": "2162a8425fdc23babc94fc759d363911",
"assets/assets/svg/microsoft.svg": "a0a6484f3f0b5211aba328fcda259e6a",
"assets/assets/svg/our_interest_1.svg": "67cbae937c16219ec7fa923e780f4cf8",
"assets/assets/svg/our_interest_2.svg": "b19d254c916097ca624ced14706a7cc2",
"assets/assets/svg/our_interest_3.svg": "84b3fa11aaee11a81afeb335a6454a0d",
"assets/assets/svg/our_values.svg": "c8d8f4b59d723d3bbfb9e401c61183ff",
"assets/assets/svg/partners/amazon.svg": "106975d56d45997e9d3bdf754d47e2b6",
"assets/assets/svg/partners/slack.svg": "6b4398232e3561f5a08dc755a79f8954",
"assets/assets/svg/partners/woocommerce_logo.svg": "baa21518505d26903fe8308ecde30f05",
"assets/assets/svg/people1.svg": "516c467ca6e564fd67e48ef04f97e529",
"assets/assets/svg/social/facebook.svg": "bd58b7131f99191b3f97beb7e5efeb6f",
"assets/assets/svg/social/github.svg": "1f4580718606949311f8f0b37bae9877",
"assets/assets/svg/social/linkedin.svg": "4e905ab8e7c1b60337bc445c5244c0cc",
"assets/assets/svg/social/twitch.svg": "f4163f188426f84cd7cf538e2fecc9e9",
"assets/FontManifest.json": "51894df6fa1571ee7c522879a9666e8f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "68eb93c25d40fd2650191ead22e8aa53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "78b168f889cbb863311c733deff1c264",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "d6da33ae2c3d445e7155deaebbb40c94",
"icons/Icon-512.png": "ea66f0a157e559ea3c00682f7f4e2137",
"icons/Icon-maskable-192.png": "d6da33ae2c3d445e7155deaebbb40c94",
"icons/Icon-maskable-512.png": "ea66f0a157e559ea3c00682f7f4e2137",
"index.html": "12115bc154d1fe9e1883ca6d2e08329b",
"/": "12115bc154d1fe9e1883ca6d2e08329b",
"main.dart.js": "046731e77c78259acaa596114f2dd9a8",
"manifest.json": "4be7642e613bc339bbbf0ecd0e4fedb1",
"version.json": "7c70879fcb57017b5ea685c3d0fb693e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
