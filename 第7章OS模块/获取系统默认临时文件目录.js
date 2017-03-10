console.info('---OS tmpdir()---');
console.info();

var os = require('os');
var type = os.type();
var tmpdir = os.tmpdir();
console.log('当前' + type + '系统临时目录：' + tmpdir);

console.info();
console.info('---OS tmpdir()---');

/*
---OS tmpdir()---

当前Windows_NT系统临时目录：C:\Users\ADMINI~1\AppData\Local\Temp

---OS tmpdir()---

 */