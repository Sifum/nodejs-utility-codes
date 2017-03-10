//当第一次调用response.write()方法时，将会发送缓存的header信息和第一个报文给客户端；当第二次调用reponse.write()方法时，Node.js框架假设用户将发送数据流，然后分别地进行发送；这意味着响应时缓存到第一次报文的数据块。
//如果response.write()方法的所有数据被成功刷新到内核缓冲区，则返回true；如果所有或部分数据在用户内存里还处于队列中，则返回false；当缓冲区再次被释放时，drain事件会被分发。
console.info('---http create basic serve---');
console.info();

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h3>Node.js---HTTP</h3>');
    res.end('<p>Create Basic HTTP Server!</p>');
}).listen(6868);

console.log('Server running at http://localhost:6868/');

/*
http.createServer([requestListener]); 创建HTTP服务器
response.writeHead(statusCode, [reasonPhrase], [headers]); 向请求回复响应头
response.write(chunk, [encoding]); 发送一个响应体的数据块
response.end([data],[encoding]); 发送一个响应体的数据块
server.listen(port,[hostname],[backlog],[callback]);开始在指定的主机名和端口接受连接

 */
