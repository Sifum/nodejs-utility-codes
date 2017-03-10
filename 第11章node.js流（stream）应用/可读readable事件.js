//readable事件
console.info('---stream readable event---');
console.info();
var fs = require('fs');

//调用文件系统fs模块的createReadStream()方法创建可读流
var rs = fs.createReadStream('hello.txt');
//设置编码
rs.setEncoding('utf-8');
//流模块，readable事件处理函数
rs.on('readable', function(){
    console.log('readable event emitted');
    console.info();
});
//data事件处理函数
rs.on('data', function(chunk){
    console.log('data event emitted');
    console.info();
});
//end事件处理函数
rs.on('end', function(){
    console.log('end event emitted');
    console.info();
});
/*
---stream readable event---

data event emitted

readable event emitted

end event emitted

 */


