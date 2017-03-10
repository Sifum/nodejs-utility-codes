//drain事件实现另一种复制文件的操作
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
        //通过返回值判断数据是已经写入目标还是仅仅写入缓存中
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

rs.on('end', function(){
    console.log('end event emitted.');
    console.info();
    ws.end();
});

//writable.write(chunk)方法返回false，则表明drain事件可以继续向流写入更多的数据。
/*
---stream writable file--

data event emitted

end event emitted.


 */