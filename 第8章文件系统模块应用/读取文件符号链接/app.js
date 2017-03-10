//文件系统模块提供了fs.readlink()和fs.readlinkSync()读取文件符号链接。
//文件符号链接（快捷方法）与硬链接不同的是，可以链接不同文件系统的文件。
console.info('---fs readlinkSync()--');
console.info();

var srcpath = 'txt/hello.txt';
var linkpath = 'txtlink/hello.txt';
var fs = require('fs');
var linkString = fs.readlinkSync(linkpath); //同步方法读取链接文件
console.info('read linkpath:' + linkString);
console.log('fs.readlinkSync() Done');
var srcpath = fs.readlinkSync(srcpath);//同步方法读取链接文件
console.info('read srcpath:' + srcpath);
console.log('fs.readlinkSync() Done');
console.info(); 