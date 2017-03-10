//
console.info('---http create basic server---');
console.info();

var http = require('http');
console.log('Now start HTTP server....');
http.createServer(function(req, res){
    res.setHeader('Content-Type','text/html');
    res.setHeader('Set-Cookie',['type=king','language=javascript']);
    var content_Type = res.getHeader('Content-Type');
    console.info(content_Type);
    var set_cookie = res.getHeader('Set-Cookie');
    console.info(set_cookie);
    //getHeader()用于读取一个在队列中但是还没有被发送到客户端的header；name参数是不区分大小写

    res.write('<h3>Node.js---HTTP</h3>');
    res.write('<p>'+ content_Type+'</p>');
    res.write('<p>'+ set_cookie +'</p>');
    res.end();
}).listen(6868);

console.log('Server running at http://localhost:6868/');

/*
http.createServer([requestListener]); 创建HTTP服务器
response.writeHead(statusCode, [reasonPhrase], [headers]); 向请求回复响应头
response.write(chunk, [encoding]); 发送一个响应体的数据块
response.end([data],[encoding]); 发送一个响应体的数据块
server.listen(port,[hostname],[backlog],[callback]);开始在指定的主机名和端口接受连接

 */
/*
浏览器输出
Node.js---HTTP

text/html

type=king,language=javascript

 */
