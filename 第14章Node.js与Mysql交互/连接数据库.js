//连接mysql数据库
console.info('----mysql connection()-----');
console.info();

var http = require('http');
var mysql = require('mysql');
console.log('Now start HTTP server on port 6868...');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port:'3306'
});

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html;charset=utf8'});
    res.write('<h3>测试Node.js-Mysql数据库连接！</h3>');

    connection.connect(function(err){
        if(err){
            res.end('<p>Error Connected to Mysql!</p>');
            return;
        } else {
            res.end('<p>Connected to Mysql!</p>');
        }
    });
}).listen(6868);

/*
命令行：
----mysql connection()-----

Now start HTTP server on port 6868...

本地开打http://localhost:6868/
测试Node.js-Mysql数据库连接！

Connected to Mysql!
 */