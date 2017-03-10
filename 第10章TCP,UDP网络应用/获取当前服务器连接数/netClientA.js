//服务器端启动后再启动客户端，node netclientA.js
console.info('--net getConnections()---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8877;

var client = net.connect(PORT, HOST, function(){
    console.log('clientA connected');
    console.info();
    client.write('client write:Hello Server!');
    //client.end();
});

client.on('end', function(){
    console.log('clientA disconnected');
    console.info();
});

/*
--net getConnections()---
clientA disconnected
 */