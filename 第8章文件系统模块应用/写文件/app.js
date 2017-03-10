//文件系统模块提供了fs.writeFile(),fs.writeFileSync()完成写文件的操作。
console.info('---fs writeFileSync()--');
console.info();

var file_path = 'txt/writeFileSync.txt';
var fs = require('fs');
if(fs.existsSync(file_path)){  //判断文件是否存在
    var file_contents_pre = fs.readFileSync(file_path, 'utf-8'); //读文件
    console.info('read txt/writeFileSync.txt contents:');
    console.info(file_contents_pre); //打印内容
    console.log('fs.readFileSync() Done.');
    console.info();
    console.info('write to txt/writeFileSync.txt:');
    fs.writeFileSync(file_path, 'fs.writeFileSync'); //写文件，第二个参数是写入内容
    console.info('fs.writeFileSync() Done');
    console.info();
    var file_contents_suf = fs.readFileSync(file_path, 'utf-8');  //读文件
    console.info('read txt/writeFileSync.txt contents:');
    console.info(file_contents_suf);
    console.log('fs.readFileSync() Done');
    console.info();
} else {
    console.log(file_path + 'is not exists.');
    console.info();
}
