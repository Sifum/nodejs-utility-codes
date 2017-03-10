console.log('----Nodejs编程:Async whilst----');
console.info();
var async = require('async');
var count = 0;

var list = [
   {name: 'Jack', age: 20},
   {name: 'Luck', age: 18},
   {name: 'Jack', age: 20},
   {name: 'Lucy', age: 18},
   {name: 'Lucy', age: 18}
];
async.whilst(
   function(){
      return count < 5;
   },
   function(callback){
      console.log(count);
      list[count].age += 1;
      count++;
      setTimeout(callback, 1000);
   },
   function(err){
      console.log(count);
      console.log(list);
   }
);
console.info();
console.info('----Nodejs编程:Async whilst----');

//whilst(test, fn, callback):test是一个返回布尔值结果的函数，来决定循环是否继续，fn参数是要异步执行的操作，每次fn执行完毕后才能进入下一次循环；callback参数是whilst()函数执行完后的回调函数。

/*
输出：
----Nodejs编程:Async whilst----

0

----Nodejs编程:Async whilst----
1
2
3
4
5
[ { name: 'Jack', age: 21 },
  { name: 'Luck', age: 19 },
  { name: 'Jack', age: 21 },
  { name: 'Lucy', age: 19 },
  { name: 'Lucy', age: 19 } ]

 */