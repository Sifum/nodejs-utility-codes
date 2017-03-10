//UDP'广播'和'单播'的区别是通信的IP地址不同，广播使用广播地址255.255.255.255，将消息发送到在同一广播网络上的每个主机。
console.info('--UDP broadcast---');
console.info();
var dgram = require('dgram');
var HOST = '255.255.255.255';
var PORT = 8877;

var message = new Buffer('UDP Client to Server:Hello Server!');
console.info('Now create UDP Client...');
console.info();

//创建一个UDP客户端
var client = dgram.createSocket('udp4');

//绑定套接字方法函数
client.bind(function(){
    client.setBroadcast(true); //用于向广播网络上发送数据报，参数flag用于设置或清除SO_BROADCAST套接字选项，当该选项被设置后，UDP数据报就会被发送到一个本地接口的广播地址
});

client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
    if(err)throw err;
    console.log('UDP message sent to ' + HOST + ':' + PORT);
    console.info();
    console.info(bytes);
    console.info();
    client.close();
});

client.on('close', function(){
    console.log('client disconnected');
    console.info();
});

/*
--UDP broadcast---

Now create UDP Client...

UDP message sent to 255.255.255.255:8877

34

client disconnected

 */
