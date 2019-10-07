process.env.PWD = process.cwd()
const express = require('express')
const app = express()

var pinball = require('./routes/pinball');

app.use(express.static(process.env.PWD + '/img'));
app.use('/drwho',pinball);


app.use((req, res, next)=>{
    res.status(404);
    res.send("404 Sorry, this file cannot be found");
  });

// app.listen(8080,'0.0.0.0', () => console.log('Example app listening on port 8080!'))
module.exports = app;