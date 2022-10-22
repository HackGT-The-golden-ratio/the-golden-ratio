var push = require('web-push')

let vapidKeys = {
    publicKey: 'BLcRzm0Z2FDmsCUX2H_rCo2B2bT9urwLaTcIRFimO3JvuKSn7GEOq-M6IUHv9H7CD-ErH6HH3y89Un0KV-CzV_w',
    privateKey: 'yrYizttKpc5-cBnjdlsod8fZjBDSiy-FK_L3xqx-_64'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub={
    endpoint:"https://fcm.googleapis.com/fcm/send/cb4sMTBonFU:APA91bFGhIHo_cCQY2yHzt8GxqDWY785TXQewkp3kFhCCXKA_0oNqpzQ7TaJp7Nwy66LsWSRvQj4ISLurBzGrwg2vpw1sMhjsCl9R4p4SwGrIiw_Gj4bS8DoXNEqii16N4O7kEPVM-eL",
    expirationTime:null,
    keys:{
        p256dh:"BE3QyXP3UvFHEYDdabdbqmdCito8C2yf0NmauS-XG8qORgInrpN1_rJ6dh1xrfNSEt8HRmpea2ssthaePhbwgN8",
        auth:"iZ3SJ0i0cpFuQ-c_PsWnDw"
    }
};

push.sendNotification(sub, 'testmessage')