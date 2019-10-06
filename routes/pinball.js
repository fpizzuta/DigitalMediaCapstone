var express = require('express');
var router = express.Router();
var app = require('../app.js');
var io = require('./base.js');



router.post('/', (req, res, next)=>{
 console.log('/drwho requested');
 req.app.io.emit('master','You lose Doctor!');
 
});

router.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

module.exports = router;