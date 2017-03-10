//文件系统模块提供了fs.ftruncate()与fs.ftruncateSync()来完成文件截取的操作
console.info('---fs ftruncateSync()--');
console.info();

var fs = require('fs');
var exec = require('child_process').exec;
var child_pre = exec('cat hello.txt', function(err, stdout, stderr){
    console.info('cat hello.txt stdout:');
    console.info(stdout);
    console.info(stderr);
    var fd = fs.openSync('hello.txt', 'a');//打开文件
    fs.ftruncateSync(fd, 10); //文件内容截取
    console.info('文件描述符：' + fd);
    console.info();
    console.log('fs.ftruncateSync() Done');
    fs.closeSync(fd);  //关闭文件
    var child_suf = exec('cat hello.txt', function(error, stdout, stderr){
        console.info('cat hello.txt stdout:');
        console.log(stdout);
        console.log(stderr);
    });
    console.info();
});
console.info();