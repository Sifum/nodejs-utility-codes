/*
网络net模块提供了server.address()方法获取服务器地址参数
 */
console.info('---net server.address()---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 7878;
var server = net.createServer();
server.on('listening', function(){
    console.log('Server is listening on port', PORT);
    console.info();
    var addr = server.address();
    console.info('opened server on ');
    console.info('%j', addr);
    console.info();
    server.close();
});
//......此处省略部分绑定事件的代码

server.listen(PORT, HOST);

/*
---net server.address()---

Server is listening on port 7878

opened server on
{"address":"127.0.0.1","family":"IPv4","port":7878}

 */