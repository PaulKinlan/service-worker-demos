console.log("I am a Service Worker");
this.version = 1;
 
this.addEventListener('install', function(e) {
 console.log("I am a Service Worker I have been installed");
});
 
this.addEventListener('activate', function(e) {
 console.log("I am a Service Worker I have been activated");
});

this.addEventListener('fetch', function(e) {
  console.log(e.request.url);
});
