const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/profile.html'));
})

app.listen(8000);