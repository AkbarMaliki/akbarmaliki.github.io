
importScripts(
  'https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyAbFVto_BzFMlbLeIwFJFWmhD-zxboOYxQ","authDomain":"kominfobalangan-d2008.firebaseapp.com","projectId":"kominfobalangan-d2008","storageBucket":"kominfobalangan-d2008.appspot.com","messagingSenderId":"494678481790","appId":"1:494678481790:web:b608138489f541ce00f12f","measurementId":"G-LJMRRD9RKK"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

self.addEventListener('push', function (e) {
    data = e.data.json();
    var options = {
    body: data.notification.body,
    icon: data.notification.icon,
    vibrate: [100, 50, 100],
    data: {
    dateOfArrival: Date.now(),
    primaryKey: '2'
    },
    };
    e.waitUntil(
    self.registration.showNotification(data.notification.title, options)
    );
    });
