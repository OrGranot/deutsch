self.addEventListener("push", e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "Lehrer", { body: d.body || "Zeit für Deutsch!", icon: "icon-512.png", badge: "icon-512.png", tag: "erinnerung", data: { url: d.url || "./" } }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(ws => ws.length ? ws[0].focus() : clients.openWindow(e.notification.data.url)));
});
