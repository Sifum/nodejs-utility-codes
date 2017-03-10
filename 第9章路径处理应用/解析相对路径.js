//解析相对路径
console.info('--path relative()--');
console.info();

var path = require('path');
console.info('current working directory:');
console.info(process.cwd());
console.info();

var path_a = 'relative.js';
console.info('path.resolve("relative.js") is:');
var path_resolve_a = path.resolve(path_a);
console.info(path_resolve_a);
console.info();

var path_b = 'test';
var path_c = 'test.txt';
console.info('path.resolve("test", "test.txt") is:');
var path_resolve_b = path.resolve(path_b, path_c);
console.info('The relative path is:' + path.relative(path_resolve_a, path_resolve_b));
console.info();

/*
--path relative()--

current working directory:
F:\demo\things

path.resolve("relative.js") is:
F:\demo\things\relative.js

path.resolve("test", "test.txt") is:
The relative path is:..\test\test.txt

 */