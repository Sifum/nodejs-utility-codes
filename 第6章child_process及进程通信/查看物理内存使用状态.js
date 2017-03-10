console.info('---child_process spawn free---');
console.info();

var spawn = require('child_process').spawn;
var free = spawn('free', ['-m']);

free.stdout.on('data', function(data){
    console.log('标准输出:' + data);
});

free.stderr.on('data', function(data){
    console.log('标准错误输出:' + data);
});

free.on('exit', function(code, signal){
    console.log('子进程已退出，代码：' + code);
});

console.info('---child_process spawn free---');
