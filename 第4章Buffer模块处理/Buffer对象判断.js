//Buffer.isBuffer(obj);Buffer对象判断
//Buffer.isEncoding();来判断是否为有效的编码
console.log('--Buffer.isBuffer()--');
console.info();
var buffer = new Buffer('nodejs', 'utf8');

if(Buffer.isBuffer(buffer))
{
    console.info('The buffer is a Buffer obj.');
}
else
{
    console.info('The buffer is not a Buffer obj.');
}
var str = 'nodejs';

if(Buffer.isBuffer(str))
{
    console.info('The str is a Buffer obj.');
}
else
{
    console.info('The str is not a Buffer obj.');
}

console.log();
console.log('--Buffer.isBuffer()--');

/*
--Buffer.isBuffer()--

The buffer is a Buffer obj.
The str is not a Buffer obj.

--Buffer.isBuffer()--
*/