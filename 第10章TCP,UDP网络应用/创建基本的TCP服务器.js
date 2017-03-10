//创建基本的TCP服务器，Node框架提供了一个net模块来支持TCP协议，通过net模块的net.createServer()方法来完成创建TCP服务器的功能。
console.log('---net createServer---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 9696;

console.info('Now create Server...');
console.info();
net.createServer(function(sock){
    console.log('Server listening on ' + HOST + ":" + PORT);
    console.info();
    sock.on('data', function(data){
        console.log('socket on data...');
    });
    sock.on('close', function(data){
        console.log('socket on close...');
    });
}).listen(PORT, HOST);

//net.createServer([options][,connectionListener]);
//本例没有添加实际操作代码，也没有定义客户端，因此调试输出的结果没有实际内容