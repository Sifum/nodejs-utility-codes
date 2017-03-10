console.info('---child_process spawn ls---');
console.info();

var spawn = require('child_process').spawn;
var ls_var = spawn('ls', ['-lh', '/usr']);

ls_var.stdout.on('data', function(data){
    console.log('stdout:' + data);
});

ls_var.on('error', function(code){
    console.log('child process closed with code ' + code);
});

ls_var.on('exit', function(code){
    console.log('child process exited with code ' + code);
})

console.info('---child_process spawn ls---');

/*
---child_process spawn ls---

---child_process spawn ls---
stdout:total 88K
drwxr-xr-x 1 Administrator 197121 0 一月 12 20:44 bin
drwxr-xr-x 1 Administrator 197121 0 一月 12 20:44 lib
drwxr-xr-x 1 Administrator 197121 0 一月 12 20:43 libexec
drwxr-xr-x 1 Administrator 197121 0 一月 12 20:44 share
drwxr-xr-x 1 Administrator 197121 0 一月 12 20:44 ssl

child process exited with code 0

 */