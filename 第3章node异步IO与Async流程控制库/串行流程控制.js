//串行流程控制就是指串行执行一个函数数组中的每个函数，且需要每一个函数执行完成之后才能执行下一个函数，series函数
console.info("---- node异步编程:Async series(串行流程控制)！-----");

console.info();

var async = require('async');
async.series({
    one:function(callback){
        callback(null, 'hello');
    },
    two:function(callback){
        callback(null, 'async');
    },
    three:function(callback){
        callback(null, 'series');
    }
},function(err, results){
    console.log(results);
});

console.info();
console.info("---- node异步编程:Async series(串行流程控制)！-----");

//series(tasks, callback);
//tasks可以是一个数组也可以是一个JSON对象；第二个参数是一个回调函数