//buf.slice([start][,end]);
console.info('--Buffer slice--');
console.info();

var buf = new Buffer(26);
for(var i = 0; i < 26; i++)
{
    buf[i] = i + 97;
}

var buf_slice_a = buf.slice(0, 5);
console.log(buf_slice_a.toString('ascii', 0, buf_slice_a.length));

for(var j = 0; j < 26; j++)
{
    buf[j] = 122 - j;
}
var buf_slice_b = buf.slice(0, 5);
console.log(buf_slice_b.toString('ascii', 0, buf_slice_b.length));

console.log();
console.log('--Buffer slice--');

/*
输出：
--Buffer slice--

abcde
zyxwv

--Buffer slice--
*/