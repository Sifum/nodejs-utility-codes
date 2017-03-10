//pipe()方法将源文件的内容写入到目标文件之中。unpipe()方法接触pipe()方法设置的流。
console.info('--stream pipe write file--');
console.info();

var fs =require('fs');
var readable = fs.createReadStream('txt/srcFile.txt');

var writable = fs.createWriteStream('txt/destFile.txt');

readable.pipe(writable);

setTimeout(function(){
    console.log('停止写入到txt/destFile.txt');
    console.info();
    readable.unpipe(writable);
    console.log('自动关闭文件流');
    console.info();
    writable.end();
}, 1);

/*
接触pipe方法设置的流
--stream pipe write file--

停止写入到txt/destFile.txt

自动关闭文件流

 */