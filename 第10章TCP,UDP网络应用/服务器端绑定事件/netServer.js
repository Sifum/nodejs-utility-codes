/*
Connection,listening和close事件都属于net.Server类，connection事件是在客户端向服务器端发送连接请求后被触发的，listening事件是在服务器端调用server.listen()方法后触发的，close事件是在调用server.close()方法后被触发。
 */
console.info('---net close()---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8877;
var server = net.createServer();
server.on('listening', function(){
    console.log('Server is listening on port', PORT);
    console.info();
});
server.on('connetion', function(socket){
    console.log('Server has a new Connection');
    console.info();
    server.close();
});
server.on('close', function(){
    console.log('Server is now closed');
    console.info();
});

server.listen(PORT, HOST);