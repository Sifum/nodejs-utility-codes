//child_process模块的exec()方法与execFile()方法均支持回调函数，二者的区别就是execFile()方法不用启动独立的shell，因此更加轻量级。
console.info('---child_process exec last---');
console.info();

var child_process = require('child_process');
child_process.execFile('/bin/ls', ['-lh','.'], function(error, stdout, stderr){
    if(error !== null){
        console.log('execFile error:' + error);
        console.log('execFile stderr:' + stderr);
    } else {
        console.info('当前目录内容:');
        console.info(stdout);
    }
});

console.info();
console.info('---child_process exec last---');

/*
---child_process exec last---


---child_process exec last---
execFile error:Error: spawn /bin/ls ENOENT
execFile stderr:

 */