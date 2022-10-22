self.addEventListener('push', function(event) {
    const analyticsPromise = pushReceivedTracking();
    const pushInfoPromise = fetch('/api/get-more-data')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const title = 'John says...';
        const message = 'Hi';

        return self.registration.showNotification(title, {
        body: message
        });
    });

    const promiseChain = Promise.all([
    analyticsPromise,
    pushInfoPromise
    ]);

    event.waitUntil(promiseChain);
});