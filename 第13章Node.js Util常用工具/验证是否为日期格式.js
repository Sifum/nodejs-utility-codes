console.log('---util isDate()---');
console.info();

var util = require('util');

console.log(util.inspect(util.isDate(new Date())));
console.log(util.inspect(util.isDate(Date())));
console.log(util.inspect(util.isDate({})));

//util.isDate(object);判断给定的对象是否为日期格式类型
/*
---util isDate()---

true
false
false

 */