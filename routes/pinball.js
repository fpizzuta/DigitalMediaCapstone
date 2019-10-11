var express = require('express');
var router = express.Router();
var app = require('../app.js');
var io = require('./base.js');
const Lifx  = require('node-lifx-lan');
var lightsOn = 0;


Lifx.discover().then((device_list) => {
  device_list.forEach((device) => {
    console.log([
      device['ip'],
      device['mac'],
      device['deviceInfo']['label']
    ].join(' | '));
  });
}).catch((error) => {
  console.error(error);
});

router.post('/', (req, res, next)=>{
 console.log('/drwho requested');
 req.app.io.emit('master','You lose Doctor!');
 // Turn on all LIFX bulbs in the local network
 if (req.app.locals.lightsOn == 0) {
    Lifx.turnOnBroadcast({
      color: {css: 'green'}
    }).then(() => {
      console.log('Light On!');
    }).catch((error) => {
      console.error(error);
    });
    req.app.locals.lightsOn = 1;
 } else {
    Lifx.turnOffBroadcast({
      duration: 3000
    }).then(() => {
      console.log('Light Off!');
    }).catch((error) => {
      console.error(error);
    });
    req.app.locals.lightsOn = 0;
 }
 res.end();
 
});

router.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

module.exports = router;