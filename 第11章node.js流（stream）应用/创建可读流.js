//可读流有两种模式：流动模式和暂停模式。当处于流动模式时，数据由底层系统读出，并尽可能快地提供给程序处理；当处于暂停模式时，程序必须明确的调用stream.read()方法来取出若干数据块。
console.info('---stream createReadStream()---');
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
//error事件处理函数
rs.on('error', function(){
    console.log('error event emitted');
    console.info();
});
//end事件处理函数
rs.on('end', function(){
    console.log('end event emitted');
    console.info();
});
//close事件处理函数
rs.on('close', function(){
    console.log('close event emitted');
    console.info();
});

/*
---stream createReadStream()---

data event emitted

readable event emitted

end event emitted

close event emitted

 */