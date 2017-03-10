//获取文件信息的方法有：fs.stat(),fs.statSync(),fs.fstat(),fs.fstatSync();前两个可以直接用文件路径进行操作，后两个需要使用文件描述符进行操作
console.info('---fs statSync()--');
console.info();

var fs = require('fs');
var statSync = fs.statSync('hello.txt');
console.info('hello.txt file info:');
console.info(statSync);
console.info();
console.info('fs.statSync() Done');
console.info();

/*
---fs statSync()--

hello.txt file info:
{ dev: -1695817456,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 3659174697375643,
  size: 0,
  blocks: undefined,
  atime: Thu Mar 10 2016 22:03:32 GMT+0800 (中国标准时间),
  mtime: Thu Mar 10 2016 22:03:32 GMT+0800 (中国标准时间),
  ctime: Thu Mar 10 2016 22:03:32 GMT+0800 (中国标准时间),
  birthtime: Thu Mar 10 2016 22:03:32 GMT+0800 (中国标准时间) }

fs.statSync() Done

 */