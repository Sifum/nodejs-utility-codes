console.info('---OS mem()---');
console.info();

var os = require('os');
var totalmem = os.totalmem();
console.info('操作系统内存总量为：' + totalmem + ' byte.');
console.info('操作系统内存总量为：' + parseInt(totalmem / 1024 /1024) + 'Mb.');
console.info();
var freemem = os.freemem();
console.info('操作系统空闲内存为：' + freemem + 'byte.');
console.info('操作系统空闲内存为：' + parseInt(freemem / 1024 /1024) + 'Mb.');

console.info();
console.info('---OS mem()---');

/*
---OS mem()---

操作系统内存总量为：3451543552 byte.
操作系统内存总量为：3291Mb.

操作系统空闲内存为：1455542272byte.
操作系统空闲内存为：1388Mb.

---OS mem()---

 */