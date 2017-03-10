//获取文件夹路径
console.info('--path dirname()--');
console.info();

var path = require('path');
var path_a = 'test';
var path_b = 'test.txt';
var path_resolve = path.resolve(path_a, path_b);
console.info('path.resolve("test", "test.txt") is:');
console.info(path_resolve);
console.info();

console.info('The file test.txt dirname is:');
console.info(path.dirname(path_resolve));
console.info();

/*
--path dirname()--

path.resolve("test", "test.txt") is:
F:\demo\things\test\test.txt

The file test.txt dirname is:
F:\demo\things\test

 */