console.info('---child_process exec usage---');
console.info();

var exec = require('child_process').exec;
var child = exec('cat spawn.js',function(error, stdout, stderr){
    console.info('cat spawn.js stdout:');
    console.log(stdout);
})

console.info('---child_process exec usage---');

/*
---child_process exec usage---

---child_process exec usage---
cat spawn.js stdout:
console.info('---child_process spawn usage---');
console.info();

var spawn = require('child_process').spawn;
var ls_var = spawn('ls', ['-lh', '/var']);

ls_var.stdout.on('data', function(data){
    console.log('stdout:' + data);
});

console.info('---child_process spawn usage---');

 */