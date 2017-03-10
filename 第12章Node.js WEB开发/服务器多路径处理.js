console.info('----http server pathname---');
console.info();

var http = require('http');
var url = require('url');
console.log('Now start HTTP server on port 6868...');
console.info();

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    if(pathname === '/'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.write('Node.js --- HTTP \n');
        res.end('Home Page\n');
    } else if(pathname === '/about'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.write('Node.js--- HTTP\n');
        res.end('About Us\n');
    } else if(pathname === '/redirect'){
        res.writeHead(301, {
            'Location': '/'
        });

        res.write('Node.js--HTTP\n');
        res.end();
    } else {
        res.writeHead(404, {
            'Content-Type':'text/plain'
        });

        res.write('Node.js----HTTP\n');
        res.end('Page not found\n');
    }
}).listen(6868);

/*
http://localhost:6868/ 返回：
Node.js --- HTTP 
Home Page
http://localhost:6868/about 返回：
Node.js--- HTTP
About Us
http://localhost:6868/redirect 返回：
Node.js --- HTTP 
Home Page

其他http://localhost:6868/ab 返回：
Node.js----HTTP
Page not found
 */