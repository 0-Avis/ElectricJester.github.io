const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/profile', function(req, res) {
    res.sendFile(path.join(__dirname + '/profile.html'));
}) 

app.get('/profiledirectory', function(req, res) {
    res.sendFile(path.join(__dirname + '/profiledirectory.html'));
})

//app.listen(8000);
