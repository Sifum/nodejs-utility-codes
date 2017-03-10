//启动服务器代码后，启动此客户端代码
console.info('---http create basic client---');
console.info();

var http = require('http');
var querystring = require('querystring');

var status_codes = new Array();
status_codes[0] = '201';
status_codes[1] = '202';
status_codes[2] = '203';
status_codes[3] = '401';
status_codes[4] = '402';

var postData = new Array();
for(var n = 0; n < 5; n++){
    postData[n] = querystring.stringify({
        statuscodes: status_codes[n]
    });
}

for(var i = 0; i < 5; i++){

var options = {
    hostname: 'localhost',
    port: 6868,
    path: '/' + postData[i],
    method: 'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Type':postData.length
    }
};

var req = http.request(options, function(res){
    console.log('STATUS_CODES:' + res.statusCode);
    console.log('HEADERS:' + JSON.stringify(res.headers));
    console.info();
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log('BODY:' + chunk);
        console.info();
    });
});
//http.request(options, callback);创建HTTP服务器并向HTTP服务器发起请求；第一个参数为一个JSON数组对象，用于定义HTTP服务器主机地址，端口号，路径，请求访问方式，请求头以及身份验证等信息。第二个参数callback用于定义一个回调函数。

req.on('error', function(e){
    console.log('problem with request:' + e.message);
    console.info();
});

req.write('\n');

req.end();

}

/*
---http create basic client---

STATUS_CODES:201
HEADERS:{"content-type":"text/plain","date":"Sun, 13 Mar 2016 13:00:13 GMT","con
nection":"close","transfer-encoding":"chunked"}

BODY:Created

STATUS_CODES:202
HEADERS:{"content-type":"text/plain","date":"Sun, 13 Mar 2016 13:00:13 GMT","con
nection":"close","transfer-encoding":"chunked"}

BODY:Accepted

STATUS_CODES:203
HEADERS:{"content-type":"text/plain","date":"Sun, 13 Mar 2016 13:00:13 GMT","con
nection":"close","transfer-encoding":"chunked"}

BODY:Non-Authoritative Information

STATUS_CODES:401
HEADERS:{"content-type":"text/plain","date":"Sun, 13 Mar 2016 13:00:13 GMT","con
nection":"close","transfer-encoding":"chunked"}

BODY:Unauthorized

STATUS_CODES:402
HEADERS:{"content-type":"text/plain","date":"Sun, 13 Mar 2016 13:00:13 GMT","con
nection":"close","transfer-encoding":"chunked"}

BODY:Payment Required


 */