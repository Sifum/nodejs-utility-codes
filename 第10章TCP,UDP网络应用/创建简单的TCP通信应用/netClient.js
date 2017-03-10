//服务器端启动后再启动客户端，node netclient.js
console.info('--net ServerClient()---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 9696;
//使用net.connect()方法创建一个TCP客户端实例
var client = net.connect(PORT, HOST, function(){
    console.log('client connected');
    console.info();
    client.write('client write: Hello Server!');
});
//data事件处理函数
client.on('data', function(data){
    console.log(data.toString());
    console.info();
    client.end();
});
//end事件处理函数
client.on('end', function(){
    console.log('client disconnected');
    console.info();
})

/*
--net ServerClient()---

client connected

Server write:client write: Hello Server!

client disconnected

 */