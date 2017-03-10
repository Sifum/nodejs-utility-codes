//服务器端先启动node netServer.js
console.info('----net ServerClient()----');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 9696;
/*
使用net.createServer()创建一个TCP服务器实例
listen()开始监听指定端口
传入的回调函数将作为connection事件的处理函数
 */
console.info('Now create Server...');
console.info();
net.createServer(function(sock){
    //回调函数获得一个参数，一个sock对象
    console.log('Server listening on ' + HOST + ':' + PORT); //服务器已经建立连接
    console.info();
    console.log('CONNECTED:' + sock.remoteAddress + ':' + sock.remotePort); 
    console.info();
    sock.on('data', function(data){
        console.info('DATA' + sock.remoteAddress + ':' + data );
        console.info();
        sock.write('Server write:' + data);
    });  //data事件处理函数
    sock.on('close', function(data){
        console.log('CLOSED:' + sock.remoteAddress + ':' + sock.remotePort);
        console.info();
    }); //close事件处理函数
}).listen(PORT, HOST);

/*
----net ServerClient()----

Now create Server...

Server listening on 127.0.0.1:9696

CONNECTED:127.0.0.1:61955

DATA127.0.0.1:client write: Hello Server!

CLOSED:127.0.0.1:61955

 */