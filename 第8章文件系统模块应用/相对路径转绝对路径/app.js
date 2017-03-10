//文件系统模块提供了fs.realpath()和fs.realpathSync()完成相对路径转绝对路径。
console.info('---fs realpathSync()--');
console.info();

var fs = require('fs');
var cache = {'/king': '/home/king'};
var relpath = 'txt/realpathSync.txt'; //定义相对路径
var resolvedPath = fs.realpathSync(relpath, cache); //相对路径转绝对路径
console.info('txt/realpathSync.txt realpath is:');
console.info(resolvedPath);
console.info();