//文件打开的同步方法
console.info('---fs openSync()--');
console.info();

var exec = require('child_process').exec;
var child_pre = exec('cat hello.txt', function(error, stdout, stderr){
    console.info('cat hello.txt stdout:');
    console.info(stdout);
    console.info(stderr);
});
console.info();
var fs = require('fs');
var fd = fs.openSync('hello.txt', 'a'); //打开文件
console.info('文件描述符：' + fd);
console.info('fs.openSync() Done');
console.info();
fs.closeSync(fd);
console.info('文件描述符：' + fd);
console.log('fs.closeSync() Done');
console.info();

