//文件系统模块提供了fs.link(),fs.unlink()和fs.linkSync(),fs.unlinkSync()方法，前两者是同步的一组方法，后两者是异步的一组方法
//硬链接只能引用同一系统中的文件，当移动或删除源文件时，硬链接不会被破坏，因为它引用的是文件的物理数据。硬链接的文件不需要用户有访问原始文件的权限，也不会显示源文件的位置。
console.info('---fs linkSync()--');
console.info();

var exec = require('child_process').exec;
var child_pre = exec('cat hello.txt', function(error, stdout, stderr){
    console.info('cat hello.txt:');
    console.log(stdout);
    console.log(stderr);
});
console.info();
var srcpath = 'hello.txt';
var dstpath = 'link/hello.txt';
var fs = require('fs');
fs.linkSync(srcpath, dstpath); //链接文件，同步方法
console.log('fs.linkSync() Done');
console.info();

var child_suf = exec('cat hello.txt', function(error, stdout, stderr){
    console.info('cat hello.txt stdout:');
    console.log(stdout);
    console.log(stderr);
    fs.unlinkSync(dstpath);
    console.log('fs.unlinkSync() Done.');
    console.info();
    var spawn = require('child_process').spawn;
    var ls_txt = spawn('ls', ['-lh', 'txtlink']);
//定义命令行ls -lh /txtlink
    ls_txt.stdout.on('data', function(data){
        console.info('ls -lh /txtlink stdout:');
        console.log('stdout:' + data);
        console.info();
    });

    ls_txt.on('error', function(code){
        console.log('child process error with code' + code);
        console.info();
    });

    ls_txt.on('close', function(code){
        console.log('child process closed with code' + code);
        console.info();
    });
});