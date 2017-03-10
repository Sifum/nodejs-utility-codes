//错误与警告提示
var fs = require('fs');
var file = './error.txt';
var encoding = 'UTF-8';
fs.readFile(file, encoding, function(err, data){
    if(err){
        console.error('error--%s', err);
        console.warn('warn--%s', err);
    }else{
        console.log(data);
    }
})

//重定向错误输出流：node file.js 2> error.log
//如果file.js运行出错，会在当前文件中的error.log文件输出错误信息