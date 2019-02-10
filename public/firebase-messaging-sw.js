importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");
firebase.initializeApp({
  messagingSenderId: "353210577440"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  const title = payload.notification.title;
  console.log("payload", payload.notification.icon);
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  return self.registration.showNotification(title, options);
});
/* messaging.usePublicVapidKey(
  "BL3wZKQsMk-QF_Un1961mOdRb0EZNicCKWGTOljxhTEKBIGzMz3psPnyeGPC-T347quNmUEPGRxF7eZ9iL_F_XA"
);
 */
