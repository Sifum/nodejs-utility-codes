//服务器端启动后再启动客户端，node netclient.js
console.info('--net close()---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8877;

var client = net.connect(PORT, HOST, function(){
    console.log('client connected');
    console.info();
    client.end();
});

client.on('end', function(){
    console.log('client disconnected');
    console.info();
});