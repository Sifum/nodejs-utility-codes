//本例使用stream模块的Readable类创建可读流
console.info('----stream readable pipe push---');
console.info();

var stream = require('stream');
var rs = new stream.Readable;  //定义Readable对象
rs.push('Stream');   //使用push()方法发送数据
rs.push('Readable');
rs.push('Push()');
rs.push('Pipe()');
rs.push('\n');
rs.push('end line');
rs.push(null);   //通知发送数据完毕，必要结尾
rs.pipe(process.stdout);   //使用pipe()方法到处数据

/*
----stream readable pipe push---

StreamReadablePush()Pipe()

 */