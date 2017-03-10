//queue函数是一个加强版的parallel函数，是一个串行的消息队列，通过限制了worker数量，不再一次性全部执行。
console.log('--Nodejs编程:Async queue--');
console.info();
var async = require('async');

//定义个queue，设worker数量为2
var q = async.queue(function(task, callback){
    console.log('worker is processing task:', task.name);
    callback();
}, 2);

//加入五个任务
q.push({name: 'foo'}, function(err){
    console.log('finished processing foo');
});

q.push({name: 'bar'}, function(err){
    console.log('finished processing bar');
});

q.push({name: 'cap'}, function(err){
    console.log('finished processing cap');
});

q.push({name: 'egg'}, function(err){
    console.log('finished processing egg');
});

q.push({name: 'app'}, function(err){
    console.log('finished processing app');
});

//当最后一个任务交给worker时，将调用该函数
q.empty = function(){
    console.log('no more tasks waiting');
}

//当所有任务都执行完后，将调用该函数
q.drain = function(){
    console.log('all tasks have been processed');
}

//queue(worker, concurrency);第一个参数是执行任务的回调函数形式，当使用push方法加入新任务时，将调用worker来执行；第二个为同时执行任务的数量