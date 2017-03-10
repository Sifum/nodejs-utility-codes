var buffer = new Buffer('This is a buffer', 'utf8');
console.log('The variable buffer\' length is ' + buffer.length);
console.log('The variable buffer is ' + buffer);

var buffer16 = new Buffer(16);
//分配一个新的buffer大小是16的8位字节
console.log('The variable buffer16\' length is ' + buffer16.length);
console.log('The variable buffer16 is ' + buffer16);
buffer16.write('This is Buffer', 0, 'utf8');
console.log('The variable buffer16\' length is ' + buffer16.length);
console.log('The variable buffer16 is ' + buffer16);

/*
buffer.write(string,[offset],[length],[encoding]);
string:要写入Buffer的数据
*/
/*输出：
The variable buffer' length is 16
The variable buffer is This is a buffer
The variable buffer16' length is 16
The variable buffer16 is ╔`╔
The variable buffer16' length is 16
The variable buffer16 is This is Buffer
*/