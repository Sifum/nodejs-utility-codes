//文件打开的异步方法
console.info('---fs open()--');
console.info();

var exec = require('child_process').exec;
var child_pre = exec('cat hello.txt', function(error, stdout, stderr){
    console.info('cat hello.txt stdout:');
    console.log(stdout);
    console.log(stderr);
});
var fs = require('fs');

//打开文件异步方法
fs.open('hello.txt', 'a', function(err, fd){
    if(err){
        throw err;
    } else {
        console.info('文件描述符：' + fd);
        console.log('fs.open() Done');
        console.info();
    }
    fs.close(fd, function(){
        console.info('文件描述符：' + fd);
        console.log('fs.close() Done');
        console.info();
    });
});

console.info();

/*
---fs open()--


文件描述符：3
fs.open() Done

文件描述符：3
fs.close() Done

cat hello.txt stdout:
*/