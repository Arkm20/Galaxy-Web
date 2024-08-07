importScripts("/contact/mathematics.js");
importScripts("/contact/geography.js");
importScripts("/contact/english.js");

const sw = new UVServiceWorker();
const userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
