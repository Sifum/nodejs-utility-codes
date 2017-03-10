//文件系统模块提供了fs.symlink()和fs.symlinkSync()创建文件符号链接。
//文件符号链接与硬链接不同的是，可以链接不同文件系统的文件。
console.info('---fs symlinkSync()--');
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
fs.symlinkSync(srcpath, dstpath); //链接文件，同步方法
console.log('fs.symlinkSync() Done');
console.info();

var child_suf = exec('cat hello.txt', function(error, stdout, stderr){
    console.info('cat hello.txt stdout:');
    console.log(stdout);
    console.log(stderr);
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
console.info();