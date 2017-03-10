//查询mysql数据库
console.info('----mysql connection()-----');
console.info();

var http = require('http');
var mysql = require('mysql');
console.log('Now start HTTP server on port 6868...');

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test'
});

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html;charset=utf8'});
    res.write('<h3>测试Node.js-Mysql数据库连接！</h3>');
    if(db){
        db.query('select * from users', function(error, rows){
            if(error)throw error;
            else {
                res.end(JSON.stringify(rows));
            }
        });
    } else {
        res.end('Error happened');
    }
}).listen(6868);

/*

 */