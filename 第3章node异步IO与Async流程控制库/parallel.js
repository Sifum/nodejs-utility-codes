//parallel()函数是指并行多个函数，且每个函数都是立即执行，不需要等待其他函数执行。
console.log('-----Nodejs编程:Async parallel-----');
console.log();
var async = require('async');

async.parallel([
    function(callback){
        setTimeout(function(){
            callback(null, 'one');
        }, 2000)
    },
    function(callback){
        setTimeout(function(){
            callback(null, 'two');
        }, 1000)
    }  
    ], function(err, results){
        console.log(results);
});

console.log();
console.log('-----Nodejs编程:Async parallel-----');

//parallel(tasks, [callback]);第一个参数可以是一个数组或者JSON对象