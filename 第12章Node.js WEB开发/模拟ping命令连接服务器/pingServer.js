console.info('---http server ping--');
console.info();

var http = require('http');
console.log('Now start HTTP server...');
console.info();

http.createServer(function(req, res){
    if(Math.round(Math.random())){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
    } else {
        res.writeHead(404, {'Content-Type':'text/html'});
    }
    res.end();
}).listen(6868);