//文件系统模块提供了fs.chmod(),fs.chmodSync()和fs.fchmod(),fs.fchmodSync()方法，前两者可以直接使用文件路径，后两者需要使用文件描述符进行操作。
console.info('---fs chmodSync()--');
console.info();

var fs = require('fs');
var spawn = require('child_process').spawn;
var Is_txt_pre = spawn('ls', 'hello.txt');//定义命令行ls -lh /txt
Is_txt_pre.stdout.on('data', function(data){
    console.log('stdout:' + data);
    fs.chmodSync('hello.txt', 777);  //更改文件权限
    console.info('chmodSync() Done');
    console.info();
    var Is_txt_suf = spawn('ls', 'hello.txt'); //定义命令行ls -lh /txt

    Is_txt_suf.stdout.on('data', function(data){
        console.log('stdout:' + data);
    });

    Is_txt_suf.on('error', function(code){
        console.log('child process error with code' + code);
        console.info();
    });

    Is_txt_suf.on('close', function(code){
        console.log('child process closed with code' + code);
        console.info();
    });
});

Is_txt_pre.on('error', function(code){
    console.log('child process error with code' + code);
    console.info();
});

Is_txt_pre.on('close', function(code){
    console.log('child process closed with code' + code);
    console.info();
});

console.info();
