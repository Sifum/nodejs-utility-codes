//socket.address();返回套接字地址信息
console.info('---UDP ServerClient---');
console.info();
var dgram = require('dgram');
var HOST = '127.0.0.1';
var PORT = 8877;

console.info('Now create UDP Server...');
console.info();

var server = dgram.createSocket('udp4');

server.on('listening', function(){
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ':' + address.port);
    console.info();
});

server.on('message', function(message, remote){
    console.info('UDP Server received from ' + remote.address + ':' + remote.port);
    console.info('-' + message);
    console.info();
    server.close();
});

server.on('error', function(err){
    console.log('Server error:\n' + err.stack);
    server.close();
});

server.on('close', function(){
    console.log('server closed');
    console.info();
});

server.bind(PORT, HOST);

/*
---UDP ServerClient---

Now create UDP Server...

UDP Server listening on 127.0.0.1:8877

UDP Server received from 127.0.0.1:59685
-UDP Client to Server: Hello Server!

server closed

 */