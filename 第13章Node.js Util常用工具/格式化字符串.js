console.log('---util format()---');
console.info();

var util = require('util');

console.log(util.format('%s:%s', 'foo'));
console.log(util.format('$s:%s', 'foo', 'bar', 'baz'));
console.log(util.format(1,2,3));

//util.format(format, [...]);
/*
%j JSON
%% 单独一个%
%d 数字
 */
/*
---util format()---

foo:%s
$s:foo bar baz
1 2 3

 */