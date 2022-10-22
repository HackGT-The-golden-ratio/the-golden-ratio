var push = require('web-push')

let vapidKeys = {
    publicKey: 'BLcRzm0Z2FDmsCUX2H_rCo2B2bT9urwLaTcIRFimO3JvuKSn7GEOq-M6IUHv9H7CD-ErH6HH3y89Un0KV-CzV_w',
    privateKey: 'yrYizttKpc5-cBnjdlsod8fZjBDSiy-FK_L3xqx-_64'
  }

push.setVapidDetails('mailto:test#code.co.uk', vapidKeys.publicKey, vapidkeys.privateKey)

push.sendNotification(sub, 'testmessage')