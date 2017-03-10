console.info('---child_process spawn usage---');
console.info();

var spawn = require('child_process').spawn;
var ls_var = spawn('ls', ['-lh', '/var']);

ls_var.stdout.on('data', function(data){
    console.log('stdout:' + data);
});

console.info('---child_process spawn usage---');