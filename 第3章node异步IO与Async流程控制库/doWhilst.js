console.info('---Nodejs编程：Async doWhilst--');
console.info();
var async = require('async');
var count = 0;

var list = [
   {name: 'Jack', age: 20},
   {name: 'Lucy', age: 18},
   {name: 'Jack', age: 20},
   {name: 'Lucy', age: 18},
   {name: 'Lucy', age: 18},
];

async.doWhilst(
   function(callback){
    console.log(count);
    list[count].age += 1;
    count++;
    setTimeout(callback, 1000);
   },
   function(){return count < 5;},
   function(err){
     console.log(list);
   }
);
console.info();
console.info('---Nodejs编程：Async doWhilst--');

//doWhilst(fn, test, callback):相当于do...while语句，相比whilst()函数，doWhilst函数交换了fn和test的参数位置。