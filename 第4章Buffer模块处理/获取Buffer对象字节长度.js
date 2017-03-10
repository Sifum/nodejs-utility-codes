//Buffer.byteLength(string[,encoding]);默认utf8
console.info('--Buffer.byteLength()--');
console.info();
str = '\u00bd + \u00bc = \u00be';

console.log(str + ":" + str.length + " characters," + Buffer.byteLength(str, 'utf8') + " bytes");
console.info();
console.info('--Buffer.byteLength()--');

/*
输出：
--Buffer.byteLength()--

½ + ¼ = ¾:9 characters,12 bytes

--Buffer.byteLength()--
*/