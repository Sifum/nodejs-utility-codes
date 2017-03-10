//node提供了socket.pause()与socket.resume()方法用于暂停和恢复data事件的操作，同时还提供多个属性如socket.bytesRead,socket.bytesWritten来获取相关数据特性。
console.info('---net socketdata---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8877;
var bSockData = true;

var server = net.createServer();
server.on('listening', function(){
    console.log('Server is listening on port', PORT);
    console.info();
});

server.on('connection', function(socket){
    console.log('Server has a new connection');
    console.log();
    if(bSockData){
        socket.resume();  //恢复套接字data事件
        bSockData = false;
    } else {
        socket.pause(); //暂停套接字data事件
        bSockData = true;
    }
    socket.on('data', function(data){
        if(socket.bytesRead > 32){
            console.info('DATA', socket.remoteAddress + ' :' + 'is too long');
            console.info();
        } else {
            console.info('DATA', socket.remoteAddress + ' :' + data);
            console.info();
        }
        socket.write('Server write: ' + data);
    });
    server.close();
});
//....此处省略部分绑定事件的代码
server.listen(PORT, HOST);

/*
---net socketdata---

Server is listening on port 8877

Server has a new connection

DATA 127.0.0.1 :client write: Hello Server!

 */