//readable事件
console.info('---stream data event---');
console.info();
var fs = require('fs');

//调用文件系统fs模块的createReadStream()方法创建可读流
var rs = fs.createReadStream('./txt/watchFile.txt');
//设置编码
rs.setEncoding('utf-8');
//流模块，readable事件处理函数
rs.on('readable', function(){
    console.log('readable event emitted');
    console.info();
});
//data事件处理函数
rs.on('data', function(chunk){
    console.log('读取hello.txt文本文件的内容...');
    console.info();
    console.info('读取到了%d字节的数据...', chunk.length);
    console.info();
    console.log('读取到的数据：', chunk);
    console.info();
});

/*
---stream data event---

读取hello.txt文本文件的内容...

读取到了9字节的数据...

读取到的数据： fyfgychjg

readable event emitted

 */
