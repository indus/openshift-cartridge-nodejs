'use strict';

var http = require('http');
var exec = require('child_process').execSync;

var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.write(`<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head><pre>${exec('pm2 list')}</pre></html>`);
    res.end();
});

var port = process.env.NODE_PORT || 3000;
var hostname = process.env.NODE_IP || 'localhost';

server.listen(port, hostname, function () {
    console.log('Listening on ' + hostname + ':' + port);
});