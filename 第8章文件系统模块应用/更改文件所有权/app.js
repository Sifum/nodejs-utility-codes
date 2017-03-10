//文件系统模块提供了fs.chown(),fs.chownSync(),fs.fchown(),fs.fchownSync()来改变文件的所有权，前两者可以直接使用文件路径进行操作，后两者需要使用文件描述符进行操作。
console.info('---fs chownSync()--');
console.info();

var fs = require('fs');
vr statSync_pre = fs.statSync('hello.txt'); //获取文件信息，同步方法
console.info('hello.txt file info:');
console.info(statSync_pre);  //打印文件信息
console.info();
console.info('fs.chownSync() Done');
console.info();
fs.chownSync('hello.txt', 1001, 1001); //更改文件所有权同步方法
console.info('fs.chownSync() Done.');
console.info();
var statSync_suf = fs.statSync('hello.txt');
console.info('hello.txt');
console.info(statSync_suf);
console.info();
