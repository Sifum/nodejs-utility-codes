/*
网络net模块提供了server.getConnections()方法获取当前服务器连接数
 */
console.info('---net server.getConnections()---');
console.info();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8877;

var server = net.createServer();
server.on('listening', function(){
    console.log('Server is listening on port', PORT);
    console.info();
});

server.on('connection', function(socket){
    console.log('Server has a new connection');
    console.log();
    server.getConnections(function(err, count){
        if(err){
            console.info(err.message);
        } else {
            console.info('current connections is' + count);
            console.info();
        }
    });
    //server.close();
});

server.on('close', function(){
    console.log('Server is now closed');
    console.info();
});

server.on('error', function(err){
    console.log('Error occurred:', err.message);
    console.info();
});

server.listen(PORT, HOST);

/*
---net server.address()---

Server is listening on port 7878

opened server on
{"address":"127.0.0.1","family":"IPv4","port":7878}

 */