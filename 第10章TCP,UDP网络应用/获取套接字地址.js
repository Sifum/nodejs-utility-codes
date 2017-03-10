//除了通过socket.address()来获取套接字地址参数,node还提供了socket.localAddress,socket.localPort属性来分别获得地址和端口。
console.info('---net server.address()---');
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
    console.info(socket.address());
    console.info();
    console.info(socket.localAddress);
    console.info();
    console.info(socket.localPort);
    console.info();
    server.close();
});
//....此处省略部分绑定事件的代码
server.listen(PORT, HOST);
