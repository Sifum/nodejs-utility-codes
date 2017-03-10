console.info('----http server get---');
console.info();

var http = require('http');
console.log('Now start HTTP server on port 6868...');
console.info();

http.createServer(function(req, res){
    res.writeHead(301, {
        'Location': 'http://localhost:6868/'
    });

    res.write('<h3>Node.js---HTTP</h3>');
    res.end('<p>Create Redirect HTTP Server on Port 6868!</p>');
}).listen(6868);