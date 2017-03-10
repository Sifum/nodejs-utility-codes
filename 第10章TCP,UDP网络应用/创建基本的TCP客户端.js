//node框架中通过net模块的net.connect()方法来完成创建TCP客户端的功能。
console.info('----net ServerClient()---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 9696;
var client = net.connect(PORT, HOST, function(){
    console.log('client connected...');
    console.info();
}); //创建一个最基本的TCP客户端连接
client.on('data', function(data){
    console.info('client on data...');
    console.info();
});
client.on('end', function(){
    console.log('client disconnected');
    console.info();
});

//因本例的客户端没有服务器可以连接，因此调试输出后的结果会报出错误。
/*
----net ServerClient()---

events.js:154
      throw er; // Unhandled 'error' event
      ^

Error: connect ECONNREFUSED 127.0.0.1:9696
    at Object.exports._errnoException (util.js:856:11)
    at exports._exceptionWithHostPort (util.js:879:20)
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1057:14)

 */