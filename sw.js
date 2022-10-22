self.addEventListener('push', function(event) {
    var options = {
        body: 'This notification was generated from a push!',
        vibrate: [100, 50, 100],
        data: {
            dataOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'explore this new world'
            },
            {
                action: 'close', title: 'Close'
            }
        ]
    };
    event.waitUntil(self.registration.showNotification('Hello world!', options));
});