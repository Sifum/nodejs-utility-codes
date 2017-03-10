//文件系统模块提供了fs.readFile(),fs.readFileSync()完成读文件的操作。判断文件是否存在，则有fs.exists(),fs.existsSync()。
console.info('---fs readFileSync()--');
console.info();

var file_path = 'hello.txt';
var fs = require('fs');
if(fs.existsSync(file_path)){
    var file_contents = fs.readFileSync(file_path, 'utf-8');
    console.info('read hello.txt stdout:');
    console.info();
} else {
    console.log(file_path + 'is not exists.');
    console.info();
}
console.log('fs.readFileSync() Done');
console.info();

/*
---fs readFileSync()--

read hello.txt stdout:

fs.readFileSync() Done

 */