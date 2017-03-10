//文件系统模块提供了fs.mkdir(),fs.rmdir()和fs.mkdirSync(),fs.rmdirSync()来完成创建与删除目录的操作
console.info('---fs realpathSync()--');
console.info();

var fs = require('fs');
var mkdirsync = 'dir/mkdirsync';
fs.mkdirSync(mkdirsync, 0777);
console.info('fs.mkdirSync() done!');
console.info();

var spawn = require('child_process').spawn;
var ls_dir_mkdir = spawn('ls', ['-lh', 'dir']);

ls_dir_mkdir.stdout.on('data', function(data){
    console.info('ls -lh /dir stdout:');
    console.log('stdout:' + data);
    console.info();
    fs.rmdirSync(mkdirsync);
    console.info('fs.mkdirSync() done!');
    var ls_dir_mkdir = spawn('ls', ['-lh', 'dir']);

    ls_dir_mkdir.stdout.on('data', function(data){
        console.info('ls -lh /dir stdout:');
        console.log('stdout:' + data);
        console.info();
    });

    ls_dir_mkdir.on('error', function(code){
        console.log('child process error with code' + code);
        console.info();
    });

    ls_dir_mkdir.on('close', function(code){
        console.log('child process closed with code' + code);
        console.info();
    });
});

ls_dir_mkdir.on('error', function(code){
    console.log('child process error with code' + code);
    console.info();
});

ls_dir_mkdir.on('close', function(code){
    console.log('child process closed with code' + code);
    console.info();
});

console.info();
