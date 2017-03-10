//对象转字符串buf.toString(encoding[,start][,end])
console.log('--Buffer toString--');
console.log();

var buf = new Buffer(26);

for(var i = 0; i < 26; i++)
{
    buf[i] = i + 97;
}

console.info('buf.toString(ascii):' + buf.toString('ascii'));
console.info();

console.info('buf.toString(ascii,0,5):' + buf.toString('ascii', 0, 5));
console.info();

console.info('buf.toString(utf8,0,8):' + buf.toString('utf8', 0, 8));
console.info();

console.info('buf.toString(hex,0,8):' + buf.toString('hex', 0, 8));
console.info();

console.info('buf.toString(undefined,0,18):' + buf.toString('undefined', 0, 18));
console.info();

console.log('--Buffer toString--');

/*
输出：
--Buffer toString--

buf.toString(ascii):abcdefghijklmnopqrstuvwxyz

buf.toString(ascii,0,5):abcde

buf.toString(utf8,0,8):abcdefgh

buf.toString(hex,0,8):6162636465666768

buffer.js:381
          throw new TypeError('Unknown encoding: ' + encoding);
          ^

TypeError: Unknown encoding: undefined
    at Buffer.slowToString (buffer.js:381:17)
    at Buffer.toString (buffer.js:394:27)
    at Object.<anonymous> (F:\demo\things\app.js:23:52)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Function.Module.runMain (module.js:447:10)
    at startup (node.js:141:18)
    at node.js:933:3
*/