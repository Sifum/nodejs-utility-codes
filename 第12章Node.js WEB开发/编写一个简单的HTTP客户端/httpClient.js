//启动服务器代码后，启动此客户端代码
console.info('---http create basic client---');
console.info();

var http = require('http');
var options = {
    hostname: 'localhost',
    port: 6868,
    path: '/',
    method: 'POST'
};

var req = http.request(options, function(res){
    console.log('STATUS:' + res.statusCode);
    console.log('HEADERS:' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log('BODY:' + chunk);
    });
});
//http.request(options, callback);创建HTTP服务器并向HTTP服务器发起请求；第一个参数为一个JSON数组对象，用于定义HTTP服务器主机地址，端口号，路径，请求访问方式，请求头以及身份验证等信息。第二个参数callback用于定义一个回调函数。

req.on('error', function(e){
    console.log('problem with request:' + e.message);
});

req.write('data\n');

req.end();

/*
---http create basic client---

STATUS:200
HEADERS:{"content-type":"text/html","date":"Sun, 13 Mar 2016 12:41:29 GMT","conn
ection":"close","transfer-encoding":"chunked"}
BODY:<h3>Node.js---HTTP</h3>
BODY:<p>Create Basic HTTP Server!</p>

 */