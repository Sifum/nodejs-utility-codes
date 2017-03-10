console.info('---util inspect()---');
console.info();

var util = require('util');

function Person(){
    this.name = 'person';
    this.toString = function(){
        return this.name;
    }
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

//util.inspect()将对象转换为字符串
/*
---util inspect()---

Person { name: 'person', toString: [Function] }
Person {
  name: 'person',
  toString:
   { [Function]
     [length]: 0,
     [name]: '',
     [arguments]: null,
     [caller]: null,
     [prototype]: { [constructor]: [Circular] } } }

 */