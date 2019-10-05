var express = require('express');
var router = express.Router();

router.post('/', (req, res, next)=>{
 console.log('/drwho requested');
 
});

module.exports = router;