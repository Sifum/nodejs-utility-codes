console.info('--stream pipe write file--');
console.info();

var fs = require('fs');
var readable = fs.createReadStream('txt/srcFile.txt');
var writable = fs.createWriteStream('txt/destFile.txt');

readable.pipe(writable);

//pipe()方法将源文件的内容写入到目标文件中。使用pipe()方法复制文件内容过程中，自动调用data,end事件