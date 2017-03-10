//waterfall()函数和series()函数在功能上很多相似，不同之处是通过waterfall()函数产生的值，都将传给下一个函数。
console.log('------Nodejs异步编程：Async waterfall');
console.log();
var async = require('async');

async.waterfall([
    function(callback){
        console.log("第一个函数的数据是1");
        callback(null, 1);
    },
    function(data, callback){
        console.info("上一个函数传过来的值："+data);
        callback('test', 2); //当回调函数的第一个参数为非空值时，waterfall会停止执行剩余任务
    },
    function(data, callback){
        console.info("上一个函数传过来的值："+data);
        callback(null, 3);       
    }
],function(err, results){
    console.log(results);
});

console.log();
console.log('------Nodejs异步编程：Async waterfall');

//waterfall(tasks, [callback]);第一个参数是一个数组对象