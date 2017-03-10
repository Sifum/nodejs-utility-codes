//在可写流调用ws.end()方法后，并且所有数据已被写入到底层系统后，该事件被触发。
console.info('---stream writable file--');
console.info();

var fs = require('fs');
var rs = fs.createReadStream('txt/srcFile.txt');
var ws = fs.createWriteStream('txt/destFile.txt');

rs.setEncoding('utf8');

rs.on('data', function(chunk){
    console.log('data event emitted');
    console.info();

    if(ws.write(chunk) === false){
        console.log('数据写入缓存...');
        console.info();
        rs.pause();  //暂停可读流
    }
});

ws.on('drain', function(){
    console.log('drain event emitted');
    console.info();
    rs.resume(); //恢复可读流
});

ws.on('finish', function(){
    console.log('finish event emitted');
    console.info();
});

rs.on('end', function(){
    console.log('end event emitted');
    console.info();
    ws.end();
});

/*
---stream writable file--

data event emitted

end event emitted

finish event emitted

 */