const express = require('express');
const aldo = express();

aldo.get('/', function(req, res) {
    res.send('I\'m listening...');
});

aldo.listen(8080, (err) => {
    if (err) return console.log(err);
    else return console.log('Listening on port 8080...');
});