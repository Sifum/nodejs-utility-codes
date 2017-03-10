console.info('---child_process spawn std---');
console.info();

var cp = require('child_process');
var cat = cp.spawn('cat');

cat.stdout.on('data', function(d){
    console.log(d.toString());
});

cat.on('exit', function(){
    console.log('cat on exit!');
});

cat.on('close', function(){
    console.log('cat on close!');
});
cat.stdin.write('cat on data!');
cat.stdin.end();

console.info('---child_process spawn std---');

/*
---child_process spawn std---

---child_process spawn std---
cat on data!
cat on exit!
cat on close!
*/