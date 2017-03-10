//服务器端启动后再启动客户端，node netclientA.js
console.info('--net socketwrite---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8877;
var sWriteContent = 'client write: Hello Server!';

var client = net.connect(PORT, HOST, function(){
    console.log('client connected');
    console.info();
    client.write(sWriteContent);
});

client.on('data', function(data){
    console.log(data.toString());
    console.info();
    console.info('socket.bytesRead is ' + client.bytesRead);
    console.info();
    console.info();
});

client.on('end', function(){
    console.log('client disconnected');
    console.info();
});

/*
--net socketwrite---

client connected

Server write:client write: Hello Server!

socket.bytesRead is 41

 */