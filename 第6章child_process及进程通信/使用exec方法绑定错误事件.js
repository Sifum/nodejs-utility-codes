console.info('---child_process exec std---');
console.info();

var exec = require('child_process').exec;
var child = exec('cat usage',function(error, stdout, stderr){
    console.info('cat usage.js stdout:');
    console.log(stdout);
    console.info('cat usage.js stderr:');
    console.log(stderr);
    if(error !== null){
        console.info('cat usage.js error:');
        console.log(error);
    }
});

console.info('---child_process exec std---');

/*
---child_process exec std---

---child_process exec std---
cat usage.js stdout:

cat usage.js stderr:
cat: usage: No such file or directory

cat usage.js error:
{ [Error: Command failed: cat usage
cat: usage: No such file or directory
] killed: false, code: 1, signal: null, cmd: 'cat usage' }

 */