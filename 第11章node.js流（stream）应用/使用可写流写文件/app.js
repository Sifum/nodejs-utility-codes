console.info('---stream writable file---');
console.info();
var fs = require('fs');
var ws = fs.createWriteStream('txt/srcFile.txt');
ws.write('stream - ');  //写数据
ws.write('writable - ');
ws.write(' file - ');

//通过setTimeout()方法设置1000ms时间延迟，自行关闭文件流
setTimeout(function(){
    ws.end('end.\n');
}, 1000);

//writable.write(chunk, [encoding],[callback]); 向底层系统写入数据