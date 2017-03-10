//服务器端启动后再启动客户端，node netclientB.js
console.info('--net getConnections()---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8877;

var client = net.connect(PORT, HOST, function(){
    console.log('clientB connected');
    console.info();
    client.write('client write:Hello Server!');
    //client.end();
});

client.on('end', function(){
    console.log('clientB disconnected');
    console.info();
});

/*
--net getConnections()---
clientB disconnected

 */