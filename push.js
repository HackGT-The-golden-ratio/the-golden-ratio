function pushNot() {
    const push = require('web-push')

    let vapidKeys = {
        publicKey: 'BLcRzm0Z2FDmsCUX2H_rCo2B2bT9urwLaTcIRFimO3JvuKSn7GEOq-M6IUHv9H7CD-ErH6HH3y89Un0KV-CzV_w',
        privateKey: 'yrYizttKpc5-cBnjdlsod8fZjBDSiy-FK_L3xqx-_64'
    };

    push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

    let sub={endpoint:"https://fcm.googleapis.com/fcm/send/eqpcNJEyUvs:APA91bG_ktalnDDWbCk0TSJRaap308BGP72QvgbdAslS2AgUbn0JcE1OYWDftjoU_Kib7zTxT_N8hpWEGY8yCMfpYzrL8iSH2pwVxy6RAxojTBPTMgXGNbOY2qqkKEGYuTqzCusuypCy", 
        expirationTimem: null, 
        keys :{
            p256dh:"BNi3YfHp7L9epncKdlbKiGRWyuTYxKB4wQD2PvXtYYOTPnReAfoYBe_aRXJlYKiqpkLMMWcqAwFLczHsS40tNPo",
            auth:"5nrudkPjH_8IrGsEz1WZnw"
        }
    };

    push.sendNotification(sub, 'testmessage');
}


