console.info('---child_process exec last---');
console.info();

var exec = require('child_process').exec;
var last = exec('last|wc -l');

last.stdout.on('data', function(data){
    console.log('系统登录次数统计：' + data);
});

last.on('exit', function(code){
    console.log('子进程已关闭，代码：' + code);
})

console.info();
console.info('---child_process exec last---');
