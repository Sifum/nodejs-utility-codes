//parallelLimit()函数和parallel()函数相似，只是多了一个limit，限制任务只能同时并发一定的数量。
console.log('-----Nodejs编程:Async parallelLimit-----');
console.log();
var async = require('async');

async.parallelLimit([
   function(callback){
    setTimeout(function(){
        callback(null, 'one');
    }, 1000);
   },
   function(callback){
    setTimeout(function(){
        callback(null, 'two');
    }, 1000);
   }
], 1, function(err, results){
    console.log(results);
});

console.info();
console.log('-----Nodejs编程:Async parallelLimit-----');

//parallelLimit(tasks, limit, [callback]);