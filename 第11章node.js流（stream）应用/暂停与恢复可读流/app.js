console.info('----stream pause() & resume()---');
console.info();

var fs = require('fs');
var rs = fs.createReadStream('txt/watchFile.txt');
rs.setEncoding('utf8');
rs.on('readable', function(){
    console.log('readable event emitted');
    console.info();
});
rs.on('data', function(chunk){
    console.info('读取"txt/watchFile.txt"文本文件的内容...');
    console.info();
    console.log('读取到了%d字节的数据', chunk.length);
    console.info();
    rs.pause();  //暂停一个可读流
    console.log('接下来3秒内不会有数据...');
    console.info();
    setTimeout(function(){
        console.log('现在数据会再次开始流动...');
        console.info();
        rs.resume();   //恢复一个可读流
        console.log('读取到的数据:\n', chunk);
        console.info();
    }, 3000);
});

/*
----stream pause() & resume()---

读取"txt/watchFile.txt"文本文件的内容...

读取到了85字节的数据

接下来3秒内不会有数据...

readable event emitted

现在数据会再次开始流动...

读取到的数据:
 fs.appendFileSync(filename, data[,options])
add filename to appendFileSync.txt
21111

 */