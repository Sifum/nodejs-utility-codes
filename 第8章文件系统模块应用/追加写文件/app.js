//文件系统模块提供了fs.appendFile(),fs.appendFileSync()完成追加写入文件的操作。
console.info('---fs writeFileSync()--');
console.info();

var file_path = 'txt/appendFileSync.txt';
var fs = require('fs');

if(fs.existsSync(file_path)){
    var file_contents_pre = fs.readFileSync(file_path, 'utf-8'); //读文件
    console.info('read txt/appendFileSync.txt contents:');
    console.info(file_contents_pre);
    console.log('fs.readFileSync() Done.');
    console.info();
    console.info('write to txt/appendFileSync.txt:');
    fs.writeFileSync(file_path, 'fs.appendFileSync(filename, data[,options])\n'); //写文件
    console.log('fs.writeFileSync() Done.');
    console.info();

    var file_contents_suf = fs.readFileSync(file_path, 'utf-8'); //读文件
    console.info('read txt/appendFileSync.txt contents:');
    console.info(file_contents_suf);
    console.log('fs.readFileSync() Done.');
    console.info();
    fs.appendFileSync(file_path, 'add filename to appendFileSync.txt \n');  //追加写入文件
    console.log('fs.appendFileSync() Done');
    console.info();

    var file_contents_add = fs.readFileSync(file_path, 'utf-8'); //读文件
    console.info('read txt/appendFileSync.txt contents:');
    console.info(file_contents_add);
    console.log('fs.readFileSync() Done.');
    console.info();
} else {
    console.log(file_path + 'is not exists.');
    console.info();
}

/*
---fs writeFileSync()--

read txt/appendFileSync.txt contents:
fs.appendFileSync(filename, data[,options])

fs.readFileSync() Done.

write to txt/appendFileSync.txt:
fs.writeFileSync() Done.

read txt/appendFileSync.txt contents:
fs.appendFileSync(filename, data[,options])

fs.readFileSync() Done.

fs.appendFileSync() Done

read txt/appendFileSync.txt contents:
fs.appendFileSync(filename, data[,options])
add filename to appendFileSync.txt

fs.readFileSync() Done.


 */