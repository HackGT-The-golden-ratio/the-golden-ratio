
    const push = require('web-push')

    let vapidKeys = {
        publicKey: 'BLcRzm0Z2FDmsCUX2H_rCo2B2bT9urwLaTcIRFimO3JvuKSn7GEOq-M6IUHv9H7CD-ErH6HH3y89Un0KV-CzV_w',
        privateKey: 'yrYizttKpc5-cBnjdlsod8fZjBDSiy-FK_L3xqx-_64'
    };

    push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

    let sub={endpoint:"https://fcm.googleapis.com/fcm/send/cxI1_hiKMJw:APA91bF8tM7AgW70TL19yD4DCCN8i4mw8Fg18PK8jdz4KBKAoAeLykYAwZ6HQLyzdV4OOz46ELom8d77S-mxlc9FNPuzTh1wA1ldUkoaHVv9z7PylTqfAfKs8xUxjL1RTNLX4YtDTrIj", 
        expirationTimem: null, 
        keys :{
            p256dh:"BOieGhRzqWOhCYJeWoPJBFsxdDG1Z0rUAY2lFvN3rO4lw-P7qEe9m2LghCQKeDwCA1JZs4rVUHPp4GvkeToCrFA",
            auth:"PNUDapHhohMUJqaXpCu32Q"
        }
    };

    push.sendNotification(sub, 'testmessage');


