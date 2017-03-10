//文件系统模块提供了fs.watch(),fs.watchFile()完成监控文件的操作，但针对不同的系统平台使用起来不是很稳定。
console.info('---fs watchFile()--');
console.info();

var file_path = 'txt/watchFile.txt';
var fs = require('fs');
fs.watchFile(file_path, function(curr, pre){
    console.log('the current mtime is:' + curr.mtime);
    console.log('the previous mtime was:' + prev.mtime);

    fs.watch(file_path, function(event, filename){
        console.log('the event is:' + event);
        console.log('the filename is:' + filename);
    })
})

/*
fs.watch(filename, [options], [listener]);
fs.watchFile(filename, [options], listener);
 */