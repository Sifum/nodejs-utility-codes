console.info('---OS release()---');
console.info();

var os = require('os');
var type = os.type();
console.info('操作系统类型：' + type);
console.info();
var release = os.release();
console.info('操作系统发型版本：' + release);

console.info();
console.info('---OS release()---');

/*
---OS release()---

操作系统类型：Windows_NT

操作系统发型版本：6.1.7601

---OS release()---


 */