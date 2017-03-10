console.log('---util isRegExp()---');
console.info();

var util = require('util');

console.log(util.inspect(util.isRegExp(/some regexp/)));
console.log(util.inspect(util.isRegExp(new RegExp('another regexp'))));
console.log(util.inspect(util.isRegExp({})));

//util.isRegExp(object);判断给定的对象是否为正则表达式
/*
---util isRegExp()---

true
true
false

 */