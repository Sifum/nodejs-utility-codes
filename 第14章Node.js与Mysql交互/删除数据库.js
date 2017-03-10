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
                res.write(JSON.stringify(rows));
                //返回查询信息
            }
        });
        console.info();
        db.query('delete from users where user_id = 3;', function(err, rows){
            if(err) throw err;
            else {
                res.end(JSON.stringify(rows));
                //返回删除信息
            }
        })
    } else {
        res.end('Error happened');
    }
}).listen(6868);

/*
测试Node.js-Mysql数据库连接！

[{"user_id":1,"user_name":"minson","user_age":29},{"user_id":2,"user_name":"Wanna","user_age":24}]

{"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}

 */