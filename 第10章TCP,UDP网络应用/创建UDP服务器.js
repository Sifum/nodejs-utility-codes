//node通过UDP/Datagram模块的dgram.createSocket()方法来完成创建UDP服务器的功能。
console.info('---UDP Server---');
console.info();
var dgram = require('dgram');
var HOST = '127.0.0.1';
var PORT = 8877;

console.info('Now create UDP Server...');
console.info();

var server = dgram.createSocket('udp4');

server.on('listening', function(){
    console.log('UDP Server listening on...');
    console.info();
});

server.on('message', function(message, remote){
    console.info('emitted "message" event...');
    console.info();
    server.close();
});

server.on('error', function(err){
    console.log('Server error:\n' + err.stack);
    console.info();
    server.close();
});

server.on('close', function(){
    console.log('server closed');
    console.info();
});

server.bind(PORT, HOST);
//因本例没有添加实际操作代码，也没有定义客户端。
/*
---UDP Server---

Now create UDP Server...

UDP Server listening on...

 */