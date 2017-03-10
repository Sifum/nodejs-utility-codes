//node通过dgram.createSocket()方法来创建UDP客户端
console.info('--UDP Client---');
console.info();
var dgram = require('dgram');
var HOST = '127.0.0.1';
var PORT = 8877;
var message = new Buffer('UDP Client to Server: Hello Server!');
console.info('Now create UDP client...');
console.info();

//创建一个UDP客户端
var client = dgram.createSocket('udp4');

client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
    if(err){
        throw err;
    }
    console.log('UDP message sent to...');
    console.info();

    client.close();
});

client.on('close', function(){
    console.log('client disconnected');
    console.info();
});
