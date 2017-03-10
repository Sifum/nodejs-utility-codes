//node提供了socket.write()方法用于服务器端与客户端进行相互写数据的操作，同时还提供了socket.bytesRead,socket.bytesWritten等多个属性来获取相关数据特性。两者表示套接字接受和发送数据的字节长度。
console.info('---net socketwrite---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8877;

var server = net.createServer();
server.on('listening', function(){
    console.log('Server is listening on port', PORT);
    console.info();
});

server.on('connection', function(socket){
    console.log('Server has a new connection');
    console.log();
    socket.on('data', function(data){
        console.log('socket.bytesRead is ' + socket.bytesRead);
        console.info();
        console.info('DATA' + socket.remoteAddress + ' :' + data);
        console.info();
        socket.write('Server write:' + data);
        console.info('socket.bytesWritten is ' + socket.bytesWritten);
        console.info();
    });
    server.close();
});
//....此处省略部分绑定事件的代码
server.listen(PORT, HOST);

/*
---net socketwrite---

Server is listening on port 8877

Server has a new connection

socket.bytesRead is 27

DATA127.0.0.1 :client write: Hello Server!

socket.bytesWritten is 40

 */