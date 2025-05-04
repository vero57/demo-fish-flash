'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ed1c3d69ade515b0d66352bf940e7be2",
"assets/AssetManifest.bin.json": "7da7d5da009cbda40b121c9abaa6b90a",
"assets/AssetManifest.json": "e5ea17347adb5e82cde36edc8a663c8b",
"assets/assets/Benar.png": "24770833f42d223f92ed4a1ec09b1170",
"assets/assets/bg.png": "d1af2d71f809bb6937c3089d3cf2d903",
"assets/assets/fonts/Super%2520Bubble.ttf": "6fcd5d48348cbcb054aee0f4b05dd0ad",
"assets/assets/hewan/biru.png": "55261249e911c8900f8751975e81ee96",
"assets/assets/hewan/kuning.png": "aeeaa2bda4f6343bf1f19a354026ff99",
"assets/assets/hewan/penyu.png": "5d0a5d028344e10eb4b92c9229e76edd",
"assets/assets/hewan/udang.png": "b927a25eefc17c9ba65d97e54fc623c1",
"assets/assets/iconApk.png": "3a0a6f473f576e5ca51c49b47fbe4d9b",
"assets/assets/kembali.png": "cec8a5d0e1f596cf2caa7e049e2f8c83",
"assets/assets/main.png": "03ef8c8b3f389a30b6cc0cd02ee6d45b",
"assets/assets/mainlagi.png": "5e6580eaac76e45e363c4bd6f821b44f",
"assets/assets/mengingat.png": "ed042cceb0baa930aacb1a924cc2daed",
"assets/assets/mudah.png": "059a0293abff3609b9978afdb30be290",
"assets/assets/pertanyaan.png": "85c78dfa344ae5374c41c525247ac0fb",
"assets/assets/result/biruada.png": "ba96f1606c3272c2c6c92c3f533cebfb",
"assets/assets/result/kamumenjawab.png": "3b820ee4616735d50daa57762e7efd18",
"assets/assets/result/kuningada.png": "37be53952623e832eab2a63300d9368f",
"assets/assets/result/penyuada.png": "8282976911505bbdbd0dba861dea4686",
"assets/assets/result/udangjumlah.png": "5cc0dc4365419e0a31e8fec21a1c61b5",
"assets/assets/Salah.png": "9864d09943d64273f8327dc979c376df",
"assets/assets/sesipertanyaan.png": "809d10fdd38801ddeec862b0cd9245c7",
"assets/assets/soal/soalbiru.png": "76c6a83075cd76189ab2622d6b4790f3",
"assets/assets/soal/soalkuning.png": "de99780a49628a7220c433abd3b45e32",
"assets/assets/soal/soalpenyu.png": "33fb42b7aa32914c7a939d62a18c528a",
"assets/assets/soal/soaludang.png": "98bf7cf74c49adf956850392e7b0b33b",
"assets/assets/sulit.png": "3b929472f2223a2d83d2c63a9ff0dcc4",
"assets/FontManifest.json": "63a6ca1530148bb5a0b62bd310263aa2",
"assets/fonts/MaterialIcons-Regular.otf": "fd36a16819423120fc17ce4e8e081d88",
"assets/NOTICES": "a0f92901c532b3eb216d711039050997",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3bf267d35382626b84ac8de031f95063",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ba26babd236b34f958b49d25abb62e2",
"/": "9ba26babd236b34f958b49d25abb62e2",
"main.dart.js": "a5f4ec01f50437349643f8baabfb8ba6",
"manifest.json": "e9bf847da2803572dde1ac4bbad640e9",
"version.json": "9292ffee67775409116480c6bc299959"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
