//node提供了socket.remoteAddress,socket.remotePort两个属性分别获得远程地址和端口。
console.info('---net server.remoteAddress()---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6677;

var server = net.createServer();
server.on('listening', function(){
    console.log('Server is listening on port', PORT);
    console.info();
});

server.on('connection', function(socket){
    console.log('Server has a new connection');
    console.log();
    console.info('socket.remoteAddress is ' + socket.remoteAddress);
    console.info();
    console.info('socket.remotePort is ' + socket.remotePort);
    server.close();
});
//....此处省略部分绑定事件的代码
server.listen(PORT, HOST);
