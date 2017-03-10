//文件系统模块提供了fs.write(),fs.writeSync()完成功能增强的写文件。
console.info('---fs writeFileSync()--');
console.info();

var file_path = 'txt/writeSync.txt';
var fs = require('fs');

fs.open(file_path, 'w', function(err, fd){
    if(err){
        throw err;
    } else {
        console.log('fs.open() done.');
        console.info();
        var file_contents_pre = fs.readFileSync(file_path, 'utf-8');
        console.info('read txt/writeSync.txt contents:');
        console.info(file_contents_pre);
        console.log('fs.readFileSync() Done.');
        console.info();
        console.info('write to txt/writeSync.txt.');
        var buf = new Buffer('fs.writeSync(fd,buffer,offset,length[,position])\n');
        var len_buf = fs.writeSync(fd, buf, 0, buf.length, 0); //写文件
        console.log('fs.writeSync() Done');
        console.info();
        console.log('写入数据的字节数：' + len_buf);
        console.info();
        var file_contents_suf = fs.readFileSync(file_path, 'utf-8');//读文件
        console.info('read txt/writeSync.txt contents:');
        console.info(file_contents_suf);
        console.info('fs.readFileSync() Done');
        console.info();

        fs.close(fd, function(err){
            if(err){
                throw err;
            } else {
                console.log('fs.close() Done.');
                console.info();
            }
        })
    }
})

/*
---fs writeFileSync()--

fs.open() done.

read txt/writeSync.txt contents:

fs.readFileSync() Done.

write to txt/writeSync.txt.
fs.writeSync() Done

写入数据的字节数：49

read txt/writeSync.txt contents:
fs.writeSync(fd,buffer,offset,length[,position])

fs.readFileSync() Done

fs.close() Done.

 */