console.log('----util isArray---');
console.info();

var util = require('util');

console.log(util.inspect(util.isArray([])));
console.log(util.inspect(util.isArray(new Array)));
console.log(util.inspect(util.isArray({})));

//util.isArray(object);判断给定的对象是否为数组类型
/*
----util isArray---

true
true
false

 */