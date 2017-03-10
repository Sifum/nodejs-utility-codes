console.info('--UDP broadcast---');
console.info();
var dgram = require('dgram');
var HOST = '127.0.0.1';
var PORT = 8877;
console.info('Now create UDP Server...');
console.info();

//创建一个UDP客户端
var server = dgram.createSocket('udp4');

server.on('listening', function(){
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ':' + address.port);
    console.info();
})

server.on('message', function(message, remote){
    console.log('UDP Server received from ' + remote.address + ':' + remote.port);
    console.log('-' + message);
    console.info();
    server.close();
});

server.on('error', function(err){
    console.log('server error:\n' + err.stack);
    server.close();
})

server.on('close', function(){
    console.log('server closed');
    console.info();
});

server.bind(PORT);

/*
--UDP broadcast---

Now create UDP Server...

UDP Server listening on 0.0.0.0:8877

UDP Server received from 192.168.1.104:49327
-UDP Client to Server:Hello Server!

server closed


 */