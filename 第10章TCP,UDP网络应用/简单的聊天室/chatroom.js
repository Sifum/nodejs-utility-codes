//node chatroom.js -> telnet 127.0.0.1 88877 打开两个cmd窗口，能相互发信息
console.info('--net chat room ---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8877;
var clientList = [];
console.info('Now create chat Server...');
console.info();

//创建一个TCP客户端
var server = net.createServer();

server.on('connection', function(client){
    clientList.push(client);  //socket入栈
    client.name = client.remoteAddress + ':' + client.remotePort;  //保存客户端地址和端口
    broadcast('hi,' + client.name + 'join in!\r\n', client); //调用broadcast()方法
    client.write('hi,' + client.name + '!\r\n');//向客户端发信息

    client.on('data', function(data){
        broadcast(client.name + ' say:' + data + '\r\n', client);  //调用broadcast()方法
    });

    client.on('end', function(){
        broadcast('hi,' + client.name + ' quit!\r\n', client);
        clientList.splice(clientList.indexOf(client), 1);  //删除客户端socket
    });
})

//向全部客户端发通知信息
function broadcast(message, client){
    var cleanup = [];
    for(var i = 0, len = clientList.length; i < len; i++){
        if(client !== clientList[i]){
            if(clientList[i].writable){
                clientList[i].write(message); //向客户端发送信息
            } else {
                cleanup.push(clientList[i]);
                clientList[i].destroy(); //清除客户端socket
            }
        }
    }
    for(var i = 0, len = cleanup.length; i < len; i++){
          clientList.splice(clientList.indexOf(cleanup[i], 1)); //删除客户端socket
    }
}

server.listen(PORT, HOST);