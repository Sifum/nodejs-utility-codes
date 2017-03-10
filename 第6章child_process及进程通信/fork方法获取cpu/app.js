//本例通过fork()方法创建子进程来调用系统OS模块
console.info('---child_process fork usage---');
console.info();

var fork = require('child_process').fork;

var cpus = require('os').cpus();
console.info('当前及其CPU内核数量：' + cpus.length);
//获取CPU内核数量
for(var i = 0; i < cpus; i++){
    console.log('Fork a new child_process now...');
    fork('./worker.js');  //生成新子进程
}

console.info();
console.info('---child_process fork usage---');

/*
---child_process fork usage---

当前及其CPU内核数量：2

---child_process fork usage---

 */