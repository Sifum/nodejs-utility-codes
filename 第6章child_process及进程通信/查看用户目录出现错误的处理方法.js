console.info('---child_process spawn lserr---');
console.info();

var spawn = require('child_process').spawn;
var ls_err = spawn('ls', ['-lh', '/err']);

ls_err.stderr.on('data', function(data){
    console.log('stderr:' + data);
});

ls_err.on('error', function(code){
    console.log('child process closed with code ' + code);
});

ls_err.on('close', function(code){
    console.log('child process closed with code ' + code);
});

ls_err.on('exit', function(code){
    console.log('child process exited with code ' + code);
});

console.info('---child_process spawn lserr---');

/*
---child_process spawn lserr---

---child_process spawn lserr---
stderr:ls: cannot access /err: No such file or directory

child process exited with code 2
child process closed with code 2

 */