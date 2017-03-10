//获取路径中文件扩展名
console.info('--path extname()--');
console.info();

var path = require('path');
var path_a = 'test';
var path_b = 'test.txt';
var path_resolve = path.resolve(path_a, path_b);
console.info('path.resolve("test", "test.txt") is:');
console.info(path_resolve);
console.info();

console.info('path.extname("test.txt") is:');
console.info(path.extname(path_resolve));
console.info();

/*
--path extname()--

path.resolve("test", "test.txt") is:
F:\demo\things\test\test.txt

path.extname("test.txt") is:
.txt

 */