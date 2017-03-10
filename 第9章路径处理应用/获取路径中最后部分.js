//获取路径中最后部分
console.info('--path basename()--');
console.info();

var path = require('path');
var path_a = 'test';
var path_b = 'test.txt';
var path_resolve = path.resolve(path_a, path_b);
console.info('path.resolve("test", "test.txt") is:');
console.info(path_resolve);
console.info();

console.info('path.extname("test.txt") is:');
var path_extname = path.extname(path_resolve);
console.info(path_extname);
console.info();

console.info('path.basename("test.txt",".txt") is:');
var path_basename = path.basename(path_resolve, path_extname);
console.info(path_basename);
console.info();

console.info('path.basename("test.txt","st.txt") is:');
var path_basename_st = path.basename(path_resolve, "st.txt");
console.info(path_basename_st);
console.info();

console.info('path.basename("test.txt","test.txt") is:');
var path_basename_test = path.basename(path_resolve, "test.txt");
console.info('variable path_basename_test is:' + path_basename_test);
console.info();

/*
--path basename()--

path.resolve("test", "test.txt") is:
F:\demo\things\test\test.txt

path.extname("test.txt") is:
.txt

path.basename("test.txt",".txt") is:
test

path.basename("test.txt","st.txt") is:
te

path.basename("test.txt","test.txt") is:
variable path_basename_test is:


 */