//解析绝对路径
console.info('--path resolve()--');
console.info();

var path = require('path');
console.info('current working directory:');
console.info(process.cwd());
console.info();
var path_a = 'resolve.js';
console.info('path.resolve("resolve.js") is:');
console.info(path.resolve(path_a));
console.info();
var path_b = 'test';
var path_c = 'test.txt';
console.info('path.resolve("test", "test.txt") is:');
console.info(path.resolve(path_b, path_c));
console.info();

/*
--path resolve()--

current working directory:
F:\demo\things

path.resolve("resolve.js") is:
F:\demo\things\resolve.js

path.resolve("test", "test.txt") is:
F:\demo\things\test\test.txt

 */