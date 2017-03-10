//定义并初始化一个对象
var buffer16 = new Buffer([0x6e, 0x6f, 0x64, 0x65, 0x6a, 0x73]); //数组形式
console.log('The variable buffer16 length is ' + buffer16.length + '.');
console.log('The variable buffer16 is ' + buffer16 + '.');

for(var i = 0; i < buffer16.length; i++){
    console.log('buffer16[' + i +']' + buffer16[i]);
    console.log('buffer16[' + i +'].toString is ' + buffer16[i].toString());
}

console.log(buffer16.toString('utf8'));
console.log(buffer16.toString('hex'));

//定义并初始化一个对象
var bufferUTF8 = new Buffer('nodejs', 'utf8'); //编码形式
console.log('The variable bufferUTF8 length is ' + bufferUTF8.length + '.');
console.log('The variable bufferUTF8 is ' + bufferUTF8 + '.');

for(var i = 0; i < bufferUTF8.length; i++){
    console.log('bufferUTF8[' + i +']' + bufferUTF8[i]);
    console.log('bufferUTF8[' + i +'].toString is ' + bufferUTF8[i].toString());
}

console.log(bufferUTF8.toString('utf8'));
console.log(bufferUTF8.toString('hex'));

/*
官方推荐定义方法：
new Buffer(array);
对象长度：
buf.length;

buf.toString([encoding][,start][,end]);默认是utf8
官方提到的几种编码方式：
ascii, utf8, utf161e, base64, binary, hex
*/