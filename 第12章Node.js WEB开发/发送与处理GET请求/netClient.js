//http.get(options, callback);用于在HTTP客户端向HTTP服务器端发送GET请求方式的连接；第一个参数options为一个JSON数组对象，用于定义HTTP服务器主机地址，端口号，路径，查询请求字段等信息；第二个参数callback用于定义一个回调函数，其包含http.clientResponse实例类型参数。
console.info('---http client get---');
console.info();

var http = require('http');
http.get('http://localhost:6868/signature=12345678&echostr=78787878&timestamp=168',function(res){
    console.log('STATUS:' + res.statusCode);
    console.info();
    res.setEncoding('utf8');

    res.on('data', function(chunk){
        console.log('BODY:' + chunk);
        console.info();
    });
    console.info();
}).on('error', function(e){
    console.log('Got error:' + e.message);
    console.info();
});

/*
---http client get---

STATUS:200


BODY:{}

 */