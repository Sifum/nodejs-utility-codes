//buffer.concat(list,[totalLength]);list参数是数组类型，Buffer数组
console.info('--Buffer concat--');
console.info();

var buf = new Buffer('this is Buffer concat test!');
var str = 'this is string concat test!';

console.time('buffer concat test!');
var list = [];
var len = 100000 * buf.length;
for(var i = 0; i < 100000; i++)
{
    list.push(buf);
    len += buf.length;
}

var s1 = Buffer.concat(list, len).toString();
console.timeEnd('buffer concat test!');

console.info();
console.time('string concat test!');

var list = [];
for(var i = 100000; i >= 0; i--)
{
    list.push(str);
}

var s2 = list.join("");
console.timeEnd('string concat test!');

console.info();
console.info('--Buffer concat--');

/*
输出：
--Buffer concat--

buffer concat test!: 52.876ms

string concat test!: 15.088ms

--Buffer concat--
 */