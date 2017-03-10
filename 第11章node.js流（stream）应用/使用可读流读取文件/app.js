console.info('--stream read()--');
console.info();

var fs = require('fs');
var rs = fs.createReadStream('txt/watchFile.txt');

rs.setEncoding('utf8');

rs.on('readable', function(){
    console.log('readable event emitted');
    console.info();
    var chunk;
    while(null !== (chunk = rs.read())){
        //返回一个新的可读流对象，rs.read([size])用于从内部缓冲区中读取并返回若干数据,可选的size参数用于定义数据的大小
        console.log('得到了%d字节的数据', chunk.length);
        console.info();
        console.log('读取到的数据:', chunk);
        console.info();
    }
});

rs.on('end', function(){
    console.log('end event emitted');
    console.info();
});

/*
--stream read()--

readable event emitted

得到了85字节的数据

读取到的数据: fs.appendFileSync(filename, data[,options])
add filename to appendFileSync.txt
21111

readable event emitted

end event emitted


 */