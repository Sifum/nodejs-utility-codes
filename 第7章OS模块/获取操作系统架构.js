console.info('---OS arch()---');
console.info();

var os = require('os');
var platform = os.platform();
console.info('操作系统平台：' + platform);
var arch = os.arch();
console.info('操作系统架构：' + arch);

console.info();
console.info('---OS arch()---');

/*
---OS arch()---

操作系统平台：win32
操作系统架构：ia32

---OS arch()---

 */