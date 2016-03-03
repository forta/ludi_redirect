var PORT = 5000;
var IPADDRESS = '127.0.0.1';

var express = require('express');
var app = express();


// The client path is for client specific code.
app.use('/client', express.static(__dirname + '/client'));

// The root path should serve the client HTML.
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});


server = require('http').createServer(app);

server.listen(PORT);
