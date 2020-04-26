'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "53feb07d5426c7e0788b32d319c50511",
"assets/assets/day.png": "9f36c150e5b0297e20411999d5e27627",
"assets/assets/egypt.png": "a099e084c6fcccfa4032d58d17d63f27",
"assets/assets/germany.png": "d3b68fc65e16a603702c8324f6196a7f",
"assets/assets/greece.png": "d8c44c47741e348927cec7e3d64a22ca",
"assets/assets/indonesia.png": "cb1239cc98b52f637175e17547c4c520",
"assets/assets/kenya.png": "ec31c84f040e6a6a712081c3e38df4ac",
"assets/assets/night.png": "f48bb8c2e3dc7a7544755506efb889b0",
"assets/assets/south_korea.png": "02ed96f645c463627f9bdfe1943adbba",
"assets/assets/uk.png": "e316c8551496904bf2da00f0b4178da3",
"assets/assets/usa.png": "16ebcdfdfefbbecc4bada8f40f19f99f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "94e3635829b162b82b0cea71ec554134",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "31140c74309edd3f2b0d422b3015d731",
"/": "31140c74309edd3f2b0d422b3015d731",
"main.dart.js": "6c46354899028d38ce3afa02e16f9a48",
"manifest.json": "027a8d408c66efa09a464e057bf66fce"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
