var express = require('express');
var router = express.Router();


router.post('/', (req, res, next)=>{
 console.log('/drwho requested');
 
});

router.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

module.exports = router;