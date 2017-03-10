//文件系统模块提供了fs.truncate()和fs.truncateSync()方法来完成修改文件长度的操作。
console.info('---fs truncateSync()--');
console.info();

var fs = require('fs');
var exec = require('child_process').exec;
var child_pre = exec('cat hello.txt', function(err, stdout, stderr){
    console.info('cat hello.txt stdout:');
    console.info(stdout);
    console.info('length:' + stdout.length);
    console.info(stderr);
    console.info();
    fs.truncateSync('hello.txt', 6); //修改文件内容长度,同步方法
    console.info('fs.truncateSync() Done');
    console.info();
    var child_suf = exec('cat hello.txt', function(error, stdout, stderr){
        console.info('cat hello.txt stdout:');
        console.log(stdout);
        console.info('length:' + stdout.length);
        console.log(stderr);
        console.info();
    });
});
console.info();