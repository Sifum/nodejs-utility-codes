//
console.info('---http create basic server---');
console.info();

var http = require('http');
console.log('Now start HTTP server....');
http.createServer(function(req, res){
    var status = req.url.substr(1);
    //substr(start,length)
    var status_codes = status.substring(12);
    //substring(start,end);slice(start,end)
    if(!http.STATUS_CODES[status_codes]){
        status_codes = '404';
    }
    res.writeHead(status_codes, {'Content-Type': 'text/plain'});
    res.end(http.STATUS_CODES[status_codes]);
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
---http create basic serve---

Server running at http://localhost:6868/

 */
