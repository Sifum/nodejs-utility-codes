console.log('---util isError()---');
console.info();

var util = require('util');

console.log(util.inspect(util.isError(new Error())));
console.log(util.inspect(util.isError(new TypeError())));
console.log(util.inspect(util.isError({
    name: 'Error',
    message: 'an error occurred'
})));

//util.isError(object);判断给定的对象是否为错误类型
/*
---util isError()---

true
true
false

 */