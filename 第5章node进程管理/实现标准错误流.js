//process.stderr.write()实现标准错误流，使用setTimeout方法主要是控制错误信息在正常信息输出之后才输出到控制台
console.info('---Process stderr---');
console.info();
var fs = require('fs');
var file = 'err.txt';
var encoding = 'UTF-8';
fs.readFile(file, encoding, function(err, data){
    if(err)
    {
        setTimeout(function(){
            process.stderr.write('err:' + err + '\n');
        }, 1000);
    }else{
        console.log(data);
    }
});

console.info();
console.info('---Process stderr---');