const express = require('express');
const path = require('path');

const aldo = express();

aldo.use(express.static(path.join(__dirname, 'public')));

aldo.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/aldo.html');
});

aldo.listen(8080, (err) => {
    if (err) return console.log(err);
    else return console.log('Listening on port 8080...');
});