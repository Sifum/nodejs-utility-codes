//console.trace()会打印当前位置的栈，并跟踪到标准错误输出流（process.stderr）
//console.trace()和assert.ok()方法相同
console.trace();
console.trace('start');
var fs = require('fs');
var file = 'file.txt';
var encoding = 'UTF-8';
fs.readFile(file, encoding, function(err, data){
    console.trace('fs-start');
    if(err){
        console.error('error--%s', err);
        console.warn('warn--%s', err);
    }else{
        console.log(data);
    }
    console.trace('fs-end');
})

console.trace('end');

/*输出如下：

Trace
    at Object.<anonymous> (F:\demo\things\app.js:1:71)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Function.Module.runMain (module.js:447:10)
    at startup (node.js:141:18)
    at node.js:933:3
Trace: start
    at Object.<anonymous> (F:\demo\things\app.js:2:9)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Function.Module.runMain (module.js:447:10)
    at startup (node.js:141:18)
    at node.js:933:3
Trace: end
    at Object.<anonymous> (F:\demo\things\app.js:17:9)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Function.Module.runMain (module.js:447:10)
    at startup (node.js:141:18)
    at node.js:933:3
Trace: fs-start
    at ReadFileContext.callback (F:\demo\things\app.js:7:13)
    at FSReqWrap.readFileAfterOpen [as oncomplete] (fs.js:324:13)
error--Error: ENOENT: no such file or directory, open 'F:\demo\things\file.txt'
warn--Error: ENOENT: no such file or directory, open 'F:\demo\things\file.txt'
Trace: fs-end
    at ReadFileContext.callback (F:\demo\things\app.js:14:13)
    at FSReqWrap.readFileAfterOpen [as oncomplete] (fs.js:324:13)
*/