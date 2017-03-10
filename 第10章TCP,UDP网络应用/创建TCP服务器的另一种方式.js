console.log('----net connection()---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 9696;
var server = net.createServer();

server.listen(PORT, HOST);
console.log('Server listening on' + server.address);
console.info();
server.on('connection', function(sock){
    console.log('CONNECTED:' + sock.remoteAddress + ':' + sock.remotePort);
});

//本例没有添加操作代码，也没有定义客户端