console.info('---child_process spawn pid---');
console.info();

var spawn = require('child_process').spawn;
var grep_node = spawn('grep',['node']);
//调用系统命令grep
console.log('Spawn child pid of node:' + grep_node.pid);
grep_node.stdin.end();
console.info();

var grep_top = spawn('grep', ['top']);
console.log('Spawn child pid of top:' + grep_top.pid);
grep_top.stdin.end();
console.info();

var grep_ssh = spawn('grep', ['ssh']);
console.log('Spawn child pid of ssh:' + grep_ssh.pid);
grep_ssh.stdin.end();

console.info();
console.info('---child_process spawn pid---');

/*
---child_process spawn pid---

Spawn child pid of node:5320

Spawn child pid of top:5212

Spawn child pid of ssh:3692

---child_process spawn pid---

 */