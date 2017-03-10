console.info('Node.js-readline.write()Usage');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.write('Delete me!Wait for 10 seconds...');
var timeoutLength = 10 * 1000;
var setout = setTimeout(function(){
    rl.write('撤销', {ctrl:true, name:'u'});
}, timeoutLength);

//readline.write(data, [key]);第一个参数data的内容写入到控制台标准输出流，参数key是一个代表键序列的对象，如这里用ctrl+u实现撤销上一步操作的功能,在10秒内按ctrl+u直接撤销计时。