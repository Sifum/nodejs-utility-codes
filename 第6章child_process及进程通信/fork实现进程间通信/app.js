//
console.info('---child_process fork main---');
console.info();

var cp = require('child_process');
var n = cp.fork('sub.js');  //fork调用文件创建子进程
//绑定message事件，在该进程接受子进程模块发来的信息时被触发。
n.on('message', function(m){
    console.log('PARENT got message:', m);
});

n.send({main:'sub'}); //发送信息

console.info();
console.info('---child_process fork main---');


/*
---child_process fork main---


---child_process fork main---
---child_process fork sub---


PARENT got message: { sub: 'main' }
CHILD got message: { main: 'sub' }

 */