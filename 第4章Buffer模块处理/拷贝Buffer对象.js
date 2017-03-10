//buf.copy(targetBuffer, [targetStart],[sourceStart],[sourceEnd]);targetStart和sourceStart默认为0，sourceEnd默认buffer.length
console.info('--Buffer copy--');
console.info();

var buf1 = new Buffer(26);
var buf2 = new Buffer(26);

for(var i = 0; i < 26; i++)
{
    buf1[i] = i +97;  //97是ASCII 'a'
    buf2[i] = 35;  //ASCII#
}

buf1.copy(buf2, 6, 0, 10);
console.log(buf2.toString('ascii', 0, 25));
console.log();

var buf = new Buffer(26);
for(var i = 0; i < 26; i++)
{
    buf[i] = i + 97;
}

console.info(buf.toString());
console.log();
buf.copy(buf, 0, 6, 10);
console.log(buf.toString());
console.info();
console.info('--Buffer copy--');

/*
--Buffer copy--

######abcdefghij#########

abcdefghijklmnopqrstuvwxyz

ghijefghijklmnopqrstuvwxyz

--Buffer copy--
 */