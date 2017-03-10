//path.join()必须使用字符串。
console.log('--path join()--');
console.log();

var path = require('path');
var path_a = 'home';
var path_b = 'king';
var path_c = 'webstorm.js';
console.log('path.join("home", "king", "webstorm.js" is:' + path.join(path_a, path_b, path_c));
console.info();
var path_d = 'home';
var path_e = 'king';
console.info('path.join("home",{},"king") is:' + path.join(path_d, {}, path_e));
//程序这里会抛出异常，因为第二个参数{}使用了非字符串。
console.info();

/*
--path join()--

path.join("home", "king", "webstorm.js" is:home\king\webstorm.js

path.js:7
    throw new TypeError('Path must be a string. Received ' + inspect(path));
    ^

TypeError: Path must be a string. Received {}
    at assertPath (path.js:7:11)
    at Object.join (path.js:494:7)
    at Object.<anonymous> (F:\demo\things\app.js:12:55)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Function.Module.runMain (module.js:447:10)
    at startup (node.js:141:18)
    at node.js:933:3


 */