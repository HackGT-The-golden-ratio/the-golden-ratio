self.addEventListener('push', function(event) {
    var options = {
        body: 'You have been slouching for a while. Time to correct your posture.',
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
    event.waitUntil(self.registration.showNotification('Sit up straight!', options));
});