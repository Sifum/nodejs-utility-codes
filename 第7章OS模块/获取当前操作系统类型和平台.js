console.info('---OS type()& platform()---');
console.info();

var os = require('os');
var type = os.type();
console.info('当前操作系统类型为：' + type);
console.info();
var platform = os.platform();
console.info('当前操作系统平台为：' + platform);
console.info();

console.info('---OS type()& platform()---');

/*
---OS type()& platfor()---

当前操作系统类型为：Windows_NT

当前操作系统平台为：win32

---OS type()& platfor()---

 */